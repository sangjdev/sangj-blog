<template>
    <el-main>
      <button @click="count">button</button>
      <el-row type="flex" justify="center" v-for="(li, i) in list" :key="i" v-loading="loading" :val="value">
          <el-col :span="12">
              <div class="grid-content">
                  <h1>{{li.post_title}}</h1>
                  <div id="sub-title" v-show="!loading">
                      <i class="el-icon-date"></i> 2018-05-14 | 
                      <i class="el-icon-menu"></i>  Vue.js | 
                      <i class="el-icon-view"></i> <u>100 views</u>
                      <!-- {{li.post_content}} -->
                  </div>
                  <div id="content" v-show="!loading">
                      {{li.post_subtitle}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <router-link id="more" :to="'/post/' + li.post_uid" exact>더보기 <i class="el-icon-d-arrow-right"></i></router-link>
                      <!-- Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. -->
                  </div>
                  <div class="line" v-show="!loading"></div>
              </div>
          </el-col>
      </el-row>
          <!-- <el-row type="flex" justify="center">
              <el-col :span="12">
                  <div class="grid-content">
                      <h1>Sangj Blog Title</h1>
                      <div id="sub-title">
                        <i class="el-icon-date"></i> 2018-05-14 | 
                        <i class="el-icon-menu"></i>  Vue.js | 
                        <i class="el-icon-view"></i> <u>100 views</u>
                      </div>
                      <div id="content">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </div>
                      <div id="more"><router-link :to="'/post'" exact>더보기 »</router-link></div>
                      <div class="line"></div>
                  </div>
              </el-col>
          </el-row>
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
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </div>
                      <div id="more"><router-link :to="'/post'" exact>더보기 »</router-link></div>
                      <div class="line"></div>
                  </div>
              </el-col>
          </el-row>
          <el-row type="flex" justify="center">
                <el-col :span="12">
                    <div class="block">
                        <el-pagination
                            layout="prev, pager, next" :current-page.sync="listQuery.page" :page-size="listQuery.limit" :total="total" :pager-count="5" @current-change="handleCurrentChange">
                        </el-pagination>
                    </div>
                </el-col>
            </el-row> -->
    </el-main>
</template>

<script>
import { mapGetters } from "vuex";
import { getList } from "@/api/post";
import { EventBus } from "@/main";
export default {
  data() {
    return {
      cc: 0,
      loading: true,
      list: [
        {
          post_uid: 0,
          post_title: "",
          post_subtitle: "",
          post_content: "",
          post_date: "",
          post_cate: "",
          post_color: "",
          user_id: "",
          use_yn: ""
        }
      ],
      // list: [{"post_uid":20,"post_title":"node.js의 시작","post_subtitle":"node.js의 기초를 다져보는 시간","post_content":"<p><strong>node.js의 기초를 배우봅시다.</strong></p>\n<ol>\n<li>서버만들기</li>\n<li>express엔진</li>\n<li>routing</li>\n<li>렌더링</li>\n</ol>\n","post_date":"20180604","post_cate":"node.js","post_color":"#EDF732","user_id":"이상정","use_yn":"Y"}],
      // total: null,
      // {"items":"count":2}
      // ,
      listQuery: {
        page: 1,
        limit: 5
      },
      value: "GG",
      abc: "abc"
    };
  },
  mounted() {
    if (this.$store.getters.cateInfo.value != "") {
      this.getList.then(() => {
        this.loading = false;
      });
    }
    console.log("1등 마운트");
  },
  updated() {
    // this.list = this.listByCate();
    console.log('this.$store.getters.cateInfo.value : ' + this.$store.getters.cateInfo.value)
    if (this.$store.getters.cateInfo.value != "") {
      this.getList.then(() => {
        this.loading = false;
      });
    }
    console.log("updated-index.vue-updated");
  },
  created() {
    let self = this;
    console.log(
      "this.$store.getters.cateInfo index.js RESUTL :: :: " +
        this.$store.getters.cateInfo.value
    );
    EventBus.$on("message", function(obj) {
       console.log('odj : ' + obj)
       self.value = obj;
       console.log('this. value : ' + this.value)
    });
    console.log("3등");
  },
  methods: {
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    count() {
      this.$store.state.count++;
      this.cc = this.$store.getters.count;
      console.log("data : " + this.cc);
      console.log("value : " + this.value)
      console.log(this.$store.getters.cateInfo.value);
      
      if (this.$store.getters.cateInfo.value != "") {
        this.getList.then(() => {
          this.loading = false;
        });
      }
    }
    // listByCate() {
    //   return this.$store.getters.getList;
    // }
  },
  computed: {
    getList() {
      return getList(this.listQuery).then(response => {
        console.log(JSON.stringify(response.data));
        this.list = response.data.items;
        this.total = response.data.count;
      });
    }
  }
};
</script>

<style scoped>
.el-main {
  min-height: 600px;
}
.grid-content {
  min-height: 350px;
  margin-bottom: 30px;
  text-align: left;
}
.bg-purple {
  background: #d3dce6;
}
.line {
  width: 50px;
  padding: 40px 0px;
  margin: 0 auto;
  border-bottom: 1px solid #999;
}
.block {
  padding: 40px 0px;
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
#more {
  color: #999;
  font-size: 13px;
  text-align: center;
  line-height: 2.3;
}
</style>