<template>
  <div id="header">
    <img class="logo" src="../images/LOGO.png" alt="logo" />
    <ul v-if="Switch" class="nav" id="ula" ref="ula">
      <a @click="presentClick('home')" to="/">首页</a>
      <a @mouseenter="enter(2)" @mouseleave="leave(2)" to="/Introduction">
        集团介绍
        <ul id="ula2Nav">
          <li
            :class="{primary : Introduction===1}"
            @click="setIntroduction(1);presentClick('Introduction')"
          >Rockfort集团起源</li>
          <li
            :class="{primary : Introduction===2}"
            @click="setIntroduction(2);presentClick('WhyYouChoose')"
          >集团资讯</li>
        </ul>
      </a>
      <a @click="presentClick('Understand')" to="/Understand">为什么选择ROCKFOTRT？</a>
      <a @click="presentClick('Supervision')" to="/Supervision">监管与安全</a>
      <a
        @click="presentClick('produck');"
        @mouseenter="enter(4)"
        @mouseleave="leave(4)"
        to="/produck"
      >
        公司产品
        <ul id="ula4Nav">
          <li :class="{primary : primary===1}" @click="setPrimary(1)">差价合约</li>
          <li :class="{primary : primary===2}" @click="setPrimary(2)">差价合约的交易机制</li>
          <li :class="{primary : primary===3}" @click="setPrimary(3)">股票差价合约</li>
          <li :class="{primary : primary===4}" @click="setPrimary(4)">股指差价合约</li>
          <li :class="{primary : primary===5}" @click="setPrimary(5)">外汇保证金合约</li>
          <li :class="{primary : primary===6}" @click="setPrimary(6)">原油差价合约</li>
          <li :class="{primary : primary===7}" @click="setPrimary(7)">贵金属差价合约</li>
        </ul>
      </a>
      <a @click="presentClick('SoftwareDownload')" to="/SoftwareDownload">交易软件</a>
      <div id="bottomBorder" :style="{'left':offsetLeft,'top':offsetTop}"></div>
    </ul>
    <ul v-else class="nav" id="ula" ref="ula">
      <a @click="presentClick('home')" to="/">Home</a>
      <a @mouseenter="enter(2)" @mouseleave="leave(2)" to="/Introduction">
        Group Introduction
        <ul id="ula2Nav">
          <li
            :class="{primary : Introduction===1}"
            @click="setIntroduction(1);presentClick('Introduction')"
          >Rockfort Group Origin</li>
          <li
            :class="{primary : Introduction===2}"
            @click="setIntroduction(2);presentClick('WhyYouChoose')"
          >Group Information</li>
        </ul>
      </a>
      <a @click="presentClick('Understand')" to="/Understand">Why choose ROCKFOTRT?</a>
      <a @click="presentClick('Supervision')" to="/Supervision">Regulation and safety</a>
      <a
        @click="presentClick('produck');"
        @mouseenter="enter(4)"
        @mouseleave="leave(4)"
        to="/produck"
      >
        company's product
        <ul id="ula4Nav">
          <li :class="{primary : primary===1}" @click="setPrimary(1)">CFD</li>
          <li :class="{primary : primary===2}" @click="setPrimary(2)">CFD trading mechanism</li>
          <li :class="{primary : primary===3}" @click="setPrimary(3)">Stock CFD</li>
          <li :class="{primary : primary===4}" @click="setPrimary(4)">Stock Index CFD</li>
          <li
            :class="{primary : primary===5}"
            @click="setPrimary(5)"
          >Foreign exchange margin contract</li>
          <li :class="{primary : primary===6}" @click="setPrimary(6)">Crude Oil CFD</li>
          <li :class="{primary : primary===7}" @click="setPrimary(7)">Precious Metals CFD</li>
        </ul>
      </a>
      <a @click="presentClick('SoftwareDownload')" to="/SoftwareDownload">Trading software</a>
      <div id="bottomBorder" :style="{'left':offsetLeft,'top':offsetTop}"></div>
    </ul>
    <span class="switch" @click="setSwitch(Switch?false:true)">中/English</span>
  </div>
</template>

<style lang="scss">
#header {
  z-index: 99;
  width: 100%;
  height: 4.761rem;
  position: fixed;
  display: flex;
  top: 0;
  left: 0vw;
  justify-content: center;
  align-items: center;
  background: url("../images/headerBg.png");
  background-size: cover;
  .logo {
    width: 10.78%;
    height: auto;
    position: absolute;
    top: 0px;
    left: 3.28vw;
    bottom: 0px;
    margin: auto;
  }
  .nav {
    width: 53.44%;
    height: 4.761rem;
    line-height: 4.761rem;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    a {
      color: #ffffff;
      text-decoration: none;
      font-size: 1rem;
      cursor: pointer;
    }
    #bottomBorder {
      position: absolute;
      height: 2px;
      width: 2rem;
      background: #fff;
    }
    #ula4Nav,
    #ula2Nav {
      cursor: pointer;
      color: #fff;
      position: absolute;
      background: rgba($color: #000000, $alpha: 0.5);
      font-size: 1rem;
      padding: 0.54rem 2rem;
      text-align: center;
      display: none;
      li {
        // margin-bottom: 1.46rem;
        list-style: none;
      }
      .primary {
        font-size: 1.14rem;
        font-weight: bold;
      }
    }
  }
  .switch {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10%;
    color: #fff;
    cursor: pointer;
  }
}
</style>
<script>
export default {
  name: "head",
  data() {
    return {
      present: "home",
      offsetLeft: 0,
      offsetTop: 0,
      botBor: 0,
      path: "",
      primary: 1,
      Introduction: 1,
      navShow: false,
      Switch: true
      // ula4:this.$refs.ula.children[4]
    };
  },
  watch: {
    present: function(New) {
      switch (New) {
        case "home":
          this.offsetLeft =
            this.$refs.ula.children[0].offsetLeft +
            (this.$refs.ula.children[0].offsetWidth - this.botBor) / 2 +
            "px";
          break;
        case "Introduction":
          this.offsetLeft =
            this.$refs.ula.children[1].offsetLeft +
            (this.$refs.ula.children[1].offsetWidth - this.botBor) / 2 +
            "px";
          break;
        case "WhyYouChoose":
          this.offsetLeft =
            this.$refs.ula.children[1].offsetLeft +
            (this.$refs.ula.children[1].offsetWidth - this.botBor) / 2 +
            "px";
          break;
        case "Understand":
          this.offsetLeft =
            this.$refs.ula.children[2].offsetLeft +
            (this.$refs.ula.children[2].offsetWidth - this.botBor) / 2 +
            "px";
          break;
        case "Supervision":
          this.offsetLeft =
            this.$refs.ula.children[3].offsetLeft +
            (this.$refs.ula.children[3].offsetWidth - this.botBor) / 2 +
            "px";
          break;
        case "produck":
          this.offsetLeft =
            this.$refs.ula.children[4].offsetLeft +
            (this.$refs.ula.children[3].offsetWidth - this.botBor) / 2 +
            "px";
          break;
        case "SoftwareDownload":
          this.offsetLeft =
            this.$refs.ula.children[5].offsetLeft +
            (this.$refs.ula.children[5].offsetWidth - this.botBor) / 2 +
            "px";
          break;
      }
    },
    $route() {
      if (this.$route.path === "/") {
        this.offsetLeft =
          this.$refs.ula.children[0].offsetLeft +
          (this.$refs.ula.children[0].offsetWidth - this.botBor) / 2 +
          "px";
        this.present = "home";
      } else {
        this.present = this.$route.path;
      }
    }
  },
  mounted() {
    let that = this;
    setTimeout(function() {
      that.offsetLeft = that.$refs.ula.children[0].offsetLeft + "px";
      that.offsetTop = document.getElementById("header").offsetHeight + "px";
      that.botBor = document.getElementById("bottomBorder").offsetWidth;
    }, 200);
  },
  methods: {
    presentClick(str) {
      this.present = str;
      if (str === "home") {
        this.$router.push({ path: "/" });
      } else {
        this.$router.push({ path: "/" + str });
      }
    },
    enter(num) {
      let ula = {};
      let nav = {};
      if (num === 4) {
        ula = this.$refs.ula.children[4];
        nav = document.getElementById("ula4Nav");
      } else {
        ula = this.$refs.ula.children[1];
        nav = document.getElementById("ula2Nav");
      }
      nav.style.display = "block";
      nav.style.top = ula.offsetHeight + ula.offsetTop + "px";
      nav.style.left =
        ula.offsetLeft + ula.offsetWidth / 2 - nav.offsetWidth / 2 + "px";
    },
    leave(num) {
      let nav = {};
      if (num === 4) {
        nav = document.getElementById("ula4Nav");
      } else {
        nav = document.getElementById("ula2Nav");
      }
      nav.style.display = "none";
    },
    setPrimary(num) {
      this.primary = num;
      this.$store.commit("setPrimary", num);
    },
    setIntroduction(num) {
      this.Introduction = num;
      this.$store.commit("setIntroduction", num);
    },
    setSwitch(bool) {
      console.log(bool);
      this.Switch = bool;
      this.$store.commit("setSwitch", bool);
    }
  }
};


</script>