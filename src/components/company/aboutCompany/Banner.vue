<template>
    <div class="about-company-banner content-wrapper d-flex align-items-center">
        <div class="row w-100 align-items-center">
            <div class="col-12 col-md-6">
                <div class="banner-caption">
                    <h2 class="section-header mb-2">About itGateway Cloud</h2>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="img d-flex justify-content-center align-items-center">
                    <img :src="require('@/assets/images/company/about_company/about_company.png')" alt="">
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
    .about-company-banner {
        height: 500px;
        background: #302d58;
    }

    .about-company-banner .img img {
        width: 75%;
        object-fit: cover;
    }

    @media (max-width: 1430px) {
        .about-company-banner .img img {
            width: 90%;
        }
    }

    @media (max-width: 1300px) {
        .about-company-banner .img img {
            width: 100%;
        }
    }

    @media (max-width: 767px) {
        .about-company-banner {
            height: auto;
        }

        .about-company-banner .img img {
            width: 70%;
            height: 80%;
            margin-top: 40px;
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
