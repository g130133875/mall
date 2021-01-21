<template>
  <div id="recommend">
    <div id="recommend-item" v-for="item in recommends" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
        <!-- <div>{{item.title}}</div> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  #recommend {
    display: flex;
    text-align: center;
    margin-top: 1em;
    padding-bottom: 2em;
    border-bottom: .4em solid #cfcfcf;
  }
  #recommend-item {
    flex: 1;
  }
  #recommend-item img {
    width: 5em;
  }
</style>