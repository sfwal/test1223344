// pages/news/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    //当前页
    currentPage:1,
    //总页数
    totalpage:Number,
    //是否加载
    isLoad:true,
    //是否没有更多
    isMore:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },

  //请求数据
  getList(){
    wx.request({
      url: 'https://route.showapi.com/255-1',
      data:{
        showapi_appid:"91596",
        showapi_sign:"baa800f61e234f858ee65f6670e3a9e6",
        page:this.data.currentPage
      },
      success:res => {
        console.log(res)
        this.setData({
          isLoad:false,
          totalpage: res.data.showapi_res_body.pagebean.allPages,
          list: this.data.list.concat(res.data.showapi_res_body.pagebean.contentlist)
        })
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var page = this.data.currentPage
    if(page < this.data.totalpage){
      page ++
      this.setData({
        isLoad: true,
        currentPage:page
      })
      this.getList()
    }else{
      this.setData({
        isLoad: true,
        isMore:true
      })
    }
  }
})