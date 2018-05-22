<template>
  <el-table
    :data="tableData"
    :default-sort = "{prop: 'date', order: 'descending'}"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="날짜"
      sortable
      align="left"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="작성자"
      align="left"
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="제목"
      align="left"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      label="설정" align="center" width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">수정</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">삭제</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          title: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          title: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          title: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          title: "No. 189, Grove St, Los Angeles"
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.title;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-table__row td {
  text-align: left;
}
</style>
