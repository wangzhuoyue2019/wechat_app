// index.ts
// 获取应用实例
const app = getApp <IAppOption>()

Page({
  /*修改顶部导航栏颜色样式*/
  onLoad() {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#c24214',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  onUnload() {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#fff',
      animation: {
        duration: 400,
        timingFunc: 'easeOut'
      }
    })
  },
  /*轮播图数据*/
  data: {
    images: [
      "../../images/index/zhongyi.jpg",
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    announce: "公告数据！"
  },
  onSearch: function() { /*绑定搜索页面的信息*/
    console.log("点击了搜索页面");
  }
})
