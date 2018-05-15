<template>
    <el-main>
        <el-row type="flex" justify="center">
              <el-col :span="12">
                  <div class="grid-content">
                      <h1>Sangj Blog Title</h1>
                      <div id="sub-title">
                        <i class="el-icon-date"></i> 2018-05-14 | 
                        <i class="el-icon-menu"></i>  Vue.js | 
                        <i class="el-icon-view"></i> <u>100 views</u>
                      </div>
                      <div id="content">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                          <br>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                          <br>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      </div>
                      <div id="main"><router-link :to="'/home'" exact>메인 »</router-link></div>
                  </div>
              </el-col>
          </el-row>
    </el-main>
</template>

<script>
export default {};
</script>

<style scoped>
.grid-content {
    min-height: 350px;
    margin-bottom: 30px;
    text-align: center;
}
#sub-title {
    font-size: 12px;
    color: #999;
}
#content {
    padding: 50px 0px;
    letter-spacing: 2px;
    line-height: 1.5;
}
#main {
    width: 85px;
    height: 30px;
    margin: 100px auto;
    background-color: #222;
}
#main a {
    color: white;
    font-size: 13px;
    text-align: center;
    line-height: 2.3;
}
</style>