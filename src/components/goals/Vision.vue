<template>
    <div class="vision-img mb-5 position-relative" data-aos="fade-left">
        <img class="w-100 h-100 object-fit-cover bg-img" :src="require('@/assets/images/goals/vision.jpg')" alt="">
        <div class="header position-absolute d-flex align-items-center gap-2">
            <img class="goal_icon" :src="require('@/assets/images/goals/vision_icon.png')" alt="">
            <h3 class="section-header">Vision</h3>
        </div>
        <div class="vision-content">
            <p class="text-justify">
                To be the leading provider of exceptional IT services and products, renowned for our unrelenting dedication to providing round-the-clock support and outcomes that far surpass our customers' expectations. We strive to be leveraging the latest technologies and creative solutions to guarantee the exceptional quality.​
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .vision-mission .vision-img .bg-img {
        filter: brightness(.7);
    }
    .vision-mission .vision-img .header img {
        width: 40px;
    }

    .vision-mission .vision-img .header h3 {
        font-size: 40px;
        font-weight: bold;
        margin-top: 10px;
    }

    .vision-mission .vision-img .header {
        top: 5%;
        left: 5%;
    }

    .vision-mission .vision-content {
        position: absolute;
        top: 30%;
        padding: 0px 5%;
    }

    @media(max-width: 1200px) {
        .vision-mission .vision-img .header h3 {
            font-size: 27px !important;
        }

        .vision-mission .vision-img .header img {
            width: 30px;
        }
    }
    @media(max-width: 950px) {
        .vision-mission .vision-img .header h3 {
            font-size: 24px !important;
        }
    }
</style>
