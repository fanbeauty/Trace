// pages/addPic/addPic.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    picArr: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //判断picArr是否为空,若为空，则向数组中添加一个对象
    if (this.data.picArr.length === 0) {
      var obj = { tempFilePath: '', hasUpload: false, defaultImg: true };
      var picArr = [obj];
      this.setData({
        picArr: picArr
      });
    }

  },

  uploadImage: function () {
    var that = this;
    //从本地选择照片并添加到到相框中
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        //把照片路径存入picArr中，并新增一个子对象
        //必须是得重新绑定
        var picArr = that.addToPicArr(tempFilePaths);
        that.setData({
          picArr: picArr
        });
      }
    })
  },

  //把上述封装成一个方法
  //把照片路径存入picArr中，并新增一个子对象
  addToPicArr: function (tempFilePaths) {
    var picArr = this.data.picArr;
    for (var i = 0; i < picArr.length; i++) {
      if (picArr[i].hasUpload === false) {
        picArr[i].tempFilePath = tempFilePaths;
        picArr[i].hasUpload = true;
        picArr[i].defaultImg = false;
      }
    }
    //新增子对象
    var obj = { tempFilePath: '', hasUpload: false, defaultImg: true };
    picArr.push(obj);
    return picArr;
  },

  //返回，并将图片信息传回去
  backToAdd: function () {
    //将picArr存为全局对象
    var picArr = this.data.picArr;
    picArr.pop();
    getApp().globalData.picArr = picArr;
    wx.navigateBack({
      delta: 1
    });
  }
})