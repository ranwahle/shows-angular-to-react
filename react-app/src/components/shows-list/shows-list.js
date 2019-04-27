import React from 'react';
import './shows-list.scss';
import {Link} from "react-router-dom";


function ShowsList(props) {
    const {shows} = props;
    if (shows) {
        console.log('prop.shows', props.shows)
        return (<div className="shows-container">
            {shows.map(show => {
                return (<div>
                    <Link to={`show/${show.id}`}>
                    <p>{show.name}</p> <img alt={show.name}
                                                                src={show.image? show.image.medium: `${process.env.PUBLIC_URL}/assets/images/no-img-portrait-text.png`}/>
                    </Link>
                    </div>);
            })
            }
        </div>)
    }
    return (<p>Shows list works!!!</p>)
}

export default ShowsList;
