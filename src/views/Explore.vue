<template>
    <div class="explore">
        <GlobalInfrastructure v-if="slug == 'global-infrastructure'" />
    </div>
</template>

<script>
    import GlobalInfrastructure from '../components/explore/GlobalInfrastructure'
    export default {
        components: { GlobalInfrastructure },
        props: ['slug']    
    }
</script>

<style>
    .explore {
        margin-top: 120px;
    }
</style>
