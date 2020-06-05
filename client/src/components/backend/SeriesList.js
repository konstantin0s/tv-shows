import React from 'react';
import SeriesListItem from './SeriesListItem';
import Schedule from './Schedule';
// import './index.css';

const SeriesList = (props) => {
    // console.log(props.tvshows);
    return (

        <div className="series-father">
            <Schedule/>
            <ul className="series-list">
                {props
                    .tvshows
                    .map(series => (<SeriesListItem key={series.show.id} series={series}/>))
}
            </ul>
        </div>
    );
}

export default SeriesList;
