// pages/A/A.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StorageSync:"", //本地存储的值StorageSync 
    setStorage:"" //本地存储的值setStorage
  },

  // 跳转到c页面
  goc() {
    wx.navigateTo({
      url: '/pages/c/c',
    })
  },
  // 存储SetorageSync的值
  SetorageSync(){
    wx.setStorageSync('key', "AAAA")
  },
  // 读取SetorageSync的值
  GettorageSync() {
    this.setData({
      StorageSync : wx.getStorageSync('key')
    })
  },
  //存储SetStorage的值
  SetStorage(){
    wx.setStorage({
      key: "keys",
      data: "aaa"
    })
  },
  //读取SetStorage的值
  GetStorage () {
    var that = this
    wx.getStorage({
      key: 'keys',
      success(res) {
        that.setData({
          setStorage:res.data
        })
      }
    })
  },
  // 清除本地缓存的值
  clear() {
    wx.clearStorage("key")
    wx.removeStorage({
      key: 'keys',
      success(res) {
        console.log(res)
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   
   
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