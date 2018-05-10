<template>
    <el-container>
        <el-header></el-header>
        <el-main></el-main>
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
  .el-container {
      width: 500px;
      height: 1000px;
      margin: 0 auto;
  }
  .el-main {
      width: 300px;
      background-color: #F9C0D1;
  }
  .el-header {
    height: 50%;
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
