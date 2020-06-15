import React from 'react';
import NetworkListItem from './NetworkListItem';
import './css/networklist.css';


const NetworkList = (props) => {
    // console.log(props.networks);

//returning objects with unique network name;
const result = Array.from(new Set(props.networks.map((net) => net.network.id)))
     .map((id) => {
         return {
             id: id,
             list: props.networks.find(s => s.id === id).network
         }
     });
    //  console.log(result);

    return (

        <div className="network-father">
            <div className="ad">
                {/* ad placeholder*/}
            </div>
            <ul className="network-list">
 
                {
           [...new Set(result
                .map(series => {
                    return (
                        <NetworkListItem key={series.id} series={series}/>)
                }

                  ))]
                }
            </ul>
        </div>
    );
}

export default NetworkList;
