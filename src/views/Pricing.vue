<template>
    <div class="content-wrapper pricing">
        <h1 class="sub-page-header">See All Pricing</h1>
        
        <ElasticVirtual />
    </div>
</template>

<script>
    import ElasticVirtual from '@/components/allPricing/ElasticVirtual.vue';
    export default {
        components: {
            ElasticVirtual,
        },
        props: ['slug'],
        setup(props) {
            console.log(props.slug);
        }
    }
</script>

<style scoped>
    .pricing {
        margin-top: 150px;
    }

    .pricing h1 {
        margin-bottom: 30px;
    }

    

</style>
