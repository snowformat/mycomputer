<template>
   <div class="container-success-wrap">
    <!-- 顶部标题 -->
    <div class="top-title">
      <h2 class="top-title-head">蜻蜓FM x Wehotel 联合会员</h2>
      <span class="top-title-bottom">一份价格 &nbsp; 双份收益</span>
    </div>
    <!-- 内容区域 -->
     <img class="success-pic" src="../../static/images/Group2.png" alt="">
     <h2 class="recharge-success">兑换成功</h2>
     <div class="count">
         <span>蜻蜓充值账号: {{ QtAccountNum }}</span>
         <span>铂涛充值账号: {{ BtAccountNum }}</span>
     </div>
     <div class="line"></div>
     <h3>登陆“铂涛旅行”、“蜻蜓FM”，查看更多权益。</h3>
   </div>
</template>
<script>
export default {
  data () {
    return {
      QtAccountNum: '',
      BtAccountNum: ''
    }
  },
  created () {
    this.QtAccountNum = localStorage.getItem('qtvalue')
    this.BtAccountNum = localStorage.getItem('btvalue')
  }
}
</script>
<style lang="less">
</style>
