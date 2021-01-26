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
  data() {
    return {
      scroller: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  },
  mounted() {
    this.scroller = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      observeDOM: true
    })
  }
}
</script>

<style scoped>

</style>