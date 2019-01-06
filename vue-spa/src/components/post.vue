<template>
  <div class="post">
    <h1 v-if="isSingle">{{ post.title }}</h1>
    <router-link :to="'/' + post.id" v-else>
      <h3 class="title">{{ post.title }}</h3>
    </router-link>
    <div class="descr">
      {{ content }}
    </div>
    <div class="meta">
      <quantity :count="post.rating" />
      <div class="spacer" />
      <router-link :to="'/author/' + post.userId">Author</router-link>
    </div>
  </div>
</template>

<script>
import quantity from '@/components/quantity'

export default {
  components: {
    quantity
  },
  props: ['post', 'isSingle'],
  computed: {
    content(){
      if(!this.isSingle)
        return this.post.body.substring(0, 100) + '...'
      else
        return this.post.body
    }
  }
}
</script>

<style lang="scss">
.post{
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ccc;

  a{
    color: #444;
  }

  .descr{
    padding-bottom: 10px;
  }

  .meta{
    display: flex;
  }
}
</style>
