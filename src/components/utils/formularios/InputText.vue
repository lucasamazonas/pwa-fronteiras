<template>
  <label>{{ label }}</label>
  <input
    v-model="modelValue"
    class="border-2 border-blue-400 rounded py-1"
    @input="$emit('update:modelValue', modelValue)"
  />
</template>

<script>
export default {
  name: 'InputText',
  props: {
    modelValue: {
      required: true
    },
    label: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>

</style>
