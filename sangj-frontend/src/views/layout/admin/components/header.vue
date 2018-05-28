<template>
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
			<el-dropdown trigger="click" @command="handleCommand">
				<span class="el-dropdown-link">
					ID Name<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="info">내 정보</el-dropdown-item>
					<el-dropdown-item command="logout">로그아웃</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</el-header>
</template>

<script>
import { getUserInfo } from "@/api/user";
export default {
  methods: {
    handleCommand(command) {
      if (command === "info") {
        this.$message("내 정보");
        getUserInfo().then(result => {
          console.log("result : " + JSON.stringify(result));
        });
        return;
      }
      if (command === "logout") {
				this.$store.dispatch("LOGOUT").then(() => this.$router.push("/home"));
				this.$message("로그아웃이 정상 처리되었습니다.");
      }
    }
  }
};
</script>

<style scoped>
.el-header {
  margin: 0px;
  padding: 0px;
  height: 50px !important;
  line-height: 50px;
  background: #fff;
  color: #222;
  border-bottom: 1px solid #d8dce5;
}
.el-breadcrumb {
  padding: 0 0 0 10px;
  line-height: 3.5 !important;
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
</style>