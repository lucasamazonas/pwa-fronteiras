<template>
  <span
    v-if="v$.$dirty && v$.$invalid"
    class="text-red-400 text-xs pl-1"
  >
    {{messageError}}
  </span>
</template>

<script>
import {computed} from "vue";

export default {
  name: "errorInput",
  props: {
    v$: {
      type: Object,
      default: ''
    }
  },
  setup (props) {
    const messageError = computed(() => {
      if (props.v$.required.$message) return  props.v$.required.$message
    })

    return {
      messageError
    }
  }
}
</script>

<style scoped>

</style>