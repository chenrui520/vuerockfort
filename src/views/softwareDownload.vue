<template>
  <div class="softwareDownload">
    <div>
      <div class="headerImg" style="position:relative">
        <div class="Mask">
          <h3 style="z-index:10">最流行的交易平台和最强大交易平台</h3>
          <p style="z-index:10">
            MT4交易软件是由迈达克公司开发的一款用来接收行情的软件,有不同的语种设置,提供多种外汇交易产品种类,还可以及时查看行情变化情况,同时进行下单和模拟交易,是目前全球范围内使用最为广泛的交易软件。至今依然占据全球外汇市场主流交易平台的霸主地位。
            MT4软件不仅提供实时的行情资讯,还包含了18种各式各样的画线作图的工具,不同周期的K线图,以及各种常见的技术指标,另外MT4软件还支持下单、平仓、止盈止损设置、交易记录查询等等客户需求的功能,可以帮助交易者全面分析数据,掌握行情变化。
          </p>
        </div>
      </div>
      <div class="cont">
        <img src="../images/downPc.png" alt="pc" />
        <div class="text">
          <h3>界面简单,操作简便</h3>
          <p>MT4的界面设置从简出发,力求图表一目了然,使得交易者在操作的时候能够快速简便,这对于外汇交易的新手来说是十分必要的,如果操作过于繁琐的话,会耽误更多的宝贵时间</p>
        </div>
      </div>
      <div class="contTwo">
        <div class="Mask">
          <h3>支持交易记录查询</h3>
          <p>很多朋友想要查看自己的记录,便于从中总结自己的交易经验,提高操作技能,有的软件是不支持此项功能的,但是MT4软件中就可以支持交易记录的查询工作,这给很多的交易者提供了方便</p>
          <h3>支持自定义指标的添加</h3>
          <p>虽然,MT4交易软件支持常见的技术指标,但是由于投资者的喜好是不同的,有的朋友偏爱一些不怎么常见的技术指标,在一般的系统中是没有的,但是在MT4软件中,你可以添加自己下载的或者自己编写的技术指标来运用,这一点对于那些分析技能比较强的朋友来说就是一大福音.</p>
          <h3>支持基于MQL４语言的程序化EA交易</h3>
          <p>EA，语法类似C/C++程序设计编程语言，是MT4平台提供给个人交易者和机构交易除了手动交易外，还有个吸引交易者的核心功能——expert advisor，英文直译是专家顾问的意思，俗称“智能交易”， “智量化交易”， “程序化交易”。使用EA后，交易员可以根据明确的入场和出场策略在ＭＴ４通过写入MQL程序化文件，让EA系统自动交易实现２４小时的开仓和平仓</p>
        </div>
      </div>
      <div class="contThree">
        <div class="text">
          <h3>系统稳定</h3>
          <p>做外汇的时候,系统的稳定性是非常重要的一点,交易者发送指令到服务器,再由服务器发送到银行然后执行,这个过程经过的时间越短的话,交易执行的点位就更加的精确,特别是在交易的时候由于行情波动比较激烈,由于系统的稳定造成的时间上的误差就可以给交易带来比较大的亏损,所以MT4的系统稳定性也是质量的保证</p>
        </div>
        <img src="../images/downChart.png" alt="pc" />
      </div>
      <div class="contFour">
        <div class="Mask">
          <h3>丰富的订单执行</h3>
          <p>
            市价订单：使用市价订单在当前市场价格下开立或关闭交易。
            <br />限价挂单：按照高于当前的价格制定价格卖出进场，或低于当前市场价格的指定价格买入进场交易。
            <br />止损挂单：按照高于当前的价格制定价格买入进场，或低于当前市场价格的指定价格卖出进场交易。
            <br />止盈订单：止提前设定目标价位，触及这个价位时，平台会自动为您平仓，锁定交易利润。
            <br />止损订单：预先指定一个价格，当市场走势对交易不利时，系统将在此价结算交易，锁定损失。
            <br />移动止损订单：移动止损订单跟踪对您有利的价格变动方向，维持止损价格与现价之间的初始价差。
            <br />部分平仓：可对现有交易进行部分平仓。例如，如果持有阿里巴巴差价合约仓位4手，可以对其中部分进行平仓，保留部分仓位，等待跟多的利润
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "softwareDownload",
  components: {},
  data() {
    return {
      hoverFn: false
    };
  }
};
</script>
<style lang="scss">
$borColor: rgba(255, 255, 255, 0.1);
@mixin whiteTextH3 {
  text-align: center;
  color: #fff;
  //   line-height: 2rem;
  font-size: 1.452rem;
}
@mixin whiteTextP {
  text-align: left;
  color: #fff;
  line-height: 2rem;
  font-size: 1rem;
}
.softwareDownload {
  color: #fff;
  .headerImg {
    height: 29.7rem;
    margin-top: -4.76rem;
    background: url("../images/softDownBg.png");
    background-size: cover;
    text-align: center;
    padding-top: 1px;
    .Mask {
      background: url("../images/12.png");
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      left: 0px;
      text-align: center;
      h3 {
        font-size: 2.098rem;
        margin-top: 9.96rem;
      }
      .p {
        width: 33.5%;
        margin: 0 auto;
        font-size: 1.421rem;
        margin-top: 2.421rem;
        color: #fff;
      }
      p {
        // background: url("../images/11.png");
        width: 62.5%;
        margin: 0 auto;
        font-size: 1.049rem;
        line-height: 2em;
        padding: 1.694rem;
        margin-top: 3.71rem;
        border: 1px dashed $borColor;
      }
    }
  }
  .cont {
    display: flex;
    padding: 3.2rem 0;
    img {
      width: 24.7rem;
      margin-left: 10rem;
    }
    .text {
      width: 30.8rem;
      h3 {
        @include whiteTextH3;
        color: #000;
      }
      p {
        @include whiteTextP;
        color: #000;
        margin-top: 3.83rem;
      }
    }
  }
  .contTwo {
    background: url("../images/MT4.png");
    background-size: cover;
    .Mask {
      padding: 3.33rem 1px 1px 1px;
      background: url("../images/17.png");
      h3 {
        @include whiteTextH3;
        margin-bottom: 2.22rem;
      }
      p {
        @include whiteTextP;
        width: 46.45rem;
        margin: 0 auto;
        margin-bottom: 4.24rem;
      }
    }
  }
  .contThree {
    display: flex;
    padding: 3.2rem 0;
    img {
      width: 22.84rem;
    }
    .text {
      width: 32.93rem;
      margin-left: 15.54rem;
      h3 {
        @include whiteTextH3;
        color: #000;
      }
      p {
        @include whiteTextP;
        color: #000;
        margin-top: 3.83rem;
      }
    }
  }
  .contFour {
    background: url("../images/downCode.png");
    background-size: cover;
    .Mask {
      padding: 3.33rem 1px 1px 1px;
      background: url("../images/17.png");
      h3 {
        @include whiteTextH3;
        margin-bottom: 2.22rem;
      }
      p {
        @include whiteTextP;
        width: 46.45rem;
        margin: 0 auto;
        margin-bottom: 4.24rem;
      }
    }
  }
  .contBg {
    padding: 1px;
    background: url("../images/detailP.png");
    background-size: cover;
    p {
      width: 64%;
      margin: 100px auto;
      background: #fff;
      padding: 1.291rem;
      color: #000;
      font-size: 1.049rem;
      border-radius: 10px;
      line-height: 2em;
      text-align: left;
    }
  }
}
</style>