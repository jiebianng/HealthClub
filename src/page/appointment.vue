<template>
  <div>
    <head-return title="在线留言"></head-return>
    <div class="sb_box">
      <div class="aboutEditor">
        <div class="metinfo_mobile_form">
          <form>
            <ul>
              <li class="input required">
                <span class="info"></span>
                <div class="xbox"><input name="para28" type="text" class="input-text required" placeholder="姓名"></div>
              </li>
              <li class="input ">
                <span class="info"></span>
                <div class="xbox"><input name="para29" type="text" class="input-text " placeholder="电话"></div>
              </li>
              <li class="input ">
                <span class="info"></span>
                <div class="xbox"><input name="para30" type="text" class="input-text " placeholder="Email"></div>
              </li>
              <li class="input ">
                <span class="info"></span>
                <div class="xbox"><input name="para31" type="text" class="input-text " placeholder="其他联系方式"></div>
              </li>
              <li class="textarea required">
                <span class="info"></span>
                <div class="xbox"><textarea name="para32" class="textarea-text" placeholder="留言内容"></textarea></div>
              </li>
            </ul>
            <input type="hidden" name="ip" value="182.149.126.247">
            <input type="hidden" name="lang" value="cn">
            <div class="input-submit"><input type="submit" name="Submit" value="提交留言"></div>
          </form>
        </div>
      </div>
    </div>
    <foot-Bot></foot-Bot>
  </div>
</template>

<script>
  import headReturn from "../components/header/headReturn.vue"
  import footBot from "../components/footer/foot.vue"
  import alertMup from "../components/common/alertMup.vue"
  import {recruit} from '../service/getData'
  export default{
    components:{
      footBot,
      alertMup,
      headReturn
    }
  }
</script>

<style lang="scss">
  .metinfo_mobile_form{
    margin-top: 46px;
    li{
      position: relative;
      margin-bottom: 10px;
    }
    li.select{
      span.name{
        display: block;
        height: 30px;
        line-height: 30px;
        padding: 0px 10px;
        border: 1px solid #333;
        border-bottom: none;
        background: #2f2f2f;
        color: #fff;
      }
      select{
        display: block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #ececec;
        border: 1px solid #d4d4d4;
        padding-left: 5px;
        outline: none;
      }
    }
    li.input{
      input{
        width: 100%;
        border: 1px solid red;
        height: 40px;
        padding: 0px 10px;
        line-height: normal;
        background: #fdfdfd;
        border-top: 1px solid #858585;
        border-left: 1px solid #afafaf;
        border-right: 1px solid #afafaf;
        border-bottom: 1px solid #c9c9c9;
        box-shadow: 1px 1px 3px #b7b7b7 inset!important;
        -webkit-appearance: none;
      }
    }
    li.textarea{
      textarea{
        width: 100%;
        height: 130px;
        padding: 10px;
        line-height: 20px;
        background: #fdfdfd;
        border-top: 1px solid #858585;
        border-left: 1px solid #afafaf;
        border-right: 1px solid #afafaf;
        border-bottom: 1px solid #c9c9c9;
        -moz-box-shadow: 1px 2px 3px #b7b7b7 inset!important;
        -webkit-box-shadow: 1px 2px 3px #b7b7b7 inset!important;
        box-shadow: 1px 2px 3px #b7b7b7 inset!important;
        -webkit-appearance: none;
        background: -webkit-gradient(linear, 0 0, 0 100%, from(#fdfdfd), to(#fdfdfd));
        resize: none;
      }
    }
    .input-submit  input[type="submit"]{
      padding: 8px 20px;
      line-height: 28px;
      background: #91bd09;
      display: inline-block;
      color: #fff;
      text-decoration: none;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      position: relative;
      width: 100%;
      font-size: 20px;
      -webkit-appearance: none;
    }
  }
</style>
