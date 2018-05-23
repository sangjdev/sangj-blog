<template>
    <el-row type="flex" justify="center">
        <el-col :span="12">
            <div class="block">
                <!-- <span class="demonstration">When you have more than 7 pages</span> -->
                <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {};
</script>

<style scoped>
.block {
    padding: 40px 0px;
}
</style>