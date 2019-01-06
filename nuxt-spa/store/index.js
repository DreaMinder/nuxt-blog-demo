let random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const state = () => ({
  users: [],
  posts: [],
  comments: []
})

export const getters = {
  posts(state){

    return ({perPage, page, query}) => {
      let from = page * perPage
      let to = from + perPage
      return state.posts.filter(
        post =>
          !query ||
          post.title.toLowerCase().includes(query) ||
          post.body.toLowerCase().includes(query)
      ).filter(
        (post, i) => from <= i && i < to
      ).map(post => {
        post.rating = random(-20, 50)
        return post
      })
    }
  },
  author(state){
    return id => state.users.find(u => u.id === parseInt(id))
  },
  post(state){
    return id => state.posts.find(u => u.id === parseInt(id))
  }
}

export const mutations = {
  SET_POSTS(state, data){
    state.posts = data
  },
  SET_COMMENTS(state, data){
    state.comments = data
  },
  SET_USERS(state, data){
    state.users = data
  },
}

export const actions = {
  async getPosts({ commit, state }){
    if(state.posts.length) return
    const { data } = await this.$axios.get(`/posts`);
    commit('SET_POSTS', data)
  },
  async getComments({ commit, state }){
    if(state.comments.length) return
    const { data } = await this.$axios.get(`/comments`);
    commit('SET_COMMENTS', data)
  },
  async getUsers({ commit, state }){
    if(state.users.length) return
    const { data } = await this.$axios.get(`/users`);
    commit('SET_USERS', data)
  }
}
