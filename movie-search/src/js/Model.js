export default class Model {
  constructor() {}

  getData(string = '', page = 1) {
    const url = `https://www.omdbapi.com/?s=${string}&page=${page}&apikey=7f33cc87`;

    return fetch(url).then((res) => res.json());
  }

  getMoviesPage(request = '', page = 1) {
    this.currentPage = page;
    return this.getData(request, page).then((data) => {
      return new Promise(function (resolve, reject) {
        resolve(data.Search);
      });
    });
    // TODO: get list of movies (title, poster, rating, year) from omdp api
  }
}
