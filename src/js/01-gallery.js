// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.style.listStyle = 'none';

galleryItems.map((galleryItem) => {
   
    const newListItem = document.createElement('li');   // <li></li>
    newListItem.className = "gallery__item";

    const listItemLink = document.createElement('a');   // <a></a>
    listItemLink.className = "gallery__link";
    listItemLink.href = galleryItem.original;
    
    const itemImg = document.createElement('img');   // <img></img>
    itemImg.className = "gallery__image";
    itemImg.src = galleryItem.preview;
    itemImg.dataset.source = galleryItem.original;
    itemImg.alt = galleryItem.description;

    listItemLink.append(itemImg);
    newListItem.append(listItemLink);
    gallery.append(newListItem);
});

import SimpleLightbox from "simplelightbox";

let SimpleLightboxgallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    fadeSpeed: 250
});

