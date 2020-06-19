import React from 'react';
import styled from 'styled-components';
import { FaFireExtinguisher, FaFireAlt } from "react-icons/fa";
import Button from './Button';

const ToggleSpan = styled.span`
    padding-left: 12rem;    

    @media only screen and (max-width: 1100px) {
        padding-left: 10rem;
    }
    @media only screen and (max-width: 950px) {
        padding-left: 9rem;
    }
    @media only screen and (max-width: 950px) {
        padding-left: 7rem;
    }
    @media only screen and (max-width: 780px) {
        padding-left: 3rem;
    }
    @media only screen and (max-width: 650px) {
        padding-left: 1rem;
    }

    & svg {
        vertical-align: middle;
        font-size: 2rem;
    }
`;

const Toggle = ({ isDark, onToggle }) => {
    return (
        <ToggleSpan>
            <Button onClick={onToggle}>{isDark ? <FaFireExtinguisher /> : <FaFireAlt />}</Button>
        </ToggleSpan>
    );
};

export default Toggle;
