import { makeRequest } from '../requests.mjs'
export const getUserData = () => makeRequest({
    url: "/user"
});
export const getUserRepos = () => makeRequest({
    url: "/user/repos"
});