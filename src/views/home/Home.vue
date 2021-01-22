<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">淘宝</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="titles" class="tab-control"/>
    <goods-list :goods="goods['pop'].list"/>
  </div>
</template>
<script>
import {getHomeMultidata, getHomeData} from '@/network/home'
import NavBar from '@/components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'

export default {
  name: 'Home',
  components: { 
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行','新款','精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      }
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeData('pop')
    // this.getHomeData('new')
    // this.getHomeData('sell')
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      this.banners =  res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
    },
    getHomeData(type){
      const page = this.goods[type].page + 1
      getHomeData(type, page).then(res => {
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      })
    }
  }
}
</script>
<style scoped>
  .home-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .tab-control {
    position: sticky;
    top: .1rem;
  }
</style>