import React from 'react';
import NetworkListItem from './NetworkListItem';
import './css/networklist.css';

const NetworkList = (props) => {
    console.log(props.networks);
    return (
 
        <div className="network-father">
             <div className="ad">
   {/* ad placeholder*/}
 </div>
          <ul className="network-list">

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
