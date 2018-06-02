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
                        {{this.$store.state.count}}
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
                        <!-- <span class="demonstration">When you have more than 7 pages</span> -->
                        <el-pagination
                            layout="prev, pager, next" :current-page.sync="listQuery.page" :page-size="listQuery.limit" :total="total" :pager-count="5" @current-change="handleCurrentChange">
                        </el-pagination>
                    </div>
                </el-col>
            </el-row>
    </el-main>
</template>

<script>
import { mapGetters } from "vuex";
import { getList } from "@/api/post";

export default {
  data() {
    return {
      list: null,
      total: null,
      listQuery: {
        page: 1,
        limit: 5
      }
    };
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getList(this.listQuery).then(response => {
          console.log(JSON.stringify(response.data))
          this.list = response.data.items
          this.total = response.data.count
          console.log(this.list)
          console.log(this.total)
      });
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    }
  }
};
</script>

<style scoped>
.grid-content {
  min-height: 350px;
  margin-bottom: 30px;
  text-align: center;
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
  width: 85px;
  height: 30px;
  margin: 0 auto;
  background-color: #222;
}
#more a {
  color: white;
  font-size: 13px;
  text-align: center;
  line-height: 2.3;
}
</style>