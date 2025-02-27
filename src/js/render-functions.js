export default class RenderGallery {
  constructor() {
    this.gallery = document.querySelector(`.gallery`);
  }
  changeResolution(img) {
    return img.slice(0, -7) + `180.jpg`;
  }
  showFirstPage(response) {
    this.#renderItems(response);
  }
  showNextPage(response) {
    this.#renderItems(response);
  }
  #renderItems(response) {
    const markup = response.data.hits
      .map(image => {
        return `<li class="gallery-item">
        <div clas="img-box">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${this.changeResolution(image.webformatURL)}"
              data-source="${image.largeImageURL}"
              alt="${image.tags}"
            />
          </a>
        </div>
        <ul class="content-box">
          <li class="content-item">
            <div class="content-header">Likes</div>
            <div class="content">${image.likes}</div>
          </li>
          <li class="content-item">
           <div class="content-header">Views</div>
            <div class="content">${image.views}</div>
          </li>
          <li class="content-item">
            <div class="content-header">Comments</div>
            <div class="content">${image.comments}</div>
          </li>
          <li class="content-item">
            <div class="content-header">Downloads</div>
            <div class="content">${image.downloads}</div>
          </li>
        </ul>
      </li>
      `;
      })
      .join('');

    this.gallery.insertAdjacentHTML('beforeend', markup);
  }

  clearGalery() {
    this.gallery.innerHTML = ``;
    this.removeBtn();
  }

  createBtn(callback, callback2) {
    const div = document.createElement(`div`);
    div.classList.add(`pages-btn-wrapper`);
    div.innerHTML = `
      <buton class="search-btn" id="next-page" type="button">Load more</buton>
      <buton class="search-btn" id="last-page" type="button">Load last page</buton>`;
    const nextBtn = div.querySelector(`#next-page`);
    const lastBtn = div.querySelector(`#last-page`);
    nextBtn.addEventListener(`click`, callback);
    lastBtn.addEventListener(`click`, callback2);

    this.gallery.insertAdjacentElement(`afterend`, div);
  }
  removeBtn() {
    const btn = document.querySelectorAll(`.pages-btn-wrapper`);
    btn ? btn.forEach(el => el.remove()) : ``;
  }

  loader() {
    const loader = `<div class="content-header" id="loader">Loading images, please wait... <br/><span class="loader"></span></div>`;
    this.gallery.insertAdjacentHTML('afterend', loader);
  }
  removeLoader() {
    const loader = document.querySelector(`#loader`);
    loader.remove();
  }
  disableBtn(callback, callback2) {
    const nextBtn = document.querySelector(`#next-page`);
    const lastBtn = document.querySelector(`#last-page`);
    nextBtn.removeEventListener(`click`, callback);
    lastBtn.removeEventListener(`click`, callback2);
    nextBtn.classList.toggle(`disabled-btn`);
    lastBtn.classList.toggle(`disabled-btn`);

    // const div = document.querySelector(`.pages-btn-wrapper`);
    // div.remove();
  }
}
