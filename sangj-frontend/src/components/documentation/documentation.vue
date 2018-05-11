<template>
    <!-- <el-container>
        <el-header>Header</el-header>
          <el-row type="flex" justify="center">
            <el-col :span="24"><div class="grid-content bg-purple-dark">CATEGORIES</div></el-col>
          </el-row>
          <el-row :gutter="10" type="flex" justify="center">
            <el-col :xs="8" :sm="6" :md="5" :lg="5" :xl="5">
              <div class="grid-content bg-purple">
              </div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="5" :lg="5" :xl="5">
              <div class="grid-content bg-purple">
              </div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="5" :lg="5" :xl="5">
              <div class="grid-content bg-purple">
              </div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="15"><div class="grid-content bg-purple-dark">CATEGORIES</div></el-col>
        </el-row>
    </el-container> -->
    <el-container>
      <el-header>
        Header
        <!-- <el-row type="flex" justify="center">
            <el-col :span="24"><div class="grid-content bg-purple-dark">CATEGORIES</div></el-col>
        </el-row> -->
      </el-header>
      <!-- <el-main>Main</el-main>
      <el-footer>Footer</el-footer> -->
    </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    padding: 0 !important;
    height: 100px;
  }
  .grid-content {
    height: 100px;
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
