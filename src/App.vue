<template>
  <div id="app" v-cloak>

    <transition name="router-fade" mode="out-in">
      <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>

    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive" :key="key"></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',

  computed: {
    //监听路由变化,实时更新路由数据
    key() {
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
    },
  }
}
</script>

<style lang="scss">

  .router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
      opacity: 0;
  }

</style>
