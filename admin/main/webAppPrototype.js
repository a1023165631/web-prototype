
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

  // Display color modal box
  $('.showModal').click(function() {
    $('#showModal').css('display','block')
  })
  //Hide the modal box
  $('.clear').click(function() {
    $('#showModal').css('display','none')
  })
