
var vm = new Vue({
  el: '#app',
  data: {
    value2:89,
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
    },
    toHome() {
      window.location.href = './main.html'
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
