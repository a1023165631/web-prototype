
// 公共方法
var baseUrl = 'http://b4137921y8.wicp.vip';
var host = "/api/"






/* 
*公共get请求方法
*options{
*url:请求地址
*type:请求方式
*success:成功回调
*}
*/

var tempFn=function(resp){
  if(resp.code!=0){
    alert(resp.msg)
  }else{
    option.success(resp);
  }
}
var option;
function getRequest(options) {
  option=options;
  $.get(baseUrl+host+options.url, options.data , tempFn);
  
}


function getvRequest(options) {
  option=options;
  $.get(baseUrl+host+options.url, options.data , options.success);
  
}

/* 
*公共post请求方法
*options{
*url:请求地址
*type:请求方式
*data:请求对象参数
*success:成功回调
*}
*/
function postRequest(options) {
  $.post(baseUrl+host+options.url, options.data , options.success)

}







