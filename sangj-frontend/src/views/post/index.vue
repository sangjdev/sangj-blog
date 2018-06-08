<template>
    <el-main>
        <el-row type="flex" justify="center">
              <el-col :span="12">
                  <div class="post-content">
                      <h1>{{this.post.post_title}}</h1>
                      <div class="sub-title">
                        <i class="el-icon-date"></i> {{this.post.post_date | dateFormatter}} | 
                        <i class="el-icon-menu"></i>  {{this.post.post_cate}}
                        <!-- <i class="el-icon-view"></i> <u>100 views</u> -->
                      </div>
                      <article class="markdown-body">
                          <span v-html="this.post.post_content"></span>
                          <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                          <br>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                          <br>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> -->
                      </article>
                      <div class="home">
                        <router-link :to="'/documentation'" exact >
                          <i class="el-icon-menu"></i><br>
                        </router-link>
                      </div>
                      <!-- <div id="main"><router-link :to="'/home'" exact>메인 »</router-link></div> -->
                  </div>
              </el-col>
          </el-row>
    </el-main>
</template>

<script>
import { getPost } from "@/api/post";
import marked from "marked";
import errHandler from "@/utils/errorHandler";

export default {
  data() {
    return {
      post: {}
    };
  },
  created() {
    const id = this.$route.params.id;
    getPost(id).then(response => {
      this.post = response.data[0];
    }).catch(function (err) {
      errHandler(err);
    })
  }
};
</script>

<style>
@import "simplemde/dist/simplemde.min.css";
@import "github-markdown-css";

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px 0px;
  text-align: left;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
.post-content {
  min-height: 550px;
  margin-bottom: 30px;
  text-align: center;
}
.post-content h1 {
  text-align: left;
  font-size: 40px;
}
.sub-title {
  text-align: left;
  font-size: 12px;
  color: #999;
}
/* article {
  padding: 45px 0px;
  letter-spacing: 2px;
  line-height: 1.5;
} */
.home {
  width: 85px;
  height: 30px;
  margin: 100px auto;
  color: #222;
  font-size: 25px;
  text-align: center;
  line-height: 2.3;
}
.home a {
  color: #222;
}
</style>