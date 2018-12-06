import React, { Component } from 'react';
import Axios from 'axios';
import SearchBar from '../components/SearchBar/SearchBar';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            characters: []
        };
    }

    handleOnChange = value => {
        this.setState({ query: value }, () => {
            this.getInfo();
        });
    };

    getInfo = () => {
        Axios.get(`https://swapi.co/api/people/?search=${this.state.query}`)
            .then(res => {
                console.log('res.data.results', res.data.results);
                this.setState({
                    characters: res.data.results
                });
            })
            .catch(err => {
                console.log('err', err);
            });
    };

    render() {
        return <SearchBar handleOnChange={this.handleOnChange} />;
    }
}

export default AppContainer;
