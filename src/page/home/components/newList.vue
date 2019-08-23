<template>
    <div>
     <div class="nav">
       <mt-button size="small" @click.native.prevent="active = 'tab-container1'">融媒要闻</mt-button>
       <mt-button size="small" @click.native.prevent="beggTitle">本社公告</mt-button>
       <!--<router-link>-->
         <mt-button size="small" @click.native="go">更多</mt-button>
       <!--</router-link>-->
     </div>
      <!-- tab-container -->
      <mt-tab-container v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <mt-cell v-for="item in newList" :title="item.title" :to="'/detail/' + item.id" :key="item.id"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="item in noticList" :title="item.title" :to="'/detail/' + item.id" :key="item.id"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "newList",
      data(){
          return {
            active: 'tab-container1',
            newList:[],
            noticList:[]
          }
      },
      methods:{
        go(){
          this.$router.push('/newList')
        },
        beggTitle(){
          this.active = 'tab-container2'
          this.getNoticList()
          // this.active = 'tab-container2'
        },
        getNewList(){
          axios.get('/api/pf/api/news/getLimit',{
            params:{
              limit:2
            }
          }).then(
            this.handClickNewList
          )
        },
        handClickNewList(data){
          console.log(data);
          if(data && data.status == 200) {
            this.newList = data.data.data
          }
        },
        handClickNewList2(data){
          console.log(data);
          this.noticList = data.data.data
        },
        getNoticList(){
          axios.get('/api/pf/api/notice/getLimit',{
            params:{
              limit:2
            }
          }).then(
            this.handClickNewList2
          )
        },
      },
      mounted(){
        this.getNewList()
      }
    }
</script>

<style scoped lang="scss">
  .nav {
    span {
      font-size: .38rem;
      cursor: pointer;
    }
  }
  >>>.mint-cell-text {
    font-size: .14rem;
  }
</style>
