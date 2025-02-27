import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

// my inport
import RenderGallery from './js/render-functions';
import ImageQuery from './js/pixabay-api';

const optionsSimpleLightBox = {
  captionDelay: 250,
  captionsData: 'alt',
};

function getOn() {
  form.addEventListener(`submit`, event => search(event));
}
function search(event) {
  event.preventDefault();
  if (isValidInput()) {
    gallery.loader();
    const id = setTimeout(() => {
      pixABay.sendQuery(searchInput, render, errorShow);
      clearInterval(id);
    }, 2000);
  } else {
    errorShow(`Sorry, input not valid`);
    refresh();
  }
}
function isValidInput() {
  if (input.value && input.value.length <= 100) {
    searchInput = input.value;
    return true;
  } else return false;
}

function render(feedback) {
  if (feedback.data.hits.length > 0) {
    gallery.renderItems(feedback);
    buildLightshow();
  } else {
    errorShow(`Sorry, there are no images matching your search query. Please try again!
  `);
    gallery.clearGalery();
  }
}

function buildLightshow() {
  // let galleryLight = new SimpleLightbox('.gallery-link', optionsSimpleLightBox);
  // galleryLight.on('show.simplelightbox', function () {});
  // galleryLight.on('error.simplelightbox', function (e) {
  //   console.log(e);
  // });
  galleryLight.refresh();
}

function refresh() {
  gallery.clearGalery();
  input.value = ``;
  pixABay.clearSearchQuery();
}
function errorShow(message) {
  message = message.message ? message.message : message;
  let errorMessage = {
    message,
    icon: `material-icons-outlined`,
    iconColor: '#fff',
    iconText: `dangerous`,
    messageColor: `#fff`,
    color: `#ef4040`,
    position: `topRight`,
    timeout: 2000,
    theme: `dark`,
    maxWidth: `432px`,
  };
  iziToast.show(errorMessage);
}

const gallery = new RenderGallery();
const pixABay = new ImageQuery();
let galleryLight = new SimpleLightbox('.gallery-link', optionsSimpleLightBox);

const form = document.querySelector(`#search-form`);
const btn = document.querySelector(`#search-btn`);
const input = document.querySelector(`#search-input`);

let searchInput;

getOn();
