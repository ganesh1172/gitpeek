import React, { useState } from 'react';
import history from '../history';
import styled from 'styled-components';
import Button from './Button';
import { RiUserSearchLine } from 'react-icons/ri'

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
    font-size: 1.8rem;
    font-family: inherit;
    color: inherit;
    padding: 1rem 6rem;
    border-radius: 5px;
    border: none;
    background-color: ${p => p.theme.inputColor};
    border-bottom: 3px solid transparent;
    margin-left: 6px;
    margin-right: 1px;
    transition: all 0.3s;
    &:focus {
        outline: none;
        box-shadow: 0 1rem 2rem 0 rgba(0,0,0, .2);
        transform: translateY(-1px);
        border-bottom: 3px solid #0098f0;
    }
    &::placeholder {
        color: #aaa;
    }
    @media only screen and (max-width: 600px) {
        text-align: center;
        margin: 0;
        // margin-right: 15px;
        margin-bottom: 10px;
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
            <Input value={user} onChange={(e) => updateUser(e.target.value)} type="text" placeholder="Enter Github Username" />
            <Button>
                <RiUserSearchLine />
            </Button>
        </Form>
    );
};

export default SearchForm;
