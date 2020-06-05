import React, {Component} from 'react';
import SeriesList from './SeriesList';
import Loading from './Loading';
import axios from 'axios';

class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tvshows: [],
            isLoading: true,
            searchText: [],
            term: []
        };
    }

    searchShows = (query = 'girls') => {
        this.setState((state) => ({
            ...state,
            isLoading: true
        }));

        let showUrl = 'https://api.tvmaze.com';
        // axios.get(`/search?q=${query}`)
        axios
            .get(`${showUrl}/search/shows?q=${query}`)
            .then((res) => {
                const tvshows = res.data;
                // console.log(tvshows)
                this.setState({tvshows: tvshows, isLoading: false});
            })
            .catch((err) => console.log(err));
    };

    componentDidMount = () => {

        this.searchShows();

    }

    handleSubmit = e => {
        e.preventDefault();
        this.searchShows(this.query.value);
        e
            .currentTarget
            .reset();
        this.setState({searchText: [], term: []});
    }

    onSearchChange = e => {
        this.searchShows(this.query.value);
        this.setState({searchText: e.target.value, term: e.target.value});
    }

    render() {

        // console.log(this.state.tvshows);
        const {tvshows, searchText, isLoading} = this.state;

        return (
            <React.Fragment>
                <div className="the-series">

                    <div className="contain-form">
                        <form className="search-form" onSubmit={this.handleSubmit}>
                            <input
                                onChange={this.onSearchChange}
                                id="searchField"
                                type="text"
                                value={searchText}
                                autoComplete="true"
                                ref={input => (this.query = input)}
                                placeholder="Search show"
                                aria-label="Search"/>
                        </form>
                    </div>

                    {(isLoading)
                        ? <Loading/>
                        : <SeriesList tvshows={tvshows}/>
}
                </div>
            </React.Fragment>
        )
    }
}

export default Series;
