<template>
  <div id="app">
    <app-header></app-header>
    <app-carousel></app-carousel>
    <app-destaque></app-destaque>
    <app-categorias></app-categorias>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./layout/AppHeader.vue";
import AppCarousel from './layout/AppCarousel.vue';
import AppDestaque from './layout/AppDestaque.vue';
import AppCategorias from './layout/AppCategorias.vue';
import AppContent from "./layout/AppContent.vue";
import AppFooter from "./layout/AppFooter.vue";

export default {
  components: {
    AppHeader,AppCarousel,AppDestaque,AppCategorias,AppContent,AppFooter
  }
} 
</script>

