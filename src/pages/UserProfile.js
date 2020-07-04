import React, { useState, useEffect } from 'react';
// import styled from "styled-components";
import { Header, Loader, Error, Profile, Activities } from '../components';
import LanguageContext from '../contexts/LanguageContext';
// import Profile from '../components/Profile';
import github from "../api/gitapi";
// import Activities from '../components/Activities';

const UserProfile = (props) => {
    const username = props.match.params.id;
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [activityData, setActivityData] = useState([]);

    const getUserData = async () => {
        setLoading(true);

        try {
            const response = await github.get(`/users/${username}`);
            setUserData(response.data);
            setLoading(false);
        }
        catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    setError({ active: true, type: 404 });
                }
                else {
                    setError({ active: true, type: error.response.status });
                }

            } else {
                setError({
                    active: true, type: error
                });
                console.log(error);
            }
            setLoading(false);
        }
    }

    const getActivityData = async () => {
        setLoading(true);

        try {
            const response = await github.get(`/users/${username}/events?per_page=30`);

            setActivityData(response.data);
            setLoading(false);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    setError({ active: true, type: 404 });
                } else {
                    setError({ active: true, type: error.response.status });
                }
            } else {
                setError({ active: true, type: error });
                console.log(error);
            }

            setLoading(false);
        }
    }

    useEffect(() => {
        setError({ active: false, type: 200 });
        getUserData();
        getActivityData();
    }, [username]);

    if (loading) {
        return (
            <>
                <Header />
                <Loader />
            </>
        );
    }
    else {
        return (
            <>
                <Header />
                <main>
                    {error && error.active ? (
                        <Error error={error} />
                    ) : (
                            <LanguageContext.Provider>
                                <Profile userData={userData} />
                                <Activities activityData={activityData} />
                            </LanguageContext.Provider>
                        )}
                </main>
            </>
        )
    }
}

export default UserProfile;