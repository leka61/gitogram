// import main from '../pages/main'
import about from '../pages/about'
import feeds from '../pages/feeds/feeds'
import stories from '../pages/stories/stories'
import start from '../pages/start/start'
import auth from '../pages/auth/auth'
export default [
  {
    component: feeds,
    path: '/feeds',
    name: 'feeds'
  },
  {
    component: start,
    path: '/start',
    name: 'start'
  },
  {
    component: auth,
    path: '/',
    name: 'auth'
  },
  {
    component: about,
    path: '/about/:username',
    name: 'About'
  },
  {
    component: stories,
    path: '/stories',
    name: 'StoriesAll'
  },
  {
    component: stories,
    path: '/stories/:initialSlide',
    name: 'Stories'
  }
]
