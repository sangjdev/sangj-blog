<template>
    <el-footer>
      <div class="container">
        <ul>
          <li>
            <router-link :to="'/home'" exact>
            HOME
            </router-link>
          </li>
          <li>
            <router-link :to="'/documentation'" exact>
            CATE
            </router-link>
          </li>
          <li>
            <router-link :to="'/info'" exact>
            INFO
            </router-link>
          </li>
        </ul>
      <span>
        <a href="https://github.com/sangjdev/sangj-blog">
          <icon name="github" scale="2"></icon>
        </a>
      </span>
      </div>
    </el-footer>
</template>

<script>
export default {
  created() {
    console.log("4등");
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
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.el-footer {
  background-color: #222;
  padding: 0 !important;
  height: 180px !important;
  line-height: 1.1;
  color: white;
  font-size: 25px;
}
.container {
  width: 300px;
  height: 180px;
  margin: 0 auto;
}
.container ul {
  width: 300px;
  height: 120px;
  text-align: center;
}
.container ul li {
  width: 100px;
  height: 120px;
  line-height: 5;
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