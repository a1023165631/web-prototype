// var nz = document.getElementById('nz');
// 		nz.onclick = function() {
// 			window.location.href = '../timeDetail.html'
// 		}
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

	// Click to display the music player modal box
  $('.yy').click(function() {
    $('.musicModal').css('display','block')
  })
  //Hide the modal box
  $('#clear').click(function() {
    $('.musicModal').css('display','none')
  })