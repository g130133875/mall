<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">淘宝</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="titles"/>
  </div>
</template>
<script>
import {getHomeMultidata} from '@/network/home'
import NavBar from '@/components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'

export default {
  name: 'Home',
  components: { 
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行','时尚','畅销']
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners =  res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>
<style scoped>
  .home-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>