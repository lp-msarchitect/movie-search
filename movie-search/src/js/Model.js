export default class Model {
  constructor(apiKeys) {
    this.apiKeys = apiKeys;
  }

  async getMovies(query, page = 1) {
    const data = await this.getData(query, page);
    console.log(data);

    if (data.Response === 'True') {
      const moviesList = data.Search;
      const ratedMoviesList = await this.setMoviesAdditionInfo(moviesList);
      const ratedMoviesWithImagesList = await this.setMoviesPosters(
        ratedMoviesList
      );
      return ratedMoviesWithImagesList;
    }
    throw new Error(`No results for ${query}`);
  }

  async getData(string = '', page = 1) {
    const url = `https://www.omdbapi.com/?s=${string}&page=${page}&apikey=${this.apiKeys.omdb}`;
    const res = await fetch(url);
    return await res.json();
  }

  async getTranslate(str) {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKeys.ytrnsl}&text=${str}&lang=ru-en`;

    const res = await fetch(url);
    const json = await res.json();
    return json.text[0];
  }

  async setMoviesAdditionInfo(movies) {
    return await Promise.all(
      movies.map(async (movie) => {
        const url = `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${this.apiKeys.omdb}`;
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        movie.Country = json.Country;
        movie.Genre = json.Genre;
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
        const imgObjectURL = URL.createObjectURL(imgBlob);
        movie.Poster = imgObjectURL;
        return movie;
      })
    );
  }

  async getMaxPage(request) {
    const data = await this.getData(request);

    return Math.ceil(data.totalResults / 10);
  }
}
