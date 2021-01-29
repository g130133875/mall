<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">淘宝</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll"
    @pullingUp="loadMoreData">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="titles"
                   class="tab-control"
                   @tabClick="tabClick"
                   />
      <goods-list :goods="goods[currentType].list"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowTop"/>
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
import Scroll from '@/components/common/scroll/Scroll.vue'
import BackTop from '@/components/content/backtop/BackTop.vue'

export default {
  name: 'Home',
  components: { 
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
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
      },
      currentType: 'pop',
      isShowTop: false
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index){
      switch(index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      },
    backTop() {
      this.$refs.scroll.scrollTo(0,0)
      },
    contentScroll(position) {
        this.isShowTop = -(position.y) > 30
    },
    loadMoreData() {
      console.log(this.goods[this.currentType].page);
      this.getHomeData(this.currentType)
      this.$refs.scroll.scroller.refresh();
    },

    /**
     * 网络服务相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      this.banners =  res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
    },
    getHomeData(type){
      const page = this.goods[type].page + 1
      getHomeData(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      })
    }
  }
}
</script>
<style scoped>
  #home {
    position: relative;
  }
  .home-nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 43px;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>