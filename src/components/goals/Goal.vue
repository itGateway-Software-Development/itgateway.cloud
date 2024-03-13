<template>
    <div class="goal-img position-relative" data-aos="zoom-out">
        <img class="w-100 h-100 object-fit-cover bg-img" :src="require('@/assets/images/goals/goals.jpeg')" alt="">
        <div class="header position-absolute d-flex align-items-center gap-3">
            <img class="goal_icon" :src="require('@/assets/images/goals/goal_icon.png')" alt="">
            <h3 class="section-header">Goals</h3>
        </div>
        <div class="goal-content w-100 ">
            <div class="d-flex flex-column align-items-center">
                <router-link to="#" class="d-flex gap-2"> 
                    itGateway Cloud
                    <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
                </router-link>
                <router-link to="#" class="d-flex gap-2"> 
                    Software Development 
                    <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
                </router-link>
                <router-link to="#" class="d-flex gap-2"> 
                    Premium IT Solutions 
                    <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
                </router-link>
                <router-link to="#" class="d-flex gap-2"> 
                    Engineering Solutions 
                    <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
                </router-link>
                <router-link to="#" class="d-flex gap-2"> 
                    Managed Services
                    <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
                </router-link>
                <router-link to="#" class="d-flex gap-2"> 
                    Cyber Security Solutions
                    <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
                </router-link>
                <router-link to="#" class="d-flex gap-2"> 
                    Cloud Application 
                    <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
                </router-link>
                <router-link to="#" class="d-flex gap-2"> 
                    Trainings 
                    <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .vision-mission .goal-img .bg-img {
        filter: brightness(.7);
    }
    .vision-mission .goal-img .header {
        top: 5%;
        left: 30%;
    }
    .vision-mission .goal-img .header img {
        width: 50px;
    }

    .vision-mission .goal-img .header h3 {
        font-size: 48px;
        font-weight: bold;
        margin-top: 10px;
    }

    .vision-mission .goal-content {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
    }

    .vision-mission .goal-content a {
        margin-bottom: 10px;
        font-size: 24px;
        font-weight: bold;
        transition: .5s ease;
        color: #ededed !important;
    }

    .vision-mission .goal-content span {
        font-weight: bold;
    }

    .vision-mission .goal-content a:hover {
        transform: translateX(10px);
        color: #EC6316 !important;
    }  
    
    @media(max-width: 1500px) {
        .vision-mission .goal-content a {
            font-size: 22px;
        }
    }

    @media(max-width: 1200px) {
        .vision-mission .goal-img .header h3 {
            font-size: 35px;
        }
        .vision-mission .goal-img .header img {
            width: 40px;
        }
    }

    @media(max-width: 950px) {
        .vision-mission .goal-content a {
            font-size: 18px;
        }

        .vision-mission .goal-img .header h3 {
            font-size: 25px !important;
        }
    }

    
</style>
