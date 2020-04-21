<template>
  <div class="box">

    <h2 class='title'>demo页</h2>

    <div class="panel">
        <p class='txt'>{{msg}}</p>

        <p>测试自动加前缀: <span class='auto'>旋转</span></p>

        <p>测试字体图标的使用： <svg-icon icon-class="password" /></p>

        <p>测试v-touch:tap <a v-touch:tap="onTap">Tap me!</a></p>
    </div>

    <div class="panel">
      <h3>测试touch事件：</h3>
      <p>
        <v-touch v-on:swipeleft="onSwipeLeft(data)">SwipeLeft me!</v-touch>
        <br />
        <v-touch v-on:swiperight="onSwipeRight(data)">SwipeRight me!</v-touch>
        <br />
        <v-touch tag="a" v-on:tap="onTap">Tap me!</v-touch>
        <!-- <v-touch tag="p" v-on:tap="onTap">Tap me!</v-touch> -->
      </p>
    </div>

<!--     <div class="panel">
      <h3>1px测试</h3>
      <p>
        <span class='border'>测试我的边框是否是1px</span>
      </p>
    </div> -->

  </div>
</template>

<script>

import { apiCityData } from '@/service/api.js'

export default {
  name: 'demo',
  data () {
    return {
      msg: '测试全局变量颜色'
    }
  },

  components: {},

  computed: {},

  methods: {

    onTap(){

        this.$vux.toast.show({text:"Tap sucess!",type:'text',time:200000,width:'auto'})

        // 显示
        // this.$vux.toast.show({
        //  text: 'Loading'
        // })

        // 隐藏
        //this.$vux.toast.hide()
    },

    onSwipeLeft(){
      alert('swipeleft sucess!');
    },

    onSwipeRight(){
      alert('swiperight sucess!');
    },

    //get api data
    async getApiData() {
      let self = this;

      await apiCityData()
        .then(res => {
        })
    },
  },

  mounted(){


  },

  created(){

    // 访问微信对象
    // this.$wechat.onMenuShareTimeline({
    //   title: 'hello VUX'
    // })

    //this.getApiData();
  },

  watch:{
  }
}
</script>

<style lang="scss" scoped>

  .box{
    margin: 100px auto;
    color: $txt-black;

    .panel{
      margin: 60px auto;

      p{
        margin: 20px 0px;
      }

      .txt{
          color: $txt-grey;
      }

      .auto{
        display: inline-block;
        transform: rotate(45deg);
        box-shadow: 0 0 0 0 #000;
      }

      .border{
        display: inline-block;
        padding: 10px;
        border: 2px solid #ccc;
      }

    }
  }





</style>
