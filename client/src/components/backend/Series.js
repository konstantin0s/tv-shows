import React, { Component } from 'react';
import SeriesList from './SeriesList';
import axios from 'axios';

 class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tvshows: [],
          isLoading: true,
          searchText: [],
          term: '',
        };
      }    


    tvList = () => {
        this.setState((state) => ({ ...state, isLoading: true }));
    
        axios
          .get(`/search?limit=10`)
          .then((res) => {
              console.log(res)
            const tvshows = res.data;
            this.setState({
                tvshows: tvshows,
              isLoading: false,
            });
          })
          .catch((err) => console.log(err));
      };
    
      componentDidMount() {
        this.tvList();
      }

    render() {
        console.log(this.state.tvshows);
        return (
            <div>
                <SeriesList tvshows={this.state.tvshows} />
            </div>
        )
    }
}


export default Series;
