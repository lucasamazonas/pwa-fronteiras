<template>
  <div class="overflow-y-auto" style="height: calc(100vh - 76px)">
    <table class="w-full text-xs text-left">
      <thead>
        <tr>
          <th class="border-b-2">Nome</th>
          <th class="border-b-2">Responsável</th>
          <th class="border-b-2">Localização</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="number in 100" :key="number">
          <td class="border-b-2">Lucas Amazonas</td>
          <td class="border-b-2">Braga Amorim</td>
          <td class="border-b-2">55555555, 22222222</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Tabela"
}
</script>

<style scoped>

</style>
