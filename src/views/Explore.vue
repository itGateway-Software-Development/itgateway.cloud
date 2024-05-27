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
    </div>
</template>

<script>
    import MscResource from '../components/explore/manageCloudService/MscResource'
import Support from '../components/explore/manageCloudService/Support'
import McsBenifits from '../components/explore/manageCloudService/McsBenifits'
import Banner from '../components/explore/manageCloudService/Banner'
import Resource from '../components/explore/globalInfrastructure/Resource'
    import Region from '../components/explore/globalInfrastructure/Region'
    import Benifits from '../components/explore/globalInfrastructure/Benifits'
    import GlobalInfrastructure from '../components/explore/globalInfrastructure/GlobalInfrastructure'
    export default {
        components: {
    MscResource,
    Support,
    McsBenifits,
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
