import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: none;
    padding: 0 10px;
    margin: 0 auto;
    font-size: 1.2em;
    width: 600px;
    height: 40px;
    color: #000;
    background: #ccc;
    border-radius: 4px;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px maroon;
    }
`;

class SearchBar extends React.Component {
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
            <StyledInput
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

SearchBar.propTypes = {
    handleOnChange: PropTypes.func
};

export default SearchBar;
