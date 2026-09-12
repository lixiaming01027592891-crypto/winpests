export const site = {
  brand: "文盈除蟲",
  english: "WINPEST",
  legalName: "文盈蟲害防治企業社",
  taxId: "15771791",
  owner: "蔡文德",
  founded: "2002",
  tagline: "家裡有蟲，先看它從哪裡來。",
  description:
    "文盈除蟲在新北板橋，做白蟻、滅鼠、住家店面除蟲和工地消毒。先看現場再報價。免付費 0800-000-448。",
  siteUrl: "https://winpesttw.com",
  phoneDisplay: "0800-000-448",
  phoneHref: "tel:0800000448",
  localPhoneDisplay: "02-2969-2540",
  localPhoneHref: "tel:+886229692540",
  mobileDisplay: "0988-307-306",
  mobileHref: "tel:+886988307306",
  lineUrl: "https://line.me/ti/p/s4h0kVoL6X",
  email: "x24htry@gmail.com",
  hours: "週一至週六 09:00–21:00",
  address: {
    label: "登記地址",
    line: "新北市板橋區和平路安樂巷 3 弄 8 號",
    map: "https://maps.google.com/?q=新北市板橋區和平路安樂巷3弄8號",
  },
  taipeiPoint: {
    label: "台北服務點",
    line: "台北市萬華區青年路 106 巷 30 弄 30 號 3 樓",
  },
} as const;

export const nav = [
  { href: "/", label: "首頁" },
  { href: "/services/", label: "服務" },
  { href: "/cases/", label: "作業情境" },
  { href: "/about/", label: "關於" },
  { href: "/contact/", label: "聯絡" },
] as const;

export const services = [
  {
    slug: "termites",
    kicker: "白蟻",
    title: "白蟻防治",
    lead: "門框敲起來發空、牆邊有細粉，多半值得找人來看一趟。",
    summary: "木頭表面看起來沒事，裡面有時已經空了。我們會先到現場看，再決定灌注還是噴藥。",
    body: [
      "台灣又濕又熱，透天、老公寓、裝潢用的木作都容易被白蟻走。我們不急著動藥，先看木頭、潮濕來源和周圍結構，再跟你說怎麼處理比較穩。",
      "還沒拆的結構多用鑽孔灌注；已經打開或外露的木作，用噴藥和縫隙處理。保固年限和範圍會寫進合約，不拿廣告句帶過。",
    ],
    suitable: ["透天與公寓木作", "裝潢前預防", "工地澆築前", "門框、地板、木樑"],
    image: "termite",
  },
  {
    slug: "rodents",
    kicker: "滅鼠",
    title: "滅鼠",
    lead: "老鼠走的是通道。先找入口，再佈點，比一直補藥有用。",
    summary: "地下室、餐廳後場、管道間最常見。餌站、捕捉和封洞會一起做，也會跟你說堆放怎麼改。",
    body: [
      "只丟藥，牠們通常換路走。我們會先看路徑、孔洞和食物來源，再決定餌站放哪、哪些洞要先封。",
      "社區地下室和餐飲後場，多半要追蹤兩週以上。短線壓制、中線封洞、之後要不要定期來看，勘查時會當面講清楚。",
    ],
    suitable: ["社區地下室", "餐廳後場", "倉庫", "住家天花與夾層"],
    image: "rodent",
  },
  {
    slug: "home-shop",
    kicker: "住家店面",
    title: "住家與店面",
    lead: "蟑螂、跳蚤、螞蟻、蚊子，作法都不一樣，不會一律噴過就算。",
    summary: "住家和店面會搭配餌劑跟縫隙處理。有小孩、寵物，或店還在營業，施工前會先跟你排時間。",
    body: [
      "廚房裡的蟑螂，和地毯、寵物區的跳蚤，處理方式不同。我們會問你在哪裡看到、多久一次，再決定用什麼。",
      "店面多半打烊以後做。住家會請你先收餐具、把寵物和小孩暫時帶離。做完要等多久、哪裡要通風，會當面交代。",
    ],
    suitable: ["公寓廚房", "小吃店與餐廳", "辦公室茶水間", "有寵物的住家"],
    image: "restaurant",
  },
  {
    slug: "disinfection",
    kicker: "工地",
    title: "工地與環境消毒",
    lead: "工地一積水就容易養蚊。學校、機關、社區則看人走最多的地方。",
    summary: "工地、機關、學校、社區的環境處理。用合格藥劑，盡量不打斷現場作業。",
    body: [
      "開挖和板模那段時間，積水、雜物最容易生蚊。我們會依範圍排噴灑，讓吊車和泥作還能繼續動。",
      "學校走廊、機關辦公、社區中庭，重點在門把、電梯、走道和積水點。做完需要證明或說明，跟我們說一聲。",
    ],
    suitable: ["營造工地", "公家機關", "學校與社區", "餐飲與醫療周邊"],
    image: "hero",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}

export const process = [
  {
    n: "01",
    title: "先說現場",
    text: "打電話或加 LINE，跟我們說你看到什麼、在家裡還是店裡。能判斷的，電話裡就會跟你說。",
  },
  {
    n: "02",
    title: "到場看看",
    text: "白蟻和老鼠多半要先看過。沒看現場，我們不先報一個死價錢。",
  },
  {
    n: "03",
    title: "講清楚再做",
    text: "範圍、用什麼、小孩寵物怎麼避開、保固怎麼算，都會先講。",
  },
  {
    n: "04",
    title: "施工",
    text: "該灌注就灌注，該封洞就封洞。現場會標示注意事項。",
  },
  {
    n: "05",
    title: "做完再對一次",
    text: "當面過一遍。需要再來看的，會跟你約，不把噴一次當成結束。",
  },
] as const;

export const cases = [
  {
    slug: "site-dusk",
    title: "工地病媒處理",
    place: "營造工地",
    service: "工地消毒",
    image: "hero",
    text: "板模與外牆網階段常見積水與成蚊；安排處理時會避開吊車與泥作動線。",
  },
  {
    slug: "home-termite",
    title: "透天木作處理",
    place: "透天與老屋",
    service: "白蟻防治",
    image: "termite",
    text: "樓梯間門框可採灌注；先看現場與木作狀況，再決定施作方式。",
  },
  {
    slug: "basement-rodent",
    title: "地下室阻絕滅鼠",
    place: "社區地下室",
    service: "滅鼠",
    image: "rodent",
    text: "柱邊與車道交接常是老鼠動線，可搭配餌站、封孔與垃圾動線調整。",
  },
  {
    slug: "night-shop",
    title: "打烊後店面處理",
    place: "餐飲後場",
    service: "住家與店面",
    image: "restaurant",
    text: "可安排在打烊後處理圓桌區與後場，並依用藥方式交代等待及通風時間。",
  },
  {
    slug: "school-hall",
    title: "校園走廊環境處理",
    place: "校園公共區域",
    service: "環境消毒",
    image: "school",
    text: "走廊與鞋櫃區可安排在非上課時段處理，避開師生主要動線。",
  },
  {
    slug: "office-night",
    title: "辦公茶水間勘查",
    place: "辦公空間",
    service: "住家與店面",
    image: "office",
    text: "可在夜間沿踢腳與管線勘查蟑螂棲所，再決定餌劑與縫隙處理。",
  },
] as const;

export const faqs = [
  {
    q: "一定要先勘查嗎？",
    a: "蟑螂或單純消一次毒，電話講清楚，有時可以直接約。白蟻、老鼠、跳蚤一直沒好，建議先到場。沒看過的，我們不先報死價。",
  },
  {
    q: "家裡有小孩和寵物怎麼辦？",
    a: "先跟我們說。多數情況會請寵物和小孩暫時離開施工範圍，並告訴你多久可以回家、哪些地方要擦。用藥選合法的，不是越烈越好。",
  },
  {
    q: "會不會很臭？要不要搬走？",
    a: "看用什麼。餌劑幾乎沒味道；空間噴灑會有氣味和等待時間。店面多半打烊後做。這些會事先講，不會到了才說要空屋三天。",
  },
  {
    q: "白蟻真的保固五年？",
    a: "有長天期保固。範圍、什麼情況重做、包不包結構修復，寫在該案合約裡，不以廣告句代替。",
  },
  {
    q: "只有新北做得了嗎？",
    a: "公司登記在板橋，台北、新北最熟。中南部可以做，先打電話看行程再約。",
  },
] as const;
