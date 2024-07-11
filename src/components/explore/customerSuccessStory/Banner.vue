<template>
    <div class="customer-success-banner content-wrapper d-flex align-items-center">
        <div class="row w-100 align-items-center">
            <div class="col-12 col-md-6">
                <div class="banner-caption">
                    <h2 class="section-header mb-2">Success Story​</h2>
                    <p class="text-white mb-5">
                        After migrating to our cloud services, most of the customers achieved a <b style="color: #EC6316;">30~50%</b> reduction in IT costs, enhanced data security, and improved operational efficiency, enabling them to scale their business seamlessly and respond to market demands more effectively.​
                    </p>
                    <br />
                    <div class="d-flex align-items-center gap-3">
                        <router-link to="/pricing/all-pricing" class="btn primary-btn text-white d-flex gap-2 align-items-center fill">See Pricing​ <span class="material-symbols-outlined fs-6">east</span></router-link>
                        <router-link to="#" class="btn primary-btn text-white d-flex gap-2 align-items-center">Contact Sales <span class="material-symbols-outlined fs-6">east</span></router-link>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="img d-flex justify-content-center align-items-center">
                    <img :src="require('@/assets/images/explore/customer_success/banner.png')" alt="">
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
    .customer-success-banner {
        height: 500px;
        background: #302d58;
    }

    .customer-success-banner .img img {
        width: 70%;
        object-fit: cover;
    }

    @media (max-width: 1330px) {
        .customer-success-banner .img img {
            width: 80%;
        }
    }

    @media (max-width: 1200px) {
        .customer-success-banner .img img {
            width: 85%;
        }
    }

    @media (max-width: 1040px) {
        .customer-success-banner .img img {
            width: 370px;
        }
    }

    @media (max-width: 767px) {
        .customer-success-banner {
            height: auto;
        }

        .banner-caption {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 50px;
        }
    }
</style>
