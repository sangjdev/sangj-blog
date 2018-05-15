<template>
    <el-header class="main-title">
      <div id="title-wrapper">
        <div id="title">
          <router-link :to="'/home'" exact>Sangj</router-link>
        </div>
        <div id="sub-title">
          <span>Sangj's Blog & Life Style</span>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <router-link
              :to="'/home'" exact>
            <i class="el-icon-tickets"></i><br>
            메인
            </router-link>
          </li>
          <li>
            <router-link
              :to="'/documentation'" exact>
              <i class="el-icon-menu"></i><br>
              카테
            </router-link>
            <!-- <a href="#">
              <i class="el-icon-menu"></i><br>
              카테
            </a> -->
          </li>
          <li>
            <a href="#">
            <i class="el-icon-search"></i><br>
            찾기
            </a>
          </li>
        </ul>
      </nav>
    </el-header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed
      // when the window is scrolled
      if (window.scrollY === 0) {
        console.log("맨위");
      } else {
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
/* .el-container {
  height: 112px;
} */
#title {
  width: 100px;
  height: 40px;
  margin: 0 auto;
  margin-top: 120px;  
  background-color: #222;
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 2;
}
#title a {
  color: white;
}
#sub-title {
  margin-top: 10px;
}
.el-header {
  background-color: white;
  padding: 0 !important;
  margin-bottom: 120px;
  height: 182px !important;
  color: #222;  
}
.el-header nav {
  width: 120px;
  height: 80px;
  margin: 0 auto;
  margin-top: 40px;
}
nav a {
  color: #222;
  font-size: 14px;
}
nav ul li:hover:after {
  width: 20px;
}
nav ul li:after {
  transition: all 0.5s linear;
  width: 0;
  bottom: 0;
}
/* nav ul li:hover {
  border-bottom: 1px solid #222;
  transition-timing-function: ease-in;
  transition-property: border-bottom;
  transition-duration: 0.5s;
  transition-timing-function: linear;
} */
.el-header li {
  float: left;
  padding: 0 6px;
}
.el-header span {
  margin-top: 10px;
  padding: 8px;
  /* background-color: #222; */
  color: #999;
  font-size: 15px;
  text-align: center;
}
</style>