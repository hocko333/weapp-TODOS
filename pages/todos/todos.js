// pages/todos/todos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoList: [
      {id: '1', name: '吃饭', checked: true},
      {id: '2', name: '睡觉', checked: false},
      {id: '3', name: '打豆豆', checked: true},
      {id: '4', name: 'Learning Python', checked: false},
    ],
    inputVal: '',
    leftCount: 0
  },
  handleCheck(e) {
    const id = e.target.dataset.id
    let arr = this.data.todoList
    arr.some(item => {
      if (item.id == id) {
        item.checked = !item.checked
      }
    })
    this.setData({
      todoList: arr
    })
    this.getLeftCount()
  },
  handleDelete(e) {
    const id = e.target.dataset.id
    const deleteIndex = this.data.todoList.findIndex(item => item.id === id)
    let arr = this.data.todoList
    arr.splice(deleteIndex, 1)
    this.setData({
      todoList: arr
    })
    this.getLeftCount()
  },
  handleInput(e) {
    this.data.inputVal = e.detail.value
  },
  handleAdd() {
    if (!this.data.inputVal) return
    let maxObjId = 0
    if (this.data.todoList.length >= 1) {
      maxObjId = this.data.todoList.sort((a, b) => b.id - a.id)[0].id - 0
    }
    const arr = this.data.todoList
    arr.unshift({
      id: (maxObjId + 1) + '',
      name: this.data.inputVal,
      checked: false
    })
    this.setData({
      todoList: arr,
      inputVal: ''
    })
    this.getLeftCount()
  },
  toggleAll() {
    let arr = this.data.todoList
    let firstStatus = arr[0].checked
    let newArr = arr.map(item => {
      item.checked = !firstStatus
      return item
    })
    this.setData({
      todoList: newArr
    })
    this.getLeftCount()
  },
  clearComplete() {
    let arr = this.data.todoList.filter(item => !item.checked)
    this.setData({
      todoList: arr
    })
  },
  getLeftCount() {
    const leftCount = this.data.todoList.filter(item => !item.checked).length
    this.setData({ leftCount })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLeftCount()
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