<template>
    <el-col class="aside">
			<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			background-color="#304156"
			text-color="#bfcbd9"
			router=true
			active-text-color="#ffd04b">
			<!-- <el-submenu index="1">
				<template slot="title">
				<i class="el-icon-location"></i>
				<span>Navigator One</span>
				</template>
				<el-menu-item-group title="Group One">
				<el-menu-item index="1-1">item one</el-menu-item>
				<el-menu-item index="1-2">item one</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="Group Two">
				<el-menu-item index="1-3">item three</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="1-4">
				<template slot="title">item four</template>
				<el-menu-item index="1-4-1">item one</el-menu-item>
				</el-submenu>
			</el-submenu> -->
			<el-menu-item index="/home" route='/admin'>
				<i class="el-icon-setting"></i>
				<span>관리자 메인</span>
			</el-menu-item>
			<el-menu-item index="2" route='/admin'>
				<i class="el-icon-menu"></i>
				<span>카테고리</span>
			</el-menu-item>
			<el-menu-item index="3" route='/admin/list'>
				<i class="el-icon-document"></i>
				<span>글 목록</span>
			</el-menu-item>
			<el-menu-item index="4" route='/admin/edit'>
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
export default {};
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