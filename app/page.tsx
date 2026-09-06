type Link = { label: string; href: string };
type Item = { time: string; title: string; note?: string; links?: Link[]; flight?: string; reserved?: boolean; pending?: boolean };
type Day = { id: string; date: string; nav: string; place: string; title: string; route: string; tags: string[]; sleep?: string; items: Item[] };

const stays = [
  { name: '三井花園飯店福岡中洲', place: '福岡・中洲', dates: '3/20－3/21｜1 晚', price: '¥42,402', priceNote: '含早餐', bookingLabel: 'Booking.com', href: 'https://www.gardenhotels.co.jp/fukuoka-nakasu/tw/', map: 'https://www.google.com/maps/search/?api=1&query=Mitsui+Garden+Hotel+Fukuoka+Nakasu' },
  { name: 'BEB5 門司港 by 星野集團', place: '門司港', dates: '3/21－3/22｜1 晚', price: '¥24,140', bookingLabel: '訂房資訊', bookingHref: 'https://hoshinoresorts.com/reservations/#/CH/hotels/0000000206', href: 'https://hoshinoresorts.com/zh_tw/hotels/beb5mojiko/', map: 'https://www.google.com/maps/search/?api=1&query=BEB5+Mojiko+by+Hoshino+Resorts' },
  { name: '星野集團 界 別府', place: '別府', dates: '3/22－3/24｜2 晚', price: '¥107,040', bookingLabel: '訂房資訊', bookingHref: 'https://hoshinoresorts.com/reservations/#/CH/hotels/0000000206', href: 'https://hoshinoresorts.com/zh_tw/hotels/kaibeppu/', map: 'https://www.google.com/maps/search/?api=1&query=KAI+Beppu' },
  { name: 'THE BLOSSOM HAKATA Premier', place: '福岡・博多', dates: '3/24－3/28｜4 晚', price: '¥128,022', bookingLabel: 'JR Hotel Members App', payment: '現場付款', href: 'https://www.jrk-hotels.co.jp/tw/Hakata_premier/', map: 'https://www.google.com/maps/search/?api=1&query=THE+BLOSSOM+HAKATA+Premier' },
];

const days: Day[] = [
  {
    id: 'd0320', date: '2027/03/20（六）', nav: '3/20 六', place: '福岡', title: '抵達福岡・中洲入住', route: '桃園 → 福岡機場 → 中洲 → 飯店', tags: ['抵達日', 'JX840'], sleep: '福岡住宿',
    items: [
      { time: '14:45–18:00', title: '桃園飛往福岡', note: '星宇航空 JX840。', flight: 'JX840', links: [{ label: '桃園機場 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Taiwan+Taoyuan+International+Airport' }] },
      { time: '18:00–20:00', title: '福岡機場入境、前往中洲', note: '領取行李後搭地鐵或計程車前往飯店。', links: [{ label: '福岡機場 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Fukuoka+Airport' }] },
      { time: '20:00 起', title: '飯店入住・附近晚餐', note: '第一晚不排跨區景點，早點休息。', links: [{ label: '飯店 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Mitsui+Garden+Hotel+Fukuoka+Nakasu' }] },
    ],
  },
  {
    id: 'd0321', date: '2027/03/21（日）', nav: '3/21 日', place: '門司港', title: '福津・小倉・門司港', route: '飯店 → Toyota Rent a Car 中洲店 → かがみの海（福間海岸）→ 宮地嶽神社（時間允許）→ 小倉城 → BEB5門司港 → 門司港懷舊 → 燒咖哩 → 皿倉山夜景（天氣良好時）', tags: ['自駕', '福津・北九州'], sleep: 'BEB5門司港 by 星野集團',
    items: [
      { time: '早餐', title: '飯店早餐、退房', note: '取車前先在飯店吃早餐，退房後再前往租車門市。' },
      { time: '09:00', title: 'Toyota Rent a Car 中洲店取車', note: '早餐、退房完成後前往門市，取車後正式開始當天自駕行程。', links: [{ label: '租車門市 Google Maps', href: 'https://maps.app.goo.gl/8M3oEenfrbYjNLWb6' }] },
      { time: '上午', title: 'かがみの海／福間海岸', note: '鏡海的倒影效果受潮汐、風勢與天氣影響很大，實際出發時間建議依 2027/03/21 當日乾潮時間再微調；若條件不佳則以一般海岸散步為主。', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kagami+no+Umi+Fukuma+Beach' }] },
      { time: '上午～中午', title: '宮地嶽神社（可選景點）', note: '與鏡海距離近，若當天鏡海停留較久、潮汐時間不利或後續行程較晚，可直接跳過。可參拜神社，並從參道方向眺望玄界灘與光之道景觀方向。', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Miyajidake+Shrine' }] },
      { time: '中午', title: '前往小倉・午餐', note: '抵達小倉後先安排午餐，再前往小倉城周邊。' },
      { time: '下午', title: '小倉城・勝山公園', note: '以小倉城為主要景點，視當天停留時間決定是否進入小倉城庭園；3 月下旬若當年櫻花較早，也可順便欣賞勝山公園周邊花況。', links: [{ label: '小倉城 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kokura+Castle' }] },
      { time: '下午', title: '前往門司港・BEB5 Check-in', note: '下午前往門司港，抵達後先辦理 BEB5門司港 Check-in。原則上將車停好，再以步行方式遊覽門司港。', links: [{ label: '飯店 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=BEB5+Mojiko+by+Hoshino+Resorts' }] },
      { time: '下午～傍晚', title: '門司港懷舊散步', note: '建議順序：門司港站 → 舊門司三井俱樂部 → 海峽廣場 → Blue Wing Moji → 門司港懷舊街區。Check-in 後以步行為主，不需要在門司港懷舊區內頻繁移動車輛。', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Mojiko+Retro' }] },
      { time: '傍晚～晚上', title: '門司港燒咖哩', note: '門司港散步途中或結束後安排燒咖哩，實際餐廳之後再決定。' },
      { time: '晚上', title: '皿倉山纜車・夜景（天氣良好時）', note: '視當天天氣、能見度與纜車營運狀況決定是否前往。若皿倉山天候不佳，改到門司港展望台，以室內觀景作為備案；若港區能見度仍差，則取消夜景行程並留在門司港／BEB5休息。2027 年正式營業時間公布後再確認末班時間。', links: [{ label: '皿倉山 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Sarakurayama+Cable+Car' }, { label: '備案｜門司港展望台 Google Maps', href: 'https://maps.app.goo.gl/nExzfrnwxRyje13EA' }] },
      { time: '晚上', title: '返回 BEB5門司港', note: '返回飯店後休息，可使用飯店設施；不再安排其他跨區景點。若皿倉山取消，則直接在門司港與飯店休息。', links: [{ label: '飯店 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=BEB5+Mojiko+by+Hoshino+Resorts' }] },
    ],
  },
  {
    id: 'd0322', date: '2027/03/22（一）', nav: '3/22 一', place: '別府', title: '門司港 → 關門海峽 → 別府', route: 'BEB5門司港 → 和布刈公園／關門海峽 → 九州自然動物公園 → 界 別府', tags: ['自駕', '移動日'], sleep: '別府住宿',
    items: [
      { time: '早餐', title: 'BEB5門司港早餐、退房', note: '早上先在飯店吃早餐，保留一些享受飯店與門司港景色的時間，早餐後再退房。', links: [{ label: '飯店 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=BEB5+Mojiko+by+Hoshino+Resorts' }] },
      { time: '上午', title: '和布刈公園・關門海峽', note: '作為離開門司港前的短停景點，不安排長時間健行；欣賞關門海峽、關門橋與對岸下關景色後，直接往別府方向南下。', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Mekari+Park' }] },
      { time: '上午～中午', title: '前往九州自然動物公園', note: '從門司港一路往大分方向南下，這段以移動為主。' },
      { time: '中午～下午', title: '九州自然動物公園 African Safari', note: '今日 17:30 有界別府固定晚餐，因此下午行程以準時抵達飯店為最高優先；若前段交通延誤，縮短動物公園停留時間。', links: [{ label: '動物園 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=African+Safari+Oita' }, { label: '動物園官方網站', href: 'https://www.africansafari.co.jp/' }] },
      { time: '下午', title: '前往界 別府・Check-in', note: '下午返回界別府，盡量提早 Check-in，保留旅館活動與溫泉時間；不再加入其他下午景點。', links: [{ label: '界 別府 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=KAI+Beppu' }, { label: '界 別府官方網站', href: 'https://hoshinoresorts.com/zh_tw/hotels/kaibeppu/' }] },
      { time: '17:30', title: '飯店晚餐', note: '固定用餐時間，行程請預留準時返回飯店。', reserved: true },
    ],
  },
  {
    id: 'd0323', date: '2027/03/23（二）', nav: '3/23 二', place: '由布院', title: '由布院一日遊', route: '界 別府 → 金鱗湖 → 湯之坪街道 → 由布院周邊 → 界 別府', tags: ['自駕', '由布院'], sleep: '界 別府',
    items: [
      { time: '08:00', title: '飯店早餐', note: '固定用餐時間。', reserved: true },
      { time: '09:00–10:00', title: '前往由布院', links: [{ label: '由布院 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Yufuin+Oita' }] },
      { time: '10:15–11:30', title: '金鱗湖散步', note: '晨霧提示：日出前後 30 分鐘至 1 小時霧氣最濃，適合觀賞晨霧湖面。若維持目前 10:15 抵達，則以一般湖景為主；想看晨霧需另排清晨出發。', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kinrin+Lake' }] },
      { time: '11:30–15:30', title: '湯之坪街道・午餐・周邊散步', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Yunotsubo+Kaido' }] },
      { time: '16:30 前後', title: '返回界 別府・晚餐與溫泉', links: [{ label: '界 別府 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=KAI+Beppu' }] },
    ],
  },
  {
    id: 'd0324', date: '2027/03/24（三）', nav: '3/24 三', place: '糸島', title: '別府・糸島・返回福岡', route: '界 別府 → 豐後牛排館 そむり 別府本店 → 糸島 → 櫻井二見浦 → 博多飯店 → 還車', tags: ['自駕', '糸島'], sleep: 'THE BLOSSOM HAKATA Premier',
    items: [
      { time: '早餐', title: '界 別府早餐、退房', note: '早餐後可稍微使用旅館設施並整理行李，不需設定非常精確的退房時間。' },
      { time: '11:30', title: '豐後牛排館 そむり 別府本店', pending: true, note: '別府代表性的豐後牛排餐廳，目前先暫定 11:30 午餐。Tabelog 顯示可預約；2027 年正式營業時間與預約開放後再確認。', links: [{ label: 'Google Maps', href: 'https://maps.app.goo.gl/4xFuwxqRTubYQ5Lf6' }, { label: 'Tabelog 查看／訂位', href: 'https://tabelog.com/oita/A4402/A440202/44003334/' }] },
      { time: '下午', title: '前往糸島', note: '豐後牛午餐結束後，再從別府出發前往糸島。', links: [{ label: '糸島 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Itoshima+Fukuoka' }] },
      { time: '下午', title: '糸島・櫻井二見浦・海邊散步／咖啡', note: '午餐後由別府前往糸島，以櫻井二見浦與海邊景色為主要行程；因上午安排豐後牛午餐，當天依抵達時間彈性調整停留長度。若交通延誤或天候不佳，可縮短糸島行程並優先返回福岡。', links: [{ label: '櫻井二見浦 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Sakurai+Futamigaura' }] },
      { time: '傍晚', title: 'THE BLOSSOM HAKATA Premier 入住', links: [{ label: '飯店 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=THE+BLOSSOM+HAKATA+Premier' }] },
      { time: '18:30 前後', title: 'Toyota Rent a Car 還車', note: '若門市時間不合，延到 3/25 早上還車。', links: [{ label: '租車門市 Google Maps', href: 'https://maps.app.goo.gl/8M3oEenfrbYjNLWb6' }] },
    ],
  },
  {
    id: 'd0325', date: '2027/03/25（四）', nav: '3/25 四', place: '福岡', title: '博多舊城・中洲', route: '東長寺 → 櫛田神社 → 川端通商店街 → Canal City → 中洲', tags: ['福岡市區', '建議案'], sleep: 'THE BLOSSOM HAKATA Premier',
    items: [
      { time: '上午', title: '博多舊城・東長寺', links: [{ label: '博多舊城 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Hakata+Old+Town' }, { label: '東長寺 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Tochoji+Temple+Fukuoka' }] },
      { time: '中午', title: '櫛田神社・川端通商店街', links: [{ label: '櫛田神社 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kushida+Shrine+Fukuoka' }, { label: '川端通商店街 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kawabata+Shopping+Arcade+Fukuoka' }] },
      { time: '下午', title: 'Canal City Hakata', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Canal+City+Hakata' }, { label: '官方網站', href: 'https://canalcity.co.jp/' }] },
      { time: '晚上', title: '中洲晚餐或屋台', links: [{ label: '中洲屋台 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Nakasu+Yatai+Fukuoka' }] },
    ],
  },
  {
    id: 'd0326', date: '2027/03/26（五）', nav: '3/26 五', place: '太宰府', title: '太宰府・天神・藥院燒肉', route: '博多 → 太宰府天滿宮 → 九州國立博物館 → 天神 → 藥院燒肉 NIKUICHI → 飯店', tags: ['福岡近郊', '晚餐待訂位'], sleep: 'THE BLOSSOM HAKATA Premier',
    items: [
      { time: '上午', title: '太宰府天滿宮・表參道', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Dazaifu+Tenmangu' }, { label: '官方網站', href: 'https://www.dazaifutenmangu.or.jp/' }] },
      { time: '下午', title: '九州國立博物館', note: '2027 展覽與開館日待官方公布。', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kyushu+National+Museum' }, { label: '官方網站', href: 'https://www.kyuhaku.jp/' }] },
      { time: '16:30–18:30', title: '天神逛街', links: [{ label: '天神 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Tenjin+Fukuoka' }] },
      { time: '19:00–21:00', title: '藥院燒肉 NIKUICHI 晚餐', pending: true, note: '目前尚未訂位，週五熱門時段記得在訂位開放後預約 19:00；建議加購粗烤網。用餐後可從藥院／藥院大通搭七隈線返回博多。', links: [{ label: 'Tabelog 查看／訂位', href: 'https://tabelog.com/fukuoka/A4001/A400104/40039111/' }, { label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Yakuin+Yakiniku+NIKUICHI+Fukuoka' }, { label: '官方網站', href: 'https://www.yakiniku-nikuichi.com/' }] },
    ],
  },
  {
    id: 'd0327', date: '2027/03/27（六）', nav: '3/27 六', place: '福岡', title: '大濠公園・百道海濱', route: '大濠公園 → 福岡城跡 → 福岡市博物館 → 百道海濱 → 福岡塔', tags: ['福岡市區', '建議案'], sleep: 'THE BLOSSOM HAKATA Premier',
    items: [
      { time: '上午', title: '大濠公園・福岡城跡', links: [{ label: '大濠公園 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Ohori+Park' }, { label: '福岡城跡 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Fukuoka+Castle+Ruins' }] },
      { time: '下午', title: '福岡市博物館・百道海濱', links: [{ label: '福岡市博物館 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Fukuoka+City+Museum' }, { label: '百道海濱 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Momochi+Seaside+Park' }] },
      { time: '傍晚', title: '福岡塔夕景', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Fukuoka+Tower' }, { label: '福岡塔官方網站', href: 'https://www.fukuokatower.co.jp/' }] },
      { time: '晚上', title: '返回博多・最後晚餐', links: [{ label: '飯店 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=THE+BLOSSOM+HAKATA+Premier' }] },
    ],
  },
  {
    id: 'd0328', date: '2027/03/28（日）', nav: '3/28 日', place: '返台', title: '退房・返回台灣', route: '博多飯店 → 福岡機場 → 桃園', tags: ['回程日', 'JX841'],
    items: [
      { time: '09:30 前', title: '飯店早餐、退房', links: [{ label: '飯店 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=THE+BLOSSOM+HAKATA+Premier' }] },
      { time: '10:30–11:15', title: '前往福岡機場國際線', note: '建議最晚 11:15 抵達航廈。', links: [{ label: '福岡機場 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Fukuoka+Airport' }] },
      { time: '14:15–15:45', title: '福岡飛往桃園', note: '星宇航空 JX841。', flight: 'JX841', links: [{ label: '桃園機場 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Taiwan+Taoyuan+International+Airport' }] },
    ],
  },
];

function Links({ links }: { links?: Link[] }) {
  if (!links?.length) return null;
  return <div className="links">{links.map((link) => <a className="btn" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}</a>)}</div>;
}

export default function Home() {
  return <>
    <header className="hero">
      <div className="hero-inner">
        <p className="kicker">FUKUOKA TRIP 2027</p>
        <h1>福岡 9 日自由行</h1>
        <p className="subtitle">2027/03/20–03/28｜福岡、阿蘇、別府、由布院與糸島的春季自駕旅行。</p>
        <div className="summary"><span className="pill">✈ 桃園 ⇄ 福岡</span><span className="pill">🏨 4 間飯店・8 晚</span><span className="pill">🚗 前半段自駕</span><span className="pill">👟 後半段福岡慢遊</span></div>
      </div>
    </header>

    <main>
      <nav className="nav" aria-label="行程日期快速跳轉">
        <a href="#stay">🏨 住宿</a><a href="#tickets">📝 待處理</a>
        {days.map((day) => <a href={`#${day.id}`} key={day.id}>{day.nav}<span>{day.place}</span></a>)}
        <a href="#notes">📌 提醒</a>
      </nav>

      <div className="notice"><strong>行程說明：</strong>航班與已訂住宿已固定；景點時間與自駕車程先依合理動線暫排，2027 正式營業資訊公布後再確認。阿蘇中岳火口是否開放，以當日火山與氣象管制為準。</div>

      <section className="stay-section" id="stay">
        <h2>住宿與跨城交通</h2>
        <p className="price-summary"><span>住宿已訂妥</span>4 間飯店・8 晚合計 <strong>¥301,604</strong></p>
        <div className="stay-grid">{stays.map((stay) => <article className="stay-card" key={stay.name}><div className="stay-title"><div className="stay-heading"><strong>{stay.name}</strong><span className="badge">{stay.place}</span></div><div className="stay-booking-row">{stay.bookingHref ? <a className="booking-source" href={stay.bookingHref} target="_blank" rel="noreferrer">{stay.bookingLabel}</a> : <span className="booking-source">{stay.bookingLabel}</span>}{stay.payment && <span className="payment-status">{stay.payment}</span>}</div></div><p className="stay-facts">{stay.dates}<span>住宿總額：<strong>{stay.price}</strong>{stay.priceNote && `（${stay.priceNote}）`}</span></p><div className="links"><a className="btn" href={stay.href} target="_blank" rel="noreferrer">官方網站</a><a className="btn" href={stay.map} target="_blank" rel="noreferrer">Google Maps</a></div></article>)}</div>
      </section>

      <section className="booking-section" id="tickets">
        <h2>待處理</h2>
        <div className="booking-grid">
          <article className="booking-card"><strong>3/21 起｜Toyota Rent a Car</strong><span className="pending">尚未訂車</span><p>早餐後取車；暫定 3/24 晚上還車，若門市時間不合就延至 3/25 早上。</p><Links links={[{ label: '預計租車門市', href: 'https://maps.app.goo.gl/8M3oEenfrbYjNLWb6' }]} /></article>
          <article className="booking-card"><strong>3/24 11:30｜豐後牛排館 そむり 別府本店</strong><span className="pending">尚未訂位</span><p>別府豐後牛午餐，暫定 3/24 11:30。Tabelog 目前顯示可預約；待 2027 年訂位開放後確認並完成預約。</p><Links links={[{ label: 'Tabelog 查看／訂位', href: 'https://tabelog.com/oita/A4402/A440202/44003334/' }, { label: 'Google Maps', href: 'https://maps.app.goo.gl/4xFuwxqRTubYQ5Lf6' }]} /></article>
          <article className="booking-card"><strong>3/26 19:00｜藥院燒肉 NIKUICHI</strong><span className="pending">尚未訂位</span><p>週五熱門時段，記得在訂位開放後優先預約 19:00；建議加購粗烤網。</p><Links links={[{ label: 'Tabelog', href: 'https://tabelog.com/fukuoka/A4001/A400104/40039111/' }, { label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Yakuin+Yakiniku+NIKUICHI+Fukuoka' }, { label: '官方網站', href: 'https://www.yakiniku-nikuichi.com/' }]} /></article>
        </div>
      </section>

      {days.map((day) => <section className="day" id={day.id} key={day.id}>
        <h2>{day.date}｜{day.title}</h2><p className="route">{day.route}</p>
        <div className="meta-row">{day.tags.map((tag, i) => <span className={`tag ${i === 0 ? 'city' : ''}`} key={tag}>{tag}</span>)}{day.sleep && <span className="tag sleep">{day.sleep}</span>}</div>
        <div className="items">{day.items.map((item, index) => <article className={`item ${item.flight ? 'flight-card' : ''} ${item.pending ? 'pending-highlight' : ''}`} key={`${day.id}-${index}`}><div className="topline"><span className={`time ${item.reserved ? 'reserved' : ''}`}>{item.time}</span><span className="what">{item.title}{item.flight && <span className="flight-no">✈ {item.flight}</span>}{item.pending && <span className="pending">尚未訂位</span>}</span></div>{item.note && <p className="note">{item.note}</p>}<Links links={item.links} /></article>)}</div>
      </section>)}

      <section className="day" id="notes"><h2>出發前提醒</h2><div className="items">
        <article className="item"><strong>租車</strong><p className="note">確認 ETC 卡、保險、駕照日文譯本、還車門市，以及三月底山區的輪胎需求。</p></article>
        <article className="item"><strong>旅館晚餐</strong><p className="note">界 別府 3/22 的晚餐時間為 17:30，當日行程需準時返回飯店。</p></article>
      </div></section>

      <section className="notice" id="future-aso">
        <strong>🗂 未來備用行程｜阿蘇</strong>
        <p>原 2027 九州行程規劃，因本次取消阿蘇住宿而移出正式行程。保留作為未來熊本／阿蘇自駕旅行參考。</p>
        <p><strong>建議順序：</strong>草千里 → 阿蘇火山博物館 → 中岳火口 → 上色見熊野座神社 → 阿蘇神社</p>
        <dl>
          <dt><strong>草千里</strong></dt><dd>阿蘇代表性的草原景觀，可以與阿蘇火山博物館、午餐安排在同一區域。</dd>
          <dt><strong>阿蘇火山博物館</strong></dt><dd>位於草千里附近，若未來安排阿蘇自駕，可以與草千里一起遊覽。</dd>
          <dt><strong>中岳火口</strong></dt><dd>草千里之後可以繼續前往；是否開放以當日火山活動、火山氣體濃度與氣象管制為準。</dd>
          <dt><strong>上色見熊野座神社</strong></dt><dd>位於高森方向，特色為杉木參道、石燈籠與森林景觀。若未來規劃阿蘇＋高森一帶，可以一起安排。</dd>
          <dt><strong>阿蘇神社</strong></dt><dd>適合作為阿蘇北側行程最後一站，可以搭配門前町散步。</dd>
        </dl>
        <p><strong>備註：</strong>以上為原阿蘇自駕規劃留下的景點清單。未來若安排熊本／阿蘇旅行，可再依住宿位置、火山管制與當時營業時間重新調整順序。</p>
      </section>
    </main>
    <a className="top-button" href="#" aria-label="回到頁面頂端">↑</a>
  </>;
}
