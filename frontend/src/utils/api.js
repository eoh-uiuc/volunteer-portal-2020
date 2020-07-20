const axios = require("axios");

const API_URI = "http://localhost:9000";

export const createAccount = (userData) => {
    return axios
        .post(`${API_URI}/api/users/signup`, userData)
        .then(
            res => res.data,
            err => {
                console.error(err);
                return null;
            },
        );
};

export const login = (userData) => {
    return axios
        .post(`${API_URI}/api/users/login`, userData)
        .then(
            res => res.data,
            err => {
                console.error(err);
                return null;
            },
        );
};

export const currentUser = (token) => {
    return axios
        .get(`${API_URI}/api/users/current`, {
            headers: {
                'Authorization': `token ${token}`
            }
        })
        .then(
            res => res.data,
            err => {
                console.error(err);
                return null;
            }
        )
}