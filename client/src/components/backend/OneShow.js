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
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Moment from 'moment';
// import Sharing from './Sharing';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
// import './css/oneshow.css';

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
            <Box key={Math.random() * 10 - 1} component="fieldset" mb={3} borderColor="transparent">
              <Rating name="read-only" precision={0.5} value={parseInt(starx)} readOnly /> 
          <h2>{starx}</h2>
            </Box>
          );
        // }
      };
    

    render() {
        const { show, isLoading } = this.state;
        console.log(show);

        return (
            <div className="text-center">
              {isLoading ? (
                <Loading />
              ) : (
                <Card className="cardex">
                  <CardActionArea>
                    <CardContent className="image-card">

                      <ReactFancyBox thumbnail={show.image.medium ? show.image.medium : ''} 
                      image={show.image.medium ? show.image.medium : ''} />
                      <Typography gutterBottom variant="h5" component="h2">
                        Title:
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {show.name}
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                       premiered {Moment(show.premiered).format('DD-MM-YYYY')}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {show.summary}
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {show.genres.map(genre => (
                            <p key={Math.random() * 10 - 1}>{genre}</p>
                        ))}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {show.type}
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