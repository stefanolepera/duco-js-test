import React, { Component } from 'react';
import axios from 'axios';
import Logo from '../components/Logo/Logo';
import SearchBar from '../components/SearchBar/SearchBar';
import ResultItem from '../components/ResultItem/ResultItem';
import Spinner from '../components/Spinner/Spinner';
import { getFilmsByCharacter, getCharacterDetails } from '../utils/FilterData';
import { fetchCharacters, fetchFilms } from '../utils/Network';
import {
    setLoadingState,
    setLoadingCancelState,
    setLoadingErrorState,
    setCharacterState,
    setQueryState,
    setFilmsState
} from '../utils/StateChange';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            characters: [],
            films: [],
            isDataLoading: false,
            isDataError: false,
            hasMoreData: null,
            isScrolling: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        fetchFilms()
            .then(res => {
                this.handleFilmsState(res);
            })
            .catch(() => {
                this.handleLoadingErrorState();
            });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const {
            isDataError,
            isDataLoading,
            hasMoreData,
            isScrolling
        } = this.state;

        if (isDataError || isDataLoading || isScrolling || hasMoreData === null)
            return;

        window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight && this.handleLoadingState();
    };

    handleLoadingState = () => {
        const { query } = this.state;
        query
            ? this.setState(setLoadingState, () => this.fetchCharacters())
            : this.setState(setLoadingCancelState, () => axios.cancelAll());
    };

    handleLoadingErrorState = () => this.setState(setLoadingErrorState);

    handleCharactersState = res => this.setState(setCharacterState(res));

    handleFilmsState = res => this.setState(setFilmsState(res));

    handleQueryState = value =>
        this.setState(setQueryState(value), () => this.handleLoadingState());

    fetchCharacters = () => {
        const { query } = this.state;
        fetchCharacters(query, 'fetch_characters')
            .then(res => {
                this.handleCharactersState(res);
            })
            .catch(res => {
                res.status === undefined && this.handleLoadingErrorState();
            });
    };

    render() {
        const { characters, films, isDataLoading, isDataError } = this.state;
        return (
            <div>
                <Logo />
                <SearchBar handleOnChange={this.handleQueryState} />
                {characters.map((character, index) => (
                    <ResultItem
                        key={index}
                        characterName={character.name}
                        characterDetails={getCharacterDetails(character)}
                        characterFilms={getFilmsByCharacter(character, films)}
                    />
                ))}
                {isDataLoading && <Spinner />}
                {isDataError && (
                    <div>Error loading data, please try again later</div>
                )}
            </div>
        );
    }
}

export default AppContainer;
