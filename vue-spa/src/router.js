import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Post from './views/Post.vue'
import Author from './views/Author.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'vue-blog-demo',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/author/:id',
      name: 'author',
      component: Author
    },
    {
      path: '/:id',
      name: 'post',
      component: Post
    }
  ]
})
