<template>
  <div>
    <head-return title="文章内容"></head-return>
    <div class="shownews">
      <h1 class="title">冬季健身注意事项<p class="hits">2013-11-15 12:33:33&nbsp;&nbsp;点击次数：101</p></h1>
      <div class="editor">
        <div>
          <p>
          <strong>健身专业私人教练支招：</strong></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;1. 由于气候寒冷，人体肌肉伸展性降低，关节比较僵硬，因此热身很重要，应延长到15至20分钟，以免造成肌肉拉伤和关节扭伤。</p>
          <p>
            &nbsp;</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;2. 健身服要备两套</p>
          <p>
            &nbsp;</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            冬季健身应准备两套服装，出汗后及时更换上干爽衣服，以防感冒。冬季是增加肌肉的好时机，因此可以适量提高力量锻炼的强度和力度，增加动作的组数和次数，同时增加有氧锻炼的内容，防止脂肪过多堆积。</p>
          <p>
            &nbsp;</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. 运动前后及时补充碳水化合物</p>
          <p>
            &nbsp;</p>
          <p>
            　　教练均表示，冬季运动前后饮食应及时补充碳水化合物和蛋白质，如面食、燕麦片、红薯、土豆、鸡肉、鸡蛋、瘦肉、鱼肉、豆制品等，水果和蔬菜也应适量。</p>
          <div id="metinfo_additional"></div>
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
  .shownews{
    margin-top: 46px;
    font-size: 14px;
    h1.title{
      font-size: 18px;
      text-align: center;
      line-height: 1.5;
      border-bottom: 1px solid #ccc;
      padding: 10px 20px;
      p.hits {
        font-size: 12px;
        color: #999;
        font-weight: normal;
      }
    }
    .editor{
      padding: 15px 10px;
      line-height: 1.8;
      word-wrap: break-word;
    }
  }
</style>
