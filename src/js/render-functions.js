export default class RenderGallery {
  constructor() {
    this.gallery = document.querySelector(`.gallery`);
  }
  changeResolution(img) {
    return img.slice(0, -7) + `180.jpg`;
  }
  showFirstPage(feedback) {
    this.clearGalery();
    this.#renderItems(feedback);
  }
  #renderItems(feedback) {
    const markup = feedback.data.hits
      .map(image => {
        return `<li>
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

  createBtn(callback, calback2) {
    const div = document.createElement(`div`);
    div.classList.add(`pages-btn-wrapper`);
    div.innerHTML = `
      <buton class="search-btn" id="next-page" type="button">Load more</buton>
      <! Add only for demo work on last page-->
      <buton class="search-btn" id="last-page" type="button">Load last page</buton>`;
    const nextBtn = div.querySelector(`#next-page`);
    const lastBtn = div.querySelector(`#last-page`);
    nextBtn.addEventListener(`click`, event => callback(event));
    lastBtn.addEventListener(`click`, event => callback2(event));

    this.gallery.insertAdjacentElement(`afterend`, nextBtn);
  }
  removeBtn() {
    const btn = document.querySelectorAll(`.pages-btn-wrapper`);
    btn ? btn.forEach(el => el.remove()) : ``;
  }

  loader() {
    const loader = `<div class="content-header">Loading images, please wait... <br/><span class="loader"></span></div>`;
    this.clearGalery();
    this.gallery.insertAdjacentHTML('beforeend', loader);
  }
}
