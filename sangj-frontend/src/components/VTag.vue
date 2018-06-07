<template>
    <div class="tag-container">
        <div v-for='(item,i) in items' :key="i" id="tag">
          {{item.value}}&nbsp;[{{item.count}}]
        </div>
    </div>
</template>

<script>
import { getCateListCount } from "@/api/post";
export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    getCateListCount().then(response => {
      this.items = response.data
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
#tag {
  /* width: 80px;
  height: 25px; */
  display: inline;
  margin: 6px;
  padding: 10px 8px;
  background-color: white;
  color: #222;
  border: 1px solid #222;
  border-radius: 4px;
}
</style>