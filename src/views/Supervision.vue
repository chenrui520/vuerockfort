<template>
  <div class="Supervision">
    <div class="headerImg" :class="hoverFn?'':'headerImgCanada'" style="position:relative">
      <div class="Mask">
        <h3 style="z-index:10">监管信息</h3>
        <div
          style="z-index:10"
          class="white"
          :class=" hoverFn? 'hover' :''"
          @click="hoverFn=true"
        >新西兰FMA Derivatives Issuers许可</div>
        <div
          style="z-index:10"
          class="transparent"
          :class=" hoverFn? '' :'hover'"
          @click="hoverFn=false"
        >加拿大FINTRAC MSB许可</div>
        <p v-if="hoverFn" style="z-index:10">
          根据《2013年金融市场行为法》（FMC法）衍生产品的定义包括了外汇协议，
          利率，商品，差价合约，保证金合约，期货合约，现货合约，期权，
          衍生品发行人在发出受监管要约时必须获得许可，受监管要约包括必须向
          投资者披露的任何衍生产品的要约。
        </p>
        <p v-else style="z-index:10">
          根据FINTRAC的要求，从事以下业务的企业都属于Money Services Business（MSB），都需要向FINTRAC申请、注册取得MSB牌照后方可经营：
          <br />•外汇交易 Foreign exchange dealing
          <br />•汇款 Money transferring
          <br />
          •汇票、{{hoverFn===false}}旅行支票或其它类似票据的兑换、买卖业务 Cashing or selling money orders, traveler’s cheques or anything similar
        </p>
      </div>
    </div>
    <div class="cont">
      <div v-show="hoverFn">
        <Card
          class="crad"
          src="one.png"
          msg="新西兰FMA是新西兰金融市场管理局的简称，全称为Financial Markets Authority，负责新西兰整体的金融市场稳定性与规则的制定、监督工作。新西兰金融市场管理局（Financial Markets Authority，简称FMA）于2011年成立，取代了原来的证券委员会，并且接管了新西兰政府的经济发展部的一部分职能。是新西兰的金融市场监管体系结构中2个主要的监管机构之一。"
        ></Card>
      </div>
      <div v-show="hoverFn==false">
        <Card
          class="crad"
          src="three.png"
          msg="近年全球监管严化，对提供国际金融、外汇交易和汇款业务等相关服务的企业，各国政府都加强了相关方面的监管。在加拿大，相关业务归联邦政府金融交易及报告分析中心Financial Transactions and Reports Analysis Centre of Canada(FINTRAC)管辖，企业必须取得Money Services Business (MSB)的注册牌照方可开展有关业务。
加拿大金融交易和报告分析中心（FINTRAC）是加拿大的金融情报单位，于 2000 年成立。它是一个独立机构，向财政部长汇报工作，对议会活动中心负责。总部位于渥太华。主要负责收集、分析、评估和披露加国金融行业的相关资料，以保护加国的金融稳定及安全。类似于美国的CFTC。FINTRAC 接受金融机构和中介机构主要负责收集、分析、评估和披露加国金融行业的相关资料，以保护加国的金融稳定及安全。"
        ></Card>
      </div>
    </div>
    <div class="contBg">
      <Card
        class="crad"
        v-show="hoverFn===true"
        src="two.png"
        msg="Rockfort严格遵守金融市场管理委员会FMA的严格规定，确保投资者资金安全：<br/> 
•保持优良的财务义务，财报需取得持牌审计师或注册审计公司审计。 <br/>
•持续披露PDS义务<br/>
•AML/CFT义务，衍生产品发行商必须贯彻反洗钱和反恐怖主义融资计划，包括检测、阻止、管理和减轻洗钱和恐怖主义融资的程序。必须对客户执行尽职调查流程，这包括客户身份识别和身份验证。<br/>
•公平交易义务，严禁误导/欺骗行为，虚假/未经验证的陈述。<br/>
•投资者资产管理义务，持牌衍生品发行人须遵守对衍生品投资者资金和衍生品投资者的财产进行严格分离保管。具体包括<br/>
*确保衍生品投资者的资金及时存入指定银行的信托账户 <br/>
*衍生品投资者的资金必须与发行人或要约人自己持有或为发行人或要约人持有的资金分开持有<br/>
*每天核对衍生品发行人的衍生品投资者资金金额记录与信托账户中的资金金额。确保资金安全保管。<br/>
*衍生品投资者的资金和衍生品投资者的财产不得用于清偿衍生品发行人的任何债务。（即，不可挪用义务）<br/>
*保存和维护为每位投资者持有的衍生品投资者资金和衍生品投资者财产的最新记录 <br/>
*取得审计保证报告，确认衍生产品发行人的流程、程序和控制措施在会计期间得到适当设计和有效运行。
"
      ></Card>
      <Card
        class="crad"
        v-show="hoverFn===false"
        src="four.png"
        msg="INTRAC致力于阻止洗钱和资助恐怖主义活动，同时确保个人信息的保护。通过以下方式履行职责： <br/>
1.根据立法和法规，接收金融交易报告、关于洗钱和恐怖主义活动融资的自愿性信息披露。 <br/>
2.保护个人信息。 <br/>
3.确保报告机构遵守法律法规。 <br/>
4.建立与调查洗钱，恐怖主义活动融资和对加拿大安全的威胁有关的金融情报网 <br/>
5.研究和分析各种信息数据，分析洗钱和恐怖主义融资的趋势和模式。 <br/>
6.负责加拿大资金服务业务的注册。 <br/>
7.提高公众对洗钱和恐怖主义活动筹资的认识和了解。 <br/>
并且通过发现和阻止洗钱和恐怖主义融资，为加拿大人的公共安全做出贡献，并帮助保护加拿大金融体系的完整性。FINTRAC愿景：成为金融情报研究的领导者
"
      ></Card>
    </div>
    <div class="contThree" v-if="hoverFn">
      <h3>
        <a
          target="blank"
          href="https://www.fma.govt.nz/compliance/licensed-providers/?Search=&DateFrom=&DateTo=&Sort=DateTimeSort+DESC&searchlocale=en_NZ&ListTerms%5B101%5D=101&action_getResults=Search&start=0"
        >点击这里查询FMA监管资格</a>
      </h3>
      <!-- <p>
        •保持优良的财务义务，财报需取得持牌审计师或注册审计公司审计。
        <br />•持续披露PDS义务
        <br />•AML/CFT义务，衍生产品发行商必须贯彻反洗钱和反恐怖主义融资计划，包括检测、阻止、管理和减轻洗钱和恐怖主义融资的程序。必须对客户执行尽职调查流程，这包括客户身份识别和身份验证。
        <br />•公平交易义务，严禁误导/欺骗行为，虚假/未经验证的陈述。
        <br />•投资者资产管理义务，持牌衍生品发行人须遵守对衍生品投资者资金和衍生品投资者的财产进行严格分离保管。具体包括
        <br />*确保衍生品投资者的资金及时存入指定银行的信托账户
        <br />*衍生品投资者的资金必须与发行人或要约人自己持有或为发行人或要约人持有的资金分开持有
        <br />*每天核对衍生品发行人的衍生品投资者资金金额记录与信托账户中的资金金额。确保资金安全保管。
        <br />*衍生品投资者的资金和衍生品投资者的财产不得用于清偿衍生品发行人的任何债务。（即，不可挪用义务）
        <br />*保存和维护为每位投资者持有的衍生品投资者资金和衍生品投资者财产的最新记录
        <br />*取得审计保证报告，确认衍生产品发行人的流程、程序和控制措施在会计期间得到适当设计和有效运行。
      </p>-->
    </div>
    <div class="contThree" v-else>
      <h3>MSB牌照持有企业必须遵守FINTRAC有整套合规要求</h3>
      <p style="width:50%">
        •相关文件必须保存良好，相关人员必须受到良好训练；
        <br />•指定人员负责建立及管理整套合规计划；
        <br />•制定整套合规政策及流程，并经公司高层管理人员批准；
        <br />•设立风险评估及控制策略；
        <br />•开发及管理公司业务人员培训项目；
        <br />•每两年评估整套合规计划。
      </p>
      <h3 style="margin-top:2rem">
        <a
        
          target="blank"
          href="https://www10.fintrac-canafe.gc.ca/msb-esm/public/msb-search/search-by-name/
"
        >点击这里查询FMA监管资格</a>
      </h3>
    </div>
  </div>
</template>

<script>
import Card from "@/components/card.vue";
export default {
  name: "Supervision",
  components: {
    Card
  },
  data() {
    return {
      hoverFn: true
    };
  }
};
</script>
<style lang="scss">
$borColor: rgba(255, 255, 255, 0.1);
.Supervision {
  color: #fff;
  .headerImg {
    height: 43.099rem;
    margin-top: -4.76rem;
    background: url("../images/newZealand.png");
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
    }
    h3 {
      font-size: 2.098rem;
      margin-top: 9.281rem;
    }

    .white {
      width: 33.5%;
      margin: 0 auto;
      font-size: 1.421rem;
      padding: 1.291rem 0px;
      margin-top: 4.035rem;
      background: rgba(255, 255, 255, 0);
      color: #fff;
      cursor: pointer;
      border: 1px dashed $borColor;
    }
    .transparent {
      width: 25.57%;
      margin: 0 auto;
      font-size: 1.421rem;
      padding: 1.291rem 0px;
      cursor: pointer;
      margin-top: 2.058rem;
      border: 1px dashed $borColor;
    }
    .hover {
      background: #fff;
      color: #000;
    }
    p {
      width: 91.23%;
      margin: 0 auto;
      background: $borColor;
      font-size: 1.049rem;
      text-align: left;
      line-height: 2em;
      padding: 1.694rem;
      margin-top: 2.623rem;
      border: 1px dashed $borColor;
    }
  }
  .headerImgCanada {
    background: url("../images/canada.png");
    background-size: cover;
  }
  .cont {
    .crad {
      margin: 0 auto;
      margin-top: 8.071rem;
      margin-bottom: 4.035rem;
    }
  }
  .contBg {
    padding: 1px;
    background: url("../images/contBg.png");
    .crad {
      margin: 5.246rem auto;
    }
  }
  .contThree {
    padding: 6.133rem 0 4.842rem 0;
    color: #000;
    h3 {
      font-size: 2.098rem;
      text-align: center;
      a {
        text-decoration: none;
      }
    }
    p {
      width: 64.5%;
      margin: 0 auto;
      margin-top: 4.76rem;
      text-align: left;
      line-height: 2.5em;
      font-size: 1rem;
    }
  }
}
</style>