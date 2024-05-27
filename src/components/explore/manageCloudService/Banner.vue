<template>
    <div class="mcs-banner content-wrapper d-flex align-items-center">
        <div class="row w-100 align-items-center">
            <div class="col-12 col-md-6">
                <div class="banner-caption">
                    <h2 class="section-header mb-2">Managed Cloud Services</h2>
                    <p class="text-white mb-5">
                        Choose the support plans of itGateway Cloud that
                        are best suited for you.
                    </p>
                    <div class="d-flex align-items-center gap-3">
                        <button class="btn primary-btn text-white d-flex gap-2 align-items-center fill">Choose Plans <span class="material-symbols-outlined">east</span></button>
                        <button class="btn primary-btn text-white d-flex gap-2 align-items-center">Contact Sales <span class="material-symbols-outlined">east</span></button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="img d-flex justify-content-center align-items-center">
                    <img :src="require('@/assets/images/explore/uptime.png')" alt="">
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
    .mcs-banner {
        height: 500px;
        background: #302d58;
    }

    .mcs-banner .img img {
        width: 90%;
        object-fit: cover;
    }

    @media (max-width: 1200px) {
        .mcs-banner .img img {
            width: 100%;
        }
    }

    @media (max-width: 1040px) {
        .mcs-banner .img img {
            width: 450px;
        }
    }

    @media (max-width: 767px) {
        .mcs-banner {
            height: auto;
        }

        .banner-caption {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
        }
    }
</style>
