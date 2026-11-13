// Türkmenistanyň Gadymy we Mukaddes Zyýarat Ýerleri - Maglumat Bazasy
// Database of Turkmenistan's Ancient and Sacred Pilgrimage Sites (TK / EN / RU)

const SITES_DATA = [
  // --- AHAL WELAÝATY WE AŞGABAT ---
  {
    id: "nisay",
    province: "ahal",
    category: "unesco",
    coords: [37.9989, 58.2128],
    era: {
      tk: "B.e. öň III asyr – b.e. III asyry",
      en: "3rd century BC – 3rd century AD",
      ru: "III в. до н.э. – III в. н.э."
    },
    title: {
      tk: "Gadymy Nusaý (Köne Nusaý)",
      en: "Ancient Nisa (Old Nisa)",
      ru: "Древняя Ниса (Старая Ниса)"
    },
    shortDesc: {
      tk: "Beýik Parfiýa patyşalygynyň ilkinji paýtagty we şa rezidensiýasy, ÝUNESKO-nyň Bütindünýä mirasynyň sanawyna giren täsin ýadygärlik.",
      en: "The royal fortress of the Parthian Empire, a UNESCO World Heritage site and one of the most prominent archaeological gems of Central Asia.",
      ru: "Царская крепость Парфянского царства, объект Всемирного наследия ЮНЕСКО и важнейший памятник античной эпохи."
    },
    fullDesc: {
      tk: "Nusaý — gadymy Parfiýa döwletiniň şöhratly şa rezidensiýasy bolup, Köpetdagyň eteginde Bagyr obasynyň golaýynda ýerleşýär. Bu ýerde Parfiýa arşakid patyşalarynyň köşgi, hazynasy, ybadathanalary we şerap ambarlary ýerleşipdir. Gazuw-agtaryş işlerinde dünýä belli pil süňkünden ýasalan ritonlar (şah şekilli gymmatbahaly gaplar), mermer heýkeller we arameý ýazgylary tapyldy. 2007-nji ýylda ÝUNESKO-nyň Bütindünýä medeni mirasynyň sanawyna girizildi.",
      en: "Nisa was one of the earliest and most important seats of the Arsacid Parthian Empire. Located at the foot of the Kopet Dag mountains near Bagir village, Old Nisa was a heavily fortified royal sanctuary. Archaeological excavations revealed the famous ivory rhytons (drinking horns carved with Greek and Persian mythologies), marble statues, and royal administrative archives. It was inscribed as a UNESCO World Heritage Site in 2007.",
      ru: "Ниса — одна из древнейших столиц Парфянской империи Аршакидов. Расположенная у подножия Копетдага близ села Багир, крепость Старая Ниса служила царской цитаделью, местом погребения и хранилищем сокровищ. Здесь были обнаружены знаменитые ритоны из слоновой кости, мраморные эллинистические статуи и царские архивы. В 2007 году объект включён в список Всемирного наследия ЮНЕСКО."
    },
    visitingTips: {
      tk: "Aşgabatdan bary-ýogy 15 km aralykda. Ýanyňyz bilen gün şöhlesinden goraýan başgap we agyz suwy alyň. Ýerli arheologik muzeýi görmegi unutmaň. Iň amatly wagt: ir ertir ýa-da gün batmanka.",
      en: "Only 15 km from central Ashgabat. Bring a sunhat, comfortable walking shoes, and water. Don't miss the on-site museum exhibit. Best visit time: early morning or golden hour before sunset.",
      ru: "Всего в 15 км от центра Ашхабада. Возьмите головной убор и воду, обувь для ходьбы по холмам. Обязательно посетите местный выставочный зал. Лучшее время для фото: раннее утро или перед закатом."
    },
    dressCode: {
      tk: "Ýeňil syýahat lybasy, tebigy ýodalarda ýöremäge amatly aýakgap.",
      en: "Casual walking attire with sturdy footwear suitable for gravel trails.",
      ru: "Удобная одежда для прогулок и нескользкая обувь для тропинок."
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nisa.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nisa%20Fortress.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Parthian%20Fortresses%20of%20Nisa-130388.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=37.9989,58.2128"
  },
  {
    id: "seyit-jemaletdin",
    province: "ahal",
    category: "mausoleum",
    coords: [37.8967, 58.5333],
    era: {
      tk: "1456-njy ýyl (XV asyr, Temurid döwri)",
      en: "1456 AD (15th century, Timurid era)",
      ru: "1456 г. (XV век, эпоха Тимуридов)"
    },
    title: {
      tk: "Seyit Jemaletdin Metjidi (Änew)",
      en: "Seyit Jemaletdin Mosque (Anau)",
      ru: "Мечеть Сейит Джемаледдина (Анау)"
    },
    shortDesc: {
      tk: "Giriş derwezesinde täsin aždarhalar şekillendirilen, 'Gözellikler öýi' diýlip atlandyrylan taryhy mukaddes metjit we zyýarathana.",
      en: "A historic 15th-century mosque famous for its unique mosaic dragons above the portal, historically known as the 'House of Beauty'.",
      ru: "Знаменитая мечеть XV века с уникальной мозаикой драконов над порталом, издревле почитаемая святыня, известная как 'Обитель красоты'."
    },
    fullDesc: {
      tk: "Änew şäherçesinde ýerleşýän bu meşhur arhitektura toplumy 1456-njy ýylda Horasanyň hökümdary Soltan Abul-Kasym Baburyň döwründe Seyit Jemaletdiniň hormatyna bina edilipdir. Metjidiň peştagynda iki sany uly aždarhanyň mozaika suratlary şekillendirilip, bu yslam binagärliginde örän seýrek duş gelýän täsin sungatdyr. 1948-nji ýylyň ýertitremesinde bölekleýin ýumrulsa-da, onuň mukaddesligi saklanyp galypdyr we bütin ýurtdan zyýaratçylar gelýär.",
      en: "Constructed in 1456 during the reign of Timurid ruler Sultan Abul-Qasim Babur, this monument was dedicated to the revered Sheikh Seyit Jemaletdin. Its crowning glory was the facade portal depicting two twisting dragons amidst floral mosaic tiles—an extraordinary iconographic motif in Islamic architecture. Though damaged in the 1948 earthquake, the ruins and restored portions remain a revered pilgrimage and spiritual site.",
      ru: "Построенная в 1456 году при тимуридском правителе султане Абул-Касыме Бабуре в честь почитаемого шейха Сейит Джемаледдина, мечеть прославилась уникальной майоликовой мозаикой с изображением двух гигантских драконов над порталом. Это редчайший случай зооморфного декора в исламском зодчестве. Памятник пострадал при землетрясении 1948 г., но остаётся глубоко почитаемым местом паломничества."
    },
    visitingTips: {
      tk: "Aşgabatdan gündogara tarap 12 km. Änew medeniýetiniň gadymy depesi bilen ýanaşyk. Zyýaratçylar üçin dileg edilýän mukaddes ýer bar.",
      en: "12 km east of Ashgabat near Anau. Located next to the ancient Bronze Age tell of Anau culture. Respect local pilgrims who come for prayer.",
      ru: "В 12 км к востоку от Ашхабада. Рядом находится холм Анауской археологической культуры. С уважением относитесь к верующим, совершающим молитвы."
    },
    dressCode: {
      tk: "Mukaddes zyýarathana bolandygy sebäpli, egin-eşigiňize üns beriň (aýallar üçin ýaglyk we ýapyk lybas).",
      en: "Modest dress is required out of respect for pilgrims (covered shoulders and knees; headscarf for women).",
      ru: "Скромная одежда: закрытые плечи и колени, женщинам рекомендуется платок."
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ruins%20of%20Se%C3%BDit%20Jemaladdin%20Mosque.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Anau%20Seyit%20Jemaletdin%20Mosque%202.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Anau%20Mishin.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=37.8967,58.5333"
  },
  {
    id: "abiwerd",
    province: "ahal",
    category: "fortress",
    coords: [37.2889, 59.5667],
    era: {
      tk: "IX – XII asyrlar (Sasani we Seljuk döwri)",
      en: "9th – 12th century (Sassanid to Seljuk eras)",
      ru: "IX – XII века (Сасанидский и сельджукский периоды)"
    },
    title: {
      tk: "Abiwerd Gadymy Galasy",
      en: "Ancient Abiwerd Fortress",
      ru: "Древний город-крепость Абиверд"
    },
    shortDesc: {
      tk: "Kaka etrabynda ýerleşýän, Beýik Ýüpek ýolunyň ugrundaky kuwwatly gala we söwda-hünärmentçilik merkezi.",
      en: "A strategic Silk Road fortress city in the Kaka district, famous for its ancient clay bastions and handicraft heritage.",
      ru: "Стратегический город-крепость на Шёлковом пути в районе Каахка с мощными глиняными бастионами и богатой историей."
    },
    fullDesc: {
      tk: "Abiwerd (Bawert) — orta asyrlarda Horasanyň iň ösen şäherleriniň biri bolup, Beýik Ýüpek ýolunyň möhüm duralgasy bolup hyzmat edipdir. Şäherde keramikanyň, metal eretmegiň we teňňe zikgelemegiň ýokary medeniýeti bolupdyr. Onuň belent gala diwarlary, köşk binalary we metjit galyndylary häzirki güne çenli gowy saklanypdyr. Bu ýer arheologiýa we taryh höwesjeňleri üçin açyk asmanyň astyndaky muzeýdir.",
      en: "Abiwerd (Baward) was a key medieval urban center along the northern branch of the Silk Road connecting Nishapur and Merv. Known for its advanced pottery workshops and bronze metallurgy, it featured formidable defensive battlements, water reservoirs, and a central Friday mosque. Today, its earth-walled citadel presents an evocative testament to ancient urban fortification.",
      ru: "Абиверд являлся одним из главных торговых узлов Северного Хорасана на пути между Нишапуром и Мервом. Город славился ремесленными кварталами гончаров и чеканщиков монет. Высокие глинобитные башни цитадели и руины мечети сохранились до наших дней, создавая впечатляющий музей под открытым небом."
    },
    visitingTips: {
      tk: "Aşgabat-Mary ýolunyň 120-nji kilometrinde, Kaka şäheriniň golaýynda. Şemally howa bolup bilýär.",
      en: "Located around 120 km east of Ashgabat along the M37 highway. Best combined with a visit to Sarahs.",
      ru: "Расположен в 120 км к востоку от Ашхабада вдоль трассы M37. Удобно объединить с поездкой в Серахс."
    },
    dressCode: {
      tk: "Ýöremek üçin berk aýakgap.",
      en: "Comfortable hiking or walking shoes.",
      ru: "Прочная спортивная обувь."
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Abiwert-panorama.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Abiwert-ruins-ahal-turkmenistan.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=37.2889,59.5667"
  },
  {
    id: "sarahs-abul-fazl",
    province: "ahal",
    category: "mausoleum",
    coords: [36.5333, 61.2167],
    era: {
      tk: "1024-nji ýyl (XI asyr, Beýik Seljuk döwri)",
      en: "1024 AD (11th century, Great Seljuk era)",
      ru: "1024 г. (XI век, эпоха Великих Сельджуков)"
    },
    title: {
      tk: "Abul Fazl Mawzoleýi (Sarahs Baba)",
      en: "Abul Fazl Mausoleum (Sarahs Baba)",
      ru: "Мавзолей Абул-Фазла (Серахс Баба)"
    },
    shortDesc: {
      tk: "Beýik Seljuk binagärlik mekdebiniň iň ilkinji we beýik nusgalarynyň biri, keramatly akyldaryň aramgähi.",
      en: "A masterpiece of early Seljuk architecture built over the tomb of Sufi master Sheikh Abul Fazl.",
      ru: "Шедевр раннесельджукского зодчества над усыпальницей суфийского шейха Абул-Фазла."
    },
    fullDesc: {
      tk: "Sarahs Baba mawzoleýi 1024-nji ýylda meşhur sopy akyldary Abul-Fazl Sarahsiniň aramgähiniň üstünde bina edilipdir. Bu ýadygärlik inedördül gurluşly, iki gatly ägirt uly gümmezi we nepis kerpiç öwrümleri bilen dünýä binagärlik taryhynda uly orun eýeleýär. Sarahsyň binagärlik mekdebi soňra bütin Gündogarda meşhur bolan Soltan Sanjar mawzoleýiniň hem binýadyny goýupdyr.",
      en: "Erected in 1024, this tomb commemorates Sheikh Abul Fazl, the spiritual guide of Abu Said Meyheni. With its monumental brick dome resting on a squinch transition, the tomb represents the pinnacle of the renowned Sarahs architectural school, whose master masons later built the Sultan Sanjar mausoleum in Merv.",
      ru: "Возведённый в 1024 году над могилой суфийского шейха Абул-Фазла, этот купольный мавзолей стал эталоном Серахской архитектурной школы. Его монументальный двойной купол и виртуозная фигурная кирпичная кладка послужили образцом для зодчих всей Средней Азии и Ирана."
    },
    visitingTips: {
      tk: "Sarahs etrabynda, Eýran serhediniň golaýynda ýerleşýär. Ýerli halk arasynda uly hormat goýulýan mukaddes zyýarathanadyr.",
      en: "Situated in the town of Sarahs near the border. Highly venerated pilgrimage shrine with serene atmosphere.",
      ru: "Находится в Серахсе на границе с Ираном. Святое место с глубокой молитвенной атмосферой."
    },
    dressCode: {
      tk: "Zyýarat edebine laýyk ýapyk lybas.",
      en: "Modest pilgrim attire.",
      ru: "Скромная одежда для посещения святыни."
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sarakhs_mausoleum.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Abul-Fazl_Mausoleum_Sarahs.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=36.5333,61.2167"
  },
  {
    id: "kow-ata",
    province: "ahal",
    category: "natural",
    coords: [38.3986, 57.6533],
    era: {
      tk: "Müňýyllyklar boýy mukaddes şypahana",
      en: "Centuries-old geothermal underground shrine",
      ru: "Древнейшая подземная геотермальная святыня"
    },
    title: {
      tk: "Kow-Ata Ýerasty Köli",
      en: "Kow-Ata Underground Lake",
      ru: "Подземное озеро Ков-Ата"
    },
    shortDesc: {
      tk: "Bahar gowagynda 60 metr çuňlukda ýerleşýän, ýyly kükürtli mukaddes tebigy şypahana we zyýarat ojaklarynyň biri.",
      en: "A natural wonder located 60 meters underground inside Bakharden cave, featuring warm therapeutic mineral waters.",
      ru: "Уникальное природное озеро на глубине 60 метров в пещере Бахарден с целебной сероводородной тёплой водой."
    },
    fullDesc: {
      tk: "Kow-Ata («Gowaklaryň atasy») Köpetdagyň jümmüşinde ýerleşýän tebigy täsinlikdir. Gowagyň çuňlugyndaky kölüň suwunyň temperaturasy ýylyň bütin dowamynda +33... +38 °C aralygynda saklanýar. Onuň düzüminde kükürt, kaliý, magniý, hlor ýaly 30-dan gowrak pepdaly mineral element bar. Halk arasynda gadymdan bäri sagaldyş we zyýarat ojak hökmünde uly şöhrata eýedir.",
      en: "Kow-Ata ('Father of Caves') is a unique geothermal subterranean lake located in the Kopet Dag range. Situated inside an illuminated limestone cavern reached by a descent of 276 steps, the water remains at a soothing 33–38°C year-round. Rich in sulfur, potassium, and magnesium, it has been revered for its healing properties since antiquity.",
      ru: "Ков-Ата ('Отец пещер') — уникальное термальное подземное озеро в Бахарденской пещере. К озеру ведут 276 ступеней. Температура целебной воды держится круглый год на уровне +33...+38°C. Вода насыщена сероводородом и микроэлементами, издревле считалась священным исцеляющим источником."
    },
    visitingTips: {
      tk: "Aşgabatdan günbatara 100 km. Gowaga düşmek üçin amatly aýakgap we suwa düşmek isleseňiz ýörite esbaplar gerek.",
      en: "100 km west of Ashgabat. Bring swimwear and towel if planning a dip. The limestone steps can be moist; walk carefully.",
      ru: "100 км к западу от Ашхабада. Возьмите купальные принадлежности и полотенце. Ступени могут быть влажными, спускайтесь осторожно."
    },
    dressCode: {
      tk: "Gowakda suwa düşmek üçin lybas, basgançaklarda taýmaýan aýakgap.",
      en: "Non-slip footwear for wet stairs; modest swimwear.",
      ru: "Нескользящая обувь для спуска, купальный костюм."
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kow%20Ata%20Underground%20Lake.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9A%D0%BE%D1%83-%D0%90%D1%82%D0%B0.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=38.3986,57.6533"
  },

  // --- MARY WELAÝATY (GADYMY MERW) ---
  {
    id: "soltan-sanjar",
    province: "mary",
    category: "unesco",
    coords: [37.6644, 62.1903],
    era: {
      tk: "1157-nji ýyl (XII asyr, Beýik Seljuk imperiýasy)",
      en: "1157 AD (12th century, Great Seljuk Empire)",
      ru: "1157 г. (XII век, Великая Сельджукская империя)"
    },
    title: {
      tk: "Soltan Sanjar Mawzoleýi (Gadymy Merw)",
      en: "Sultan Sanjar Mausoleum (Ancient Merv)",
      ru: "Мавзолей Султана Санджара (Древний Мерв)"
    },
    shortDesc: {
      tk: "Orta asyr Gündogarynyň beýik şalygy bolan Seljuk imperiýasynyň iň belent binagärlik şah-eseri, ÝUNESKO-nyň Bütindünýä mirasy.",
      en: "The crowning architectural masterpiece of the Seljuk Golden Age, built for Sultan Sanjar; a premier UNESCO World Heritage site.",
      ru: "Жемчужина средневекового исламского зодчества золотого века Сельджуков, возведённая для султана Санджара; объект ЮНЕСКО."
    },
    fullDesc: {
      tk: "Soltan Sanjaryň kümmeti gadymy Merwiň Şähriýar Erk böleginde ýerleşýär. Ony meşhur arhitektor Muhammet ibn Atsyz Sarahsy gurupdyr. Onuň belentligi 38 metr bolup, goşa gümmezi we nepis melewşe syrçaly bezegleri bir wagtlar bir günlük menzilden parlaýan eken. Rowaýata görä, gümmez asman giňişligini alamatlandyrýar. Bu ýer dünýäniň ähli künjeginden syýahatçylary we zyýaratçylary özüne çekýär.",
      en: "Rising majestically from the heart of Ancient Merv, the mausoleum of Sultan Sanjar was engineered by the master architect Muhammad ibn Atsyz al-Sarakhsi in 1157. With its legendary double dome rising nearly 38 meters, it was said that its turquoise-glazed outer dome could be seen a day's march across the Karakum desert. It symbolizes the zenith of Merv as the cultural capital of the Islamic world.",
      ru: "Возведённый зодчим Мухаммедом ибн Атсызом из Серахса, мавзолей султана Санджара возвышается на 38 метров в центре древнего городища Султан-кала. Его бирюзовый купол когда-то служил ориентиром для караванов в пустыне за день пути. Это непревзойдённый шедевр мировой кирпичной архитектуры."
    },
    visitingTips: {
      tk: "Baýramaly şäheriniň golaýynda, Mary şäherinden 30 km. Giň taryhy seýilgähiň çäginde ýerleşýär, ýörite syýahat ulagy ýa-da taksi amatlydyr.",
      en: "Located near Bayramaly, 30 km from Mary city. The historical park is vast; hiring a local driver/guide is recommended.",
      ru: "Рядом с городом Байрамали, в 30 км от Мары. Археологический парк огромен, лучше нанять такси на полдня или экскурсовода."
    },
    dressCode: {
      tk: "Taryhy we mukaddes aramgäh bolandygy üçin salyhatly geýinmek maslahat berilýär.",
      en: "Modest attire respectful of a revered historical tomb.",
      ru: "Сдержанная форма одежды, уважительная к усыпальнице."
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sultan%20Sanjar%20mausoleum.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sultan%20Sanjar%20mausoleum%20-%20Merv.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sultan%20Sanjar%20Mausoleum%2C%20Merv%2C%20Turkmenistan%202019%2001.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=37.6644,62.1903"
  },
  {
    id: "gyzgala",
    province: "mary",
    category: "unesco",
    coords: [37.6583, 62.1833],
    era: {
      tk: "VI – VII asyrlar (Sasani / Irki Orta Asyr)",
      en: "6th – 7th century (Late Sasanian / Early Medieval)",
      ru: "VI – VII века (Позднесасанидский период)"
    },
    title: {
      tk: "Uly we Kiçi Gyzgala (Kyz Kala)",
      en: "Great & Little Kyz Kala (Maiden's Castles)",
      ru: "Большая и Малая Кыз-Кала (Девичьи крепости)"
    },
    shortDesc: {
      tk: "Tolkunly gasyn-gasyn palçyk diwarlary bilen dünýä meşhur, Beýik Ýüpek ýolunyň iň täsin köşk galalary.",
      en: "Iconic corrugated mudbrick palaces with accordion-like fluted bastions, emblematic of Ancient Merv's Silk Road grandeur.",
      ru: "Знаменитые гофрированные феодальные замки из сырцового кирпича с волнистыми стенами, визитная карточка Мерва."
    },
    fullDesc: {
      tk: "Gyzgala — gadymy Merw oazisiniň iň täsir galdyryjy binalarynyň biridir. Ol iki gatly köşk bolup, onuň daşky diwarlary täsin gasynly (tolkun şekilli) gofrirlenen sütünlerden ybaratdyr. Bu binagärlik usuly hem goranmak, hem tomsuň jokrama yssysynda jaýyň içini salkyn saklamak üçin niýetlenipdir. Halk arasynda gyzlar köşgi barada köp sanly rowaýatlar we dessanlar döräpdir.",
      en: "The Kyz Kala castles are architectural marvels unique to Central Asian antiquity. Built of unbaked mudbrick, the walls resemble pleated drapery or giant accordion folds. This ingenious architectural design provided structural stability while minimizing solar heat absorption during blistering desert summers. Local folklore abounds with romantic tales about maidens inhabiting these fortified towers.",
      ru: "Замки Кыз-Кала представляют собой уникальный тип раннесредневекового сомкнутого поместья ('кёшка'). Стены из необожжённого кирпича выполнены в виде мощных полуколонн-гофров, что обеспечивало защиту от осады и спасало от палящего зноя пустыни. Памятник овеян романтическими легендами о девичьих цитаделях."
    },
    visitingTips: {
      tk: "Soltan Sanjaryň kümmetiniň günbatarynda ýerleşýär. Gün şöhlesiniň gasynlara düşýän wagty (ir säher ýa-da gün batyşy) iň ajaýyp fotosuratlar alynýar.",
      en: "Located just west of Sultan Sanjar. Best photographed at sunrise or late afternoon when light casts dramatic shadows along the pleated facades.",
      ru: "Расположены к западу от мавзолея Санджара. Лучшие фотографии получаются на закате или рассвете, когда свет рельефно подчеркивает гофрированные стены."
    },
    dressCode: {
      tk: "Gün şöhlesine garşy başgap we amatly aýakgap.",
      en: "Sun protection and walking shoes.",
      ru: "Головной убор и удобная обувь."
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Great%20Kyz%20Kala.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Greater%20Kyz%20Kala%2C%20Merv%2C%20Turkmenistan%202019%2001.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Great%20Kyz%20Kala%20in%202006.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=37.6583,62.1833"
  },
  {
    id: "yusup-hemedany",
    province: "mary",
    category: "shrine",
    coords: [37.6667, 62.1958],
    era: {
      tk: "XII asyr (1140-njy ýyl)",
      en: "12th century (1140 AD)",
      ru: "XII век (1140 г.)"
    },
    title: {
      tk: "Ýusup Hemedany Zyýarathanasy (Hemedan Baba)",
      en: "Yusuf Hamadani Shrine (Hemedan Baba)",
      ru: "Мавзолей Юсуфа Хамадани (Хемедан Баба)"
    },
    shortDesc: {
      tk: "Bütin musulman Gündogarynda uly hormat goýulýan beýik sopy akyldaryň we öwlüýäniň mukaddes zyýarathana toplumy.",
      en: "One of Turkmenistan's most sacred pilgrimage sanctuaries, dedicated to the revered Sufi master Abu Yaqub Yusuf al-Hamadani.",
      ru: "Один из наиболее почитаемых паломнических комплексов Туркменистана, усыпальница великого суфийского наставника Юсуфа аль-Хамадани."
    },
    fullDesc: {
      tk: "Hojagalyk sopyçylyk ugrunyň görnükli wekili Abu Ýakup Ýusup Hemedany 1140-njy ýylda aradan çykyp, Merwde jaýlanypdyr. Onuň guburynyň daşynda asyrlaryň dowamynda metjitler, çillehanalar we myhmanhanalar emele gelip, bu günki gün bütin Türkmenistandan we goňşy döwletlerden her gün ýüzlerçe zyýaratçynyň gelýän iň esasy ruhy merkezine öwrüldi.",
      en: "Abu Yaqub Yusuf al-Hamadani was a paramount spiritual master who taught Khoja Ahmad Yasawi and Abd al-Khaliq al-Ghujdawani. Passed away in 1140, his shrine complex in Merv features a serene central courtyard, chillakhana (prayer cells), and pilgrim guest houses. It remains a deeply active focal point of devotional visits.",
      ru: "Абу Якуб Юсуф аль-Хамадани — выдающийся суфийский шейх, духовный учитель Ходжи Ахмеда Ясави. Его мемориальный комплекс в Мерве включает мавзолей, мечеть и кельи для молитвенного уединения. Место непрерывного паломничества верующих со всей Центральной Азии."
    },
    visitingTips: {
      tk: "Zyýaratçylar bu ýerde sadaka berýärler, dileg edýärler. Toplumda tämiz çeşme we myhmanlar üçin niýetlenen amatlyklar bar.",
      en: "Active place of worship; silence and modesty should be observed. Water fountains and rest areas are available for visitors.",
      ru: "Действующая святыня; соблюдайте тишину и благоговение. На территории есть тенистые места для отдыха паломников."
    },
    dressCode: {
      tk: "Doly zyýarat lybasy (uzyn köýnek, aýallar üçin ýaglyk).",
      en: "Full modest pilgrim attire (covered arms, legs, and headscarves for women).",
      ru: "Строгая скромная одежда (длинный рукав, платок для женщин)."
    },
    images: [
      "https://centralasia-adventures.com/image/data/info/turkmenistan/merv/05.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Yusuf_Hamadani_Mausoleum_Merv.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=37.6667,62.1958"
  },

  // --- DAŞOGUZ WELAÝATY (KÖNEÜRGENÇ) ---
  {
    id: "torebeg-hanym",
    province: "dashoguz",
    category: "unesco",
    coords: [42.3167, 59.1500],
    era: {
      tk: "XIV asyr (Horezm Altyn Orda döwri)",
      en: "14th century (Golden Horde Khorezm)",
      ru: "XIV век (Золотоордынский Хорезм)"
    },
    title: {
      tk: "Törebeg Hanym Mawzoleýi (Köneürgenç)",
      en: "Torebeg Hanym Mausoleum (Kunya-Urgench)",
      ru: "Мавзолей Тюрабек-Ханым (Куня-Ургенч)"
    },
    shortDesc: {
      tk: "Dünýäde iň kämil gümmez mozaikasy hasaplanýan, 365 bölekden ybarat telegeňişlikli Gün senenamaly täsin taryhy şah-eser.",
      en: "Renowned for its breathtaking ceiling mosaic consisting of 365 geometric star motifs, representing the calendar year.",
      ru: "Шедевр средневекового зодчества с купольной мозаикой из 365 звёздных элементов, символизирующих дни года."
    },
    fullDesc: {
      tk: "Törebeg Hanym — Horezmiň hökümdary Gutlug Timuryň aýaly, Altyn Ordanyň hany Özbegiň gyzydyr. Bu mawzoleýiň gümmeziniň içki reňkli kafel bezegi dünýäde deňi-taýy bolmadyk gözellikdir. Onda asman çyrasy, ýyldyzlar we 365 sany aýratyn gül şekilli kafel birleşip, bir ýylyň günlerini alamatlandyrýar. Binanyň peştagy we gurluş nepisligi orta asyr gündogar inženerçiliginiň iň ýokary derejesini görkezýär.",
      en: "Dedicated to Princess Torebeg Hanym, daughter of Uzbek Khan of the Golden Horde and wife of Khorezm governor Qutlugh Timur. The interior inverted dome is an astronomical marvel: a kaleidoscope of turquoise, dark blue, and gold mosaic tiles arranged into 365 intricate rosettes, corresponding to the days of the solar year. Inscribed in UNESCO in 2005.",
      ru: "Мавзолей принцессы Тюрабек-Ханым, дочери хана Золотой Орды Узбека. Внутренний свод купола украшен непревзойдённым мозаичным панно из 365 звездных секторов, символизирующих дни года, 12 арочных проёмов (месяцы) и 24 часа. Памятник мирового значения под защитой ЮНЕСКО."
    },
    visitingTips: {
      tk: "Köneürgenç taryhy goraghanasynyň iň göz gözel ýadygärligi. Ýanyňyzda gümmezi synlamak üçin gowy fotoapparat bolmagy maslahat berilýär.",
      en: "Must-see centerpiece of the Kunya-Urgench reserve. A wide-angle lens or phone with good low-light mode helps capture the stunning ceiling.",
      ru: "Главная жемчужина заповедника Куня-Ургенч. Рекомендуется широкоугольная камера, чтобы запечатлеть грандиозный купол."
    },
    dressCode: {
      tk: "Medeni we taryhy ýadygärlige laýyk lybas.",
      en: "Modest cultural sightseeing attire.",
      ru: "Обычная удобная одежда, закрывающая плечи."
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Turabek%20Khanum%2C%20from%20the%20south.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Inner%20Dome%20of%20Turabeg%20Khanym%20Mausoluem%20(27574334687).jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Turabeg%20Khanym%20Mausoleum%20(41542197725).jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=42.3167,59.1500"
  },
  {
    id: "gutlug-timur",
    province: "dashoguz",
    category: "unesco",
    coords: [42.3083, 59.1417],
    era: {
      tk: "1320 – 1330-njy ýyllar (XIV asyr)",
      en: "1320 – 1330 AD (14th century)",
      ru: "1320 – 1330 гг. (XIV век)"
    },
    title: {
      tk: "Gutlug Timuryň Minarasy",
      en: "Gutlug Timur Minaret",
      ru: "Минарет Кутлуг-Тимура"
    },
    shortDesc: {
      tk: "Merkezi Aziýada saklanyp galan iň beýik gadymy minara (beýikligi 60 metr töweregi), Köneürgenjiň nyşany.",
      en: "The tallest ancient brick minaret surviving in Central Asia (approx. 60 meters high), towering over Kunya-Urgench.",
      ru: "Высочайший древний минарет Центральной Азии (около 60 метров), величественный символ древнего Куня-Ургенча."
    },
    fullDesc: {
      tk: "Gutlug Timuryň minarasy XIV asyrda Horezm hökümdary Gutlug Timuryň buýrugy bilen gurlupdyr. Onuň häzirki saklanyp galan beýikligi 62 metr töweregi bolup, ýokarlygyna inçelip gidýän kerpiç nagyşlary we kufi hatly ýazgylary bar. Bir wagtlar ol gadymy Horezmiň baş metjidiniň ýanynda ýerleşip, şähere gelýän kerwenler üçin beýik maýak we gözegçilik diňi bolup hyzmat edipdir.",
      en: "Rising to a dizzying 62 meters, this tapered brick tower built under Governor Qutlugh Timur is the loftiest ancient minaret across Central Asia and the Islamic world of its time. Ringed by ornate bands of patterned brickwork and Kufic calligraphy, it served as both a visual beacon across the desert plains and the call-to-prayer tower of the lost grand Friday Mosque.",
      ru: "Минарет Кутлуг-Тимура высотой около 62 метров — самый высокий уцелевший кирпичный минарет средневековой Центральной Азии. Ствол минарета сужается кверху и опоясан декоративными поясами рельефной кладки и куфическими надписями. Служил дозорной башней и маяком в бескрайней степи."
    },
    visitingTips: {
      tk: "Törebeg Hanym mawzoleýinden 500 metr günortada ýerleşýär. Daşyndan beýikligini synlamak örän täsirlidir.",
      en: "Located a short walk south of Torebeg Hanym. Impressive to view from ground level against clear blue sky.",
      ru: "В пешей доступности к югу от мавзолея Тюрабек-Ханым. Впечатляюще смотрится на фоне лазурного неба."
    },
    dressCode: {
      tk: "Syýahat aýakgaby we ýeňil lybas.",
      en: "Comfortable shoes for outdoor terrain.",
      ru: "Удобная обувь для прогулок по грунту."
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kutlug%20Timur%20minaret.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Gutlug%20Timur%20Minaret%20(41542199105).jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/KonyeUrgenchMinaret.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=42.3083,59.1417"
  },
  {
    id: "nejmeddin-kubra",
    province: "dashoguz",
    category: "shrine",
    coords: [42.3300, 59.1550],
    era: {
      tk: "XII – XIV asyrlar (1221-nji ýyl)",
      en: "12th – 14th century (1221 AD)",
      ru: "XII – XIV века (1221 г.)"
    },
    title: {
      tk: "Nejmeddin Kubra Mawzoleýi",
      en: "Najm al-Din Razi / Kubra Mausoleum",
      ru: "Мавзолей Наджмеддина Кубра"
    },
    shortDesc: {
      tk: "Kübrawiýe sopyçylyk mezhebiniň esaslandyryjysy, beýik akyldar we watançy şyh Nejmeddin Kubranyň mukaddes aramgähi.",
      en: "The highly venerated resting place of Najm al-Din Kubra, founder of the Kubrawiya Sufi order and hero of Urgench.",
      ru: "Усыпальница основателя суфийского ордена Кубравийа, великого философа и мученика-защитника Ургенча Наджмеддина Кубра."
    },
    fullDesc: {
      tk: "Şyh Nejmeddin Kubra (1145–1221) Gündogaryň beýik sopy akyldarlarynyň biridir. 1221-nji ýylda mongol goşunlary Köneürgenje çozanda, ol watanyny goramak üçin eli ýaragly söweşe çykyp gahrymanlarça şehit bolupdyr. Onuň aramgähiniň içindäki mermer örtükli ajaýyp syrçaly mawzoleýi Orta Aziýanyň hakyky göwheridir. Bu ýer halkymyzyň iň mukaddes zyýarathanasy hasaplanýar.",
      en: "Sheikh Najm al-Din Kubra was the celebrated 12th-century Sufi mystic who established the Kubrawiya school of spiritual enlightenment. When Genghis Khan's hordes laid siege to Kunya-Urgench in 1221, he refused to flee and died defending the city walls. His mausoleum features magnificent glazed ceramic cenotaphs with floral arabesques and remains one of Central Asia's most emotionally moving pilgrimage sites.",
      ru: "Шейх Наджмеддин Кубра — выдающийся мыслитель и мистик, основавший братство 'Кубравийа'. При осаде города войсками Чингисхана в 1221 году 76-летний шейх с оружием в руках вышел на защиту города и пал смертью храбрых. Его мавзолей с изумительным резным глазурованным надгробием — главная святыня Дашогузского велаята."
    },
    visitingTips: {
      tk: "Köneürgenç şäheriniň köne gonamçylygynyň çäginde ýerleşýär. Soltan Aly we Pirýar Weli mawzoleýleri bilen bir toplumy düzýär.",
      en: "Located in the older district of Kunya-Urgench alongside the Sultan Ali and Piryar Vali mausoleums. Pilgrims often spend time here in contemplation.",
      ru: "Находится в старой части города Куня-Ургенч в едином комплексе с мавзолеем Султана Али. Принято соблюдать молитвенную тишину."
    },
    dressCode: {
      tk: "Zyýarat üçin ýörite sypaýy we ýapyk geýinmek talap edilýär.",
      en: "Full respectful pilgrim dress (shoulders, knees, and hair covered).",
      ru: "Строгий скромный дресс-код (закрытые колени и плечи, платок)."
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Najm%20ad-Din%20al-Kubra%20Mausoleum.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Portal%20in%20front%20of%20Najm%20ad-Din%20al-Kubra%20Mausoleum.JPG"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=42.3300,59.1550"
  },
  {
    id: "ysmamyt-ata",
    province: "dashoguz",
    category: "shrine",
    coords: [42.1500, 59.3833],
    era: {
      tk: "X – XI asyrlar / soňraky döwürler",
      en: "10th – 11th century / Later reconstructed",
      ru: "X – XI века / Более поздние постройки"
    },
    title: {
      tk: "Ysmamyt Ata Zyýarathanasy",
      en: "Ysmamyt Ata Shrine",
      ru: "Паломнический комплекс Исмамут Ата"
    },
    shortDesc: {
      tk: "Görogly etrabynda ýerleşýän, halk arasynda 'Göz öwlüýä' diýlip tanalýan gadymy we uly zyýarathana toplumy.",
      en: "A sprawling pilgrimage sanctuary in the Gerogly district, famed for its ancient hospices, domed chapels, and curative waters.",
      ru: "Обширный священный некрополь и мавзолей в этрапе Гёроглы, почитаемый как место духовного исцеления."
    },
    fullDesc: {
      tk: "Ysmamyt ata (Ysmamyt öwlüýä) toplumy Daşoguz welaýatynyň Görogly etrabynda ýerleşýär. Bu toplum metjitden, kerwensaraýdan, çillehanalardan we taryhy gonamçylykdan ybaratdyr. Rowaýatlara görä, Ysmamyt ata il arasynda ylym-bilim, ruhy terbiýe we dertlilere şypa beriji keramatly şahs hökmünde uly abraýa eýe bolupdyr. Bu ýere göz keselinden, dürli agyrylardan saplanmak isleýän adamlar müňlerçe ýyllardan bäri zyýarata gelýärler.",
      en: "The Ysmamyt Ata sanctuary is one of northern Turkmenistan's largest desert pilgrim complexes. Consisting of an ancient mosque, pilgrim hostel (khanaqah), and sacred burial grounds, tradition attributes miraculous ocular healing powers to the saint. The serene mudbrick corridors and covered pilgrim walkways offer an authentic experience of timeless steppe spirituality.",
      ru: "Комплекс Исмамут Ата расположен в этрапе Гёроглы. Включает ханаку, караван-сарай для паломников, мечеть и кладбище. По народным поверьям, святой обладал даром исцеления недугов, особенно глазных болезней. Паломники приезжают сюда для молитв и ночлега в традиционных гостевых комнатах."
    },
    visitingTips: {
      tk: "Daşoguz şäherinden 30 km günorta-günbatarda. Toplumda zyýaratçylar üçin aşhana we myhman jaýlary elýeterlidir.",
      en: "30 km southwest of Dashoguz city. Pilgrim guesthouses and tea facilities are available on-site.",
      ru: "30 км к юго-западу от Дашогуза. Есть гостевые дома для паломников и места для приготовления ритуальной пищи."
    },
    dressCode: {
      tk: "Däp-dessurlara laýyk mukaddes lybas.",
      en: "Traditional respectful modest clothing.",
      ru: "Традиционная скромная одежда паломника."
    },
    images: [
      "https://centralasia-adventures.com/image/data/info/turkmenistan/ismamut/01.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ismamut_Ata_Mausoleum.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=42.1500,59.3833"
  },

  // --- BALKAN WELAÝATY ---
  {
    id: "gozli-ata",
    province: "balkan",
    category: "shrine",
    coords: [40.3547, 54.4917],
    era: {
      tk: "XIV asyr (Keramatly sopyçylyk döwri)",
      en: "14th century (Sufi saint era)",
      ru: "XIV век (Эпоха суфийских святых)"
    },
    title: {
      tk: "Gözli Ata Zyýarathanasy",
      en: "Gozli Ata Shrine",
      ru: "Святыня Гёзли-Ата"
    },
    shortDesc: {
      tk: "Ustyurt baýyrlarynyň arasynda, täsin tebigy kanyonda ýerleşýän, bütin Türkmenistanyň iň mukaddes we hormatly zyýarathanasy.",
      en: "One of the holiest and most dramatically situated pilgrimage sanctuaries in Turkmenistan, nestled in the pastel canyons of Ustyurt.",
      ru: "Одна из самых почитаемых и живописных святынь Туркменистана, укрытая в разноцветных каньонах чинка Устюрта."
    },
    fullDesc: {
      tk: "Gözli ata (Hasan ata) — XIV asyryň meşhur sopy akyldary we Hoja Ahmet Ýasawynyň şägirdi hasaplanýar. «Gözli ata» diýilmegi onuň adamlaryň ýüregini we geljegi görüp bilýän keramaty bilen baglanyşdyrylýar. Mawzoleý ak, gülgüne we gyzyl öwüşginli jülgede ýerleşip, onuň töweregindäki tebigat aňrybaş gözelligi döredýär. Bu ýere ýylyň her paslynda maşgala agzybirligi, çaga dilemek we ruhy päklenmek üçin zyýaratçylar gelýär.",
      en: "Gozli Ata ('All-Seeing Father', Hasan Ata) was a celebrated 14th-century Sufi master endowed with the spiritual gift of clairvoyance. His mausoleum sits in a deeply isolated and spectacular natural amphitheater of pink, white, and red sandstone escarpments. The sanctuary houses a centuries-old wooden cenotaph and hospitable pilgrim houses where travelers share meals and communal prayers.",
      ru: "Гёзли-Ата ('Всевидящий отец', Хасан-Ата) — почитаемый суфийский шейх XIV века, ученик Ахмеда Ясави, прозванный так за прозорливость и дар духовного видения. Мавзолей расположен в фантастическом каньоне с отвесными бело-розовыми слоистыми скалами. Сюда стремятся тысячи людей ради молитв о здоровье семьи и рождении детей."
    },
    visitingTips: {
      tk: "Türkmenbaşy şäherinden 135 km demirgazyk-gündogarda. Ýoluň soňky bölegi gum we çagyl ýol, şonuň üçin ýokary tizlikli ýolsuz ýere niýetlenen (4x4) ulag maslahat berilýär. Zyýaratçylar üçin gijä galyp bolýan myhmanhana bar.",
      en: "Around 135 km northeast of Turkmenbashi. Requires a 4WD vehicle for the final desert/canyon stretch. Pilgrim houses provide basic lodging and communal kitchens.",
      ru: "Около 135 км к северо-востоку от Туркменбаши. Для поездки настоятельно рекомендуется внедорожник 4x4. Действует благоустроенный гостевой дом для ночлега паломников."
    },
    dressCode: {
      tk: "Mukaddes zyýarat lybasy we kanyonda ýöremäge amatly aýakgap.",
      en: "Modest attire for shrine visits plus sturdy shoes for rock paths.",
      ru: "Скромная одежда для посещения святыни и удобная обувь для каньона."
    },
    images: [
      "https://www.traveladventures.org/countries/turkmenistan/images/yangykala-canyon-gozli-ata10.jpg",
      "https://visitsilkroad.org/wp-content/uploads/2022/02/Gozli-Ata-Mausoleum-Turkmenistan1.jpg",
      "https://stantrips.com/_next/static/media/gozli-ata.3b68cba5.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=40.3547,54.4917"
  },
  {
    id: "paraw-bibi",
    province: "balkan",
    category: "shrine",
    coords: [39.1833, 55.4500],
    era: {
      tk: "IX – X asyrlar (Irki Orta Asyr)",
      en: "9th – 10th century (Early Islamic)",
      ru: "IX – X века (Ранний исламский период)"
    },
    title: {
      tk: "Paraw Bibi Zyýarathanasy",
      en: "Paraw Bibi Shrine",
      ru: "Святыня Парав-Биби"
    },
    shortDesc: {
      tk: "Köpetdagyň sarp gaýasynda ornaşan, zenanlaryň we maşgala ojagynyň mukaddes howandary hasaplanýan keramatly ýer.",
      en: "Perched dramatically on the craggy slopes of the Kopet Dag range, this mountaintop sanctuary is dedicated to the saintly maiden Paraw Bibi.",
      ru: "Мавзолей на крутом склоне скалистого хребта Копетдаг, почитаемый как покровительница женщин и семейного очага."
    },
    fullDesc: {
      tk: "Paraw Bibi zyýarathanasy Balkan welaýatynyň Gyzylarbat (öňki Serdar) etrabynda, Köpetdagyň gaýalarynyň üstünde ýerleşýär. Rowaýata görä, Paraw bibi duşmanlaryň eline düşmezlik üçin Allaha mynajat edipdir we gaýa ýarylyp, ony öz goynuna alypdyr. Gaýanyň ýüzünde onuň aýak yzlary we başga-da gudratly alamatlar galypdyr diýilýär. Bu ýere maşgala bagtyny, çaga arzuw edýän gelin-gyzlar we ähli zyýaratçylar beýik basgançaklar arkaly çykyp zyýarat edýärler.",
      en: "Dramatically clinging to a limestone precipice in the Kopet Dag mountains near Gyzylarbat, the shrine honors Paraw Bibi, a virtuous maiden who, according to legend, prayed for deliverance from invaders; the mountain miraculous opened and sheltered her inside the stone. Pilgrims climb hundreds of winding stairs up the cliff to pray for fertility, matrimonial happiness, and blessings.",
      ru: "Святыня Парав-Биби расположена на отвесной скале Копетдага близ Гызыларбата. По легенде, праведная девушка взмолилась о спасении от захватчиков, и скала расступилась, укрыв её в своих недрах. К белой усыпальнице на вершине ведёт крутая каменная лестница. Место молитв о женском здравии и благополучии."
    },
    visitingTips: {
      tk: "Gyzylarbat şäherinden 20 km töweregi. Gaýanyň gerşine çykmak üçin 200-den gowrak basgançak bar. Ýanyňyz bilen suw we amatly aýakgap bolmaly.",
      en: "Around 20 km from Gyzylarbat. Involves climbing over 200 steep stone steps up the mountain face; take water and pause as needed.",
      ru: "Около 20 км от Гызыларбата. Подъём по крутой лестнице (более 200 ступеней). Возьмите воду и удобную обувь."
    },
    dressCode: {
      tk: "Zenanlar üçin ýaglyk we ýapyk geýim, basgançaklardan çykmak üçin berk aýakgap.",
      en: "Modest attire with covered head for women; sturdy footwear for stair climbing.",
      ru: "Скромная одежда, платок для женщин, нескользкая обувь."
    },
    images: [
      "https://www.advantour.com/img/turkmenistan/turkmenbashi/parau-bibi.jpg",
      "https://ayan-turkmenistan.travel/wp-content/uploads/2023/09/paraw-bibi--1920x960.jpg",
      "https://stantrips.com/_next/static/media/parawbibi.5c648f8e.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=39.1833,55.4500"
  },
  {
    id: "dehiston-misserian",
    province: "balkan",
    category: "fortress",
    coords: [38.2667, 54.6167],
    era: {
      tk: "X – XIV asyrlar (Horezmşa / Seljuk döwri)",
      en: "10th – 14th century (Seljuk & Khwarazmian era)",
      ru: "X – XIV века (Сельджуки и Хорезмшахи)"
    },
    title: {
      tk: "Gadymy Dehistan (Maşat-Misserian)",
      en: "Ancient Dehistan (Mashad-e Misrian)",
      ru: "Древний Дехистан (Машат-Мисриан)"
    },
    shortDesc: {
      tk: "Balkan çölünde giden gadymy şäher, Şir-Kabir metjidi we belent minaralary bilen meşhur syrly sähradaky şäher.",
      en: "An evocative ghost city in the Misrian plains featuring soaring minarets and the historic Shir-Kabir mosque.",
      ru: "Загадочный средневековый город в песках Балкана с уцелевшими минаретами, порталом соборной мечети и мавзолеем Шир-Кабир."
    },
    fullDesc: {
      tk: "Dehistan (Misserian sähralygy) — Beýik Ýüpek ýolunyň ugrundaky iň syrly we täsirli taryhy şäherleriň biridir. X-XIV asyrlarda Horezmşalar döwründe uly ösüşe eýe bolupdyr. Şäheriň 20 metrden belent iki sany minarasy, baş metjidiň ägirt uly bezegli derweze peştagy we Şir-Kabir (Ali ibn Sukkari) mawzoleýi häzirki güne çenli saklanypdyr. Çölüň ortasyndaky bu gadymy siwilizasiýa hakyky taryhy jadyny döredýär.",
      en: "Isolated amid the wind-swept clay plains of southwest Turkmenistan, Ancient Dehistan was a thriving Silk Road metropolis under the Khwarazmian Empire. Its monumental ruins boast twin 20-meter minarets with ornamental script, the vaulted portal of the grand congregational mosque, and the historic 10th-century Shir-Kabir mosque. Its remote setting adds an unmatched sense of romantic desert discovery.",
      ru: "Затерянный в бескрайней глинистой пустыне Прикаспия, Дехистан некогда был цветущим оазисом Хорезмшахов. До наших дней дошли грандиозный 18-метровый портал соборной мечети, два минарета с затейливой кирпичной вязью и мечеть-мавзолей Шир-Кабир. Невероятный памятник среди первозданной тишины пустыни."
    },
    visitingTips: {
      tk: "Balkanabatdan ýa-da Etrekden 4x4 ulag bilen barmak maslahat berilýär. Çölüň çuňlugynda ýerleşýändigi sebäpli, ýanyňyzda ýeterlik suw we iýmit bolmaly.",
      en: "Access requires an off-road 4WD from Balkanabat or Etrek. Bring plenty of drinking water, fuel, and supplies due to remote desert isolation.",
      ru: "Требуется полноприводный внедорожник из Балканабата или Этрека. Обязателен запас воды и топлива из-за удаленности в пустыне."
    },
    dressCode: {
      tk: "Çöl şemalyndan we gününden goraýan egin-eşik.",
      en: "Desert protective clothing and sturdy boots.",
      ru: "Закрытая одежда для защиты от солнца и песка, походная обувь."
    },
    images: [
      "https://centralasia-adventures.com/image/data/info/turkmenistan/dehistan/02.jpg",
      "https://img.atlasobscura.com/LRJSQZHcB8RsT6F4sb9onhrEu_R4IRmiCCO9BJfPfg0/rt:fit/h:400/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy81ZDM4/Yzk2Yy04MzhiLTQ5/MTMtYjdhYy1iNDBj/YmEyYWI1N2ZiY2M5/ZDIxN2IxNTRhY2M0/MDhfQjk5TjAzLmpw/Zw.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=38.2667,54.6167"
  },
  {
    id: "yangykala",
    province: "balkan",
    category: "natural",
    coords: [40.4667, 54.9167],
    era: {
      tk: "Millionlarça ýyllyk tebigy taryh (Gadymy Tetis ummany)",
      en: "Millions of years old (Prehistoric Tethys Ocean bed)",
      ru: "Миллионы лет геологической истории (Дно океана Тетис)"
    },
    title: {
      tk: "Ýangygala Kanyonlary",
      en: "Yangykala Canyons",
      ru: "Каньоны Янгикала"
    },
    shortDesc: {
      tk: "Gyzyl, sary we ak reňkli 'Otlap duran galalar' — Türkmenistanyň iň ajaýyp tebigy täsinligi.",
      en: "Spectacular chalk canyons named 'Fire Fortresses', sculpted into vivid shades of red, pink, and ochre.",
      ru: "Фантастические 'Огненные крепости' — каньоны из известняка пламенеющих розовых, белых и охристых оттенков."
    },
    fullDesc: {
      tk: "Ýangygala türkmen dilinde «otly gala» diýmegi aňladýar. Millionlarça ýyl mundan ozal bu ýerde gadymy Tetis ummany ýerleşipdir. Suw çekilenden soň, ýel we ýagyş täsirinde ägirt uly tebigy diwarlar, minaralar we kanyonlar emele gelipdir. Gün batanda gaýalar edil ot ýaly gyzaryp, syýahatçylarda öçmejek täsir galdyrýar. Bu ýerde çadyr gurup ýatmak we ýyldyzly asmany synlamak dünýä belli syýahat tejribesidir.",
      en: "Yangykala translates to 'Fire Fortresses'. Once the ancient seabed of the prehistoric Tethys Ocean, millions of years of wind and water erosion have carved the limestone plateau into colossal canyons featuring bands of brilliant white, rose-red, and ochre rock. At sunset, the cliffs seem to catch fire in dramatic crimson hues. A favorite wilderness camping destination.",
      ru: "Янгикала переводится как 'Огненная крепость'. Миллионы лет назад здесь плескались волны древнего океана Тетис. Эрозия обнажила разноцветные пласты пород — от ослепительно белых до бордово-красных. На закате каньон буквально полыхает багрянцем. Идеальное место для пейзажных фотографов и кемпинга."
    },
    visitingTips: {
      tk: "Gözli ata zyýarathanasynyň golaýynda, Türkmenbaşy şäherinden 160 km. 4x4 ulag zerur. Gün batyşyny synlamak aýratyn maslahat berilýär.",
      en: "Near Gozli Ata, ~160 km from Turkmenbashi. 4WD vehicle required. The panoramic views at sunset from the canyon rim are unforgettable.",
      ru: "Недалеко от Гёзли-Ата, около 160 км от Туркменбаши. Нужен внедорожник 4x4. Закат на краю плато оставляет неизгладимое впечатление."
    },
    dressCode: {
      tk: "Şemally baýyrlar üçin ýeňil ýyly eşik we berk sport aýakgaby.",
      en: "Windbreaker jacket and sturdy trekking footwear for clifftops.",
      ru: "Ветрозащитная куртка и треккинговая обувь для ходьбы по краю каньона."
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Turkmenistan-yangykala.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Yangy-Kala-canyon-Balkan-province-Turkmenistan.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Yangykala%20Canyon%20(42422309071).jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=40.4667,54.9167"
  },

  // --- LEBAP WELAÝATY ---
  {
    id: "astana-baba",
    province: "lebap",
    category: "shrine",
    coords: [37.8333, 65.2500],
    era: {
      tk: "XI – XII asyrlar (Irki Orta Asyr)",
      en: "11th – 12th century (Medieval Islamic)",
      ru: "XI – XII века (Средневековье)"
    },
    title: {
      tk: "Astana-Baba Mawzoleý Toplumy",
      en: "Astana-Baba Mausoleum Complex",
      ru: "Мемориальный комплекс Астана-Баба"
    },
    shortDesc: {
      tk: "Kerki etrabynda ýerleşýän, 4 sany gümmezli, rowaýatly söýgi we perzent dilegleri bilen baglanyşykly mukaddes zyýarathana.",
      en: "A unique four-domed memorial sanctuary in Kerki, wrapped in poignant local legends of devotion and healing.",
      ru: "Уникальный четырёхкупольный ансамбль в этрапе Керки, овеянный трогательными легендами об отцовской любви и исцелении."
    },
    fullDesc: {
      tk: "Astana-baba mawzoleýi Amyderýanyň çep kenarynda, Kerki şäheriniň golaýynda ýerleşýär. Bu toplum Zeýd Aly bilen Zuweýda Alynyň aramgählerini, çillehanalary we metjidi öz içine alýar. Rowaýata görä, Balhyň hökümdary gyzy Zubeýda aradan çykanda bu mawzoleýi saldyryp başlaýar, ýöne gümmez gaýta-gaýta ýumrulýar. Şonda düýşünde gören keramatly akyldaryň maslahaty bilen Makkadan topragy we mukaddes suwy getirip palçyk edip guranlaryndan soň, bina berdaş berýär. Bu ýer maşgala agzybirligi üçin iň meşhur zyýarat merkezidir.",
      en: "Situated near Kerki along the Amu Darya river, the Astana-Baba complex features a distinctive multi-domed architecture encompassing the shrines of Zayd Ali and Zuwayda Ali. According to folklore, the ruler of Balkh constructed it for his beloved daughter; after repeated dome collapses, a saintly vision advised him to mix clay with soil and water brought from Mecca. The shrine remains deeply venerated for family blessings.",
      ru: "Комплекс Астана-Баба расположен близ Керки на берегу Амударьи. Включает мавзолеи Зейд-Али и Зувейда-Али, мечеть и крытые переходы под четырьмя куполами. По преданию, правитель Балха строил мавзолей для внезапно умершей дочери-красавицы, но купол рушился, пока зодчие не добавили в глину священную воду и землю из Мекки. Почитаемое место семейного паломничества."
    },
    visitingTips: {
      tk: "Kerki şäherinden bary-ýogy 15 km. Ýol gowy we baryp görmek aňsat. Toplumda arassa seýilgäh we dileg otaglary bar.",
      en: "Located 15 km from Kerki town center. Easily accessible via paved road. Clean courtyard and peaceful surroundings.",
      ru: "В 15 км от города Керки. Легко доступен по хорошей асфальтированной дороге. Ухоженная территория и зоны отдыха."
    },
    dressCode: {
      tk: "Zyýarat edebine laýyk lybas.",
      en: "Respectful pilgrim dress.",
      ru: "Скромная одежда для входа в мавзолей."
    },
    images: [
      "https://www.advantour.com/img/turkmenistan/turkmenabad/astana-baba.jpg",
      "https://trvlland.com/wp-content/uploads/2024/12/turkmenistan_turkmenabat_astan-baba-mausoleum-1024x768.jpg",
      "https://stantrips.com/_next/static/media/astana-baba.285515ff.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=37.8333,65.2500"
  },
  {
    id: "dayahatyn",
    province: "lebap",
    category: "caravanserai",
    coords: [39.7500, 62.9000],
    era: {
      tk: "XI – XII asyrlar (Beýik Seljuk döwri)",
      en: "11th – 12th century (Great Seljuk era)",
      ru: "XI – XII века (Эпоха Великих Сельджуков)"
    },
    title: {
      tk: "Daýahatyn Kerwensaraýy",
      en: "Dayahatyn Caravanserai",
      ru: "Караван-сарай Даяхатын"
    },
    shortDesc: {
      tk: "Amyderýanyň boýunda, Beýik Ýüpek ýolunyň ugrunda bütewi saklanyp galan dünýä belli iň ajaýyp we nepis kerpiç bezegli kerwensaraý.",
      en: "The best-preserved Silk Road caravanserai in Central Asia, renowned for its intricate geometric brickwork along the Amu Darya.",
      ru: "Наиболее полно сохранившийся караван-сарай Шёлкового пути в Центральной Азии с виртуозной фигурной кладкой на берегу Амударьи."
    },
    fullDesc: {
      tk: "Daýahatyn (Baýhatyn) kerwensaraýy Amyderýanyň sag kenarynda, Horezme we Buhara gidýän möhüm kerwen ýolunyň ugrunda ýerleşýär. Inedördül görnüşli bu ägirt uly kerwensaraý Seljuklar döwrüniň nepis kerpiç nagşy, girelge peştagy, myhman otaglary we içki howlusy bilen haýran galdyrýar. Rowaýata görä, ony baý we päkize hatyn söýgülisine garaşyp gurdurypdyr. Binanyň diwarlarynda arap hatynda Allanyň we Seljuk hökümdarlarynyň atlary ýazylypdyr.",
      en: "Strategically located along the northern Silk Road route tracing the Amu Darya river toward Khiva and Bukhara, Dayahatyn is widely recognized as the finest surviving medieval caravanserai in Central Asia. Featuring symmetrical baked-brick ramparts, monumental vaulted portals, and private guest suites around a courtyard, its walls display decorative brick calligraphy honoring the Seljuk sultans.",
      ru: "Караван-сарай Даяхатын (Байхатын) расположен на древнем пути вдоль Амударьи в сторону Хорезма. Это подлинная жемчужина сельджукского кирпичного орнамента. Квадратный в плане замок с круглыми угловыми башнями сохранил просторный внутренний двор, сводчатые покои для купцов и стойла для верблюдов. Легенда связывает его постройку с верной знатной дамой, ожидавшей своего мужа."
    },
    visitingTips: {
      tk: "Türkmenabat şäherinden 170 km demirgazykda, Darganata ugrunda. Ýol ugrunda Amyderýanyň ajaýyp tokaýlyklaryny synlap bolýar.",
      en: "170 km north of Turkmenabat toward Darganata. Can be combined with an eco-tour of the Amu Darya riverine reserves.",
      ru: "170 км к северу от Туркменабата в сторону Дарганаты. Дорога проходит вдоль живописной поймы реки Амударья."
    },
    dressCode: {
      tk: "Amatly syýahat lybasy we aýakgaby.",
      en: "Outdoor trekking clothes and shoes.",
      ru: "Удобная походная одежда."
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Dayahatyn%20Caravansaray%2C%20Main%20Gate.JPG",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Interior%20view%20Dayahatyn%20caravansarai%20Turkmenistan.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=39.7500,62.9000"
  },
  {
    id: "kyrk-gyz-koytendag",
    province: "lebap",
    category: "natural",
    coords: [37.8167, 66.4500],
    era: {
      tk: "Gadymy rowaýat döwri / Ýura döwri tebigaty",
      en: "Ancient folklore / Jurassic period nature",
      ru: "Древнейшие легенды / Юрский период"
    },
    title: {
      tk: "Kyrk Gyz Gowagy we Köýtendag",
      en: "Kyrk Gyz Cave & Koytendag",
      ru: "Грот Кырк-Гыз и Койтендаг"
    },
    shortDesc: {
      tk: "Köýtendagyň jümmüşindäki mukaddes gowak, arzuw-niýet lentajyklary we dünýä meşhur dinozawrlaryň yzlary.",
      en: "A sacred grotto of wish-ribbons and mystery in Koytendag, nestled near the world-famous Dinosaur Plateau.",
      ru: "Священный грот сорока девушек в горах Койтендаг с тысячами ленточек желаний, рядом со знаменитым Плато Динозавров."
    },
    fullDesc: {
      tk: "Köýtendagyň eteginde ýerleşýän Kyrk Gyz gowagy gadymdan bäri mukaddes zyýarathana hasaplanýar. Rowaýata görä, kyrk sany günäsiz gyz basybalyjylardan gaçyp şu gowaga giripdir we Allaha doga edip daşa öwrülipdir. Zyýaratçylar gowagyň potologyndaky stalaktitlere laçyk palçygy bilen arzuw edip mata böleklerini (lentajyklary) ýelmeýärler. Gowagyň golaýynda bolsa dünýäde iň uly 'Dinozawrlaryň yzlary platosy' ýerleşýär.",
      en: "The Kyrk Gyz ('Forty Maidens') cave is a sacred geological grotto in the dramatic Koytendag mountains. Tradition relates that forty local maidens retreated here to escape capture, beseeching the heavens to turn them into stone. Visitors affix clay balls with colorful wish ribbons to the ceiling stalactites. The area is also world-renowned for the nearby Dinosaur Plateau, bearing over 400 prehistoric Jurassic tracks.",
      ru: "Грот Кырк-Гыз ('Сорок девушек') — почитаемая природная святыня ущелья в горах Койтендаг. По преданию, сорок праведных девушек скрылись здесь от врагов и обратились в камень. Паломники бросают к потолку грота кусочки глины с цветными лоскутками материи, загадывая сокровенные желания. Рядом находится уникальное Плато Динозавров с сотнями отпечатков лап юрского периода."
    },
    visitingTips: {
      tk: "Kerki şäherinden Köýtendaga tarap 120 km. Dag howasy tämiz we salkyn. Dinozawrlaryň yzly platosy we Umbar deresi bilen bilelikde baryp görmek iň amatlysy.",
      en: "Around 120 km from Kerki into the Koytendag Nature Reserve. Best combined with the Dinosaur Plateau and Umbar waterfalls.",
      ru: "Около 120 км от Керки. Рекомендуется совместить с посещением Плато Динозавров и водопада Умбар-дере. Захватите фотоаппарат."
    },
    dressCode: {
      tk: "Dag ýodalarynda ýöremäge niýetlenen batinkalar, ýeňil dag lybasy.",
      en: "Sturdy hiking boots suitable for rocky mountain trails.",
      ru: "Горные треккинговые ботинки и удобная спортивная одежда."
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Dinosaur-plateau.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Dinosaur-plateau.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=37.8167,66.4500"
  },

  // --- MERKEZI TÄSINLIK (AHAL/DAŞOGUZ SERHEDI) ---
  {
    id: "darvaza",
    province: "ahal",
    category: "natural",
    coords: [40.2526, 58.4397],
    era: {
      tk: "1971-nji ýyldan bäri ýanýan tebigy gaz krateri",
      en: "Burning natural gas crater since 1971",
      ru: "Пылающий газовый кратер с 1971 года"
    },
    title: {
      tk: "Derweze Gaz Krateri ('Garagum Ýagtysy')",
      en: "Darvaza Gas Crater ('Shining of Karakum')",
      ru: "Газовый кратер Дарваза ('Сияние Каракумов')"
    },
    shortDesc: {
      tk: "Garagum çölüniň jümmüşinde ýarym asyrdan bäri lowlap ýanýan, dünýä syýahatçylarynyň iň köp gelýän täsin tebigy ýeri.",
      en: "The world-famous 'Door to Hell', a fiery natural gas crater burning continuously in the heart of the Karakum Desert.",
      ru: "Знаменитые 'Врата ада' — пылающий газовый кратер диаметром 70 метров посреди пустыни Каракумы."
    },
    fullDesc: {
      tk: "Derweze gaz krateri Aşgabat bilen Daşogzuň arasyndaky Garagum çölüniň merkezinde ýerleşýär. Diametri 70 metr, çuňlugy 30 metr bolan bu ägirt uly oýuk 1971-nji ýylda geologiki barlaglar wagtynda gaz çykmagy sebäpli ýanyp başlapdyr we şondan bäri gije-gündiz alawlap dur. Gijesine çölüň garaňkylygynda altyn-gyzyl alawlaryň saçýan ýagtysy dünýäde deňi-taýy bolmadyk gözellik döredýär. Krateriň golaýynda türkmen ak öýlerinde (ýurtalarda) gijä galmak syýahatçylar üçin unudylmajak tejribedir.",
      en: "Located in the heart of the Karakum desert halfway between Ashgabat and Dashoguz, the Darvaza crater measures roughly 70 meters across and 30 meters deep. Ignited in 1971 during geological drilling to burn off natural gas, it has burned unabated for over 50 years. At night under desert constellations, its dancing flames resemble a glowing subterranean furnace. Traditional Turkmen yurts nearby offer authentic desert hospitality.",
      ru: "Кратер Дарваза расположен в сердце пустыни Каракумы. Огромная огненная воронка диаметром около 70 метров и глубиной 30 метров непрерывно пылает с 1971 года. Ночью зарево огня видно за километры, создавая космический пейзаж под звёздным куполом пустыни. Рядом разбит традиционный юртовый лагерь для ночлега туристов."
    },
    visitingTips: {
      tk: "Aşgabatdan 260 km demirgazykda. Günüň batmagyna 1-2 sagat galanda baryp, gijeki alawlary we ertirki gün dogşuny synlamak iň gowusydyr. Çöldäki ýurtalarda gijä galyp bolýar.",
      en: "260 km north of Ashgabat along the Dashoguz highway. Arrive before sunset to witness the daylight-to-night transformation. Overnight stay in a desert yurt is strongly recommended.",
      ru: "260 км к северу от Ашхабада. Лучше всего прибывать к закату, чтобы увидеть кратер в лучах заходящего солнца и в ночной темноте. Доступен ночлег в аутентичных туркменских юртах."
    },
    dressCode: {
      tk: "Gijesine çöl sowuk bolup bilýär, ýyly egin-eşik we aýakgap gerek.",
      en: "Warm layers for chilly desert nights, closed toe footwear.",
      ru: "Тёплая одежда для ночи в пустыне, закрытая обувь."
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Darvasa%20gas%20crater%20panorama.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Darvaza%20Gas%20Crater.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Inside%20Darvaza%20gas%20crater%2C%20J%C3%A4hennem%20derwezesi%2C%20Door%20to%20Hell%2C%20Gates%20of%20Hell%2C%20Derweze%2C%20Turkmenistan.jpg"
    ],
    googleMaps: "https://www.google.com/maps/search/?api=1&query=40.2526,58.4397"
  }
];

// STARTING HUBS & MAJOR CITIES FOR CAR ROUTES
const START_HUBS = [
  { id: "hub_ashgabat", name: { tk: "Aşgabat şäheri (Paýtagt)", en: "Ashgabat (Capital)", ru: "город Ашхабад (Столица)" }, coords: [37.9500, 58.3833] },
  { id: "hub_mary", name: { tk: "Mary şäheri", en: "Mary city", ru: "город Мары" }, coords: [37.5958, 61.8289] },
  { id: "hub_turkmenbashi", name: { tk: "Türkmenbaşy şäheri (Hazar)", en: "Turkmenbashi (Caspian)", ru: "город Туркменбаши" }, coords: [40.0167, 52.9667] },
  { id: "hub_balkanabat", name: { tk: "Balkanabat şäheri", en: "Balkanabat", ru: "город Балканабат" }, coords: [39.5167, 54.3667] },
  { id: "hub_dashoguz", name: { tk: "Daşoguz şäheri", en: "Dashoguz city", ru: "город Дашогуз" }, coords: [41.8333, 59.9667] },
  { id: "hub_turkmenabat", name: { tk: "Türkmenabat şäheri (Çärjew)", en: "Turkmenabat", ru: "город Туркменабат" }, coords: [39.0833, 63.5833] },
  { id: "hub_kerki", name: { tk: "Kerki şäheri", en: "Kerki town", ru: "город Керки" }, coords: [37.8333, 65.2000] }
];

// TAÝYN SYÝAHAT MARŞRUTLARY / CURATED TRAVEL ROUTES
const ROUTES_DATA = [
  {
    id: "route-silk-road",
    name: {
      tk: "Beýik Ýüpek Ýolunyň Şöhraty (Top 4)",
      en: "Glory of the Great Silk Road (Top 4)",
      ru: "Величие Великого Шёлкового Пути (Топ 4)"
    },
    duration: {
      tk: "5-7 gün (Awtoulagda ~16 sagat)",
      en: "5-7 days (~16 hrs driving)",
      ru: "5-7 дней (~16 часов за рулём)"
    },
    distanceKm: "1,180 km",
    mainHighway: {
      tk: "M37 Beýik Ýüpek ýoly & Garagum trassasy",
      en: "M37 Silk Road & Karakum Highway",
      ru: "Трасса M37 Шёлковый путь и Каракумское шоссе"
    },
    description: {
      tk: "ÝUNESKO-nyň Bütindünýä mirasyna giren gadymy paýtagtlar we kerwensaraýlar boýunça hakyky awtomobil ýoly: Aşgabat -> Nusaý -> Abiwerd -> Gadymy Merw -> Köneürgenç.",
      en: "The classic trans-Turkmenistan highway route exploring UNESCO World Heritage centers: Ashgabat -> Old Nisa -> Abiwerd -> Ancient Merv -> Kunya-Urgench.",
      ru: "Классический автомобильный маршрут по памятникам Всемирного наследия ЮНЕСКО: Ашхабад -> Старая Ниса -> Абиверд -> Древний Мерв -> Куня-Ургенч."
    },
    color: "#d4a373",
    siteIds: ["nisay", "abiwerd", "soltan-sanjar", "gyzgala", "torebeg-hanym", "gutlug-timur"]
  },
  {
    id: "route-pilgrimage-shrines",
    name: {
      tk: "Mukaddes Zyýarathanalar we Ruhy Ojaklar",
      en: "Sacred Pilgrimage & Spiritual Shrines",
      ru: "Священные Паломнические Места"
    },
    duration: {
      tk: "4-6 gün (Awtoulagda ~20 sagat)",
      en: "4-6 days (~20 hrs driving)",
      ru: "4-6 дней (~20 часов за рулём)"
    },
    distanceKm: "1,450 km",
    mainHighway: {
      tk: "M37, Ustyurt çinkleri we Köpetdag ýollary",
      en: "M37, Ustyurt Canyons & Kopet Dag Routes",
      ru: "Трасса M37, чинки Устюрта и Копетдагские дороги"
    },
    description: {
      tk: "Halkyň asyrlar boýy ruhy derman tapan keramatly öwlüýäleri boýunça awtomobil syýahaty: Paraw Bibi -> Gözli Ata -> Nejmeddin Kubra -> Ysmamyt Ata -> Ýusup Hemedany -> Astana-Baba.",
      en: "A deeply spiritual driving journey connecting the most venerated holy shrines and saint sanctuaries across Turkmenistan's mountains, desert canyons, and oases.",
      ru: "Автомобильное паломничество по главным святым обителям и мавзолеям Туркменистана от Копетдага до чинков Устюрта."
    },
    color: "#14919b",
    siteIds: ["paraw-bibi", "gozli-ata", "nejmeddin-kubra", "ysmamyt-ata", "yusup-hemedany", "astana-baba"]
  },
  {
    id: "route-natural-wonders",
    name: {
      tk: "Tebigy Täsinlikler we Çöl Jadylygy",
      en: "Natural Wonders & Desert Horizons",
      ru: "Природные Чудеса и Пустыня"
    },
    duration: {
      tk: "3-5 gün (Awtoulagda ~15 sagat)",
      en: "3-5 days (~15 hrs driving)",
      ru: "3-5 дней (~15 часов за рулём)"
    },
    distanceKm: "1,220 km",
    mainHighway: {
      tk: "Garagum demirgazyk trassasy & Balkan kanyon ýollary",
      en: "North Karakum Highway & Balkan Canyon roads",
      ru: "Северная Каракумская трасса и дороги Балкана"
    },
    description: {
      tk: "Garagumyň alawlaryndan Tetis ummanynyň kanyonlaryna çenli iň täsirli tebigy awtomobil marşruty: Kow-Ata -> Derweze Gaz Krateri -> Ýangygala Kanyonlary -> Kyrk Gyz Köýtendag.",
      en: "From subterranean warm lakes and the fiery Darvaza crater to the surreal chalk canyons of Yangykala and Koytendag caves.",
      ru: "Захватывающий природный автомаршрут: от подземного озера Ков-Ата и пылающего кратера Дарваза до каньонов Янгикала и грота Койтендага."
    },
    color: "#e76f51",
    siteIds: ["kow-ata", "darvaza", "yangykala", "kyrk-gyz-koytendag"]
  }
];

// TRANSLATIONS / DIL SÖZLÜGI
const I18N = {
  tk: {
    siteTitle: "Türkmenistanyň Taryhy we Zyýarat Ýerleri",
    siteSubtitle: "Syýahatçylar we zyýaratçylar üçin interaktiw gollanma we karta",
    searchPlaceholder: "Ýeriň ady, welaýat ýa-da açarsöz boýunça gözleg...",
    allProvinces: "Ähli Welaýatlar",
    ahal: "Ahal & Aşgabat",
    mary: "Mary welaýaty",
    dashoguz: "Daşoguz welaýaty",
    balkan: "Balkan welaýaty",
    lebap: "Lebap welaýaty",
    allCategories: "Ähli Kategoriýalar",
    cat_unesco: "ÝUNESKO Mirasy",
    cat_shrine: "Mukaddes Zyýarathana",
    cat_mausoleum: "Mawzoleý & Metjit",
    cat_fortress: "Gala & Şäher",
    cat_caravanserai: "Kerwensaraý",
    cat_natural: "Tebigy Täsinlik",
    routesTab: "Taýyn Marşrutlar",
    sitesTab: "Ýerleriň Sanawy",
    favoritesTab: "Halananlar",
    clearFilter: "Arassala",
    viewOnMap: "Kartada görkez",
    detailsBtn: "Giňişleýin maglumat",
    navigateGoogle: "Google Navigator (Awtoulag)",
    navigateYandex: "Yandex Navigator",
    visitingTipsHeading: "Syýahatçylar üçin amaly maslahatlar:",
    dressCodeHeading: "Lybasa we zyýarata degişli talaplar:",
    eraLabel: "Taryhy döwri:",
    provinceLabel: "Welaýaty:",
    categoryLabel: "Kategoriýasy:",
    mapLayerGoogle: "Google Karta",
    mapLayerSatellite: "Google Hemra (Satellite)",
    mapLayerTerrain: "Google Releýf",
    mapLayerYandex: "Yandex Karta",
    totalSitesCount: "jemi ýer",
    noResults: "Gözlegiňize gabat gelýän ýer tapylmady.",
    routeLength: "Wagty:",
    routeStops: "Duralgalar:",
    addedToFavorites: "Halananlara goşuldy",
    removedFromFavorites: "Halananlardan aýryldy",
    share: "Paýlaş",
    copiedLink: "Baglanyşyk göçürildi!",
    // Route Planner & Google Navigator
    routePlannerHeading: "🚗 Awtoulag Marşrutuny Meýilleşdiriji",
    routePlannerSubtitle: "Iň ýakyn awtomobil ýollary boýunça ugur hasaplaň we Google Navigator bilen gidiň",
    startPointLabel: "Başlangyç nokady:",
    destPointLabel: "Barmaly ýadygärlik:",
    myLocationOption: "📍 Meniň häzirki ýerim (GPS)",
    calcRouteBtn: "🚗 Awtoulag Ýoluny Çyz",
    openInGoogleNav: "🧭 Google Navigatorda Aç",
    openInYandexNav: "Yandex Navigator",
    routeDistance: "Awtoulag ýoly:",
    routeDurationDrive: "Sürüş wagty:",
    mainRoadLabel: "Esasy trassa:",
    driveFromAshgabatBtn: "🚗 Aşgabatdan ýol çyz",
    curatedRoutesHeading: "Taýyn Syýahat Marşrutlary",
    calculatingRoute: "Awtoulag ýoly hasaplanýar...",
    modalFavLabel: "Hala",
    bNavSites: "Ýerler",
    bNavRoutes: "Ýollar",
    bNavFavs: "Halanan",
    bNavMap: "Karta",
    mobileFloatingList: "Sanawy görkez",
    mobileFloatingMap: "Karta geçmek",
    legendToggle: "Kategoriýalar"
  },
  en: {
    siteTitle: "Sacred & Historical Places of Turkmenistan",
    siteSubtitle: "Interactive Tourist Map & Pilgrim Guide to Ancient Heritage",
    searchPlaceholder: "Search by place name, province, or keyword...",
    allProvinces: "All Provinces",
    ahal: "Ahal & Ashgabat",
    mary: "Mary Province",
    dashoguz: "Dashoguz Province",
    balkan: "Balkan Province",
    lebap: "Lebap Province",
    allCategories: "All Categories",
    cat_unesco: "UNESCO World Heritage",
    cat_shrine: "Sacred Pilgrimage Shrine",
    cat_mausoleum: "Mausoleum & Mosque",
    cat_fortress: "Fortress & Ancient City",
    cat_caravanserai: "Caravanserai",
    cat_natural: "Natural Wonder",
    routesTab: "Curated Routes",
    sitesTab: "Heritage Sites",
    favoritesTab: "Saved Sites",
    clearFilter: "Reset",
    viewOnMap: "Show on Map",
    detailsBtn: "Full Details",
    navigateGoogle: "Google Navigator (Drive)",
    navigateYandex: "Yandex Navigator",
    visitingTipsHeading: "Practical Visitor Tips:",
    dressCodeHeading: "Dress Code & Etiquette:",
    eraLabel: "Historical Era:",
    provinceLabel: "Province:",
    categoryLabel: "Category:",
    mapLayerGoogle: "Google Maps",
    mapLayerSatellite: "Google Satellite",
    mapLayerTerrain: "Google Terrain",
    mapLayerYandex: "Yandex Maps",
    totalSitesCount: "sites found",
    noResults: "No heritage sites match your criteria.",
    routeLength: "Duration:",
    routeStops: "Route stops:",
    addedToFavorites: "Added to favorites",
    removedFromFavorites: "Removed from favorites",
    share: "Share",
    copiedLink: "Link copied to clipboard!",
    // Route Planner & Google Navigator
    routePlannerHeading: "🚗 Automobile Route Planner",
    routePlannerSubtitle: "Calculate real driving directions along highways & navigate with Google Maps",
    startPointLabel: "Starting point:",
    destPointLabel: "Destination site:",
    myLocationOption: "📍 My current location (GPS)",
    calcRouteBtn: "🚗 Draw Driving Route",
    openInGoogleNav: "🧭 Open in Google Navigator",
    openInYandexNav: "Yandex Navigator",
    routeDistance: "Road distance:",
    routeDurationDrive: "Driving time:",
    mainRoadLabel: "Main highway:",
    driveFromAshgabatBtn: "🚗 Drive from Ashgabat",
    curatedRoutesHeading: "Curated Driving Routes",
    calculatingRoute: "Calculating driving route...",
    modalFavLabel: "Save",
    bNavSites: "Sites",
    bNavRoutes: "Routes",
    bNavFavs: "Saved",
    bNavMap: "Map",
    mobileFloatingList: "Show List",
    mobileFloatingMap: "Back to Map",
    legendToggle: "Categories"
  },
  ru: {
    siteTitle: "Карта Священных и Древних Мест Туркменистана",
    siteSubtitle: "Интерактивный путеводитель для туристов и паломников",
    searchPlaceholder: "Поиск по названию места, велаяту или ключевому слову...",
    allProvinces: "Все велаяты",
    ahal: "Ахал и Ашхабад",
    mary: "Марыйский велаят",
    dashoguz: "Дашогузский велаят",
    balkan: "Балканский велаят",
    lebap: "Лебапский велаят",
    allCategories: "Все категории",
    cat_unesco: "Наследие ЮНЕСКО",
    cat_shrine: "Священное место / Мазар",
    cat_mausoleum: "Мавзолей и Мечеть",
    cat_fortress: "Крепость и Городище",
    cat_caravanserai: "Караван-сарай",
    cat_natural: "Природное чудо",
    routesTab: "Готовые Маршруты",
    sitesTab: "Список мест",
    favoritesTab: "Избранное",
    clearFilter: "Сброс",
    viewOnMap: "Показать на карте",
    detailsBtn: "Подробнее",
    navigateGoogle: "Google Навигатор (Авто)",
    navigateYandex: "Яндекс Навигатор",
    visitingTipsHeading: "Практические советы туристу:",
    dressCodeHeading: "Дресс-код и правила посещения:",
    eraLabel: "Эпоха:",
    provinceLabel: "Велаят:",
    categoryLabel: "Категория:",
    mapLayerGoogle: "Google Карты",
    mapLayerSatellite: "Google Спутник",
    mapLayerTerrain: "Google Рельеф",
    mapLayerYandex: "Яндекс Карты",
    totalSitesCount: "мест найдено",
    noResults: "По вашему запросу мест не найдено.",
    routeLength: "Время:",
    routeStops: "Остановки:",
    addedToFavorites: "Добавлено в избранное",
    removedFromFavorites: "Удалено из избранного",
    share: "Поделиться",
    copiedLink: "Ссылка скопирована!",
    // Route Planner & Google Navigator
    routePlannerHeading: "🚗 Планировщик Автомаршрута",
    routePlannerSubtitle: "Расчёт кратчайшего маршрута по автомагистралям и навигация в Google Maps",
    startPointLabel: "Точка отправления:",
    destPointLabel: "Пункт назначения:",
    myLocationOption: "📍 Моё текущее местоположение (GPS)",
    calcRouteBtn: "🚗 Проложить автодорогу",
    openInGoogleNav: "🧭 Открыть в Google Навигаторе",
    openInYandexNav: "Яндекс Навигатор",
    routeDistance: "Длина автодороги:",
    routeDurationDrive: "Время в пути:",
    mainRoadLabel: "Главная трасса:",
    driveFromAshgabatBtn: "🚗 Маршрут из Ашхабада",
    curatedRoutesHeading: "Готовые Автомаршруты",
    calculatingRoute: "Прокладывается автодорога...",
    modalFavLabel: "В избранное",
    bNavSites: "Места",
    bNavRoutes: "Маршруты",
    bNavFavs: "Избранное",
    bNavMap: "Карта",
    mobileFloatingList: "Показать список",
    mobileFloatingMap: "К карте",
    legendToggle: "Категории"
  }
};

