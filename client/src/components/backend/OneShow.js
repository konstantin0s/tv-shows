import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Loading from './Loading';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Moment from 'moment';
// import Sharing from './Sharing';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import './css/oneshow.css';

class OneShow extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          show: [],
          isLoading: true,
        };
      }

      oneShow = () => {
        const { id } = this.props;
        console.log(id);
        this.setState((state) => ({ ...state, isLoading: true }));
    
        axios
          .get(`/show/${id}`)
          .then((res) => {
            const show = res.data;
            console.log(show);
            this.setState({
              show: show,
              isLoading: false,
            });
          })
          .catch((err) => console.log(err));
      };
    
      componentDidMount() {
        this.oneShow();
      }

      renderStars = () => {
        const { show } = this.state;
        let starx = show.rating.average;
        // let result = starx.replace(/,/g, '');
    
        // for (let i = 0; i < result.length; i++) {
          return (
            <Box className="box-rate" key={Math.random() * 10 - 1} component="fieldset" mb={3} borderColor="transparent">
              <Rating name="read-only" precision={0.5} value={parseInt(starx)} readOnly />  
              <div className="star-rate">{starx}</div>
            </Box>
          );
        // }
      };
    

    render() {
        const { show, isLoading } = this.state;
        console.log(show);
        const replaceNullImg =  'https://source.unsplash.com/random';

        return (
            <div className="text-center one-show">
              {isLoading ? (
                <Loading />
              ) : (
                <Card className="cardex">
                  <CardActionArea>
                    <CardContent className="image-card">

                      <ReactFancyBox thumbnail={(!!show.image) ? show.image.medium : replaceNullImg} 
                      image={(!!show.image) ? show.image.medium : replaceNullImg} />
                      <Typography gutterBottom variant="h5" component="h2">
                        Name: {" "}     {show.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h6">
                       Scheduled on: {show.schedule.days} at {" "}
                        {show.schedule.time}
                       
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                       Premiered: {Moment(show.premiered).format('DD-MM-YYYY')}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="h6">
                    {show.summary}
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {show.genres.map(genre => (
                            <h6 key={Math.random() * 10 - 1}>{genre}</h6>
                        ))}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                       Type: {show.type}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Network:  {show.network.name}
                      </Typography>
                      <Typography>
                      Status: {show.status}
                      </Typography>
                    </CardContent>
                    <CardContent>{this.renderStars()}</CardContent>
                  </CardActionArea>
                  {/* <CardActions>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Showtimes: {Moment(movie.showtimes.dateFrom).format('YYYY-MM-DD')}
                    </Typography>
      
                    <div className="sharing">
                      {/* <Sharing id={show._id} /> 
                    </div>
                  </CardActions> */}
                {/*  <CardContent>
                    <div className="button-container">
                       <Button variant="contained" color="default" startIcon={<EditIcon />}>
                        <Link to={`/edit/${this.state.movie._id}`} className="btn btn-success">
                          Edit
                        </Link>
                        &nbsp;
                      </Button>
      
                      <Button
                        variant="contained"
                        color="secondary"
                        className="btn btn-danger"
                        onClick={() => {
                          this.delete();
                        }}
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button> 
                    </div>
                  </CardContent> */}
                </Card>
              )}
            </div>
          );
        
    }
}


export default OneShow;