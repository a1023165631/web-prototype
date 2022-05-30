// index 主页方法



// 实例化公共vue实例
var app = new Vue({
  el:"#layoutBox",
  data: {
    msg: 'haha'
  },
  created() {
   
    postRequest({
      
      url: "admin/testPost",
      data:{id:1},
      success:function(data,status){
          console.log(data)
      }

    })
  },
  methods: {
   
  }
})