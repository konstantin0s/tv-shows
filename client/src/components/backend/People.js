import React, {Component} from 'react';
import PeopleList from './PeopleList';
import Loading from './Loading';
import axios from 'axios';
import './css/people.css'

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            isLoading: true,
            searchText: [],
            term: []
        };
    }

    searchPeople = (query = 'lauren') => {
        this.setState((state) => ({
            ...state,
            isLoading: true
        }));

        let peopleUrl = 'https://api.tvmaze.com';

        axios
            .get(`${peopleUrl}/search/people?q=${query}`)
            .then((res) => {
                const people = res.data;
                // console.log(people)
                this.setState({people: people, isLoading: false});
            })
            .catch((err) => console.log(err));
    };

    componentDidMount = () => {

        this.searchPeople();

    }

    handleSubmit = e => {
        e.preventDefault();
        this.searchPeople(this.query.value);
        e
            .currentTarget
            .reset();
        this.setState({searchText: [], term: []});
    }

    onSearchChange = e => {
        this.searchPeople(this.query.value);
        this.setState({searchText: e.target.value, term: e.target.value});
    }

    render() {

        // console.log(this.state.tvshows);
        const {people, searchText, isLoading} = this.state;

        return (
            <React.Fragment>
                <div className="the-people">

                    <div className="contain-form">
                        <form className="search-form" onSubmit={this.handleSubmit}>
                            <input
                                onChange={this.onSearchChange}
                                id="searchField"
                                type="text"
                                value={searchText}
                                autoComplete="true"
                                ref={input => (this.query = input)}
                                placeholder="Search People..."
                                aria-label="Search"/>
                        </form>
                    </div>

                    {(isLoading)
                        ? <Loading/>
                        : <PeopleList people={people}/>
}
                </div>
            </React.Fragment>
        )
    }
}

export default People;
