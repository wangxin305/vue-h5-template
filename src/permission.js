import router    from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {Dialog}  from "vant";
function getUrlAllParam(...args) {
  if (args.length === 0) return undefined
  const url = decodeURIComponent(window.location.href)
  const reg = args.length === 1
    ? new RegExp(`[&?]${args[0]}=([^&%#]+)`)
    : new RegExp(`[&?](?:${args.join('|')})=([^&%#]+)`)

  const matchArray = url.match(reg)
  if(!matchArray){
    Dialog({message:"请登录！"}).then(()=>{
      window.jianyi.directToLogin()
    })
  }else {
    window.localStorage.setItem('token',matchArray[1])
  }

  // return matchArray === null ? undefined : matchArray[1]
}

router.beforeEach(async (to,from,next)=>{
  NProgress.start()
  if (to.meta.title) {//判断是否有标题
    console.log(to.meta.title)
    document.title = to.meta.title
  }
  getUrlAllParam('token')
  next()
})
// eslint-disable-next-line no-unused-vars
router.afterEach(async to => {
  console.log(to)
  NProgress.done()
})
