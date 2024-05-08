<template>
  <v-app>
    <Carousel></Carousel>
    <Products></Products>
    <GlobalInfracture></GlobalInfracture>
    <Solutions></Solutions>
    <SuccessStory></SuccessStory>
    <Pricing></Pricing>
    <Service></Service>
    <Support></Support>
    
    <Loading v-if="isLoad" />
  </v-app>
</template>

<script>
import Loading from '../components/Loading'
import Support from '../components/Support'
import Service from '../components/Service'
import Pricing from '../components/Pricing'
import SuccessStory from '../components/SuccessStory'
import Solutions from '../components/Solutions'
import GlobalInfracture from '../components/GlobalInfracture'
import Products from '../components/Products'
import Carousel from '../components/Carousel'
import { onMounted, ref } from 'vue'
// Components
export default {
    components: {
      Loading,
      Support,
      Service,
      Pricing,
      SuccessStory,
      Solutions,
      GlobalInfracture,
      Products,
      Carousel,
    },
    setup() {
      const isLoad = ref(true);

      onMounted(() => {
        window.addEventListener('load', () => {
          isLoad.value = false;
        })
      })

      return {isLoad}
    }
};
</script>


