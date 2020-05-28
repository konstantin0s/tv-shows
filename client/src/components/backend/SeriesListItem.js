import React from 'react';

const SeriesListItem = (props) => {
    
    console.log(props);
    return (
        <div>
                <li key={props.series.id}>
                <h2 className="name">{props.series.name}</h2>
                <img className="image" src={props.series.image.medium ? props.series.image.medium : ''} />
                </li>
        </div>
    )
}

export default SeriesListItem;
