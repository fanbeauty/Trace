// var storage = require('../../utils/common/js/storage.js');
import { storage } from '../../utils/common/js/storage.js';
import { util } from '../../utils/common/js/util.js';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    storageKey: 'tags', //标签的key
    tagsArr: [], //标签tag数组
    flag: 1,  //1 衹是創建標簽 2.可能會刪除標簽,
    selectedTag: '',  //如果from=posibleDeleteTag,如要接受一個參數
    inputValue:'' //获取用户在前端输入的值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var posible = options.from;
    if (posible === 'createNew') {
      var flag = 1;
    } else if (posible === 'posibleDeleteTag') {
      var flag = 2;
      var selectedTag = options.selectedTag;
      this.setData({
        selectedTag: selectedTag
      })
    }
    this.setData({
      flag: flag
    });
    if (options.tagsArr) {
      this.setData({
        tagsArr: options.tagsArr.split(",")
      })
    }
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

  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  formSave: function (event) {
    //这里有两种情况，修改原有标签，或新增标签  //this.data.flag=1 只能是新增标签 =2 只能有修改标签
    var tag = event.detail.value.tag; //取得数据tag
    //如果標簽爲空
    if (tag === '') {
      this.showToast('不能為空哦', '../../images/notice.png');
      return;
    }
    if(this.data.flag===1){
      if (storage.exsits(this.data.storageKey, tag)) //判断数据是否已在缓存中
      {
        this.showToast('人家已经有了哦', '../../images/danger.png');
      } else {
        storage.save(this.data.storageKey, this.data.tagsArr, tag); //把数据放入缓存
        this.showToast('添加标签成功', '../../images/success.png'); //弹窗
        setTimeout(function(){
          wx.navigateBack({
            delta: 1
          })
        },1000);
      }
    } else if (this.data.flag === 2){
      storage.change(this.data.storageKey, this.data.tagsArr, this.data.selectedTag, this.data.inputValue);
    }

    

  },
  deleteTag:function(event){
    var tag = util.getDataSet(event,'tag');
    //如果標簽爲空
    if (tag === '') {
      this.showToast('不能為空哦', '../../images/notice.png');
      return;
    }
    if (!storage.exsits(this.data.storageKey, tag)) {   //判断数据是否已在缓存中
      this.showToast('刪除了不存在標簽', '../../images/error.png');
    }else{
      storage.remove(this.data.storageKey, this.data.tagsArr, tag);
      setTimeout(function () {
        wx.navigateBack({
          delta: 1
        })
      }, 1000);
    }
  },


  //弹窗，显示添加标签成功
  showToast: function (title, imageUrl) {
    wx.showToast({
      title: title,
      image: imageUrl,
      duration: 2000
    });
  },

  getUserInput:function(event){
    this.setData({
      inputValue:event.detail.value
    });
  }

})