// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);

const galleryDivRef = document.querySelector('.gallery');
// galleryDivRef.addEventListener('click', handleGalleryCardClick);
galleryDivRef.innerHTML = makeGalleryMurkup(galleryItems);

function makeGalleryMurkup(pictureArray) {
  return pictureArray
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </div>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.7,
  navText: ['👈🏻', '👉🏻'],
});
