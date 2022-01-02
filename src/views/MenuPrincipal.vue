<template>
  <div>
    <h1 class="bg-blue-500 text-white py-1.5 pl-2 font-bold text-center">Fronteiras</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="Comunidades">
        <comunidade />
      </el-tab-pane>
      <el-tab-pane label="Questionários">df</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'
import Comunidade from "./Comunidade";

export default {
  name: "MenuPrincipal",
  components: {
    Comunidade,
    SvgIcon
  },
  setup () {

    return {

    }
  }
}
</script>

<style scoped>

</style>
