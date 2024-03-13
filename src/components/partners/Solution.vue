<template>
    <div class="solution-partner">
        <div class="row px-3 px-lg-0">
            <div class="col-12 col-lg-5 asia-matrix">
                <div class="d-flex justify-content-center mb-5">
                    <img :src="require('@/assets/images/partners/asia_matrix.png')" alt="">
                </div>
                <p class="text-justify mb-5">
                    Asia Matrix is one of the leading Odoo ERP software, solution and service provider companie in Myanmar. <br>
                    ​itGateway is collaborating with AX to provide the cloud solutions and services for running Odoo ERP system to become the customer companies into paperless e-business.​
                </p>
                <button class="primary-btn btn px-5">Read More</button>
            </div>
            <div class="col-12 col-lg-7 group">
                <div class="row">
                    <div class="col-12 col-md-6 pe-md-0 mb-3">
                        <div class="group-item position-relative">
                            <div class="d-flex justify-content-center mb-5">
                                <img :src="require('@/assets/images/partners/mit.png')" alt="">
                            </div>
                            <h3 class="text-center">Myanmar Information Technology</h3>
                            <p>
                                MIT is a leading software development company not only in Myanmar but also in Singapore.​
                            </p>
                            <p>
                                We are providing MIT to become the cloud based ERP & POS solution for many business and organizations.​
                            </p>
                            <button class="primary-btn btn px-5 position-absolute" style="bottom: 20px;">Read More</button>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="group-item position-relative">
                            <div class="d-flex justify-content-center mb-5 itg-img">
                                <img :src="require('@/assets/images/partners/itg.png')" alt="">
                            </div>
                            <h3 class="text-center">itGateway Cloud​</h3>
                            <p>
                                itGateway Cloud is running under itGateway Technology Group Ltd. and offers cloud services & solutions with automation system.
                            </p>
                            <p>
                                Mainly focus to transform as digital business with speed, agility and reliability. 
                            </p>
                            <button class="primary-btn btn px-5 position-absolute" style="bottom: 20px;">Read More</button>
                        </div>
                    </div>
                </div>
                <div class="row mt-5 view-program">
                    <a href="" class="d-inline-flex align-items-center gap-2">View Partner Program
                        <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .solution-partner .asia-matrix {
        padding: 30px;
        background: linear-gradient(to bottom, #EC6316, #A22E76);
        color: #ededed;
    }

    .solution-partner button {
        background: var(--main-color);
    }

    .solution-partner .group {
        background: var(--sec-background-color);
        padding: 10px;
    }

    .solution-partner .group .group-item {
        padding: 20px 10px;
        background: var(--background-color);
        height: 450px;
    }

    .solution-partner .group .group-item img {
        width: 20%;
    }

    .solution-partner .group .group-item .itg-img img {
        width: 22%;
    }

    .solution-partner .group .group-item h3 {
        height: 70px;
    }

    .solution-partner .view-program a {
        color: #A22E76 !important;
        font-weight: bold;
        transition: .5s ease;
    }

    .solution-partner .view-program a:hover {
        transform: translateX(10px);
    }

    @media(max-width: 1200px) {
        .solution-partner .group .group-item h3 {
            height: 70px;
            font-size: 20px;
        }
    }
</style>
