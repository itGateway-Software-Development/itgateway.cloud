<template>
    <div class="success-story content-wrapper">
        <h1 class="section-header">Success Story</h1>
        <div class="story-container row mt-5">
            <div class="col-12 col-lg-3 mb-3 mb-lg-0 pe-0 main-card">
                <img class="" :src="require('@/assets/images/success_story.jpeg')" alt="">
                <div>
                    <h4 class="text-justify mb-5">Managed Services Behind the Cloud​</h4>
                    <button class="btn primary-btn d-flex gap-2 align-items-center fill">Contact Sales</button>
                </div>
            </div>
            <div class="col-12 col-md-4 col-lg-3 pe-0">
                <div class="success-card shadow">
                    <img :src="require('@/assets/images/success_story/1.jpg')" alt="">
                    <h5 class="my-3 fw-bold">Living 9</h5>
                    <p class="text-justify">
                        Running ERP and POS software on Cloud to provide their retail shop .​
                    </p>
                    <div class="readmore">
                        <router-link to="#" class="d-flex align-items-center gap-2">
                            <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                        </router-link>
                    </div>
                </div>
                <div class="success-card shadow">
                    <img :src="require('@/assets/images/success_story/2.jpg')" alt="">
                    <h5 class="my-3 fw-bold">AKT Holdings</h5>
                    <p class="text-justify">
                        Build and run cloud-based ERP software to manage and automate the work flow. ​
                    </p>
                    <div class="readmore">
                        <router-link to="#" class="d-flex align-items-center gap-2">
                            <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 col-lg-3 pe-0">
                <div class="success-card shadow">
                    <img :src="require('@/assets/images/success_story/3.jpg')" alt="">
                    <h5 class="my-3 fw-bold">Snoopy Mobile​</h5>
                    <p class="text-justify">
                        Running ERP and POS software on Cloud to provide their smartphone showroom. ​
                    </p>
                    <div class="readmore">
                        <router-link to="#" class="d-flex align-items-center gap-2">
                            <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                        </router-link>
                    </div>
                </div>
                <div class="success-card shadow">
                    <img :src="require('@/assets/images/success_story/4.jpg')" alt="">
                    <h5 class="my-3 fw-bold">K Mart​</h5>
                    <p class="text-justify">
                        Running ERP and POS software on Cloud to provide their retail shop. ​​
                    </p>
                    <div class="readmore">
                        <router-link to="#" class="d-flex align-items-center gap-2">
                            <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-4 col-lg-3 pe-0">
                <div class="success-card shadow">
                    <img :src="require('@/assets/images/success_story/5.jpg')" alt="">
                    <h5 class="my-3 fw-bold">Amigos International​</h5>
                    <p class="text-justify">
                        Building ERP System and Digital Workspaces on Cloud to manage business process.​
                    </p>
                    <div class="readmore">
                        <router-link to="#" class="d-flex align-items-center gap-2">
                            <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                        </router-link>
                    </div>
                </div>
                <div class="success-card shadow">
                    <img :src="require('@/assets/images/success_story/6.jpg')" alt="">
                    <h5 class="my-3 fw-bold">KIA Union Group​​</h5>
                    <p class="text-justify">
                        Deploy and run cloud-based ERP  software to provide their KIA car showroom.​
                    </p>
                    <div class="readmore">
                        <router-link to="#" class="d-flex align-items-center gap-2">
                            <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                        </router-link>
                    </div>
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
    .success-story {
        margin-top: 90px;
    }

    .success-story .story-container .main-card {
        position: relative;
    }

    .success-story .story-container .main-card div {
        position: absolute;
        padding: 30px;
        bottom: 5%;
    }

    .success-story .story-container .main-card h4 {
        color: #ededed !important;
        font-weight: bold;
    }

    .success-story .story-container .main-card img{
        width: 100%;
        height: 500px;
        border-radius: 10px;
    }

    .success-story .success-card {
        margin-bottom: 10px;
        height: 245px;
        padding: 15px 20px;
        position: relative;
        transition: .5s ease;
        border-radius: 10px;
        background: var(--card-background-color);
    }

    .success-story .success-card:hover {
        background: var(--card-background-color);
        transform: translateY(-10px);
    }

    .success-story .success-card img {
        width: 60px;
    }

    .success-story .success-card p {
        height: 80px;
    }

    .success-story .readmore {
        position: absolute;
        bottom: 15px;
        overflow: hidden;
    }

    .success-story a {
        transform: translateX(-80px);
        transition: .5s ease;
    }

    .success-story .success-card:hover a {
        transform: translateX(0);
        color: #EC6316 !important;
    }

    @media (max-width: 991px) {
        .success-story .story-container .main-card img{
            height: 300px;
            object-fit: cover;
        }
    }

    @media (max-width: 767px) {
        .story-container {
            padding: 0px 30px;
        }

        .success-story a {
            transform: translateX(0px);
            transition: .5s ease;
        }

        .col-lg-3 .pe-0 {
            padding-left: 0;
        }
    }
</style>
