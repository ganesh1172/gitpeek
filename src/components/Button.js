import styled from 'styled-components';

const Button = styled.button`
    color: rgb(255,255,255);
    border: none;
    // background-image: linear-gradient(to right, #01F2FC,#1787CF);
    background: #5c75f6;
    padding: 0.7rem 2rem;
    border-radius: 5px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    align-items: center;
    transition: all 0.3s;
    
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 1rem 2rem 0 rgba(0,0,0, .2);
    }
    &:focus {
        outline: 0;
        box-shadow: 0 1rem 2rem 0 rgba(0,0,0, .2);
    }
    &:active {
        transform: scale(1);
    }
`;

export default Button;
