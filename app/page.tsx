type Link = { label: string; href: string };
type Item = { time: string; title: string; note?: string; links?: Link[]; flight?: string; reserved?: boolean };
type Day = { id: string; date: string; nav: string; place: string; title: string; route: string; tags: string[]; sleep?: string; items: Item[] };

const stays = [
  { name: '三井花園飯店福岡中洲', place: '福岡・中洲', dates: '3/20 入住－3/21 退房｜1 晚', status: '尚未訂房', href: 'https://go-gardenhotels.reservation.jp/zh-tw/hotels/mgh033' },
  { name: '龜之井酒店 阿蘇', place: '阿蘇', dates: '3/21 入住－3/22 退房｜1 晚', status: '尚未訂房', href: 'https://booking.iconia.co.jp/booking/result?code=2a481313-ebb7-4102-b60d-f03913aa3664&checkin=2027%2F02%2F23&checkout=2027%2F02%2F24&type=rooms&is_day_use=false&order=price_low_to_high&is_including_occupied=false&adults=2&kids_tiers=%5B%5D&room_count=1&mcp_currency=TWD' },
  { name: '星野集團 界 別府', place: '別府', dates: '3/22 入住－3/24 退房｜2 晚', status: '已預訂', href: 'https://hoshinoresorts.com/zh_tw/hotels/kaibeppu/' },
  { name: 'THE BLOSSOM HAKATA Premier', place: '福岡・博多', dates: '3/24 入住－3/28 退房｜4 晚', status: '已預訂', href: 'https://www.google.com/travel/hotels/s/y1AZVXV9ANmJkid9A' },
];

const days: Day[] = [
  {
    id: 'd0320', date: '2027/03/20（六）', nav: '3/20 六', place: '福岡', title: '抵達福岡・中洲入住', route: '桃園 → 福岡機場 → 中洲 → 飯店', tags: ['抵達日', 'JX840'], sleep: '福岡住宿',
    items: [
      { time: '14:45–18:00', title: '桃園飛往福岡', note: '星宇航空 JX840。', flight: 'JX840', links: [{ label: '桃園機場 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Taiwan+Taoyuan+International+Airport' }] },
      { time: '18:00–20:00', title: '福岡機場入境、前往中洲', note: '領取行李後搭地鐵或計程車前往飯店。' },
      { time: '20:00 起', title: '飯店入住・附近晚餐', note: '第一晚不排跨區景點，早點休息。', links: [{ label: '預計飯店', href: 'https://go-gardenhotels.reservation.jp/zh-tw/hotels/mgh033' }] },
    ],
  },
  {
    id: 'd0321', date: '2027/03/21（日）', nav: '3/21 日', place: '阿蘇', title: '福岡取車・阿蘇火山景點', route: '飯店 → Toyota Rent a Car → 色見熊野座神社 → 草千里 → 阿蘇火山博物館 → 中岳火口 → 阿蘇神社 → 飯店', tags: ['自駕', '阿蘇'], sleep: '龜之井酒店 阿蘇',
    items: [
      { time: '08:00–09:00', title: '飯店早餐、退房、取車', note: '確認 ETC、保險、還車門市與還車時間。', links: [{ label: '預計租車門市', href: 'https://maps.app.goo.gl/8M3oEenfrbYjNLWb6' }] },
      { time: '11:30', title: '色見熊野座神社', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kamishikimi+Kumanoimasu+Shrine' }] },
      { time: '13:15–15:00', title: '草千里・阿蘇火山博物館・午餐', note: '三者位於同一區域，集中安排。', links: [{ label: '草千里 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kusasenri+Aso' }, { label: '博物館官方網站', href: 'https://www.asomuse.jp/' }] },
      { time: '15:15', title: '中岳火口', note: '是否開放以當日火山與氣象管制為準。', links: [{ label: '火口即時管制', href: 'https://www.aso-volcano.jp/eng/' }] },
      { time: '16:30', title: '阿蘇神社', note: '前段若延誤可縮短停留，優先準時回飯店吃晚餐。', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Aso+Shrine' }] },
      { time: '17:30 起', title: '龜之井酒店 阿蘇入住・晚餐' },
    ],
  },
  {
    id: 'd0322', date: '2027/03/22（一）', nav: '3/22 一', place: '別府', title: '阿蘇前往別府', route: '阿蘇飯店 → 九州自然動物公園／鶴見岳（二選一）→ 界 別府', tags: ['移動日', '景點二選一'], sleep: '界 別府',
    items: [
      { time: '08:00–09:30', title: '飯店早餐、退房' },
      { time: '上午–下午', title: '九州自然動物公園或鶴見岳（二選一）', note: '較推薦九州自然動物公園；若天氣非常好且想看山景，再改鶴見岳。', links: [{ label: '動物園官方網站', href: 'https://www.africansafari.co.jp/' }, { label: '鶴見岳 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Beppu+Ropeway' }] },
      { time: '15:30 前後', title: '界 別府入住', note: '保留旅館活動、溫泉與晚餐時間。', links: [{ label: '界 別府官方網站', href: 'https://hoshinoresorts.com/zh_tw/hotels/kaibeppu/' }] },
    ],
  },
  {
    id: 'd0323', date: '2027/03/23（二）', nav: '3/23 二', place: '由布院', title: '由布院一日遊', route: '界 別府 → 金鱗湖 → 湯之坪街道 → 由布院周邊 → 界 別府', tags: ['自駕', '由布院'], sleep: '界 別府',
    items: [
      { time: '08:00–10:00', title: '旅館早餐、前往由布院' },
      { time: '10:15–11:30', title: '金鱗湖散步', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Kinrin+Lake' }] },
      { time: '11:30–15:30', title: '湯之坪街道・午餐・周邊散步', links: [{ label: 'Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Yunotsubo+Kaido' }] },
      { time: '16:30 前後', title: '返回界 別府・晚餐與溫泉' },
    ],
  },
  {
    id: 'd0324', date: '2027/03/24（三）', nav: '3/24 三', place: '糸島', title: '別府・糸島・返回福岡', route: '界 別府 → 糸島 → 櫻井二見浦 → 博多飯店 → 還車', tags: ['自駕', '糸島'], sleep: 'THE BLOSSOM HAKATA Premier',
    items: [
      { time: '09:30 前', title: '旅館早餐、退房、前往糸島' },
      { time: '12:30–16:00', title: '糸島午餐・櫻井二見浦・海邊咖啡', note: '若天候不佳可直接回福岡，將糸島改到隔日。', links: [{ label: '櫻井二見浦 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Sakurai+Futamigaura' }] },
      { time: '17:30', title: 'THE BLOSSOM HAKATA Premier 入住' },
      { time: '18:30 前後', title: 'Toyota Rent a Car 還車', note: '若門市時間不合，延到 3/25 早上還車。' },
    ],
  },
  {
    id: 'd0325', date: '2027/03/25（四）', nav: '3/25 四', place: '福岡', title: '博多舊城・中洲', route: '東長寺 → 櫛田神社 → 川端通商店街 → Canal City → 中洲', tags: ['福岡市區', '建議案'], sleep: 'THE BLOSSOM HAKATA Premier',
    items: [
      { time: '上午', title: '博多舊城・東長寺', links: [{ label: '博多舊城 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Hakata+Old+Town' }] },
      { time: '中午', title: '櫛田神社・川端通商店街' },
      { time: '下午', title: 'Canal City Hakata', links: [{ label: '官方網站', href: 'https://canalcity.co.jp/' }] },
      { time: '晚上', title: '中洲晚餐或屋台' },
    ],
  },
  {
    id: 'd0326', date: '2027/03/26（五）', nav: '3/26 五', place: '太宰府', title: '太宰府・天神', route: '博多 → 太宰府天滿宮 → 九州國立博物館 → 天神', tags: ['福岡近郊', '建議案'], sleep: 'THE BLOSSOM HAKATA Premier',
    items: [
      { time: '上午', title: '太宰府天滿宮・表參道', links: [{ label: '官方網站', href: 'https://www.dazaifutenmangu.or.jp/' }] },
      { time: '下午', title: '九州國立博物館', note: '2027 展覽與開館日待官方公布。', links: [{ label: '官方網站', href: 'https://www.kyuhaku.jp/' }] },
      { time: '晚上', title: '天神逛街與晚餐' },
    ],
  },
  {
    id: 'd0327', date: '2027/03/27（六）', nav: '3/27 六', place: '福岡', title: '大濠公園・百道海濱', route: '大濠公園 → 福岡城跡 → 福岡市博物館 → 百道海濱 → 福岡塔', tags: ['福岡市區', '建議案'], sleep: 'THE BLOSSOM HAKATA Premier',
    items: [
      { time: '上午', title: '大濠公園・福岡城跡', links: [{ label: '大濠公園 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Ohori+Park' }] },
      { time: '下午', title: '福岡市博物館・百道海濱' },
      { time: '傍晚', title: '福岡塔夕景', links: [{ label: '福岡塔官方網站', href: 'https://www.fukuokatower.co.jp/' }] },
      { time: '晚上', title: '返回博多・最後晚餐' },
    ],
  },
  {
    id: 'd0328', date: '2027/03/28（日）', nav: '3/28 日', place: '返台', title: '退房・返回台灣', route: '博多飯店 → 福岡機場 → 桃園', tags: ['回程日', 'JX841'],
    items: [
      { time: '09:30 前', title: '飯店早餐、退房' },
      { time: '10:30–11:15', title: '前往福岡機場國際線', note: '建議最晚 11:15 抵達航廈。' },
      { time: '14:15–15:45', title: '福岡飛往桃園', note: '星宇航空 JX841。', flight: 'JX841', links: [{ label: '福岡機場 Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Fukuoka+Airport' }] },
    ],
  },
];

function Links({ links }: { links?: Link[] }) {
  if (!links?.length) return null;
  return <div className="links">{links.map((link) => <a className="btn" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} ↗</a>)}</div>;
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
        <a href="#stay">🏨 住宿</a><a href="#tickets">🚗 待預訂</a>
        {days.map((day) => <a href={`#${day.id}`} key={day.id}>{day.nav}<span>{day.place}</span></a>)}
        <a href="#notes">📌 提醒</a>
      </nav>

      <div className="notice"><strong>行程說明：</strong>航班與已訂住宿已固定；景點時間與自駕車程先依合理動線暫排，2027 正式營業資訊公布後再確認。阿蘇中岳火口是否開放，以當日火山與氣象管制為準。</div>

      <section className="stay-section" id="stay">
        <h2>住宿與跨城交通</h2>
        <div className="stay-grid">{stays.map((stay) => <article className="stay-card" key={stay.name}><div className="stay-title"><strong>{stay.name}</strong><span className="badge">{stay.place}</span></div><p className="dates">{stay.dates}</p><p>{stay.status}</p><div className="links"><a className="btn" href={stay.href} target="_blank" rel="noreferrer">住宿資料 ↗</a></div></article>)}</div>
      </section>

      <section className="booking-section" id="tickets">
        <h2>待預訂</h2>
        <div className="booking-grid">
          <article className="booking-card"><strong>3/20｜三井花園飯店福岡中洲</strong><span className="pending">尚未訂房</span><p>3/20 入住、3/21 退房，共 1 晚。</p><Links links={[{ label: '飯店訂房頁', href: 'https://go-gardenhotels.reservation.jp/zh-tw/hotels/mgh033' }]} /></article>
          <article className="booking-card"><strong>3/21｜龜之井酒店 阿蘇</strong><span className="pending">尚未訂房</span><p>3/21 入住、3/22 退房，共 1 晚；希望含晚餐。原連結日期為 2/23–2/24，訂房時需改成正確日期。</p><Links links={[{ label: '飯店訂房頁', href: stays[1].href }]} /></article>
          <article className="booking-card"><strong>3/21 起｜Toyota Rent a Car</strong><span className="pending">尚未訂車</span><p>早餐後取車；暫定 3/24 晚上還車，若門市時間不合就延至 3/25 早上。</p><Links links={[{ label: '預計租車門市', href: 'https://maps.app.goo.gl/8M3oEenfrbYjNLWb6' }]} /></article>
        </div>
      </section>

      {days.map((day) => <section className="day" id={day.id} key={day.id}>
        <h2>{day.date}｜{day.title}</h2><p className="route">{day.route}</p>
        <div className="meta-row">{day.tags.map((tag, i) => <span className={`tag ${i === 0 ? 'city' : ''}`} key={tag}>{tag}</span>)}{day.sleep && <span className="tag sleep">{day.sleep}</span>}</div>
        <div className="items">{day.items.map((item, index) => <article className={`item ${item.flight ? 'flight-card' : ''}`} key={`${day.id}-${index}`}><div className="topline"><span className={`time ${item.reserved ? 'reserved' : ''}`}>{item.time}</span><span className="what">{item.title}{item.flight && <span className="flight-no">✈ {item.flight}</span>}</span></div>{item.note && <p className="note">{item.note}</p>}<Links links={item.links} /></article>)}</div>
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
