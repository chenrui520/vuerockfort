<template>
  <div class="WhyYouChoose">
    <div class="contBg">
      <div @click="jump(item.id)" v-for="item in datas" :key="item.id" class="items">
        <div class="img">
          <img :src="item.thumbnail" alt />
        </div>
        <div class="text">
          <h3>{{item.title}}</h3>
          <p class="textBody" v-html="item.excerpt"></p>
          <p class="p" >
            {{item.author.name}}
            <span class="time">{{item.modified}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://www.rfmhub.com/cn/api/get_recent_posts/"/>
<script>
import axios from 'axios'
export default {
  name: "detail",
  components: {},
  data() {
    return {
      datas: [
        
      ]
    };
  },
  created (){
    let that = this   
    this.AJAX.ajax({ 
     url: 'https://www.rfmhub.com/cn/api/',  // 请求地址
     jsonp: 'jsonpCallback', // 采用jsonp请求，且回调函数名为"jsonpCallbak"，可以设置为合法的字符串
     data: {'json': 'get_recent_posts'},  // 传输数据
     success:function(res){  // 请求成功的回调函数
      console.log(res); 
      if(res.status==='ok'){
        that.datas = res.posts
      }
     },
     error: function(error) {}  // 请求失败的回调函数
    })
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
.WhyYouChoose {
  color: #fff;
  .contBg {
    padding: 1px;
    background: url("../images/detailP.png");
    background-size: cover;
    padding-bottom: 1.937rem;
    .items {
      width: 62.4%;
      margin: 0 auto;
      cursor: pointer;
      margin-top: 2.017rem;
      background: url("../images/12.png");
      padding: 2.259rem 1.694rem;
      display: flex;
      overflow: hidden;
      .img {
        width: 28%;
        height: 9.685rem;
        img {
          width: 16.74rem;
          height: 9.685rem;
        }
      }
      .text {
        flex: 1;
        height: 9.685rem;
        position: relative;
        text-align: left;
        h3 {
          font-size: 1.291rem;
        }
        .textBody {
          font-size: 1rem;
          margin-top: 1.573rem;
          line-height: 2em;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box; //作为弹性伸缩盒子模型显示。
          -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
          -webkit-line-clamp: 2;
        }
        .p {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 1rem;
          .time {
            color: #ccc;
            position: absolute;
            right: 0;
          }
        }
      }
    }
  }
}
</style>