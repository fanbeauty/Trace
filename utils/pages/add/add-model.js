import {Base} from '../../utils/common/req/request.js';

class Add extends Base{
  constructor(){
    super();
  }
  
  addScenery(data,callback){
    var params = {
      url:'api/scenery',
      type:'POST',
      data:{
        username:data.username,
        name:data.name,
        address:data.address,
        longitude:data.longitude,
        latitude:data.latitude,
        vired:data.viewed,
        tags:data.tags,
        picArr:data.picArr,
        dateTime:data.dateTime
      },
      sCallback:function(res)
      {
        callback && callback(res.data);
      }
    }
    this.request(params);
  }
}