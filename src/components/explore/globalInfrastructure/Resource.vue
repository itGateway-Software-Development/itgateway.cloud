<template>
    <div class="resource content-wrapper">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4">
                <div class="resource-card">
                    <h3>Read Our Technical Blogs and Content</h3>
                    <div class="readmore">
                        <router-link to="#" class="d-flex align-items-center gap-2">
                            <span>Read the blog</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <div class="resource-card">
                    <h3>Learn About Managed Cloud Services and Supports</h3>
                    <div class="readmore mcs">
                        <router-link to="#" class="d-flex align-items-center gap-2">
                            <span>Read about MCS</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <div class="resource-card">
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
    .resource {
        margin-top: 60px;
    }

    .resource .resource-card {
        margin-bottom: 10px;
        height: 120px;
        padding: 15px 20px;
        position: relative;
        transition: .5s ease;
        border-radius: 10px;
        cursor: pointer;
        border: 1px solid #EC6316;
    }

    .resource .resource-card:hover {
        background: var(--card-background-color);
        transform: translateY(-10px);
    }

    .resource .resource-card h3 {
        font-weight: bold;
        font-size: 21px;
    }

    .resource .readmore {
        position: absolute;
        bottom: 15px;
        overflow: hidden;
    }

    .resource a {
        transform: translateX(-95px);
        transition: .5s ease;
    }

    .resource .mcs a {
        transform: translateX(-110px);
        transition: .5s ease;
    }

    .resource .cloud-solution a {
        transform: translateX(-140px);
        transition: .5s ease;
    }

    .resource .resource-card:hover a {
        transform: translateX(0);
        color: #EC6316 !important;
    }

    @media (max-width: 1078px) {
        .resource .resource-card {
            height: 130px;
        }
    }
</style>
