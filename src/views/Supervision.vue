<template>
  <div v-if="Switch" class="Supervision">
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
        <p
          v-if="hoverFn"
          style="z-index:10"
        >新西兰FMA是新西兰金融市场管理局的简称，全称为Financial Markets Authority，负责新西兰整体的金融市场稳定性与规则的制定、监督工作。新西兰金融市场管理局（Financial Markets Authority，简称FMA）于2011年成立，取代了原来的证券委员会，并且接管了新西兰政府的经济发展部的一部分职能。是新西兰的金融市场监管体系结构中2个主要的监管机构之一。严格的监管是确保投资者资金安全，交易安定的基础条件。FMA的衍生产品发行商申请过程长，审查难度大，监查体系复制严谨。是全球公认的高监管地域。因此受到了全球投资者的关注和认可。</p>
        <p
          v-else
          style="z-index:10"
        >加拿大金融交易和报告分析中心（FINTRAC）是加拿大的金融情报单位，于 2000 年成立。它是一个独立机构，向财政部长汇报工作，对议会活动中心负责。总部位于渥太华。主要负责收集、分析、评估和披露加国金融行业的相关资料，以保护加国的金融稳定及安全。类似于美国的CFTC。FINTRAC 接受金融机构和中介机构主要负责收集、分析、评估和披露加国金融行业的相关资料，以保护加国的金融稳定及安全。</p>
      </div>
    </div>
    <div class="cont">
      <div v-show="hoverFn">
        <Card
          class="crad"
          src="one.png"
          msg="在动荡的世界中，新西兰作为经济、政治和社会稳定的灯塔而引人注目。在和平基金的脆弱国家（The Fragile States Index）指数中，新西兰被评为世界持续稳定国家。同时，新西兰在国际透明(Transparency International)和腐败认识指数(Corruption Perception Index)取得全球160个国家中的第一名，该指数衡量的是警察和司法等公共机构的可信度和良好运作，根据世界司法项目(WJP) 2019年法治国家排名，新西兰轻松跻身世界十大法治国家之列。此外，新西兰通过长期的政治稳定和有效治理已转化为经济领域。经济长期稳定增长。与其它发达经济体相比，2008/09年的衰退程度较轻。自2010年以来，新西兰的经济年均增长率为2.1%。2018年的平均增长率超过3%，政府预测2019年将达到3.6%。"
        ></Card>
      </div>
      <div v-show="hoverFn==false">
        <Card
          class="crad"
          src="three.png"
          msg="近年全球监管严化，对提供国际金融、外汇交易和汇款业务等相关服务的企业，各国政府都加强了相关方面的监管。在加拿大，相关业务归联邦政府金融交易及报告分析中心Financial Transactions and Reports Analysis Centre of Canada(FINTRAC)管辖，企业必须取得Money Services Business (MSB)的注册牌照方可开展有关业务。"
        ></Card>
      </div>
    </div>
    <div class="contBg">
      <Card
        class="crad"
        v-show="hoverFn===true"
        src="two.png"
        msg="FMA负责执行适用于金融服务和证券市场的证券、财务报告和公司法。监管证券交易所、财务顾问和经纪人、审计员、受托人和发行人，包括新西兰储蓄者和养老金计划的发行人。与新西兰储备银行（RBNZ）共同监督新西兰的指定结算系统。 FMA成立后，接管了新西兰证券委员会和政府精算师的职能，并合并了经济发展部、公司注册局及其国家执行机构分散的其他监管职能。FMA的愿景是促进和促进公平、高效和透明的金融市场的发展。"
      ></Card>
      <Card
        class="crad"
        v-show="hoverFn===false"
        src="four.png"
        msg="FINTRAC致力于阻止洗钱和资助恐怖主义活动，同时确保个人信息的保护。通过以下方式履行职责： 
            <br/>1.根据立法和法规，接收金融交易报告、关于洗钱和恐怖主义活动融资的自愿性信息披露。 
            <br/>2.保护个人信息。 
            <br/>3.确保报告机构遵守法律法规。 
            <br/>4.建立与调查洗钱，恐怖主义活动融资和对加拿大安全的威胁有关的金融情报网 
            <br/>5.研究和分析各种信息数据，分析洗钱和恐怖主义融资的趋势和模式。 
            <br/>6.负责加拿大资金服务业务的注册。 
            <br/>7.提高公众对洗钱和恐怖主义活动筹资的认识和了解。 
            并且通过发现和阻止洗钱和恐怖主义融资，为加拿大人的公共安全做出贡献，并帮助保护加拿大金融体系的完整性。
            <br/>FINTRAC愿景：成为金融情报研究的领导者"></Card>
    </div>
    <div class="contThree" v-if="hoverFn">
      <h3>Rockfort严格遵守金融市场管理委员会FMA的严格规定</h3>
      <p>
        保持优良的财务义务，财报需取得持牌审计师或注册审计公司审计。并持续披露PDS义务。
        <br />AML/CFT义务，衍生产品发行商必须贯彻反洗钱和反恐怖主义融资计划，包括检测、阻止、管理和减轻洗钱和恐怖主义融资的程序。必须对客户执行尽职调查流程，这包括客户身份识别和身份验证。
        <br />公平交易义务，严禁误导/欺骗行为，虚假/未经验证的陈述。
        <br />投资者资产管理义务，持牌衍生品发行人须遵守对衍生品投资者资金和衍生品投资者的财产进行严格分离保管。
        <br />确保衍生品投资者的资金及时存入指定银行的信托账户
        <br />衍生品投资者的资金必须与发行人或要约人自己持有或为发行人或要约人持有的资金分开持有
        <br />每天核对衍生品发行人的衍生品投资者资金金额记录与信托账户中的资金金额。确保资金安全保管。
        <br />衍生品投资者的资金和衍生品投资者的财产不得用于清偿衍生品发行人的任何债务。（即，不可挪用义务）
        <br />保存和维护为每位投资者持有的衍生品投资者资金和衍生品投资者财产的最新记录
      </p>
      <h3 style="margin-top:2rem">
        <a
          target="blank"
          href="https://www.fma.govt.nz/compliance/licensed-providers/?Search=&DateFrom=&DateTo=&Sort=DateTimeSort+DESC&searchlocale=en_NZ&ListTerms%5B101%5D=101&action_getResults=Search&start=0"
        >点击这里查询FMA监管资格</a>
      </h3>
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
          href="https://www10.fintrac-canafe.gc.ca/msb-esm/public/msb-search/search-by-name/"
        >点击这里查询FMA监管资格</a>
      </h3>
    </div>
  </div>
   <div v-else class="Supervision">
    <div class="headerImg" :class="hoverFn?'':'headerImgCanada'" style="position:relative">
      <div class="Mask">
        <h3 style="z-index:10">Regulatory information</h3>
        <div
          style="z-index:10"
          class="white"
          :class=" hoverFn? 'hover' :''"
          @click="hoverFn=true"
        >New Zealand FMA Derivatives Issuers license</div>
        <div
          style="z-index:10"
          class="transparent"
          :class=" hoverFn? '' :'hover'"
          @click="hoverFn=false"
        >Canada FINTRAC MSB license</div>
        <p
          v-if="hoverFn"
          style="z-index:10"
        >The New Zealand FMA is the abbreviation of the New Zealand Financial Markets Authority. The full name is Financial Markets Authority, which is responsible for the formulation and supervision of New Zealand’s overall financial market stability and rules. The New Zealand Financial Markets Authority (FMA) was established in 2011, replacing the original Securities Commission and taking over some functions of the New Zealand Government’s Ministry of Economic Development. It is one of the two main regulatory agencies in New Zealand's financial market regulatory system. Strict supervision is the basic condition for ensuring the safety of investors’ funds and stable trading. The application process of FMA's derivative product issuers is long, the review is difficult, and the audit system is rigorously copied. It is globally recognized as a highly regulated area. Therefore, it has received the attention and recognition of global investors.</p>
        <p
          v-else
          style="z-index:10"
        >The Canadian Financial Transaction and Report Analysis Center (FINTRAC) is a Canadian financial intelligence unit established in 2000. It is an independent institution that reports to the Minister of Finance and is responsible for the Parliamentary Activity Center. Headquartered in Ottawa. Mainly responsible for collecting, analyzing, evaluating and disclosing relevant information of Canada's financial industry to protect Canada's financial stability and security. Similar to the CFTC in the United States. FINTRAC accepts that financial institutions and intermediaries are mainly responsible for collecting, analyzing, evaluating and disclosing relevant information of the Canadian financial industry to protect Canada’s financial stability and security.</p>
      </div>
    </div>
    <div class="cont">
      <div v-show="hoverFn">
        <Card
          class="crad"
          src="one.png"
          msg="In a turbulent world, New Zealand stands out as a beacon of economic, political and social stability. In the Fragile States Index of the Peace Fund, New Zealand is rated as a country with continued stability in the world. At the same time, New Zealand ranked first in the 160 countries in the world in the Transparency International and Corruption Perception Index. The index measures the credibility and good operation of public institutions such as police and justice. The World Justice Project (WJP) 2019 ranking of countries ruled by law, New Zealand easily ranks among the top ten countries ruled by law. In addition, New Zealand has transformed into the economic sphere through long-term political stability and effective governance. The economy has grown steadily for a long time. Compared with other advanced economies, the 2008/09 recession was milder. Since 2010, New Zealand’s economy has grown at an average annual rate of 2.1%. The average growth rate in 2018 exceeded 3%, and the government predicts that it will reach 3.6% in 2019."
        ></Card>
      </div>
      <div v-show="hoverFn==false">
        <Card
          class="crad"
          src="three.png"
          msg="In recent years, global supervision has been tightened. Governments of countries around the world have strengthened supervision of companies that provide international finance, foreign exchange transactions, and remittance services. In Canada, related businesses are under the jurisdiction of the Federal Government Financial Transactions and Reports Analysis Centre of Canada (FINTRAC), and companies must obtain a Money Services Business (MSB) registration license to carry out related businesses."
        ></Card>
      </div>
    </div>
    <div class="contBg">
      <Card
        class="crad"
        v-show="hoverFn===true"
        src="two.png"
        msg="FMA is responsible for enforcing securities, financial reporting and company laws that apply to financial services and securities markets. Oversees stock exchanges, financial advisors and brokers, auditors, trustees and issuers, including New Zealand savers and pension plan issuers. Work with the Reserve Bank of New Zealand (RBNZ) to oversee New Zealand's designated settlement system. After the establishment of FMA, it took over the functions of the New Zealand Securities Commission and the government actuary, and merged other decentralized supervisory functions of the Ministry of Economic Development, the Companies Registry and its national executive agency. FMA's vision is to promote and promote the development of fair, efficient and transparent financial markets."
      ></Card>
      <Card
        class="crad"
        v-show="hoverFn===false"
        src="four.png"
        msg="FINTRAC is committed to preventing money laundering and terrorist financing, while ensuring the protection of personal information. Perform duties by: 
            <br/>1.According to legislation and regulations, receive financial transaction reports, voluntary information disclosure about money laundering and terrorist financing.
            <br/>2.Protect personal information.
            <br/>3.Ensure that reporting agencies comply with laws and regulations.
            <br/>4.Establish a financial intelligence network related to investigating money laundering, terrorist financing and threats to Canadian security
            <br/>5.Research and analyze various information and data, and analyze the trends and patterns of money laundering and terrorist financing.
            <br/>6.Responsible for the registration of Canadian treasury services.
            <br/>7.Raise public awareness and understanding of money laundering and terrorist financing.
            And by discovering and preventing money laundering and terrorist financing, it contributes to the public safety of Canadians and helps protect the integrity of the Canadian financial system.
            <br/>FINTRAC Vision: To be a leader in financial intelligence research"></Card>
    </div>
    <div class="contThree" v-if="hoverFn">
      <h3>Rockfort strictly abides by the strict regulations of the Financial Market Management Committee FMA</h3>
      <p>
        To maintain excellent financial obligations, financial reports must be audited by a licensed auditor or a registered audit company. And continue to disclose PDS obligations.
        <br />AML/CFT obligations, derivative product issuers must implement anti-money laundering and counter-terrorism financing plans, including procedures to detect, prevent, manage and mitigate money laundering and terrorist financing. The due diligence process must be performed on the customer, which includes customer identification and identity verification.
        <br />Fair trade obligations, misleading/deceptive behavior, false/unverified statements are strictly prohibited.
        <br />Investor asset management obligations, licensed derivative issuers must observe strict separation of custody of derivatives investor funds and derivatives investors' property.
        <br />Ensure that the funds of derivatives investors are deposited in the trust account of the designated bank in a timely manner
        <br />Derivative investor funds must be held separately from funds held by or for the issuer or the offeror
        <br />Check the derivative issuer’s derivatives investor’s fund record and the funds in the trust account every day. Ensure the safe keeping of funds.
        <br />The funds of derivatives investors and the assets of derivatives investors shall not be used to pay off any debts of derivatives issuers. (Ie, non-appropriate obligations)
        <br />Keep and maintain up-to-date records of derivatives investor funds and derivatives investor property held by each investor
      </p>
      <h3 style="margin-top:2rem">
        <a
          target="blank"
          href="https://www.fma.govt.nz/compliance/licensed-providers/?Search=&DateFrom=&DateTo=&Sort=DateTimeSort+DESC&searchlocale=en_NZ&ListTerms%5B101%5D=101&action_getResults=Search&start=0"
        >Click here to check FMA regulatory qualifications</a>
      </h3>
    </div>
    <div class="contThree" v-else>
      <h3>MSB license holders must comply with FINTRAC’s full set of compliance requirements</h3>
      <p style="width:50%">
        • Relevant documents must be kept well and relevant personnel must be well trained;
        <br />• Designated personnel are responsible for establishing and managing the entire compliance plan;
        <br />• Develop a complete set of compliance policies and procedures, and approved by the company's senior management;
        <br />• Establish risk assessment and control strategies;
        <br />•Develop and manage company business personnel training programs;
        <br />•Evaluate the entire compliance plan every two years.
      </p>
      <h3 style="margin-top:2rem">
        <a
          target="blank"
          href="https://www10.fintrac-canafe.gc.ca/msb-esm/public/msb-search/search-by-name/"
        >Click here to check FMA regulatory qualifications</a>
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
      hoverFn: true,
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
  created(){
    this.Switch = this.$store.state.Switch;

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