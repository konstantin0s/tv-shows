import React, { Component } from 'react';
import axios from 'axios';
import SeriesList from '../../containers/SeriesList'

 class Series extends Component {
     
        state = {
          series: [],
          seriesName: '',
          isFetching: false
      
       }
     
      componentDidMount() {

      }
     onSeriesInputChange = e => {
         this.setState({
             seriesName: e.target.value, isFetching: true
         })

console.log(e.target.value);

axios.get(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
.then(res => res.data)
.then(json => this.setState({series : json, isFetching: false }))
.catch(err => console.log(err))

     }

    render() {
        const {series, seriesName, isFetching } = this.state;
        return (
            <div>

<SeriesList list={this.state.series} />
           
           {/* {seriesName.length > 0 && seriesName.trim() === '' 
           && 
           <p>Please enter title name</p> }

           {
               seriesName === 0 && seriesName.trim() !== ''
                && <p>No Tv series has been found with this title </p>
           }

           {isFetching && <p>Loading...</p>}

           {!isFetching &&  
                  <SeriesList list={this.state.series} />
        
           } */}

{/* <div>
                      <input value={seriesName} 
                       type="text"
                      onChange={this.onSeriesInputChange}
                       />
                  </div> */}
              
         
            </div>
        )
    }
}

export default Series;
