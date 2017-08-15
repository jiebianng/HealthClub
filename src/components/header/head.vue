<template>
  <header data-value="0">
    <div class="top">
      <div class="top-logo">
        <a href="/">
          <img src="../../assets/images/logo.png" alt="健身俱乐部" title="健身俱乐部">
        </a>
      </div>
      <ul class="top-right" @click.stop="searchDefaultFun">
        <li class="tlist seach"><svg t="1500606908487" class="icon" style="width: 1em; height: 1em; vertical-align: middle; fill: currentcolor; overflow: hidden; font-size: 20px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1017"><path d="M1024.00172 965.594185L732.643521 674.232546c132.881701-162.195561 123.635648-401.899715-27.758803-553.294166-161.251174-161.251174-422.695164-161.251174-583.946338 0-161.252894 161.251174-161.252894 422.696884 0 583.951499 151.401331 151.401331 391.120966 160.640504 553.313088 27.738161l291.354758 291.358198 58.395494-58.392053z m-844.667846-319.0998c-129.000939-129.004379-129.000939-338.159572 0-467.160511 129.000939-129.002659 338.154411-129.002659 467.158791 0 129.000939 129.002659 129.000939 338.156131 0 467.160511-129.004379 129.000939-338.156131 129.000939-467.158791 0z" fill="#c4cde0" p-id="1018"></path></svg></li>
      </ul>
    </div>
    <!--搜索框-->
    <div class="seachbox topmorebox" :class='{active: searchDefault}'>
      <div class="seachbox_box">
        <i></i>
        <form method="POST" name="myform" action="">
          <div class="gutsy-table">
            <div class="gutsy-cell gutsy-wi100">
              <input type="text" name="searchword" class="text" placeholder="请输入关键词" />
            </div>
            <div class="gutsy-cell gutsy-wh-sp gutsy-mi">
              <input type="submit" name="Submit" value="立即搜索" class="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <!--导航方式1-->
    <nav class="type1 swiper-container">
      <ul class="list-none swiper-wrapper">
        <li class="swiper-slide" :class="{navdown : 0 == specsIndex}"><router-link :to="{path: '/home', query:{swiperSlide:0}}"><span>首页</span></router-link></li>
        <li class="swiper-slide" :class="{navdown : 1 == specsIndex}"><router-link :to="{path: '/about', query:{swiperSlide:1,id:1}}"><span>关于我们</span></router-link></li>
        <li class="swiper-slide" :class="{navdown : 2 == specsIndex}"><router-link :to="{path: '/news', query:{swiperSlide:2}}"><span>新闻动态</span></router-link></li>
        <li class="swiper-slide" :class="{navdown : 3 == specsIndex}"><router-link :to="{path: '/curriculum', query:{swiperSlide:3}}"><span>精彩课程</span></router-link></li>
        <li class="swiper-slide" :class="{navdown : 4 == specsIndex}"><router-link :to="{path: '/recruit', query:{swiperSlide:4}}"><span>招贤纳士</span></router-link></li>
        <li class="swiper-slide" :class="{navdown : 5 == specsIndex}"><router-link :to="{path: '/contact', query:{swiperSlide:5}}"><span>联系我们</span></router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import '../../assets/plugins/swiper-3.4.2.min';
  export default {
      data(){
          return {
            searchDefault:false, //是否显示立即搜索
            specsIndex: 0, //当前选中的页面索引值
          }
      },
      mounted(){
          this.per = new Swiper('.type1', {
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 0
          });
          this.swiperUrlFun(this.$route.query.swiperSlide);
      },
      methods:{
        searchDefaultFun(){
          this.searchDefault = !this.searchDefault;
        },
        //导航动画（url添加高亮）
        swiperUrlFun(Slide){
          Slide  = Slide ? Slide : 0;
          this.per.slideTo(Slide,600,false);
          this.specsIndex = Slide;
        }
      },
      watch:{
        "$route" (value){
          this.swiperUrlFun(value.query.swiperSlide);
        }
      }
  }
</script>

<style lang="scss" scoped>
    @import '../../assets/style/mixin';
    .top{
      height: 46px;
      display: -webkit-box;
      background: -webkit-gradient(linear, 0 0, 0 100%, from(rgb(47, 47, 47)), color-stop(0.5, rgb(47, 47, 47)), to(rgb(25, 25, 25)));
      .top-logo{
        @include sc(0, $bc1);
        height: 46px;
        overflow: hidden;
        -webkit-box-flex: 1;
        img{
          max-height: 35px;
          padding-top: 5px;
          padding-left: 5px;
        }
      }
    }
    .top-right li.tlist{
      float: left;
      width: 36px;
      height: 32px;
      padding: 11px 5px 0;
      text-align: center;
      position: relative;
      z-index: 999;
    }
    .seachbox{
      position: absolute;
      top: 55px;
      left: 0;
      width: 100%;
      z-index: -1;
      opacity: 0;
      transition: opacity .3s;
      .seachbox_box{
        width: 88%;
        margin: 0px auto;
        background: rgba(0,0,0,0.8);
        border-radius: 5px;
        padding: 15px 18px;
        position: relative;
        box-sizing: content-box;
        i{
          display: block;
          width: 0;
          height: 0;
          border: solid 9px;
          border-color: transparent transparent rgba(0,0,0,0.8);
          position: absolute;
          top: -18px;
          right: 10px;
          margin-left: -9px;
        }
        input.text {
          width: 100%;
          height: 28px;
          line-height: normal;
          -webkit-appearance: none;
          box-shadow: rgb(183, 183, 183) 1px 1px 3px inset;
          margin: 0;
          padding: 5px 5px 5px;
          border-image: initial;
          background: rgb(253, 253, 253);
          border-top: 1px solid rgb(133, 133, 133);
          border-left: 1px solid rgb(175, 175, 175);
          border-right: 1px solid rgb(175, 175, 175);
          border-bottom: 1px solid rgb(201, 201, 201);
          border-radius: 0;
        }
        .submit{
          display: inline-block;
          height: 28px;
          line-height: 28px;
          padding: 0 10px;
          background: #000;
          color: #fff;
          -webkit-appearance: none;
          -webkit-border-radius: 0;
        }
      }
    }
    .seachbox.active{
      z-index: 99999999999;
      opacity: 1;
      transition: opacity .3s;
    }
    nav.type1 {
      width: 100%;
      position: relative;
      height: 40px;
      overflow: hidden;
      background: #4c505c;
      ul li{
          width: 100%;
          position: relative;
          text-align: center;
          height: 40px;
          line-height: 40px;
          min-width: 80px;
          overflow: hidden;
          border-right: 1px solid #616676;
          font-size: 12px;
          a{
            display: block;
            width: 100%;
          }
          a span,a:visited span{
            color: #fff;
            text-shadow: 0 1px 1px #666;
          }
        }
        ul li.navdown{
            background-color: #ededed;
            a span{
              color: #444;
              text-shadow: none;
            }
        }
    }
</style>
