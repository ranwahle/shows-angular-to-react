import axios from 'axios';
class ShowsService {

  searchShows(searchTerm) {
    return axios.get(`/search/shows?q=${searchTerm}`);
  }

}

export default new ShowsService();
