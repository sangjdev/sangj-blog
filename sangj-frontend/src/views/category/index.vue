<template>
<el-container>
      <el-main>
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="15" class="grid-title">
            <h1><span class="cate">CATEGORIES</span></h1>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="15">
            <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8" v-for="(key,i) in cateKey" :key="i">
              <div class="grid-content">
                <ul>
                  <li><span><i class="el-icon-menu"></i>&nbsp;&nbsp;&nbsp;{{key}}</span></li>
                  <ul class="children">
                    <li v-for="(list, i) in cateList[key][0]" :key="i">
                      <router-link id="more" :to="'/post/' + list._uid" exact>
                        <span><i class="el-icon-tickets"></i>&nbsp;&nbsp;{{list.post_title}}</span>
                      </router-link>
                    </li>
                  </ul>
                </ul>
              </div>
            </el-col>
          </el-col>
          


            <!--
            <el-col :xs="8" :sm="6" :md="5" :lg="5" :xl="5">
              <div class="grid-content">
                <ul>
                  <li><span><i class="el-icon-menu"></i>&nbsp;&nbsp;&nbsp;Vue.js</span></li>
                  <ul class="children">
                    <li><span><i class="el-icon-tickets"></i>&nbsp;&nbsp;tutorial</span></li>
                    <li><span><i class="el-icon-tickets"></i>&nbsp;&nbsp;tutorial</span></li>
                    <li><span><i class="el-icon-tickets"></i>&nbsp;&nbsp;tutorial</span></li>
                    <li><span><i class="el-icon-tickets"></i>&nbsp;&nbsp;tutorial</span></li>
                    <ul class="children">
                      <li><span><i class="el-icon-tickets"></i>&nbsp;&nbsp;tutorial</span></li>
                      <li><span><i class="el-icon-tickets"></i>&nbsp;&nbsp;tutorial</span></li>
                      <li><span><i class="el-icon-tickets"></i>&nbsp;&nbsp;tutorial</span></li>
                      <li><span><i class="el-icon-tickets"></i>&nbsp;&nbsp;tutorial</span></li>
                    </ul>
                  </ul>
                </ul>
              </div>
            </el-col> -->
            <!-- <el-col :xs="8" :sm="6" :md="5" :lg="5" :xl="5" v-for="(key,i) in cateKey" :key="i">
              <div class="grid-content">
                <ul>
                  <li><span><i class="el-icon-menu"></i>&nbsp;&nbsp;&nbsp;{{key}}</span></li>
                  <ul class="children">
                    <li v-for="(list, i) in cateList[key][0]" :key="i">
                      <router-link id="more" :to="'/post/' + list._uid" exact>
                        <span><i class="el-icon-tickets"></i>&nbsp;&nbsp;{{list.post_title}}</span>
                      </router-link>
                    </li>
                  </ul>
                </ul>
              </div>
            </el-col> -->
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="18" :md="15" :lg="15" :xl="15">
            <v-tag></v-tag>
          </el-col>
        </el-row>
      </el-main>
</el-container>
</template>

<script>
import VTag from "@/components/VTag.vue";
import { getListAll } from "@/api/post";
import groupBy from "@/utils/groupBy";
export default {
  data() {
    return {
      cateList: {},
      cateKey: []
    };
  },
  created() {
    getListAll().then(response => {
      const cateAll = response.data;
      const grouped = groupBy(cateAll, post => post.post_cate);
      grouped.forEach((element, i) => {
        this.cateList[i] = [];
        this.cateList[i].push(element);
        this.cateKey.push(i);
      });
    });
  },
  components: {
    VTag
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cate {
  background-color: white;
  color: #222;
  padding: 15px 0px;
}
.grid-title {
  text-align: left;
  padding: 50px 0px;
  min-height: 150px;
  margin-bottom: 30px;
}
/* .el-main {
  background-color: white;
  height: 1300px;
} */
.el-footer {
  background-color: #e5e9f2;
  color: #333;
  padding: 0 !important;
  height: 300px !important;
}
.grid-content ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.children {
  margin: 0px 0px 0px 30px !important;
  padding: 10px 0px !important;
}
.children li {
  margin: 10px 0px;
}
.children a {
  color: #2c3e50;
}
.children a:hover {
  border-bottom: 1px solid #2c3e50;
}
.grid-content {
  text-align: left;
  /* background-color:pink;  */
}
.grid-content h4 {
  margin: 0;
  padding: 5px;
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
@media (max-width: 768px) {
  .el-container {
    width: 100%;
  }
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
