<template>
    <div class="vision-mission content-wrapper">
        <h2 class="text-center section-header" data-aos="zoom-out">Vision, Mission & Goal</h2>
        <div class="content">
            <div class="row">
                <div class="col-12 col-sm-6 mb-3 mb-lg-0">
                    <Goal />
                </div>
                <div class="col-12 col-sm-6">
                    <Vision />
                    <Mission />
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
    import Mission from './goals/Mission'
import Vision from './goals/Vision'
import Goal from './goals/Goal'
export default {
  components: {
    Mission,
    Vision, Goal },
        
    }
</script>

<style>
    .vision-mission {
        margin-top: 100px;
    }

    .vision-mission h2 {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 2.5rem;
    }

    .vision-mission .content {
        margin-top: 40px;
    }

    .vision-mission .goal-img {
        height: 650px;
    }

    .vision-mission .vision-img, .vision-mission .mission-img {
        height: 315px;
    }

    .vision-mission h3, .vision-mission p {
        color: #ededed;
    }

    @media(max-width: 1200px) {
        .vision-mission .goal-img {
            height: 550px;
        }
    
        .vision-mission .vision-img, .vision-mission .mission-img {
            height: 265px;
        }
    }

    @media(max-width: 570px) {
        .vision-mission .goal-img {
            height: 450px;
        }
    }
    
</style>
