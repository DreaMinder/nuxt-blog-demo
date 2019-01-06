<template>
  <div class="single-post" v-if="post">
    <post :post="post" :isSingle="true" />

    <div class="comments" v-if="comments.length">
      <h3>Comments:</h3>
      <hr/>
      <comment v-for="comment in comments" :key="comment.id" :comment="comment" />
    </div>
  </div>
  <div class="error" v-else>
    No post found
  </div>
</template>

<script>
import post from '@/components/post'
import comment from '@/components/comment'

export default {
  components: {
    post,
    comment
  },
  data(){
    return {
      perPage: 100
    }
  },
  mounted(){
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getComments')
  },
  computed: {
    id(){
      return parseInt(this.$route.params.id)
    },
    post(){
      return this.$store.getters.post(this.id)
    },
    comments(){
      return this.$store.state.comments.filter(p => p.postId === this.id)
    }
  }
}
</script>

<style lang="scss">
.single-post{
  h1{
    padding: 20px 0;
  }

  li{
    list-style: none;
    margin-bottom: 5px;
  }
}
</style>
