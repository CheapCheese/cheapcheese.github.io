<script>
import CheapCheeseService from "../services/CheapCheeseService";

export default {
  name: "CatalogComponent",
  data() {
    return {
      productos: [],
      filteredProductos: [],
      layout: 'grid',
      tiendaFilter: '',
      precioFilter: null,
      tipoFilter: ''
    }
  },
  methods: {
    async getProductos() {
      let response = await CheapCheeseService.getProducts();
      this.productos = response.data;
    },
    applyFilters() {
      this.filteredProductos = this.productos.filter(producto => {
        console.log(producto);
        return (this.tiendaFilter ? producto.tienda === this.tiendaFilter : true) &&
            (this.precioFilter ? producto.precio <= this.precioFilter : true) &&
            (this.tipoFilter ? producto.tipo === this.tipoFilter : true);
      });
    }
  },
  watch: {
    tiendaFilter() {
      this.applyFilters();
    },
    precioFilter() {
      this.applyFilters();
    },
    tipoFilter() {
      this.applyFilters();
    }
  },
  created() {
    this.getProductos();
  }
}
</script>

<template>
  <!--Catálogo de los productos, total-->
  <div class="card">
    <h1 class="flex justify-content-center align-items-center mt-8 mb-3">CATÁLOGO</h1>
    <div class="flex justify-content-between mb-4 mr-2 ml-2">
      <input v-model="tiendaFilter" placeholder="Filtrar por tienda" class="p-inputtext p-component"/>
      <input v-model.number="precioFilter" type="number" placeholder="Filtrar por precio máximo" class="p-inputtext p-component"/>
      <input v-model="tipoFilter" placeholder="Filtrar por tipo" class="p-inputtext p-component"/>
    </div>
    <DataView :value="filteredProductos" :layout="layout">
      <template #grid="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 lg:col-5 xl:col-2 p-2">
            <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
              <div class="surface-50 flex justify-content-center border-round p-3">
                <div class="relative mx-auto">
                  <img class="border-round w-full" :src="`${item.imagen}`" :alt="item.nombre" style="max-width: 300px"/>
                </div>
              </div>
              <div class="pt-4">
                <div class="flex flex-row justify-content-between align-items-start gap-2">
                  <div>
                    <div class="text-lg font-medium text-900 mt-1">{{ item.nombre }}</div>
                  </div>
                  <div class="surface-100 p-1" style="border-radius: 30px">
                    <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                         style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                      <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div class="flex flex-column gap-4 mt-4">
                  <span class="text-2xl font-semibold text-900">{{ item.precio }}€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<style scoped>
.decoration {
  text-decoration: none
}
</style>
