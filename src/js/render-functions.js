export default class RenderGallery {
  constructor() {
    this.gallery = document.querySelector(`.gallery`);
  }
  changeResolution(img) {
    return img.slice(0, -7) + `180.jpg`;
  }
  renderItems(feedback) {
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
    this.clearGalery();
    this.gallery.insertAdjacentHTML('beforeend', markup);
  }
  clearGalery() {
    this.gallery.innerHTML = ``;
  }
  loader() {
    const loader = `<div class="content-header">Loading images, please wait... <br/><span class="loader"></span></div>`;
    this.clearGalery();
    this.gallery.insertAdjacentHTML('beforeend', loader);
  }
}
