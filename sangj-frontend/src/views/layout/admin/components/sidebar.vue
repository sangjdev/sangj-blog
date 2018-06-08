<template>
    <el-col class="aside">
			<el-menu
			default-active="1"
			class="el-menu-vertical-demo"
			background-color="#304156"
			text-color="#bfcbd9"
			:router=true
			active-text-color="#ffd04b">
			<el-menu-item index="1" route='/admin' @click='setTitle("관리자 메인")'>
				<i class="el-icon-setting"></i>
				<span>관리자 메인</span>
			</el-menu-item>
			<el-menu-item index="2" route='/admin' @click='setTitle("카테고리")'>
				<i class="el-icon-menu"></i>
				<span>카테고리</span>
			</el-menu-item>
			<el-menu-item index="3" route='/admin/list' @click='setTitle("글 목록")'>
				<i class="el-icon-document"></i>
				<span>글 목록</span>
			</el-menu-item>
			<el-menu-item index="4" route='/admin/post' @click='setTitle("글 작성")'>
				<i class="el-icon-edit"></i>
				<span>글 작성</span>
			</el-menu-item>
			<el-menu-item index="5" disabled>
				<i class="el-icon-setting"></i>
				<span>추가 기능</span>
			</el-menu-item>
			</el-menu>
  		</el-col>
</template>

<script>
export default {
	data() {
		return {
			// menu: [] 동적으로 생성될때 배열만들어서 v-for 돌리고 싶은데 효율성이 많이  떨어짐
			// 규모가 큰것도 아니고 필요없는 기능이다.
		}
	},
	methods: {
		setTitle(title) {
			this.$store.dispatch('SETADMINTITLE', title);
		}
	}
};
</script>

<style scoped>
a {
	color: red;
}
.aside {
  width: 100%;
  height: 100%;
  background: #304156;
}
.el-menu {
  border-right: 0px;
}
.el-submenu {
  text-align: left;
}
.el-menu-item {
  text-align: left;
}
</style>