import axios from 'axios';
class ShowsService {

  searchShows(searchTerm) {
    return axios.get(`/search/shows?q=${searchTerm}`);
  }

  lookupShow(showId) {
    return axios.get(`/shows/${showId}`);
  }

}

export default new ShowsService();
