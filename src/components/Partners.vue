<template>
    <div class="partners content-wrapper">
        <h2 class="text-center section-header" data-aos="zoom-out">itGateway Partners</h2>
        <div class="tabs d-flex justify-content-center align-items-center" data-aos="flip-up">
            <span :class="{active: currentTab == 'vendor'}" @click="currentTab = 'vendor'" >Vendors</span>
            <span :class="{active: currentTab == 'product-partner'}" @click="currentTab = 'product-partner'" >Product Partners</span>
            <span :class="{active: currentTab == 'solution-partner'}" @click="currentTab = 'solution-partner'">Solution Partners</span>
        </div>

        <transition name="switch" mode="out-in">
            <!-- if vendor partners -->
            <Vendor v-if="currentTab == 'vendor'" />
            <!-- if product partenrs  -->
            <Product v-else-if="currentTab == 'product-partner'" />
            <!-- if solution partners  -->
            <Solution v-else />
        </transition>
    </div>
</template>

<script>
import Solution from './partners/Solution'
import Product from './partners/Product'
import Vendor from './partners/Vendor'
import { ref } from 'vue'
    export default {
  components: {
    Solution,
    Product, Vendor },
    setup() {
            const currentTab = ref('vendor');


            return {currentTab}
        }
    }
</script>

<style scoped>
    .partners {
        margin-top: 100px;
    }

    .partners h2 {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 2.5rem;
    }

    .partners .tabs {
        margin-top: 35px;
        margin-bottom: 80px;
        gap: 35px;
    }

    .partners .tabs span {
        font-size: 24px;
        cursor: pointer;
        position: relative;
    }

    .partners .tabs span.active {
        color: var(--main-color);
        font-weight: bold;
    }

    .partners .tabs span.active::before {
        content: '';
        position: absolute;
        bottom: -15px;
        left: -10%;
        width: 120%;
        height: 5px;
        background: var(--main-color);
    }   

    .switch-enter-from, .switch-leave-to {
        opacity: 0;
        transform: translateX(20px);
    }

    .switch-enter-to, .switch-leave-from {
        opacity: 1;
        transform: translateX(0);
    }

    .switch-enter-active {
        transition: all .5s ease;
    }
     .switch-leave-active {
        transition: all .5s ease;
    }

    @media(max-width: 1200px) {
        .partners .tabs span {
            font-size: 20px;
        }

        .partners .tabs span.active::before {
            content: '';
            position: absolute;
            bottom: -10px;
            left: -10%;
            width: 120%;
            height: 3px;
            background: var(--main-color);
        }   
    }

    @media(max-width: 550px) {
        .partners .tabs {
            gap: 25px;
        }

        .partners .tabs span {
            font-size: 18px;
        }
    }

    @media(max-width: 450px) {
        .partners .tabs {
            gap: 15px;
        }

        .partners .tabs span {
            font-size: 14px;
        }
    }
   
</style>
