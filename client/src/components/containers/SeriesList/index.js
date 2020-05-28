import React from 'react';
import SeriesListItem from './SeriesListItem';
import './index.css';

const SeriesList = (props) => {
    console.log(props.list)
    return (
 
        <div>
          <ul className="series-list">
            {props.list.map(series => (
            <SeriesListItem key={series.show.id} series={series} />
            ))}
         </ul> 
        </div>
    );
}

export default SeriesList;
