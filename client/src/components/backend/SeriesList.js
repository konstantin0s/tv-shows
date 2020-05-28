import React from 'react';
import SeriesListItem from './SeriesListItem';
// import './index.css';

const SeriesList = (props) => {
    console.log(props.tvshows);
    return (
 
        <div>
          <ul className="series-list">
            {props.tvshows.map(series => (
            <SeriesListItem key={series.id} series={series} />
            ))}
         </ul> 
        </div>
    );
}

export default SeriesList;
