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
        console.log(data);

        if (data.Response === 'True') {
          resolve(data.Search);
        } else {
          reject(data.Error);
        }
      });
    });
    // TODO: get list of movies (title, poster, rating, year) from omdp api
  }

  getMovieRating(id) {
    return fetch(`https://www.omdbapi.com/?i=${id}&apikey=7f33cc87`)
      .then((res) => res.json())
      .then((data) => data.imdbRating);
  }
}
