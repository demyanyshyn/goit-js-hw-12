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
  form.addEventListener(`submit`, search);
}
async function search(event) {
  event.preventDefault();
  if (isValidInput()) {
    refresh();
    gallery.loader();
    const id = setTimeout(async () => {
      try {
        const response = await pixABay.sendQuery(searchInput);
        renderFirstPage(response);
        pixABay.nextPage();
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
  gallery.loader();
  const id = setTimeout(async () => {
    try {
      const response = await pixABay.sendQuery();
      pixABay.nextPage();
      renderNexPage(response);
    } catch (error) {
      errorShow(error);
    }
    clearInterval(id);
  }, 2000);
}

async function loadLast(event) {
  gallery.loader();
  const id = setTimeout(async () => {
    try {
      const response = await pixABay.goToLastPage();
      renderNexPage(response);
    } catch (error) {
      errorShow(error);
    }
    clearInterval(id);
  }, 2000);
}

function isValidInput() {
  if (input.value.trim() && input.value.length <= 100) {
    searchInput = input.value;
    return true;
  } else return false;
}

function renderNexPage(response) {
  gallery.removeLoader();
  gallery.showNextPage(response);
  galleryLight.refresh();
  scroll();
  if (pixABay.lastPage(response)) {
    gallery.disableBtn(loadMore, loadLast);
    iziToast.warning({
      message: `We're sorry, but you've reached the end of search results.
`,
      position: `topRight`,
    });
  }
}

function renderFirstPage(response) {
  gallery.removeLoader();
  if (response.data.hits.length > 0) {
    gallery.clearGalery();
    gallery.showFirstPage(response);

    gallery.createBtn(loadMore, loadLast);

    galleryLight.refresh();

    if (pixABay.lastPage(response)) {
      gallery.disableBtn(loadMore, loadLast);
      iziToast.warning({
        message: `We're sorry, but you've reached the end of search results.
`,
        position: `topRight`,
      });
    }
  } else {
    errorShow(`Sorry, there are no images matching your search query. Please try again!
  `);
    gallery.clearGalery();
  }
}
function scroll() {
  const item = document.querySelector(`.gallery-item`);
  let itemParams = item.getBoundingClientRect();
  window.scrollBy({
    top: itemParams.height * 2,
    left: 0,
    behavior: 'smooth',
  });
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
