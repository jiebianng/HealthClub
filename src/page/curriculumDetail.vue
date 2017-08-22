<template>
  <div>
    <head-return title="产品详情"></head-return>
    <div class="showjob">
      <img src="/static/upload/1384495740.jpg" alt="" width="100%">
      <h1 class="title">杠铃操</h1>
      <div class="paralist">
        <ul class="list-none">
          <li>
            <div class="pn">项目名称：</div>
            <div class="pv">杠铃操</div>
          </li>
          <li>
            <div class="pn">项目范围：</div>
            <div class="pv">集体健身项目</div>
          </li>
          <li>
            <div class="pn">项目内容：</div>
            <div class="pv">塑造形体、减少脂肪</div>
          </li>
          <li>
            <div class="pn">上课方式：</div>
            <div class="pv">团体课程</div>
          </li>
          <li>
            <div class="pn">更新时间：</div>
            <div class="pv">2013-11-15 </div>
          </li>
        </ul>
        <div class="clear"></div>
      </div>
      <h3 class="Tabtitle">
        <div class="l">详细描述</div>
      </h3>
      <div class="editor">
        <div>
          <p>杠铃操世界上最快的塑身方法是健身史上最成功的集体健身项目，世界上最快塑造形体、减少脂肪的运动。它成功地将杠铃引入操房，运用杠铃达到良好的塑身效果，将有氧运动与无氧运动完美结合，带来了集体健身的革命性突破。简单易学，成为增强体力和自信的起点。富有节奏的音乐和新颖的动作编排，伴随您完成1小时的练习。在热情高涨、激动人心的氛围中进行身体锻炼，适合每个想将力量训练与有氧训练结合起来的人。</p>
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
