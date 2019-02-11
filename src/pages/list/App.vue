<template>
  <div class="main">
    
  </div>
</template>

<script>
  import mui from '../../../static/js/mui';
  import http from "@/libs/common/http";
  export default {
    data() {
      return {
        msg: "zzz"
      }
    },
    created() {
      console.log('vue', mui);
      http.getJson('/api/topics/latest.json').then((res) => {
            alert(JSON.stringify(res));
            let data = res;
            isRequest=true;
            topic.innerHTML = htmlData(data);
            
        }).catch((err) => {
            // api.toast({
            //     msg: '接口错误'
            // });
            
            // http.error(err);
        })
    },
    mounted() {
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators: false //是否显示滚动条
      });
      mui.plusReady(function() {
        console.log("当前页面URL：" + plus.webview.currentWebview().getURL());
      });
      // var btn = document.getElementById("submit");
      // //监听点击事件
      // btn.addEventListener("tap", function() {
      //   mui.openWindow({
      //     url: './index.html',
      //     extras: {
      //       name: 'mui' //扩展参数
      //     }
      //   });
      // });
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
