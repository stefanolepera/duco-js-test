import {
    setLoadingState,
    setLoadingCancelState,
    setLoadingErrorState,
    setCharacterState,
    setQueryState,
    setFilmsState
} from '../StateChange';

import { filmsResponse } from '../../__mocks__/FilmsResponseMock';
import { singleCharacterResponse, multipleCharactersResponse } from '../../__mocks__/CharacterResponseMock';

describe('StateChange test', () => {
    it('setLoadingState should return the correct state', () => {
        expect(setLoadingState()).toEqual({ isDataLoading: true, isScrolling: true });
    })

    it('setLoadingCancelState should return the correct state', () => {
        expect(setLoadingCancelState()).toEqual({ isDataLoading: false });
    })

    it('setLoadingErrorState should return the correct state', () => {
        expect(setLoadingErrorState()).toEqual({ isDataError: true });
    })

    it('setQueryState should return the correct state', () => {
        expect(setQueryState('luke')()).toEqual({ query: 'luke', characters: [] });
    })

    it('setFilmsState should return 7 films', () => {
        expect(setFilmsState(filmsResponse)().films).toHaveLength(7);
    })

    it('setCharacterState should return the correct state if there are not more pages', () => {
        expect(setCharacterState(singleCharacterResponse)([])).toEqual({ 
            hasMoreData: null,
            characters: singleCharacterResponse.data.results,
            query: null,
            isDataLoading: false,
            isDataError: false,
            isScrolling: false });
    })

    it('setCharacterState should return the correct state if there are more pages', () => {
        expect(setCharacterState(multipleCharactersResponse)([])).toEqual({ 
            hasMoreData: 'https://swapi.co/api/people/?search=l&page=2',
            characters: multipleCharactersResponse.data.results,
            query: 'l&page=2',
            isDataLoading: false,
            isDataError: false,
            isScrolling: false });
    })
})