<template>
    <div class="region content-wrapper">
        <div class="row px-5">
            <div class="col-12 col-md-6">
                <div class="img d-flex justify-content-center justify-content-md-end">
                    <img :src="require('@/assets/images/explore/regions.png')" alt="">
                </div>
            </div>
            <div class="col-12 col-md-6 align-items-center">
                <div class="d-flex align-items-center h-100">
                    <p class="ps-0">
                        We prioritize reliable cloud resources
                        for our customers. That's why our
                        main region is located in Singapore,
                        with our own data center. Additionally,
                        You can choose the another regions
                        like Myanmar and Netherlands based
                        on your network latency.
                    </p>
                </div>
            </div>
        </div>
        <div class="row px-5">
            <div class="col-12 col-md-6 order-1 order-md-5">
                <div class="img d-flex justify-content-center justify-content-md-start">
                    <img :src="require('@/assets/images/explore/available_zone.png')" alt="">
                </div>
            </div>
            <div class="col-12 col-md-6 order-5 order-md-1">
                <div class="d-flex align-items-center h-100">
                    <p class="pe-0">
                        An Availability Zone (AZ) refers to a
                        datacenter or group of datacenters
                        located in one or more locations
                        within a region. AZs are built with
                        redundant power, networking, and
                        low-latency connectivity to ensure
                        high availability (HA), fault tolerance,
                        and scalability.
                    </p>
                </div>
            </div>
        </div>
        <div class="row px-5">
            <div class="col-12 col-md-6 ">
                <div class="img d-flex justify-content-center justify-content-md-end">
                    <img :src="require('@/assets/images/explore/uptime.png')" alt="">
                </div>
            </div>
            <div class="col-12 col-md-6 ">
                <div class="d-flex align-items-center h-100">
                    <p class="ps-0">
                        We are committed to providing a
                        robust and resilient infrastructure that
                        ensures maximum uptime with
                        99.9999% and minimal disruptions for
                        our customers.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .region {
        margin-top: 60px;
    }

    .region .img img {
        width: 500px;
        height: 350px;
        object-fit: cover;
    }

    .region p {
        font-size: 18px;
        line-height: 30px;
        text-align: justify;
        text-indent: 50px;
        padding: 0px 100px;
    }

    @media (max-width: 1200px) {
        .region .img img {
            width: 400px;
            height: 300px;
            object-fit: cover;
        }
        .region p {
            padding: 0px 20px;
        }
    }

    @media (max-width: 820px) {
        .region .img img {
            width: 380px;
            height: 300px;
        }
        .region p {
            padding: 0px 0px;
        }
    }
</style>
