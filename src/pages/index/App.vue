<template>
  <div class="main">
    <div id="headerBox">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
      <h1 class="mui-title">
      <div class="mui-input-row mui-search">
        <input type="search" class="mui-input-clear" placeholder="搜索" disabled>
      </div>
      </h1>
      <a class="mui-icon mui-action-menu mui-icon-more mui-pull-right"></a>
    </header>
    
    <md-tabs class="md-transparent" md-alignment="fixed" id="headerTab">
      <md-tab id="tab-pages" md-label="最热" @click="openWindow(1)"></md-tab>
      <md-tab id="tab-posts" md-label="最新" @click="openWindow(2)"></md-tab>
    </md-tabs>
    </div>
    <div class="footerBox">
      <md-bottom-bar md-type="shift">
        <md-bottom-bar-item id="bottom-bar-item-home" md-label="首页" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-pages" md-label="节点" md-icon="pages"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-favorites" md-label="收藏" md-icon="favorites"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
import mui from "../../../static/js/mui";
import query from "@/libs/common/query";
export default {
  data() {
    return {
      vPlus: null,
      vWs: null,
      selected: "2"
    };
  },
  created() {},
  mounted() {
    // let tabNavHeight = document.querySelector("#headerBox").offsetHeight;
    // let footerNavHeight = document.querySelector("#nav").offsetHeight;
    window.clickButton = this.clickButton;
    mui.init({
      subpages: [
        {
          url: "list.html",
          id: "list.html",
          styles: {
            top: 95 + "px", //mui标题栏默认高度为45px；
            bottom: 60 + "px" //默认为0px，可不定义；
          }
        }
      ]
    });
    
      
        // let name=this/
       
    
    //监听点击事件
    // btn.addEventListener("tap", function() {
    //     console.log("tap event trigger211");
    // });
    mui.plusReady(() => {
      this.vPlus = plus;
      this.vWs = plus.webview.currentWebview();
      let _self = this.vWs;
      let nav = _self.getNavigationbar();
      nav.interceptTouchEvent(true);
      nav.addEventListener("click", function(e) {
        console.log(e.clientX);
        alert(JSON.stringify(e));
      });
      this.vWs.addEventListener(
        "titleNViewSearchInputConfirmed",
        function(e) {
          alert(JSON.stringify(e));
        },
        false
      );
     
    });
  },
  methods: {
    clickButton() {
      alert("111");
    },
    openWindow(num){
      const windowMap={
        1:()=>{
          mui.back(); 
        },
        2:()=>{
            mui.openWindow({
          url: "./latest.html",
          id: "tab_latest",
          styles: {
            top: 95 + "px", //mui标题栏默认高度为45px；
            bottom: 50 + "px" //默认为0px，可不定义；
          },
          createNew: false,
          show: {
            autoShow: true, //页面loaded事件发生后自动显示，默认为true
          },
          waiting: {
            autoShow: true, //自动显示等待框，默认为true
            title: "请稍后..." //等待对话框上显示的提示内容
          }
        });
        }
      }
      windowMap[num||2]();
    }
  }
};
</script>

<style lang="stylus" coped>
#headerBox {
  .mui-bar {
    position: inherit !important;
    background-color: #007aff !important;
  }

  .mui-icon {
    color: #fff;
  }

  input[type='search'] {
    background: rgba(0, 0, 0, 0.5);
  }

  .mui-search .mui-placeholder {
    top: 8px !important;
    color: #fff !important;
    font-size: 14px !important;
  }
  .md-tabs{
    background #fff;
  }
}
.footerBox {
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    border: 1px solid rgba(#000, .26);
    background: rgba(#000, .06);
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
