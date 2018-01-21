// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //图片和姓名
    avatarUrl:'',
    nickName:'',
    //精度和纬度
    latitude:0,
    longitude:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.login({
        success:function(res){
          wx.getUserInfo({
            success:function(res){
              var userInfo = res.userInfo;
              that.setData({
                avatarUrl:userInfo.avatarUrl,
                nickName:userInfo.nickName
              });
            }
          });
        }        
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.getLocation({
      success: function(res) {
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude
        });
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  chooseLocation:function(){
    wx.chooseLocation({
      success: function(res) {
        //name address
        wx.navigateTo({
          url: '/pages/add/add?name=' + res.name + '&address=' + res.address + '&longitude=' + res.longitude +'&latitude='+res.latitude,
        })
      },
    })
  },

  switchToView:function(){
    wx.navigateTo({
      url: '/pages/visited/visited',
    })
  },  

  switchToNotView: function () {
    wx.navigateTo({
      url: '/pages/visited/visited',
    })
  },

  switchToSearch:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }

})