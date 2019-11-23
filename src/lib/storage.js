/**
 * Sækir og vistar í localStorage
 */

// Fasti sem skilgreinir heiti á lykli sem vistað er undir í localStorage
const LOCALSTORAGE_KEY = 'favourite_spacephotos';

/**
 * Sækir gögn úr localStorage. Skilað sem lista á forminu:
 * [{ type, mediaUrl, text, title },
 *  { type, mediaUrl, text, title },
 *  ...,
 *  { type, mediaUrl, text, title }]
 *
 * @returns {array} fylki af myndum eða tóma fylkið ef ekkert vistað.
 */
export function load() {
  const toJson = localStorage.getItem(LOCALSTORAGE_KEY);

  return JSON.parse(toJson);
}

/**
 * Vistaðar myndir með texta.
 *
 * @param {string} type annað hvort image eða video
 * @param {string} mediaUrl URL á myndinni/myndbandinu.
 * @param {string} text texti fyrir myndina/myndbandið.
 * @param {string} title titill fyrir myndina/myndbandið.
 */

export function save(type, mediaUrl, text, title) {
  let favourites = load();

  if (!favourites) favourites = [];
  if (favourites.filter((img) => img.mediaUrl === mediaUrl).length === 0) {
    favourites.push({type, mediaUrl, text, title});

    const toJson = JSON.stringify(favourites);
    localStorage.setItem(LOCALSTORAGE_KEY, toJson);
}


/**
 * Hreinsar allar myndir úr localStorage
 */
export function clear() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
