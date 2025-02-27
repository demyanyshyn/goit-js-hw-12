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
async function search(event) {
  event.preventDefault();
  if (isValidInput()) {
    gallery.loader();
    const id = setTimeout(async () => {
      try {
        const response = await pixABay.sendQuery(searchInput);
        // if (!response.data) return;
        render(response);
      } catch (error) {
        errorShow(error);
      }
      clearInterval(id);
    }, 2000);
  } else {
    errorShow(`Sorry, input not valid`);
    refresh();
  }
}
async function loadMore(event) {
  console.log(`click`);
}
async function loadLast(event) {
  console.log(`last`);
}
function isValidInput() {
  if (input.value && input.value.length <= 100) {
    searchInput = input.value;
    return true;
  } else return false;
}

function render(feedback) {
  if (feedback.data.hits.length > 0) {
    gallery.showFirstPage(feedback);
    gallery.createBtn(loadMore);

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
