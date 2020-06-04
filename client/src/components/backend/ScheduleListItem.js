import React from 'react';
import { Link } from "react-router-dom";
import './css/serieslistitem.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';

const ScheduleListItem = (props) => {


    console.log(props);

    return (
        <React.Fragment>
                  {
                        props.twenty.slice(0, 6).map((list) => (
                              <tr className="ul-schedule" key={list.id}>
                                  <td>
                                       {" "}  {" "} 
                                   <span className="time">
                                   {list.airtime}  
                                   </span>
                                   <span className="network">
                                     {list.show.network.name} 
                                     </span>
                                       </td>
                                  <td href="#">
                                     <span className="showname">
                                     {list.name.slice(0,15)}... 
                                     </span> <br />
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
