// index home page method
// Instantiate the public vue instance
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