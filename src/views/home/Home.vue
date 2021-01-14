<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">淘宝</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
  name: 'Home'
}
</script>
<style scoped>
  .home-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>