<template>
    <el-main>
      <!-- {{this.cc}} -->
      <el-row type="flex" justify="center" v-for="(li, i) in list" :key="i" v-loading="loading" :val="value">
          <!-- <el-col :span="12"> -->
            <el-col :xs="22" :sm="12" :md="12" :lg="12" :xl="12">
              <div class="grid-content">
                  <h1>{{li.post_title}}</h1>
                  <div id="sub-title" v-show="!loading">
                      <i class="el-icon-date"></i> {{li.post_date | dateFormatter}} | 
                      <i class="el-icon-menu"></i>  {{li.post_cate}}
                      <!-- <i class="el-icon-view"></i> <u>100 views</u> -->
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
      <v-pagination></v-pagination>
    </el-main>
</template>

<script>
import { mapGetters } from "vuex";
import { getList } from "@/api/post";
import VPagination from "@/components/VPagination";
import errHandler from "@/utils/errorHandler";
// import { EventBus } from "@/main";
export default {
  components: {
    VPagination
  },
  data() {
    return {
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
      // listQuery: {
      //   cate: "",
      //   page: 1,
      //   limit: 5
      // },
      value: "",
      abc: "abc",
      cc: 0
    };
  },
  created() {
    // let self = this;
    // 이벤트버스방식을 이용하면 이벤트를
    // EventBus.$on("message", function(obj) {
    //   self.value = obj;
    //   this.loading = false;
    // });
    if (this.cateInfo != "") {
      this.getList
        .then(() => {
          this.loading = false;
        })
        .catch(function(err) {
          console.log("err 1: " + err);
          errHandler(err);
        });
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    }
  },
  computed: {
    getList() {
      this.listQuery.cate = this.cateInfo;
      return getList(this.listQuery)
        .then(response => {
          this.list = response.data.items;
          const total = response.data.count;
          this.$store.dispatch("SETTOTAL", total);
        })
        .catch(function(err) {
          console.log("err 2: " + err);
          errHandler(err);
        });
    },
    // getList() {
    //   this.listQuery.cate = this.cateInfo;
    //   return getList(this.listQuery).then(response => {
    //     console.log(JSON.stringify(response.data));
    //     console.log("this.cateInfo getters : " + this.cateInfo);
    //     this.list = response.data.items;
    //     this.total = response.data.count;
    //   });
    // },
    cateInfo() {
      return this.$store.getters.cateInfo.value;
    },
    listQuery() {
      return this.$store.getters.listQuery;
    }
  },
  watch: {
    cateInfo(cateInfo, oldCateInfo) {
      this.$store.commit("INITPAGE");
      if (cateInfo != "") {
        this.getList.then(() => {
          this.loading = false;
        });
      }
    },
    listQuery(listQuery) {
      this.getList.then(() => {
        this.loading = false;
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