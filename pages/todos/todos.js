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
    newTodos: '',
    inputVal: ''
  },
  checkboxChange(e) {
    let arr = this.data.todoList
    arr.forEach(item => {
      if (e.detail.value.includes(item.id)) {
        item.checked = true
      } else {
        item.checked = false
      }
    })
    this.setData({
      todoList: arr
    })
  },
  handleDelete(e) {
    const id = e.target.dataset.id
    const deleteIndex = this.data.todoList.findIndex(item => item.id === id)
    let arr = this.data.todoList
    arr.splice(deleteIndex, 1)
    this.setData({
      todoList: arr
    })
  },
  handleInput(e) {
    this.setData({
      newTodos: e.detail.value
    })
  },
  handleAdd() {
    if (!this.data.newTodos) return
    let maxObjId = 0
    if (this.data.todoList.length >= 1) {
      maxObjId = this.data.todoList.sort((a, b) => b.id - a.id)[0].id - 0
    }
    const arr = this.data.todoList
    arr.unshift({
      id: (maxObjId + 1) + '',
      name: this.data.newTodos,
      checked: false
    })
    this.setData({
      todoList: arr,
      inputVal: '',
      newTodos: ''
    })
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