<template>
  <div v-if="Switch" class="Introduction">
    <div class="Mask">
      <h3>ROCKFORT集团介绍</h3>
      <p>Rockfort由纳斯达克上市公司股东等组成的数位投资人共同出资的一个品牌。岩石Rock反映了我们坚实的基础，堡垒Fort代表我们的承诺。Rockfort承诺提供全球投资者，交易员坚实稳定的交易服务，交易产品，交易系统，交易安全</p>
      <p>Forex起源于70年代银行同业市场的建立，国际贸易从浮动汇率转为浮动汇率。全球交易量约在6万亿/天。依靠互联网的成长，外汇交易通过电脑终端和全球的外汇市场的交替形成了24 X 5循环的一个市场。成为一种投资工具和方法。随着投资者需求的多样化和交易的增长，打造一个对投资人真正平等的、优惠的、便捷的金融服务体系，是投资人对Rockfort品牌的初旨和不变的本心</p>
      <p>Rockfort专注于在线金融社区、分布式大数据仓库、AI风控引擎等多个Fintech技术平台，广泛应用于电商推荐、风控、智能资产管理等多个领域。采用最新的技术包括了持续集成（Continuous Integration-CI）和持续部署（Continuous Deployment-CD），使自动化部署系统和服务器配置管理相匹配，以确保平台在构建质量上与业务的发展相辅相成，以确保服务体系和执行体系的双重质量保障</p>
      <p>Rockfort集团在全球设有不同办事处，专业优秀的团队对投资者的行业领域提供专业的指导和服务。现投资者遍布全球60多个国家和地区</p>
      <p
      >Rockfort投资人携创始人团队，在投资场景、资产组合/运作、金融衍生品领域全面合作，全力打造稳固、开放、共赢行业科技金融生态，为全球投资者创建一个平等的、优惠的、便捷的金融衍生品交易环境和体系</p>
    </div>
  </div>
  <div v-else class="Introduction">
    <div class="Mask">
      <h3>ROCKFORT Group Introduction</h3>
      <p>Rockfort is a brand jointly funded by several investors, including shareholders of NASDAQ listed companies. Rock reflects our solid foundation, and Fort Fort represents our commitment. Rockfort is committed to providing solid and stable trading services, trading products, trading systems, and trading security for global investors and traders</p>
      <p>Forex originated from the establishment of the interbank market in the 1970s, and international trade changed from floating exchange rate to floating exchange rate. Global transaction volume is about 6 trillion/day. Relying on the growth of the Internet, foreign exchange transactions have formed a market of 24 X 5 cycles through the alternation of computer terminals and the global foreign exchange market. Become an investment tool and method. With the diversification of investor needs and the growth of transactions, creating a truly equal, preferential and convenient financial service system for investors is the original purpose and unchanged heart of the Rockfort brand for investors.</p>
      <p>Rockfort focuses on multiple Fintech technology platforms such as online financial communities, distributed big data warehouses, AI risk control engines, etc., and is widely used in e-commerce recommendation, risk control, intelligent asset management and other fields. Adopting the latest technologies including Continuous Integration (CI) and Continuous Deployment (CD) to match the automated deployment system and server configuration management to ensure that the platform build quality and business development complement each other to ensure Dual quality assurance of service system and execution system</p>
      <p>Rockfort Group has different offices around the world, and professional and excellent teams provide professional guidance and services to investors in the industry. Investors are present in more than 60 countries and regions around the world</p>
      <p>Rockfort investors and the founder team cooperate fully in the fields of investment scenarios, asset portfolio/operations, and financial derivatives, and strive to create a stable, open, and win-win industry technology and financial ecology, creating an equal, preferential, and convenient for global investors. Financial derivatives trading environment and system</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Introduction",
  data(){
    return{
      Switch:true
    }
  }, computed: {
    getSwitch() {
      return this.$store.state.Switch;
    }
  },
  watch: {
    getSwitch(val) {
      console.log(this.$store.state.Switch);
      this.Switch = val;
    }
  },
  created(){
    this.Switch = this.$store.state.Switch;

  }
};
</script>
<style lang="scss">
.Introduction {
  background: url("../images/IntroductionBg.png");
  background-size: cover;
  background-position-y: center;
  height: 58.8rem;
  padding: 1px;
  .Mask {
    background: url("../images/circle.png");
    background-size: cover;
    width: 68.32rem;
    height: 43.99rem;
    margin: 0 auto;
    margin-top: 5.73rem;
    padding: 1px;
    color: #fff;
    h3 {
      font-size: 1.775rem;
      margin-top: 3.35rem;
      margin-bottom: 2rem;
    }
    p {
      text-align: left;
      font-size: 1.02rem;
      line-height: 2em;
      width: 59.44rem;
      margin: 0 auto;
      margin-top: 2.18rem;
    }
    .p {
      text-align: left;
      width: 54.48rem;
    }
  }
}
</style>