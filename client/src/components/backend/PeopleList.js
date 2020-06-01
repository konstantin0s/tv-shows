import React from 'react';
import PeopleListItem from './PeopleListItem';
import Schedule from './Schedule';
// import './index.css';

const PeopleList = (props) => {
    console.log(props.tvshows);
    return (
 
        <div className="series-father">
                   <Schedule />
          <ul className="series-list">
            {
           
                    props.tvshows.map(series => (
                        <PeopleListItem key={series.person.id} series={series} />
                        ))
             
            }
         </ul> 
        </div>
    );
}

export default PeopleList;
