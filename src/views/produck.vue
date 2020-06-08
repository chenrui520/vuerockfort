<template>
  <div v-if="Switch" class="produck">
    <div class="contBg">
      <div class="box" v-if="primary===1||!primary">
        <div class="title">什么是差价合约交易？</div>
        <p
          class="content"
        >差价合约(CFD) 是衍生品交易的一种形式，可以通过预测股票、股指、外汇和债券等迅速变化的全球金融市场（或产品）价格涨跌，通过买卖差价合约，从而赚取潜在的净利润。差价合约(CFD)交易无需买入或卖出股票、货币或期货，即可参与股权、外汇、指数和大宗商品市场交易。</p>
        <div class="title">什么是差价合约交易？</div>
        <h3 class="subtitle">优势1 &nbsp;&nbsp;可以进行保证金交易</h3>
        <p
          class="content"
        >通过差价合约可以交易远远大于标准交易的仓位。这是由于差价合约(CFD)提供杠杆，无需支付全部金额，即可协议交易某项更大额资产。这意味着以较少的初始资金占有较多的市场份额。换而言之，投资者只需充值交易总额的所需保证金，剩余资金将由经纪商提供</p>
        <h3 class="subtitle">优势2 &nbsp;&nbsp;牛市熊市都是投资机会</h3>
        <p class="content">在上升及下跌市场均可交易：认为价格会下跌，可以做空（卖出）；如果认为价格会上涨，可以做多（买入）。也可以使用差价合约来对冲现有的实货投资组合。</p>
        <h3 class="subtitle">优势3 &nbsp;&nbsp;可以进行风险对冲</h3>
        <p class="content">
          使用差价合约可以对冲风险其他未平仓投资资产。如果认为投资组合中的某项资产可能出现价值下跌，可做空差价合约，抵消部分潜在损失。
          <br />除了CFD差价合约本身之外，差价合约交易还涉及更多内容。
        </p>
        <h3 class="subtitle">优势4 &nbsp;&nbsp;低门槛接入多个金融市场</h3>
        <p
          class="content"
        >Rockfort提供的差价合约交易，涵盖了股票、指数、货币、大宗商品、加密货币等一系列全球的金融市场。种类繁多，包括一些较难进入的市场，如：纳斯达克交易所，纽交所，港交所，伦敦交易所，澳大利亚交易所等市场。</p>
        <h3 class="subtitle">优势5 &nbsp;&nbsp;所有操作只需在一个平台上进行</h3>
        <p class="content">通过差价合约交易，投资者只需在Rockfort开户，就可以轻松以股票、大宗商品、指数、外汇和加密货币的价格变化进行交易。一个平台，一应俱全。</p>
      </div>>
      <div class="box" v-if="primary===2">
        <div class="title">差价合约的点差</div>
        <p class="content">
          交易差价合约，会有买入价和卖出价，买入价通常略高于基础市场价格，卖出价通常略低于基础市场价，买入价和卖出价之间的差额就是点差。点差是交易差价合约的成本，点差越小，交易成本越低。
          <br />* 买入价：新建多头差价合约的价格，或结算空头差价合约的价格
          <br />* 卖出价：新建空头差价合约的价格，或结算多头价差合约的价格
        </p>
        <div class="title">差价合约(CFD)交易与传统交易相比具备众多优势</div>
        <p
          class="content"
        >通常情况下，Rockfort提供的差价合约的交易成本是点差，但是如果交易的合约是直接进入市场的情况下，Rockfort会收取基于建立交易总额的佣金。例如在Rockfort交易ECN账户类型的差价合约，由于交易点差为从0开始，投资者交易通过直接访问银行同业流动性交易体系中直接成交，此时投资者的交易成本除了ECN点差外，还有佣金。</p>
        <div class="title">差价合约的合约尺寸</div>
        <p
          class="content"
        >Rockfort提供标准化合约（手），提供差价合约（CFD）交易。标准化合约的交易规模根据不同的交易标的而异。例如交易1手欧元/美元, 1手相当于交易10万欧元。1手白银，相当于交易5000盎司。1手苹果，相当于交易XX股</p>
        <div class="title">持仓时间和隔夜融资费用</div>
        <p class="content">
          差价合约交易没有固定的到期日，结算通过交易和开仓时相反方向的交易实现。
          <br />如果每日收盘时间（通常美国东部时间下午17：00，但根据不同的标的的市场会有不同）时，仍旧持有差价合约的仓位，投资者需要支付隔夜融资费用。融资费用的收取，根据Rockfort在提供投资者杠杆交易时，提供的资金总额的大小而定。
        </p>
        <div class="title">差价合约的交易损益</div>
        <p class="content">
          差价合约交易的损益 = 合约总数 X 合约的价值 X （平仓价 – 开仓价）–佣金–隔夜融资费
          实例：（以下计算实例，需要根据实际的MT5的设定完成后，再修改）
        </p>
        <img src="../images/produckTwo.png" style="width:100%" alt="excel" />
      </div>
      <div class="box" v-if="primary===3">
        <div class="title">什么是股票差价合约</div>
        <p
          class="content"
        >除了在证交所购买股票外，还可以通过股票差价合约进行交易。交易者可以购买特定股本的差价合约(CFD)，投机资产价格变化而无需实际持有标的资产。差价合约是金融衍生品，经纪商支付投资者开平仓之间的价差。投资者在看涨市场创建多仓或在看跌市场创建空仓，通过投机价格涨跌获取利润。差价合约的平均持仓时间较短，因而被认为是短期投资。</p>
        <div class="title">差价合约和传统交易对比</div>
        <img src="../images/produckThree.png" style="width:100%" alt="excel" />
        <p class="content">
          股票交易差价合约时，只需支付交易初始价值的一小部分（即保证金），这意味着可以以较少的资金在股票市场中创建等额仓位。 当购买传统股票时，需要预先支付全部资产价值费。 不论用哪种交易方法，市场份额都是一样的。杠杆是扩大盈利可能，同时增加亏损风险。
          <br />股票差价合约和股票交易的相关成本也不同。 交易差价合约无需支付佣金或只有极低的佣金产生，支出项目只有价差和持仓隔夜费。但在交易传统股票时，不同的经纪商会收取高低不同的佣金，以及针对证券收取的印花税。
        </p>
        <div class="title">股票差价合约的优势</div>
        <img src="../images/produckThree2.png" style="width:100%" alt="excel" />
        <div class="title">股票差价合约的计算方法</div>
        <p class="content">
          股票差价合约交易的交易成本：
          <br />保证金：通常5%~20%杠杆
          <br />股权数量 X 股票价格（中间价）X 杠杆
          <br />隔夜融资费：（1个月的银行同业拆息 BBSW+ 2.5%）X（股权数量 X 价格)/360
          <br />佣金：仓位价值 X 佣金比例（或最低佣金，相对高的数值）
          <br />0.08%~ 最低N美元
          <br />举例：
          <br />
          <img src="../images/produckThree3.png" style="width:100%" alt="excel" />
        </p>
      </div>
      <div class="box" v-if="primary===4">
        <div class="title">什么是股指差价合约</div>
        <p
          class="content"
        >股票市场指数是股市中的一部分。股票指数是由一组具有代表性的股票计算得到的。用于表现一国的经济或某个特定的行业或交易所的经营情况的表现。例如，JPN225指数由225家日本公司组成，因此该指数跟踪日本的股票市场。股票指数被投资者和经济学家用来比较不同资产的回报，跟踪整体经济。指数流动性高，图表形态清晰，交易点差小，是理想的投资工具。</p>
        <div class="title">股票指数的计算方法</div>
        <p class="content">通常有市值加权法，价格加权法，等权加重法和基本加权法等。其中最普遍被使用的是市值加权法计算的。</p>
        <div class="title">影响股指估值的主要原因</div>
        <p class="content">
          1指数的构成股票的价格；
          <br />2经济数据；
          <br />3政治政策的变化。
        </p>
        <div class="title">投资家选择股票指数作为投资工具的原因包括：</div>
        <p class="content">
          1. 交易量大，透明度高
          <br />2. 流动性高，点差小，走势形态清晰
          <br />3. 经济状况变化导致的波动增加，有巨大的交易机会
          <br />4. 不同国家，不同行业有不同的指数，投资者容易找到符合其偏好的产品
          <br />5. 可通过预测指数的涨跌，买入或卖出指数CDF，抓住市场机会
        </p>
      </div>
      <div class="box" v-if="primary===5">
        <div class="title">什么是外汇保证金合约</div>
        <p class="content">
          外汇保证金交易也称之为按金交易，它是指在金融机构之间以及金融机构与个人投资者之间进行的一种即期或远期外汇买卖方式。在进行保证金交易时，交易者只付出0.25%-20%的按金(保证金)，就可进行100%额度的交易。即，交易者缴付一定比率的保证金，可按券商提供的融资倍数，买卖一定额度的外汇。从价格上升或下跌中赚取利润，但也承担了亏损的风险。
          <br />外汇是目前全球最大的金融交易市场，也被认为是最自由、最公平、最先进的交易市场。通过外汇保证金交易，投资者可以利用较小的资金实现高盈利，资金利用率高，是投资者选在外汇保证金交易的重要原因。
        </p>
        <div class="title">为什么交易外汇保证金交易</div>
        <h3 class="subtitle">全球性市场</h3>
        <p
          class="content"
        >外汇市场的参与者，有各国的大小银行、中央银行、金融机构、进出口贸易商、企业的投资部门、基金公司和个人，根据“国际货币基金会”的统计每日全球成交量在几万亿美元，远远超过股市交易量。巨大的市场规模和参与者，导致市场的高度透明性和公平性。</p>
        <h3 class="subtitle">币种丰富</h3>
        <p class="content">全球所有可兑换货币都可作为交易品种。</p>
        <h3 class="subtitle">主流交易货币集中</h3>
        <p
          class="content"
        >外汇市场的交易集中在七大国家或地区（美国，欧洲，日本，英国，澳大利亚，加拿大）的货币。全球交易量最大的货币对有：欧元/美元、英镑/美元、澳元/美元、美元/日元、英镑/日元、美元/加元。</p>
        <h3 class="subtitle">24X5交易</h3>
        <p class="content">从周一到周五，每天24小时连续交易，便于随时进出，避免了隔日跳空带来的风险，即使日内遇定期发布的消息也会有跳空出现，但可以通过预设单或空仓来回避。</p>
        <h3 class="subtitle">双向交易，操作灵活</h3>
        <p class="content">可先买后卖，亦可先卖后买，并且买卖币种不限(这是与实盘的一个重要区别)，当然也是T+0，日内可反复做短线。</p>
        <h3 class="subtitle">杠杆效应</h3>
        <p
          class="content"
        >由于保证金交易是杠杆交易，参与者只支付一个很小比例的保证金，这样外汇价格的正常波动都被放大几倍甚至几十倍，资金的使用效率提高，在获取高收益的同时也面临高风险。</p>
        <h3 class="subtitle">交易成本可控</h3>
        <p class="content">外汇保证金交易，Rockfort收取的点差费用从0开始</p>
        <div class="title">外汇保证金合约的计算方法</div>
        <img src="../images/produckFive.png" style="width:100%" alt="excel" />
      </div>
      <div class="box" v-if="primary===6">
        <div class="title">常见的原油CFD产品有哪些？</div>
        <p class="content">
          常见的原油CFD产品有北美原油和布伦特原油。
          <br />布伦特原油是一种北海原油，在伦敦商品期货市场种交易，也就是为大家熟知的ICEBrent，目前世界上除了部分中东和远东原油以外，绝大部分地区的原油(如北海、非洲、拉美、加拿大、以及部分中东和远东地区向欧洲出口原油时的计价)均以布伦特原油作为计价标准。
          <br />WTI原油是美国原油，所有在美国生产或销往美国的原油，在计价时都以轻质低硫的WTI作为基准油。在纽约商品期货交易所交易，是世界原油计价系统中的重要组成部分，但只针对美国本土原油计价，局域性很强。美国作为原油消费大国，再加上纽约期交所在全球的影响力，以WTI为基准油的原油期货交易，就成为全球商品期货品种中成交量的龙头。
          <br />简而言之，WTI原油，美国市场，根据在CME纽约商品交易所交易的石油期货合约，确定期货定价的基准油；布伦特原油，欧洲主要使用，并在洲际交易所（ICE）交易的国际基准确定价格，是现货市场基准油。
        </p>
        <div class="title">影响原油价格的因素有哪些？</div>
        <h3 class="subtitle">宏观经济因素</h3>
        <p class="content">
          供应：包括可以从陆地或海洋中实际开采的原油资源，以及石油储备，包括每天、每周或每月可以以经济上有利的价格生产的石油桶数。
          <br />需求：依靠石油供应和副产品来维持全球经济的增长，以及采用风能、水电和太阳能等替代能源。
        </p>
        <h3 class="subtitle">石油市场主要参与者之间的关系</h3>
        <p class="content">
          主要石油生产商之间关于石油生产数量的生产协议。
          <br />对中东、伊朗、委内瑞拉、卡塔尔或俄罗斯等石油出口国施加（或取消）的政治或经济制裁可能导致全球石油价格以及其他商品期货价格的波动。
        </p>
        <h3 class="subtitle">投机和交易情绪</h3>
        <p
          class="content"
        >通过期货合约交易石油被认为是一种常见的交易形式。由于大量的市场投机者——中央银行、投资银行、金融机构、经纪公司、个人投资者、日内交易者等，这项活动能够加强或扭转油价的势头。</p>
        <div class="title">原油CFD合约的计算方法</div>
        <img src="../images/produckSix.png" style="width:100%" alt="excel" />
      </div>
      <div class="box" v-if="primary===7">
        <div class="title">交易最多的贵金属有哪些</div>
        <p class="content">
          黄金作为高导电性和延展性的金属，黄金与其他元素不起反应，广泛应用于工业商业中。此外，黄金在历史的长河中一直是财富的象征。从史前时代开始，黄金就被用于交换，第一枚黄金的硬币被发现与公元前600年。直到今天，黄金依旧是坚实的投资保值的资产。
          <br />与黄金一样，白银一直持续到第十九世纪。工业、商业和消费需求使白银成为投资的强有力的资产。4000多年来，白银也被用于货币兑换，白银期货等衍生品在全球不同的交易所市场交易。
        </p>
        <div class="title">影响黄金的价格的因素有哪些</div>
        <p class="content">与大多数依赖于生产和消费水平的大宗商品不同，黄金白银的交易价格紧随着政治变化的脉搏，投资者将其视为市场不稳定时的充当避险市场，成为资产价值的储备。</p>
        <h3 class="subtitle">黄金供需关系</h3>
        <p
          class="content"
        >黄金矿山开采量，各国央行储备金抛售量和旧金回收量。例如市场担忧美元前景，黄金需求增加，但同时黄金矿山开采量下跌，此时，各国央行需要出售黄金来弥补缺口；</p>
        <h3 class="subtitle">全球央行</h3>
        <p class="content">全球央行都是黄金的大户持有者，央行的黄金持有量，直接影响金价波动。如果央行持续吸纳或增持黄金，金价就会上升。如果央行出售黄金，金价就会走低；</p>
        <h3 class="subtitle">股票市场</h3>
        <p
          class="content"
        >历史上，黄金价格和经济，股票的走势相背离。股票牛市时，股票价格上扬，打走黄金投资，导致黄金价格下跌。股票熊市时，股票价格疲软，投资者会转入投资黄金，导致黄金价格上扬；</p>
        <h3 class="subtitle">原油价格</h3>
        <p class="content">抗通胀时黄金的特性。而原油价格和通胀的关系密切。因此黄金价格和原油价格有强正关联。原油价格上涨，通常会意味着通胀的到来，金价也同时上涨。</p>
        <h3 class="subtitle">美元走势</h3>
        <p class="content">美元流动性比黄金好，黄金稳定性比美元好。美元走强时，投资美元的机会增加，黄金走软。美元走弱时，黄金的价格开始走强。</p>
        <h3 class="subtitle">战乱和政局</h3>
        <p class="content">当战争和政局动荡时，经济会受到重大影响。任何关联货币都会因为通胀而贬值。人们都会把目标投向黄金，导致黄金价格上扬。</p>
        <h3 class="subtitle">金融危机</h3>
        <p class="content">当某国金融体系出现了不稳定现象时，世界的资金便会投向黄金，导致金价上升。黄金此时发挥资金避难功能。</p>
        <h3 class="subtitle">通货膨胀</h3>
        <p
          class="content"
        >货币的购买能力是由物价指数而定的。当物价稳定时，货币购买能力就稳定。反之，通货率越高，货币购买能力越低。当主要国家的物价指数保持稳定时，持有现金成为投资者首选。反之，人们会选择买入黄金导致金价上升。其中美国的通胀率最容易影响黄金的变动</p>
        <h3 class="subtitle">本地利率</h3>
        <p
          class="content"
        >当货币利率偏低时，投资黄金的收益超出利率收益时，黄金价格就会上升。反之利率升高时，货币利息的收益会更加吸引人，投资黄金不如货币放在银行收取利息更加稳定安全，黄金的投资价值就会下跌。金价就会受挫。</p>
        <h3 class="subtitle">贵金属CFD合约的计算方法</h3>
        <img src="../images/produckSeven.png" style="width:100%" alt="excel" />
      </div>
    </div>
  </div>
  <div v-else class="produck">
    <div class="contBg">
      <div class="box" v-if="primary===1||!primary">
        <div class="title">What is CFD trading?</div>
        <p class="content">
          Contract for Difference (CFD) is a form of derivatives trading. You can earn potential net gains by buying and selling CFDs by predicting the price changes of rapidly changing global financial markets (or products) such as stocks, stock indexes, foreign exchange and bonds. profit. Contract for Difference (CFD) transactions do not require buying or selling stocks, currencies, or futures to participate in equity, foreign exchange, index, and commodity market transactions.</p>
        <div class="title">What is CFD trading?</div>
        <h3 class="subtitle">Advantage 1 &nbsp;&nbsp;Margin trading is possible</h3>
        <p
          class="content"
        >CFDs can trade positions that are much larger than standard trades. This is because Contract for Difference (CFD) provides leverage and does not require payment of the entire amount to negotiate a larger asset. This means occupying more market share with less initial capital. In other words, investors only need to top up the required margin of the transaction amount, and the remaining funds will be provided by the broker</p>
        <h3 class="subtitle">Advantage 2 &nbsp;&nbsp;Bull and bear markets are investment opportunities</h3>
        <p class="content">It can be traded in both rising and falling markets: think that the price will fall and you can go short (sell); if you think the price will go up, you can go long (buy). CFDs can also be used to hedge existing physical portfolios.</p>
        <h3 class="subtitle">Advantage 3 &nbsp;&nbsp;Risk hedging</h3>
        <p class="content">
          The use of CFDs can hedge the risk of other open investment assets. If you think that an asset in the portfolio may experience a decline in value, you can short the CFD to offset some of the potential losses.
          <br />In addition to the CFD CFD itself, CFD trading involves more content.
        </p>
        <h3 class="subtitle">Advantage 4 &nbsp;&nbsp;Low threshold access to multiple financial markets</h3>
        <p
          class="content"
        >The CFD trading provided by Rockfort covers a series of global financial markets such as stocks, indices, currencies, commodities, and cryptocurrencies. There are a wide variety of markets, including some markets that are more difficult to enter, such as: NASDAQ, NYSE, HKEx, London Exchange, Australian Exchange and other markets.</p>
        <h3 class="subtitle">Advantage 5 &nbsp;&nbsp;All operations only need to be performed on one platform</h3>
        <p class="content">Through CFD trading, investors only need to open an account with Rockfort, and can easily trade with the price changes of stocks, commodities, indices, foreign exchange and cryptocurrencies. One platform is readily available.</p>
      </div>
      <div class="box" v-if="primary===2">
        <div class="title">Spreads on CFDs</div>
        <p class="content">
          When trading CFDs, there will be a buying price and a selling price. The buying price is usually slightly higher than the basic market price, and the selling price is usually slightly lower than the basic market price. The difference between the buying price and the selling price is the spread. Spread is the cost of trading CFDs. The smaller the spread, the lower the transaction cost.
          <br />* Bid price: the price of a new long CFD, or the price of clearing a short CFD
          <br />* Selling price: the price of a new short CFD or the price of a settlement long CFD
        </p>
        <div class="title">Compared with traditional trading, CFD trading has many advantages</div>
        <p
          class="content"
        >Normally, the transaction cost of CFDs provided by Rockfort is spread, but if the contract being traded enters the market directly, Rockfort will charge a commission based on the total amount of the established transaction. For example, in Rockfort trading ECN account type CFDs, since the transaction spread starts from 0, the investor trades directly through the direct access to the interbank liquidity trading system. At this time, the investor's transaction cost includes commissions in addition to the ECN spread. .</p>
        <div class="title">Contract size of CFD</div>
        <p
          class="content"
        >Rockfort provides standardized contracts (lots) and contracts for differences (CFD) transactions. The transaction scale of standardized contracts varies according to different transaction targets. For example, trading 1 lot of Euro/One dollar is equivalent to trading 100,000 euros. One lot of silver is equivalent to trading 5000 ounces. 1 lot of Apple, equivalent to trading XX shares</p>
        <div class="title">Position holding time and overnight financing fees</div>
        <p class="content">
          There is no fixed expiry date for CFD transactions, and settlement is achieved through transactions and transactions in the opposite direction when opening a position.
          <br />If the daily closing time (usually 17:00 US Eastern Time, but depending on the target market will be different), still holding a CFD position, investors need to pay overnight financing fees. The collection of financing fees depends on the total amount of funds provided by Rockfort when providing investors with leveraged transactions.
        </p>
        <div class="title">CFD trading gains and losses</div>
        <p class="content">
         Profit and loss of CFD trading = total number of contracts X value of contract X (closing price – opening price) – commission – overnight financing fee
          Example: (The following calculation example needs to be modified after the actual MT5 setting is completed)
        </p>
        <img src="../images/produckTwo.png" style="width:100%" alt="excel" />
      </div>
      <div class="box" v-if="primary===3">
        <div class="title">What is a stock CFD</div>
        <p
          class="content">
          In addition to buying stocks on the stock exchange, you can also trade through stock CFDs. Traders can purchase CFDs for specific equity, and speculative asset prices change without actually holding the underlying asset. CFDs are financial derivatives, and brokers pay investors the price difference between opening and closing positions. Investors create long positions in the bullish market or short positions in the bearish market, and obtain profits through speculative price changes. The average holding time of CFDs is shorter, so they are considered short-term investments.</p>
        <div class="title">CFD and traditional trading comparison</div>
        <img src="../images/produckThree.png" style="width:100%" alt="excel" />
        <p class="content">
          When trading CFDs on stocks, only a small part of the initial value of the transaction (that is, margin) is required, which means that you can create equal positions in the stock market with less money. When buying traditional stocks, you need to pay all asset value fees in advance. Regardless of the trading method used, the market share is the same. Leverage is the possibility of expanding profits while increasing the risk of loss.
          <br />The costs associated with stock CFDs and stock trading are also different. There is no commission or only a very low commission for trading CFDs. The only items of expenditure are the price difference and overnight positions. However, when trading traditional stocks, different brokers will charge different commissions, as well as stamp duties on securities.
        </p>
        <div class="title">Advantages of stock CFDs</div>
        <img src="../images/produckThree2.png" style="width:100%" alt="excel" />
        <div class="title">Calculation method of stock CFD</div>
        <p class="content">
          The transaction cost of stock CFD trading:
          <br />Margin: usually 5%~20% leverage
          <br />Number of shares X Stock price (middle price) X Leverage
          <br />Overnight financing fee: (1-month interbank rate BBSW+ 2.5%) X (number of shares X price)/360
          <br />Commission: position value X commission ratio (or minimum commission, relatively high value)
          <br />0.08%~ minimum N USD
          <br />Examples:
          <br />
          <img src="../images/produckThree3.png" style="width:100%" alt="excel" />
        </p>
      </div>
      <div class="box" v-if="primary===4">
        <div class="title">What is a stock index CFD</div>
        <p
          class="content">
          The stock market index is part of the stock market. The stock index is calculated from a representative set of stocks. Used to express the performance of a country's economy or the operation of a particular industry or exchange. For example, the JPN225 index consists of 225 Japanese companies, so the index tracks the Japanese stock market. Stock indexes are used by investors and economists to compare returns on different assets and track the overall economy. The index has high liquidity, clear chart shape, and small spreads. It is an ideal investment tool.</p>
        <div class="title">Calculation method of stock index</div>
        <p class="content">There are usually market value weighting method, price weighting method, equal weighting method and basic weighting method. One of the most commonly used is the market value weighting method.</p>
        <div class="title">Main reasons affecting stock index valuation</div>
        <p class="content">
          1 The price of the constituent stocks of the index;
          <br />2 Economic data;
          <br />3 Changes in political policy.
        </p>
        <div class="title">The reasons why investors choose stock indexes as investment tools include:</div>
        <p class="content">
          1. Large transaction volume and high transparency
          <br />2. High liquidity, small spread, and clear trend pattern
          <br />3. Increased volatility due to changes in economic conditions and huge trading opportunities
          <br />4. Different countries and different industries have different indexes, and investors can easily find products that meet their preferences
          <br />5. You can seize market opportunities by predicting the rise and fall of the index, buying or selling the index CDF
        </p>
      </div>
      <div class="box" v-if="primary===5">
        <div class="title">What is a foreign exchange margin contract</div>
        <p class="content">
          Foreign exchange margin trading is also called deposit trading. It refers to a method of spot or forward foreign exchange trading between financial institutions and between financial institutions and individual investors. When conducting a margin transaction, the trader only needs to deposit 0.25%-20% of the deposit (margin) to conduct a 100% transaction. That is, traders who pay a certain percentage of the deposit can buy and sell a certain amount of foreign exchange according to the financing multiple provided by the brokerage firm. Make a profit from rising or falling prices, but also bear the risk of loss.
          <br />Foreign exchange is currently the world's largest financial trading market, and is also considered to be the most free, fair and advanced trading market. Through foreign exchange margin trading, investors can use smaller funds to achieve high profitability and high capital utilization, which is an important reason for investors to choose foreign exchange margin trading.
        </p>
        <div class="title">Why trade forex margin trading</div>
        <h3 class="subtitle">Global market</h3>
        <p
          class="content"
        >Participants in the foreign exchange market include large and small banks, central banks, financial institutions, import and export traders, investment departments of companies, fund companies, and individuals from various countries. 100 million US dollars, far exceeding the stock market trading volume. The huge market size and participants have led to a high degree of transparency and fairness in the market.</p>
        <h3 class="subtitle">Rich currency</h3>
        <p class="content">All convertible currencies in the world can be used as trading varieties.</p>
        <h3 class="subtitle">Mainstream trading currency concentration</h3>
        <p
          class="content"
        >外汇市场的交易集中在七大国家或地区（美国，欧洲，日本，英国，澳大利亚，加拿大）的货币。全球交易量最大的货币对有：欧元/美元、英镑/美元、澳元/美元、美元/日元、英镑/日元、美元/加元。</p>
        <h3 class="subtitle">24X5交易</h3>
        <p class="content">从周一到周五，每天24小时连续交易，便于随时进出，避免了隔日跳空带来的风险，即使日内遇定期发布的消息也会有跳空出现，但可以通过预设单或空仓来回避。</p>
        <h3 class="subtitle">双向交易，操作灵活</h3>
        <p class="content">可先买后卖，亦可先卖后买，并且买卖币种不限(这是与实盘的一个重要区别)，当然也是T+0，日内可反复做短线。</p>
        <h3 class="subtitle">杠杆效应</h3>
        <p
          class="content"
        >Since margin trading is a leveraged transaction, participants only pay a small percentage of the margin, so that the normal fluctuations in foreign exchange prices are magnified several times or even tens of times, the use efficiency of funds is improved, and high risks are faced while obtaining high returns. .</p>
        <h3 class="subtitle">Controllable transaction costs</h3>
        <p class="content">For foreign exchange margin trading, the spread fee charged by Rockfort starts from 0</p>
        <div class="title">Calculation method of foreign exchange margin contract</div>
        <img src="../images/produckFive.png" style="width:100%" alt="excel" />
      </div>
      <div class="box" v-if="primary===6">
        <div class="title">What are the common crude oil CFD products?</div>
        <p class="content">
          Common crude oil CFD products are North American crude oil and Brent crude oil.
          <br />Brent crude oil is a kind of North Sea crude oil. It is traded in the London commodity futures market, also known as ICEBrent. At present, except for some Middle East and Far East crude oil, most of the crude oil in the world (such as North Sea, Africa, Latin America , Canada, and parts of the Middle East and Far East regions when exporting crude oil to Europe) are priced using Brent crude oil as the pricing standard.
          <br />WTI crude oil is U.S. crude oil. All crude oil produced in or sold to the United States is based on light and low sulfur WTI. Trading on the New York Commodity Futures Exchange is an important part of the world's crude oil pricing system, but it is only priced against US domestic crude oil and is highly localized. The United States, as a major consumer of crude oil, coupled with the global influence of the New York Futures Exchange, crude oil futures trading with WTI as the benchmark oil has become the leader in trading volume among global commodity futures varieties.
          <br />In short, WTI crude oil, the US market, determines the benchmark oil for futures pricing based on oil futures contracts traded on the CME New York Mercantile Exchange; Brent crude oil, which is mainly used in Europe and traded on the Intercontinental Exchange (ICE) International benchmarks determine prices and are the benchmark oil in the spot market.
        </p>
        <div class="title">What are the factors that affect crude oil prices?</div>
        <h3 class="subtitle">Macroeconomic factors</h3>
        <p class="content">
          Supply: includes crude oil resources that can be actually extracted from land or sea, and oil reserves, including the number of barrels of oil that can be produced at economically advantageous prices daily, weekly, or monthly.
          <br />Demand: Rely on oil supply and by-products to sustain global economic growth, and use alternative energy sources such as wind, hydropower, and solar energy.
        </p>
        <h3 class="subtitle">Relationships among major players in the oil market</h3>
        <p class="content">
          Production agreement between major oil producers regarding the quantity of oil produced.
          <br />The imposition (or cancellation) of political or economic sanctions on oil exporting countries such as the Middle East, Iran, Venezuela, Qatar, or Russia may result in fluctuations in global oil prices and other commodity futures prices.
        </p>
        <h3 class="subtitle">Speculation and trading sentiment</h3>
        <p
          class="content"
        >Trading oil through futures contracts is considered a common form of trading. Due to a large number of market speculators-central banks, investment banks, financial institutions, brokerage companies, individual investors, intra-day traders, etc., this activity can strengthen or reverse the momentum of oil prices.</p>
        <div class="title">Calculation method of crude oil CFD contract</div>
        <img src="../images/produckSix.png" style="width:100%" alt="excel" />
      </div>
      <div class="box" v-if="primary===7">
        <div class="title">What are the most traded precious metals</div>
        <p class="content">
          As a highly conductive and ductile metal, gold does not react with other elements and is widely used in industrial and commercial applications. In addition, gold has always been a symbol of wealth in the long river of history. Since prehistoric times, gold has been used for exchange, and the first gold coin was discovered in 600 BC. To this day, gold is still a solid investment-preserving asset.
          <br />Like gold, silver continued into the nineteenth century. Industrial, commercial and consumer demand make silver a powerful asset for investment. For more than 4000 years, silver has also been used for currency exchange, and derivatives such as silver futures are traded on different exchange markets around the world.
        </p>
        <div class="title">What are the factors that affect the price of gold</div>
        <p class="content">Unlike most commodities that depend on production and consumption levels, the trading price of gold and silver closely follows the pulse of political changes, and investors regard it as a safe-haven market when the market is unstable and a reserve for asset value.</p>
        <h3 class="subtitle">Gold Supply and Demand</h3>
        <p
          class="content"
        >Gold mine mining volume, central bank reserves sell-off volume and old gold recovery volume. For example, the market is worried about the prospects of the US dollar and the demand for gold has increased, but at the same time the mining volume of gold mines has fallen.</p>
        <h3 class="subtitle">Global central bank</h3>
        <p class="content">Global central banks are large holders of gold, and the central bank's gold holdings directly affect gold price fluctuations. If the central bank continues to absorb or increase its gold holdings, the price of gold will rise. If the central bank sells gold, the price of gold will go down;</p>
        <h3 class="subtitle">Stock market</h3>
        <p
          class="content"
        >Historically, the price of gold and the economy and stocks have diverged. When the stock market is bullish, the stock price rises and gold investment is taken away, causing the gold price to fall. When the stock market is bearish, the stock price is weak, and investors will switch to investing in gold, causing the price of gold to rise;</p>
        <h3 class="subtitle">Crude oil prices</h3>
        <p class="content">The characteristics of gold when fighting inflation. The price of crude oil is closely related to inflation. Therefore, there is a strong positive correlation between the price of gold and the price of crude oil. The rise in crude oil prices usually means the arrival of inflation, and the price of gold also rises at the same time.</p>
        <h3 class="subtitle">Dollar trend</h3>
        <p class="content">The liquidity of the dollar is better than that of gold, and the stability of gold is better than that of the dollar. When the US dollar strengthens, opportunities for investing in the US dollar increase and gold weakens. When the dollar weakens, the price of gold begins to strengthen.</p>
        <h3 class="subtitle">War and political situation</h3>
        <p class="content">When wars and political turmoil occur, the economy will be greatly affected. Any related currency will depreciate due to inflation. People will target gold, causing the price of gold to rise.</p>
        <h3 class="subtitle">financial crisis</h3>
        <p class="content">When a country's financial system becomes unstable, the world's funds will be invested in gold, causing the price of gold to rise. Gold now plays the role of capital refuge.</p>
        <h3 class="subtitle">inflation</h3>
        <p
          class="content"
        >The purchasing power of currency is determined by the price index. When prices are stable, the purchasing power of money is stable. Conversely, the higher the currency rate, the lower the currency purchasing power. When the price index of major countries remained stable, holding cash became the first choice for investors. Conversely, people will choose to buy gold and cause the price of gold to rise. Among them, the US inflation rate is the most likely to affect the movement of gold</p>
        <h3 class="subtitle">Local interest rate</h3>
        <p
          class="content"
        >When the currency interest rate is low, and the return on investment gold exceeds the return on interest rates, the price of gold will rise. Conversely, when interest rates rise, the interest income of currency will be more attractive. Investing in gold is not as stable and safe as money is charged at the bank, and the investment value of gold will fall. The price of gold will be frustrated.</p>
        <h3 class="subtitle">Calculation method of precious metal CFD contract</h3>
        <img src="../images/produckSeven.png" style="width:100%" alt="excel" />
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
      primary: 0,
      Switch: true
    };
  },
  computed: {
    getPrimary() {
      return this.$store.state.primary;
    },
    getSwitch() {
      return this.$store.state.Switch;
    }
  },
  watch: {
    getPrimary(val) {
      console.log(this.$store.state.primary);
      this.primary = val;
    },
    getSwitch(val) {
      console.log(this.$store.state.Switch);
      this.Switch = val;
    }
  },
  created() {
    this.Switch = this.$store.state.Switch;

  },
  methods: {
    jump(id) {
      this.$router.push({ path: "/Detail", query: { id } });
    }
  }
};
</script>
<style lang="scss">
$borColor: rgba(255, 255, 255, 0.1);
.produck {
  color: #000;
  text-align: left;
  .contBg {
    padding: 1px;
    background: url("../images/Understand.png") no-repeat;
    background-size: cover;
    padding-bottom: 1.937rem;
    min-height: 100vh;
    .box {
      width: 60%;
      padding: 1.8rem 0.5rem;
      border-radius: 2rem;
      background: #fff;
      margin: 0 auto;
      margin-top: 3rem;
      .title {
        color: #fff;
        font-size: 1.14rem;
        border-radius: 2rem;
        padding: 2px 0.5rem;
        padding-top: 0;
        background: #4f565f;
        margin-bottom: 1.72rem;
        display: inline-block;
      }
      .subtitle {
        color: #3797fe;
        margin-bottom: 2.11rem;
        font-size: 1rem;
      }
      .content {
        color: #333d47;
        font-size: 0.9rem;
        line-height: 1.5em;
        margin-bottom: 2.11rem;
      }
      img {
        margin: 1rem 0;
      }
    }
  }
}
</style>