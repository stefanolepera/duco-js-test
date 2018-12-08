import { sortedFilms } from './FilterData';

export const setLoadingState = () => ({ isDataLoading: true, isScrolling: true });

export const setLoadingErrorState = () => ({ isDataError: true })

export const setQueryState = value => () => ({ query: value, characters: [] });

export const setFilmsState = res => () => ({ films: sortedFilms(res.data.results) })

export const setCharacterState = res => prevState => ({
    hasMoreData: res.data.next,
    characters: [...prevState.characters, ...res.data.results],
    query:
        res.data.next &&
        res.data.next.split('search=')[1],
    isDataLoading: false,
    isScrolling: false
});