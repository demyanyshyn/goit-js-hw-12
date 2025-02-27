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
        per_page: 9,
      },
    };
    this.#url = `https://pixabay.com/api/`;
  }
  sendQuery(searchInput, thanCall, cathCall) {
    this.#options.params.q = searchInput;

    axios(this.#url, this.#options)
      .then(items => thanCall(items))
      .catch(error => cathCall(error));
  }
  clearSearchQuery() {
    this.#options.params.q = ``;
    this.#options.params.page = 1;
  }
}
