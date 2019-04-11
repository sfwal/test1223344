// pages/games/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue:"",
    gameList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showList(e){
    //console.log(e)
    //e.target.dataset.id
    //跳转页面
    wx.navigateTo({
      url: '../gamesList/index?id=' + e.target.dataset.tid
    })
  },
  getValue(e){
    this.setData({
      searchValue:e.detail.value
    })
  },
  search(){
    wx.showLoading({
      title: '加载中',
    })
    var v = this.data.searchValue;
    wx.request({
      url: 'https://route.showapi.com/1698-3',
      data:{
        showapi_appid:"91596",
        showapi_sign:"baa800f61e234f858ee65f6670e3a9e6",
        name:v
      },
      success:res => {
        wx.hideLoading()
        var arr = [];
        for(var i=0;i<res.data.showapi_res_body.games.length;i++){
          arr.push({
            id: res.data.showapi_res_body.games[i].gameId,
            name: res.data.showapi_res_body.games[i].name,
            image:"http://placehold.it/300X300"
          })
        }
        this.setData({
          gameList:arr
        })
        console.log(this.data.gameList)
      }
    })
  }
})