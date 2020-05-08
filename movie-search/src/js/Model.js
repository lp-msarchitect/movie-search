export default class Model {
  constructor() {}

  getData(string = '', page = 1) {
    const url = `https://www.omdbapi.com/?s=${string}&page=${page}&apikey=7f33cc87`;

    return fetch(url).then((res) => res.json());
  }

  getTranslate(str) {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200426T152125Z.cb620e66f793c290.b8233de83d42a48bd5547479b9a206f77b57ea96&text=${str}&lang=ru-en`;

    return fetch(url)
      .then((res) => res.json())
      .then((json) => {
        return json.text[0];
      });
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
