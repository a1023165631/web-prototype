// index home page method
// Instantiate the public vue instance
var that;
var app = new Vue({
	el: "#layoutBox",
	data() {
		return {
			isLoginModal: false

		}

	},
	mounted() {
		that = this;
		


	},
	methods: {
		showLoginModal() {
		this.isLoginModal = true;
		},
		clearLoginModal() {
			this.isLoginModal = false;
		},
		toMain() {
			window.location.href = './admin/main/main.html'
		}
	}
})

