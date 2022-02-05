import { makeRequest } from '../requests.mjs'

// const authHeader = {
//   Authorization: `token ${localStorage.getItem("token")}`
// }

export const getStarredRepos = ({ limit }) => {
  const params = new URLSearchParams();
  if (limit) {
    params.append("per_page", limit);
  }
  return makeRequest({
    url: `/user/starred/?${params}`
  })
  //   return console.log(obj.owner, obj.reponame);
}

export const starRepo = ({ repo, owner }) => makeRequest({
  headers: {
    accept: 'application/vnd.github.v3+json',
    Authorization: `token ${localStorage.getItem("token")}`
  },
  url: `/user/starred/${owner}/${repo}`,
  method: "put"
})
export const unStarRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: "delete"
})
