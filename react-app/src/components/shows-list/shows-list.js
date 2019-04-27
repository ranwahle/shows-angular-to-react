import React from 'react';
import './shows-list.scss';


function ShowsList(props) {
    const {shows} = props;
    if (shows) {
        console.log('prop.shows', props.shows)
        return (<div className="shows-container">
            {shows.map(show => {
                return (<div><p>{show.name}</p> <img alt={show.name}
                                                                src={show.image.medium}/></div>);
            })
            }
        </div>)
    }
    return (<p>Shows list works!!!</p>)
}

export default ShowsList;
