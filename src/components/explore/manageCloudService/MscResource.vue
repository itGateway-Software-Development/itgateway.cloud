<template>
    <div class="msc-resource content-wrapper">
        <div class="row mt-5">
            <div class="col-12 col-sm-6 col-md-4">
                <div class="msc-resource-card shadow">
                    <h3>Read Our Technical Blogs and Content</h3>
                    <div class="readmore">
                        <router-link to="#" class="d-flex align-items-center gap-2">
                            <span>Read the blog</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <div class="msc-resource-card shadow">
                    <h3>View itGateway Cloud Pricing and Calculation​</h3>
                    <div class="readmore pricing">
                        <router-link to="/pricing/all-pricing" class="d-flex align-items-center gap-2">
                            <span>View Cloud Pricing</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <div class="msc-resource-card shadow">
                    <h3>Find The Right Cloud Services and Solutions</h3>
                    <div class="readmore cloud-solution">
                        <router-link to="#" class="d-flex align-items-center gap-2">
                            <span>View Cloud Solutions</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
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
    .msc-resource {
        margin-top: 90px;
    }

    .msc-resource .msc-resource-card {
        margin-bottom: 10px;
        height: 120px;
        padding: 15px 20px;
        position: relative;
        transition: .5s ease;
        border-radius: 10px;
        cursor: pointer;
        border: 1px solid #EC6316;
    }

    .msc-resource .msc-resource-card:hover {
        background: var(--card-background-color);
        transform: translateY(-10px);
    }

    .msc-resource .msc-resource-card h3 {
        font-weight: bold;
        font-size: 21px;
    }

    .msc-resource .readmore {
        position: absolute;
        bottom: 15px;
        overflow: hidden;
    }

    .msc-resource a {
        transform: translateX(-95px);
        transition: .5s ease;
    }

    .msc-resource .pricing a {
        transform: translateX(-120px);
        transition: .5s ease;
    }

    .msc-resource .cloud-solution a {
        transform: translateX(-140px);
        transition: .5s ease;
    }

    .msc-resource .msc-resource-card:hover a {
        transform: translateX(0);
        color: #EC6316 !important;
    }

    @media (max-width: 1078px) {
        .msc-resource .msc-resource-card {
            height: 130px;
        }
    }
</style>
