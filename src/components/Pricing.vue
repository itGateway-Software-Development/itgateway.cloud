<template>
    <div class="pricing content-wrapper">
        <h1 class="section-header">itGateway Cloud Pricing​</h1>
        <div class="row mt-5">
            <div class="col-8 border-end">
                <p>
                    itGateway Cloud can be used with a variety of pricing and billing options that are best suited for you. We offer pay-as-you-go, and yearly pricing options based on your commitment to the individual services you need. You only pay for the services you use, and once you stop or delete using them, there are no additional costs or termination fees..
                </p>
            </div>
            <div class="col-4">
                <div class="d-flex flex-column justify-content-center align-items-center px-5">
                    <p class="text-center fw-bold">
                        See the estimate cost for cloud resources you need to deploy.​
                    </p>
                    <button class="btn primary-btn d-flex gap-2 align-items-center fill">Pricing Calculator​</button>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-sm-6 col-md-4" v-for="(item, i) in data" :key="i">
                <div class="price-card shadow">
                    <div class="img d-flex justify-content-center">
                        <img :src="item.img" alt="">
                    </div>
                    <h5>{{item.title}}</h5>
                    <p class="mt-4 text-justify">
                        {{ item.content }}
                    </p>
                    <div class="readmore">
                        <router-link to="#" class="d-flex align-items-center gap-2">
                            <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const data = [
                {
                    img: require('@/assets/images/price/pay_as_you_go.svg'),
                    title: "Pay-As-You-Go",
                    content: "With pay-as-you-go pricing option, you only pay for the services you use typically on an hourly ($/hour) basis. No partial or full upfront fees. This model allows users to scale their usage up or down based on their needs, without being tied to long-term contracts or fixed costs."
                },
                {
                    img: require('@/assets/images/price/reserve.png'),
                    title: "Cloud Reservation​",
                    content: "itGateway’s Cloud Reservation is a cost saving option offering for a commitment to use with a specific total amount for a one or three year period. This option allows you to prepay for a certain amount of compute capacity upfront, usually at a discounted rate up to 60%.​"
                },
                {
                    img: require('@/assets/images/price/spot.png'),
                    title: "Spot Request​",
                    content: "This pricing option allows users to request and utilize spare capacity. It reduce the cost at deep discount up to 90% compared to pay-as-you-go price. Spot instances are suitable for workloads that are flexible and can tolerate interruptions.​"
                },
            ];

            return {data}
        }
    }
</script>

<style>
    .pricing {
        margin-top: 90px;
    }

    .pricing .price-card {
        padding: 40px 30px;
        transition: .4s ease;
    }

    .pricing .price-card img {
        width: 200px!important;
    }

    .pricing .price-card h5 {
        margin-top: 30px;
        font-weight: bold
    }

    .pricing .price-card p {
        height: 140px;
    }

    .pricing .price-card .readmore {
        overflow: hidden;
    }

    .pricing .price-card a {
        transform: translateX(-80px);
        transition: .5s ease;
    }

    .pricing .price-card:hover {
        transform: scale(1.03);
    }

    .pricing .price-card:hover a {
        transform: translateX(0);
        color: #EC6316 !important;
    }
</style>
