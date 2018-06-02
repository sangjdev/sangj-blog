<template>
    <el-row type="flex" justify="center">
        <el-col :span="12">
            <div class="block">
                <!-- <span class="demonstration">When you have more than 7 pages</span> -->
                <el-pagination
                    layout="prev, pager, next" :current-page.sync="listQuery.page" :page-size="listQuery.limit" :total="total" :pager-count="5" @current-change="setPage">
                </el-pagination>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
  data() {
    return {
      list: null,
      total: 30,
      listQuery: {
        page: 1,
        limit: 5
      }
    };
  },
  created() {
  },
  methods: {
    setPage() {
      console.log("listQuery : " + JSON.stringify(this.listQuery));
      this.$store.dispatch("SETPAGE", this.listQuery);
      const page = this.$store.getters.listQuery.page;
      console.log('pagepage : '+ page)
      // window.location.href= "/home/" + page
      this.$router.push({ name: "homeNum", params: { page: page } });
    }
  }
};
</script>

<style scoped>
.block {
  padding: 40px 0px;
}
</style>