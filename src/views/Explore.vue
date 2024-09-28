<template>
  <div class="explore">
    <div v-if="slug == 'global-infrastructure'">
      <GlobalInfrastructure />
      <Benifits />
      <Region />
      <Resource />
    </div>
    <div v-if="slug == 'manage-cloud-services'">
      <Banner />
      <McsBenifits />
      <Support />
      <MscResource />
    </div>
    <div v-if="slug == 'customer-success-story'">
      <CustomerSuccessBanner />
      <Customers />
      <Resources />
    </div>
    <div v-if="slug == 'partner-network'">
      <PartnerCarousel></PartnerCarousel>
      <Regularion></Regularion>
      <CustomerSuccessStory></CustomerSuccessStory>
    </div>
  </div>
</template>

<script>
import CustomerSuccessStory from "../components/partner/CustomerSuccessStory";
import Regularion from "../components/partner/Regularion";
import PartnerCarousel from "../components/partner/PartnerCarousel";
import Resources from "../components/explore/customerSuccessStory/Resources";
import Customers from "../components/explore/customerSuccessStory/Customers";
import MscResource from "../components/explore/manageCloudService/MscResource";
import Support from "../components/explore/manageCloudService/Support";
import McsBenifits from "../components/explore/manageCloudService/McsBenifits";
import Banner from "../components/explore/manageCloudService/Banner";
import CustomerSuccessBanner from "../components/explore/customerSuccessStory/Banner.vue";
import Resource from "../components/explore/globalInfrastructure/Resource";
import Region from "../components/explore/globalInfrastructure/Region";
import Benifits from "../components/explore/globalInfrastructure/Benifits";
import GlobalInfrastructure from "../components/explore/globalInfrastructure/GlobalInfrastructure";
import { ref, onMounted } from "vue";
export default {
  components: {
    CustomerSuccessStory,
    Regularion,
    PartnerCarousel,
    Resources,
    Customers,
    MscResource,
    Support,
    McsBenifits,
    CustomerSuccessBanner,
    Banner,
    Resource,
    Region,
    Benifits,
    GlobalInfrastructure,
  },
  props: ["slug"],

  setup(props) {
    onMounted(() => {
      console.log(props.value);
    });
  },
};
</script>

<style>
.explore {
  margin-top: 120px;
}

@media (max-width: 600px) {
  .explore {
    margin-top: 50px;
  }
}
</style>
