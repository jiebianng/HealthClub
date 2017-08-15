<template>
  <div>
    <div class="sb_box">
      <alert-mup alert-mup-type="about" :alert-mup-title="alertMupTitle">
        <div slot='other'>
          <dl class="list-none">
            <dt><router-link :to="{path: '/appointment'}" title="联系我们" class="zm"><span>联系我们</span></router-link></dt>
          </dl>
        </div>
      </alert-mup>
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
          contId:null, //内容id
          alertMupTitle:''//内容标题
        }
      },
      created(){
        this.contId = parseInt(this.$route.query.id);
      },
      mounted(){
        this.initData(this.contId);
      },
      methods:{
          //初始化时获取基本数据
          async initData (contId){
            toGetData().then( res => {
              res.aboutUs.forEach((item,index) => {
                if(item.id==contId){
                  this.aboutCont = item.content;
                  this.alertMupTitle = item.title;
                }
              });
            });
          }
      },
      components:{
        footBot,
        alertMup
      },
      watch:{
        "$route" (value){
          this.initData(value.query.id);
        }
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
