<template>
<div class="app-wrapper">
	<div class="sidebar-container">
		<el-col class="aside">
			<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			background-color="#304156"
			text-color="#bfcbd9"
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
			<el-menu-item index="1">
				<i class="el-icon-menu"></i>
				<span>관리자 메인</span>
			</el-menu-item>
			<el-menu-item index="2">
				<i class="el-icon-menu"></i>
				<span>카테고리</span>
			</el-menu-item>
			<el-menu-item index="3">
				<i class="el-icon-document"></i>
				<span>글 목록</span>
			</el-menu-item>
			<el-menu-item index="4">
				<i class="el-icon-setting"></i>
				<span>글 작성</span>
			</el-menu-item>
			<el-menu-item index="5" disabled>
				<i class="el-icon-setting"></i>
				<span>추가 기능</span>
			</el-menu-item>
			</el-menu>
  		</el-col>
	</div>
  <div class="main-container">
	  <el-header>
		<div class="menu-left">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
			<el-breadcrumb-item>promotion management</el-breadcrumb-item>
			<el-breadcrumb-item>promotion list</el-breadcrumb-item>
			<el-breadcrumb-item>promotion detail</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="menu-right">
			<!-- <span class="demonstration">click to trigger</span> -->
			<el-dropdown trigger="click">
				<span class="el-dropdown-link">
					ID Name<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>Action 1</el-dropdown-item>
					<el-dropdown-item>Action 2</el-dropdown-item>
					<el-dropdown-item>Action 3</el-dropdown-item>
					<el-dropdown-item>Action 4</el-dropdown-item>
					<el-dropdown-item>Action 5</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	  </el-header>
	  <div class="main-content">
		<el-table
			:data="tableData"
			style="width: 100%">
			<el-table-column
				prop="date"
				label="Date"
				width="180">
			</el-table-column>
			<el-table-column
				prop="name"
				label="Name"
				width="180">
			</el-table-column>
			<el-table-column
				prop="address"
				label="Address">
			</el-table-column>
		</el-table>
	  </div>
  </div>
</div>
</template>

<script>
export default {
  name: "layout",
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ]
    };
  }
};
</script>

<style scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100% !important;
}
.sidebar-container {
  width: 200px !important;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.main-container {
  margin-left: 200px;
  min-height: 100%;
}
.el-header {
  margin: 0px;
  padding: 0px;
  height: 50px !important;
  line-height: 50px;
  background: #fff;
  color: #222;
  border-bottom: 1px solid #d8dce5;
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
.main-content {
  padding: 20px 20px 0 20px;
}
.menu-left {
  display: inline-block;
  float: left;
  padding: 0 0 0 10px;
  font-weight: 400;
  font-size: 15px;
}
.menu-right {
	float: right;
	height: 100%;
	padding: 0 10px 0 0;
}
.el-breadcrumb {
  padding: 0 0 0 10px;
  line-height: 3.5 !important;
}
</style>