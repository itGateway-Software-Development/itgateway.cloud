<template>
    <div class="company-info content-wrapper">
        <div class="row">
            <div class="col-12 col-lg-8">
                <p>
                    itGateway Cloud, launched in 2020, based on Thailand and provides a wide range of cloud services to customers worldwide such as Retail Chain, Healthcare, Manufacturing, Logistics, Software Development and other communities. 
                </p>
                <p>
                    itGateway Cloud has a vast global infrastructure with data centers located in multiple regions worldwide. This ensures low latency and high availability for users around the globe. itGateway Cloud continually innovates and expands the service offerings, staying at the forefront of cloud technology.
                </p>
                <p>
                    itGateway offers various support plans, including Standard, Professional, Premium, and Enterprise support, to cater to different customer needs. Extensive training resources, certifications, and the Well-Architected Framework help customers optimize their use of our services.
                </p>
                <p>
                    We are ready to help many startups and entrepreneurs with our innovative cloud services, supporting their goals and missions as non-profits. For now, itGateway Cloud has many customer success stories of businesses transformed to digital.
                </p>
            </div>

            <div class="col-12 col-lg-4">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-12 mb-1 mb-lg-0">
                        <div class="info-card">
                            <h3>View The itGateway Cloud Global Cloud Infrastructure​</h3>
                            <div class="readmore">
                                <router-link to="/explore/global-infrastructure" class="d-flex align-items-center gap-2">
                                    <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-12 mb-1 mb-lg-0">
                        <div class="info-card">
                            <h3>Learn About Managed Cloud Services and Supports​</h3>
                            <div class="readmore">
                                <router-link to="/explore/manage-cloud-services" class="d-flex align-items-center gap-2">
                                    <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-12 mb-1 mb-lg-0">
                        <div class="info-card">
                            <h3>Find The Right Cloud Services and Solutions​</h3>
                            <div class="readmore">
                                <router-link to="#" class="d-flex align-items-center gap-2">
                                    <span>Read More</span> <span class="material-symbols-outlined mt-1 ms-1">arrow_right_alt</span>
                                </router-link>
                            </div>
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
    .company-info {
        margin-top: 70px;
    }

    .company-info p {
        font-size: 17px;
    }

    .company-info .info-card {
        margin-bottom: 10px;
        height: 90px;
        padding: 15px 20px;
        position: relative;
        transition: .5s ease;
        border-radius: 10px;
        cursor: pointer;
        border: 1px solid #EC6316;
    }

    .company-info .info-card:hover {
        background: var(--card-background-color);
        transform: translateX(10px);
    }

    .company-info .info-card h3 {
        font-weight: bold;
        font-size: 17px;
    }

    .company-info .info-card .readmore {
        position: absolute;
        bottom: 15px;
        overflow: hidden;
    }

    .company-info .info-card .readmore a {
        transform: translateX(-85px);
        transition: .5s ease;
    }

    .company-info .info-card:hover a {
        transform: translateX(0);
        color: #EC6316 !important;
    }

    @media (max-width: 1721px) {
        .company-info .info-card {
            height: 100px;
        }
    }
</style>
