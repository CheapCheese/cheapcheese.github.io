<script>
import CheapCheeseService from "../services/CheapCheeseService";

export default {
  name: "CarouselComponent",
  props: {
    // Prop para especificar la tienda de la que obtener los productos
    titulo: {
      type: String,
      required: true
    },
    tienda: {
      type: String,
      required: false
    },
    tipo: {
      type: String,
      required: false
    },
    precio: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      productos: [],
    }
  },
  methods: {
    // Muestro por pantalla el mensaje de redireccionando
    show() {
      this.$toast.add({
        severity: 'info',
        summary: 'Redireccionando...',
        detail: 'Te llevamos al formulario a completar!',
        life: 2000
      });
      // const resultado = 1;
      // this.$emit('change-cantidad', resultado)
    },
    async getProductos() {
      let response = await CheapCheeseService.getProducts();
      if (this.tipo) {
        this.productos = response.data.filter(producto => producto.tipo === this.tipo);
      } else if(this.precio) {
        this.productos = response.data.filter(producto => producto.precio < this.precio);
      } else {
        this.productos = response.data.filter(producto => producto.tienda === this.tienda);
      }
      
    }
  },
  created() {
    this.getProductos();
  }
}
</script>

<template>
  <div class="flex justify-content-center mt-4 mr-2 align-items-center">
    <h1>{{ titulo }}</h1>
  </div>

  <!--Carousel de los últimos quesos a la venta-->
  <Carousel :value="productos" :numVisible="1" :numScroll="1" circular
            :autoplayInterval="4000">
    <template #item="slotProps">
      <div class="border-1 surface-border border-round m-2  p-3">
        <div class="mb-3">
          <div class="relative mx-auto flex justify-content-center">
            <img :src="`${slotProps.data.imagen}`" :alt="slotProps.data.nombre" class="w-full border-round"
                 style="max-width: 250px;"/>
          </div>
        </div>
        <div class="mb-3 font-medium">
          {{ slotProps.data.nombre }}
        </div>
        <div class="flex justify-content-between align-items-center">
          <div class="mt-0 font-semibold text-xl">{{ slotProps.data.precio }}€</div>
          <span>
            <Toast/>
            <RouterLink to="/catalog" class="decoration" @click="show">
                     <Button icon="pi pi-shopping-cart" class="ml-2" @click="show"/>
            </RouterLink>
          </span>
        </div>
      </div>
    </template>
  </Carousel>
</template>
