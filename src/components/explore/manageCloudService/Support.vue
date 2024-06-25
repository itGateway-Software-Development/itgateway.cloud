<template>
    <div class="mcs-support content-wrapper">
        <h2 class="text-center fw-bold">Support Plans</h2>
        <br>
        <div class="support-card-container mb-5">
            <div class="suppport-card-wrap" v-for="(support, index) in supports" :key="index">
                <div class="support-card shadow d-flex flex-column gap-3" >
                    <h6 class="plan">{{support.plan}}</h6>
                    <div class="price">
                        <h2>{{support.price}}</h2>
                        <p>{{support.plan_duration}}</p>
                    </div>
                    <div class="plan-info">
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Deployment</span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>{{support.department}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Supports</span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>{{support.support}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Response</span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>{{support.Response}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Reporting & Analysis</span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>{{support.report}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Monitoring & Alert</span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>{{support.monitor}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Server Maintenance</span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>{{support.server_maintain}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Patch/Upgrade/Fix</span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>{{support.patch}}</span>
                                </div>
                            ​</div>
                        </div>
                    <button class="btn primary-btn">Purchase Support</button>
                    </div>
                </div>
            </div>
            <div class="suppport-card-wrap">
                <div class="support-card shadow d-flex flex-column gap-3" >
                    <h6 class="plan">Enterprise​</h6>
                    <div class="price">
                        <h2>$100 <span>Start From</span></h2> 
                        <p>Monthly</p>
                    </div>
                    <div class="plan-info">
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Deployment</span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>Install & Config​</span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Supports</span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>24x7x365</span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Response</span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>Proactive Response​</span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Support Engineer</span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>Expert</span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Architect: ​  </span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>Consult & Planning</span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Disaster Recovery</span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>+1 Site​</span>
                                </div>
                            </div>
                        </div>
                        <div class="row w-100 mb-3">
                            <div class="col-6 mb-0"><span>Management Level</span></div>
                            <div class="col-6 mb-0">
                                <div class="d-flex gap-1">
                                    <span>:</span>
                                    <span>Operation</span>
                                </div>
                            ​</div>
                        </div>
                    <button class="btn primary-btn">Purchase Support</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <router-link to="#" class="compare">Compare Managed Cloud Service Plans​</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const supports = [
                {
                    plan: "Standard",
                    price: "$19",
                    plan_duration: "Monthly",
                    department: "Install & Config",
                    support: "8x5x365 Office Days",
                    Response: "20~40 Minutes​",
                    report: "Weekly",
                    monitor: "Weekly",
                    server_maintain: "Monthly",
                    patch: "Monthly",
                },
                {
                    plan: "Professional​",
                    price: "$29",
                    plan_duration: "Monthly",
                    department: "Install & Config",
                    support: "8x7x365",
                    Response: "15~30 Minutes​​",
                    report: "Weekly",
                    monitor: "Weekly",
                    server_maintain: "Monthly",
                    patch: "Monthly",
                },
                {
                    plan: "Premium",
                    price: "$49",
                    plan_duration: "Monthly",
                    department: "Install & Config",
                    support: "24x7x365​",
                    Response: "5~15 Minutes​​",
                    report: "Weekly",
                    monitor: "Daily",
                    server_maintain: "Monthly",
                    patch: "Weekly",
                },
            ];

            return {supports}
        }
    }
</script>

<style scoped>
    .mcs-support {
        margin-top: 80px;
    }

    .mcs-support .support-card-container {
        padding: 0px 6%;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: space-between;
    }

    .mcs-support .suppport-card-wrap {
        width: 370px;
    }

    .mcs-support .support-card {
        padding: 15px;
        border: 2px solid var(--main-color);
        border-radius: 10px;
        background: var(--card-background-color);
        position: relative;
        height: 500px;
    }

    .mcs-support .support-card h6 {
        color: #EC6316;
        font-size: 19px;
        font-weight: bold;
        font-family: 'Chakra Petch', sans-serif;
    }

    .mcs-support .price h2 {
        font-size: 40px;
        font-weight: bold;
        letter-spacing: 2px;
        font-family: 'Courier New', Courier, monospace;
        background: #ff9a03;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .mcs-support .price h2 span {
        background: #96918b;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 20px;
        margin-left: -10px;
    }

    .mcs-support .price p {
        text-decoration: underline;
        margin-top: -15px;
    }

    .mcs-support span {
        font-size: 16px;
    }

    .mcs-support .btn {
        position: absolute !important;
        bottom: 10px;
        left: 10%;
        width: 80%;
    }

    .mcs-support .compare {
        font-size: 17px;
        font-weight: bold;
        color: #EC6316 !important;
        transition: .5s ease;
    }

    .mcs-support .compare:hover {
        transform: translateY(-10px);
    }

    @media (max-width: 1753px) {
        .mcs-support .support-card-container {
            padding: 0px 3%;
        }
    }

    @media (max-width: 1557px) {
        .mcs-support .support-card-container {
            padding: 0px 1%;
        }
    }

    @media (max-width: 1491px) {
        .mcs-support .support-card-container {
            padding: 0px 1%;
            justify-content: center
        }
    }

    @media (max-width: 795px) {
        .mcs-support.content-wrapper {
            padding: 10px 1% !important;
        }
        .mcs-support .suppport-card-wrap {
            width: 350px;
        }
    }

    @media (max-width: 722px) {
        .mcs-support .suppport-card-wrap {
            width: 330px;
        }

        .mcs-support span {
            font-size: 15px;
        }
    }

    @media (max-width: 681px) {
        .mcs-support.content-wrapper {
            padding: 10px 3% !important;
        }

        .mcs-support .suppport-card-wrap {
            width: 450px;
        }

        .mcs-support span {
            font-size: 16px;
        }
    }

</style>
