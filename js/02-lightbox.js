import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createImageGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createImageGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
  </a>`;
      })
      .join("");
  }

  new SimpleLightbox(".gallery a", {
    captionData: "alt",
    captionDelay: 250,
  });
