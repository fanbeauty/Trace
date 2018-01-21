var storage = {
  //存储
  save: function (key, data, value) {
    data.push(value); //将新数据放入数组中
    data.reverse(); //翻转一下数组
    wx.setStorageSync(key, data);
  },
  //删除一个数据
  remove: function (key, data, value) {
    var newData = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i] != value) {
        newData.push(data[i]);
      } else {
        continue;
      }
    }
    //删除之前调用一个modal
    wx.showModal({
      title: '^_^',
      content: '是否要删除人家？',
      success: function (res) {
        if (res.confirm) {
          wx.setStorageSync(key, newData);
        }
      }
    });
  },

  //修改已有的数据
  change: function (key, arr, value, newVal) {
    var index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        index = i;
      }
    }
    arr[index] = newVal;
    wx.setStorageSync(key, arr);
  },
  //清除指定key的缓存
  clear: function (key) {
    wx.removeStorageSync(key);
  },
  //判断数据是否在缓存中
  exsits: function (key, value) {
    //先根据key在缓存中取得数据
    var data = wx.getStorageSync(key);
    console.log(data);
    if (data.length !== 0) {
      for (let i = 0; i < data.length; i++)
        if (data[i] == value) {
          return true;
        }
    }
    return false;
  },
  //从缓存中读取数据
  getData: function (key) {
    return wx.getStorageSync(key);
  },
  //用户交互
  showModal: function () {
  }
};
export { storage };