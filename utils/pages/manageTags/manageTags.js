import {storage} from '../../utils/common/js/storage.js';
import {util} from '../../utils/common/js/util.js';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    storageKey: 'tags', //标签的key
    tagsArr: [], //标签tag数组
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
    //从缓存中读取数据
    var data = storage.getData(this.data.storageKey);
    if (data.length !== 0) {
      this.setData({
        tagsArr: data
      });
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  createTag:function(){
    wx.navigateTo({
      url: '/pages/newTags/newTags?tagsArr='+this.data.tagsArr+'&from=createNew',
    })
  },

  manageTag:function(event){
    var tag = util.getDataSet(event,'tag');
    wx.navigateTo({
      url: '/pages/newTags/newTags?tagsArr='+this.data.tagsArr+'&selectedTag='+tag+'&from=posibleDeleteTag',
    })
  }

















})  