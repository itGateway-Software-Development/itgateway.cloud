<template>
    <div class="support content-wrapper">
        <h1 class="section-header">Managed Cloud Services​</h1>
        <div class="row px-5 px-md-0">
            <div class="col-12 col-md-5 offset-md-1 pe-md-1">
                <div class="small-card standard-card">
                    <div class="bg-color"></div>
                    <div class="content d-flex flex-column justify-content-center">
                        <h3 class="">Standard​</h3>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Deployment </div>
                            <div class="col-6">:  Install & Config​</div>
                        </div>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Supports  </div>
                            <div class="col-6">:  8x5x365 Office Days ​​</div>
                        </div>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Response   </div>
                            <div class="col-6">:  20~40 Minutes ​​</div>
                        </div>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Reporting & Analysis  </div>
                            <div class="col-6">:  Weekly</div>
                        </div>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Monitoring & Alert  </div>
                            <div class="col-6">:  Weekly</div>
                        </div>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Server Maintenance  </div>
                            <div class="col-6">:  Monthly​​</div>
                        </div>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Patch/Upgrade/Fix   </div>
                            <div class="col-6">:  Monthly ​</div>
                        </div>
                        <div class="readmore mt-1">
                            <router-link to="#" class="d-flex align-items-center gap-2">
                                <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="small-card professional-card">
                    <div class="bg-color"></div>
                    <div class="content d-flex flex-column justify-content-center">
                        <h3 class="">Prefessional</h3>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Deployment </div>
                            <div class="col-6">:  Install & Config​</div>
                        </div>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Supports  </div>
                            <div class="col-6">:  8x7x365​ ​​</div>
                        </div>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Response   </div>
                            <div class="col-6">:  15~30 Minutes ​​</div>
                        </div>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Reporting & Analysis  </div>
                            <div class="col-6">:  Weekly</div>
                        </div>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Monitoring & Alert  </div>
                            <div class="col-6">:  Weekly</div>
                        </div>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Server Maintenance  </div>
                            <div class="col-6">:  Monthly​​</div>
                        </div>
                        <div class="row w-100">
                            <div class="col-6 col-sm-5">Patch/Upgrade/Fix   </div>
                            <div class="col-6">:  Monthly ​</div>
                        </div>
                        <div class="readmore mt-1">
                            <router-link to="#" class="d-flex align-items-center gap-2">
                                <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-5">
                <div class="premium-card">
                    <div class="bg-color"></div>
                    <div class="content d-flex flex-column justify-content-center">
                        <h3 class="mb-5">Premium​</h3>
                        <div class="row w-100 mb-1">
                            <div class="col-6 col-sm-5">Deployment </div>
                            <div class="col-6">:  Install & Config​</div>
                        </div>
                        <div class="row w-100 mb-1">
                            <div class="col-6 col-sm-5">Supports  </div>
                            <div class="col-6">:  24x7x365​</div>
                        </div>
                        <div class="row w-100 mb-1">
                            <div class="col-6 col-sm-5">Response   </div>
                            <div class="col-6">:  5~15 Minutes​​</div>
                        </div>
                        <div class="row w-100 mb-1">
                            <div class="col-6 col-sm-5">Reporting & Analysis  </div>
                            <div class="col-6">:  Weekly​​</div>
                        </div>
                        <div class="row w-100 mb-1">
                            <div class="col-6 col-sm-5">Monitoring & Alert  </div>
                            <div class="col-6">:  Daily​​</div>
                        </div>
                        <div class="row w-100 mb-1">
                            <div class="col-6 col-sm-5">Server Maintenance  </div>
                            <div class="col-6">:  Monthly​​</div>
                        </div>
                        <div class="row w-100 mb-1">
                            <div class="col-6 col-sm-5">Patch/Upgrade/Fix   </div>
                            <div class="col-6">:  Weekly​​</div>
                        </div>
                        <div class="readmore mt-5">
                            <router-link to="#" class="d-flex align-items-center gap-2">
                                <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                            </router-link>
                        </div>
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
    .support {
        margin-top: 90px;
    }

    .support .section-header {
        margin-bottom: 30px;
    }

    .support .standard-card {
        height: 293px;
        background-image: url('@/assets/images/support/standard.jpeg');
        background-size: cover;
        position: relative;
        margin-bottom: 15px;
    }

    .support .professional-card {
        height: 293px;
        background-image: url('@/assets/images/support/professional.jpeg');
        background-size: cover;
        position: relative;
        margin-bottom: 15px;
    }

    .support .premium-card {
        height: 600px;
        background-image: url('@/assets/images/support/premium.jpeg');
        background-size: 100%;
        position: relative;
    }

    .support .bg-color {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(140deg, #ec6416b7, #a22e75b9);
    }

    .support .small-card .content {
        position: absolute;
        top: 10%;
        left: 10%;
        width: 100%;
    }

    .support .premium-card .content {
        position: absolute;
        top: 20%;
        left: 10%;
        width: 100%;
    }

    .support  .content h3 {
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
        color: #ededed;
    }

    .support .small-card .content div, .support .small-card .content span {
        font-size: 16px;
        font-weight: bold;
        color: #ededed;
    }

    .support .premium-card .content div, .support .premium-card .content span {
        font-size: 18px;
        font-weight: bold;
        color: #ededed;
    }

    .support .readmore span {
        color: #ffb006 !important;
    }

    @media (max-width: 1090px) {
        .support .standard-card {
            height: 368px;
            margin-bottom: 15px;
        }
    
        .support .professional-card {
            height: 368px;
            margin-bottom: 15px;
        }
    
        .support .premium-card {
            height: 750px;
        }
    }

    @media (max-width: 767px) {
        .support .premium-card {
            height: 400px;
        }
    }
</style>
