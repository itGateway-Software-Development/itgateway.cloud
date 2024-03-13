<template>
    <div class="customers content-wrapper">
        <h2 class="text-center section-header" data-aos="zoom-out">Our Customers</h2>
        <p class="text-center" data-aos="zoom-out" data-aos-delay="500">
            We are empowering your vision and elevating your success. Most of the customers trusted our leading technology solutions, services, supports and innovation system.
        </p>
        <div class="customer-logo d-flex flex-wrap align-items-center">
            <div class="img" v-for="i in 11" :key="i" data-aos="flip-up">
                <img :src="require(`@/assets/images/customers/${i}.png`)" alt="">
            </div>
            <div class="img" v-for="i in 25" :key="i" data-aos="flip-up">
                <img :src="require(`@/assets/images/customers/${i}.jpg`)" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .customers {
        margin-top: 60px;
    }

    .customers h2 {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 40px;
    }

    .customers p {
        padding: 0px 20%;
    }

    .customer-logo {
        gap: 45px;
        margin-top: 40px;
    }

    .customer-logo .img {
        background: var(--sec-background-color);
        border-radius: 10px;
        padding: 10px;
        width: 120px;
        height: 120px;
    }

    .customer-logo img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        background: #fff;
    }

    @media (max-width: 1735px) {
        .customer-logo {
            gap: 40px;
        }
    
        .customer-logo .img {
            width: 110px;
            height: 110px;
        }
    }

    @media (max-width: 1570px) {
        .customer-logo {
            gap: 30px;
        }
    }

    @media (max-width: 1480px) {
        .customer-logo {
            gap: 30px;
        }
        .customer-logo .img {
            width: 100px;
            height: 100px;
        }
    }

    @media (max-width: 1365px) {
        .customer-logo .img {
            width: 90px;
            height: 90px;
        }
    }

    @media (max-width: 1260px) {
        .customer-logo {
            gap: 20px;
            justify-content: center;
        }

        .customers p {
            padding: 0px 20%;
            font-size: 14px;
        }
    }

    @media(max-width: 860px) {
        .customers p {
            padding: 0px 10%;
            font-size: 14px;
        }
    }

    @media(max-width: 600px) {
        .customers p {
            padding: 0;
            font-size: 12px;
        }
    }
</style>
