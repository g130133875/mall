<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
         :key='index' class="tab-control-item"
         :class="{active: index === currentIndex}"
         @click="tabItemClick(index)"> 
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    tabItemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    background-color: #fff;
    height: 2rem;
    line-height: 2rem;
    margin-top: 0;
  }
  .tab-control-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: .15em solid red;
  }
</style>