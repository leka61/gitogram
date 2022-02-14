import { makeRequest } from '../requests.mjs'
export const getUserData = () => makeRequest({
  url: "/user"
});
export const getUserRepos = () => makeRequest({
  url: "/user/repos"
});
export const getUserFollowing = () => makeRequest({
  url: "/user/following"
});
export const unFollowUser = ({ username }) => makeRequest({
  headers: {
    accept: 'application/vnd.github.v3+json'
  },
  url: `/user/following/${username}`,
  method: "delete"
})
