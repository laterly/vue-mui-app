<template>
  <div class="main">
    <div class='mui-scroll-wrapper'>
      <div class='mui-scroll'>
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>用户名</label>
            <input type="text" class="mui-input-clear" placeholder="请输入用户名">
          </div>
          <div class="mui-input-row">
            <label>密码</label>
            <input type="password" class="mui-input-password" placeholder="请输入密码">
          </div>
          <div class="mui-button-row">
            <button type="button" class="mui-btn mui-btn-primary">确认</button>
            <button type="button" class="mui-btn mui-btn-danger" id="submit">取消</button>
          </div>
          <mt-button size="small">small</mt-button>
          <mt-button size="large">large</mt-button>
          <mt-button size="normal">normal</mt-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import mui from '../../../static/js/mui'
  export default {
    data() {
      return {
        msg: "zzz"
      }
    },
    created() {
      console.log('vue', mui);
    },
    mounted() {
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators: false //是否显示滚动条
      });
      mui.plusReady(function() {
        console.log("当前页面URL：" + plus.webview.currentWebview().getURL());
      });
      var btn = document.getElementById("submit");
      //监听点击事件
      btn.addEventListener("tap", function() {
        // mui.openWindow({
        //   url: './index.html',
        //   extras: {
        //     name: 'mui' //扩展参数
        //   }
        // });
      });
      //触发submit按钮的点击事件
      mui.trigger(btn, 'tap');
    },
    methods: {
  
    },
  }
</script>

<style lang="stylus" coped>
  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    backgroud:red!important;
  }
  
  #div-iframe {
    width: 100%;
    height: calc(99vh - 60px);
  }
</style>
