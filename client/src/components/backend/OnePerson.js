import React, {Component} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Loading from './Loading';
import Moment from 'moment';
import Sharing from './Sharing';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import './css/oneperson.css';

class OnePerson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: [],
            isLoading: true
        };
    }

    onePerson = () => {
        const {id} = this.props;
        this.setState((state) => ({
            ...state,
            isLoading: true
        }));

        axios
            .get(`/person/${id}`)
            .then((res) => {
                const person = res.data;
                // console.log(person);
                this.setState({person: person, isLoading: false});
            })
            .catch((err) => console.log(err));
    };

    componentDidMount() {
        this.onePerson();
    }

    render() {
        const {person, isLoading} = this.state;
        // console.log(person);
        const replaceNullImg = 'https://source.unsplash.com/random';

        return (
            <div className="text-center one-person">
                {isLoading
                    ? (<Loading/>)
                    : (
                        <Card className="cardex">
                            <CardActionArea>
                                <CardContent className="image-card">

                                    <ReactFancyBox
                                        thumbnail={(!!person.image)
                                        ? person.image.medium
                                        : replaceNullImg}
                                        image={(!!person.image)
                                        ? person.image.medium
                                        : replaceNullImg}/>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Name: {" "}
                                        {person.name}
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Birthday: {" "}
                                        {Moment(person.birthtday).format('DD-MM-YYYY')}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Gender: {" "}
                                        {person.gender}
                                    </Typography>
                                </CardContent>
                                <CardContent>

                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Country: {" "}{(!!person.country)
                                            ? person.country.name
                                            : 'No country'}
                                    </Typography>
                                    <Typography>
                                        Status: {person.deathday === null
                                            ? 'Alive'
                                            : person.deathday}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <a href={person.url} rel="noopener noreferrer" target="_blank">
                                            External details
                                        </a>
                                    </Typography>
                                </CardContent>

                            </CardActionArea>
                            <CardActions>

                                <div className="sharing">
                                    <Sharing id={person.id}/>
                                </div>
                            </CardActions>

                        </Card>
                    )}
            </div>
        );

    }
}

export default OnePerson;