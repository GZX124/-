// pages/c/c.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StorageSync:"", //本地存储的值StorageSync 
    setStorage:"" //本地存储的值setStorage
  },
clear(){
  wx.clearStorage("key")
  wx.removeStorage({
    key: 'keys',
    success (res) {
      console.log(res)
    }
  })
  
},
goa(){
  wx.navigateTo({
    url: '/pages/A/A',
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  //读取setStorage的值
  onLoad(options) {
    var that = this
    wx.getStorage({
      key: 'keys',
      success(res) {
        that.setData({
          setStorage:res.data,
        })
        console.log(that.data.setStorage);
      }
    })
    this.setData({
      StorageSync : wx.getStorageSync('key')
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})