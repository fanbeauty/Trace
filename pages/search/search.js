import { storage } from '../../utils/common/js/storage.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storageKey:'tags',
    banner: ["https://www.huany.top/LuJi/banner/wallhaven.jpg",
    "https://www.huany.top/LuJi/banner/huan1.jpg",
    "https://www.huany.top/LuJi/banner/huan3.jpeg"],
    tagSrc: ["https://www.huany.top/LuJi/cat.jpg",
    "https://www.huany.top/LuJi/batterfly.jpg",
    "https://www.huany.top/LuJi/blackfox.jpg",
    "https://www.huany.top/LuJi/dophy.jpg",
    "https://www.huany.top/LuJi/huan.jpg",
    "https://www.huany.top/LuJi/panda.jpg",
    "https://www.huany.top/LuJi/fox.jpg",
    "https://www.huany.top/LuJi/que.png",
    "https://www.huany.top/LuJi/lujiao.jpg",
    "https://www.huany.top/LuJi/vae.jpg",
    "https://www.huany.top/LuJi/lu.jpg"],
    tagArr:[]
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
    var data = storage.getData(this.data.storageKey);
    this.bindTags(data);
  },

  bindTags:function(tags)
  {
    if (tags.length==0)
    {
      return [];
    }
    var tagArr = [];
    for(let tag of tags)
    {
        let index = this.getRand();
        let item = {"src":this.data.tagSrc[index],"text":tag};
        tagArr.push(item);
    }

    this.setData({
      tagArr: tagArr
    });

  },

  getRand:function()
  {
    return parseInt(Math.random() * 10)
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
  
  }
})