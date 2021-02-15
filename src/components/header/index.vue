<!-- Created by wangxin on 2020/11/20 -->
<template>
  <div class="header">
    <!--    <img src="~@/assets/img/logo.png" alt="" />-->
    <a
      @click="onDownload(config.download_url)"
      class="btn"
      target="_blank"
    >
      立即下载
    </a>
  </div>
</template>
<script>
export default {
  methods:{
    onDownload(url){
      var elemIF = document.createElement('iframe')
      elemIF.src = url
      elemIF.style.display = 'none'
      document.body.appendChild(elemIF)
    }
  }
}
</script>
<style scoped lang="scss">
.header{
  padding:40px 35px;
  background:#ffffff;
  display:flex;
  justify-content:space-between;
  align-items:center;
  img{
    width:358px;
    height:100px;
  }
  .btn{
    width:220px;
    height:80px;
    background:#e73535;
    color:#ffffff;
    line-height:80px;
    text-align:center;
    border-radius:40px;
    font-size:36px;
  }
}
</style>

