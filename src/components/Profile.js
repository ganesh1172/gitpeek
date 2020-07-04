import React from 'react';
import styled from 'styled-components';
// import LanguageContext from '../contexts/LanguageContext';
import { FiActivity } from 'react-icons/fi';
import { GoBriefcase, GoLocation, GoMail, GoGlobe, GoMarkGithub, GoRepo, GoOrganization, GoPerson } from 'react-icons/go';


const ProfileSection = styled.section`
    position: relative;
    width: 35rem;
    margin: 6rem 61rem;
`;

const ProfileCard = styled.div`
    width: 35rem;
    height: 52rem;    
    display: flex;
    justify-content: center;
    background-color: ${p => p.theme.cardColor};
    padding: 30px 20px;
    z-index: 1;
    border-radius: 5px;
    box-shadow: 0 1rem 2rem 0 rgba(0,0,0,0.2);
    text-align: center;
`;

const ActivityBtn = styled.span`
    width: 4.5rem;
    height: 4.5rem;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 2.5rem;
    background-image: linear-gradient(to right, #01F2FC,#1787CF);
    border-radius: 5px;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 1rem 2rem 0 rgba(0,0,0, .2);
    }
`;

const UserInfoDiv = styled.div`
    & ul li {
    font-size: 1.8rem;
    padding: 0.3rem 0;
    }

    & ul li h1 {
        font-size: 3rem;
        font-weight: 400;
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

`;
const ProfileImgDiv = styled.div`
    &img {
    width: 90px;
    display: block;
    margin: 0 auto;
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
`;
const ProfileIcons = styled.div`
    display: flex;
    margin: 5px 0px;
    justify-content: center;
`;

const ProfileItems = styled.div`
    margin-right: 15px;
    height: 9rem;
    width: 9.5rem;
    border-radius: 5px;
    margin-bottom: 0px;
    background-image: linear-gradient(to right, #01F2FC,#1787CF);
    border: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 1rem 2rem 0 rgba(0,0,0, .2);
    }

    &:last-child{
        margin-right: 0px;
    }
`;

const StatsIcon = styled.span`
    font-size: 24px;
`;

const StatsTitle = styled.h2`
    font-size: 12px;
    text-transform: uppercase;
`;

const StatsNumber = styled.span`
    font-size: 24px;
`;

const Button = styled.button`
    color: rgb(255,255,255);
    border: none;
    background-image: linear-gradient(to right, #01F2FC,#1787CF);
    padding: 1.2rem 2rem;
    border-radius: 5px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    align-items: center;
    transition: all 0.3s;
    
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 1rem 2rem 0 rgba(0,0,0, .2);
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
        blog,
        login,
        html_url,
        public_repos,
        followers,
        following

    } = props.userData;

    let website = blog;

    if (blog && blog.slice(0, 4) !== "http") {
        website = `http://${blog}`;
    }
    return (
        <>
            <ProfileSection>
                <ProfileCard>
                    <ActivityBtn>
                        <FiActivity />
                    </ActivityBtn>
                    <UserInfoDiv>
                        <ProfileImgDiv>
                            <img src={avatar_url} width="150px" alt='avatar' />
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
                                <IconSpan available={website}>
                                    <GoGlobe />{""}
                                    <a href={website} target="_blank" rel="noopener noreferrer">{blog}</a>
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
