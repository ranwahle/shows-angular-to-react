import SearchShow from "../search-show/search-show";
import React from 'react';

function searchShow(searchTerm) {
    console.log(`Searching for ${searchTerm}`)
}

function Home() {
    const searchTerm = '';
    return (<div>
        <SearchShow onSearch={searchShow} searchTerm={searchTerm}></SearchShow>
  </div>)
}

export default Home;
