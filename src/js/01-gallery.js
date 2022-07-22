import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const imagesMarkup = createGalleryItems(galleryItems);
galleryContainer.innerHTML = imagesMarkup;

function createGalleryItems(image) {
  return image
    .map(({ preview, original, description }) => {
      return `<div class = 'gallery__item'>
        <a class = "gallery__link" href ="${original}">
        <img class = "gallery__image"
        src = "${preview}";
        data-source = "${original}";
        alt = "${description}";
        />
        </a>
        </div>`;
    })
    .join('');
}

const imageContainer = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  animationSpeed: 250,
});

console.log(galleryItems);
