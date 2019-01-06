<template>
  <div class="comment">
    <h4>{{ comment.name }}</h4>
    <p>
      {{ comment.body }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['comment']
}
</script>

<style lang="scss">
.comment{
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
}
</style>
