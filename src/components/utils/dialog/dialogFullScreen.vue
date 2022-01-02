<template>
  <div>
    <slot name="ativador">
      <!-- -->
    </slot>

    <div v-if="modelValue" class="fixed top-0 bottom-0 left-0 right-0 flex">
      <div class="w-full h-full bg-white">
        <div class="flex px-4 py-1 items-center border-b-2 bg-blue-500 text-white">
          <p class="text-base font-bold">
            <slot name="titulo">
              {{ titulo }}
            </slot>
          </p>

          <button class="ml-auto mr-0 rounded-full p-1 hover:bg-blue-600" @click="close()">
            <svg-icon :path="mdiClose" type="mdi" />
          </button>
        </div>

        <div class="flex px-4 py-3">
          <slot name="corpo">
            #slot corpo
          </slot>
        </div>

        <div class="border-t-2 px-4 py-2">
          <slot name="opcoes">
            #slot opcoes
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js'

export default {
  name: 'DialogFullScreen',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  components: {
    SvgIcon
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    pessistente: {
      type: Boolean,
      default: false
    },
    titulo: {
      type: String,
      default: '#prop titulo'
    }
  },
  data: () => ({
    mdiClose: mdiClose
  }),
  methods: {
    close () {
      this.$emit('update:modelValue', false)
    }
  }
}
</script>

<style scoped>

</style>
