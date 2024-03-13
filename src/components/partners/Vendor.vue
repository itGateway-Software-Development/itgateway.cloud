<template>
    <div class="vendor-content d-flex flex-wrap align-items-center">
        <div class="img" v-for="i in 28" :key="i" data-aos="flip-up">
            <img :src="require(`@/assets/images/vendors/${i}.png`)" alt="">
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .vendor-content {
        gap: 45px;
    }

    .vendor-content .img {
        background:  var(--sec-background-color);
        border-radius: 10px;
        padding: 10px;
        width: 120px;
        height: 120px;
    }

    .vendor-content img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (max-width: 1735px) {
        .vendor-content {
            gap: 40px;
        }
    
        .vendor-content .img {
            width: 110px;
            height: 110px;
        }
    }

    @media (max-width: 1570px) {
        .vendor-content {
            gap: 30px;
        }
    }

    @media (max-width: 1480px) {
        .vendor-content {
            gap: 30px;
        }

        .vendor-content .img {
            width: 100px;
            height: 100px;
        }
    }

    @media (max-width: 1365px) {
        .vendor-content .img {
            width: 90px;
            height: 90px;
        }
    }

    @media (max-width: 1260px) {
        .vendor-content {
            gap: 20px;
            justify-content: center;
        }
    }
</style>
