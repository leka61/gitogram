import { makeRequest } from '../requests.mjs'
// const addStartingZero = (value) => value < 10 ? `0${value}` : value
export const getReadme = ({ owner, repo }) => {
  const contentHeader = 'application/vnd.github.v3.html+json'
  return makeRequest({
    url: `/repos/${owner}/${repo}/readme`,
    headers: {
      accept: contentHeader
    }
  })
//   return console.log(obj.owner, obj.reponame);
}
