import React, {Component} from 'react';
import NetworkList from './NetworkList';
import Loading from './Loading';
import axios from 'axios';

class Networks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            networks: []
        };
    }


    networkList = () => {     this.setState((state) => ({ ...state, isLoading: true
    }));     axios       .get(`/theshows`)       .then((res) => {         const
        networks = res.data.slice(0, 20);         console.log(networks)
    this.setState({             networks: networks,           isLoading: false,
        });       })       .catch((err) => console.log(err));   };

    componentDidMount = () => {

        this.networkList();

    }

    render() {

        console.log(this.state.networks);
        const {networks, searchText, isLoading} = this.state;

        return (
            <React.Fragment>
                <div className="the-series">


                    {(isLoading)
                        ? <Loading/>
                        : <NetworkList networks={networks}/>
}
                </div>
            </React.Fragment>
        )
    }
}

export default Networks;
