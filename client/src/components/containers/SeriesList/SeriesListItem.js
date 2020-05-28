import React from 'react';

const SeriesListItem = (props) => {
    
    console.log(props);
    return (
        <div>
                <li key={props.series.show.id}>
                <h2 className="name">{props.series.show.name}</h2>
                {/* <img className="image" src={props.series.show.image.medium ? props.series.show.image.medium : ''} /> */}
                </li>
        </div>
    )
}

export default SeriesListItem;
