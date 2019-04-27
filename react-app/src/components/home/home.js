import SearchShow from "../search-show/search-show";
import React from 'react';
import ShowsList from "../shows-list/shows-list";
import ShowsService from '../../shows-service';

let setShows;

const  searchShow = (searchTerm) => {
    console.log(`Searching for ${searchTerm}`)

    ShowsService.searchShows(searchTerm).then(response => {
        const result = response.data.map(show => show.show);
        console.log('shows result', result, setShows);
        setShows({shows: result});

    });

}

function Home() {
    const [shows, _setShows] = React.useState({shows: []});
    setShows = _setShows;

   const searchTerm = '';
    return (<div>
        <SearchShow onSearch={searchShow} searchTerm={searchTerm}/>
            <ShowsList shows={shows.shows}/>
  </div>)
}

export default Home;
