/** Single source of truth for the restaurant's details. */
export const SITE = {
  name: 'Ji Sushi',
  tagline: 'En moderne japansk restaurant',
  street: 'Lodsgade 10',
  city: '9900 Frederikshavn',
  phoneDisplay: '31 33 44 86',
  phoneHref: 'tel:+4531334486',
  email: 'info@jisushi.dk',
  founded: 2023,
  facebook: 'https://www.facebook.com/people/Ji-Sushi-Frederikshavn/100086615153169/',
  /** Fødevarestyrelsen kontrolrapport — a trust signal Danish guests look for. */
  smiley: 'https://www.findsmiley.dk/1272682',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Ji Sushi, Lodsgade 10, 9900 Frederikshavn'),
}

/** Danish thousands separator: 1.200 kr, not 1,200 kr. */
export const kr = (n: number) => n.toLocaleString('da-DK')

const CLD = 'https://res.cloudinary.com/dwvvmlteg/image/upload'
export const SMILEY_BADGE =
  'https://res.cloudinary.com/dwvvmlteg/image/upload/v1787261359/control-report-badge_rzqp4x.png'

/** Hero slideshow. First frame is the one the restaurant chose to lead with. */
export const HERO_SLIDES = [
  { src: 'https://res.cloudinary.com/dwvvmlteg/image/upload/f_auto,q_auto,w_1800/v1768447970/Picture_3_sushi_vvpmh7.jpg', alt: 'Ji Sushi' },
]

export const PHOTOS = {
  logo: `${CLD}/v1/Ji_sushi_logo_1_1_1_fde41q`,
  hero: `${CLD}/f_auto,q_auto,w_1800/Sushi_4_woejxb`,
  platter: `${CLD}/f_auto,q_auto,w_1400/476297839_589640257266474_4179298734876294183_n_adivfr`,
}

/** The scanned paper menu pages already used across the site. */
export const MENU_SCANS = [
  { id: 'Forretter_kvutea', label: 'Forretter, side 1' },
  { id: 'Forretter_2_ryw2rw', label: 'Forretter, side 2' },
  { id: 'sticks_uxx5vx', label: 'Sticks' },
  { id: 'Sashimi_skda8x', label: 'Sashimi' },
  { id: 'Toppet_maki_ltklnu', label: 'Toppet maki, side 1' },
  { id: 'Toppet_maki_2_ybkguw', label: 'Toppet maki, side 2' },
  { id: 'Uramaki_n48trl', label: 'Uramaki' },
  { id: 'Hosomaki_shmref', label: 'Hosomaki' },
  { id: 'Fotomaki_two9ad', label: 'Futomaki' },
  { id: 'Nigiri_ykxytp', label: 'Nigiri, side 1' },
  { id: 'Nigiri_2_ppwe4q', label: 'Nigiri, side 2' },
  { id: 'Rispapir_ruller_i3hhwf', label: 'Rispapir ruller' },
  { id: 'SUSHI_menu_br076r', label: 'Sushi, side 1' },
  { id: 'Sushi_menu_2_hk8ue4', label: 'Sushi, side 2' },
  { id: 'Sushi_box_gcpqni', label: 'Sushi box, side 1' },
  { id: 'Sushi_box_2_sjghga', label: 'Sushi box, side 2' },
  { id: 'Sushi_box_3_uat700', label: 'Sushi box, side 3' },
  { id: 'tilbeh%C3%B8r_zef9ge', label: 'Tilbehør' },
]
export const scanUrl = (id: string, w = 1200) =>
  `${CLD}/f_auto,q_auto,w_${w}/${id}`
