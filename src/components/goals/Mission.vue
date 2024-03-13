<template>
    <div class="mission-img position-relative" data-aos="fade-up">
        <img class="w-100 h-100 object-fit-cover bg-img" :src="require('@/assets/images/goals/mission.jpg')" alt="">
        <div class="header position-absolute d-flex align-items-center gap-2">
            <img class="goal_icon" :src="require('@/assets/images/goals/mission_icon.png')" alt="">
            <h3 class="section-header">Mission</h3>
        </div>
        <div class="vision-content">
            <p class="text-justify">
                To be a trusted partner to our clients by offering round-the-clock, superior and cost-effective IT services and high-guaranteed products that will meet their expectations and objectives to build the most powerful IT based business in the constantly changing IT environment of the twenty-first century.​
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .vision-mission .mission-img .bg-img {
        filter: brightness(.8);
    }
    .vision-mission .mission-img .header img {
        width: 40px;
    }

    .vision-mission .mission-img .header h3 {
        font-size: 2.2rem;
        font-weight: bold;
        margin-top: 10px;
    }

    .vision-mission .mission-img .header {
        top: 5%;
        left: 5%;
    }

    .vision-mission .vision-content {
        position: absolute;
        top: 30%;
        padding: 0px 5%;
    }

    @media(max-width: 1200px) {
        .vision-mission .mission-img .header h3 {
            font-size: 27px !important;
        }

        .vision-mission .mission-img .header img {
            width: 30px;
        }
    }
    @media(max-width: 950px) {
        .vision-mission .mission-img .header h3 {
            font-size: 24px !important;
        }

    }
</style>
