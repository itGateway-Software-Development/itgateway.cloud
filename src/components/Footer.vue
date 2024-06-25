<template>
    <div class="footer content-wrapper py-5">
        <div class="row d-flex justify-content-center justify-content-md-between">
            <div class="col-5 col-md-3 col-lg-2 mb-5">
                <h6 class="section-header">Learn About Us​</h6>
                <div class="content">
                    <router-link to="#">Why itGateway Cloud?​</router-link>
                    <router-link to="#">What is itGateway Cloud?​</router-link>
                    <router-link to="#">Global Infrastructure​</router-link>
                    <router-link to="#">Datacenter Regions​</router-link>
                    <router-link to="#">Customer Stories​</router-link>
                    <router-link to="#">What is Cloud VM?​</router-link>
                    <router-link to="#">What is Bare-Metal Cloud?​</router-link> 
                    <router-link to="#">What is Container?​</router-link>
                    <router-link to="#">Research & Developments​</router-link>
                </div>
            </div>
            <div class="col-5 col-md-3 col-lg-2 mb-5">
                <h6 class="section-header">Products & Pricing​</h6>
                <div class="content">
                    <router-link to="#">Products​</router-link>
                    <router-link to="/pricing/all-pricing">Pricing​</router-link>
                    <router-link to="#">Free Tier​</router-link>
                    <router-link to="#">Solutions​</router-link>
                    <router-link to="#">Services​</router-link>
                    <router-link to="#">Cost Optimization​</router-link>
                </div>
            </div>
            <div class="col-5 col-md-3 col-lg-2 mb-5">
                <h6 class="section-header">Resources​</h6>
                <div class="content">
                    <router-link to="#">Getting Started​</router-link>
                    <router-link to="#">Documentation​</router-link>
                    <router-link to="#">Learn itGateway Cloud​</router-link>
                    <router-link to="#">Training and Certification​</router-link>
                    <router-link to="#">News and Activities​</router-link>
                    <router-link to="#">Events and Webinars​</router-link>
                    <router-link to="#">Partner Program​</router-link>
                    <router-link to="#">Analyst Report​</router-link>
                    <router-link to="#">White Paper​</router-link>
                    <router-link to="#">Blogs​</router-link>
                </div>
            </div>
            <div class="col-5 col-md-3 col-lg-2 mb-5">
                <h6 class="section-header">Engage​</h6>
                <div class="content">
                    <router-link to="#">Contact Sales​</router-link>
                    <router-link to="#">Contact Supports​</router-link>
                    <router-link to="#">Become a Partner​</router-link>
                    <router-link to="#">Marketplace​</router-link>
                    <router-link to="#">itGateway Community​</router-link>
                    <router-link to="#">Careers</router-link>
                </div>
            </div>
            <hr class="d-block d-md-none">
            <div class="col-md-12 col-lg-3 mb-5">
                <div class="d-flex flex-column">
                    <a href="" class="portal-btn primary-btn fill">Cloud Portal Sign In</a>
                    <div class="social d-flex justify-content-center gap-5 align-items-center mt-5">
                        <a href="https://www.facebook.com/ITGatewayTechnologyGroup" target="_blink"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="" target="_blink"><i class="fa-brands fa-youtube"></i></a>
                        <a href="" target="_blink"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="" target="_blink"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <div class="social d-flex justify-content-center gap-5 align-items-center mt-5">
                        <a href="" target="_blink"><i class="fa-brands fa-twitter"></i></a>
                        <a href="" target="_blink"><i class="fa-solid fa-envelope"></i></a>
                        <a href="" target="_blink"><i class="fa-solid fa-podcast"></i></a>
                        <a href="" target="_blink"><i class="fa-solid fa-message"></i></a>
                    </div>
                    <p class="text-justify mt-5">
                        Our Team: Web Developers / Software Engineers / DevOps Engineers / Site Reliability Engineers / Cloud Engineers / Network Engineers / Professional Supports. ​
                    </p>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-12">
                <b>Language :</b> <span class="cursor-pointer" :class="{active: language == 'EN'}" @click="changeLanguage('EN')">English</span>&nbsp;|&nbsp;
                <span class="cursor-pointer" :class="{active: language == 'MM'}" @click="changeLanguage('MM')">Myanmar</span>
            </div>
        </div>
    </div>
    <div class="copy-right d-flex flex-column flex-md-row justify-content-between align-items-center content-wrapper py-5">
        <div class="mb-3 mb-md-0">
            &copy; Copyright <b>itGateway Technology Group Ltd. </b>All Rights Reserved.
        </div>
        <div>
            Designed by <b style="color: #EC6316;">itGateway Software Development</b>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
    import { useStore } from 'vuex';
    export default {
    setup() {
            const store = useStore();
            const language = ref('EN');

            const changeLanguage = (lang) => {
                language.value = lang;
                store.dispatch('getLocale', lang);
            }

            return {changeLanguage, language}
        }
    }
</script>

<style scoped>
    .footer {
        margin-top: 100px;
        background: var(--sec-background-color);
        padding-bottom: 0px;
    }
    
    .footer .section-header {
        font-weight: bold;
        font-size: 24px !important;
    }

    .footer .content {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .footer .portal-btn {
        text-align: center;
        padding: 10px 15px;
        font-weight: bold !important;
        text-transform: uppercase;
        transition: .5s ease;
        border-radius: 0px 30px 0 30px !important;
    }
    .footer .content a {
        transition: .5s ease;
    }

    .footer .content a:hover {
        color: #EC6316 !important;
        transform: translateX(7px);
    }

    .footer span.active {
        color: #EC6316 !important;
    }

    .footer .social i {
        font-size: 30px;
        transition: .4s ease;
    }

    .footer .social i:hover {
        color: #EC6316;
    }

    #app > div > div > div.copy-right.d-flex.justify-content-between.align-items-center.content-wrapper.py-5 {
        background: var(--footer-background-color);
    }

    @media(max-width: 1150px) {
        .footer h4 {
            font-size: 23px !important;
        }
    }

    @media(max-width: 680px) {

    }

    @media(max-width: 570px) {
        .footer h4 {
            font-size: 20px !important;
        }
    }
</style>
