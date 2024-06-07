<script>
import CheapCheeseService from "../services/CheapCheeseService";

export default {
  name: "SupermarketComponent",
  data() {
    return {
      supermercados: [],
      productos: [],
      position: "center",
      layout: 'grid',
      visible: false,
      selectedSupermarket: null,
    }
  },
  methods: {
    async getSupermercados() {
      let response = await CheapCheeseService.getSupermarkets();
      this.supermercados = response.data;
      console.log(response.data);
    },
    async getProductos(supermarket) {
      let response = await CheapCheeseService.getProducts();
      this.productos = response.data.filter(producto => producto.tienda === supermarket.nombre);
    },
    openPosition(position, supermarket) {
      this.position = position;
      this.visible = true;
      this.selectedSupermarket = supermarket;
      this.getProductos(supermarket);
    }
  },
  created() {
    this.getSupermercados();
  }
}
</script>

<template>
  <span class="font-medium text-5xl flex justify-content-center mt-5">Patrocinadores</span>
  <!--Carousel de los últimos quesos a la venta-->
  <Carousel :value="supermercados" :numVisible="3">
    <template #item="slotProps">
      <div class="border-1 surface-border border-round m-2  p-3">
        <div class="mb-3">
          <div class="relative mx-auto flex justify-content-center">
            <img :src="`${slotProps.data.imagen}`" :alt="slotProps.data.nombre" class="w-full border-round"
                 style="max-width: 250px; max-height:126px; "/>
          </div>
        </div>
        <div class="mb-3 font-medium">
          {{ slotProps.data.nombre }}
        </div>
        <div class="flex justify-content-center align-items-center mx-auto">
          <span>
            <Button label="Más Información..." class="ml-2" @click="openPosition('top', slotProps.data)" />
          </span>
        </div>
      </div>
    </template>
  </Carousel>

  <Dialog v-model:visible="visible" header="Supermercado" :style="{ width: '80rem' }" :breakpoints="{ '1300px': '75vw', '575px': '90vw' }" :position="position" :modal="true" :draggable="false">
    <div v-if="selectedSupermarket" class="flex justify-content-center">
      <img :src="`${selectedSupermarket.imagen}`">
    </div>
    <div v-if="selectedSupermarket" class="flex justify-content-center mt-5">
      <span class="font-medium text-5xl">{{ selectedSupermarket.nombre }}</span>
    </div>
    <div v-if="selectedSupermarket" class="flex justify-content-center mt-5">
      <span class="font-medium text-3xl">Historia</span>
    </div>
    <div v-if="selectedSupermarket" class="flex justify-content-center mt-5 mr-5 ml-5">
      <span class="font-medium text-900">{{ selectedSupermarket.descripcion }}</span>
    </div>
    <div v-if="selectedSupermarket" class="flex justify-content-center mt-5">
      <span class="text-3xl font-medium text-900">Catálogo</span>
    </div>
    <div v-if="selectedSupermarket" class="flex justify-content-center mt-5">
      <DataView :value="productos" :layout="layout">
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
                    <div class="font-medium text-900 mt-1">{{ item.nombre }}</div>
                  </div>
                </div>
                <div class="flex flex-column gap-4 mt-4">
                  <span class="font-semibold text-900">{{ item.precio }}€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
    </div>
  </Dialog>
</template>