import React, {Component} from 'react';
import Moment from 'moment';
import ScheduleListItem from './ScheduleListItem';
import axios from 'axios';
import  './css/schedule.css';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: [],
            twenty: []
        };
    }

    scheduleList = () => {
        this.setState((state) => ({
            ...state,
            isLoading: true
        }));

        axios
            .get(`/schedule`)
            .then((res) => {
                // console.log(res)
                const schedule = res.data;
                this.setState({schedule: schedule, isLoading: false});
            })
            .catch((err) => console.log(err));
    };

    componentDidMount() {
        this.scheduleList();
    }

    renderAt21= () => {

        const {schedule} = this.state;
        let tentyone = '21:00';
        let tentytwo = '22:00'

        let twenty = [];
        twenty = schedule.filter((res) => {
            return (res.airtime >= tentyone && res.airtime <= tentytwo)
        })

        if (twenty.length > 0) {
            return (
                <ScheduleListItem key={twenty.id} twenty={twenty}/>
            )
        }
    }


    renderAt20 = () => {

        const {schedule} = this.state;
        let endEighteen = '20:00';
        let startTwenty = '21:00'

        let twenty = [];
         twenty = schedule.filter((res) => {
            return (res.airtime >= endEighteen && res.airtime <= startTwenty)
        })
  
     
        if (twenty.length > 0) {
            return (
                <ScheduleListItem key={twenty.id} twenty={twenty}/>
            )
        }
    }

    renderAt19 = () => {

        const {schedule} = this.state;
        let endEighteen = '19:00';
        let startTwenty = '20:00'

        let twenty = [];
         twenty = schedule.filter((res) => {
            return (res.airtime >= endEighteen && res.airtime <= startTwenty)
        })

        if (twenty.length > 0) {
            return (
                <ScheduleListItem key={twenty.id} twenty={twenty}/>
            )
        }
      
    }

guessMonth = () => {
    const months = ['January','February','March','April','May', 'June','July','August','September',
    'October','November','December'];
    let now = new Date( );
    let month = months[now.getMonth( )];
    return month;

}

    render() {

        const {schedule} = this.state;
        console.log(schedule);

        return (
            <section className="schedule">
                <h1>Schedule for {this.guessMonth()} {' '} {Moment(schedule.airdate).format('DD')}</h1>
          <table>
          <tbody>
                 
                        <tr>
                        <th colSpan="2" className="hour">19:00</th>
                        </tr>
                        {this.renderAt19()}
              
                <tr> 
                       <th colSpan="2"  className="hour">20:00</th>
                       </tr>
                        {this.renderAt20()}
                 
                  <tr>
                  <th colSpan="2"  className="hour">21:00</th>
                  </tr>
                        {this.renderAt21()}
     
                </tbody>
          </table>
            </section>
        )
    }
}

export default Schedule;