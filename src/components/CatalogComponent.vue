<script>
import CheapCheeseService from "../services/CheapCheeseService";

export default {
  name: "CatalogComponent",
  data() {
    return {
      productos: [],
      filteredProductos: [],
      layout: 'grid',
      tiendas: ['Carrefour', 'Dia', 'Consum'], // Añade tus tiendas aquí
      tipos: ['Curado', 'Fresco', 'Rallado'], // Añade tus tipos aquí
      tiendaFilter: [],
      precioFilter: 0, // Inicializado a 0
      tipoFilter: [],
      textFilter: ''
    }
  },
  methods: {
    async getProductos() {
      let response = await CheapCheeseService.getProducts();
      this.productos = response.data;
      this.applyFilters();
    },
    applyFilters() {
      this.filteredProductos = this.productos.filter(producto => {
        return (this.tiendaFilter.length ? this.tiendaFilter.includes(producto.tienda) : true) &&
               (this.precioFilter !== 0 ? producto.precio <= this.precioFilter : true) &&
               (this.tipoFilter.length ? this.tipoFilter.includes(producto.tipo) : true) &&
               (this.textFilter ? producto.nombre.toLowerCase().includes(this.textFilter.toLowerCase()) : true);
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
    },
    textFilter() {
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
    <h1 class="flex justify-content-center align-items-center mt-5 mb-3">CATÁLOGO 🛍️</h1>
    <div class="filter-container flex mb-4 mr-2 ml-2">
      <div class="filter-section">
        <label class="filter-label">Filtrar por tienda</label>
        <div v-for="tienda in tiendas" :key="tienda" class="p-field-checkbox filter-checkbox">
          <CheckBox v-model="tiendaFilter" :value="tienda" />
          <label>{{ tienda }}</label>
        </div>
      </div>
      <div class="filter-section">
        <label class="filter-label">Filtrar por tipo</label>
        <div v-for="tipo in tipos" :key="tipo" class="p-field-checkbox filter-checkbox">
          <CheckBox v-model="tipoFilter" :value="tipo" />
          <label>{{ tipo }}</label>
        </div>
      </div>
      <div class="filter-section">
        <label class="filter-label">Filtrar por precio máximo</label>
        <Slider v-model.number="precioFilter" min="0" max="20" class="mt-1"/>
        <span><br>Hasta {{ precioFilter }} €</span>
      </div>
      <div class="filter-section">
        <label class="filter-label">Filtrar por texto</label>
        <input v-model="textFilter" placeholder="¿Qué quieres buscar?" class="p-inputtext p-component mr-5"/>
      </div>
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
  text-decoration: none;
}
.filter-container {
  border: 2px solid orange;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
.filter-section {
  display: flex;
  flex-direction: column;
}
.filter-label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.filter-checkbox {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}
.filter-checkbox label {
  margin-left: 0.5rem;
}
</style>
