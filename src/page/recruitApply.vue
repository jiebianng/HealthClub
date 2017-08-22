<template>
  <div>
    <alert-mup alert-mup-type="recruit"></alert-mup>
    <div class="sb_box">
      <div class="aboutEditor">
        <div class="metinfo_mobile_form">
          <form>
            <input type="hidden" name="lang" value="cn">
            <ul>
              <li class="select">
                <div class="xbox">
                  <span class="name">应聘职位</span>
                  <select name="jobid"><option value="1">会籍顾问</option><option value="2">私人教练</option><option value="3">健身顾问(销售)</option><option value="4">前台接待</option><option value="5">前台水吧</option><option value="6">健美操教练</option><option value="7">瑜伽教练</option><option value="8">舞蹈教练</option></select>
                </div>
              </li>
              <li class="input ">
                <span class="info"></span>
                <div class="xbox"><input name="para1" type="text" class="input-text " placeholder="姓名"></div>
              </li>
              <li class="input ">
                <span class="info"></span>
                <div class="xbox"><input name="para2" type="text" class="input-text " placeholder="性别"></div>
              </li>
              <li class="input ">
                <span class="info"></span>
                <div class="xbox"><input name="para3" type="text" class="input-text " placeholder="年龄"></div>
              </li>
              <li class="input ">
                <span class="info"></span>
                <div class="xbox"><input name="para4" type="text" class="input-text " placeholder="学历"></div>
              </li>
              <li class="input ">
                <span class="info"></span>
                <div class="xbox"><input name="para5" type="text" class="input-text " placeholder="手机号码"></div>
              </li>
              <li class="input ">
                <span class="info"></span>
                <div class="xbox"><input name="para6" type="text" class="input-text " placeholder="电子邮箱"></div>
              </li>
              <li class="input ">
                <span class="info"></span>
                <div class="xbox"><input name="para7" type="text" class="input-text " placeholder="工作年限"></div>
              </li>
              <li class="textarea ">
                <span class="info"></span>
                <div class="xbox"><textarea name="para8" class="textarea-text" placeholder="工作经验"></textarea></div>
              </li>
              <li class="textarea ">
                <span class="info"></span>
                <div class="xbox"><textarea name="para9" class="textarea-text" placeholder="自我介绍"></textarea></div>
              </li>
            </ul>
            <div class="input-submit"><input type="submit" name="Submit" value="提交信息"></div>
          </form>
        </div>
      </div>
    </div>
    <foot-Bot></foot-Bot>
  </div>
</template>

<script>
  import footBot from "../components/footer/foot.vue"
  import alertMup from "../components/common/alertMup.vue"
  import {recruit} from '../service/getData'
  export default{
    components:{
      footBot,
      alertMup
    }
  }
</script>

<style lang="scss">
  .metinfo_mobile_form{
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
