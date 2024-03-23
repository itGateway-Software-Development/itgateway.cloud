<template>
  <v-app>
    <Carousel></Carousel>
    <Products></Products>
    <!-- <GlobalInfracture></GlobalInfracture> -->
    <Solutions></Solutions>
    <SuccessStory></SuccessStory>
    <Pricing></Pricing>
    <Service></Service>
  </v-app>
</template>

<script>
import Service from '../components/Service'
import Pricing from '../components/Pricing'
import SuccessStory from '../components/SuccessStory'
import Solutions from '../components/Solutions'
import GlobalInfracture from '../components/GlobalInfracture'
import Products from '../components/Products'
import Carousel from '../components/Carousel'
// Components
export default {
    components: {
    Service,
    Pricing,
    SuccessStory,
    Solutions,
    GlobalInfracture,
    Products,
    Carousel,},
};
</script>


