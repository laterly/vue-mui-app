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
    
    <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab id="tab-home" md-label="全部"></md-tab>
      <md-tab id="tab-pages" md-label="最热"></md-tab>
      <md-tab id="tab-posts" md-label="最新"></md-tab>
      <md-tab id="tab-favorites" md-label="收藏"></md-tab>
    </md-tabs>
    </div>
    <div class="footerBox">
      <nav class="mui-bar mui-bar-tab" id="nav">
		<a id="tab_home" class="mui-tab-item mui-active" >
			<span class="mui-icon mui-icon-home" ></span>
			<span class="mui-tab-label">首页</span>
		</a>
		<a id="tab_message" class="mui-tab-item">
			<span class="mui-icon mui-icon-email"></span>
			<span class="mui-tab-label">消息</span>
		</a>
		<a id="tab_contact" class="mui-tab-item">
			<span class="mui-icon mui-icon-contact"></span>
			<span class="mui-tab-label">通讯录</span>
		</a>
		<a id="tab_setting" class="mui-tab-item" >
			<span class="mui-icon mui-icon-gear"></span>
			<span class="mui-tab-label">设置</span>
		</a>
	</nav>
    </div>
  </div>
</template>

<script>
import mui from "../../../static/js/mui";
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
    let tabNavHeight = document.querySelector("#headerBox").offsetHeight;
    let footerNavHeight = document.querySelector("#nav").offsetHeight;
    window.clickButton = this.clickButton;
    mui.init({
      subpages: [
        {
          url: "list.html",
          id: "list.html",
          styles: {
            top: 95 + "px", //mui标题栏默认高度为45px；
            bottom: 50 + "px" //默认为0px，可不定义；
          }
        }
      ]
    });
    var tabBtn = document.querySelectorAll(".mint-tab-item");
    console.log("btn", tabBtn);
    for (let i = 0; i < tabBtn.length; i++) {
      tabBtn[i].addEventListener("tap", function() {
        // let name=this/
        mui.openWindow({
          url: "./latest.html",
          id: "tab_latest",
          styles: {
            top: "95px", //mui标题栏默认高度为45px；
            bottom: "50px" //默认为0px，可不定义；
          },
          createNew: false,
          show: {
            autoShow: true //页面loaded事件发生后自动显示，默认为true
          },
          waiting: {
            autoShow: true, //自动显示等待框，默认为true
            title: "请稍后..." //等待对话框上显示的提示内容
          }
        });
      });
    }
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
      //  mui(".mint-tab-item").on("tap", () => {
      //    console.log(';llll');
      //   //点击触发
      //   mui.openWindow({
      //     url: "html/latest.html",
      //     id: "tab_latest",
      //     styles: {
      //       top: 95 + "px", //mui标题栏默认高度为45px；
      //       bottom: 50 + "px" //默认为0px，可不定义；
      //     },
      //     createNew: false,
      //     show: {
      //       autoShow: true, //页面loaded事件发生后自动显示，默认为true
      //     },
      //     waiting: {
      //       autoShow: true, //自动显示等待框，默认为true
      //       title: "请稍后..." //等待对话框上显示的提示内容
      //     }
      //   });
      // });
    });
  },
  methods: {
    clickButton() {
      alert("111");
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
</style>
