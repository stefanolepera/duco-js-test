import { sortedFilms } from './FilterData';

export const setLoadingState = () => ({ isDataLoading: true, isScrolling: true });

export const setLoadingCancelState = () => ({ isDataLoading: false });

export const setLoadingErrorState = () => ({ isDataError: true })

export const setQueryState = value => () => ({ query: value, characters: [] });

export const setFilmsState = res => () => ({ films: sortedFilms(res.data.results) })

export const setCharacterState = res => prevState => {
    return {
        hasMoreData: res.data.next,
        characters: res.data.previous ? [...prevState.characters, ...res.data.results] : res.data.results,
        query:
            res.data.next &&
            res.data.next.split('search=')[1],
        isDataLoading: false,
        isScrolling: false
    }
};