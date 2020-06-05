import React from 'react';
import PeopleListItem from './PeopleListItem';
import Schedule from './Schedule';
// import './index.css';

const PeopleList = (props) => {
    // console.log(props.people);
    return (

        <div className="series-father">
            <Schedule/>
            <ul className="series-list">
                {props
                    .people
                    .map(series => (<PeopleListItem key={series.person.id} series={series}/>))
}
            </ul>
        </div>
    );
}

export default PeopleList;
