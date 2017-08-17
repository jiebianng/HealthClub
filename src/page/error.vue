<template>
    <div style="position: fixed;top: 0;left: 0;background-color: #fff;width: 100%;height:100%;z-index: 99999999;text-align: center;">
      <div style="display: table;width: 100%;height: 100%;">
        <div style="display: table-cell;vertical-align: middle;">
          <div style="text-align: left;display: inline-block;">
            <p class="p1">404</p>
            <p class="p2">你所访问的页面不知去向了！</p>
            <ul class="ul">
              <li>此站点暂时不可用或者太忙</li>
              <li>如果你无法载入任何页面，请检查您计算机的网络连接</li>
            </ul>
            <p class="p3"><a href="/">首页</a><a href="javascript:void (0)" @click="$router.go(-1)">返回</a></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  .ul{
    color: #c3c3c3;
    font-size: 12px;
    line-height: 20px;
  }
  .ul li{
    padding: 0 6px;
  }
  .p1{
    font-size: 56px;
    text-align: center;
    font-family: cursive;
    font-weight: bold;
    line-height: 100px;
    letter-spacing: 5px;
    color: #fff;
    text-shadow: 0px 0px 2px #ff9900,
    0px 1px 1px #ff9900,
    0px 2px 1px #ff9900,
    0px 3px 1px #ff9900,
    0px 4px 1px #ff9900,
    0px 5px 1px #ff9900,
    0px 6px 1px #ff9900,
    0px 7px 1px #ff9900,
    0px 8px 3px rgba(255, 153, 0, 0.4),
    0px 9px 5px rgba(255, 153, 0, 0.1),
    0px 10px 7px rgba(255, 153, 0, 0.15),
    0px 11px 9px rgba(255, 153, 0, 0.2),
    0px 12px 11px rgba(255, 153, 0, 0.25),
    0px 13px 15px rgba(255, 153, 0, 0.3);
  }
  .p2{
    color: #ff9900;
    text-align: center;
    margin-bottom: 20px;
    font-family: cursive;
    text-shadow: 0 1px 0 rgba(255, 153, 0, 0.53);
    letter-spacing: 1px;
  }
  .p3{
    font-size: 14px;text-align: center;margin-top: 20px;
  }
  .p3 a{
    font-size: 16px;
    color: #0099ff;
    text-decoration: none;
    margin:0 20px;
  }
</style>
