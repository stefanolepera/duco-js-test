import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            character: ''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            this.props.handleOnChange(this.state.character);
        });
    };

    render() {
        const { character } = this.state;
        return (
            <input
                type="text"
                name="character"
                placeholder="Search Character"
                onChange={this.onChange}
                value={character}
                autoFocus
            />
        );
    }
}

export default SearchBar;
