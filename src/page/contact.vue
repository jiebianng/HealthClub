<template>
  <div>
    <alert-mup alert-mup-type="about"></alert-mup>
    <div class="sb_box">
      <div class="aboutEditor"><div v-html="contactCont"></div></div>
    </div>
    <foot-Bot></foot-Bot>
  </div>
</template>

<script>

  import footBot from "../components/footer/foot.vue"
  import alertMup from "../components/common/alertMup.vue"
  import {contact} from '../service/getData'
  export default{
    data(){
      return{
        contactCont: '',   //联系我们内容
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
        contact().then( res => {
          this.contactCont = res.contactCont;
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

