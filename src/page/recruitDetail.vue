<template>
  <div>
    <head-return title="职位详情"></head-return>
    <div class="showjob">
      <h1 class="title">会籍顾问</h1>
      <div class="paralist">
        <ul class="list-none">
          <li>
            <div class="pn">发布日期：</div>
            <div class="pv">2013-10-29</div>
          </li>
          <li>
            <div class="pn">工作地点：</div>
            <div class="pv">长沙</div>
          </li>
          <li>
            <div class="pn">招聘人数：</div>
            <div class="pv">2人</div>
          </li>
          <li>
            <div class="pn">工资待遇：</div>
            <div class="pv">面议</div>
          </li>
          <li>
            <div class="pn">有效期：</div>
            <div class="pv">不限 </div>
          </li>
        </ul>
        <div class="clear"></div>
      </div>
      <div class="info_cv"><router-link :to="{path:'/recruitApply',query:{swiperSlide:4,id:2,applyId:$route.query.id}}" class="button">在线应聘</router-link></div>
      <h3 class="Tabtitle">
        <div class="l">详细描述</div>
      </h3>
      <div class="editor">
        <div><p>
          <strong>详 细 描 述：</strong><br>
          1．负责会员卡销售工作，大专学历，至少1年以上销售工作经验；</p>
          <p>
            2．谈吐流利，思维清晰，仪表端正；</p>
          <p>
            3．热爱销售工作，且工作勤奋；</p>
          <p>
            4．具有团队合作精神，为人正直、诚实、敬业；</p>
          <p>
            5．具有良好的工作习惯、较高的职业素养与道德；</p>
          <p>
            6．善与客户沟通，能够快速消除陌生感，分析、判断能力强。<br>
            &nbsp;</p>
          <p>
            &nbsp;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headReturn from "../components/header/headReturn.vue"
  export default{
    components:{
      headReturn
    }
  }
</script>

<style lang="scss" scoped>
  .showjob {
    margin-top: 46px;
    font-size: 14px;
    h1.title{ font-size:18px; padding:10px 10px 0; line-height:1.2;}
    .paralist{
      padding:0 10px;
      li{
        display:-webkit-box;
        padding:8px 0;
        border-bottom:1px solid #eee;
        a{ color:#08c;}
        div.pn{
          color:#999;
        }
        div.pv{
          -webkit-box-flex:1;
        }
      }
      li:last-child{ border-bottom:none;}
    }
    .editor{
      padding: 15px 10px;
      line-height: 1.8;
      word-wrap: break-word;
    }
    .info_cv {
      padding: 10px;
      .button,.button:visited {
        background: #91bd09;
        display: inline-block;
        padding: 10px 30px 11px;
        color: #fff;
        text-decoration: none;
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        border-bottom: 1px solid #888;
        position: relative;
        font-size: 16px;
      }
    }
    .Tabtitle {
      font-weight: normal;
      display: -webkit-box;
      background: #eee;
      border-bottom: 1px solid #ccc;
      height: 41px;
      div.l {
        -webkit-box-flex: 1;
        height: 40px;
        line-height: 40px;
        background: #f5f5f5;
        text-align: center;
        border: 1px solid #ccc;
        border-right: none;
        border-bottom: none;
      }
    }
  }
</style>
