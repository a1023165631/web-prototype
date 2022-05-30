// index 主页方法
// 实例化公共vue实例
var that;
var app = new Vue({
	el: "#layoutBox",
	data() {
		return {
			bannerlist: [], //轮播图数据
			azAddr: '', //安卓地址
			iosAddr: '', //平果地址
			addrqi: "", //710
			addrhy: "", //寰宇
			addrGh: [], //公海測速
			obj: [],
			min:"",//最小网速
			appList:[],//app链接
			kflink:"",//客服地址

		}

	},
	mounted() {
		that = this;
		this.getBannerList();
		this.getAddrLink();
		this.getIosAddr();
		this.get710Addr();
		this.gethyAddr();
		this.getGh();
		this.getDzApp();
		this.getkf()

	},
	methods: {
		// 获取轮播数据
		getBannerList() {

			getvRequest({
				url: "admin/pcRoundFigure",
				data: {
					'pageSize': 99,
					'currentPage': 1,
					'type': 2, //pc
				},
				success: function(data) {
					that.bannerlist = data.data.records;
					console.log(data)
				}

			})
		},
		// 获取安卓地址
		getAddrLink() {
			getvRequest({
				url: "admin/selectAddressPage",
				data: {
					'pageSize': 99,
					'currentPage': 1,
					'type': 2,
					'flag': 1,
					'isDefault': 1
				},
				success: function(data) {
					that.azAddr = data.data.records[0].address;
					console.log(data)
				}

			})
		},
		getIosAddr() {
			getvRequest({
				url: "admin/selectAddressPage",
				data: {
					'pageSize': 99,
					'currentPage': 1,
					'type': 2,
					'flag': 2,
					'isDefault': 1
				},
				success: function(data) {
					that.iosAddr = data.data.records[0].address;
					console.log(that.iosAddr)

				}

			})
		},
		get710Addr() {
			getvRequest({
				url: "admin/selectAddressPage",
				data: {
					'pageSize': 99,
					'currentPage': 1,
					'type': 2,
					'flag': 4,
					'isDefault': 1
				},
				success: function(data) {
					console.log(data)
					that.addrqi = data.data.records[0].address;


				}

			})
		},
		gethyAddr() {
			getvRequest({
				url: "admin/selectAddressPage",
				data: {
					'pageSize': 99,
					'currentPage': 1,
					'type': 2,
					'flag': 3,
					'isDefault': 1
				},
				success: function(data) {

					that.addrhy = data.data.records[0].address;
					console.log(data)


				}

			})
		},
		// 获取公网列表
		getGh() {
			getvRequest({
				url: "admin/selectAddressPage",
				data: {
					'pageSize': 99,
					'currentPage': 1,
					'type': 2,
					'flag': 6,
					'isDefault': 1
				},
				success: function(data) {
				
					if (data.data.records.length > 0) {
						var len = Math.ceil(data.data.records.length / 2);
						
						for (var i = 0; i < len; i++) {
							var l=data.data.records.length;
							for(var j=0;j<l;j++){
								
								if (data.data.records.length > 1) {
									that.obj.push({
										"item": data.data.records[j],
										"item2": data.data.records[j + 1]
									})
									data.data.records.shift()
									data.data.records.shift()
									j=0;
									l=data.data.records.length;
								}
								if (data.data.records.length== 1) {
									that.obj.push({
										"item": data.data.records[j]
									});
									data.data.records.shift()
									j=0;
									l=data.data.records.length;
								
								}
							}

								


						}
						console.log(that.obj)

					}

				}
			})

		},
		// 跳转到对应的链接
		toUrl(url) {
			console.log(url)
			if(url == '' && url == null) return;
			window.open(url);
		},
		// 刷新公测地址
		loadNetwork() {
			that.obj = [];
			that.getGh();
		},
		// 获取电子app接口
		getDzApp() {
			getvRequest({
				url: "admin/selectDomainManagerPage",
				data: {
					'pageSize': 99,
					'currentPage': 1,
					'type': 2,
					'isDefault': 1
				},
				success: function(data) {
					console.log(data)
					that.appList = data.data.records;


				}

			})
		},
		// 获取客服链接
		getkf() {
			getvRequest({
				url: "admin/selectAddressPage",
				data: {
					'pageSize': 99,
					'currentPage': 1,
					'type': 2,
					'isDefault': 1,
					"flag":5
				},
				success: function(data) {
					console.log(data)
					that.kflink = data.data.records[0].address;


				}

			})
		}
	}
})


$(function() {
	// 调用轮播
	$('.carousel').carousel();

	// 鼠标经过更换图片
	$('#img1').mousemove(function() {
		$("#img1").attr("src", "./images/pc/安卓选中.png");
	})

	$("#img1").mouseleave(function() {
		$("#img1").attr("src", "./images/pc/安卓下载.png");
	})

	$('#img2').mousemove(function() {
		$("#img2").attr("src", "./images/pc/苹果选中.png");
	})

	$("#img2").mouseleave(function() {
		$("#img2").attr("src", "./images/pc/苹果下载.png");
	})

	$('#img3').mousemove(function() {
		$("#img3").attr("src", "./images/pc/710选中.png");
		$("#img3").css({
			// "margin-top": "-7px",
			"margin-right": "50px"
		})
	})

	$("#img3").mouseleave(function() {
		$("#img3").attr("src", "./images/pc/710浏览器.png");
		$("#img3").css({
			// "margin-top": "-7px",
			// "margin-right":"0"


		})
	})

	$('#img4').mousemove(function() {
		$("#img4").attr("src", "./images/pc/宇浏览器选中.png");
	})

	$("#img4").mouseleave(function() {
		$("#img4").attr("src", "./images/pc/宇浏览器.png");
	})

	// 鼠标经过字体图标变大
	$('#app1').mouseenter(function() {
		$('#span1').css({
			"color": "#E6BF41"
		})
	})

	$("#app1").mouseleave(function() {
		$("#span1").css({
			"color": "#fff"
		})
	})

	$('#app2').mouseenter(function() {
		$('#span2').css({
			"color": "#E6BF41"
		})
	})

	$("#app2").mouseleave(function() {
		$("#span2").css({
			"color": "#fff"
		})
	})

	$('#app3').mouseenter(function() {
		$('#span3').css({
			"color": "#E6BF41"
		})
	})

	$("#app3").mouseleave(function() {
		$("#span3").css({
			"color": "#fff"
		})
	})

	$('#app4').mouseenter(function() {
		$('#span4').css({
			"color": "#E6BF41"
		})
	})

	$("#app4").mouseleave(function() {
		$("#span4").css({
			"color": "#fff"
		})
	})

	$('#app5').mouseenter(function() {
		$('#span5').css({
			"color": "#E6BF41"
		})
	})

	$("#app5").mouseleave(function() {
		$("#span5").css({
			"color": "#fff"
		})
	})

	$('#app6').mouseenter(function() {
		$('#span6').css({
			"color": "#E6BF41"
		})
	})

	$("#app6").mouseleave(function() {
		$("#span6").css({
			"color": "#fff"
		})
	})


	$('#slidershow').mousemove(function() {

		clearInterval(clearTime)
	})


	$('#slidershow').mouseleave(function() {
		clearTime = setInterval(function() {

			$('#slidershow>.carousel-indicators>li').attr("class", "");
			$('#slidershow>.carousel-indicators>li').eq(i).attr("class", "active");

			$('#slidershow>.carousel-inner> .item').attr("class", "item");
			$('#slidershow>.carousel-inner> .item').eq(i).toggleClass('active')
			i++;

			if (i == indicators) {
				i = 0;
			}
		}, 1000)
	})


})


// 轮播图
var switchClass = function(dom, i) {
	$('#slidershow>.carousel-indicators>li').attr("class", "")
	$(dom).toggleClass('active')

	$('#slidershow>.carousel-inner> .item').attr("class", "item")
	$('#slidershow>.carousel-inner> .item').eq(i).toggleClass('active')
}

var indicators = $('.carousel-indicators li').size();
var i = 0;
var clearTime;

// 定时轮播
clearTime = setInterval(function() {

	$('#slidershow>.carousel-indicators>li').attr("class", "");
	$('#slidershow>.carousel-indicators>li').eq(i).attr("class", "active");

	$('#slidershow>.carousel-inner> .item').attr("class", "item");
	$('#slidershow>.carousel-inner> .item').eq(i).toggleClass('active')
	i++;

	if (i == indicators) {
		i = 0;
	}
}, 1000)
