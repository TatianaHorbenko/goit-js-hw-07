import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryElements = document.querySelector(".gallery");

const galleryItem = ({ preview, original, description }) => {
  return `
 <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
    style="display:block"
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
  </a>
</div>
    `;
};

const imageGallery = galleryItems.map(galleryItem).join("");

galleryElements.insertAdjacentHTML("beforeend", imageGallery);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
