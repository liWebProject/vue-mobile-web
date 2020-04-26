<template>
  <div class="box">

    <h2 class='title'>demo页</h2>

    <div class="panel">
       <p>测试自动加前缀: <span class='auto'>旋转</span></p>
       <p class='txt'>{{msg}}</p>
    </div>

    <div class="panel">
        <h3>测试字体图标的使用：</h3>
        <p>原字体： <svg-icon icon-class="password" /></p>
        <p>字体缩小： <svg-icon icon-class="password" class='icon1' /></p>
        <p>字体放大： <svg-icon icon-class="password" class='icon2' /></p>
        <p>字体变色： <svg-icon icon-class="password" class='icon3' /></p>
    </div>

    <div class="panel">
      <h3>测试touch事件：</h3>
      <p>
        <v-touch v-on:swipeleft="onSwipeLeft(data)">SwipeLeft me!</v-touch>
        <br />
        <v-touch v-on:swiperight="onSwipeRight(data)">SwipeRight me!</v-touch>
        <br />
        <v-touch tag="a" v-on:tap="onTap">Tap me!</v-touch>
      </p>
    </div>

    <div class="panel">
      <p>雪碧图使用测试：</p>
      <span class='icon icon-demo1'></span>
      <span class='icon icon-demo2'></span>


      <p>测试图片引入1：(全局变量staticImgs方式)</p>
      <img :src="staticImgs.demo1" alt="">

      <!-- <p>测试图片引入2：(直接引入)</p>
      <img src="../assets/images/demo1.png" alt=""> -->

      <!-- <p>测试图片引入3：(import、require方式引入)</p>
      <img :src="demo1" alt=""> -->
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
import settings from '@/config/baseConfig'

//import demo1 from '@/assets/images/demo1.png'

export default {
  name: 'demo',
  data () {
    return {
      msg: '测试全局变量颜色',
      staticImgs: settings.staticImgs,
      //demo1: demo1,
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
console.log(this.staticImgs)

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
  
  /* 测试图标使用 */
  .icon{
    display: inline-block;
    width: 60px;
    height: 60px;
  }

  .icon-demo1{
    @include mix-icon-demo1();
  }

  .icon-demo2{
    @include mix-icon-demo2();
  }

  .icon1{
    font-size: 18px;
  }

  .icon2{
    font-size: 50px;
  }

  .icon3{
    color: $txt-orange;
  }


  .box{
    margin: 100px auto;
    color: $txt-black;
    padding: 20px 40px;

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

    img{
      display: inline-block;
      width: 100%;
      height: auto;
    }
  }

</style>
