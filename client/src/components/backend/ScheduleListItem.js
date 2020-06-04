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
        <div className="schedule-child">
                  {
                        props.twenty.slice(0, 6).map((list) => (
                              <ul className="ul-schedule" key={list.id}>
                                  <li>{list.airtime} {" "}  {" "} {list.name}  </li>
                                  <a href="#">{list.show.network.name} {" "}  {" "}
                                   {list.show.name}  </a>
                               </ul>
                 ))}
        </div>
    )
}


export default ScheduleListItem;
