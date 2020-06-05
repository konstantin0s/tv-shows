import React from 'react';
import './css/networklistitem.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const PeopleListItem = (props) => {
    const classes = useStyles();

    console.log(props);
    return (
        <div className="network">
        <Card className={classes.root} key={props.series.network.id}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.series.network.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
             {props.series.network.country.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          
          </CardActions>
        </Card>
        </div>
    )
}


export default PeopleListItem;


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 160,
      width: 345
    },
  });
