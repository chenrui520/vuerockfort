<template>
  <div id="footer">
    <div class="logo">
      <img class="logoImg" src="../images/footerLogo.png" alt="logo" />
      <img class="logoText" src="../images/footerText.png" alt="logo" />
    </div>
    <ul class="nav">
      <h3>快速导航</h3>
      <router-link to="/">首页</router-link>
      <router-link to="/Introduction">集团介绍</router-link>
      <router-link to="/Understand">为什么选择ROCKFOTRT？</router-link>
      <router-link to="/Supervision">监管与安全</router-link>
      <router-link to="/produck">公司产品</router-link>
      <router-link to="/SoftwareDownload">交易软件</router-link>
    </ul>
    <div class="record">
      <h3>京ICP备15047750号-1</h3>
      <p>风险警示： 交易外汇和杠杆化金融品种具有高风险，可能导致您损失本金。您所承担的亏损风险不应超过您的承受能力，请确保您完全理解其中所涉风险。交易杠杆化产品并不适合所有投资者。在交易前，请考虑您的经验水平、投资目标，如有必要请寻求独立财务建议。</p>
    </div>
  </div>
</template>

<style lang="scss">
#footer {
  width: 100%;
  //   height: 455px;
  padding-top: 4.76rem;
  padding-bottom: 2.341rem;
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0%;
  background: url("../images/headerBg.png");
  background-size: cover;
  justify-content: space-around;
  .logo {
    width: 10%;
    height: 11.294rem;
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
    .logoText {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .nav {
    position: relative;
    width: 14.13%;
    height: 11.294rem;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      position: absolute;
      left: 0;
      top: -3.026rem;
      color: #fff;
      font-size: 1.21rem;
    }
    a {
      color: #ffffff;
      text-decoration: none;
      text-align: left;
      font-size: 1rem;
    }
  }
  .record {
    width: 55.05%;
    height: 11.294rem;
    color: #fff;
    position: relative;
    h3 {
      text-align: center;
      margin-top: 4.519rem;
      font-size: 0.807rem;
    }
    p {
      margin-top: 3.793rem;
      font-size: 0.645rem;
      text-align: left;
      line-height: 2.5em;
      position: absolute;
      bottom: 0;
    }
  }
}
</style>
<script>
export default {
  name: "foot"
};
</script>