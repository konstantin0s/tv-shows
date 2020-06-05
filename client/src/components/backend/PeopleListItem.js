import React from 'react';
import {Link} from "react-router-dom";
import './css/peoplelistitem.css';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';

const PeopleListItem = (props) => {
    const classes = useStyles();

    // console.log(props);
    const replaceNullImg = 'https://source.unsplash.com/random';
    return (
        <div className="child-show">
            <Card className={classes.root}>
                <CardActionArea key={props.series.person.id}>

                    <ReactFancyBox
                        className={classes.media}
                        thumbnail={(!!props.series.person.image)
                        ? props.series.person.image.medium
                        : replaceNullImg}
                        image={(!!props.series.person.image)
                        ? props.series.person.image.medium
                        : replaceNullImg}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <Link
                                className="linkx"
                                id={props.series.person.id}
                                to={`/person/${props.series.person.id}`}>
                                {props.series.person.name}
                            </Link>

                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.series.person.type}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
            </Card>
        </div>
    )
}

export default PeopleListItem;

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 160,
        width: 345
    }
});
