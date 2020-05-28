<template>
  <div class="card">
    <img :src="resolve_img_url(src)" alt="图片" />
    <div class="pDiv">
      <p v-html="msg"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    msg: String,
    src: String
  },
  data() {
    return {
      imgSrc: ""
    };
  },
  created() {
    // this.imgSrc = require(this.src);
    // console.log(this.imgSrc);
  },
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("../assets/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  width:48.88rem;
  line-height: 0;
  img {
    width: 100%;
    height: 32.28rem;
  }
  .pDiv {
    line-height: 2.5em;
    background: url("../images/card.png");
    background-size: cover;
    padding: 1.421rem;
    p {
      color: #fff;
      font-size: 1rem;
      text-align: left;
    }
  }
}
</style>
