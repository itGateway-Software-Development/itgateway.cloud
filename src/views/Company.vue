<template>
    <div class="company">
        <div v-if="slug == 'about-company'">
            <Banner />
            <Info />
            <Achievement />
            <Youtube />
            <MoreInfo />
        </div>
    </div>
</template>

<script>
import MoreInfo from '../components/company/aboutCompany/MoreInfo'
import Youtube from '../components/company/aboutCompany/Youtube'
import Achievement from '../components/company/aboutCompany/Achievement'
import Info from '../components/company/aboutCompany/Info'
import Banner from '@/components/company/aboutCompany/Banner.vue'
    export default {
        props: ['slug'],
        components: {
    MoreInfo,
    Youtube,
    Achievement,
    Info,Banner}
    }
</script>

<style scoped>
    .company {
        margin-top: 120px;
    }
</style>
