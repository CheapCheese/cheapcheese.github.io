<script>
import {defineComponent, ref} from "vue";
// TODO: Llamar al servicio para recibir el usuario
export default defineComponent({
  name: "HeaderComponent",
  data() {
    return {
      visible: false,
      Filter: null
    }
  },
  methods: {
    toggle(event) {
      this.$refs.op.toggle(event);
    }
  }
});
</script>

<template>
  <Toolbar class="bg-yellow-100">

    <template #start>
      <RouterLink to="/">
        <img class="hover:shadow-5" src="../assets/logo.png" height="70" alt="Imagen Logo">
      </RouterLink>
      <div class="card flex justify-content-center">
        <RouterLink to="/catalog" class="ml-5 font-medium text-xl decoration text-black-alpha-90">
          Catálogo <i class="pi pi-shopping-cart"/>
        </RouterLink>
        <RouterLink to="/supermarket" class="ml-5 font-medium text-xl decoration text-black-alpha-90">
          Supermercados <i class="pi pi-shopping-bag"/>
        </RouterLink>
        <RouterLink to="/map" class="ml-5 font-medium text-xl decoration text-black-alpha-90">
          Ubicación <i class="pi pi-map-marker"/>
        </RouterLink>
      </div>
    </template>

    <template #end>
      <Button icon="pi pi-search" class="mr-3"/>
      <input v-model="Filter" placeholder="¿Qué quieres buscar?" class="p-inputtext p-component mr-5"/>
      <div class="card flex justify-content-center">
        <Avatar icon="pi pi-user" class="mr-2 bg-white" size="xlarge" shape="circle" @click="toggle" aria-controls="overlay_panel"/>

        <OverlayPanel ref="op" appendTo="body">
          <div class="flex flex-column gap-3 w-25rem">
            <div class="flex justify-content-left -mb-1">
              <span class="font-medium text-3xl block mt-1">Hola, {{ variable }}</span>
            </div>
            <div class="flex justify-content-left -mb-1">
              <Avatar icon="pi pi-spin pi-cog" class="mr-5 bg-white" shape="circle"/>
              <span class="font-medium text-900 block mt-1">Editar Usuario</span>
            </div>
            <div class="flex justify-content-left bg-red-50 -mt-1">
              <Avatar icon="pi pi-sign-out" class="mr-5 bg-red-50" shape="circle"/>
              <span class="font-medium text-900 block mt-1">Cerrar Sesión</span>
            </div>
          </div>
        </OverlayPanel>
      </div>
    </template>
  </Toolbar>

</template>

<style scoped>
.decoration {
  text-decoration: none
}

</style>

