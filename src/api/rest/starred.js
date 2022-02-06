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
    headers: {
      accept: 'application/vnd.github.v3+json'
    },
    url: `/user/starred?${params}`
  })
  //   return console.log(obj.owner, obj.reponame);
}

export const getIssuesForRepo = ({ repo, owner }) => makeRequest({
  headers: {
    accept: 'application/vnd.github.v3+json'
  },
  url: `/repos/${owner}/${repo}/issues`,
  method: "get"
})

export const starRepo = ({ repo, owner }) => makeRequest({
  headers: {
    accept: 'application/vnd.github.v3+json'
  },
  url: `/user/starred/${owner}/${repo}`,
  method: "put"
})
export const unStarRepo = ({ repo, owner }) => makeRequest({
  headers: {
    accept: 'application/vnd.github.v3+json'
  },
  url: `/user/starred/${owner}/${repo}`,
  method: "delete"
})
