import React from 'react';
import styled from 'styled-components';
import { Logo, Form } from '../components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 21rem);
    justify-content: center;
    align-items: center;
    margin-top: 7rem;
    margin-bottom: 7rem;

    @media only screen and (max-width: 600px) {
        margin-bottom: 1rem;    
    }
    & form {
        margin-top: 4rem;
    }
    
`;

const Home = () => {
    return (
        <>
            <Container>
                <Logo width="350px" />
                <Form displaySpan />
            </Container>
        </>
    );
};

export default Home;
