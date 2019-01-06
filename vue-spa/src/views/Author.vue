<template>
  <div class="author" v-if="author">
    <h1>Author: {{ author.name }}</h1>
    <ul>
      <li v-for="(value, key) in author">
        <template v-if="typeof value === 'object'">
          <li v-for="(value, key) in value">
            {{ key.toUpperCase() }}: {{ value }}
          </li>
        </template>
        <template v-else>
          {{ key.toUpperCase() }}: {{ value }}
        </template>
      </li>
    </ul>
    <div class="posts" v-if="posts.length">
      <post v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div class="error" v-else>
      No posts found
    </div>
  </div>
  <div class="error" v-else>
    No author found
  </div>
</template>

<script>
import post from '@/components/post'

export default {
  components: {
    post
  },
  data(){
    return {
      perPage: 100
    }
  },
  mounted(){
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getUsers')
  },
  computed: {
    id(){
      return parseInt(this.$route.params.id)
    },
    author(){
      return this.$store.getters.author(this.id)
    },
    posts(){
      return this.$store.state.posts.filter(p => p.userId === this.id)
    }
  }
}
</script>

<style lang="scss">
.author{
  h1{
    padding: 20px 0;
  }

  li{
    list-style: none;
    margin-bottom: 5px;
  }
}
</style>
