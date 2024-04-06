 <template>
    <div class="content-wrapper pricing">
        <div class="price-logo d-flex flex-column justify-content-center align-items-center gap-3">
            <div class="d-flex align-items-center gap-3">
                <img :src="require('@/assets/images/price/pricing.png')" alt="">
                <h1 class="m-0 fw-bold">Pricing</h1>
            </div>
            <p class="fs-5">A simple price structure for great products</p>
        </div>
        <h1 class="sub-page-header">See All Pricing</h1>
        <ElasticVirtual />
        <DedicatedMachine />
        <FileServer />
        <BareMetal />
    </div>
</template>

<script>
    import BareMetal from '../components/allPricing/BareMetal'
import FileServer from '../components/allPricing/FileServer'
    import DedicatedMachine from '../components/allPricing/DedicatedMachine'
    import ElasticVirtual from '@/components/allPricing/ElasticVirtual.vue';
    import { onMounted } from 'vue';
    export default {
        components: {
    BareMetal,
    FileServer,
    DedicatedMachine,
            ElasticVirtual,
        },
        props: ['slug'],

        setup(props) {
            onMounted(() => {
                window.scrollTo(0,0)
            })
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

    .pricing .price-logo img {
        width: 50px;
    }

</style>
