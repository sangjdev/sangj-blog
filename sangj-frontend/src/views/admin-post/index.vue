<template>
  <div class="md-wrapper">
      <markdown-editor v-model="postInfo.content" v-bind:is="selectedComponent" ref="markdownEditor" preview-class="markdown-body" :configs="configs"></markdown-editor>
      <input type="text" v-model="postInfo.name" readonly=true>
    <button type="submit" @click="save">저장</button>
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
  created() {

  },
  data() {
    return {
      postInfo: {
        content: "",
        name: mapGetters.name
      },
      configs: {
        spellChecker: false, // disable spell check
        autoinit: false
      },
      output: "",
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
      this.output = this.simplemde.markdown(this.postInfo.content);
      // this.$store.dispatch('ADDPOST')
      console.log(JSON.stringify(this.postInfo));
      console.log(this.output);
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