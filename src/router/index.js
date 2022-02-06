import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach(async(to, from, next) => {
  const authRoute = to.name === "auth";
  try {
    await api.user.getUserData();
    next(authRoute ? { name: "feeds" } : null)
  } catch (err) {
    if (err.response.status === 401) {
      next(authRoute ? null : { name: "auth" })
    }
  }
  // if (authRoute) {
  //   next();
  //   return;
  // }
  // try {
  //   const response = await fetch("https://api.github.com/user", {
  //     headers: {
  //       Authorization: `token ${localStorage.getItem("token")}`
  //     }
  //   })
  //   if (response.status === 401) throw new Error();

  //   next();
  // } catch (err) {
  //   next({ name: "auth" });
  // }
})
export default router
