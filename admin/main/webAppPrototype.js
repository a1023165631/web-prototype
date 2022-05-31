
var vm = new Vue({
  el: '#app',
  data: {
    value3:89,
    isMusicTrue: false
  },
  methods: {
    nz() {
      window.location.href = '../timeDetail.html'
    },
    hideMusicModal() {
      this.isMusicTrue = false;
    },
    showMusicModal() {
      this.isMusicTrue = true;
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
