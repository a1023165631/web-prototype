
var vm = new Vue({
  el: '#app',
  data: {
    value3:89
  },
  methods: {
    nz() {
      window.location.href = '../timeDetail.html'
    }
  }
});

  // 显示颜色模态框
  $('.showModal').click(function() {
    $('#showModal').css('display','block')
  })
  //隐藏模态框
  $('.clear').click(function() {
    $('#showModal').css('display','none')
  })
	// 显示音乐控件模态框
  $('.yy').click(function() {
    $('.musicModal').css('display','block')
  })
  //隐藏模态框
  $('#clear').click(function() {
    $('.musicModal').css('display','none')
  })