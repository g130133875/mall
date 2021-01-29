<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scroller: {
        type: Object,
        default() {
          return {}
        }
      },

    }
  },
  mounted() {
    //1. 创建BScroll对象
    this.scroller = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      // observeDOM: true,
      click: true,
      pullUpLoad: true
    })
    
    //2. 监听滚动的位置
    this.scroller.on('scroll', (position)=> {
      this.$emit('scroll',position)
    })

    //3. 监听上拉事件
    this.scroller.on('pullingUp', ()=> {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroller.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroller.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>