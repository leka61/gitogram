// import main from '../pages/main'
import about from '../pages/about'
import feeds from '../pages/feeds/feeds'
import stories from '../pages/stories/stories'
export default [
  {
    component: feeds,
    path: '/',
    name: 'Main'
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
