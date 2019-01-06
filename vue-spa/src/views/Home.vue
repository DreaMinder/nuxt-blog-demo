<template>
  <div class="home">
    <input v-model="query" placeholder="Search..." class="search">

    <div class="posts" v-if="posts.length">
      <post v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div class="error" v-else>
      No posts found
    </div>

    <pagination :total="total" :page="page" :perPage="perPage" v-if="posts.length" />
  </div>
</template>

<script>
import post from '@/components/post'
import pagination from '@/components/pagination'

export default {
  components: {
    post,
    pagination
  },
  data(){
    return {
      query: '',
      perPage: 10
    }
  },
  mounted(){
    this.$store.dispatch('getPosts')
  },
  computed: {
    total(){
      return this.$store.state.posts.length
    },
    page(){
      if(this.$route.query.page)
        return parseInt(this.$route.query.page)
      else
        return 1
    },
    posts(){
      const perPage = this.perPage
      let page = this.page - 1
      let query = this.query ? this.query.toLowerCase() : null

      return this.$store.getters.posts({
        perPage,
        page,
        query
      })
    }
  }
}
</script>

<style lang="scss">
.home{
  .search{
    padding: 5px;
    width: 100%;
  }
}
</style>
