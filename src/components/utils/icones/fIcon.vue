<template>
  <svg-icon type="mdi" :path="icone"></svg-icon>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'

export default {
  name: 'fIcon',
  components: {
    SvgIcon
  },
  props: {
    icone: { type: String, required: true },
  }
}
</script>

<style scoped>

</style>
