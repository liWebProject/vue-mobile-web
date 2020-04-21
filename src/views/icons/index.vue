<template>
  <div class="icons-container">

   <h1>{{ msg }}</h1>

    <div v-for="item of svgIcons" :key="item" >
        <div class="icon-item">
          <svg-icon :icon-class="item" class-name="disabled" />
          <span>{{ item }}</span>
        </div>
    </div>

  </div>
</template>

<script>

import svgIcons from './svg-icons'

export default {
  name: 'Icons',
  data() {
    return {
      msg:'icon',
      svgIcons,
    }
  },
  methods: {
  },
  mounted(){
    console.log(this.svgIcons)
  }
}
</script>

<style lang="scss" scoped>
.icons-container {
  margin: 10px 20px 0;
  overflow: hidden;

  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .icon-item {
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
  }

  .disabled {
    pointer-events: none;
  }
}
</style>
