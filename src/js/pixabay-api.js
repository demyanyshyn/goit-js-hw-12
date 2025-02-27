import axios from 'axios';

// classes
export default class ImageQuery {
  #options;
  #url;

  constructor() {
    this.#options = {
      params: {
        _method: 'get',
        key: `49061032-8122651df51dcd062279bc436`,
        q: ``,
        orientation: `horizontal`,
        page: 1,
        safesearch: true,
        image_type: `photo`,
        per_page: 40,
      },
    };
    this.#url = `https://pixabay.com/api/`;
    this.lastP = 0;
  }
  async sendQuery(searchInput, page) {
    searchInput ? (this.#options.params.q = searchInput) : ``;
    const response = await axios(this.#url, this.#options);

    return response;
  }
  async goToLastPage() {
    this.#options.params.page = this.lastP;
    const response = await this.sendQuery();
    return response;
  }
  clearSearchQuery() {
    this.#options.params.q = ``;
    this.#options.params.page = 1;
  }
  nextPage() {
    this.#options.params.page++;
  }
  lastPage(response) {
    this.lastP = Math.ceil(
      response.data.totalHits / this.#options.params.per_page
    );
    return this.lastP <= this.#options.params.page;
  }
}
