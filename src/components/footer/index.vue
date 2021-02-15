<!-- Created by wangxin on 2020/11/20 -->
<template>
  <div class="footer">
    <p>{{ config.copy_right }}</p>
    <p>{{ config.icp }}</p>
    <p>{{ config.tip }}</p>
    <p>
      <a
        :href="config.beian_url"
        target="_blank"
      >
        <img
          src="~@/assets/img/gwab.png"
        >
        <span>{{ config.beian }}</span>
      </a>
    </p>
  </div>
</template>
<style scoped lang="scss">
.footer{
  text-align:center;
  padding-bottom:40px;
  p{
    color:#ffffff;
    font-size:24px;
    line-height:36px;
    a{
      color:#ffffff;
      display:flex;
      align-items:center;
      justify-content:center;
    }
    img{
      width:27px;
      height:30px;
      margin-right:10px;
    }
  }
}
</style>
