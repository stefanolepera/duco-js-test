import moxios from 'moxios';
import sinon from 'sinon';
import { fetchCharacters, fetchFilms } from '../Network';
import { singleCharacterResponse } from '../../__mocks__/CharacterResponseMock';
import { filmsResponse } from '../../__mocks__/FilmsResponseMock';

describe('Network test', () => {

    beforeEach(function () {
        moxios.install();
    })
  
    afterEach(function () {
    moxios.uninstall();
    })

    it('fetchCharacters get request should be called', () => {
        moxios.withMock(() => {
            const onFulfilled = sinon.spy();
            fetchCharacters('https://swapi.co/api/people?search=luke', 'fetch_characters').then(onFulfilled);

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: singleCharacterResponse
                }).then(() => {
                    expect(onFulfilled.called).toEqual(true);
                })
            })
        })
    })

    it('fetchFilms get request should be called', () => {
        moxios.withMock(() => {
            const onFulfilled = sinon.spy();
            fetchFilms('https://swapi.co/api/films').then(onFulfilled);

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: filmsResponse
                }).then(() => {
                    expect(onFulfilled.called).toEqual(true);
                })
            })
        })
    })
})