<template>
<el-main style="padding: 0px;">
  <el-table
    :data="tableData"
    :default-sort = "{prop: 'post_date', order: 'descending'}"
    style="width: 100%">
    <el-table-column
      prop="post_date"
      label="날짜"
      sortable
      align="left"
      width="180"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="user_id"
      label="작성자"
      align="left"
      width="180">
    </el-table-column>
    <el-table-column
      prop="post_cate"
      label="카테고리"
      align="left"
      width="180">
    </el-table-column>
    <el-table-column
      prop="post_title"
      label="제목"
      align="left">
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

  <el-dialog title="포스트 수정" :visible.sync="dialogTableVisible" style="text-align: left;">
    <el-form label-width="120px" :model="postInfo" :label-position="labelPosition">
      <el-form-item label="제목" required>
        <el-input v-model="postInfo.title"></el-input>
      </el-form-item>
      <el-form-item label="부제목" required>
        <el-input v-model="postInfo.subTitle"></el-input>
      </el-form-item>
      <el-form-item label="카테고리" required>
        <el-input v-model="postInfo.cate" disabled></el-input>
      </el-form-item>
      <markdown-editor v-model="content" v-bind:is="selectedComponent" ref="markdownEditor" preview-class="markdown-body" :configs="configs"></markdown-editor>
    </el-form>
    <el-button type="primary" style="margin-left: 10px;" @click="updatePost">수정</el-button>
  </el-dialog>
</el-main>
</template>

<script>
import { getListAll, deletePostById, updatePostById } from "@/api/post";
import errHandler from "@/utils/errorHandler";
import markdownEditor from "@/components/markdown-editor";
import marked from "marked";

export default {
  components: {
    markdownEditor
  },
  data() {
    return {
      id: "",
      content: "",
      labelPosition: "left",
      selectedComponent: "markdownEditor",
      configs: {
        spellChecker: false, // disable spell check
        autoinit: false
      },
      dialogTableVisible: false,
      tableData: [
        // {
        //   date: "2016-05-03",
        //   name: "Tom",
        //   title: "No. 189, Grove St, Los Angeles"
        // }
      ],
      postInfo: {
        title: "",
        subTitle: "",
        cate: ""
      }
    };
  },
  created() {
    getListAll().then(response => {
      console.log(response.data);
      this.tableData = response.data;
    });
  },
  methods: {
    updatePost() {
      const data = {
        title: this.postInfo.title,
        subtitle: this.postInfo.subTitle,
        content: this.content,
        id: this.id
      };
      updatePostById(data).then(() => {
        window.location.reload();
      }).catch(err=> {
        errHandler(err)
      })
    },
    formatter(row, column) {
      return `${row.post_date.slice(0, 4)}-${row.post_date.slice(
        4,
        6
      )}-${row.post_date.slice(6, 8)}`;
    },
    handleEdit(index, row) {
      this.dialogTableVisible = !this.dialogTableVisible;
      this.postInfo.title = row.post_title;
      this.postInfo.subTitle = row.post_subtitle;
      this.postInfo.cate = row.post_cate;
      this.content = row.post_content;
      this.id = row.post_uid;
    },
    handleDelete(index, row) {
      this.$confirm("해당 포스트를 정말 삭제하시겠습니까?", "주의", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(() => {
          deletePostById(row.post_uid)
            .then(response => {
              if (response.data.success) {
                window.location.reload();
              }
            })
            .catch(function(err) {
              errHandler(err);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "삭제가 취소되었습니다."
          });
        });
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
