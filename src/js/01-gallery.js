import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

//===============================================

const list = document.querySelector('.gallery');

//================================================
const markup = galleryItems
  .map(
    galleryItems =>
      `<a class="gallery__link" href="${galleryItems.original}">
                <img  
                    class="gallery__image"
                    src="${galleryItems.preview}" 
                    alt="${galleryItems.description}"
                >
        </a>
      `
  )
  .join('');

list.insertAdjacentHTML('afterbegin', markup);

//=================================================

function selectImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

gallery.on('show.simplelightbox', function () {});

//================================================

list.addEventListener('click', selectImg);
