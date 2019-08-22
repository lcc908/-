<template>
    <div class="header">
      <mt-header title="人民融媒">
        <router-link to="/" slot="left">
          <mt-button class="icon"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
</template>

<script>
  import { Header } from 'mint-ui';
    export default {
        name: "Home",
      components:{
        Header
      }
    }
</script>

<style scoped>
  .header{
    line-height: 40px;
  }
  h1 {
    color: #000;
  }
  .mint-header {
    background-color: #26a2ff;
  }
  .icon {
    background: url('../../assets/images/logo.png');
    width: 0.42rem;
    height: 0.42rem;
    background-size: 100%;
  }
  .mint-header-title {
    color: #000;
  }
</style>
