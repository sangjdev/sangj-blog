<template>
  <div class="md-wrapper">
    <el-form ref="postInfo" :model="postInfo" :rules="rules" label-width="120px" :label-position="labelPosition">
      <el-form-item label="제목" prop="title" required>
        <el-input placeholder="제목을 입력하세요." v-model="postInfo.title"></el-input>
      </el-form-item>

      <el-form-item label="부제목" prop="subtitle" required>
        <el-input placeholder="부제목을 입력하세요." v-model="postInfo.subtitle" ></el-input>
      </el-form-item>

      <el-form-item label="카테고리 선택" prop="cate" required>
        <el-col :span="11">
          <el-select v-model="postInfo.cate" placeholder="카테고리 선택">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.value"
              :value="item">
              <span style="float: left">{{ item.value }}</span>
              <span style="float: right; font-size: 13px" v-bind:style="{color: item.color}">{{ item.color }}</span>
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <i :class="this.icon" style="font-size: 20px; cursor:pointer;" @click="addCate" v-show="addCateShow"></i>
        </el-col>
      </el-form-item>
      
      <el-form-item label="새 카테고리" v-show="cateShow" style="text-align: right;">
          <el-col :span="2">
            <el-color-picker v-model="option.color"></el-color-picker>
          </el-col>
          <el-col :span="9">
            <el-input placeholder="카테고리를 입력하세요." v-model="option.value"></el-input>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-success" @click.prevent="addOption" style="font-size: 20px; cursor:pointer;"></i>
          </el-col>
      </el-form-item>

      <markdown-editor v-model="content" v-bind:is="selectedComponent" ref="markdownEditor" preview-class="markdown-body" :configs="configs"></markdown-editor>
      
      <el-button type="danger" icon="el-icon-delete" round style="float: left;" @click.prevent="init"></el-button>
      <el-button type="primary" round @click="save('postInfo')">저장</el-button>
    </el-form>
  </div>
</template>

<script>
import markdownEditor from "@/components/markdown-editor";
import marked from "marked";
import hljs from "highlight.js";
import { mapGetters } from "vuex";
import { addPost, getCateList } from "@/api/post";

//this.$store.getters.name
window.hljs = hljs;
export default {
  components: {
    markdownEditor
  },
  data() {
    return {
      labelPosition: "left",
      addCateShow: true,
      cateShow: false,
      icon: "el-icon-circle-plus",
      option: {
        value: "",
        color: ""
      },
      options: [
        // { value: "Option1", color: "Option1" }
      ],
      rules: {
        title: [
          {
            required: true,
            message: "필수 입력 란입니다.",
            trigger: "blur"
          }
        ],
        subtitle: [
          {
            required: true,
            message: "필수 입력 란입니다.",
            trigger: "blur"
          }
        ],
        cate: [
          {
            required: true,
            message: "필수 선택 란입니다.",
            trigger: "blur"
          }
        ]
      },
      content: "",
      newCate: "",
      postInfo: {
        title: "",
        subtitle: "",
        cate: "",
        output: "",
        name: ""
      },
      configs: {
        spellChecker: false, // disable spell check
        autoinit: false
      },
      type: "markdown",
      selectedComponent: "markdownEditor"
    };
  },
  computed: {
    simplemde() {
      return this.$refs.markdownEditor.simplemde;
    },
    ...mapGetters(["name"])
  },
  destroyed() {
    console.log("Destroyed");
  },
  created() {
    getCateList().then(response => {
      this.options = response.data;
    });
  },
  methods: {
    save(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.postInfo.output = this.simplemde.markdown(this.content);
          this.postInfo.name = this.$store.getters.name;
          addPost(this.postInfo).then(response => {
            if (response.data.result === "success") {
              window.location.href = "/admin";
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      // this.postInfo.output = this.simplemde.markdown(this.content);
      // this.postInfo.name = this.$store.getters.name;
      // addPost(this.postInfo).then(response => {
      //   if (response.data.result === "success") {
      //     window.location.href = "/admin";
      //   }
      // });
    },
    addCate() {
      this.cateShow = !this.cateShow;
      if (this.icon === "el-icon-remove") {
        this.icon = "el-icon-circle-plus";
        return;
      }
      this.icon = "el-icon-remove";
    },
    addOption() {
      this.options.push(this.option);
      this.cateShow = !this.cateShow;
      this.addCateShow = !this.addCateShow;
      this.postInfo.cate = {
        value: this.option.value,
        color: this.option.color
      };
    },
    init() {
      this.$confirm("작성내용을 정말 삭제하시겠습니까?", "주의", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(() => {
          this.postInfo = {
            title: "",
            subtitle: "",
            cate: "",
            output: "",
            name: ""
          };
          (this.option = {
            color: "",
            value: ""
          }),
            (this.content = "");
          this.addCateShow = true;
          this.icon = "el-icon-circle-plus";
          (this.options = []),
            getCateList().then(response => {
              this.options = response.data;
            });
          this.$message({
            type: "success",
            message: "작성중이던 내용이 삭제되었습니다."
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

<style scoped>
@import "simplemde/dist/simplemde.min.css";
@import "github-markdown-css";
/* @import "../../node_modules/simplemde/dist/simplemde.min.css"; */
.md-wrapper {
  width: 600px;
  height: 500px;
}
/* @import '~sangj-frontend/dist/simplemde.min.css'; */
/* @import '~github-markdown-css'; */
</style>