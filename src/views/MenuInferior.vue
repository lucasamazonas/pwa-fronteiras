<template>
<!--  <div class="bg-white border-t-2 height flex">-->
    <el-row class="bg-white border-t-2 pt-0.5" justify="center">
      <el-button icon="el-icon-search" circle size="small"></el-button>
      <el-button type="primary" icon="el-icon-edit" circle size="small"></el-button>
      <el-button type="success" icon="el-icon-check" circle size="small"></el-button>
      <el-button type="info" icon="el-icon-message" circle size="small"></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle size="small"></el-button>
      <el-button type="danger" icon="el-icon-delete" circle size="small"></el-button>
    </el-row>
<!--  </div>-->
</template>

<script>
export default {
  name: "MenuFooter"
}
</script>

<style scoped>
.height {
  height: 42px;
}
</style>