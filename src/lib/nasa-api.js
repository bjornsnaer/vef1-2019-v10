import randomNumer from "./helpers";

/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = 'jSW85AbBBiMSfqNgmdAT3O3jpqK1sgsHsj70Qsky';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod?api_key=jSW85AbBBiMSfqNgmdAT3O3jpqK1sgsHsj70Qsky';


/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {
  
  const day = randomNumer(1, 28);
  const month = randomNumer(1, 12);
  const year = 2018;

  const date = year.toString() + '-' + month.toString() + '-' + day.toString();

  const newURL = URL + '&date=' + date;

  console.log(newURL);

  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", newURL, false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;


}
