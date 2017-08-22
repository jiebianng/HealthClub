<template>
  <div>
    <alert-mup alert-mup-type="curriculum"></alert-mup>
    <ul class="productlist" v-load-more="loaderMore">
      <li v-for="(item,index) in newsCont" :key="index">
        <router-link :to="{path:'/curriculumDetail',query:{senId: item.id}}">
          <dl class="ind">
            <dt><img :src="item.imgUrl" alt=""></dt>
            <dd>
              <h4><span class="hot" v-if="item.hot">[热]</span>{{item.title}}</h4>
              <p class="desc" title=""></p>
            </dd>
            <dt class="more"><svg t="1503384922219" class="icon" style="width: 1em; height: 1em; vertical-align: middle; fill: currentcolor; overflow: hidden; font-size: 30px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2932"><path d="M716.136 505.099c2.919-3.039 4.553-7.163 4.553-11.463 0-4.285-1.633-8.408-4.553-11.449M716.136 482.187l-294.827-307.818c-12.936-13.538-34.522-12.697-47.431 0.802-12.883 13.474-12.991 35.273-0.054 48.813l257.999 269.664-257.999 269.638c-12.937 13.55-12.83 35.352 0.054 48.825 12.909 13.498 34.496 14.343 47.431 0.804l294.827-307.819z" p-id="2933" fill="#8a8a8a"></path></svg></dt>
          </dl>
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
  import {curriculum} from '../service/getData'
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
        let res = await curriculum(this.contId,this.page);
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
        let res = await curriculum(this.contId,this.page);
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
  .productlist{
    dl{
      border-bottom: 1px solid #ccc;
      padding: 20px 0px;
      display: -webkit-box;
    }
    dd{
      margin-left: 5px;
      -webkit-box-flex: 1;
      h4{
        font-weight: normal;
        color: #333;
        margin-bottom: 5px;
        .hot{
          color: #f00;
        }
      }
      p{
        color: #999;
      }
    }
    dt{
      font-size: 0;
      display: -webkit-box;
      max-width: 80px;
      margin-left: 5px;
      img{
        max-width: 80px;
        max-height: 80px;
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
