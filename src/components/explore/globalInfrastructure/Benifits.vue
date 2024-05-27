<template>
    <div class="explore-benefit">
        <div class="bg-color"></div>
        <div class="content-wrapper">
            <div class="row align-items-center">
                <div class="col-12 col-lg-6">
                    <div class="d-flex flex-column justify-content-center align-items-center first-col">
                        <h1>WE BUILD THE TRUST</h1>
                        <button class="btn d-flex gap-2 align-items-center text-white primary-btn fill mt-3">Contact Sales <span class="material-symbols-outlined">east</span></button>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="row">
                        <div class="col-12 col-md-6 sec-col">
                            <div class="head d-flex align-items-center gap-3">
                                <img :src="require('@/assets/images/explore/cost_save.png')" alt="">
                                <h3 class="section-header">Cost Saving</h3>
                            </div>
                            <div class="info">
                                <p>
                                    20-50% save annual cost &
                                    managed fees than other cloud
                                    services
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 sec-col">
                            <div class="head d-flex align-items-center gap-3">
                                <img :src="require('@/assets/images/explore/security.png')" alt="">
                                <h3 class="section-header">Security</h3>
                            </div>
                            <div class="info">
                                <p>
                                    Security is top priority for our
                                    valued customers
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 sec-col">
                            <div class="head d-flex align-items-center gap-3">
                                <img :src="require('@/assets/images/explore/sla.png')" alt="">
                                <h3 class="section-header">SLA</h3>
                            </div>
                            <div class="info">
                                <p>
                                    We will return 1% of total amount
                                    every hour of service downtime.
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 sec-col">
                            <div class="head d-flex align-items-center gap-3">
                                <img :src="require('@/assets/images/explore/data_protection.png')" alt="">
                                <h3 class="section-header">Data Protection</h3>
                            </div>
                            <div class="info">
                                <p>
                                    Your cloud resources are protected
                                    through replication to another
                                    Availability Zones
                                </p>
                            </div>
                        </div>
                    </div>
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
    .explore-benefit {
        margin-top: 90px;
        height: 700px;
        background-image: url('@/assets/images/explore/gc.jpg');
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
    }

    .explore-benefit .bg-color {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(to right, #2c2948e7, #2c2948, #2c2948a2);
        z-index: 0 !important;
    }

    .explore-benefit .content-wrapper {
        position: absolute;
        width: 100%;
        top: 25%;
        z-index: 99;
    }

    .explore-benefit .content-wrapper h1 {
        font-family: 'Chakra Petch', sans-serif;
        font-weight: bold;
        color: #fff;
    }

    .explore-benefit .head h3{
        font-size: 30px !important;
    }

    .explore-benefit .info p{
        color: #fff;
        margin-top: 20px;
        font-size: 18px;
    }

    .explore-benefit .first-col {
        margin-top: -50px;
        margin-left: -50px;
    }

    .explore-benefit .sec-col {
        margin-bottom: 70px;
    }

    @media (max-width: 1600px) {
        .explore-benefit {
            margin-top: 90px;
            height: 600px;
        }
        .explore-benefit .content-wrapper {
            top: 15%;
        }
       
    }

    @media (max-width: 1450px) {

        .explore-benefit .head img {
            width: 50px;
        }
        .explore-benefit .head h3{
            font-size: 25px !important;
        }
    
        .explore-benefit .info p{
            font-size: 17px;
        }
    }

    @media (max-width: 1350px) {
        .explore-benefit {
            margin-top: 90px;
            height: 600px;
            background-size: cover;
        }
    }

    @media (max-width: 991px) {
        .explore-benefit .first-col {
            margin-bottom: 60px;
        }
    }

    @media (max-width: 768px) {
        .explore-benefit {
            margin-top: 90px;
            height: 800px;
        }
        .explore-benefit .content-wrapper {
            position: absolute;
            width: 100%;
            top: 5%;
            z-index: 99;
        }

        .explore-benefit .first-col {
            margin-top: 0px;
            margin-left: -50px;
        }
    
        .explore-benefit .sec-col {
            margin-left: 50px;
            padding-right: 10px;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 600px) {
        .explore-benefit .sec-col {
            margin-left: 20px;
        }
    }
</style>
