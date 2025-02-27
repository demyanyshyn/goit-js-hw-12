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
  }
  async sendQuery(searchInput) {
    this.#options.params.q = searchInput;
    const response = await axios(this.#url, this.#options);
    return response;
    // .then(items => thanCall(items))
    // .catch(error => cathCall(error));
  }
  clearSearchQuery() {
    this.#options.params.q = ``;
    this.#options.params.page = 1;
  }
}
