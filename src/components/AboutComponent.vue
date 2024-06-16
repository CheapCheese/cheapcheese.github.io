<script>
import MiniMapComponent from "./map/MiniMapComponent.vue";

export default {
  components: {MiniMapComponent}
}

</script>

<template>
    <div class="card flex flex-column align-items-center">
      <div class="flex flex-column align-items-center gap-2">
        <span class="text-xl font-medium">¿Quieres saber más?...</span>
            <span class="slidedown-icon h-2rem w-2rem bg-primary border-circle inline-flex align-items-center justify-content-center">
                <i class="pi pi-arrow-down" />
            </span>
      </div>
      <div class="h-2rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
            <img src="../assets/logo.png" style="width: 200px;">
        </div>
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex justify-content-center animation-duration-1000">
          <span class="text-4xl">
            Bienvenidos a CheapCheese 🧀
          </span>  
        </div>
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="mr-8 ml-8 mt-4 flex justify-content-center h-10rem animation-duration-1000">
          <span class="text-900">
            En un mundo donde la calidad y el ahorro son esenciales, CheapCheese emerge como tu aliado perfecto para encontrar 
            las mejores ofertas en productos lácteos. ¿Eres un amante del queso? ¿Buscas siempre la mejor relación calidad-precio? 
            ¡Estás en el lugar indicado!
            <br><br>
            CheapCheese es una innovadora aplicación diseñada para ayudarte a comparar precios de productos lácteos en diversos 
            supermercados. 
            <br><br>
            Ya sea que estés buscando quesos curados, quesos frescos, quesos rallados o cualquier otro producto lácteo,
            nuestra plataforma te ofrece una manera sencilla y eficiente de encontrar las mejores ofertas disponibles en el mercado.
          </span>
        </div>
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="animation-duration-1000" style="width: 100%;">
          <MiniMapComponent/>
        </div>
    </div>
</template>

<style scoped>
@keyframes slidedown-icon {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(20px);
    }

    100% {
        transform: translateY(0);
    }
}

.slidedown-icon {
    animation: slidedown-icon;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}
</style>
