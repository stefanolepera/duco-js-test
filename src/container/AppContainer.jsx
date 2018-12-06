import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ResultItem from '../components/ResultItem/ResultItem';
import { fetchCharacters, fetchFilms } from '../utils/Network';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            characters: [],
            films: [],
            isDataLoading: false
        };
    }

    componentDidMount() {
        fetchFilms()
            .then(res => {
                console.log('films', res.data.results);
                this.setState({
                    films: res.data.results
                });
            })
            .catch(err => {
                console.log('err', err);
            });
    }

    handleOnChange = value => {
        this.setState({ query: value }, () => {
            this.getInfo();
        });
    };

    getInfo = () => {
        this.setState({
            isDataLoading: true
        });
        fetchCharacters(this.state.query)
            .then(res => {
                console.log('characters', res.data.results);
                this.setState({
                    characters: res.data.results,
                    isDataLoading: false
                });
            })
            .catch(err => {
                console.log('err', err);
            });
    };

    render() {
        return (
            <div>
                <SearchBar handleOnChange={this.handleOnChange} />
                {!this.state.isDataLoading &&
                    this.state.characters.map((character, index) => (
                        <ResultItem key={index} results={character} />
                    ))}
            </div>
        );
    }
}

export default AppContainer;
