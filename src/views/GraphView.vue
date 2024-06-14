<script>
import HeaderComponent from "../components/Header.vue";
import IntroSection from "../components/graph/IntroSection.vue";
import FooterComponent from "../components/FooterComponent.vue";
import DataTableComponent from "../components/graph/DataTableComponent.vue";

export default {
    components: {HeaderComponent, IntroSection, FooterComponent, DataTableComponent}
}
</script>

<template>
    <main>
        <HeaderComponent/>
        <IntroSection/>
        <DataTableComponent/>
        <FooterComponent/>
    </main>
</template>

<style>
</style>