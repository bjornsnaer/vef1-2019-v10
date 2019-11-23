import getRandomImage from './nasa-api';
import el from './helpers';
import { save, load } from './storage';

// todo vísa í rétta hluti með import

// breytur til þess að halda utan um html element nodes
let title; // titill fyrir mynd á forsíðu
let text; // texti fyrir mynd á forsíðu
let img; // mynd á forsíðu

let image; // object sem inniheldur núverandi mynd á forsíðu.

/*
 * Sækir nýja Mynd af handahófi frá Nasa API og birtir hana á forsíðunni
 * ásamt titli og texta.
 */
function getNewImage() {
  const response = getRandomImage();

  response.then(function (result) {
    const parsedResult = JSON.parse(result);

    title.innerHTML = parsedResult['title'];
    text.innerHTML = parsedResult['explanation'];
    img.src = parsedResult['url'];


    if (parsedResult['media_type'] === 'video') {
      if (img.tagName === 'IMG') {
        const apod = img.parentElement;
        apod.removeChild(img);

        img = document.createElement('IFRAME');
        img.width = '420';
        img.height = '345';

        apod.insertBefore(img, apod.firstChild);
      }
    }
    else {
      if (img.tagName === 'IFRAME') {
        const apod = img.parentElement;
        apod.removeChild(img);
      
        img = document.createElement('IMG');
        
        apod.insertBefore(img, apod.firstChild)
      }
    }

    img.src = parsedResult['url'];
 
  });
}

/*
 * Vistar núverandi mynd í storage.
 */
function saveCurrentImage() {
  save(image.type, image.mediaUrl, image.text, image.title);
}

/*
 * Upphafsstillir forsíðuna. Setur event listeners á takkana, og sækir eina mynd.
 *
 */
export default function init(apod) {
  title = apod.getElementsByClassName('apod__title')[0];
  text = apod.getElementsByClassName('apod__text')[0];
  img = apod.getElementsByClassName('apod__image')[0];

  getNewImage();

  document.getElementById('new-image-button').addEventListener('click', getNewImage);

  document.getElementById('save-image-button').addEventListener('click', saveCurrentImage);
}

/*
 * Fall fyrir favourites.html. Sér um að sækja allar vistuðu myndirnar og birta þær ásamt
 * titlum þeirra.
 */
export function loadFavourites() {

}
