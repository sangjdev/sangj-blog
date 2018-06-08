<template>
    <div class="tag-container">
      <h1>POST COUNT</h1>
        <div v-for='(item,i) in items' :key="i" class="tag">
          <el-badge :value="item.count" class="item">
            {{item.value}}&nbsp;&nbsp;&nbsp;
          </el-badge>
        </div>
        <!-- <el-badge :value="12" class="item">
          <el-button size="small">comments</el-button>
        </el-badge> -->
    </div>
</template>

<script>
import { getCateListCount } from "@/api/post";
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    getCateListCount().then(response => {
      this.items = response.data;
    });
  },
  methods: {}
};
</script>

<style scoped>
.tag-container {
  padding: 50px;
  margin: 250px 0px;
  background-color: #f6f7f9;
  text-align: center;
  overflow: hidden;
  letter-spacing: 1px;
}
.tag-container h1 {
  margin-bottom: 70px;
}
.tag {
  /* width: 80px;
  height: 25px; */
  display: inline;
  margin: 6px 12px;
  padding: 10px 8px;
  background-color: white;
  color: #222;
  border-radius: 4px;
}
</style>