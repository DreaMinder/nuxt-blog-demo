<template>
  <div class="container">
    <header>
      <router-link to="/">Blog</router-link>
    </header>

    <main id="main" role="main">
      <router-view/>
    </main>
  </div>
</template>


<style lang="scss">
@import 'src/assets/style.scss';

#main{
  padding: 30px 0;
}
header{
  padding: 30px 0px;
  font-size: 40px;
  border-bottom: 1px dashed #ccc;

  a{
    color: #555
  }
}
</style>
