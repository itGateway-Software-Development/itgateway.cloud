<template>
  <v-app>
    <Navbar @menuHoverStatus="menuHoverEffect"/>
    <v-main :class="{blurPage : isHover}">
      <Loading v-if="loading" />
      <router-view />
    </v-main>
    <Footer />
  </v-app>
  <Loading v-if="isLoad" />
</template>

<script>
import Loading from './components/Loading'
import Footer from './components/Footer'
import Navbar from "@/components/Navbar.vue";
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
export default {
  components: {
    Loading,
    Footer, Navbar },
  setup() {
    const isLoad = ref(true);
    const isHover = ref(false);
    const route = useRoute();

    const menuHoverEffect = (data) => isHover.value = data;

    const loadContent = () => {
        isLoad.value = true;
        
        setTimeout(() => {
          isLoad.value = false;
        }, 1000);
      };
    
    onMounted(() => {
      window.addEventListener('load', () => {
          isLoad.value = false;
        })
    })

    watch(route, () => loadContent())

    return {isLoad, menuHoverEffect, isHover}
  },

};
</script>

<style>
  .blurPage {
    filter: blur(5px) brightness(.5);
    background: rgb(255, 254, 254);
  }
</style>





