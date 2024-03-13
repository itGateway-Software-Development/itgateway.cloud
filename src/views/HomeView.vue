<template>
  <v-app>
    <Carousel></Carousel>
    <Products></Products>
    <!-- <SuccessStory></SuccessStory>
    <WhyitGateway></WhyitGateway>
    <Customers></Customers>
    <Partners></Partners>
    <VisionMission></VisionMission> -->
  </v-app>
</template>

<script>
import Products from '../components/Products'
import VisionMission from '../components/VisionMission'
import Partners from '../components/Partners'
import Customers from '../components/Customers'
import WhyitGateway from '../components/WhyitGateway'
import SuccessStory from '../components/SuccessStory'
import Carousel from '../components/Carousel'
// Components
export default {
  components: {
    Products,
    VisionMission,
    Partners,
    Customers,
    WhyitGateway,
    SuccessStory,
    Carousel,},
};
</script>


