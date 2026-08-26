type Link = { label: string; href: string };
type Item = { time: string; title: string; note?: string; links?: Link[]; flight?: string; reserved?: boolean; pending?: boolean };
type Day = { id: string; date: string; nav: string; place: string; title: string; route: string; tags: string[]; sleep?: string; items: Item[] };

const stays = [
  { name: '三井花園飯店福岡中洲', place: '福岡・中洲', dates: '3/20 入住－3/21 退房｜1 晚', status: '尚未訂房', href: 'https://www.gardenhotels.co.jp/fukuoka-nakasu/tw/', map: 'https://www.google.com/maps/search/?api=1&query=Mitsui+Garden+Hotel+Fukuoka+Nakasu' },
  { name: '龜之井酒店 阿蘇', place: '阿蘇', dates: '3/21 入住－3/22 退房｜1 晚', status: '尚未訂房', href: 'https://kamenoi-hotels.com/tw/aso/', map: 'https://www.google.com/maps/search/?api=1&query=Kamenoi+Hotel+Aso' },
  { name: '星野集團 界 別府', place: '別府', dates: '3/22 入住－3/24 退房｜2 晚', status: '已預訂', href: 'https://hoshinoresorts.com/zh_tw/hotels/kaibeppu/', map: 'https://www.google.com/maps/search/?api=1&query=KAI+Beppu' },
  { name: 'THE BLOSSOM HAKATA Premier', place: '福岡・博多', dates: '3/24 入住－3/28 退房｜4 晚', status: '已預訂', href: 'https://www.jrk-hotels.co.jp/tw/Hakata_premier/', map: 'https://www.google.com/maps/search/?api=1&query=THE+BLOSSOM+HAKATA+Premier' },
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
    id: 'd0321', date: '2027/03/21（日）', nav: '3/21 日', place: '阿蘇', title: '福岡取車・阿蘇順向環線', route: '飯店 → Toyota Rent a Car 中洲店 → 草千里／火山博物館 → 中岳火口 → 上色見熊野座神社 → 阿蘇神社 → 龜之井酒店 阿蘇', tags: ['自駕', '順向不折返'], sleep: '龜之井酒店 阿蘇',
    items: [
      { time: '08:00–09:30', title: '飯店早餐、退房、Toyota 中洲店取車', note: '09:30 前出發；確認 ETC、保險與還車時間。今天不先繞去飯店放行李，避免從阿蘇東側再折返山上；貴重物品請隨身攜帶。', links: [{ label: '租車門市 Google Maps', href: 'https://maps.app.goo.gl/8M3oEenfrbYjNLWb6' }, { label: '整日順向導航', href: 'https://www.google.com/maps/dir/?api=1&origin=Toyota+Rent+a+Car+Nakasu+Fukuoka&destination=Kamenoi+Hotel+Aso&travelmode=driving&waypoints=Kusasenri+Aso%7CAso+Nakadake+Crater%7CKamishikimi+Kumanoimasu+Shrine%7CAso+Shrine' }] },
      { time: '11:45–13:30', title: '草千里・阿蘇火山博物館・午餐', note: '先抵達阿蘇西側山上，景點與午餐集中在同一區域。博物館目前 17:00 關館。', links: [{ label: '草千里 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kusasenri+Aso' }, { label: '火山博物館 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Aso+Volcano+Museum' }, { label: '博物館官方網站', href: 'https://www.asomuse.jp/' }] },
      { time: '13:40–14:30', title: '中岳火口', note: '由草千里繼續向東，不走回頭路；是否開放以當日火山與氣象管制為準。', links: [{ label: '中岳火口 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Aso+Nakadake+Crater' }, { label: '火口即時管制', href: 'https://www.aso-volcano.jp/eng/' }] },
      { time: '15:20–16:20', title: '上色見熊野座神社', note: '從火口往南阿蘇方向下山，參拜後再沿東側北上。', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kamishikimi+Kumanoimasu+Shrine' }] },
      { time: '17:10–17:35', title: '阿蘇神社', note: '順路短停；拜殿目前開放至 18:00，但御札所 17:00 結束。若前段延誤，改到 3/22 早餐後再來。', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Aso+Shrine' }, { label: '阿蘇神社官方網站', href: 'https://asojinja.or.jp/' }] },
      { time: '17:45–18:15', title: '龜之井酒店 阿蘇入住', note: '飯店就在阿蘇神社東側，作為今日終點最順。', links: [{ label: '飯店 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kamenoi+Hotel+Aso' }] },
      { time: '18:30 起', title: '飯店晚餐', note: '官方目前晚餐供應為 17:45–21:00；實際用餐梯次待訂房後確認。', links: [{ label: '飯店餐廳資訊', href: 'https://kamenoi-hotels.com/aso/restaurant/' }] },
    ],
  },
  {
    id: 'd0322', date: '2027/03/22（一）', nav: '3/22 一', place: '別府', title: '阿蘇前往別府', route: '阿蘇飯店 → 九州自然動物公園／鶴見岳（二選一）→ 界 別府', tags: ['移動日', '景點二選一'], sleep: '界 別府',
    items: [
      { time: '08:00–09:30', title: '飯店早餐、退房', links: [{ label: '飯店 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kamenoi+Hotel+Aso' }] },
      { time: '上午–下午', title: '九州自然動物公園或鶴見岳（二選一）', note: '較推薦九州自然動物公園；若天氣非常好且想看山景，再改鶴見岳。', links: [{ label: '動物園 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=African+Safari+Oita' }, { label: '動物園官方網站', href: 'https://www.africansafari.co.jp/' }, { label: '鶴見岳 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Beppu+Ropeway' }] },
      { time: '15:30 前後', title: '界 別府入住', note: '保留旅館活動與溫泉時間。', links: [{ label: '界 別府 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=KAI+Beppu' }, { label: '界 別府官方網站', href: 'https://hoshinoresorts.com/zh_tw/hotels/kaibeppu/' }] },
      { time: '17:30', title: '飯店晚餐', note: '固定用餐時間，行程請預留準時返回飯店。', reserved: true },
    ],
  },
  {
    id: 'd0323', date: '2027/03/23（二）', nav: '3/23 二', place: '由布院', title: '由布院一日遊', route: '界 別府 → 金鱗湖 → 湯之坪街道 → 由布院周邊 → 界 別府', tags: ['自駕', '由布院'], sleep: '界 別府',
    items: [
      { time: '08:00', title: '飯店早餐', note: '固定用餐時間。', reserved: true },
      { time: '09:00–10:00', title: '前往由布院', links: [{ label: '由布院 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Yufuin+Oita' }] },
      { time: '10:15–11:30', title: '金鱗湖散步', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kinrin+Lake' }] },
      { time: '11:30–15:30', title: '湯之坪街道・午餐・周邊散步', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Yunotsubo+Kaido' }] },
      { time: '16:30 前後', title: '返回界 別府・晚餐與溫泉', links: [{ label: '界 別府 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=KAI+Beppu' }] },
    ],
  },
  {
    id: 'd0324', date: '2027/03/24（三）', nav: '3/24 三', place: '糸島', title: '別府・糸島・返回福岡', route: '界 別府 → 糸島 → 櫻井二見浦 → 博多飯店 → 還車', tags: ['自駕', '糸島'], sleep: 'THE BLOSSOM HAKATA Premier',
    items: [
      { time: '09:30 前', title: '旅館早餐、退房、前往糸島', links: [{ label: '糸島 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Itoshima+Fukuoka' }] },
      { time: '12:30–16:00', title: '糸島午餐・櫻井二見浦・海邊咖啡', note: '若天候不佳可直接回福岡，將糸島改到隔日。', links: [{ label: '櫻井二見浦 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Sakurai+Futamigaura' }] },
      { time: '17:30', title: 'THE BLOSSOM HAKATA Premier 入住', links: [{ label: '飯店 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=THE+BLOSSOM+HAKATA+Premier' }] },
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
      { time: '19:00–21:00', title: '藥院燒肉 NIKUICHI 晚餐', pending: true, note: '目前尚未訂位，週五熱門時段記得在訂位開放後預約 19:00。用餐後可從藥院／藥院大通搭七隈線返回博多。', links: [{ label: 'Tabelog 查看／訂位 ↗', href: 'https://tabelog.com/fukuoka/A4001/A400104/40039111/' }, { label: 'Google Maps ↗', href: 'https://www.google.com/maps/search/?api=1&query=Yakuin+Yakiniku+NIKUICHI+Fukuoka' }, { label: '官方網站 ↗', href: 'https://www.yakiniku-nikuichi.com/' }] },
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
        <a href="#stay">🏨 住宿</a><a href="#tickets">📝 待預訂</a>
        {days.map((day) => <a href={`#${day.id}`} key={day.id}>{day.nav}<span>{day.place}</span></a>)}
        <a href="#notes">📌 提醒</a>
      </nav>

      <div className="notice"><strong>行程說明：</strong>航班與已訂住宿已固定；景點時間與自駕車程先依合理動線暫排，2027 正式營業資訊公布後再確認。阿蘇中岳火口是否開放，以當日火山與氣象管制為準。</div>

      <section className="stay-section" id="stay">
        <h2>住宿與跨城交通</h2>
        <div className="stay-grid">{stays.map((stay) => <article className="stay-card" key={stay.name}><div className="stay-title"><strong>{stay.name}</strong><span className="badge">{stay.place}</span></div><p className="dates">{stay.dates}</p><p>{stay.status}</p><div className="links"><a className="btn" href={stay.href} target="_blank" rel="noreferrer">官方網站</a><a className="btn" href={stay.map} target="_blank" rel="noreferrer">Google Maps</a></div></article>)}</div>
      </section>

      <section className="booking-section" id="tickets">
        <h2>待預訂</h2>
        <div className="booking-grid">
          <article className="booking-card"><strong>3/20｜三井花園飯店福岡中洲</strong><span className="pending">尚未訂房</span><p>3/20 入住、3/21 退房，共 1 晚。</p><Links links={[{ label: '飯店官方網站', href: stays[0].href }, { label: 'Google Maps', href: stays[0].map }]} /></article>
          <article className="booking-card"><strong>3/21｜龜之井酒店 阿蘇</strong><span className="pending">尚未訂房</span><p>3/21 入住、3/22 退房，共 1 晚；希望含晚餐。</p><Links links={[{ label: '飯店官方網站', href: stays[1].href }, { label: 'Google Maps', href: stays[1].map }]} /></article>
          <article className="booking-card"><strong>3/21 起｜Toyota Rent a Car</strong><span className="pending">尚未訂車</span><p>早餐後取車；暫定 3/24 晚上還車，若門市時間不合就延至 3/25 早上。</p><Links links={[{ label: '預計租車門市', href: 'https://maps.app.goo.gl/8M3oEenfrbYjNLWb6' }]} /></article>
          <article className="booking-card"><strong>3/26 19:00｜藥院燒肉 NIKUICHI</strong><span className="pending">尚未訂位</span><p>週五熱門時段，記得在訂位開放後優先預約 19:00。</p><Links links={[{ label: 'Tabelog', href: 'https://tabelog.com/fukuoka/A4001/A400104/40039111/' }, { label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Yakuin+Yakiniku+NIKUICHI+Fukuoka' }, { label: '官方網站', href: 'https://www.yakiniku-nikuichi.com/' }]} /></article>
        </div>
      </section>

      {days.map((day) => <section className="day" id={day.id} key={day.id}>
        <h2>{day.date}｜{day.title}</h2><p className="route">{day.route}</p>
        <div className="meta-row">{day.tags.map((tag, i) => <span className={`tag ${i === 0 ? 'city' : ''}`} key={tag}>{tag}</span>)}{day.sleep && <span className="tag sleep">{day.sleep}</span>}</div>
        <div className="items">{day.items.map((item, index) => <article className={`item ${item.flight ? 'flight-card' : ''} ${item.pending ? 'pending-highlight' : ''}`} key={`${day.id}-${index}`}><div className="topline"><span className={`time ${item.reserved ? 'reserved' : ''}`}>{item.time}</span><span className="what">{item.title}{item.flight && <span className="flight-no">✈ {item.flight}</span>}{item.pending && <span className="pending">尚未訂位</span>}</span></div>{item.note && <p className="note">{item.note}</p>}<Links links={item.links} /></article>)}</div>
      </section>)}

      <section className="day" id="notes"><h2>出發前提醒</h2><div className="items">
        <article className="item"><strong>阿蘇火口</strong><p className="note">出發當天查看官方管制；若關閉，改增加草千里、博物館或阿蘇神社停留時間。</p><Links links={[{ label: '火口即時管制', href: 'https://www.aso-volcano.jp/eng/' }]} /></article>
        <article className="item"><strong>租車</strong><p className="note">確認 ETC 卡、保險、駕照日文譯本、還車門市，以及三月底山區的輪胎需求。</p></article>
        <article className="item"><strong>旅館晚餐</strong><p className="note">龜之井與界的晚餐時段確認後，優先鎖定 Day 02–04 的最晚抵達時間。</p></article>
      </div></section>
    </main>
    <a className="top-button" href="#" aria-label="回到頁面頂端">↑</a>
  </>;
}
