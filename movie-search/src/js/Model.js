export default class Model {
  constructor() {}

  getData(string = '', page = 1) {
    const url = `https://www.omdbapi.com/?s=${string}&page=${page}&apikey=7f33cc87`;

    return fetch(url).then((res) => res.json());
  }
}
