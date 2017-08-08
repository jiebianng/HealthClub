<template>
  <div>
    <div class="sb_box">
      <alert-mup></alert-mup>
      <div class="aboutEditor"><div v-html="aboutCont"></div></div>
    </div>
    <foot-Bot></foot-Bot>
  </div>
</template>

<script>
  import footBot from "../components/footer/foot.vue"
  import alertMup from "../components/common/alertMup.vue"
  import {toGetData} from '../service/getData'
  export default{
      data(){
        return{
          aboutCont: '',   //关于我们内容
        }
      },
      mounted(){
        toGetData().then( res => {
          this.aboutCont = res.aboutUs;
        });
      },
      components:{
        footBot,
        alertMup
      }
  }
</script>

<style lang="scss">
  .aboutEditor{
    padding: 15px 10px;
    line-height: 1.8;
    word-wrap: break-word;
    font-size: 14px;
    img{
      width: 100%;
    }
  }
</style>
