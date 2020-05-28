<template>
  <div class="Understand">
    <div class="contBg">
      <div class="box" v-if="primary===1||!primary"> 
        <div class="title">什么是差价合约交易？</div>
        <p class="content">差价合约(CFD) 是衍生品交易的一种形式，可以通过预测股票、股指、外汇和债券等迅速变化的全球金融市场（或产品）价格涨跌，通过买卖差价合约，从而赚取潜在的净利润。差价合约(CFD)交易无需买入或卖出股票、货币或期货，即可参与股权、外汇、指数和大宗商品市场交易。</p>
        <div class="title">什么是差价合约交易？</div>
        <h3 class="subtitle">优势1 &nbsp;&nbsp;可以进行保证金交易</h3>
        <p class="content">通过差价合约可以交易远远大于标准交易的仓位。这是由于差价合约(CFD)提供杠杆，无需支付全部金额，即可协议交易某项更大额资产。这意味着以较少的初始资金占有较多的市场份额。换而言之，投资者只需充值交易总额的所需保证金，剩余资金将由经纪商提供</p>
        <h3 class="subtitle">优势2 &nbsp;&nbsp;牛市熊市都是投资机会</h3>
        <p class="content">在上升及下跌市场均可交易：认为价格会下跌，可以做空（卖出）；如果认为价格会上涨，可以做多（买入）。也可以使用差价合约来对冲现有的实货投资组合。</p>
        <h3 class="subtitle">优势3 &nbsp;&nbsp;可以进行风险对冲</h3>
        <p class="content">使用差价合约可以对冲风险其他未平仓投资资产。如果认为投资组合中的某项资产可能出现价值下跌，可做空差价合约，抵消部分潜在损失。<br/>
除了CFD差价合约本身之外，差价合约交易还涉及更多内容。</p>
        <h3 class="subtitle">优势4 &nbsp;&nbsp;低门槛接入多个金融市场</h3>
        <p class="content">Rockfort提供的差价合约交易，涵盖了股票、指数、货币、大宗商品、加密货币等一系列全球的金融市场。种类繁多，包括一些较难进入的市场，如：纳斯达克交易所，纽交所，港交所，伦敦交易所，澳大利亚交易所等市场。</p>
        <h3 class="subtitle">优势5 &nbsp;&nbsp;所有操作只需在一个平台上进行</h3>
        <p class="content">通过差价合约交易，投资者只需在Rockfort开户，就可以轻松以股票、大宗商品、指数、外汇和加密货币的价格变化进行交易。一个平台，一应俱全。</p>
      </div>>
    </div>
  </div>
</template>
<script src="https://www.rfmhub.com/cn/api/get_recent_posts/"/>
<script>
export default {
  name: "detail",
  components: {},
  data() {
    return {
      datas: [],
      primary:0
    };
  },
  computed:{
    getPrimary(){
      return this.$store.state.primary
    }
  },
  watch:{
    getPrimary(val) {
      this.primary = val
    }
  },
  created() {},
  methods: {
    jump(id) {
      this.$router.push({ path: "/Detail", query: { id } });
    }
  }
};
</script>
<style lang="scss">
$borColor: rgba(255, 255, 255, 0.1);
.Understand {
  color: #000;
  text-align: left;
  .contBg {
    padding: 1px;
    background: url("../images/Understand.png") no-repeat;
    background-size: cover;
    padding-bottom: 1.937rem;
    min-height: 100vh;
    .box{
      width: 60%;
      padding:1.8rem 0.5rem;
      border-radius: 2rem;
      background: #fff;
      margin: 0 auto;
      margin-top: 3rem;
      .title{
        color: #fff;
        font-size: 1.14rem;
        border-radius: 2rem;
        padding: 2px 0.5rem;
        background: #4f565f;
        margin-bottom: 1.72rem;
        display: inline-block;
      }
      .subtitle{
        color: #3797fe;
        margin-bottom: 2.11rem;
        font-size: 1rem;
      }
      .content{
        color:#333d47;
        font-size: 0.9rem;
        line-height: 1.5em;
        margin-bottom: 2.11rem;
      }
    }
  }
}
</style>