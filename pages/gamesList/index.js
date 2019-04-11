// pages/gamesList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gameId:"",
    list:[],
    gameName:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      gameId: options.id
    })
    this.getList()
  },

  //查询列表
  getList(){
    wx.request({
      url: 'https://route.showapi.com/1698-1',
      data: {
        showapi_appid: "91596",
        showapi_sign: "baa800f61e234f858ee65f6670e3a9e6",
        gameId: this.data.gameId
      },
      success:res => {
        console.log(res)
        this.setData({
          gameName: res.data.showapi_res_body.name,
          list:res.data.showapi_res_body.strategyList
        })
      }
    })
  }
  
})