<template>
    <div class="footer content-wrapper py-5">
        <div class="row d-flex justify-content-center justify-content-md-between">
            <div class="col-5 col-md-3 col-lg-2 mb-5">
                <h4 class="section-header">Services</h4>
                <div class="content">
                    <router-link to="#">Cloud​</router-link>
                    <router-link to="#">Applications​</router-link>
                    <router-link to="#">Cyber Security​</router-link>
                    <router-link to="#">Infrastructure​</router-link>
                    <router-link to="#">Engineering​</router-link>
                    <router-link to="#">Managements​</router-link>
                    <router-link to="#">Developments​</router-link> 
                    <router-link to="#">Trainings</router-link>
                </div>
            </div>
            <div class="col-5 col-md-3 col-lg-2 mb-5">
                <h4 class="section-header">Career</h4>
                <div class="content">
                    <router-link to="#">View All Jobs​</router-link>
                    <router-link to="#">Development Programs</router-link>
                    <router-link to="#">Internship Programs</router-link>
                </div>
            </div>
            <div class="col-5 col-md-3 col-lg-2 mb-5">
                <h4 class="section-header">About Us</h4>
                <div class="content">
                    <router-link to="#">Contact Us</router-link>
                    <router-link to="#">Event</router-link>
                    <router-link to="#">Partners</router-link>
                    <router-link to="#">Service Groups</router-link>
                    <router-link to="#">Business Insight</router-link>
                </div>
            </div>
            <div class="col-5 col-md-3 col-lg-2 mb-5">
                <h4 class="section-header">Innovation​</h4>
                <div class="content">
                    <router-link to="#">R&D Centers</router-link>
                    <router-link to="#">Trainings</router-link>
                    <router-link to="#">Blogs</router-link>
                    <router-link to="#">Data Analysis</router-link>
                </div>
            </div>
            <hr class="d-block d-md-none">
            <div class="col-md-12 col-lg-3 mb-5">
                <div class="d-flex flex-column">
                    <a href="" class="portal-btn primary-btn">Customer Portal</a>
                    <div class="social d-flex justify-content-center gap-5 align-items-center mt-5">
                        <a href="https://www.facebook.com/ITGatewayTechnologyGroup" target="_blink"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="" target="_blink"><i class="fa-brands fa-youtube"></i></a>
                        <a href="" target="_blink"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="" target="_blink"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <p class="text-justify mt-5">
                        We are an outstanding provider of IT services founded in 2019 by a dynamic young founder who assembled a group of professionals with a service-oriented approach.​
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
    
    .footer h4 {
        font-weight: bold;
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
