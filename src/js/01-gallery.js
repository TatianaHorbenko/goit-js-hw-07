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

galleryElements.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }else {
    event.preventDefault();
    modalShow(event.target.dataset.source);
  }
}
let instance;
function modalShow(source) {
  instance = basicLightbox.create(
    `
        <img src="${source}" width="800" height="600"></img
`,
    {
      onShow: (instance) => {
        addListener();
      },
      onClose: (instance) => {
        removeListener();
      },
    }
  );
  instance.show();
}

function addListener() {
  window.addEventListener("keydown", onEscClick);
}

function onEscClick(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}

function removeListener() {
  window.removeEventListener("keydown", onEscClick);
}

console.log(galleryItems);
