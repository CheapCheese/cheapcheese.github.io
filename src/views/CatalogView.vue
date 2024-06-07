<script>
import HeaderComponent from "../components/Header.vue";
import CatalogComponent from "../components/CatalogComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  components: {CatalogComponent, HeaderComponent, FooterComponent},
};
</script>

<template>
  <main>
    <HeaderComponent/>
    <CatalogComponent/>
    <FooterComponent/>
  </main>
</template>
