<template>
  <div class="main">
  
  </div>
</template>

<script>
  import mui from '../../../static/js/mui'
  export default {
    data() {
      return {
        vPlus: null,
        vWs: null,
      }
    },
    created() {
      window.clickButton = this.clickButton;
      mui.init({
        subpages: [{
          url: 'list.html',
          id: 'list.html',
          styles: {
            top: '45px', //mui标题栏默认高度为45px；
            bottom: '0px' //默认为0px，可不定义；
          }
        }]
      })
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
        this.vWs.addEventListener('titleNViewSearchInputConfirmed', function(e) {
          alert(JSON.stringify(e));
        }, false);
      });
    },
    mounted() {
  
    },
    methods: {
      clickButton() {
        alert('111');
      },
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
