/**
 * Central brand data — the single source of truth for the whole site.
 *
 * FORWARD OBSERVATIONS GROUP — a veteran-run media collective and apparel
 * brand, re-imagined here through a late-80s/90s mecha & cyberpunk anime lens.
 * All copy is an original creative rebrand; it evokes the brand's real themes
 * (forward-observer recon, front-line documentary work, and the "they-keep-
 * pulling-our-signal" deplatforming saga) without restating disputed or
 * unverified claims about real people or events.
 */

export const site = {
  brand: "Forward Observations Group",
  short: "FOG",
  callsign: "FORWARD//OBSERVATIONS",
  tagline: "Eyes forward of the line.",
  /** Japanese motto used decoratively — "front-line observation". */
  mottoJp: "前線観測",
  description:
    "Forward Observations Group is a veteran media collective broadcasting from the edge of the signal — field dispatches, long-form radio, and supply for the observant.",
  domain: "forwardobservations.com",
  url: "https://forwardobservations.com",
  email: "comms@forwardobservations.com",

  social: {
    youtube: "https://youtube.com/@forwardobservations",
    instagram: "https://instagram.com/forwardobservations",
    spotify: "https://open.spotify.com/show/3RjQ8SnlvOiZMCt4ovSYEv",
    x: "https://x.com/forwardobsgroup",
    tiktok: "https://tiktok.com/@forwardobservations",
  },
} as const;

export type NavItem = { label: string; jp: string; href: string };

export const nav: NavItem[] = [
  { label: "Broadcast", jp: "放送", href: "/broadcast/" },
  { label: "Dispatches", jp: "通信", href: "/dispatches/" },
  { label: "Supply", jp: "補給", href: "/supply/" },
  { label: "The Unit", jp: "部隊", href: "/about/" },
  { label: "Contact", jp: "連絡", href: "/contact/" },
];

/** Telemetry-style stat readout. Deliberately brand-flavored, not literal metrics. */
export const stats = [
  { num: "24/7", label: "Signal Status", jp: "実況" },
  { num: "150+", label: "Transmissions Logged", jp: "放送" },
  { num: "09", label: "Channels Rebuilt", jp: "再建" },
  { num: "03", label: "Continents Observed", jp: "前線" },
];

/** Katakana / mono ticker strings for the marquee. */
export const ticker = [
  { en: "SIGNAL ACQUIRED", jp: "信号取得" },
  { en: "EYES ON", jp: "監視中" },
  { en: "FORWARD OF THE LINE", jp: "前線" },
  { en: "TRANSMISSION LIVE", jp: "放送中" },
  { en: "OBSERVE // REPORT // ADVANCE", jp: "観測" },
  { en: "THEY CUT IT — WE REBUILD IT", jp: "再建" },
  { en: "STAND BY FOR HANDOFF", jp: "待機" },
];

export type Show = {
  slug: string;
  name: string;
  jp: string;
  format: string;
  cadence: string;
  tagline: string;
  desc: string;
  color: "red" | "amber" | "cyan" | "violet";
  icon: string;
};

export const shows: Show[] = [
  {
    slug: "the-podcast",
    name: "The Forward Observations Podcast",
    jp: "放送 // MAIN CHANNEL",
    format: "Long-form audio + video",
    cadence: "Weekly",
    tagline: "Unfiltered radio from the collective.",
    desc: "The flagship. Long-form conversation with operators, journalists, artists, and assorted degenerates — recorded like a night op and edited like a fever dream.",
    color: "red",
    icon: "headphones",
  },
  {
    slug: "observation-post",
    name: "Observation Post",
    jp: "観測所 // FIELD",
    format: "Documentary video",
    cadence: "From the line",
    tagline: "Cameras where the map goes grey.",
    desc: "First-person field dispatches shot in the grey zones. No script, no anchor desk — just a forward observer, a lens, and whatever the day hands over.",
    color: "amber",
    icon: "film",
  },
  {
    slug: "the-vault",
    name: "Vault // Archives",
    jp: "機密 // RECOVERED",
    format: "Recovered uploads",
    cadence: "When they pull it down",
    tagline: "Everything they tried to delete.",
    desc: "Deplatformed, demonetized, nuked from orbit — then re-uploaded. The Vault is the mirror that keeps the record when the algorithm decides you never existed.",
    color: "cyan",
    icon: "terminal",
  },
  {
    slug: "night-orders",
    name: "Night Orders",
    jp: "夜間 // LIVE",
    format: "Late livestream",
    cadence: "After dark",
    tagline: "Comms open. Filter off.",
    desc: "The after-hours livestream. Call-ins, hot takes, and the kind of conversations that only happen once the sun's down and the chat's feral.",
    color: "violet",
    icon: "radio",
  },
];

export type Episode = {
  ep: string;
  show: string;
  title: string;
  desc: string;
  duration: string;
  date: string;
  tag: string;
};

export const episodes: Episode[] = [
  {
    ep: "157",
    show: "The Forward Observations Podcast",
    title: "Notes From a Dead Channel",
    desc: "What it actually costs to get erased by a platform overnight — and why the signal keeps coming back anyway.",
    duration: "1:48:12",
    date: "2026-06-24",
    tag: "MAIN",
  },
  {
    ep: "OP-31",
    show: "Observation Post",
    title: "Static Over the Grey Zone",
    desc: "Field notes from the edge of the map. Long silences, longer nights, and the discipline of watching.",
    duration: "38:04",
    date: "2026-06-17",
    tag: "FIELD",
  },
  {
    ep: "156",
    show: "The Forward Observations Podcast",
    title: "The Observer's Eye",
    desc: "On seeing before you're seen — recon, patience, and the craft of calling it in.",
    duration: "2:03:41",
    date: "2026-06-10",
    tag: "MAIN",
  },
  {
    ep: "NO-88",
    show: "Night Orders",
    title: "Comms Open, Filter Off",
    desc: "Late-night call-ins go completely sideways. You had to be there. Now you can be.",
    duration: "2:57:19",
    date: "2026-06-06",
    tag: "LIVE",
  },
  {
    ep: "V-012",
    show: "Vault // Archives",
    title: "Recovered: The Banned Cut",
    desc: "Pulled within six hours of upload. Restored here in full. Watch it before it moves again.",
    duration: "22:47",
    date: "2026-05-30",
    tag: "VAULT",
  },
  {
    ep: "155",
    show: "The Forward Observations Podcast",
    title: "Kit, Coffee, and Catastrophe",
    desc: "Gear philosophy, bad decisions, and the ritual of packing out before first light.",
    duration: "1:39:55",
    date: "2026-05-27",
    tag: "MAIN",
  },
];

export type Dispatch = {
  slug: string;
  title: string;
  location: string;
  date: string;
  readTime: string;
  tag: string;
  classification: string;
  excerpt: string;
  body: string[];
};

export const dispatches: Dispatch[] = [
  {
    slug: "notes-from-a-dead-channel",
    title: "Notes From a Dead Channel",
    location: "UNDISCLOSED // THE INTERNET",
    date: "2026-06-24",
    readTime: "6 min",
    tag: "SIGNAL",
    classification: "OPEN SOURCE",
    excerpt:
      "They pulled the channel again. Ninety thousand hours of work, gone before breakfast. Here is what we've learned about dying on the internet and coming back.",
    body: [
      "The email always arrives at an ugly hour. A policy you didn't break. An appeal you can't win. And then the number — subscribers, views, years — resets to zero like it was never there.",
      "We've been deplatformed enough times to treat it as weather now. You don't argue with a storm; you build for it. Mirrors, archives, backups of the backups. The Vault exists because we assume, every single day, that the main channel is already gone.",
      "The lesson a forward observer learns first is that the position is temporary. You are always about to move. The signal is the same. You transmit from where you are, you assume the tower is compromised, and you keep a fallback plotted before you ever need it.",
      "So they can cut it. They have. They will again. And somewhere on a server we control, the record keeps writing itself — because the observation was the whole point, and the observation doesn't stop just because someone flipped a switch.",
    ],
  },
  {
    slug: "the-observers-eye",
    title: "The Observer's Eye",
    location: "OBSERVATION POST // FORWARD",
    date: "2026-06-17",
    readTime: "8 min",
    tag: "FIELD",
    classification: "FIELD NOTE",
    excerpt:
      "Forward observation is not about the shot. It's about seeing clearly, first, and reporting it exactly as it is. The most tactical skill on the battlefield is honesty.",
    body: [
      "The oldest job on any battlefield is watching. Before the tools, before the noise, someone had to go forward of the line, find high ground, and tell the truth about what they saw. Everything downstream depends on that one honest report.",
      "It sounds simple until you try it under pressure. The eye wants to see what it hopes for. The forward observer's entire discipline is refusing that — separating the thing that is happening from the thing you want to be happening, and calling in only the first one.",
      "We carry that discipline into everything, including the camera. A lens can lie faster than a mouth. So we keep the frame wide, we keep the timestamp honest, and we let the viewer stand where we stood.",
      "Observe. Report. Advance. In that order, always. The advancing is the easy part. It's the observing — clean, unflinching, without the flattering edit — that most people can't do.",
    ],
  },
  {
    slug: "static-over-the-grey-zone",
    title: "Static Over the Grey Zone",
    location: "GREY ZONE // EASTERN LINE",
    date: "2026-06-10",
    readTime: "7 min",
    tag: "FIELD",
    classification: "RECOVERED",
    excerpt:
      "Long silences, longer nights. A field note on waiting — the ninety-nine percent of forward work nobody puts in the highlight reel.",
    body: [
      "Nobody warns you about the boredom. The reel is all motion and noise, but the reality is a cold position and a lot of nothing, and the nothing is where the actual work lives.",
      "You learn the terrain by staring at it until it stops being scenery. A tree line becomes a set of firing positions. A silence becomes a schedule. Patience is a weapon system, and almost nobody trains it.",
      "The radio hisses. You wait. Somewhere out past the wire, the day is deciding what it wants to be, and your only job is to still be watching when it makes up its mind.",
      "That's the part we try to put on camera that never quite survives the edit. The waiting. The grey. The specific texture of a night where the most important thing you do is simply not look away.",
    ],
  },
  {
    slug: "supply-lines",
    title: "Supply Lines",
    location: "SUPPLY // HOME STATION",
    date: "2026-05-27",
    readTime: "5 min",
    tag: "SUPPLY",
    classification: "OPEN SOURCE",
    excerpt:
      "Why the patch on your plate carrier and the coffee in your hand are the same conversation. A short piece on kit, ritual, and belonging to something.",
    body: [
      "Gear culture gets mocked by people who've never depended on their gear. But every patch, every hat, every sticker on a hard case is a small flag — a way of saying I was there, I'm one of these, this is my tribe.",
      "We make the stuff we'd actually wear. That's the whole design brief. If it wouldn't survive a real week — packed, rained on, forgotten in a truck — it doesn't ship.",
      "The ritual matters too. Packing out before light. The coffee that tastes like a decision. The same three things always in the same three pockets. Supply isn't shopping; it's the quiet system that keeps you moving.",
      "So yeah, it's a t-shirt. It's also a signal. You see it across a room and you already know something true about the person wearing it. That's worth more than the cotton.",
    ],
  },
];

export function getDispatch(slug: string): Dispatch | undefined {
  return dispatches.find((d) => d.slug === slug);
}

export type Product = {
  slug: string;
  name: string;
  type: string;
  price: string;
  status: "IN STOCK" | "LOW STOCK" | "SOLD OUT" | "DROP";
  colorway: string;
  jp: string;
};

export const products: Product[] = [
  {
    slug: "observer-tee",
    name: "Observer Tee",
    type: "T-Shirt · Heavyweight",
    price: "$34",
    status: "IN STOCK",
    colorway: "Void Black / Terminal Red",
    jp: "観測",
  },
  {
    slug: "nvg-skull-hoodie",
    name: "NVG Skull Hoodie",
    type: "Hoodie · Midweight Fleece",
    price: "$78",
    status: "LOW STOCK",
    colorway: "Void Black / Amber",
    jp: "髑髏",
  },
  {
    slug: "forward-cap",
    name: "Forward-of-the-Line Cap",
    type: "Structured Cap",
    price: "$32",
    status: "IN STOCK",
    colorway: "OD Green / Red Stitch",
    jp: "前進",
  },
  {
    slug: "signal-death-patch",
    name: "Signal Death Patch",
    type: "PVC Morale Patch",
    price: "$12",
    status: "DROP",
    colorway: "Glow Cyan",
    jp: "信号",
  },
  {
    slug: "grey-zone-stickers",
    name: "Grey Zone Sticker Pack",
    type: "Vinyl · 8-Pack",
    price: "$8",
    status: "IN STOCK",
    colorway: "Mixed",
    jp: "灰色地帯",
  },
  {
    slug: "ronin-trauma-pouch",
    name: "Ronin Trauma Pouch",
    type: "Laser-Cut MOLLE",
    price: "$45",
    status: "SOLD OUT",
    colorway: "Wolf Grey",
    jp: "浪人",
  },
];

export type Value = { title: string; jp: string; icon: string; text: string };

export const values: Value[] = [
  {
    title: "Observe First",
    jp: "観測",
    icon: "eye",
    text: "See it clearly before you say anything about it. The report is only worth the honesty behind it.",
  },
  {
    title: "Own the Signal",
    jp: "信号",
    icon: "broadcast",
    text: "Build like the tower's already down. Mirror everything, archive everything, answer to no one platform.",
  },
  {
    title: "Forward, Always",
    jp: "前進",
    icon: "compass",
    text: "The position is temporary; the direction isn't. When the line moves, we move with it — toward the edge, not away.",
  },
  {
    title: "Bring the Others",
    jp: "部隊",
    icon: "users",
    text: "None of this works solo. It's a unit, a tribe, a chat, a comment section that would take a bullet for each other.",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Is Forward Observations Group real, or is this a bit?",
    answer:
      "Both, on purpose. It's a genuine veteran-run media collective and apparel brand — and it wears its gonzo self-mythology out loud. The camera is real. The attitude is a choice.",
  },
  {
    question: "Where can I actually watch and listen?",
    answer:
      "Everywhere that hasn't banned us this week, and the Vault for everywhere that has. The main podcast runs weekly; field dispatches and livestreams drop on their own schedule. Follow the channels and mirror what you like — you never know how long it stays up.",
  },
  {
    question: "Why do your channels keep disappearing?",
    answer:
      "Deplatforming, demonetization, and the occasional mysterious 'community guidelines' violation. We treat it as weather. The Vault exists so the record survives the storm, and we always keep a fallback plotted before we need it.",
  },
  {
    question: "Do you actually ship the merch, or is it vaporware?",
    answer:
      "It ships. Drops are limited by design — when a colorway sells out it's usually gone for good, so if you see something in stock, that's the signal to move.",
  },
];
