import React from 'react';
import NetworkListItem from './NetworkListItem';
import Schedule from './Schedule';
// import './index.css';

const NetworkList = (props) => {
    console.log(props.networks);
    return (
 
        <div className="series-father">
                   <Schedule />
          <ul className="series-list">
            {
           
                    props.networks.map(series => (
                        <NetworkListItem key={series.id} series={series} />
                        ))
             
            }
         </ul> 
        </div>
    );
}

export default NetworkList;
