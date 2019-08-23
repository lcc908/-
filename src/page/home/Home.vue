<template>
    <div class="home">
      <div class="header">
        <mt-header title="人民融媒">
          <router-link to="/" slot="left">
            <mt-button class="icon"></mt-button>
          </router-link>
          <mt-button icon="" slot="right" class="right"></mt-button>
        </mt-header>
      </div>
      <div class="search">
        <mt-search v-model="value"></mt-search>
      </div>
     <div class="banner-swiper">
       <mt-swipe :auto="4000">
         <mt-swipe-item class="" v-for="item in bannerImg" :key="item.id"><img :src="item.pic" alt=""></mt-swipe-item>
       </mt-swipe>
     </div>
      <newList></newList>
    </div>
</template>

<script>
  import newList from './components/newList'
  import axios from 'axios'
    export default {
      name: "Home",
      data(){
        return {
          value:'122',
          bannerImg:[]
        }
      },
      components:{
        newList
      },
      methods:{
        getBannerImg () {
          axios.get('/api/pf/api/friendlink/topbanner/getFriendLink').then(this.getHome)
        },
        getHome (res) {
          this.bannerImg = res.data.data.datalist;
        }
      },
      mounted(){
        this.getBannerImg()
      }
    }
</script>

<style lang="scss" scoped>
  .header {
    .mint-header {
      background-color: #fff;
    }
    .mint-header-button.is-right {
      background-color: transparent;
    }
    .right {
      position: relative;
      z-index: 2555;
      background: url("../../assets/images/more.png")no-repeat center center;
      background-size: contain;
      width: .3rem;
      height: .28rem;
      border-radius: 0;
    }
  }
  .search {
    height: 1.04rem;
  }
  .icon {
    background: url('../../assets/images/logo.png');
    width: 0.42rem;
    height: 0.42rem;
    background-size: 100%;
  }
  >>>.mint-header-title {
    color: #000;
  }
  .mint-swipe-items-wrap {
    overflow: hidden;
    position: relative;
    height: 5rem;
    div {
      width: 100%;
      height: 3.6rem;
      img {
        width: 100%;
        height: 3.6rem;
      }
    }
  }
  .solid1 {
    background-color: #0089dc;
    width: 100%;
    height: 3rem;
  }
  .solid2 {
    background-color: #ffd705;
    width: 100%;
    height: 3rem;
  }
  .solid3 {
  background-color: #ff2d4b;
    width: 100%;
    height: 3rem;
  }
  .banner-swiper {
    .mint-swipe {
      width: 100%;
      height: 3.6rem;
    }
  }
</style>
