
// Public methods
var baseUrl = 'http://b4137921y8.wicp.vip';
var host = "/api/"






/* 
* Public GET request methods
*options{
* URL: request address
*type: request mode
* SUCCESS: successful callback
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
* Public POST request method
*options{
* URL: request address
*type: request mode
*data: request object parameters
* SUCCESS: successful callback
*}
*/
function postRequest(options) {
  $.post(baseUrl+host+options.url, options.data , options.success)

}







