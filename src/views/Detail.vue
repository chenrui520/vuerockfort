<template>
  <div class="detail">
    <div>
      <div class="headerImg" style="position:relative">
        <div class="Mask">
          <h3 style="z-index:10">{{data.title}}</h3>
          <div class="p">{{data.author.name }}</div>
          <div class="p">{{data.modified}}</div>
          <!-- <p
            style="z-index:10"
          >Rockfort由纳斯达克上市公司股东等组成的数位投资人共同出资的一个品牌。岩石Rock反映了我们坚实的基础，堡垒Fort代表我们的承诺。Rockfort承诺提供全球投资者，交易员坚实稳定的交易服务，交易产品，交易系统，交易安全。
          </p> -->
        </div>
      </div>
      <div class="contBg">
        <p v-html="data.content">
         
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  components: {},
  data() {
    return {
      hoverFn: false,
      conts:'',
      data:{}
    };
  },
  created(){
    let that = this
    
    this.AJAX.ajax({ 
     url: 'https://www.rfmhub.com/cn/api/',  // 请求地址
     jsonp: 'jsonpCallback', // 采用jsonp请求，且回调函数名为"jsonpCallbak"，可以设置为合法的字符串
    data: {'json': 'get_recent_posts'},  // 传输数据
     success:function(res){  // 请求成功的回调函数
      if(res.status==='ok'){
        res.posts.forEach(e => {
          if(e.id==that.$route.query.id){
            that.data = e
          }
        });
      }
     },
     error: function() {}  // 请求失败的回调函数
    });
  },
  mounted:{

  }
};


</script>
<style lang="scss">
$borColor: rgba(255, 255, 255, 0.1);
.detail {
  color: #fff;
  .headerImg {
    height: 25rem;
    margin-top: -4.76rem;
    background: url("../images/detail.png");
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
        margin-top: 9.281rem;
      }
      .p {
        width: 33.5%;
        margin: 0 auto;
        font-size: 1.421rem;
        margin-top: 2.421rem;
        color: #fff;
      }
      p {
        background: url("../images/11.png");
        // width: 62.6%;
        margin: 10px 40px;
        font-size: 1.049rem;
        line-height: 2em;
        padding-top: 1rem;
        // margin-top: 2.623rem;
        border: 1px dashed $borColor;
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
      img{
        max-width: 100% !important;
      }
      div{
        max-width: 100% !important;
      }
      video{
        max-width: 100% !important;
      }
    }
  }
}
</style>