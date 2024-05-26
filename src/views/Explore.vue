<template>
    <div class="explore">
        <GlobalInfrastructure v-if="slug == 'global-infrastructure'" />
        <Benifits />
        <Region />
        <Resource />
    </div>
</template>

<script>
    import Resource from '../components/explore/Resource'
import Region from '../components/explore/Region'
import Benifits from '../components/explore/Benifits'
import GlobalInfrastructure from '../components/explore/GlobalInfrastructure'
    export default {
        components: {
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
