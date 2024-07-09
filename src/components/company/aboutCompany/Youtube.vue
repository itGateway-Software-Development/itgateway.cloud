<template>
    <div class="content-wrapper youtube">
        <div class="row">
            <div class="col-12 col-md-6 mb-3 mb-md-0">
                <a href="https://youtube.com/@itgateway5550?si=5zyeDKoKErzMrGYF" target="_blank">
                    <img class="w-100 h-100" :src="require('@/assets/images/company/about_company/yt.png')" alt="">
                </a>
            </div>
            <div class="col-12 col-md-6">
                <div class="mt-5">
                    <h2 class="fw-bold mb-4">Global Cloud Infrastructure​</h2>
                    <p>
                        Experience the power of cloud computing with itGateway Cloud, delivering reliable, secure, and high-performance solutions to businesses across the globe. Whether you need scalable storage, robust computing power, or advanced data analytics, our cloud services are designed to meet your unique needs and drive your digital transformation.​
                    </p>
                    <button class="btn primary-btn text-white d-flex gap-2 align-items-center fill mb-5">Create Cloud Account</button>
                    <router-link class="d-flex align-items-center gap-2" to="#">If you need our cloud supports, please contact us  <span class="material-symbols-outlined fs-5" style="color: #EC6316;">east</span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    .youtube {
        margin-top: 90px;
    }
    .youtube p {
        font-size: 17px;
        margin-bottom: 30px;
    }
</style>
