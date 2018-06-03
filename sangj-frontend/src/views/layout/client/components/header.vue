<template>
    <el-header class="main-title" v-bind:style="{ height: returnHeight }">
      <div id="title-wrapper">
        <el-collapse-transition>
          <div id="title" class="title" v-if="show"></div>
        </el-collapse-transition>
        <div id="sub-title">
          <i class="el-icon-arrow-left"></i>
          <span @click="handleClick">Life Style</span>
          <i class="el-icon-arrow-right"></i>
          <!-- Sangj's Blog &  -->
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
          </li>
          <li>
            <a @click="dialogVisible = true" style="cursor: pointer">
            <i class="el-icon-search"></i><br>
            찾기
            </a>
          </li>
        </ul>
      </nav>
      <el-dialog id="dia"
        title="Search"
        :visible.sync="dialogVisible">
        <el-input placeholder="제목을 입력하세요." v-model="input" clearable></el-input>
        <span slot="footer" class="dialog-footer">
          <!-- <el-button @click="dialogVisible = false">Cancel</el-button> -->
          <el-button @click="dialogVisible = false">Search</el-button>
        </span>
      </el-dialog>
    </el-header>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      height: "2",
      activeIndex: "1",
      activeIndex2: "1",
      dialogVisible: false,
      input: ""
    };
  },
  computed: {
    returnHeight: function() {
      return this.height;
    }
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
    changeHeight: function(event) {
      this.width = "110px";
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick() {
      console.log("123클릭");
      this.show = !this.show;
      this.changeHeight();
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
.el-dialog {
  width: 50% !important;
}
@media (min-width: 1200px) and (max-width: 1920px) {
  /* insert styles here */
  /* a {
    background-color: red;
  }
  #dia {
    width: 100% !important;
    margin: 0 auto;
  } */
}
@media (max-width: 768px) {
  /* a {
    background-color: red;
  } */
  .el-dialog {
    width: 100% !important;
  }
}
/* .el-container {
  height: 112px;
} */
.el-header {
  background-color: white;
  padding: 0 !important;
  margin-bottom: 120px;
  height: 252px !important;
  color: #222;
}
.el-header span {
  border-radius: 30px;
  margin-top: 10px;
  padding: 30px 40px;
  background-color: #2fc77a;
  color: white;
  font-size: 15px;
  text-align: center;
}

#title {
  height: 120px;
  /* background: #f2f2f2;   */
}
#sub-title {
  line-height: 1.8;
  height: 35px;
  background: #2fc77a;
}
#sub-title span {
  margin: 0px 3px;
  cursor: pointer;
}
#sub-title i {
  color: white;
  cursor: pointer;
  font-size: 10px;
  margin: 0px 10px;
}
.el-header nav {
  width: 240px;
  height: 80px;
  margin: 0 auto;
  padding: 60px 0;
}
nav a {
  color: #222222;
  font-size: 14px;
}
nav ul li {
  float: left;
  padding: 12.5px 25px;
}
/* nav ul li:hover:after {
  width: 20px;
}
nav ul li:after {
  transition: all 0.5s linear;
  width: 0;
  bottom: 0;
} */

/* nav ul li:hover {
  border-bottom: 1px solid #222;
  transition-timing-function: ease-in;
  transition-property: border-bottom;
  transition-duration: 0.5s;
  transition-timing-function: linear;
} */
</style>