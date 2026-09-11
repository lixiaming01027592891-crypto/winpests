export const site = {
  brand: "文盈除蟲",
  english: "WINPEST",
  legalName: "文盈蟲害防治企業社",
  taxId: "15771791",
  owner: "蔡文德",
  founded: "2002",
  tagline: "先找到蟲從哪裡來。",
  description:
    "文盈除蟲為新北板橋設立之病媒防治業，提供白蟻、滅鼠、住家店面除蟲與工地環境消毒。勘查後施工，免付費專線 0800-000-448。",
  siteUrl: "https://winpests.pages.dev",
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
  { href: "/cases/", label: "實績" },
  { href: "/about/", label: "關於" },
  { href: "/contact/", label: "聯絡" },
] as const;

export const services = [
  {
    slug: "termites",
    kicker: "01 / STRUCTURE",
    title: "白蟻防治",
    lead: "未拆建物鑽孔灌注，已拆空間噴藥處理。勘查確認蟻路與巢區後再施工。",
    summary:
      "白蟻藏在木材與牆體之間，表面看起來完好，樑柱可能已經空了。文盈依現場決定灌注或噴藥，並提供施工保固說明。",
    body: [
      "台灣濕熱，透天、老公寓與裝潢木作都容易成為白蟻通道。我們先看排泄物、蟻路、空心聲與潮濕來源，再決定要不要動藥。",
      "未拆除的結構以鑽孔灌注為主；已拆除或外露木作則以噴藥與縫隙處理為主。施工後說明觀察期與保固範圍，不把「五年」寫成空白支票——保固條件寫進合約。",
    ],
    suitable: ["透天與公寓木作", "裝潢前預防", "工地地坪澆築前", "已見蟻害的門框與樑"],
    image: "termite",
  },
  {
    slug: "rodents",
    kicker: "02 / EXCLUSION",
    title: "滅鼠",
    lead: "先封入口，再佈點。地下室、餐廳與社區常見的是通道，不是一顆藥。",
    summary:
      "老鼠走管道間、停車柱邊與垃圾動線。文盈以餌站、捕捉與阻絕並用，並建議改善堆放與排水。",
    body: [
      "滅鼠若只丟藥，族群會換通道。我們先找糞便、咬痕、油漬路徑與可能的孔洞，再決定餌站位置與封堵順序。",
      "商辦地下室與餐飲後場通常需要兩週以上的追蹤。短期壓制、中期封洞、長期巡檢，三種節奏在勘查時講清楚。",
    ],
    suitable: ["社區地下室", "餐廳後場", "倉庫", "住家天花與夾層"],
    image: "rodent",
  },
  {
    slug: "home-shop",
    kicker: "03 / INTERIOR",
    title: "住家與店面除蟲",
    lead: "蟑螂、跳蚤、螞蟻、蚊蠅——對蟲種，不對「噴一輪」。",
    summary:
      "住家與餐飲空間用餌劑、殘效與縫隙處理搭配，施工前說明寵物、小孩與營業時段怎麼避開。",
    body: [
      "德國蟑螂與美洲蟑螂的處理不同；跳蚤要連同寵物活動區與地毯一起看。我們不把所有蟲害收成同一桶藥。",
      "店面可排在打烊後。住家會先請你收好餐具、移開寵物與幼童。施作後的等待時間與通風，當面交代。",
    ],
    suitable: ["公寓廚房", "小吃店與餐廳", "辦公室茶水間", "有寵物的住家"],
    image: "restaurant",
  },
  {
    slug: "disinfection",
    kicker: "04 / SITE",
    title: "工地與環境消毒",
    lead: "工地積水與板模階段最容易養蚊。機關、學校、社區依動線做重點，而不是整棟灑滿。",
    summary:
      "針對工地、機關、學校與社區的病媒與環境消毒，使用合格藥劑與專業機具，施工盡量不中斷現場運作。",
    body: [
      "工地在開挖與板模期，積水與雜物就是孳生源。我們依範圍規劃噴灑與孳生源處理，讓現場可以繼續施工。",
      "學校走廊、機關辦公、社區中庭各有高接觸面。重點處理門把、電梯、走道與積水點，完成後可依需求開立施工說明。",
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
    title: "說明現場",
    text: "電話或 LINE 說蟲種、出現位置、住家或營業場所。我們先判斷要不要到場。",
  },
  {
    n: "02",
    title: "到場勘查",
    text: "看孳生源、通道與結構，不先報死價。白蟻與鼠患尤其需要這一趟。",
  },
  {
    n: "03",
    title: "範圍與報價",
    text: "講施工範圍、用藥類型、是否需停業或迴避、以及保固怎麼算。",
  },
  {
    n: "04",
    title: "施工",
    text: "依蟲種選餌劑、灌注、噴藥或阻絕。現場揭示業者與注意事項。",
  },
  {
    n: "05",
    title: "確認與回訪",
    text: "一趟做完當面確認。需要追蹤的案件約回訪，不把一次噴藥當成結束。",
  },
] as const;

export const cases = [
  {
    slug: "site-dusk",
    title: "工地病媒處理",
    place: "新北營造現場",
    service: "工地消毒",
    image: "hero",
    text: "板模與外牆網階段處理積水與成蚊密度，施工不中斷吊車與泥作動線。",
  },
  {
    slug: "home-termite",
    title: "住宅木作白蟻",
    place: "透天廚房／樑底",
    service: "白蟻防治",
    image: "termite",
    text: "磁磚牆與木樑交接處出現蟻害跡象，勘查後對受害材與周邊做灌注與觀察。",
  },
  {
    slug: "basement-rodent",
    title: "地下室阻絕滅鼠",
    place: "社區 B2",
    service: "滅鼠",
    image: "rodent",
    text: "柱邊與車道交接是老鼠動線。佈餌站並建議封孔與垃圾動線調整。",
  },
  {
    slug: "night-shop",
    title: "打烊後店面處理",
    place: "台北小吃店",
    service: "住家與店面",
    image: "restaurant",
    text: "圓桌與後場動線在打烊後處理，隔日正常營業。",
  },
  {
    slug: "school-hall",
    title: "校園走廊環境處理",
    place: "新北學校",
    service: "環境消毒",
    image: "school",
    text: "非上課時段處理走廊與鞋櫃區高接觸面，避開師生動線。",
  },
  {
    slug: "office-night",
    title: "辦公茶水間勘查",
    place: "台北商辦",
    service: "住家與店面",
    image: "office",
    text: "夜間沿踢腳與管線查蟑螂棲所，再決定餌劑與縫隙處理。",
  },
] as const;

export const faqs = [
  {
    q: "一定要先勘查嗎？",
    a: "蟑螂或單次消毒，電話說明清楚有時可直接約施工。白蟻、鼠患、反覆跳蚤，建議先到場。沒看過現場不報死價。",
  },
  {
    q: "家裡有小孩和寵物怎麼辦？",
    a: "施工前先說清楚。多數住家會請寵物與幼童暫時離開施作範圍，並告知多久可以回家、哪些表面要擦。用藥選合法環境用藥，不是越毒越好。",
  },
  {
    q: "會不會很臭、要不要搬家？",
    a: "視蟲種與劑型。餌劑幾乎無味；空間噴灑或熱霧會有氣味與等待時間。店面多半打烊後做。事先講清楚，不會到了才說要空屋三天。",
  },
  {
    q: "白蟻真的保固五年？",
    a: "文盈對外提供長天期白蟻施工保固。保固範圍、重施工條件與是否含結構修復，寫進該案合約，不以廣告句替代。",
  },
  {
    q: "服務只限新北嗎？",
    a: "登記在板橋。台北、新北為主要服務範圍；中南部案件電話確認行程後再約。",
  },
] as const;
