/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

const baseUrl = 'https://api.github.com';
const queryAuth = `&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

export const getUsers = () => {
  try {
    const response = axios({
      method: 'get',
      url: `${baseUrl}/users?since=135?${queryAuth}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error(error.message);
    return error.response.status;
  }
};

export const searchUsers = async (text: string) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/search/users?q=${text}${queryAuth}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error(error.message);
    return error.response.status;
  }
};

export const getUserProfile = async (username: string) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/users/${username}?${queryAuth}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error(error.message);
    return error.response.status;
  }
};

export const getUserRepos = async (username: string) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/users/${username}/repos?per_page=8${queryAuth}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error(error.message);
    return error.response.status;
  }
};
