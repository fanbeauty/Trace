import { util } from '../../utils/common/js/util.js';
// import { Add } from './add-model.js';
// var add = new Add();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    address: '',
    longitude: 0,
    latitude: 0,
    items: [
      { name: 'view', value: '已看过', checked: true },
      { name: 'notView', value: '未看过' }
    ],
    tags: [], //路迹标签
    picArr: [], //已选图片
    dateTime: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //绑定位置和时间
    var dateTime = this.getDateTime();
    this.setData({
      name: options.name,
      address: options.address,
      longitude: options.longitude,
      latitude: options.latitude,
      dateTime: dateTime
    });
  },

  getDateTime: function () {
    var date = new Date();
    return date.toLocaleDateString().split('/').join('-') + ' ' + date.toTimeString().split(' ').shift();
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
    var tags = getApp().globalData.selectedTags;
    var pics = getApp().globalData.picArr;
    if (tags.length !== 0) {
      this.setData({
        tags: tags
      })
    }
    if (pics.length !== 0) {
      this.setData({
        picArr: pics
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  selectTags: function () {
    wx.navigateTo({
      url: '/pages/addTags/addTags'
    });
  },

  uploadImage: function () {
    wx.navigateTo({
      url: '/pages/addPic/addPic'
    });
  },

  //预览图片
  previewImage: function (event) {
    var tempFilePath = util.getDataSet(event, "tempfilepath");
    var tempFilePaths = this.selectedFilePath();
    wx.previewImage({
      current: tempFilePath,
      urls: tempFilePaths
    });
  },

  //将已选图片链接放入一个数组中
  selectedFilePath: function () {
    var tempFilePaths = this.data.picArr;
    var temp = [];
    for (let i = 0; i < tempFilePaths.length; i++) {
      temp.push(tempFilePaths[i]['tempFilePath'][0]);
    }
    return temp;
  },

  saveScenery:function(){
    var data = {
      name: this.data.name,
      address: this.data.address,
      longitude: this.data.longitude,
      latitude: this.data.latitude,
      viewed:0,
      tags:this.data.tags,
      picArr:this.data.picArr,
      dateTime:this.data.dateTime,
    };

    console.log(data);
                
    // add.addScenery(data,(res)=>{
    //   console.log(res);
    // });
  }

})