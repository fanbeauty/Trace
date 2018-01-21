var util = {
  //從event中獲取數據
  getDataSet:function(event,key)
  {
    return event.currentTarget.dataset[key];
  }
}
export {util};