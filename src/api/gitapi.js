import axios from 'axios';

// let githubClientId;
// let githubClientSecret;

export default axios.create({
    baseURL: "https://api.github.com",
    // auth: {
    //     username: githubClientId,
    //     password: githubClientSecret,
    // }
});