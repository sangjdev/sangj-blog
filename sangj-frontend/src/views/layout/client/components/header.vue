<template>
    <el-header class="main-title" v-cloak>
      <div id="title-wrapper">
        <transition name="el-fade-in-linear">
          <icon name="smile-o" v-show="show"></icon>
        </transition>
        <el-collapse-transition>
          <div id="title" class="title" v-if="show"></div>
        </el-collapse-transition>
        <div id="sub-title" :style="{ background : this.cateInfo.color }">
          <i class="el-icon-arrow-left" @click="leftClick"></i>
            <span @click="handleClick" :style="{ background : this.cateInfo.color }">{{this.cateInfo.value}}</span>
          <i class="el-icon-arrow-right" @click="rightClick"></i>
          <!-- Sangj's Blog &  -->
        </div>
      </div>
      <nav>
        <!-- {{this.$store.getters.count}} -->
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
          <!-- <li>
            <a @click="dialogVisible = true" style="cursor: pointer">
            <i class="el-icon-search"></i><br>
            찾기
            </a>
          </li> -->
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
import { getCateList, getListByCate } from "@/api/post";
import { EventBus } from "@/main";
import errHandler from "@/utils/errorHandler";

export default {
  data() {
    return {
      loading: false,
      show: false,
      height: "2",
      activeIndex: "1",
      activeIndex2: "1",
      dialogVisible: false,
      input: "",
      cateArrIndex: 0,
      cateArrLength: "",
      cateArr: [
        // { value: "vue.js", color: "#f1db40" },
        // { value: "node.js", color: "#2fc77a" }
        // { value: "vue.js", color: "#f1db40" },
        // { value: "node.js", color: "#2fc77a" },
        // { value: "typeScript", color: "#397fd6" },
        // { value: "ecmaScript", color: "#c240d2" }
      ],
      cateInfo: {
        value: "#ffffff",
        color: "#ffffff"
      }
    };
  },
  created() {
    console.log("2등");
    getCateList()
      .then(response => {
        this.cateArr = response.data;
        this.cateArrLength = this.cateArr.length - 1;
        this.cateInfo = this.cateArr[this.cateArrIndex];
        this.$store.dispatch("SETCATEINFO", this.cateInfo);
        // EventBus.$emit("message", this.cateInfo);
      })
      .catch(function(err) {
        console.log("err 3: " + err);
        errHandler(err);
      });
  },
  mounted() {
    console.log("3등 마운트");
  },
  updated() {
    console.log("헤더 업데이트");
    // this.$store.state.count = 10;
  },
  methods: {
    handleClick() {
      this.$store.state.count++;
      this.show = !this.show;
    },
    leftClick() {
      this.cateArrIndex = this.cateArrIndex - 1;
      if (this.cateArrIndex < 0) {
        this.cateArrIndex = this.cateArrLength;
        this.setCateInfo(this.cateArrLength);
        return;
      }
      this.setCateInfo(this.cateArrIndex);
    },
    rightClick() {
      this.cateArrIndex = this.cateArrIndex + 1;
      if (this.cateArrIndex > this.cateArrLength) {
        this.cateArrIndex = 0;
        this.setCateInfo(0);
        return;
      }
      this.setCateInfo(this.cateArrIndex);
    },
    setCateInfo(index) {
      this.cateInfo = {};
      this.cateInfo = this.cateArr[index];
      this.$store.dispatch("SETCATEINFO", this.cateInfo);
    }
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
  display: inline-block;
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
[v-cloak] {
  display: none;
}
</style>