import React from 'react';
import './css/serieslistitem.css';
import 'react-fancybox/lib/fancybox.css';

const ScheduleListItem = (props) => {
    // console.log(props);

    return (
        <React.Fragment>
            {props
                .twenty
                .slice(0, 6)
                .map((list) => (
                    <tr className="ul-schedule" key={list.id}>
                        <td>
                            {" "}
                            {" "}
                            <span className="time">
                                {list.airtime}
                            </span>
                            <span className="network">
                                {list.show.network.name}
                            </span>
                        </td>
                        <td href="#">
                            <span className="showname">
                                {list
                                    .name
                                    .slice(0, 15)}...
                            </span>
                            <br/>
                            <span className="epname">
                                {list.show.name}
                            </span>
                        </td>
                    </tr>
                ))}
        </React.Fragment>
    )
}

export default ScheduleListItem;
