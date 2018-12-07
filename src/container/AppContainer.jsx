import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import SearchBar from '../components/SearchBar/SearchBar';
import ResultItem from '../components/ResultItem/ResultItem';
import Spinner from '../components/Spinner/Spinner';
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
            isDataLoading: false,
            isDataError: false,
            hasMoreData: false,
            isScrolling: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
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

        if (isDataError || isDataLoading || isScrolling || !hasMoreData) return;

        window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight && this.getInfo();
    };

    getInfo = () => {
        const { query, characters } = this.state;
        query &&
            this.setState(
                {
                    isDataLoading: true,
                    isScrolling: true
                },
                () =>
                    fetchCharacters(query)
                        .then(res => {
                            this.setState({
                                hasMoreData: res.data.next,
                                characters: [
                                    ...characters,
                                    ...res.data.results
                                ],
                                query:
                                    res.data.next &&
                                    res.data.next.split('search=')[1],
                                isDataLoading: false,
                                isScrolling: false
                            });
                        })
                        .catch(err => {
                            this.setState({
                                isDataError: true
                            });
                        })
            );
    };

    handleOnChange = value => {
        this.setState({ query: value, characters: [] }, () => {
            this.getInfo();
        });
    };

    render() {
        const { characters, films, isDataLoading, isDataError } = this.state;
        return (
            <div>
                <Logo />
                <SearchBar handleOnChange={this.handleOnChange} />
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
