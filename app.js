/**
 * TÜRKMENISTANYŇ GADYMY WE MUKADDES ZYÝARAT ÝERLERI
 * Interactive Tourist & Pilgrim Heritage Map
 */

(function () {
  'use strict';

  // --- STATE ---
  const state = {
    currentLang: 'tk',
    activeTab: 'sites', // 'sites', 'routes', 'favorites'
    searchQuery: '',
    selectedProvince: 'all',
    selectedCategory: 'all',
    favorites: new Set(),
    activeSite: null,
    activeRoute: null,
    currentGalleryIndex: 0,
    currentMapLayer: 'standard',
    isSpeaking: false
  };

  // --- MAP & LAYERS ---
  let map = null;
  let markersLayer = null;
  let routesLayer = null;
  const tileLayers = {};

  // --- ICONS MAP BY CATEGORY ---
  const CATEGORY_COLORS = {
    unesco: '#d4a373',
    shrine: '#0e8388',
    mausoleum: '#3a86ff',
    fortress: '#c2593f',
    caravanserai: '#e09f3e',
    natural: '#2a9d8f'
  };

  const CATEGORY_SVGS = {
    unesco: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z"/></svg>`,
    shrine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>`,
    mausoleum: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3c-4 0-7 3-7 7v11h14V10c0-4-3-7-7-7z"/><path d="M10 21v-5a2 2 0 0 1 4 0v5"/><line x1="12" y1="3" x2="12" y2="1"/></svg>`,
    fortress: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l3-2v3l4-3 4 3V5l3 2v14M9 21v-4a3 3 0 0 1 6 0v4"/></svg>`,
    caravanserai: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="10" y1="4" x2="10" y2="20"/></svg>`,
    natural: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`
  };

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    loadFavorites();
    initMap();
    initEventListeners();
    updateUIForLanguage();
    renderMarkers();
    renderSidebarContent();
  });

  // --- FAVORITES LOCAL STORAGE ---
  function loadFavorites() {
    try {
      const stored = localStorage.getItem('tm_heritage_favs');
      if (stored) {
        state.favorites = new Set(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem('tm_heritage_favs', JSON.stringify(Array.from(state.favorites)));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  function toggleFavorite(siteId) {
    const isFav = state.favorites.has(siteId);
    if (isFav) {
      state.favorites.delete(siteId);
      showToast(I18N[state.currentLang].removedFromFavorites);
    } else {
      state.favorites.add(siteId);
      showToast(I18N[state.currentLang].addedToFavorites);
    }
    saveFavorites();
    renderSidebarContent();
    updateModalFavButton();
  }

  // --- MAP INITIALIZATION ---
  function initMap() {
    // Turkmenistan coordinates center
    map = L.map('map', {
      center: [39.0, 59.2],
      zoom: 6.5,
      zoomControl: false
    });

    // Zoom control at bottom right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Real Google Maps & Yandex Maps Tile Layers
    // 1. Google Maps Streets (Hakyky Google Karta)
    tileLayers.google_streets = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['0', '1', '2', '3'],
      attribution: '&copy; Google Maps'
    });

    // 2. Google Maps Hybrid (Hakyky Google Hemra/Satellite + Ýazgylar)
    tileLayers.google_hybrid = L.tileLayer('https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['0', '1', '2', '3'],
      attribution: '&copy; Google Maps Satellite'
    });

    // 3. Google Maps Terrain (Hakyky Google Releýf)
    tileLayers.google_terrain = L.tileLayer('https://mt{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['0', '1', '2', '3'],
      attribution: '&copy; Google Maps Terrain'
    });

    // 4. Yandex Maps (Hakyky Ýandeks Karta)
    tileLayers.yandex = L.tileLayer('https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&scale=1&lang=ru_RU', {
      maxZoom: 19,
      attribution: '&copy; Yandex Maps'
    });

    // Default to Google Streets
    tileLayers.google_streets.addTo(map);
    state.currentMapLayer = 'google_streets';

    // Marker & Route Layer Groups
    markersLayer = L.layerGroup().addTo(map);
    routesLayer = L.layerGroup().addTo(map);
  }

  // --- FALLBACK PLACEHOLDER IMAGE ---
  function getFallbackImage(title, category) {
    const color = CATEGORY_COLORS[category] || '#d4a373';
    const cleanTitle = (title || 'Türkmenistan').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23111827"/><stop offset="100%" stop-color="%231f2937"/></linearGradient></defs><rect fill="url(%23g)" width="600" height="340"/><circle cx="300" cy="130" r="75" fill="${encodeURIComponent(color)}" opacity="0.15"/><path d="M300 65 L340 125 L260 125 Z" fill="${encodeURIComponent(color)}" opacity="0.85"/><circle cx="300" cy="142" r="10" fill="%230e8388"/><rect x="296" y="160" width="8" height="30" rx="4" fill="${encodeURIComponent(color)}"/><text x="50%" y="250" text-anchor="middle" fill="%23fefae0" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="20" font-weight="bold">${cleanTitle}</text><text x="50%" y="280" text-anchor="middle" fill="${encodeURIComponent(color)}" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="600" letter-spacing="2">TÜRKMENISTAN MIRASY</text></svg>`;
  }

  // --- MARKERS GENERATION ---
  function createCustomMarkerIcon(site) {
    const color = CATEGORY_COLORS[site.category] || '#d4a373';
    const svgInner = CATEGORY_SVGS[site.category] || '';
    const isActive = state.activeSite && state.activeSite.id === site.id;

    const html = `
      <div class="custom-map-pin ${isActive ? 'active' : ''}" data-site-id="${site.id}">
        <div class="pin-icon-wrap" style="background: ${color};">
          <div class="pin-inner-svg">${svgInner}</div>
        </div>
      </div>
    `;

    return L.divIcon({
      className: 'leaflet-custom-div-icon',
      html: html,
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38]
    });
  }

  function renderMarkers() {
    markersLayer.clearLayers();

    const filtered = getFilteredSites();

    filtered.forEach(site => {
      const icon = createCustomMarkerIcon(site);
      const marker = L.marker(site.coords, { icon: icon });

      // Build custom popup with Google Navigator button
      const lang = state.currentLang;
      const fallback = getFallbackImage(site.title[lang], site.category);
      const googleNavUrl = `https://www.google.com/maps/dir/?api=1&destination=${site.coords[0]},${site.coords[1]}&travelmode=driving`;
      const popupHtml = `
        <div class="popup-card">
          <img src="${site.images[0]}" alt="${site.title[lang]}" class="popup-card-img" onerror="this.onerror=null; this.src='${fallback}';" />
          <div class="popup-card-body">
            <h4 class="popup-title">${site.title[lang]}</h4>
            <div class="popup-era">${site.era[lang]}</div>
            <p class="popup-desc">${site.shortDesc[lang]}</p>
            <div class="popup-nav-row">
              <button class="popup-detail-btn" onclick="window.appOpenSiteModal('${site.id}')">
                ${I18N[lang].detailsBtn}
              </button>
              <a href="${googleNavUrl}" target="_blank" rel="noopener noreferrer" class="popup-google-btn" title="Google Navigator (Awtoulag)">
                🚗 Google Nav
              </a>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 280 });
      marker.on('click', () => {
        highlightSite(site.id, false);
      });

      markersLayer.addLayer(marker);
    });
  }

  // --- FILTERING LOGIC ---
  function getFilteredSites() {
    return SITES_DATA.filter(site => {
      // Province match
      if (state.selectedProvince !== 'all' && site.province !== state.selectedProvince) {
        return false;
      }

      // Category match
      if (state.selectedCategory !== 'all' && site.category !== state.selectedCategory) {
        return false;
      }

      // Search match
      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase().trim();
        const lang = state.currentLang;
        const inTitle = site.title[lang].toLowerCase().includes(q) ||
                        site.title.tk.toLowerCase().includes(q) ||
                        site.title.en.toLowerCase().includes(q);
        const inDesc = site.fullDesc[lang].toLowerCase().includes(q) ||
                       site.shortDesc[lang].toLowerCase().includes(q);
        const inEra = site.era[lang].toLowerCase().includes(q);
        const inTips = site.visitingTips[lang].toLowerCase().includes(q);

        if (!inTitle && !inDesc && !inEra && !inTips) {
          return false;
        }
      }

      // Favorites tab filter
      if (state.activeTab === 'favorites' && !state.favorites.has(site.id)) {
        return false;
      }

      return true;
    });
  }

  // --- SIDEBAR CONTENT RENDERING ---
  function renderSidebarContent() {
    const listContainer = document.getElementById('sidebarContentList');
    listContainer.innerHTML = '';

    if (state.activeTab === 'routes') {
      renderRoutesList(listContainer);
      return;
    }

    const filtered = getFilteredSites();
    const lang = state.currentLang;

    // Update site count stat
    const countText = `${filtered.length} ${I18N[lang].totalSitesCount || 'ýer'}`;
    document.getElementById('siteCountStat').textContent = countText;

    // Update mobile floating list label
    const floatLabel = document.getElementById('mobileFloatingListLabel');
    if (floatLabel) {
      floatLabel.textContent = `${I18N[lang].mobileFloatingList || 'Sanawy görkez'} (${filtered.length})`;
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          <p>${I18N[lang].noResults}</p>
        </div>
      `;
      return;
    }

    filtered.forEach(site => {
      const isFav = state.favorites.has(site.id);
      const isSelected = state.activeSite && state.activeSite.id === site.id;
      const catLabel = I18N[lang][`cat_${site.category}`] || site.category;
      const provLabel = I18N[lang][site.province] || site.province;
      const fallback = getFallbackImage(site.title[lang], site.category);

      const card = document.createElement('div');
      card.className = `site-card ${isSelected ? 'selected' : ''}`;
      card.setAttribute('data-id', site.id);

      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${site.images[0]}" alt="${site.title[lang]}" loading="lazy" onerror="this.onerror=null; this.src='${fallback}';" />
          <div class="card-badges-overlay">
            <span class="badge-tag">${catLabel}</span>
            <button class="fav-btn-inline ${isFav ? 'favorited' : ''}" title="${I18N[lang].favoritesTab}" data-fav-id="${site.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="card-info">
          <h3 class="card-title">${site.title[lang]}</h3>
          <div class="card-meta">
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              ${provLabel}
            </span>
            <span>•</span>
            <span>${site.era[lang]}</span>
          </div>
          <p class="card-desc">${site.shortDesc[lang]}</p>
          <div class="card-actions">
            <button class="card-btn card-btn-primary" data-action="details" data-id="${site.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              ${I18N[lang].detailsBtn}
            </button>
            <button class="card-btn card-btn-secondary" data-action="locate" data-id="${site.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="12 8 8 12 12 16 12 8"></polygon>
              </svg>
              ${I18N[lang].viewOnMap}
            </button>
            <button class="card-btn card-btn-drive" data-action="drive" data-id="${site.id}" title="Google Navigator (Awtoulagda barmak)">
              🚗 Nav
            </button>
          </div>
        </div>
      `;

      // Event listeners on card
      card.addEventListener('click', (e) => {
        // Prevent action if favorite button clicked
        const favBtn = e.target.closest('.fav-btn-inline');
        if (favBtn) {
          e.stopPropagation();
          toggleFavorite(site.id);
          return;
        }

        const actionDrive = e.target.closest('[data-action="drive"]');
        if (actionDrive) {
          e.stopPropagation();
          const googleNavUrl = `https://www.google.com/maps/dir/?api=1&destination=${site.coords[0]},${site.coords[1]}&travelmode=driving`;
          window.open(googleNavUrl, '_blank');
          return;
        }

        const actionLocate = e.target.closest('[data-action="locate"]');
        if (actionLocate) {
          e.stopPropagation();
          highlightSite(site.id, true);
          return;
        }

        openSiteDetailModal(site);
      });

      listContainer.appendChild(card);
    });
  }

  // --- REAL HIGHWAY ROAD NETWORK OF TURKMENISTAN ---
  // Key arterial corridors: M37 (Trans-Turkmenistan), Ashgabat-Dashoguz Karakum Highway,
  // Amudarya / Kerki / Koytendag, Sarahs, Dehistan, and Balkan Canyons
  const HIGHWAY_NODES = {
    // M37 Arterial Corridor (West to East)
    turkmenbashi: { name: 'Türkmenbaşy', coords: [40.0231, 52.9692] },
    awaza: { name: 'Awaza', coords: [39.9582, 52.8594] },
    jangy: { name: 'Jangy', coords: [39.8150, 53.6420] },
    balkanabat: { name: 'Balkanabat', coords: [39.5120, 54.3680] },
    gumdag_cross: { name: 'Gumdag çatrygy', coords: [39.3800, 54.8900] },
    bereket: { name: 'Bereket (Gazanjyk)', coords: [39.2430, 55.5150] },
    serdar: { name: 'Serdar (Gyzylarbat)', coords: [38.9760, 56.2750] },
    paraw_turn: { name: 'Paraw Bibi ýoly', coords: [38.9400, 56.4000] },
    bamy: { name: 'Bamy', coords: [38.7100, 56.7600] },
    arvaz: { name: 'Arwaz', coords: [38.5200, 57.1400] },
    baherden: { name: 'Bäherden (Kow-Ata)', coords: [38.4360, 57.4320] },
    gokdepe: { name: 'Gökdepe', coords: [38.1580, 57.9620] },
    ashgabat_west: { name: 'Aşgabat Günbatar', coords: [38.0100, 58.2600] },
    ashgabat_center: { name: 'Aşgabat Merkez', coords: [37.9500, 58.3833] },
    anau: { name: 'Änew', coords: [37.8967, 58.5333] },
    yasman_salyk: { name: 'Ýasman-Salyk', coords: [37.6200, 59.0400] },
    kaahka_abiwerd: { name: 'Kaka (Abiwerd)', coords: [37.2889, 59.5667] },
    dushak: { name: 'Duşak', coords: [37.1850, 59.9920] },
    tejen: { name: 'Tejen', coords: [37.3833, 60.5050] },
    hanhowuz: { name: 'Hanhowuz', coords: [37.4500, 61.2200] },
    mary: { name: 'Mary', coords: [37.5958, 61.8289] },
    bairamaly_merv: { name: 'Baýramaly (Gadymy Merw)', coords: [37.6160, 62.1700] },
    uchajy: { name: 'Uçajy', coords: [38.0100, 62.7800] },
    ravnina: { name: 'Rawnina', coords: [38.4500, 63.1800] },
    turkmenabat: { name: 'Türkmenabat', coords: [39.0833, 63.5833] },
    farap: { name: 'Farap', coords: [39.1700, 63.6300] },

    // Sarahs Branch (South from Dushak/Tejen)
    sarahs_mid: { name: 'Sarahs ýoly', coords: [36.8500, 60.7500] },
    sarahs_town: { name: 'Sarahs', coords: [36.5333, 61.2167] },

    // Amudarya / Kerki / Koytendag Branch (South from Turkmenabat)
    sakar: { name: 'Sakar', coords: [38.9200, 63.7000] },
    sayat: { name: 'Saýat', coords: [38.7800, 63.8800] },
    halach: { name: 'Halaç', coords: [38.0800, 64.8700] },
    kerki: { name: 'Kerki', coords: [37.8333, 65.2000] },
    magdanly: { name: 'Magdanly', coords: [37.8100, 66.0500] },
    koytendag_base: { name: 'Köýtendag (Kyrk Gyz)', coords: [37.8600, 66.5300] },

    // Central Karakum North Highway (Ashgabat to Dashoguz)
    ashgabat_north: { name: 'Aşgabat Demirgazyk', coords: [38.0500, 58.4200] },
    ovadandepe: { name: 'Owadandepe', coords: [38.2800, 58.4800] },
    bokurdak: { name: 'Bokurdak', coords: [38.7400, 58.5300] },
    erbent: { name: 'Erbent', coords: [39.3100, 58.6000] },
    darvaza_junction: { name: 'Derweze çatrygy', coords: [40.2200, 58.4200] },
    shasenem: { name: 'Şasenem', coords: [41.2500, 58.8500] },
    kunya_urgench: { name: 'Köneürgenç', coords: [42.3300, 59.1500] },
    dashoguz_west: { name: 'Daşoguz Günbatar', coords: [41.9500, 59.6000] },
    dashoguz_city: { name: 'Daşoguz', coords: [41.8333, 59.9667] },
    ysmamyt_turn: { name: 'Ysmamyt Ata ýoly', coords: [41.7400, 60.0500] },

    // Balkan Canyons / Yangykala & Gozli Ata
    oglanly_turn: { name: 'Oglanly', coords: [39.6800, 54.4500] },
    gozli_ata_junction: { name: 'Gözli Ata ýoly', coords: [40.3200, 54.4900] },
    yangykala_junction: { name: 'Ýangygala ýoly', coords: [40.4600, 54.9500] },

    // Southwestern Dehistan
    madaw: { name: 'Madaý', coords: [38.2500, 54.8000] },
    dehistan_site: { name: 'Dehistan (Misrian)', coords: [38.2694, 54.6194] }
  };

  const HIGHWAY_ADJACENCY = {
    // M37 Highway chain
    awaza: ['turkmenbashi'],
    turkmenbashi: ['awaza', 'jangy', 'gozli_ata_junction'],
    jangy: ['turkmenbashi', 'balkanabat'],
    balkanabat: ['jangy', 'gumdag_cross', 'oglanly_turn'],
    gumdag_cross: ['balkanabat', 'bereket'],
    bereket: ['gumdag_cross', 'serdar'],
    serdar: ['bereket', 'paraw_turn', 'madaw'],
    paraw_turn: ['serdar', 'bamy'],
    bamy: ['paraw_turn', 'arvaz'],
    arvaz: ['bamy', 'baherden'],
    baherden: ['arvaz', 'gokdepe'],
    gokdepe: ['baherden', 'ashgabat_west'],
    ashgabat_west: ['gokdepe', 'ashgabat_center'],
    ashgabat_center: ['ashgabat_west', 'anau', 'ashgabat_north'],
    anau: ['ashgabat_center', 'yasman_salyk'],
    yasman_salyk: ['anau', 'kaahka_abiwerd'],
    kaahka_abiwerd: ['yasman_salyk', 'dushak'],
    dushak: ['kaahka_abiwerd', 'tejen', 'sarahs_mid'],
    tejen: ['dushak', 'hanhowuz'],
    hanhowuz: ['tejen', 'mary'],
    mary: ['hanhowuz', 'bairamaly_merv'],
    bairamaly_merv: ['mary', 'uchajy'],
    uchajy: ['bairamaly_merv', 'ravnina'],
    ravnina: ['uchajy', 'turkmenabat'],
    turkmenabat: ['ravnina', 'farap', 'sakar'],
    farap: ['turkmenabat'],

    // Sarahs
    sarahs_mid: ['dushak', 'sarahs_town'],
    sarahs_town: ['sarahs_mid'],

    // Kerki / Koytendag
    sakar: ['turkmenabat', 'sayat'],
    sayat: ['sakar', 'halach'],
    halach: ['sayat', 'kerki'],
    kerki: ['halach', 'magdanly'],
    magdanly: ['kerki', 'koytendag_base'],
    koytendag_base: ['magdanly'],

    // Karakum Highway
    ashgabat_north: ['ashgabat_center', 'ovadandepe'],
    ovadandepe: ['ashgabat_north', 'bokurdak'],
    bokurdak: ['ovadandepe', 'erbent'],
    erbent: ['bokurdak', 'darvaza_junction'],
    darvaza_junction: ['erbent', 'shasenem'],
    shasenem: ['darvaza_junction', 'kunya_urgench'],
    kunya_urgench: ['shasenem', 'dashoguz_west'],
    dashoguz_west: ['kunya_urgench', 'dashoguz_city'],
    dashoguz_city: ['dashoguz_west', 'ysmamyt_turn'],
    ysmamyt_turn: ['dashoguz_city'],

    // Balkan Canyons
    oglanly_turn: ['balkanabat', 'gozli_ata_junction'],
    gozli_ata_junction: ['oglanly_turn', 'yangykala_junction', 'turkmenbashi'],
    yangykala_junction: ['gozli_ata_junction'],

    // Dehistan
    madaw: ['serdar', 'dehistan_site'],
    dehistan_site: ['madaw']
  };

  // Road distance helper (Haversine formula in km)
  function haversineDistanceKm(coord1, coord2) {
    const R = 6371;
    const dLat = (coord2[0] - coord1[0]) * Math.PI / 180;
    const dLon = (coord2[1] - coord1[1]) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(coord1[0] * Math.PI / 180) * Math.cos(coord2[0] * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  // Find closest highway node to any given coordinate
  function findNearestHighwayNode(coord) {
    let nearestKey = null;
    let minDist = Infinity;
    for (const [key, node] of Object.entries(HIGHWAY_NODES)) {
      const d = haversineDistanceKm(coord, node.coords);
      if (d < minDist) {
        minDist = d;
        nearestKey = key;
      }
    }
    return nearestKey;
  }

  // BFS shortest path on highway graph
  function findHighwayPath(startNodeKey, endNodeKey) {
    if (startNodeKey === endNodeKey) return [startNodeKey];
    const queue = [[startNodeKey]];
    const visited = new Set([startNodeKey]);

    while (queue.length > 0) {
      const path = queue.shift();
      const node = path[path.length - 1];
      const neighbors = HIGHWAY_ADJACENCY[node] || [];

      for (const n of neighbors) {
        if (n === endNodeKey) {
          return [...path, n];
        }
        if (!visited.has(n)) {
          visited.add(n);
          queue.push([...path, n]);
        }
      }
    }
    return [startNodeKey, endNodeKey];
  }

  // Build highway corridor path with realistic distance, time, and road name
  function buildCorridorRoute(originCoords, destCoords) {
    const startNodeKey = findNearestHighwayNode(originCoords);
    const endNodeKey = findNearestHighwayNode(destCoords);
    const nodeKeys = findHighwayPath(startNodeKey, endNodeKey);

    const latlngs = [];

    // Prepend origin if distinct from start node
    if (haversineDistanceKm(originCoords, HIGHWAY_NODES[startNodeKey].coords) > 0.5) {
      latlngs.push(originCoords);
    }

    // Add all highway waypoints
    nodeKeys.forEach(k => {
      latlngs.push(HIGHWAY_NODES[k].coords);
    });

    // Append destination if distinct from end node
    if (haversineDistanceKm(destCoords, HIGHWAY_NODES[endNodeKey].coords) > 0.5) {
      latlngs.push(destCoords);
    }

    // Calculate total road distance with curvature factor ~1.16
    let totalKm = 0;
    for (let i = 0; i < latlngs.length - 1; i++) {
      totalKm += haversineDistanceKm(latlngs[i], latlngs[i + 1]) * 1.16;
    }
    totalKm = Math.round(totalKm);

    // Calculate realistic drive time (avg ~80 km/h)
    const hours = Math.floor(totalKm / 80);
    const mins = Math.round((totalKm % 80) / 80 * 60);

    // Identify highway corridor name
    let highwayName = 'M37 Beýik Ýüpek ýoly trassasy';
    if (nodeKeys.some(k => ['erbent', 'darvaza_junction', 'shasenem', 'kunya_urgench'].includes(k))) {
      highwayName = 'Aşgabat — Daşoguz Garagum trassasy';
    } else if (nodeKeys.some(k => ['sarahs_mid', 'sarahs_town'].includes(k))) {
      highwayName = 'M37 & Duşak — Sarahs trassasy';
    } else if (nodeKeys.some(k => ['kerki', 'magdanly', 'koytendag_base'].includes(k))) {
      highwayName = 'Amu-derýa & Türkmenabat — Kerki — Köýtendag ýoly';
    } else if (nodeKeys.some(k => ['gozli_ata_junction', 'yangykala_junction'].includes(k))) {
      highwayName = 'Balkan kanyonlary & Gözli Ata ýoly';
    } else if (nodeKeys.some(k => ['dehistan_site', 'madaw'].includes(k))) {
      highwayName = 'Serdar — Madaý — Dehistan awtomobil ýoly';
    }

    return {
      coordinates: latlngs,
      distanceKm: totalKm,
      hours: hours,
      minutes: mins,
      highwayName: highwayName
    };
  }

  // Fetch real road route from OSRM driving API with graceful corridor fallback
  async function fetchDrivingRoute(originCoords, destCoords) {
    const fallback = buildCorridorRoute(originCoords, destCoords);
    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${originCoords[1]},${originCoords[0]};${destCoords[1]},${destCoords[0]}?overview=full&geometries=geojson`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const resp = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (resp.ok) {
        const data = await resp.json();
        if (data && data.routes && data.routes.length > 0) {
          const r = data.routes[0];
          // OSRM returns GeoJSON coordinates as [lng, lat] -> convert to [lat, lng]
          const latlngs = r.geometry.coordinates.map(c => [c[1], c[0]]);
          const distKm = Math.round(r.distance / 1000);
          const durMins = Math.round(r.duration / 60);
          const hrs = Math.floor(durMins / 60);
          const mins = durMins % 60;

          return {
            coordinates: latlngs,
            distanceKm: distKm,
            hours: hrs,
            minutes: mins,
            highwayName: fallback.highwayName
          };
        }
      }
    } catch (e) {
      console.log('OSRM routing fetch skipped or timed out, using high-precision highway corridor:', e.message);
    }
    return fallback;
  }

  // Map layer for active driving route
  let activeRoadLineOuter = null;
  let activeRoadLineInner = null;
  let activeRouteMarkers = [];

  function clearDrivingRoute() {
    if (activeRoadLineOuter && map.hasLayer(activeRoadLineOuter)) map.removeLayer(activeRoadLineOuter);
    if (activeRoadLineInner && map.hasLayer(activeRoadLineInner)) map.removeLayer(activeRoadLineInner);
    activeRouteMarkers.forEach(m => {
      if (map.hasLayer(m)) map.removeLayer(m);
    });
    activeRouteMarkers = [];
    routesLayer.clearLayers();
  }

  function drawDrivingRouteOnMap(latlngs, meta) {
    clearDrivingRoute();

    if (!latlngs || latlngs.length < 2) return;

    // Outer glow track
    activeRoadLineOuter = L.polyline(latlngs, {
      color: '#083344',
      weight: 9,
      opacity: 0.75,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Inner bright highway track
    activeRoadLineInner = L.polyline(latlngs, {
      color: meta.color || '#14919b',
      weight: 5,
      opacity: 0.95,
      dashArray: '10, 8',
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Start Marker (Car icon 🚗)
    const startCoord = latlngs[0];
    const startIcon = L.divIcon({
      className: 'leaflet-custom-div-icon',
      html: `
        <div style="background:#0e8388; color:#fff; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 14px rgba(0,0,0,0.6); border:2px solid #fff; font-size:18px;">
          🚗
        </div>
      `,
      iconSize: [34, 34],
      iconAnchor: [17, 17]
    });
    const startMarker = L.marker(startCoord, { icon: startIcon }).addTo(map);
    startMarker.bindPopup(`<b>${meta.startName || 'Başlangyç'}</b><br><span style="font-size:12px; color:#9ca3af;">Awtoulag ýolunyň başy</span>`);
    activeRouteMarkers.push(startMarker);

    // End Marker (Destination flag 🏁)
    const endCoord = latlngs[latlngs.length - 1];
    const endIcon = L.divIcon({
      className: 'leaflet-custom-div-icon',
      html: `
        <div style="background:#c2593f; color:#fff; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 14px rgba(0,0,0,0.6); border:2px solid #fff; font-size:18px;">
          🏁
        </div>
      `,
      iconSize: [34, 34],
      iconAnchor: [17, 17]
    });
    const endMarker = L.marker(endCoord, { icon: endIcon }).addTo(map);
    endMarker.bindPopup(`<b>${meta.destName || 'Menzil'}</b><br><span style="font-size:12px; color:#9ca3af;">Barmaly menzil</span>`);
    activeRouteMarkers.push(endMarker);

    // Smoothly fit bounds
    const bounds = L.latLngBounds(latlngs);
    map.fitBounds(bounds, {
      padding: [60, 60],
      maxZoom: 12
    });

    // Close mobile drawer so map is fully visible
    if (window.innerWidth <= 900) {
      document.getElementById('appSidebar').classList.remove('mobile-open');
      document.querySelectorAll('.mobile-bottom-nav .bottom-nav-btn').forEach(b => b.classList.remove('active'));
      const bMap = document.getElementById('bNavMap');
      if (bMap) bMap.classList.add('active');
      if (map) setTimeout(() => map.invalidateSize(), 300);
    }
  }

  // --- ROUTES TAB RENDERING ---
  function renderRoutesList(container) {
    const lang = state.currentLang;
    const dict = I18N[lang];

    container.innerHTML = '';

    // 1. ROUTE PLANNER BOX
    const plannerBox = document.createElement('div');
    plannerBox.className = 'route-planner-box';

    // Origin options HTML
    let originOptionsHtml = `
      <option value="gps">${dict.myLocationOption}</option>
      <optgroup label="${lang === 'ru' ? 'Города' : (lang === 'en' ? 'Major Cities' : 'Şäherler')}">
    `;
    START_HUBS.forEach(hub => {
      const isSelected = hub.id === 'hub_ashgabat' ? 'selected' : '';
      originOptionsHtml += `<option value="${hub.id}" ${isSelected}>${hub.name[lang]}</option>`;
    });
    originOptionsHtml += `</optgroup><optgroup label="${lang === 'ru' ? 'Исторические Места' : (lang === 'en' ? 'Historical Sites' : 'Taryhy Ýerler')}">`;
    SITES_DATA.forEach(s => {
      originOptionsHtml += `<option value="${s.id}">${s.title[lang]}</option>`;
    });
    originOptionsHtml += `</optgroup>`;

    // Destination options HTML (all 20 sites grouped by province)
    const provincesList = ['ahal', 'mary', 'dashoguz', 'balkan', 'lebap'];
    let destOptionsHtml = '';
    provincesList.forEach(prov => {
      const sitesInProv = SITES_DATA.filter(s => s.province === prov);
      if (sitesInProv.length > 0) {
        destOptionsHtml += `<optgroup label="${dict[prov]}">`;
        sitesInProv.forEach(s => {
          const isSelected = s.id === 'soltan-sanjar' ? 'selected' : '';
          destOptionsHtml += `<option value="${s.id}" ${isSelected}>${s.title[lang]}</option>`;
        });
        destOptionsHtml += `</optgroup>`;
      }
    });

    plannerBox.innerHTML = `
      <div class="planner-header">
        <div class="planner-icon">🚗</div>
        <div>
          <h3 class="planner-title">${dict.routePlannerHeading}</h3>
          <p class="planner-sub">${dict.routePlannerSubtitle}</p>
        </div>
      </div>
      <div class="planner-form">
        <div class="planner-field">
          <label class="planner-label" for="plannerOriginSelect">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            ${dict.startPointLabel}
          </label>
          <select id="plannerOriginSelect" class="planner-select">
            ${originOptionsHtml}
          </select>
        </div>

        <div class="planner-field">
          <label class="planner-label" for="plannerDestSelect">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            ${dict.destPointLabel}
          </label>
          <select id="plannerDestSelect" class="planner-select">
            ${destOptionsHtml}
          </select>
        </div>

        <button id="calcRoadRouteBtn" class="calc-route-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
          </svg>
          ${dict.calcRouteBtn}
        </button>
      </div>

      <!-- Result Card -->
      <div id="routeResultsPanel" class="route-results-panel" style="display:none;">
        <div class="result-stats-row">
          <div class="stat-chip">
            <span class="stat-chip-icon">🛣️</span>
            <div>
              <div class="stat-chip-val" id="resDistanceVal">-- km</div>
              <div class="stat-chip-lbl">${dict.routeDistance}</div>
            </div>
          </div>
          <div class="stat-chip">
            <span class="stat-chip-icon">⏱️</span>
            <div>
              <div class="stat-chip-val" id="resDurationVal">-- sagat</div>
              <div class="stat-chip-lbl">${dict.routeDurationDrive}</div>
            </div>
          </div>
        </div>

        <div class="highway-badge" id="resHighwayName">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
            <line x1="4" y1="22" x2="4" y2="15"></line>
          </svg>
          <span id="resHighwayText">M37 Beýik Ýüpek ýoly trassasy</span>
        </div>

        <div class="nav-launch-row">
          <a href="#" target="_blank" rel="noopener noreferrer" id="resGoogleNavBtn" class="nav-launch-google" title="Google Navigator (Turn-by-turn)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
            <span>${dict.openInGoogleNav}</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" id="resYandexNavBtn" class="nav-launch-yandex" title="Yandex Navigator">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
            </svg>
            <span>${dict.openInYandexNav}</span>
          </a>
        </div>
      </div>
    `;

    container.appendChild(plannerBox);

    // Wire Calculate Button
    const calcBtn = plannerBox.querySelector('#calcRoadRouteBtn');
    calcBtn.addEventListener('click', () => {
      const originVal = plannerBox.querySelector('#plannerOriginSelect').value;
      const destVal = plannerBox.querySelector('#plannerDestSelect').value;
      handleCalculateAndDrawRoute(originVal, destVal);
    });

    // 2. CURATED ROUTES SECTION
    const sectionHeading = document.createElement('div');
    sectionHeading.style.cssText = 'font-size:0.85rem; font-weight:700; color:var(--primary-sand); text-transform:uppercase; letter-spacing:1px; margin: 16px 0 6px 4px;';
    sectionHeading.textContent = dict.curatedRoutesHeading;
    container.appendChild(sectionHeading);

    ROUTES_DATA.forEach(route => {
      const card = document.createElement('div');
      card.className = 'route-card';

      const stopTitles = route.siteIds
        .map(id => SITES_DATA.find(s => s.id === id))
        .filter(Boolean)
        .map(s => s.title[lang]);

      const routeSites = route.siteIds
        .map(id => SITES_DATA.find(s => s.id === id))
        .filter(Boolean);

      // Build multi-point Google Navigator URL
      let googleMultiNavUrl = '#';
      if (routeSites.length >= 2) {
        const originCoord = routeSites[0].coords.join(',');
        const destCoord = routeSites[routeSites.length - 1].coords.join(',');
        const waypoints = routeSites.slice(1, -1).map(s => s.coords.join(',')).join('|');
        googleMultiNavUrl = `https://www.google.com/maps/dir/?api=1&origin=${originCoord}&destination=${destCoord}${waypoints ? '&waypoints=' + encodeURIComponent(waypoints) : ''}&travelmode=driving`;
      }

      card.innerHTML = `
        <div class="route-header">
          <h3 class="route-title">${route.name[lang]}</h3>
          <span class="route-duration">${route.duration[lang]}</span>
        </div>
        <div class="highway-badge" style="margin:2px 0;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          </svg>
          <span>${route.mainHighway[lang]} • ${route.distanceKm}</span>
        </div>
        <p class="route-desc">${route.description[lang]}</p>
        <div>
          <div style="font-size:0.75rem; color:var(--primary-sand); font-weight:600; margin-bottom:4px;">
            ${dict.routeStops}
          </div>
          <div class="route-stops-list">
            ${stopTitles.map(t => `<span class="route-stop-chip">${t}</span>`).join('')}
          </div>
        </div>
        <div class="route-actions-row">
          <button class="route-btn" data-route-id="${route.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            ${dict.calcRouteBtn}
          </button>
          <a href="${googleMultiNavUrl}" target="_blank" rel="noopener noreferrer" class="route-google-nav-btn" title="Google Navigator-da bütin ýoly aç">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
            Google Nav
          </a>
        </div>
      `;

      card.querySelector('.route-btn').addEventListener('click', () => {
        displayCuratedHighwayRoute(route);
      });

      container.appendChild(card);
    });
  }

  // Draw a curated route connecting all its stops along real automobile highways
  async function displayCuratedHighwayRoute(route) {
    const lang = state.currentLang;
    state.activeRoute = route;

    const routeSites = route.siteIds
      .map(id => SITES_DATA.find(s => s.id === id))
      .filter(Boolean);

    if (routeSites.length < 2) return;

    showToast(`${route.name[lang]} - ${I18N[lang].calculatingRoute}`);

    // Build multi-stop road polyline connecting each consecutive site along highways
    const fullRoadPolyline = [];
    for (let i = 0; i < routeSites.length - 1; i++) {
      const segment = await fetchDrivingRoute(routeSites[i].coords, routeSites[i + 1].coords);
      if (i === 0) {
        fullRoadPolyline.push(...segment.coordinates);
      } else {
        // Skip duplicate connecting point
        fullRoadPolyline.push(...segment.coordinates.slice(1));
      }
    }

    drawDrivingRouteOnMap(fullRoadPolyline, {
      color: route.color || '#d4a373',
      startName: routeSites[0].title[lang],
      destName: routeSites[routeSites.length - 1].title[lang]
    });

    showToast(`${route.name[lang]} - ${I18N[lang].viewOnMap}`);
  }

  // Handle route calculation and drawing for user selected points
  async function handleCalculateAndDrawRoute(originVal, destVal) {
    const lang = state.currentLang;
    const dict = I18N[lang];

    const destSite = SITES_DATA.find(s => s.id === destVal);
    if (!destSite) return;

    let originCoords = null;
    let originName = '';
    let isGps = false;

    if (originVal === 'gps') {
      isGps = true;
      if ('geolocation' in navigator) {
        try {
          const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 6000 });
          });
          originCoords = [pos.coords.latitude, pos.coords.longitude];
          originName = dict.myLocationOption;
        } catch (err) {
          console.warn('Geolocation unavailable, defaulting to Ashgabat:', err.message);
          originCoords = [37.9500, 58.3833];
          originName = 'Aşgabat (Paýtagt)';
          showToast('GPS elýeterli däl, başlangyç Aşgabat saýlandy.');
        }
      } else {
        originCoords = [37.9500, 58.3833];
        originName = 'Aşgabat (Paýtagt)';
      }
    } else if (originVal.startsWith('hub_')) {
      const hub = START_HUBS.find(h => h.id === originVal);
      if (hub) {
        originCoords = hub.coords;
        originName = hub.name[lang];
      }
    } else {
      const site = SITES_DATA.find(s => s.id === originVal);
      if (site) {
        originCoords = site.coords;
        originName = site.title[lang];
      }
    }

    if (!originCoords) {
      originCoords = [37.9500, 58.3833];
      originName = 'Aşgabat';
    }

    showToast(dict.calculatingRoute);

    const routeData = await fetchDrivingRoute(originCoords, destSite.coords);

    // Update Result Panel
    const resultsPanel = document.getElementById('routeResultsPanel');
    if (resultsPanel) {
      resultsPanel.style.display = 'flex';
      document.getElementById('resDistanceVal').textContent = `${routeData.distanceKm} km`;
      document.getElementById('resDurationVal').textContent =
        routeData.hours > 0 ? `${routeData.hours} sag ${routeData.minutes} min` : `${routeData.minutes} min`;
      document.getElementById('resHighwayText').textContent = routeData.highwayName;

      // Google Navigator Driving URL
      let googleNavUrl = '';
      if (isGps) {
        googleNavUrl = `https://www.google.com/maps/dir/?api=1&destination=${destSite.coords[0]},${destSite.coords[1]}&travelmode=driving`;
      } else {
        googleNavUrl = `https://www.google.com/maps/dir/?api=1&origin=${originCoords[0]},${originCoords[1]}&destination=${destSite.coords[0]},${destSite.coords[1]}&travelmode=driving`;
      }
      document.getElementById('resGoogleNavBtn').href = googleNavUrl;

      // Yandex Navigator URL
      const yandexNavUrl = `https://yandex.com/maps/?rtext=${originCoords[0]},${originCoords[1]}~${destSite.coords[0]},${destSite.coords[1]}&rtt=auto`;
      document.getElementById('resYandexNavBtn').href = yandexNavUrl;
    }

    // Draw on Google Maps
    drawDrivingRouteOnMap(routeData.coordinates, {
      color: '#14919b',
      startName: originName,
      destName: destSite.title[lang]
    });

    showToast(`${originName} ➔ ${destSite.title[lang]} (${routeData.distanceKm} km)`);
  }

  // --- HIGHLIGHT & FLY TO SITE ---
  function highlightSite(siteId, panTo = true) {
    const site = SITES_DATA.find(s => s.id === siteId);
    if (!site) return;

    state.activeSite = site;

    // Highlight card in sidebar
    document.querySelectorAll('.site-card').forEach(card => {
      if (card.getAttribute('data-id') === siteId) {
        card.classList.add('selected');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        card.classList.remove('selected');
      }
    });

    renderMarkers();

    if (panTo && map) {
      map.flyTo(site.coords, 10, {
        duration: 1.2
      });

      // On mobile close sidebar to view map and activate map tab in bottom nav
      if (window.innerWidth <= 900) {
        document.getElementById('appSidebar').classList.remove('mobile-open');
        document.querySelectorAll('.mobile-bottom-nav .bottom-nav-btn').forEach(b => b.classList.remove('active'));
        const bMap = document.getElementById('bNavMap');
        if (bMap) bMap.classList.add('active');
        if (map) setTimeout(() => map.invalidateSize(), 300);
      }
    }
  }

  // --- MODAL / DETAIL DRAWER ---
  function openSiteDetailModal(site) {
    state.activeSite = site;
    state.currentGalleryIndex = 0;

    const modal = document.getElementById('siteDetailModal');
    const lang = state.currentLang;

    // Title & image
    document.getElementById('modalTitle').textContent = site.title[lang];
    updateGalleryView(site);

    // Badges
    const badgesContainer = document.getElementById('modalBadges');
    badgesContainer.innerHTML = `
      <span class="badge-tag">${I18N[lang][`cat_${site.category}`] || site.category}</span>
      <span class="badge-tag">${I18N[lang][site.province] || site.province}</span>
    `;

    // Metadata
    document.getElementById('modalEraValue').textContent = site.era[lang];
    document.getElementById('modalProvinceValue').textContent = I18N[lang][site.province] || site.province;
    document.getElementById('modalCategoryValue').textContent = I18N[lang][`cat_${site.category}`] || site.category;

    // Text descriptions
    document.getElementById('modalFullDescription').textContent = site.fullDesc[lang];
    document.getElementById('modalVisitingTipsText').textContent = site.visitingTips[lang];
    document.getElementById('modalDressCodeText').textContent = site.dressCode[lang];

    // Google & Yandex Navigation buttons
    const googleBtn = document.getElementById('modalGoogleNavBtn');
    if (googleBtn) {
      googleBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${site.coords[0]},${site.coords[1]}&travelmode=driving`;
    }

    const yandexBtn = document.getElementById('modalYandexNavBtn');
    if (yandexBtn) {
      yandexBtn.href = `https://yandex.com/maps/?rtext=~${site.coords[0]},${site.coords[1]}&rtt=auto`;
    }

    // Update favorite button state
    updateModalFavButton();

    // Show modal
    modal.classList.add('open');
  }

  function updateGalleryView(site) {
    const imgElement = document.getElementById('modalImg');
    const prevBtn = document.getElementById('galleryPrevBtn');
    const nextBtn = document.getElementById('galleryNextBtn');
    const counterBadge = document.getElementById('galleryCounterBadge');
    const dotsContainer = document.getElementById('galleryDots');

    if (!site.images || site.images.length === 0) {
      imgElement.src = '';
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      if (counterBadge) counterBadge.style.display = 'none';
      if (dotsContainer) dotsContainer.innerHTML = '';
      return;
    }

    const fallback = getFallbackImage(site.title[state.currentLang], site.category);
    imgElement.onerror = function() {
      this.onerror = null;
      this.src = fallback;
    };
    imgElement.src = site.images[state.currentGalleryIndex];

    // Counter badge text
    if (counterBadge) {
      counterBadge.style.display = 'block';
      counterBadge.textContent = `${state.currentGalleryIndex + 1} / ${site.images.length}`;
    }

    // Dot navigation indicators
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      if (site.images.length > 1) {
        site.images.forEach((_, idx) => {
          const dot = document.createElement('div');
          dot.className = `gallery-dot ${idx === state.currentGalleryIndex ? 'active' : ''}`;
          dot.addEventListener('click', (e) => {
            e.stopPropagation();
            state.currentGalleryIndex = idx;
            updateGalleryView(site);
          });
          dotsContainer.appendChild(dot);
        });
      }
    }

    if (site.images.length > 1) {
      if (prevBtn) prevBtn.style.display = 'flex';
      if (nextBtn) nextBtn.style.display = 'flex';
    } else {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
    }
  }

  function updateModalFavButton() {
    if (!state.activeSite) return;
    const isFav = state.favorites.has(state.activeSite.id);
    const favBtn = document.getElementById('modalFavToggleBtn');
    const favLabel = document.getElementById('modalFavLabel');

    if (isFav) {
      favBtn.style.borderColor = 'var(--terracotta)';
      favBtn.style.color = '#ff8b73';
      favLabel.textContent = '★ ' + (I18N[state.currentLang].favoritesTab || 'Halandy');
    } else {
      favBtn.style.borderColor = '';
      favBtn.style.color = '';
      favLabel.textContent = I18N[state.currentLang].modalFavLabel || 'Hala';
    }
  }

  function closeModal() {
    const modal = document.getElementById('siteDetailModal');
    modal.classList.remove('open');
    stopSpeech();
  }

  // --- AUDIO READER (Speech Synthesis) ---
  function toggleSpeechNarration() {
    if (!('speechSynthesis' in window)) {
      showToast('Audio synthesiser brauzeriňizde elýeterli däl.');
      return;
    }

    if (state.isSpeaking) {
      stopSpeech();
      return;
    }

    if (!state.activeSite) return;

    const lang = state.currentLang;
    const textToRead = `${state.activeSite.title[lang]}. ${state.activeSite.shortDesc[lang]}. ${state.activeSite.fullDesc[lang]}`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    if (lang === 'en') utterance.lang = 'en-US';
    else if (lang === 'ru') utterance.lang = 'ru-RU';
    else utterance.lang = 'tr-TR'; // Closest fallback for Turkmen phonetics

    utterance.rate = 0.95;

    utterance.onend = () => {
      state.isSpeaking = false;
      updateAudioButtonState();
    };

    utterance.onerror = () => {
      state.isSpeaking = false;
      updateAudioButtonState();
    };

    window.speechSynthesis.speak(utterance);
    state.isSpeaking = true;
    updateAudioButtonState();
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    state.isSpeaking = false;
    updateAudioButtonState();
  }

  function updateAudioButtonState() {
    const btn = document.getElementById('modalAudioBtn');
    const label = document.getElementById('modalAudioLabel');
    if (!btn || !label) return;

    if (state.isSpeaking) {
      btn.style.background = 'var(--terracotta)';
      btn.style.borderColor = 'var(--terracotta)';
      label.textContent = 'Duralga';
    } else {
      btn.style.background = '';
      btn.style.borderColor = '';
      label.textContent = state.currentLang === 'ru' ? 'Слушать' : (state.currentLang === 'en' ? 'Listen' : 'Diňle');
    }
  }

  // --- UI LOCALIZATION ---
  function updateUIForLanguage() {
    const lang = state.currentLang;
    const dict = I18N[lang];
    if (!dict) return;

    // Header strings
    document.getElementById('headerMainTitle').childNodes[0].nodeValue = dict.siteTitle + ' ';
    document.getElementById('headerSubtitle').textContent = dict.siteSubtitle;

    // Tabs
    document.getElementById('tabSitesLabel').textContent = dict.sitesTab;
    document.getElementById('tabRoutesLabel').textContent = dict.routesTab;
    document.getElementById('tabFavoritesLabel').textContent = dict.favoritesTab;

    // Search input
    document.getElementById('siteSearchInput').placeholder = dict.searchPlaceholder;

    // Province filter dropdown options
    const provSelect = document.getElementById('provinceFilterSelect');
    provSelect.options[0].text = dict.allProvinces;
    provSelect.options[1].text = dict.ahal;
    provSelect.options[2].text = dict.mary;
    provSelect.options[3].text = dict.dashoguz;
    provSelect.options[4].text = dict.balkan;
    provSelect.options[5].text = dict.lebap;

    // Map layer buttons
    const layerGoogle = document.getElementById('layerGoogleBtn');
    if (layerGoogle) layerGoogle.textContent = dict.mapLayerGoogle;
    const layerSat = document.getElementById('layerSatelliteBtn');
    if (layerSat) layerSat.textContent = dict.mapLayerSatellite;
    const layerTerrain = document.getElementById('layerTerrainBtn');
    if (layerTerrain) layerTerrain.textContent = dict.mapLayerTerrain;
    const layerYandex = document.getElementById('layerYandexBtn');
    if (layerYandex) layerYandex.textContent = dict.mapLayerYandex;

    // Legend
    document.getElementById('legendHeading').textContent = dict.allCategories;
    document.getElementById('legUnesco').textContent = dict.cat_unesco;
    document.getElementById('legShrine').textContent = dict.cat_shrine;
    document.getElementById('legMausoleum').textContent = dict.cat_mausoleum;
    document.getElementById('legFortress').textContent = dict.cat_fortress;
    document.getElementById('legNatural').textContent = dict.cat_natural;

    // Modal labels
    document.getElementById('modalEraLabel').textContent = dict.eraLabel;
    document.getElementById('modalProvinceLabel').textContent = dict.provinceLabel;
    document.getElementById('modalCategoryLabel').textContent = dict.categoryLabel;
    document.getElementById('modalTipsHeading').textContent = dict.visitingTipsHeading;
    document.getElementById('modalDressHeading').textContent = dict.dressCodeHeading;
    document.getElementById('modalGoogleNavLabel').textContent = dict.navigateGoogle;
    const modalDriveRouteLabel = document.getElementById('modalDriveRouteLabel');
    if (modalDriveRouteLabel) modalDriveRouteLabel.textContent = dict.driveFromAshgabatBtn || 'Ýoluny çyz';
    const yandexNavLabel = document.getElementById('modalYandexNavLabel');
    if (yandexNavLabel) yandexNavLabel.textContent = dict.navigateYandex;
    document.getElementById('modalShareLabel').textContent = dict.share;

    // Category pills update
    const catPills = document.querySelectorAll('#categoryPillsContainer .cat-pill');
    catPills.forEach(pill => {
      const cat = pill.getAttribute('data-category');
      if (cat === 'all') pill.textContent = dict.allCategories;
      else if (dict[`cat_${cat}`]) pill.textContent = dict[`cat_${cat}`];
    });

    // Mobile Bottom Navigation Labels
    const bSites = document.getElementById('bNavSitesLabel');
    if (bSites) bSites.textContent = dict.bNavSites || 'Ýerler';
    const bRoutes = document.getElementById('bNavRoutesLabel');
    if (bRoutes) bRoutes.textContent = dict.bNavRoutes || 'Ýollar';
    const bFavs = document.getElementById('bNavFavsLabel');
    if (bFavs) bFavs.textContent = dict.bNavFavs || 'Halanan';
    const bMap = document.getElementById('bNavMapLabel');
    if (bMap) bMap.textContent = dict.bNavMap || 'Karta';

    // Mobile sidebar title
    const mobTitle = document.getElementById('sidebarMobileTitle');
    if (mobTitle) mobTitle.textContent = dict.siteTitle;

    // Re-render
    renderMarkers();
    renderSidebarContent();

    if (state.activeSite) {
      openSiteDetailModal(state.activeSite);
    }
  }

  // --- EVENT LISTENERS ---
  function initEventListeners() {
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentLang = btn.getAttribute('data-lang');
        updateUIForLanguage();
      });
    });

    // Sidebar tabs
    document.querySelectorAll('.sidebar-tabs .tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.sidebar-tabs .tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeTab = btn.getAttribute('data-tab');

        // Show/hide search filters based on tab
        const searchFilters = document.getElementById('searchFiltersContainer');
        if (state.activeTab === 'routes') {
          searchFilters.style.display = 'none';
        } else {
          searchFilters.style.display = 'flex';
        }

        renderSidebarContent();
      });
    });

    // Search input
    const searchInput = document.getElementById('siteSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (state.searchQuery) {
        clearSearchBtn.style.display = 'flex';
      } else {
        clearSearchBtn.style.display = 'none';
      }
      renderMarkers();
      renderSidebarContent();
    });

    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.style.display = 'none';
      renderMarkers();
      renderSidebarContent();
    });

    // Province filter
    const provinceSelect = document.getElementById('provinceFilterSelect');
    provinceSelect.addEventListener('change', (e) => {
      state.selectedProvince = e.target.value;
      renderMarkers();
      renderSidebarContent();
    });

    // Category pills
    document.querySelectorAll('#categoryPillsContainer .cat-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('#categoryPillsContainer .cat-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.selectedCategory = pill.getAttribute('data-category');
        renderMarkers();
        renderSidebarContent();
      });
    });

    // Reset filters
    document.getElementById('resetFiltersBtn').addEventListener('click', () => {
      state.selectedProvince = 'all';
      state.selectedCategory = 'all';
      state.searchQuery = '';
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      provinceSelect.value = 'all';
      document.querySelectorAll('#categoryPillsContainer .cat-pill').forEach(p => {
        if (p.getAttribute('data-category') === 'all') p.classList.add('active');
        else p.classList.remove('active');
      });
      renderMarkers();
      renderSidebarContent();
    });

    // Map layer buttons
    document.querySelectorAll('.map-layer-selector .layer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.map-layer-selector .layer-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const layerKey = btn.getAttribute('data-layer');
        if (tileLayers[layerKey]) {
          Object.values(tileLayers).forEach(l => map.removeLayer(l));
          tileLayers[layerKey].addTo(map);
          state.currentMapLayer = layerKey;
        }
      });
    });

    // Mobile sidebar toggle
    const mobileToggle = document.getElementById('mobileSidebarToggle');
    const sidebar = document.getElementById('appSidebar');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
      });
    }

    // Mobile Bottom Navigation Bar
    const bottomNavBtns = document.querySelectorAll('.mobile-bottom-nav .bottom-nav-btn');
    bottomNavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        const action = btn.getAttribute('data-action');

        if (action === 'toggle-map') {
          // Switch to full map view
          sidebar.classList.remove('mobile-open');
          bottomNavBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          if (map) {
            setTimeout(() => map.invalidateSize(), 300);
          }
          return;
        }

        if (tab) {
          // Open sidebar and activate requested tab
          sidebar.classList.add('mobile-open');
          bottomNavBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const matchingDesktopTab = document.querySelector(`.sidebar-tabs .tab-btn[data-tab="${tab}"]`);
          if (matchingDesktopTab) {
            matchingDesktopTab.click();
          }
        }
      });
    });

    // Mobile floating list pill
    const floatListBtn = document.getElementById('mobileFloatingListBtn');
    if (floatListBtn) {
      floatListBtn.addEventListener('click', () => {
        sidebar.classList.add('mobile-open');
        bottomNavBtns.forEach(b => {
          if (b.getAttribute('data-tab') === state.activeTab) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
      });
    }

    // Mobile sidebar close button
    const sidebarCloseBtn = document.getElementById('sidebarMobileCloseBtn');
    if (sidebarCloseBtn) {
      sidebarCloseBtn.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        bottomNavBtns.forEach(b => b.classList.remove('active'));
        const bMap = document.getElementById('bNavMap');
        if (bMap) bMap.classList.add('active');
        if (map) setTimeout(() => map.invalidateSize(), 300);
      });
    }

    // Map Legend collapsible toggle on mobile
    const legendEl = document.getElementById('mapLegend');
    const legendHeader = document.getElementById('legendHeaderToggle');
    if (legendHeader && legendEl) {
      legendHeader.addEventListener('click', () => {
        legendEl.classList.toggle('collapsed');
      });
    }

    // Touch swipe gesture support for photo gallery on mobile
    const galleryWrap = document.querySelector('.modal-gallery-wrap');
    if (galleryWrap) {
      let touchStartX = 0;
      let touchStartY = 0;
      let touchEndX = 0;
      let touchEndY = 0;

      galleryWrap.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      galleryWrap.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        // Ensure horizontal swipe is dominant and significant (> 35px)
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
          if (diffX < 0) {
            // Swiped Left -> Next Photo
            document.getElementById('galleryNextBtn').click();
          } else {
            // Swiped Right -> Previous Photo
            document.getElementById('galleryPrevBtn').click();
          }
        }
      }, { passive: true });
    }

    // Window resize handler to keep Leaflet map tiles crisp
    window.addEventListener('resize', () => {
      if (map) {
        map.invalidateSize();
      }
    });

    // Modal close events
    document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
    document.getElementById('siteDetailModal').addEventListener('click', (e) => {
      if (e.target.id === 'siteDetailModal') {
        closeModal();
      }
    });

    // Gallery prev / next
    document.getElementById('galleryPrevBtn').addEventListener('click', () => {
      if (!state.activeSite || !state.activeSite.images) return;
      state.currentGalleryIndex = (state.currentGalleryIndex - 1 + state.activeSite.images.length) % state.activeSite.images.length;
      updateGalleryView(state.activeSite);
    });

    document.getElementById('galleryNextBtn').addEventListener('click', () => {
      if (!state.activeSite || !state.activeSite.images) return;
      state.currentGalleryIndex = (state.currentGalleryIndex + 1) % state.activeSite.images.length;
      updateGalleryView(state.activeSite);
    });

    // Modal favorite button
    document.getElementById('modalFavToggleBtn').addEventListener('click', () => {
      if (state.activeSite) {
        toggleFavorite(state.activeSite.id);
      }
    });

    // Modal share button
    document.getElementById('modalShareBtn').addEventListener('click', () => {
      if (!state.activeSite) return;
      const url = window.location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          showToast(I18N[state.currentLang].copiedLink);
        });
      } else {
        showToast(I18N[state.currentLang].copiedLink);
      }
    });

    // Modal Audio button
    document.getElementById('modalAudioBtn').addEventListener('click', toggleSpeechNarration);

    // Modal drive route button (Draw road on map)
    const modalDriveBtn = document.getElementById('modalDriveRouteBtn');
    if (modalDriveBtn) {
      modalDriveBtn.addEventListener('click', () => {
        if (!state.activeSite) return;
        const targetSite = state.activeSite;
        closeModal();

        // Switch to routes tab
        const routesTabBtn = document.querySelector('.sidebar-tabs [data-tab="routes"]');
        if (routesTabBtn) routesTabBtn.click();

        // After rendering routes tab, set selects and compute route
        setTimeout(() => {
          const destSelect = document.getElementById('plannerDestSelect');
          if (destSelect) {
            destSelect.value = targetSite.id;
          }
          handleCalculateAndDrawRoute('hub_ashgabat', targetSite.id);
        }, 120);
      });
    }

    // Global hook for popup "Details" button
    window.appOpenSiteModal = function (siteId) {
      const site = SITES_DATA.find(s => s.id === siteId);
      if (site) {
        openSiteDetailModal(site);
      }
    };
  }

  // --- TOAST NOTIFICATION ---
  function showToast(message) {
    const toast = document.getElementById('appToast');
    const toastText = document.getElementById('toastMsgText');
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

})();

