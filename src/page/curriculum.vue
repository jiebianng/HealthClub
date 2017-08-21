<template>
  <div>
    <alert-mup alert-mup-type="curriculum"></alert-mup>
    <div class="sb_box">
      <div class="aboutEditor"></div>
    </div>
    <foot-Bot></foot-Bot>
  </div>
</template>

<script>
  import footBot from "../components/footer/foot.vue"
  import alertMup from "../components/common/alertMup.vue"
  import {curriculum} from '../service/getData'
  export default{
    data(){
      return{
        aboutCont: '',   //关于我们内容
        contId:null, //内容id
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
        curriculum(contId).then( res => {

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
</style>
