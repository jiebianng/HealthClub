 <template>
   <div>
     <div class="sb_nav">
       <h3 class="title">
         <p class="moresidebar">更多分类</p>
         加盟我们
       </h3>
     </div>
     <div class="sidebar">
       <h3 class="title">关于我们</h3>
       <div>
         <dl class="list-none navnow">
           <dt><a href="" title="公司简介" class="zm"><span>公司简介</span></a></dt>
         </dl>
         <dl class="list-none navnow">
           <dt><a href="" title="企业优势" class="zm"><span>企业优势</span></a></dt>
         </dl>
         <dl class="list-none navnow">
           <dt class="on"><a href="" title="加盟我们" class="zm"><span>加盟我们</span></a></dt>
         </dl>
         <dl class="list-none navnow">
           <dt><a href="" title="客户服务" class="zm"><span>客户服务</span></a></dt>
         </dl>
         <dl class="list-none navnow">
           <dt><a href="" title="联系我们" class="zm"><span>联系我们</span></a></dt>
         </dl>
       </div>
     </div>
   </div>
</template>

<script>
    export default {
    	data(){
            return{
            }
        },
        mounted(){

        },
        props: ['alertText'],
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
  .sidebar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(51, 51, 51, 0.9);
    height: 100%;
    z-index: 9999;
    h3.title {
      padding: 0 10px;
      height: 46px;
      line-height: 46px;
      margin: 0;
      text-align: center;
      font-weight: normal;
      background: url(../../assets/images/navmore.png) no-repeat 95% center;
      background-size: 12px;
      font-size: 16px;
      color: #fff;
    }
    dt{
      border-bottom: 1px solid #7b7b7b;
      background: url(../../assets/images/navmore.png) no-repeat 95% center;
      background-size: 12px;
      a{
        padding: 12px 10px;
        display: block;
        color: #fff;
        span{
          color: #fff;
          font-size: 14px;
        }
      }
    }
  }
</style>
