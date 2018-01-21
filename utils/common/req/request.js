import {Config} from './config.js';
class Base{
  constructor()
  {
    this.baseRestUrl = Config.baseRestUrl;
  }
  //http请求类
  request(params)
  {
    var that = this,url = this.baseRestUrl + params.url;
    wx.request({
      url: url,
      data:params.data,
      method:params.type,
      success:function(res)
      {
        params.sCallback && params.sCallback(res);
      },
      fail:function(res)
      {
        console.log(res);
      }
    });
  }
}
export {Base};