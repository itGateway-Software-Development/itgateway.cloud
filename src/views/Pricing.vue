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
        <div class="desktop-pricing">
            <ElasticVirtual />
            <DedicatedMachine />
            <FileServer />
            <BareMetal />
        </div>
        <div class="mobile-pricing">
            <ElasticVirtualMobile />
            <DedicatedMachineMobile />
            <FileServerMobile />
            <BareMetalMobile />
        </div>
    </div>
</template>

<script>
    import BareMetalMobile from '../components/allPricing/BareMetalMobile'
import FileServerMobile from '../components/allPricing/FileServerMobile'
import DedicatedMachineMobile from '../components/allPricing/DedicatedMachineMobile'
import ElasticVirtualMobile from '../components/allPricing/ElasticVirtualMobile'
import BareMetal from '../components/allPricing/BareMetal'
import FileServer from '../components/allPricing/FileServer'
    import DedicatedMachine from '../components/allPricing/DedicatedMachine'
    import ElasticVirtual from '@/components/allPricing/ElasticVirtual.vue';
    import { onMounted } from 'vue';
    export default {
        components: {
    BareMetalMobile,
    FileServerMobile,
    DedicatedMachineMobile,
    ElasticVirtualMobile,
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

    .mobile-pricing {
        display: none;
    }

    .pricing h1 {
        margin-bottom: 30px;
    }

    .pricing .price-logo img {
        width: 50px;
    }

    @media (max-width: 990px) {
        .desktop-pricing {
            display: none;
        }

        .mobile-pricing {
            display: block;
        }
        .sub-page-header {
            padding-left: 30px;
        }
    }

</style>
