<template>
    <div class="carousel-wrapper">
        <div class="carousel-bg-color"></div>
        <img :src="require('@/assets/images/carousel/banner.png')" alt="">
        <div class="carousel-content">
            <h2 class="mb-5" data-aos="fade-down">Build, Deploy and Access Anywhere.​</h2>
            <p class="text-white">Break the limits of applications, ` and resources with our cloud infrastructure. Try itGateway cloud for up to 30 days.​</p>
            <div class="d-flex align-items-center gap-3">
                <button class="btn primary-btn d-flex gap-2 align-items-center register-btn">Register <span class="material-symbols-outlined">east</span></button>
                <button class="btn primary-btn d-flex gap-2 align-items-center">Try for Free <span class="material-symbols-outlined">east</span></button>
            </div>
        </div>
    </div>
    <div class="carousel-link shadow content-wrapper justify-content-between align-items-center gap-3">
        <div class="d-flex align-items-center gap-3">
            <router-link to="#" :class="{active: currentSection == 'product'}">Compare Products​</router-link>
            <router-link to="#">Global Infrastructure​</router-link>
            <router-link to="#">Solutions​</router-link>
            <router-link to="#">Pricing​</router-link>
            <router-link to="#">Success Story​</router-link>
            <router-link to="#">Business​</router-link>
        </div>
        <button class="btn d-flex gap-2 align-items-center text-white register-btn">Get Started <span class="material-symbols-outlined">east</span></button>
    </div>

    <!-- for mobile  -->
    <div class="carousel-link-mobile shadow content-wrapper px-4">
        <select name="" id="" class="form-select">
            <option value="Compare Products​">Compare Products​</option>
            <option value="Global Infrastructure​">Global Infrastructure​</option>
            <option value="Solutions​">Solutions​</option>
            <option value="Pricing​">Pricing​</option>
            <option value="Success Story​">Success Story​</option>
            <option value="Business​">Business​</option>
        </select>
        <button class="btn d-flex gap-2 align-items-center text-white register-btn">Get Started <span class="material-symbols-outlined">east</span></button>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
    
    export default {
    setup() {
            const currentSection = ref('product');

            return {currentSection}
        }
    }
</script>

<style scoped>
    .carousel-wrapper {
        width: 100%;
        height: 650px;
        position: relative;
        margin-top: 112px;
    }

    .carousel-wrapper .carousel-bg-color {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #6263c0d7 0%, #161552d3 40%, #f2f2f200 70%);
        z-index: 0 !important;
    }

    .carousel-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    .carousel-wrapper .carousel-content {
        position: absolute;
        top: 25%;
        left: 5%;
        width: 50%;
    }

    .carousel-content h2 {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 48px;
        letter-spacing: 0.007rem;
        color: #fff;
    }

    .carousel-content .special-text {
        color: #EC6316;
        font-weight: bold;
        font-size: 24px;
    }

    .carousel-content p {
        font-size: 24px;
        width: 70%;
    }

    .carousel-content button {
        font-weight: bold !important;
        margin-top: 40px !important;
        transition: .3s ease;
        background: #ffffff09 !important;
        border: 2px solid #e25a00 !important;
        color: #ededed !important;
        padding: 10px 15px;
    }

    .carousel-content button.register-btn {
        border: 2px solid #e25a00 !important;
        background: linear-gradient(99deg,#EC6316 3%,#c75b13 90%) !important;
    }

    .carousel-link-mobile {
        display: none;
    }

    .carousel-link-mobile select {
        width: 75%;
    }

    .carousel-link-mobile button {
        height: 45px;
        margin-bottom: 10px;
    }

    .carousel-link {
        display: flex;
        box-shadow: 0px 0px 4px var(--footer-light-background-color) !important;
    }

    .carousel-link button, .carousel-link-mobile button {
        border: 2px solid #ff9901 !important;
        background: linear-gradient(99deg,#fd9e0f 3%,#ff9901 90%) !important;
        border-radius: 0px 18px 0 18px;
    }

    .carousel-link a {
        padding: 10px 15px;
        position: relative;
    }

    .carousel-link a.active::before {
        content: "";
        position: absolute ;
        width: 100% ;
        bottom: -12px;
        left: 0;
        height: 3px;
        background: var(--sec-background-light-color);
    }

    @media(max-width: 1510px) {
        .carousel-content h2 {
            font-size: 40px;
        }
        .carousel-content p {
            font-size: 20px;
        }

        .carousel-content .special-text {
            font-size: 22px;
        }
    }

    @media(max-width: 1200px) {
        .carousel-wrapper {
            height: 500px;
        }
        .carousel-content h2 {
            font-size: 35px;
        }
        .carousel-content p {
            font-size: 18px;
        }

        .carousel-content .special-text {
            font-size: 20px;
        }

    }

    @media (max-width: 1110px) {
        .carousel-wrapper .carousel-content {
            width: 60%;
        }
    }

    @media (max-width: 925px) {
        .carousel-wrapper .carousel-content {
            width: 70%;
        }
    }

    @media (max-width: 800px) {
        .carousel-wrapper {
            height: 450px;
        }
        .carousel-content h2 {
            font-size: 30px;
        }
        .carousel-content p {
            font-size: 16px;
        }

        .carousel-content .special-text {
            font-size: 17px;
        }
    }

    @media (max-width: 768px) {
        .carousel-wrapper {
            height: 400px;
            margin-top: 20px;

        }
        .carousel-content h2 {
            font-size: 25px;
        }

        .carousel-content p {
            font-size: 16px;
        }

        .carousel-link-mobile {
            padding: 0 5px;
            margin-top: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .carousel-link-mobile select {
            background-color: var(--sec-background-color);
            color: var(--font-color);
            padding: 10px 20px;
            margin-bottom: 10px;
        }

        .carousel-link {
            display: none;
        }
        .indicator .text-slide {
            font-size: 12px;
        }

        .progress-bar {
            height: 2px;
          }
    }

    @media (max-width: 600px) {
        .carousel-wrapper .carousel-content {
            width: 60%;
        }
        .carousel-content h2 {
            font-size: 20px;
        }
        .carousel-content p {
            font-size: 15px;
        }

        .carousel-content .special-text {
            font-size: 15px;
        }
        .carousel-content button {
            font-size:11px !important;
            border: 1px solid #ededed !important;
         }

        .carousel-content .material-symbols-outlined {
            font-size: 14px;
        }
    }

    @media (max-width: 450px) {
        .carousel-wrapper .carousel-content {
            width: 90%;
        }

        .carousel-content h2 {
            font-size: 18px;
        }
        .carousel-content p {
            font-size: 13px;
        }

        .carousel-content .special-text {
            font-size: 14px;
        }
        .carousel-content button {
            margin-top: 10px !important; 
         }
    }
</style>
