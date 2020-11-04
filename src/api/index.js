import { jsonp } from 'vue-jsonp'
const url = process.env.VUE_APP_JSONP_API
const obj = {callbackQuery:'jsoncallback',token:window.localStorage.getItem('token')}
//用户抽奖次数
export function fetchNum(query){
  return jsonp(url + '/index/luck_num',Object.assign(query,obj))
}
//用户抽奖
export function doLuck(query){
  return jsonp(url+'/index/luck_post',Object.assign(query,obj))
}
//用户抽奖记录
export function fetchRecord(query){
  return jsonp(url+'/index/luck_log',Object.assign(query,obj))
}
// //用户抽奖播报
export function fetchProfit(query){
  return jsonp(url+'/index/luck_profit',Object.assign(query,obj))
}
//用户每日建仓获取积分情况
export function fetchUser(query){
  return jsonp(url+'/index/chun_day_user',Object.assign(query,obj))
}
//王者争霸
export function power(query){
  return jsonp(url+'/index/power',Object.assign(query?query:{},obj))
}
//盈利
export function yl_bang(query){
  return jsonp(url+'/index/yl_bang',Object.assign(query?query:{},obj))
}
