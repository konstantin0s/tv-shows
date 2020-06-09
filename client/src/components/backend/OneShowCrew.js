import React, {Component} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Loading from './Loading';
import Moment from 'moment';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import './css/oneshowcrew.css';

class OneShowCrew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            crew: [],
            isLoading: true
        };
    }

    oneShowCrew = () => {
        const {id} = this.props;
        this.setState((state) => ({
            ...state,
            isLoading: true
        }));

        axios
            .get(`/shows/${id}/crew`)
            .then((res) => {
                // console.log(res)
                const crew = res.data;
                // console.log(crew);
                this.setState({
                    crew: crew.slice(0, 20),
                    isLoading: false
                });
            })
            .catch((err) => console.log(err));
    };

    componentDidMount() {
        this.oneShowCrew();
    }

    render() {
        const {crew, isLoading} = this.state;
        // console.log(crew);
        const replaceNullImg = 'https://source.unsplash.com/random';

        return (
            
<React.Fragment>
<div className="ad">
                {/* ad placeholder*/}
            </div>

            <div className="text-center one-crew">

                {isLoading
                    ? (<Loading/>)
                    : (crew.slice(0, 20).map((crewx) => (
                        <Card className="crew" key={Math.floor(Math.random() * (crewx.person.id) + 1)}>
                            <CardActionArea>
                                <CardContent className="image-card">

                                    <ReactFancyBox
                                        thumbnail={(!!crewx.person.image)
                                        ? crewx.person.image.medium
                                        : replaceNullImg}
                                        image={(!!crewx.person.image)
                                        ? crewx.person.image.medium
                                        : replaceNullImg}/>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Type: {" "}
                                        {crewx.type}
                                    </Typography>
                                    <Typography>
                                        {crewx.person.name}
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography>
                                        Gender: {" "}
                                        {crewx.person.gender}
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Country: {" "}{(!!crewx.person.country)
                                            ? crewx.person.country.name
                                            : 'No country'}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Birthday: {" "}
                                        {Moment(crewx.person.birthtday).format('DD-MM-YYYY')}
                                    </Typography>
                                    <Typography>
                                        Status: {crewx.person.deathday === null
                                            ? 'Alive'
                                            : crewx.person.deathday}
                                    </Typography>
                                </CardContent>

                            </CardActionArea>
                            <CardActions>
                            </CardActions>

                        </Card>
                    )))}
            </div>
</React.Fragment>
        );

    }
}

export default OneShowCrew;