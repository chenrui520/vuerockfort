<template>
  <div class="home">
    <div class="headerImg">
      <h3>新西兰监管 · 国际金融公司</h3>
      <h4>Rockfort</h4>
    </div>
    <div class="contP">
      <div class="p">
        Rockfort集团在全球设有不同办事处，专业优秀的团队对投资者的行业领域提供专业的指导和服务。现投资者遍布全球60多个国家和地区。
        <br />Rockfort投资人携创始人团队，在投资场景、资产组合/运作、金融衍生品领域全面合作，全力打造稳固、开放、共赢行业科技金融生态，为全球投资者创建一个平等的、优惠的、便捷的金融衍生品交易环境和体系。
        <div class="btn">查看更多</div>
      </div>
    </div>
    <div class="doing">
      <h3>最新活动</h3>
      <router-link class="btn" to="/Understand">全部活动</router-link>
      <div class="ul">
        <div class="li" v-for="item in doingList" :key="item.id" @click="jump(item.id)">
          <div>
            <img :src="item.thumbnail" alt="图片" />
          </div>
          <div class="text" v-html="item.excerpt"></div>
        </div>
      </div>
    </div>
    <div class="constitute">
      <div class="constituteBg">
        <h3>集团构成</h3>
        <h4>ROCKFORT国际集团</h4>
      </div>
      <div class="constituteList">
        <div class="li">
          <img src="../images/banner.png" alt="旗帜" />
          <h3>ROCKFORT HOLDINGS LIMITED</h3>
          <p>是一家位于新西兰Level 21 191 Queen Street, Auckland的有限责任公司 （商务登记号码：NZBN 9429047702585）</p>
        </div>
        <div class="li two">
          <img src="../images/bannerTwo.png" alt="旗帜" />
          <h3>ROCKFORT MARKETS LIMITED</h3>
          <p>
            是一家位于新西兰Level 21 191 Queen Street, Auckland的有限责任公司 （商务登记号码：NZBN 9429042010807）
            <br />是受FMA监管的主营金融衍生品服务的企业（监管号FSP509766）
          </p>
        </div>
        <div class="li three">
          <img src="../images/bannerThree.png" alt="旗帜" />
          <h3>
            ROCKFORT INTERNATIONAL
            <br />（Seychelles） LIMITED
          </h3>
          <p>是一家位于塞舌尔Suite 23, 1st Floor, Eden Plaza, Eden Island, Mahe的 有限责任公司（商务注册号码：214200）</p>
        </div>
        <div class="li tow four">
          <img src="../images/bannerFour.png" alt="旗帜" />
          <h3>
            ROCKFORT INTERNATIONAL
            <br />（Canada） LIMITED
          </h3>
          <p>
            是一家位于加拿大1108-250 CONSUMERS ROAD TORONTO的有限责任 公司（商务注册号码：1181111-8）
            <br />是受FINTRAC监管的提供MSB（Money Services Business）服务的企业（监管号M20696230）
          </p>
        </div>
      </div>
      <div class="why">
        <h3>为什么选择Rockfort？</h3>
        <div class="ul">
          <div class="li">
            <div class="icon">
              <img src="../images/why1.png" alt="icon" />
            </div>
            <p>更多交易机会</p>
          </div>
          <div class="li">
            <div class="icon">
              <img src="../images/why2.png" alt="icon" />
            </div>
            <p>安全的资金保障</p>
          </div>
          <div class="li">
            <div class="icon">
              <img src="../images/why3.png" alt="icon" />
            </div>
            <p>优廉的交易成本</p>
          </div>
          <div class="li">
            <div class="icon">
              <img src="../images/why4.png" alt="icon" />
            </div>
            <p>高效的资金利用</p>
          </div>
          <div class="li">
            <div class="icon">
              <img src="../images/why5.png" alt="icon" />
            </div>
            <p>严格的全球监管</p>
          </div>
          <div class="li" @click="jumpUnderstand()">
            <div class="icon">
              <img src="../images/why6.png" alt="icon" />
            </div>
            <p>查看更多</p>
          </div>
        </div>
      </div>
      <div class="computer">
        <img src="../images/computer.png" alt />
        <div class="text">支持交易查询记录</div>
        <div class="text">页面简洁，操作简便</div>
        <div class="text">支持MQL4程序化EA交易</div>
        <div class="text">支持自定义指标的添加</div>
        <div class="text">丰富的订单执行</div>
        <div class="text">系统稳定</div>
      </div>
      <div class="home">
        <h3>全球精英管理团队</h3>
        <div class="itemUl">
          <div class="li">
            <img src="../images/prople.png" alt="人像" />
            <h4>
              Sargon Elias
              <br />
              <span>CEO</span>
            </h4>
            <p>Rockfort Markets</p>
          </div>
          <div class="li">
            <img src="../images/prople.png" alt="人像" />
            <h4>
              Nobutaka Hirose
              <br />
              <span>CEO</span>
            </h4>
            <p>
              Rockfort International
              <br />(Seychelles)
            </p>
          </div>
          <div class="li">
            <img src="../images/prople.png" alt="人像" />
            <h4>
              Robert ELdbron
              <br />
              <span>CEO</span>
            </h4>
            <p>
              Rockfort International
              <br />(Canada)
            </p>
          </div>
          <div class="li">
            <img src="../images/prople.png" alt="人像" />
            <h4>Hayden Bell</h4>
            <p>
              Marketing
              <br />（Rockfort Markets）
            </p>
          </div>
          <div class="li">
            <img src="../images/prople.png" alt="人像" />
            <h4>Matt Larsen</h4>
            <p>
              Finance
              <br />（Rockfort Markets）
            </p>
          </div>
          <div class="li">
            <img src="../images/prople.png" alt="人像" />
            <h4>Alex Kowalski</h4>
            <p>
              Risk
              <br />（Rockfort Markets）
            </p>
          </div>
          <div class="li">
            <img src="../images/prople.png" alt="人像" />
            <h4>Tony Ke</h4>
            <p>
              IT
              <br />（Rockfort Group）
            </p>
          </div>
          <div class="li">
            <img src="../images/prople.png" alt="人像" />
            <h4>Npra AI</h4>
            <p>
              Customer Support
              <br />（Rockfort Markets）
            </p>
          </div>
          <div class="li">
            <img src="../images/prople.png" alt="人像" />
            <h4>Ricardo Garrido</h4>
            <p>
              Sales
              <br />（Rockfort Markets）
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mode">
      <h3>合作模式</h3>
      <div class="ul">
        <div class="li">
          <img src="../images/mode1.png" alt="模式" />
          <p>机构交易者</p>
        </div>
        <div class="li">
          <img src="../images/mode2.png" alt="模式" />
          <p>资金管理人</p>
        </div>
        <div class="li">
          <img src="../images/mode3.png" alt="模式" />
          <p>白标计划</p>
        </div>
        <div class="li">
          <img src="../images/mode4.png" alt="模式" />
          <p>介绍经纪商</p>
        </div>
      </div>
    </div>
    <div class="partner">
      <h3>合作伙伴</h3>
      <div class="partnerUl">
        <div>
          <img src="../images/partner1.png" alt="伙伴图片" />
        </div>
        <div>
          <img src="../images/partner2.png" alt="伙伴图片" />
        </div>
        <div>
          <img src="../images/partner3.png" alt="伙伴图片" />
        </div>
        <div>
          <img src="../images/partner4.png" alt="伙伴图片" />
        </div>
        <div>
          <img src="../images/partner5.png" alt="伙伴图片" />
        </div>
        <div>
          <img src="../images/partner6.png" alt="伙伴图片" />
        </div>
        <div>
          <img src="../images/partner7.png" alt="伙伴图片" />
        </div>
        <div>
          <img src="../images/partner8.png" alt="伙伴图片" />
        </div>
        <div>
          <img src="../images/partner9.png" alt="伙伴图片" />
        </div>
        <div>
          <img src="../images/partner10.png" alt="伙伴图片" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Card from "@/components/card.vue";
export default {
  name: "Home",
  components: {
    // Card
  },
  data() {
    return {
      doingList: [
        {
          img: "../img/homeCarousel.c7a2d39a.png",
          text: "一文读懂MAM账户，PAMM账 户和单账户的区别"
        },
        {
          img: "../images/homeCarousel.c7a2d39a.png",
          text: "一文读懂MAM账户，PAMM账 户和单账户的区别"
        },
        {
          img: "../images/homeActivity.png",
          text: "一文读懂MAM账户，PAMM账 户和单账户的区别"
        }
      ]
    };
  },
  created() {
    let that = this;
    this.AJAX.ajax({
      url: "https://www.rfmhub.com/cn/api/", // 请求地址
      jsonp: "jsonpCallback", // 采用jsonp请求，且回调函数名为"jsonpCallbak"，可以设置为合法的字符串
      data: { json: "get_recent_posts" }, // 传输数据
      success: function(res) {
        // 请求成功的回调函数
        console.log(res);
        if (res.status === "ok") {
          that.doingList = res.posts.slice(0, 3);
        }
      },
      error: function() {} // 请求失败的回调函数
    });
  },
  methods: {
    jump(id) {
      this.$router.push({ path: "/Detail", query: { id } });
    },
    jumpUnderstand() {
      let ula2 = document.getElementById("ula").children[2];
      document.getElementById("bottomBorder").style.left =
        ula2.offsetLeft +
        (ula2.offsetWidth -
          document.getElementById("bottomBorder").offsetWidth) /
          2 +
        "px";
      this.$router.push({ path: "/Understand" });
    }
  }
};
</script>
<style lang="scss">
.home {
  .btn {
    position: absolute;
    padding: 0.22rem 0.65rem;
    border: 1px solid #00a0e8;
    color: #00a0e8;
    font-size: 1.05rem;
    border-radius: 1rem;
    line-height: 1em;
    cursor: pointer;
  }
  .headerImg {
    color: #fff;
    position: relative;
    height: 58.76rem;
    margin-top: -4.76rem;
    background: url("../images/homeCarousel.png");
    background-size: cover;
    text-align: center;
    padding-top: 1px;
    background-position-y: bottom;
    h3 {
      font-size: 3.35rem;
      margin-top: 18.49rem;
    }
    h4 {
      color: #000;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 2.78rem;
      margin: auto;
      font-size: 1.74rem;
    }
  }
  .contP {
    padding-top: 1rem;
    padding-bottom: 3rem;
    text-align: left;
    .p {
      position: relative;
      width: 46.29rem;
      margin: 0 auto;
      font-size: 1.049rem;
      line-height: 2.5rem;
      .btn {
        right: 0;
        bottom: 0;
      }
    }
  }
  .doing {
    position: relative;
    width: 48.25rem;
    margin: 0 auto;
    margin-bottom: 1.69rem;
    padding-top: 1.74rem;
    text-align: left;
    h3 {
      color: #000;
      font-size: 2.06rem;
      margin-bottom: 2.18rem;
    }
    .btn {
      top: 1.86rem;
      right: 0.61rem;
      text-decoration: none;
    }
    .ul {
      display: flex;
      justify-content: space-between;
      .li {
        width: 15.06rem;
        img {
          width: 100%;
          line-height: 0;
        }
        .text {
          margin-top: 1.61rem;
          font-size: 1.049rem;
          line-height: 2.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box; //作为弹性伸缩盒子模型显示。
          -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
          -webkit-line-clamp: 2;
        }
      }
    }
  }
  .constitute {
    .constituteBg {
      position: relative;
      background: url("../images/homeBg.png");
      background-size: cover;
      height: 19.77rem;
      background-position-y: bottom;
      color: #fff;
      h3 {
        font-size: 2.7rem;
        position: absolute;
        top: 5.21rem;
        left: 14.73rem;
      }
      h4 {
        font-size: 1.98rem;
        position: absolute;
        top: 10.45rem;
        left: 18.64rem;
      }
    }
    .constituteList {
      width: 44.27rem;
      margin: 0 auto;
      .li {
        position: relative;
        width: 42rem;
        height: 9rem;
        margin: 0 auto;
        border-radius: 1rem;
        box-shadow: 0px 0px 18px 1px #ccc;
        padding: 1px;
        margin-bottom: 2rem;
        img {
          width: 11.18rem;
          height: 7.02rem;
          position: absolute;
          top: -1.13rem;
          left: -2.99rem;
        }
        h3 {
          width: 20.74rem;
          margin-top: 1.5rem;
          margin-left: 15.05rem;
          text-align: center;
          font-size: 1.17rem;
        }
        p {
          width: 30.15rem;
          margin-top: 1.5rem;
          margin-left: 10.73rem;
          text-align: left;
          font-size: 1rem;
          line-height: 2rem;
        }
      }
      .two {
        height: 12.95rem;
        img {
          top: -1.13rem;
          right: -2.99rem;
          left: auto;
        }
        h3 {
          margin-left: 6.82rem;
        }
        p {
          margin-left: 1.49rem;
        }
      }
      .three {
        height: 12.95rem;
      }
      .four {
        height: 17.8rem;
        img {
          top: -1.13rem;
          right: -2.99rem;
          left: auto;
        }
        h3 {
          margin-left: 6.82rem;
        }
        p {
          margin-left: 1.49rem;
        }
      }
    }
  }
  .why {
    h3 {
      font-size: 2.1rem;
      text-align: center;
      margin: 4.44rem 0;
    }
    .ul {
      width: 50rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .li {
        width: 10.5rem;
        margin-bottom: 3.7rem;
        .icon {
          width: 8.5rem;
          height: 8.5rem;
          margin: 0 auto;
          position: relative;
          border-radius: 50%;
          box-shadow: 0px 0px 18px 1px #ccc;
          img {
            width: 3.75rem;
            height: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
          }
        }
        p {
          font-size: 1.05rem;
          text-align: center;
          margin-top: 1.21rem;
        }
      }
      .li:first-child {
        margin-right: 5rem;
      }
      .li:nth-child(2) {
        margin-right: 5rem;
      }
    }
  }
  .computer {
    position: relative;
    height: 37.45rem;
    background: url("../images/computerBg.png") no-repeat;
    background-size: cover;
    background-position-y: bottom;
    color: #fff;
    h3 {
      margin-top: 4.96rem;
      font-size: 2.1rem;
      text-align: center;
    }
    img {
      width: 23.04rem;
      height: auto;
      position: absolute;
      top: 11.5rem;
      left: 0;
      right: 0;
      margin: auto;
    }
    .text {
      position: absolute;
      line-height: 1em;
      font-size: 1.05rem;
      padding: 0.65rem 2rem;
      border: 1px solid #fff;
      border-radius: 2rem;
    }
    .text:nth-of-type(1) {
      top: 8.47rem;
      left: 14.33rem;
    }
    .text:nth-of-type(2) {
      top: 8.47rem;
      right: 14rem;
    }
    .text:nth-of-type(3) {
      top: 19.13rem;
      left: 9.44rem;
    }
    .text:nth-of-type(4) {
      top: 19.13rem;
      right: 11.14rem;
    }
    .text:nth-of-type(5) {
      top: 30.55rem;
      left: 17.95rem;
    }
    .text:nth-of-type(6) {
      top: 30.55rem;
      right: 19.29rem;
    }
  }
  .home {
    background: url("../images/tangle3.png");
    color: #000;
    h3 {
      font-size: 2.06rem;
      text-align: center;
      margin: 5rem 0px;
    }
    .itemUl {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 50rem;
      margin: 0 auto;
      text-align: center;
      .li {
        width: 14rem;
        background: #fff;
        line-height: 2em;
        margin-bottom: 2.3rem;

        img {
          width: 100%;
        }
        h4 {
          font-size: 1.5rem;
          margin: 2.2rem 0px;
          span {
            font-size: 1rem;
          }
        }
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
  .mode {
    text-align: center;
    color: #000;
    margin-top: 4.28rem;
    h3 {
      font-size: 2.1rem;
      margin-bottom: 4.32rem;
    }
    .ul {
      display: flex;
      justify-content: space-between;
      width: 49rem;
      margin: 0 auto;
      margin-bottom: 4.48rem;
      .li {
        width: 5.3rem;
        img {
          width: 100%;
        }
        p {
          font-size: 1.05rem;
          margin-top: 1.9rem;
        }
      }
    }
  }
  .partner {
    background: url("../images/partner.png") no-repeat;
    background-size: cover;
    background-position-y: bottom;
    height: 34.3rem;
    padding-top: 4.68rem;
    h3 {
      color: #000;
      font-size: 2.1rem;
      text-align: center;
      margin-bottom: 4.24rem;
    }
    .partnerUl {
      display: flex;
      flex-wrap: wrap;
      align-content: space-between space-between flex-start;
      margin: 0 auto;
      width: 48rem;
      div {
        flex: 0 0 25%;
        margin-bottom: 3rem;
      }
      img {
        width: 80%;
        height: 3rem;
      }
    }
  }
}
</style>