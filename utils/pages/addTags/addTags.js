import {storage} from  '../../utils/common/js/storage.js';
import {util} from '../../utils/common/js/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storageKey: 'tags', //标签的key
    tagsObj: null, //标签tag数组
    selectedStyle:'border:1px solid pink;box-shadow:10px 10px 10px #f3cdc8;',//被选中后的样式
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
    var objArr = [];
    for(var i=0;i<data.length;i++){
      objArr[i]= {};
      objArr[i]["tagName"]=data[i];
      objArr[i]["selected"]=false;
    };
    this.setData({
      tagsObj:objArr
    });
  },

  //页面被销毁的时候，把selectedTags赋值给全局变量
  onUnload:function(){
    //判断哪些标签被选中
    var selectedTags=[];
    var tags = this.data.tagsObj;
    for(let i=0;i<tags.length;i++)
    {
      if(tags[i].selected===true){
        selectedTags.push(tags[i].tagName);
      }
    }
    getApp().globalData.selectedTags = selectedTags;
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  //管理标签
  manageTags:function(){
    wx.navigateTo({
      url:'/pages/manageTags/manageTags'
    });
  },

  //保存标签
  saveTags:function(){
    wx.navigateBack({
      delta:1
    });
  },

  selectedTag:function(event){
    var selectedTag = util.getDataSet(event,"tag"); //获取选中的tag
    var newobjArr = this.whichone(this.data.tagsObj,selectedTag);
    this.setData({
      tagsObj:newobjArr
    });
  },

  //判断标签中哪一个被选中
  whichone:function(objArr,tag){
    for(var i=0;i<objArr.length;i++){
      if(objArr[i].tagName===tag){
        objArr[i].selected=!objArr[i].selected;
      }
    }
    return objArr;
  }
})