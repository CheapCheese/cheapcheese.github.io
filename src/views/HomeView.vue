<script>
import HeaderComponent from "../components/Header.vue";
import CarouselComponent from "../components/Carousel.vue";
import AboutComponent from "../components/AboutComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  components: {CarouselComponent, HeaderComponent, AboutComponent, FooterComponent},
  data() {
    return {
      precio: 2
    }
  }
};
</script>

<template>
  <main>
    <HeaderComponent/>
    <div class="flex">
      <div style="width: 33%;">
        <CarouselComponent titulo="Supermercados Dia🛒" tienda="Dia"/>
      </div>
      <div style="width: 33%;">
        <CarouselComponent titulo="Quesos Curados🧀" tipo="Curado"/>
      </div>
      <div style="width: 33%;">
        <CarouselComponent titulo="Por menos de 2€🔥" :precio='precio' />
      </div>
    </div>
    <AboutComponent/>
    <FooterComponent/>
  </main>
</template>
