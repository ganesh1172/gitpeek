import React from 'react';
import styled from 'styled-components';
// import LanguageContext from '../contexts/LanguageContext';
import { GoBriefcase, GoLocation, GoMail, GoMarkGithub, GoRepo, GoOrganization, GoPerson } from 'react-icons/go';


const ProfileSection = styled.section`
    height: 100%;
    display:flex;
    flex: direction: column;
    align-item:center;
    margin: 6rem 62rem;

    @media only screen and (max-width: 1280px) {
        padding: 0.5rem 0.5rem;
        margin: 6rem 41rem;
    }

    @media only screen and (max-width: 960px) {
        padding: 0.5rem 0.5rem;
        margin: 6rem 35rem;
    }

    @media only screen and (max-width: 767px) {
        padding: 0.5rem 0.5rem;
        margin: 8rem 25rem;
    }

    @media only screen and (max-width: 515px) {
        margin: 7rem 14rem;
    }

`;

const ProfileCard = styled.div`  
    display: flex;
    justify-content: center;
    background-color: ${p => p.theme.cardColor};
    padding: 2rem 1.5rem;
    z-index: 1;
    border-radius: 5px;
    box-shadow: 0 1rem 2rem 0 rgba(0,0,0,0.2);
    text-align: center;

    @media only screen and (max-width: 767px){
        padding: 1rem 2rem;
    }

    @media only screen and (max-width: 515px) {
        height:48rem;
        width:30rem;
    }
`;

const UserInfoDiv = styled.div`
    & ul li {
    font-size: 1.8rem;
    padding: 0.3rem 0;
    }

    & ul li h1 {
        font-size: 3rem;
        font-weight: 500;
    }
    & ul li:last-of-type {
        padding-top: 0.8rem;
    }
    & ul li a {
        text-decoration: none;
        &:link,
        &:visited {
            color: #0098f0;
        }
        &:hover,
        &:active {
            text-decoration: underline;
        }
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        padding: 3rem 4rem;
        & ul li {
            text-align: center;
        }
    }
    @media only screen and (max-width: 515px) {
        width: 100%;
        padding: 1rem 1rem;
        & ul li {
            text-align: center;
            font-size:1.5rem;
        }
    }

`;
const ProfileImgDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 150px;
    height: 150px;
    border-width: 0.5rem;
    border-style: solid;
    border-color: rgb(0, 112, 243);
    border-image: initial;
    border-radius: 100%;
    margin: 0 auto;

    img {
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
        border-radius: 100%;
    }

    @media only screen and (max-width: 515px) {
        width:
    }
    
`;

const FlexContainer = styled.div`
    display: flex;
`;

const IconSpan = styled.span`
    display: ${(p) => (p.available ? "inline" : "none")};
    margin-left: ${(p) => (p.company ? "1rem" : "0")};
    & svg {
        vertical-align: middle;
        margin-bottom: 4px;
    }
    & a button svg {
        margin-bottom: 0;
    }

    @media only screen and (max-width: 515px) {
        margin:0px;
    }
`;
const ProfileIcons = styled.div`
    display: flex;
    margin: 5px 0px;
    justify-content: center;
    background-color: ${p => p.theme.cardColor};

    @media only screen and (max-width: 515px) {
        margin:0px;
    }
    
`;

const ProfileItems = styled.div`
    margin-right: 15px;
    height: 10rem;
    width: 9.5rem;
    border-radius: 5px;
    margin-bottom: 0px;
    border-radius:5px;
    box-shadow: 0 1rem 2rem 0 rgba(0,0,0, .2);
    transition: all 0.3s;
    
    &:hover {
        transform: scale(1.1);
    }

    &:last-child{
        margin-right: 0px;
    }

    @media only screen and (max-width: 515px) {
        height:8rem;
        width:8rem;
        margin-bottom:0rem;
    }
    
`;

const StatsIcon = styled.span`
    font-size:1.8rem;

    @media only screen and (max-width: 515px) {
        font-size:1.6rem;
    }
`;

const StatsTitle = styled.h6`
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${p => p.theme.textColor};
`;

const StatsNumber = styled.span`
    font-size: 1.8rem;

    @media only screen and (max-width: 515px) {
        font-size:1.5rem;
    }
`;

const Button = styled.button`
    color: rgb(255,255,255);
    border: none;
    background  : #0070F3;
    padding: 1.2rem 2rem;
    border-radius: 5px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    align-items: center;
    transition: all 0.3s;
    margin-top: 2rem;
    
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 1rem 2rem 0 rgba(0,0,0, .2);
    }

    @media only screen and (max-width: 515px) {
        padding: 1rem 1.8rem;
    }
`;


const LocationDiv = styled.div`
`;


const Profile = (props, userData) => {
    const {
        avatar_url,
        name,
        company,
        location,
        email,
        login,
        html_url,
        public_repos,
        followers,
        following

    } = props.userData;

    return (
        <>
            <ProfileSection>
                <ProfileCard>
                    <UserInfoDiv>
                        <ProfileImgDiv>
                            <img src={avatar_url} alt='avatar' />
                        </ProfileImgDiv>
                        <ul>
                            <li><h1>{name}</h1></li>
                            <li>
                                <FlexContainer>
                                    <div>
                                        {/* If available = true then only show the component */}
                                        <IconSpan available={company} company>
                                            <GoBriefcase /> {company}
                                        </IconSpan>
                                    </div>
                                </FlexContainer>
                                <LocationDiv>
                                    <IconSpan available={location}>
                                        <GoLocation /> {location}
                                    </IconSpan>
                                </LocationDiv>
                            </li>
                            <li>
                                <IconSpan available={email}>
                                    <GoMail /> {email}
                                </IconSpan>
                            </li>
                            <li>
                                <ProfileIcons>
                                    <ProfileItems>
                                        <StatsIcon><GoRepo /></StatsIcon>
                                        <StatsTitle>Repositories</StatsTitle>
                                        <StatsNumber>{public_repos}</StatsNumber>
                                    </ProfileItems>
                                    <ProfileItems>
                                        <StatsIcon><GoOrganization /></StatsIcon>
                                        <StatsTitle>Followers</StatsTitle>
                                        <StatsNumber>{followers}</StatsNumber>
                                    </ProfileItems>
                                    <ProfileItems>
                                        <StatsIcon><GoPerson /></StatsIcon>
                                        <StatsTitle>Following</StatsTitle>
                                        <StatsNumber>{following}</StatsNumber>
                                    </ProfileItems>
                                </ProfileIcons>
                            </li>
                            <li>
                                <IconSpan available={html_url}>
                                    <a href={html_url} target="_blank" rel="noopener noreferrer">
                                        <Button><GoMarkGithub />@{login}</Button>
                                    </a>
                                </IconSpan>
                            </li>
                        </ul>
                    </UserInfoDiv>
                </ProfileCard>
            </ProfileSection>
        </>
    );
};


export default Profile;
