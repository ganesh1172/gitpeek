import React, { useState } from 'react';
import history from '../history';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px) {
        & button {
            align-self: flex-start;
        }
    }
    @media only screen and (max-width: 400px) {
        & button {
            height: auto;
        }
    }

`;

const Input = styled.input`
    font-size: 3.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.2rem 2rem;
    border-radius: 5px;
    text-align: center;
    color: #1F8BDB;
    background-color: ${p => p.theme.inputColor};
    margin-left: 1.2rem;
    transition: all 0.3s;
    border:0;
    border-bottom: 2px solid #3399FF;

    &:focus {
        outline: none;
    }
`;

const Span = styled.span`
    font-size: 2rem;
    display: ${p => p.displaySpan ? 'inline-block' : 'none'};
    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

const SearchForm = ({ displaySpan }) => {
    const [user, updateUser] = useState("");

    const onFormSubmit = async (event, user) => {
        event.preventDefault();

        if (user) {
            history.push(`/user/${user}`);
        }
    };
    return (
        <Form onSubmit={(e) => onFormSubmit(e, user)} displaySpan={displaySpan}>
            <Span>github.com/</Span>
            <Input value={user} onChange={(e) => updateUser(e.target.value)} type="text" />
        </Form>
    );
};

export default SearchForm;
