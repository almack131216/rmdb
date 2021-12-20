import React from "react";
import PropTypes from 'prop-types';
// Styles
import { Wrapper, Image } from './Actor.styles';
import propTypes from "prop-types";

const Actor = ({ name, character, imageUrl }) => (
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumb' />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: propTypes.string
}

export default Actor;