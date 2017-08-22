<template>
  <div>
    <alert-mup alert-mup-type="news"></alert-mup>
    <ul class="newslist" v-load-more="loaderMore">
      <li v-for="(item,index) in newsCont" :key="index">
        <router-link :to="{path:'/newsDetail',query:{id: item.id}}">
          <h4><p class="t"><span class="hot" v-if="item.listTop">[顶]</span>{{item.title}}</p><p class="time">{{item.time}}</p></h4>
          <span class="more"></span>
        </router-link>
      </li>
    </ul>
    <div class="flip" v-if="touchend">没有更多了</div>
    <div class="flip" @click="loaderMore" v-else="touchend">查看更多</div>
    <return-top></return-top>
    <foot-Bot></foot-Bot>
  </div>
</template>

<script>
  import footBot from "../components/footer/foot.vue"
  import alertMup from "../components/common/alertMup.vue"
  import returnTop from "../components/common/returnTop.vue"
  import {loadMore} from '../components/common/mixin'
  import {news} from '../service/getData'
  export default{
    data(){
      return{
        page: 1, // 批次加载店铺列表，每次加载10个 默认第一页 page = 1
        newsCont: [],   //新闻动态列表
        preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
        touchend: false, //没有更多数据
      }
    },
    created(){
      this.contId = parseInt(this.$route.query.id);
    },
    mounted(){
      this.initData();
    },
    mixins: [loadMore],
    methods:{
      //初始化时获取基本数据
      async initData (){
        //获取数据
        let res = await news(this.contId,this.page);
        this.newsCont = [...res.data];
        if (res.data.length < 10) {
          this.touchend = true;
        }
      },
      //到达底部加载更多数据
      async loaderMore(){
        if (this.touchend) {
          return
        }
        //防止重复请求
        if (this.preventRepeatReuqest) {
          return
        }
        this.preventRepeatReuqest = true;

        //数据的定位加10位
        this.page += 1;
        let res = await news(this.contId,this.page);
        this.newsCont = ([...this.newsCont,...res.data]);
        //当获取数据小于10，说明没有更多数据，不需要再次请求数据
        if (res.data.length < 10) {
          this.touchend = true;
          return
        }
        this.preventRepeatReuqest = false;
      }
    },
    components:{
      footBot,
      alertMup,
      returnTop
    },
    watch:{
      "$route" (value){
        this.contId=value.query.id;
        this.initData();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .newslist li{
    border-bottom: 1px solid #ccc;
    padding: 0 8px;
    font-size: 14px;
    a{
      display: -webkit-box;
    }
    h4{
      font-weight: normal;
      color: #000;
      -webkit-box-flex: 1;
      padding: 6px 0;
      overflow: hidden;
      p.t {
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        span.hot{
          color: #f00;
        }
      }
      p.time {
        color: #999;
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        span{
          margin-right: 5px;
        }
      }
    }
  }
  .flip{
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
  }
</style>
