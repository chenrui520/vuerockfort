<template>
  <div v-if="Switch" class="Understand">
    <div class="contBg">
      <div class="title">
        <h3>更多的交易机会</h3>
      </div>
      <div class="p">
        Rockfort提供的电子交易产品包括全球范围的外汇，股票，股指，期权，
        期货等差价合约产品，包括了在全 球125个交易中心的品种繁多的电子交易产品的在线交易执行和结算等。
      </div>
      <div class="title">
        <h3>安全的资金保障</h3>
      </div>
      <div class="p">
        1. 所有客户资金均存放在隔离的银行账户和流动性供应商的隔离资金账户中。
        <br />2. 所有客户资金均分布存放在全球主要银行中，并接受Rockfort风险条例合规监管。
        <br />3.Rockfort进行对冲交易使用的是集团的自有基金，不会使用客户资金。
        <br />4.Rockfort在全球金融政治高度透明和稳定国家加拿大和新西兰的接受监管。
        <br />5.Rockfort接受全球权威会计审计公司永安EY和德勤Deloitte的外部审计。
        <br />6.Rockfort由全球律师事务所德同Dentons提供法律咨询
      </div>
      <div class="title">
        <h3>优廉的交易成本</h3>
      </div>
      <div class="p">
        Rockfort提供提供具有全球竞争力的稳定的交易点差和手续费等。我们的所有产品都提供极具竞争力的点差，
        包括欧美点差0，苹果和阿里巴巴等世界主要股票点差地至X。
      </div>
      <div class="title">
        <h3>高效的资金利用</h3>
      </div>
      <div class="p">外汇保证金杠杆率高达至500倍、股票X倍。</div>
      <div class="title">
        <h3>严格的全球监管</h3>
      </div>
      <div class="p">
        Rockfort Markets是取得FMA Derivatives Issuers许可的，
        新西兰仅有的八家拥有衍生品发行者牌照的金融服务供应商之一。FSP编号：FSP509766
        <br />Rockfort Internations是取得加拿大券商MSB编号：M20696230
      </div>
      <div class="title">
        <h3>最流行的交易平台和最强大交易平台</h3>
      </div>
      <div class="p">
        MT4交易软件是由迈达克公司开发的一款用来接收行情的软件,
        有不同的语种设置,提供多种外汇交易产品种类,还可以及时查看行情变化情况,
        同时进行下单和模拟交易,是目前全球范围内使用最为广泛的交易软件。至今依然占据全球外汇市场主流交易平台的霸主地位。
        <br />MT4软件不仅提供实时的行情资讯,还包含了18种各式各样的画线作图的工具,不同周期的K线图,
        以及各种常见的技术指标,另外MT4软件还支持下单、平仓、止盈止损设置、交易记录查询等等客户需求的功能,
        可以帮助交易者全面分析数据,掌握行情变化。
      </div>
      <div class="title">
        <h3>丰富的订单执行</h3>
      </div>
      <div class="p">
        在Rockfort交易平台有多种订单执行方式
        <br />市价订单：使用市价订单在当前市场价格下开立或关闭交易。
        <br />限价挂单：按照高于当前的价格制定价格卖出进场，或低于当前市场价格的指定价格买入进场交易。
        <br />止损挂单：按照高于当前的价格制定价格买入进场，或低于当前市场价格的指定价格卖出进场交易。
        <br />止盈订单：止提前设定目标价位，触及这个价位时，平台会自动为您平仓，锁定交易利润。
        <br />止损订单：预先指定一个价格，当市场走势对交易不利时，系统将在此价结算交易，锁定损失。
        <br />移动止损订单：移动止损订单跟踪对您有利的价格变动方向，维持止损价格与现价之间的初始价差。
        <br />部分平仓：可对现有交易进行部分平仓。例如，如果持有阿里巴巴差价合约仓位4手，可以对其中部分进行平仓，保留部分仓位，等待跟多的利润
      </div>
    </div>
  </div>
  <div v-else class="Understand">
    <div class="contBg">
      <div class="title">
        <h3>More trading opportunities</h3>
      </div>
      <div class="p">
        Rockfort provides electronic trading products including global foreign exchange, stocks, stock indexes, options,
        Futures and other CFD products include online transaction execution and settlement of a wide variety of electronic trading products in 125 trading centers worldwide.
      </div>
      <div class="title">
        <h3>Safe funding</h3>
      </div>
      <div class="p">
        1. All customer funds are deposited in segregated bank accounts and segregated fund accounts of liquidity providers.
        <br />2. All customer funds are distributed and stored in major global banks, and are subject to Rockfort risk regulations and compliance supervision.
        <br />3.Rockfort uses the group's own funds for hedging transactions and does not use customer funds.
        <br />4.Rockfort is regulated in countries with high transparency and stability in global financial politics, Canada and New Zealand.
        <br />5.Rockfort accepts external audits by the world's authoritative accounting and auditing companies Wing On EY and Deloitte Deloitte.
        <br />6.Rockfort is legally advised by German law firm Dentons
      </div>
      <div class="title">
        <h3>Cheap transaction costs</h3>
      </div>
      <div class="p">
        Rockfort provides stable spreads and handling fees with global competitiveness. All our products provide very competitive spreads,
        Including European and American spreads 0, Apple and Alibaba and other major stocks spread to X.
      </div>
      <div class="title">
        <h3>Efficient use of funds</h3>
      </div>
      <div class="p">Foreign exchange margin leverage ratio is up to 500 times, stocks X times.</div>
      <div class="title">
        <h3>Strict global regulation</h3>
      </div>
      <div class="p">
        Rockfort Markets is licensed by FMA Derivatives Issuers,
        One of the only eight financial service providers in New Zealand that has a derivative issuer license. FSP number: FSP509766
        <br />Rockfort Internations obtained the Canadian broker's MSB number: M20696230
      </div>
      <div class="title">
        <h3>The most popular trading platform and the most powerful trading platform</h3>
      </div>
      <div class="p">
        MT4 trading software is a software developed by Midak to receive quotes,
        There are different language settings, providing a variety of foreign exchange trading product types, and you can also view market changes in a timely manner.
        Simultaneous order placement and simulated trading are currently the most widely used trading software in the world. It still occupies the dominant position of the mainstream trading platform in the global foreign exchange market.
        <br />MT4 software not only provides real-time market information, but also includes 18 kinds of line drawing tools, K-line charts of different periods,
        As well as various common technical indicators, in addition, MT4 software also supports functions such as order placement, position closing, stop loss and profit setting, transaction record query, etc.
        Can help traders to analyze the data in an all-round way and master the market changes.
      </div>
      <div class="title">
        <h3>Rich order execution</h3>
      </div>
      <div class="p">
        There are multiple order execution methods on the Rockfort trading platform
        <br />Market orders: Use market orders to open or close trades at the current market price.
        <br />Pending Orders: Sell at the market price based on the price higher than the current price, or buy the market at the specified price below the current market price.
        <br />Stop-loss pending orders: buy and enter at a price higher than the current price, or sell and enter the market at a specified price lower than the current market price.
        <br />Take profit orders: only set the target price in advance, when you touch this price, the platform will automatically close your position and lock the trading profit.
        <br />Stop loss order: Specify a price in advance. When the market trend is unfavorable to the transaction, the system will settle the transaction at this price to lock in the loss.
        <br />Mobile Stop Loss Orders: Mobile Stop Loss Orders track the direction of price changes that are beneficial to you and maintain the initial price difference between the stop loss price and the current price.
        <br />Partially close positions: Partially close existing positions. For example, if you hold 4 lots of Alibaba CFD positions, you can close some of the positions, keep some positions, and wait for more profits
      </div>
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
      Switch: true
    };
  },
  computed: {
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
    .title {
      text-align: center;
      margin-top: 5.57rem;
      img {
        width: 2rem;
      }
      h3 {
        display: inline-block;
        font-size: 2.06rem;
      }
    }
    .p {
      width: 50.2rem;
      font-size: 1rem;
      line-height: 2.5em;
      padding: 2.32rem;
      background: #fff;
      color: #000;
      border-radius: 1rem;
      margin: 0 auto;
      margin-top: 1.7rem;
    }
  }
}
</style>