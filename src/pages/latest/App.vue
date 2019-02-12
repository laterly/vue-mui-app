<template>
  <div class="main">
    <ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in list" :key="index">
					<a class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" :src="'https:'+item.avatarNormal">
						<div class="mui-media-body mui-ellipsis">
							<span class="title-des">{{item.nodeTitle}}</span>{{item.title}}
							<p class="mui-ellipsis">{{item.member}}•{{item.lastTouched}}•最后回复来自{{item.lastReplyBy}}</p>
						</div>
					</a>
          <div class="reply-des">
            {{item.replies}}
          </div>
				</li>
			</ul>
      <div class="footer-des">
        没有更多啦...
      </div>
  </div>
</template>

<script>
  import mui from '../../../static/js/mui';
  import http from "@/libs/common/http";
  import date from "@/libs/common/date";
  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      this.getList();
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
      getList(){
         http.getJson('/api/topics/latest.json').then((res) => {
           for(let item of res){
              this.list.push({
              avatarNormal:item.member.avatar_normal,
              title:item.title,
              nodeTitle:item.node.title,
              replies:item.replies,
              lastReplyBy:item.last_reply_by,
              lastTouched:date.timestampFormat(item.last_touched),
              member:item.member.username
            })
           }
           
        }).catch((err) => {
            http.error(err);
        })
        console.log(this.list);
      },
    },
  }
</script>

<style lang="stylus" coped>
 .mui-media-body{
   font-size 14px;
   p{
      color #757575;
      font-size 12px;
   }
 }
  .mui-navigate-right{
    overflow hidden;
    img{
      border-radius 100%;
    }
  }
  .reply-des{
    position absolute;
    right 30px;
    top 24px;
    line-height: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #e5e5e5;
    padding: 2px 10px 2px 10px;
    border-radius: 12px;
    font-size 12px;
  }
  .title-des{
    background-color: #f5f5f5;
    font-size: 12px;
    line-height: 12px;
    display: inline-block;
    padding: 2px 4px 2px 4px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    text-decoration: none;
    color: #999;
  }
  .footer-des{
    text-align:center;
    margin:10px;
    color:#ccc;
    font-size 14px;
  }
</style>
