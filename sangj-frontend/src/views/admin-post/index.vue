<template>
  <div class="md-wrapper">
    <el-form ref="postInfo" :model="postInfo" label-width="120px" :label-position="labelPosition">
      <el-form-item label="제목">
        <el-input placeholder="제목을 입력하세요." v-model="postInfo.title"></el-input>
      </el-form-item>

      <el-form-item label="부제목">
        <el-input placeholder="부제목을 입력하세요." v-model="postInfo.subtitle"></el-input>
      </el-form-item>

      <el-form-item label="카테고리 선택">
        <el-col :span="11">
          <el-select v-model="value" placeholder="카테고리 선택">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="11">
          <el-button type="primary" @click="addCate">카테고리 추가</el-button>
        </el-col>
      </el-form-item>
      
        <el-container v-show="newCateShow" style="text-align: right;">
          <el-col :span="5"></el-col>
          <el-col :span="2">
            <el-color-picker v-model="color"></el-color-picker>
          </el-col>
          <el-col :span="10">
            <el-input placeholder="카테고리를 입력하세요." v-model="newCate"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button type="success" icon="el-icon-check" circle></el-button>
          </el-col>
        </el-container>

        <markdown-editor v-model="content" v-bind:is="selectedComponent" ref="markdownEditor" preview-class="markdown-body" :configs="configs"></markdown-editor>
        <el-button type="primary" round @click.prevent="save">저장</el-button>
    </el-form>
  </div>
</template>

<script>
import markdownEditor from "@/components/markdown-editor";
import hljs from "highlight.js";
import { mapGetters } from "vuex";
//this.$store.getters.name
window.hljs = hljs;
export default {
  components: {
    markdownEditor
  },
  created() {},
  data() {
    return {
      labelPosition: 'left',
      
      form: {
      },
      newCateShow: false,
      color: "#409EFF",
      options: [
        {
          value: "Option1",
          label: "Option1"
        },
        {
          value: "Option2",
          label: "Option2"
        },
        {
          value: "Option3",
          label: "Option3"
        },
        {
          value: "Option4",
          label: "Option4"
        },
        {
          value: "Option5",
          label: "Option5"
        }
      ],
      value: "",
      content: "",
      
      newCate: '',
      postInfo: {
        output: "",
        name: "",
        title: '',
        subtitle: ''
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
  methods: {
    save() {
      this.postInfo.output = this.simplemde.markdown(this.content);
      this.postInfo.name = this.$store.getters.name;
      console.log(this.content);
      console.log("this.postInfo ; " + JSON.stringify(this.postInfo));
      // this.$store.dispatch('ADDPOST',this.postInfo)
    },
    addCate() {
      this.newCateShow = !this.newCateShow;
    }
  }
};
</script>

<style scoped>
/* @import "../../node_modules/simplemde/dist/simplemde.min.css"; */
.md-wrapper {
  width: 600px;
  height: 500px;
}
/* @import '~sangj-frontend/dist/simplemde.min.css'; */
/* @import '~github-markdown-css'; */
</style>