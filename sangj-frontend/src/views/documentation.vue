<template>
      <el-main>
        <el-row id="searchBox" :gutter="30" type="flex" justify="start">
          <el-col :xs="0" :sm="10" :md="10" :lg="10" :xl="10">
          <el-input v-model="input"></el-input>
          </el-col>
          <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="1">
          <el-button type="info">Search</el-button>
          </el-col>
        </el-row>
        <app-resp-aside></app-resp-aside>
        <el-row :gutter="10" type="flex" justify="start">
            <el-col :xs="8" :sm="6" :md="5" :lg="5" :xl="5">
              <div class="grid-content bg-purple">
              </div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="5" :lg="5" :xl="5">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="5" :lg="5" :xl="5">
              <div class="grid-content bg-purple">
              </div>
            </el-col>
            <app-aside></app-aside>
        </el-row>        
      </el-main>
</template>

<script>
import AppAside from "@/components/aside.vue";
import AppRespAside from "@/components/RespAside.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppAside,
    AppRespAside
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-main {
  background-color: white;
  height: 1300px;
}
.el-footer {
  background-color: #e5e9f2;
  color: #333;
  padding: 0 !important;
  height: 300px !important;
}
.grid-content {
  height: 400px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
#searchBox {
  margin-bottom: 50px;
}
/* .el-container {
    width: 100%;
    height: 1000px;
    background-color: #ffffff;
  }
  .el-header {
    width: 100%;
    height: 300px !important;
    margin: 0 auto;
    background-color: #A7c0d1;
    color: #333;
  }
  .el-main {
    width: 100%;
    height: 500px;
    margin: 0 auto;
    background-color: #f3c0d1;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 306px;
  }
@media (min-width: 768px) and (max-width: 979px) {
  .el-container {
    width: 100%;
    height: 1000px;
    background-color: #ffffff;
  }
  .el-header {
    width: 100%;
    height: 300px !important;
    margin: 0 auto;
    background-color: #A7c0d1;
    color: #333;
  }
  .el-main {
    width: 100%;
    height: 500px;
    margin: 0 auto;
    background-color: #f3c0d1;
  }
}
@media (min-width: 481px) and (max-width: 767px) {
  .el-container {
    width: 100%;
    height: 1000px;
    background-color: #ffffff;
  }
  .el-header {
    width: 100%;
    height: 300px !important;
    margin: 0 auto;
    background-color: #c7c0d1;
    color: #333;
  }
  .el-main {
    width: 100%;
    height: 500px;
    margin: 0 auto;
    background-color: #f3c0d1;
  }
}
@media (max-width: 480px) {
  .el-container {
    width: 100%;
    height: 1000px;
    background-color: #ffffff;
  }
  #wrap {
    position: relative;
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 56.26%;
    text-align: center;
    background-color: blue;
  }
  .el-header {
    width: 100%;
    height: 300px !important;
    margin: 0 auto;
    background-color: #b3c0d1;
    color: #333;
  }
  .el-main {
    width: 100%;
    height: 500px;
    margin: 0 auto;
    background-color: #f9c0d1;
  }
} */
</style>
