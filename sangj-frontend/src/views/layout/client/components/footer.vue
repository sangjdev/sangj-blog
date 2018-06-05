<template>
    <el-footer v-cloak>
      <div class="container">
        <ul>
          <li>
            <a href="#">
            홈
            </a>
          </li>
          <li>
            <a href="#">
            카테고리
            </a>
          </li>
        </ul>
        <span><a href="https://github.com/sangjdev/sangj-blog">Git Repo</a></span>
      </div>      
    </el-footer>
</template>

<script>
export default {
  created() {
    console.log('4등')
  },
  mounted() {
    console.log("2등 마운트");
  },
  updated() {
    console.log("updated-footer.vue-updated");
  }
};
</script>

<style scoped>
.el-footer {
  background-color: #222;
  padding: 0 !important;
  height: 170px !important;
  line-height: 1.1;
  color: white;
  font-size: 25px;
}
.container {
  width: 150px;
  height: 80px;
  margin: 0 auto;
}
.container ul li {
  padding: 40px 20px;
  float: left;
}
.container ul li a {
  font-size: 14px;
  color: white;
}
.container span {
  background-color: #222;
}
.container span a {
  font-size: 14px;
  color: white;
}
[v-cloak] {
  display: none;
}
</style>