import axios from 'axios';

const queryAuth = `&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

console.log(axios, queryAuth);
