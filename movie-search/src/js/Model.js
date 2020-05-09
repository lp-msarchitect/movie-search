export default class Model {
  constructor(apiKeys) {
    this.apiKeys = apiKeys;
    // TODO Api keys
  }

  async getMovies(query, page = 1) {
    const data = await this.getData(query, page);

    if (data.Response === 'True') {
      const moviesList = data.Search;
      const ratedMoviesList = await this.setMoviesRating(moviesList);
      const ratedMoviesWithImagesList = await this.setMoviesPosters(
        ratedMoviesList
      );
      return ratedMoviesWithImagesList;
    }
    throw new Error(`No results for ${query}`);
  }

  async getData(string = '', page = 1) {
    const url = `https://www.omdbapi.com/?s=${string}&page=${page}&apikey=7f33cc87`;
    const res = await fetch(url);
    return await res.json();
  }

  async getTranslate(str) {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200426T152125Z.cb620e66f793c290.b8233de83d42a48bd5547479b9a206f77b57ea96&text=${str}&lang=ru-en`;

    const res = await fetch(url);
    const json = await res.json();
    return json.text[0];
  }

  async setMoviesRating(movies) {
    return await Promise.all(
      movies.map(async (movie) => {
        const url = `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=7f33cc87`;
        const res = await fetch(url);
        const json = await res.json();
        movie.rating = json.imdbRating;
        return movie;
      })
    );
  }

  async setMoviesPosters(movies) {
    return await Promise.all(
      movies.map(async (movie) => {
        const url =
          movie.Poster === 'N/A' ? '/images/noposter.jpg' : movie.Poster;

        const res = await fetch(url);

        if (!res.ok) {
          res = await fetch('/images/noposter.jpg');
        }

        const imgBlob = await res.blob();
        const imgObjectURL = URL.createObjectURL(imgBlob); // TODO Сросить у ментора про URL
        movie.Poster = imgObjectURL;
        return movie;
      })
    );
  }

  async getMaxPage(request) {
    const data = await this.getData(request);

    return Math.ceil(data.totalResults / 10);
  }

  async getMoviesPage(request = '', page = 1) {
    this.currentPage = page;
    const data = await this.getData(request, page);
    console.log('response data: ', data);
    return new Promise(function (resolve, reject) {
      if (data.Response === 'True') {
        resolve(data.Search);
      } else {
        reject(data.Error);
      }
    });
  }

  async getMovieRating(id) {
    const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=7f33cc87`);
    const data = await res.json();
    return data.imdbRating;
  }
}
