<template>
    <div class="explore">
        <div v-if="slug == 'global-infrastructure'" >
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
    </div>
</template>

<script>
    import Resources from '../components/explore/customerSuccessStory/Resources'
import Customers from '../components/explore/customerSuccessStory/Customers'
import MscResource from '../components/explore/manageCloudService/MscResource'
    import Support from '../components/explore/manageCloudService/Support'
    import McsBenifits from '../components/explore/manageCloudService/McsBenifits'
    import Banner from '../components/explore/manageCloudService/Banner'
    import CustomerSuccessBanner from '../components/explore/customerSuccessStory/Banner.vue'
    import Resource from '../components/explore/globalInfrastructure/Resource'
    import Region from '../components/explore/globalInfrastructure/Region'
    import Benifits from '../components/explore/globalInfrastructure/Benifits'
    import GlobalInfrastructure from '../components/explore/globalInfrastructure/GlobalInfrastructure'
    export default {
        components: {
    Resources,
    Customers,
    MscResource,
    Support,
    McsBenifits,
    CustomerSuccessBanner,
    Banner,
    Resource,
    Region,
    Benifits, GlobalInfrastructure },
        props: ['slug']    
    }
</script>

<style>
    .explore {
        margin-top: 120px;
    }
</style>
