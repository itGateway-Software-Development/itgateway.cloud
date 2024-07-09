<template>
    <div class="more-about-company content-wrapper">
        <div class="card-wrapper">
            <div class="more-info-card" v-for="(info, index) in infos" :key="index">
                <h4 class="fw-bold mb-3">{{info.title}}​</h4>
                <p>
                    {{ info.text }}
                </p>
                <div class="readmore" :class="info.read_more">
                    <router-link to="#" class="d-flex align-items-center gap-2">
                        <span>{{info.link_text}}</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const infos = [
                {
                    title: "Global Cloud Infrastructure",
                    text: "Cloud resources can be deployed across various regions, offering reliable, secure, and high-performance solutions to meet global business needs.​",
                    link_text: "Read More About Global Infrastructure",
                    read_more: 'global',
                },
                {
                    title: "Cloud Products & Solutions​",
                    text: "Over 20+ Cloud products & solutions can be used widely for many organization such as Retails, Healthcare, Manufacturing, Production, Logistics and other industries.​​",
                    link_text: "Read More About Products & Solutions",
                    read_more: 'product',
                },
                {
                    title: "Pricing and Calculations​",
                    text: "itGateway Cloud has many types of pricing and billing for each services such as Pay-as-You-Go, Monthly, Yearly and Contract Based.​​",
                    link_text: "View Cloud Pricing & Calculation",
                    read_more: 'pricing',
                },
            ];

            return {infos}
        }
    }
</script>

<style scoped>
    .more-about-company {
        margin-top: 90px;
    }

    .more-about-company .more-info-card {
        border: 1px solid #302d58;
        border-top: 5px solid #EC6316;
        padding: 20px;
        border-radius: 7px;
        position: relative;
        cursor: pointer;
    }

    .more-about-company .card-wrapper {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    }

    .more-about-company .card-wrapper .readmore {
        position: absolute;
        bottom: 0px;
        overflow: hidden;
    }

    .more-about-company .card-wrapper .global a {
        transform: translateX(-260px);
        transition: .5s ease;
    }

    .more-about-company .card-wrapper .product a {
        transform: translateX(-260px);
        transition: .5s ease;
    }
    .more-about-company .card-wrapper .pricing a {
        transform: translateX(-230px);
        transition: .5s ease;
    }

    .more-about-company .card-wrapper .more-info-card:hover a {
        transform: translateX(0);
        color: #EC6316 !important;
    }

    @media (max-width: 1200px) {
        .more-about-company .card-wrapper .global a {
            transform: translateX(-240px);
            transition: .5s ease;
        }
    
        .more-about-company .card-wrapper .product a {
            transform: translateX(-250px);
            transition: .5s ease;
        }
        .more-about-company .card-wrapper .pricing a {
            transform: translateX(-210px);
            transition: .5s ease;
        }
    }
</style>
