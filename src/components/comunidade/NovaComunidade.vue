<template>
  <div>
    <el-button size="small" type="primary" @click="abrirDialog" circle>
      <f-icone type="mdi" :path="mdi.plus" :size="15"></f-icone>
    </el-button>

    <el-dialog
      v-model="dialogVisible"
      :before-close="closeDialog"
      fullscreen
      center
      :title="tituloDialog"
    >
      <el-divider content-position="left">
        <span class="text-xs">Informe dados Solicitados</span>
      </el-divider>

      <div>
        <el-input
          v-model="comunidade.nome"
          placeholder="Nome da Comunidade"
          clearable
        />
        <error-input :v$="v$.nome" />

        <el-input
          v-model="comunidade.lider"
          placeholder="Nome do Lider"
          clearable
          class="mt-5"
        />
        <error-input :v$="v$.lider" />

        <el-row>
          <el-col :span="12" class="pr-2.5">
            <el-input v-model="comunidade.log" placeholder="Longitude" clearable class="mt-5" />
            <error-input :v$="v$.log" />
          </el-col>

          <el-col :span="12" class="pl-2.5">
            <el-input v-model="comunidade.lat" placeholder="Latitude" clearable class="mt-5" />
            <error-input :v$="v$.lat" />
          </el-col>
        </el-row>
      </div>

      <el-divider></el-divider>

      <template #footer>
        <div class="dialog-footer -mt-7">
          <el-button @click="closeDialog">Cancelar</el-button>
          <el-button type="primary" @click="cadastraComunidade">Salvar</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import {computed, reactive, toRefs, watch} from 'vue'
import indexedDB from '../../db/indexedDB'
import useVuelidate from "@vuelidate/core";
import {helpers, required} from '@vuelidate/validators'
import ErrorInput from '../utils/errors/errorInput'
import { ElNotification } from 'element-plus'

export default {
  name: 'NovaComunidade',
  components: {ErrorInput},
  props: {itemParaEdicao: Object},
  setup (props, {emit, attrs}) {
    if (!navigator.geolocation) {
      ElNotification({
        title: 'Comunidade',
        message: 'Geolocalização não suportada pelo navegador, você terá que informa-la manualmente.',
        type: 'warning',
        duration: 3000
      })
    }

    const comunidadeDefault = {id: null, nome: null, lider: null, log: null, lat: null}

    const state = reactive({
      dialogVisible: false,
      comunidade: {...comunidadeDefault}
    })

    const tituloDialog = computed(() => {
      return state.comunidade.id
          ? 'Edição de Comunidade'
          : 'Cadastro de Comunidade'
    })

    watch(() => props.itemParaEdicao, (novoValor) => {
      const {id, log, lat, nome, lider} = toRefs(novoValor);
      state.comunidade.id = id
      state.comunidade.nome = nome
      state.comunidade.log = log
      state.comunidade.lat = lat
      state.comunidade.lider = lider
      state.dialogVisible = true
    })

    const rules = {
      nome: {required: helpers.withMessage('Campo é obrigatório!', required)},
      lider: {required: helpers.withMessage('Campo é obrigatório!', required)},
      log: {required: helpers.withMessage('Campo é obrigatório!', required)},
      lat: {required: helpers.withMessage('Campo é obrigatório!', required)}
    }

    const v$ = useVuelidate(rules, state.comunidade)

    const abrirDialog = () => {
      setLocalizacaoAtual()
      state.dialogVisible= true
    }

    const setLocalizacaoAtual = () => {
      const success = (pos) => {
        const {latitude, longitude} = pos.coords
        state.comunidade.log = longitude
        state.comunidade.lat = latitude
      }

      const error = () => {
        ElNotification({
          title: 'Comunidade',
          message: 'Erro ao capiturar localização automaticamente. Permita-nos utilizar sua localização, ou troque de navegador.',
          type: 'warning',
          duration: 5000
        })
      }

      navigator.geolocation.getCurrentPosition(success, error)
    }

    const cadastraComunidade = async () => {
      !await v$.value.$validate()

      if (v$.value.$invalid) return

      try {
        const item = {
          nome: state.comunidade.nome,
          lider: state.comunidade.lider,
          log: state.comunidade.log,
          lat: state.comunidade.lat,
          uploaded: false
        }

        if (state.comunidade.id) {
          item.id = state.comunidade.id
        }

        await indexedDB.addObjectStore('comunidades', item)
        emit('comunidade-cadastrada', item)
        openMssSucesso()
        closeDialog()
      } catch (error) {
        window.console.log('Erro ao salvar', error)
      }
    }

    const openMssSucesso = () => {
      ElNotification({
        title: 'Comunidade',
        message: 'Cadastrada com sucesso.',
        type: 'success',
        duration: 1200
      })
    }

    const closeDialog = () => {
      state.dialogVisible = false
      state.comunidade = {...comunidadeDefault}
      v$.value.$reset()
    }

    return {
      abrirDialog,
      cadastraComunidade,
      closeDialog,
      ...toRefs(state),
      tituloDialog,
      v$
    }
  }
}
</script>

<style scoped>

</style>