import React from 'react';
import {Link} from 'react-router-dom';
import ShowsService from '../../shows-service';

async function getShow(showId, setShow) {
    const response = await ShowsService.lookupShow(showId);
    if (response.data) {

        setShow(response.data);
    }
}

function SingleShow({match}) {
    const id = match.params.id;

    const [show, setShow] =React.useState({show: {}})
    getShow(id, setShow);

    return (<div>
    <a href={show.url}> <p>{show.name}</p></a>
   <p>{show.summary}</p>
  <a href={show.url}>
  <img  src={ show.image? show.image.original: '/assets/images/no-img-portrait-text.png' }/>

  </a>

  <Link to="/">Go Back</Link>
</div>)
}

export default SingleShow;

