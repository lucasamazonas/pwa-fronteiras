<template>
  <div class="p-0 m-0">
    <el-table
      :data="tableData"
      height="calc(100vh - 148px)"
      size="mini"
      :row-class-name="tableRowClassName"
      border
      class="w-full"
    >
      <el-table-column prop="nome" label="Nome" />
      <el-table-column prop="lider" label="Lider" />

      <el-table-column align="right">
        <template #header>
          <nova-comunidade :itemParaEdicao="itemSelecionado" @comunidade-cadastrada="getListaAllComunidades()" />
        </template>

        <template #default="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)"
            circle
          >
            <f-icone type="mdi" :path="mdi.pencil" :size="15"></f-icone>
          </el-button>

          <el-popconfirm
            title="Excluir Comunidade?"
            confirm-button-text="Sim"
            cancel-button-text="Não"
            :icon="iconDelete"
            @confirm="handleDelete(scope.row)"
          >
            <template #reference>
              <el-button
                size="mini"
                type="danger"
                circle
              >
                <f-icone type="mdi" :path="mdi.delete" :size="15"></f-icone>
              </el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {reactive, toRefs, provide, ref, onMounted, readonly, computed} from "vue";
import NovaComunidade from "../components/comunidade/NovaComunidade";
import indexedDB from "../db/indexedDB";
import { Delete } from '@element-plus/icons'

export default {
  name: 'Comunidade',
  components: {NovaComunidade},
  setup () {
    const state = reactive({
      dialogCadastro: false,
      tableData: []
    })

    let itemSelecionado = ref({})

    const handleEdit = item => {
      itemSelecionado.value = {...item}
    }

    const iconDelete = Delete

    onMounted(() => getListaAllComunidades())

    const getListaAllComunidades = async () => {
      state.tableData = await indexedDB.listAllObjectStore('comunidades')
    }

    const handleDelete = async (row) => {
      try {
        await indexedDB.deleteObjectStore('comunidades', row.id)
        await getListaAllComunidades()
      } catch (err) {
        console.log(err)
      }
    }

    return {
      iconDelete,
      ...toRefs(state),
      handleEdit,
      handleDelete,
      getListaAllComunidades,
      itemSelecionado
    }
  },
  methods: {
    tableRowClassName({row}) {
      return row.uploaded ? '' : 'warning-row'
    },
  },
}
</script>

<style>
.el-table .warning-row {
  --el-table-tr-background-color: var(--el-color-warning-lighter);
}
.el-table .success-row {
  --el-table-tr-background-color: var(--el-color-success-lighter);
}
</style>