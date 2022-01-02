<template>
  <div>
    <slot name="ativador">
      <!-- -->
    </slot>

    <div
        v-if="modelValue"
        @click="!pessistente && close()"
        class="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-60"
    >
      <div class="w-min bg-white rounded-md" :style="`width: ${width}px`">
        <div class="flex px-4 py-2 items-center border-b-2">
          <p class="text-xl font-bold w-max">
            <slot name="titulo">
              {{ titulo }}
            </slot>
          </p>

          <f-spacer class="border-5" />

          <button class="rounded-full p-1 hover:bg-gray-200" @click="close()">
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
  name: 'index',
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
    width: {
      type: [Number, String],
      default: 300
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
