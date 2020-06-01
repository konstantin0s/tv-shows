import React, {Component} from 'react';
import Moment from 'moment';
import axios from 'axios';
import  './css/schedule.css';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: []
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

    renderAt18 = () => {
        const {schedule} = this.state;

        let seventien = '17:00';
        let endSeventien = '18:00';

        let filtered = schedule.filter((res) => {
            return (res.airtime >= seventien && res.airtime <= endSeventien)
        })

        if (filtered.length !== 0) {
            return (
                <ul key={filtered[0].id}>
                   <li> {filtered[0].airtime} {" "} {filtered[0].name}</li>
                </ul>
            )
        }

    }

    renderAt19 = () => {

        const {schedule} = this.state;
        let endEighteen = '19:00';
        let startTwenty = '20:00'

        let twenty = schedule.filter((res) => {
            return (res.airtime >= endEighteen && res.airtime <= startTwenty)
        })

        if (twenty.length !== 0) {
            return (
                <ul key={twenty[0].id}>
               <li>{twenty[0].airtime} {" "}  {twenty[0].name}  </li>
            
                </ul>
            )
        }
    }

    render() {

        const {schedule} = this.state;
        // console.log(schedule);

        return (
            <div className="schedule">
                <h1>Schedule for {Moment(schedule.airdate).format('MM-DD')}</h1>
                <ul className="ul-schedule">
                    <li>{this.renderAt18()}</li>
                    <li>{this.renderAt19()}</li>
                </ul>
            </div>
        )
    }
}

export default Schedule;