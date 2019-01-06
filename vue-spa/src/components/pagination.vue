<template>
  <nav class="pagination">
    <router-link :to="navigate(-1)" class="prev" v-if="page !== 1">Prev</router-link>
    <div class="spacer" />
    <router-link :to="navigate(1)" class="next" v-if="page !== totalPages">Next</router-link>
  </nav>
</template>

<script>
export default {
	props: ['total', 'page', 'perPage'],
	methods: {
    navigate(direction) {
      let page = this.page + direction
      return {name: this.$route.name, query: {page}}
    }
	},
  computed: {
    totalPages(){
      return parseInt(this.total / this.perPage)
    }
  }
};
</script>

<style lang="scss">
.pagination {
	display: flex;

  a{
    display: block;
    padding: 10px;
    border: 1px solid #ccc;
  }
}
</style>
