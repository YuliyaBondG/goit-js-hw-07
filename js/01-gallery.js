import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createImageGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createImageGalleryMarkup(galleryItems) {
    return galleryItems
    .map (({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}" 
        alt="${description}"
        />
        </a>
        </div>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryContainer);

function onGalleryContainer(evt) {
    evt.preventDefault();

    const isImageGallery = evt.target.classList.contains(`gallery__image`);
    if (!isImageGallery) {
        return;
    }
    function onCloseModal(evt) {
        if (evt.key === "Escape") {
            instance.close();
        }
    }


const instance = basicLightbox.create(
`<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onCloseModal);
      },

      onClose: (instance) => {
        window.removeEventListener("keydown", onCloseModal);
      },
    }
);
instance.show();
}