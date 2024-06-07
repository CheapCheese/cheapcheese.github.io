<script>
import HeaderComponent from "../components/Header.vue";
import CarouselComponent from "../components/Carousel.vue";
import AboutComponent from "../components/AboutComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  components: {CarouselComponent, HeaderComponent, AboutComponent, FooterComponent},
};
</script>

<template>
  <main>
    <HeaderComponent/>
    <CarouselComponent/>
    <AboutComponent/>
    <FooterComponent/>
  </main>
</template>
