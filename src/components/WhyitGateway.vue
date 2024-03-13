<template>
    <div class="whyitgateway"  >
        <div class="bg-color"></div>
        <div class="content content-wrapper">
            <h2 class="mb-5" data-aos="fade-down">Why <br> itGateway ?</h2>
            
            <div class="collapse-item cursor-pointer" data-aos="fade-right" data-aos-delay="100">
                <p class="prevent-pointer">
                    We guarantee to fulfill clients’ satisfaction by offering unique & cost-effective services, best-in-class products, 24/7 365 support and customized solutions.
                </p>
                <div class="collapsable mb-1 prevent-pointer" id="contentCollapse1" >
                    <a href="" class="d-flex align-items-center prevent-pointer"> View Managed Services 
                        <span class="material-symbols-outlined prevent-pointer">arrow_right_alt</span>
                    </a>
                </div>
            </div>

            <div class="collapse-item cursor-pointer" data-aos="fade-right" data-aos-delay="150">
                <p class="prevent-pointer">
                    We build trust with 50+ enterprise and SMB clients, and we have completed more than a 100 projects, contracts and successfully till now.
                </p>
                <div class="collapsable mb-1 prevent-pointer" id="contentCollapse2" >
                    <a href="" class="d-flex align-items-center prevent-pointer"> View Software Development 
                        <span class="material-symbols-outlined prevent-pointer">arrow_right_alt</span>
                    </a>
                </div>
            </div>

            <div class="collapse-item cursor-pointer" data-aos="fade-right" data-aos-delay="200">
                <p class="prevent-pointer">
                    We deliver outstanding support with our customer oriented and service-minded approach based on their needs.
                </p>
                <div class="collapsable mb-1 prevent-pointer" id="contentCollapse3" >
                    <a href="" class="d-flex align-items-center prevent-pointer"> View Managed Cloud Services  
                        <span class="material-symbols-outlined prevent-pointer">arrow_right_alt</span>
                    </a>
                </div>
            </div>
            <div class="collapse-item border-none d-flex justify-content-end" data-aos="fade-right" data-aos-delay="250">
                <a href="" class="d-flex align-items-center more-report"> Read More Reports  
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    setup() {
            const bg_img = require('@/assets/images/whyitGateway/itgateway.png');

            return {bg_img}
        }
    }
</script>

<style scoped>
.whyitgateway {
    margin-top: 60px;
    height: 700px;
    background-image: url('@/assets/images/whyitGateway/itgateway.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}

.whyitgateway .bg-color {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to right, #a22e75d5, #ec6416bb);
    z-index: 0 !important;
}

.whyitgateway .content{
    position: absolute;
    z-index: 99 !important;
    top: 15%;
    color: #ededed !important;
}

.whyitgateway h2 {
    font-family: 'Chakra Petch', sans-serif;
}

.whyitgateway .content .collapse-item {
    border-bottom: 2px solid #fff;
    position: relative;
    overflow: hidden;
    width: 60%;
    transition:.5s ease;
    margin-top: 30px;
}

.whyitgateway .content .collapsable {
    height: 0;
    transition: .5s ease !important;
}

.whyitgateway .content .collapse-item:hover .collapsable {
    height: 30px;
}

.whyitgateway .content .collapsable a {
    color: #ededed !important;
    font-size: 18px;
}

.whyitgateway .content .more-report {
    position: relative;
    color: #ededed !important;
}

.whyitgateway .content .more-report::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background: var(--main-color);
    transition: .3s;
}

.whyitgateway .content .more-report:hover::before {
    width: 100% ;
}

@media(max-width: 1250px) {
    .whyitgateway {
        margin-top: 40px;
        height: 600px;
    }
}

@media(max-width: 1100px) {
    .whyitgateway {
        height: 500px;
    }

    .whyitgateway .content{
        top: 5%;
    }

    .whyitgateway h2 {
        font-size: 24px;
    }

    .whyitgateway .content .collapse-item {
        width: 60%;
        margin-top: 20px;
    }

    .whyitgateway .content .collapsable a {
        font-size: 15px;
    }
}

@media(max-width: 885px) {
    .whyitgateway {
        height: 500px;
        background-size: cover;
    }

    .whyitgateway .content{
        left: 10%;
    }

    .whyitgateway .content .collapse-item {
        width: 70%;
        margin-top: 20px;
    }

}

@media(max-width: 650px) {

    .whyitgateway .content{
        left: 5%;
    }

    .whyitgateway .content .collapse-item {
        width: 80%;
        margin-top: 20px;
    }

}

@media(max-width: 500px) {
    .whyitgateway .content .collapse-item {
        width: 90%;
        margin-top: 20px;
    }

}

@media(max-width: 420px) {
    .whyitgateway .content{
        left: 1%;
    }
    .whyitgateway .content .collapse-item {
        width: 100%;
        margin-top: 20px;
    }
    .whyitgateway h2 {
        font-size: 22px;
    }

    .whyitgateway p {
        font-size: 12px;
    }

    .whyitgateway .content .collapsable a {
        font-size: 13px;
    }

    .whyitgateway .content .more-report {
        font-size: 13px;
    }

    .whyitgateway .content .more-report span {
        font-size: 16px;
    }
}

</style>
