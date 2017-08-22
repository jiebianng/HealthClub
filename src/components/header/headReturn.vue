<template>
  <header>
    <div class="top">
      <div class="metreturn"><a href="javascript:void (0);" @click="$router.go(-1)"><svg t="1503374250029" class="icon" style="width: .8em; height: .8em; vertical-align: middle; fill: currentcolor; overflow: hidden; font-size: 30px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2374"><path d="M806.726346 74.841926L326.345609 511.129745l478.060057 438.608499c16.244759 16.244759 16.244759 44.092918 0 60.337677-16.244759 16.244759-44.092918 16.244759-60.337677 0L233.518414 543.619263c-9.28272-9.28272-11.603399-20.886119-11.6034-32.489518 0-11.603399 2.32068-23.206799 11.6034-32.489518L744.067989 12.183569c16.244759-16.244759 44.092918-16.244759 60.337677 0 18.565439 18.565439 18.565439 44.092918 2.32068 62.658357z" p-id="2375" fill="#ffffff"></path></svg></a></div>
      <div class="mtitle">{{title}}</div>
    </div>
  </header>
</template>

<script>
  export default{
    props:['title'],
  }
</script>

<style lang="scss" scoped>
  .top{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 46px;
    display: -webkit-box;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(rgb(47, 47, 47)), color-stop(0.5, rgb(47, 47, 47)), to(rgb(25, 25, 25)));
    z-index: 999999;
    .metreturn{
      padding-top: 10px;
      padding-left: 5px;
    }
    .mtitle {
      -webkit-box-flex: 1;
      height: 46px;
      line-height: 46px;
      color: #fff;
      font-size: 18px;
      text-shadow: 0 1px 1px rgba(0,0,0,.4);
      text-align: center;
      width: 100%;
    }
  }
</style>
