<template>
  <div class="md-wrapper">
    <markdown-editor v-model="content" preview-class="markdown-body" :configs="configs"></markdown-editor>
    <button type="submit" @click="save">저장</button>
  </div>
  <!-- <markdown-editor preview-class="markdown-body"></markdown-editor> -->
</template>

<script>
import markdownEditor from "@/components/markdown-editor";
import hljs from "highlight.js";

window.hljs = hljs;
export default {
  components: {
    markdownEditor
  },
  data() {
    return {
      content: "",
      configs: {
        spellChecker: false, // disable spell check
        autoinit: false
      }
    };
  },
  methods: {
    save() {
      console.log(this.content);
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