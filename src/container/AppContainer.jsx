import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ResultItem from '../components/ResultItem/ResultItem';
import {
    sortedFilms,
    getFilmsByCharacter,
    getCharacterDetails
} from '../utils/FilterData';
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
                this.setState({
                    films: sortedFilms(res.data.results)
                });
            })
            .catch(err => {
                this.setState({
                    isDataError: true
                });
            });
    }

    getInfo = () => {
        this.setState({
            isDataLoading: true
        });
        fetchCharacters(this.state.query)
            .then(res => {
                this.setState({
                    characters: res.data.results,
                    isDataLoading: false
                });
            })
            .catch(err => {
                this.setState({
                    isDataError: true
                });
            });
    };

    handleOnChange = value => {
        this.setState({ query: value }, () => {
            this.getInfo();
        });
    };

    render() {
        const { characters, films, isDataLoading, isDataError } = this.state;
        return (
            <div>
                <SearchBar handleOnChange={this.handleOnChange} />
                {isDataError && (
                    <div>Error loading data, please try again later</div>
                )}
                {!isDataLoading &&
                    characters.map((character, index) => (
                        <ResultItem
                            key={index}
                            characterName={character.name}
                            characterDetails={getCharacterDetails(character)}
                            characterFilms={getFilmsByCharacter(
                                character,
                                films
                            )}
                        />
                    ))}
            </div>
        );
    }
}

export default AppContainer;
