<template>
  <div class="md-wrapper">
    <markdown-editor preview-class="markdown-body"></markdown-editor>
  </div>
  <!-- <markdown-editor preview-class="markdown-body"></markdown-editor> -->
</template>

<script>
import markdownEditor from "@/components/markdown-editor";

export default {
  components: {
    markdownEditor
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