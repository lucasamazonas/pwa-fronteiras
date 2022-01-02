<template>
  <div id="nav">
    <menu-principal />
  </div>
  <router-view/>
  <div>
    <menu-footer />
  </div>
</template>

<script>
import MenuPrincipal from "./views/MenuPrincipal";
import MenuFooter from "./views/MenuInferior";

export default {
  components: {MenuFooter, MenuPrincipal}
}
</script>
