<template>
    <div class="mcs-benifit content-wrapper">
        <div class="row">
            <div class="col-12 col-md-6 col-xl-5 offset-xl-1 mb-5 mb-md-0 order-5 order-md-1">
                <div class="collapse-items">
                    <div class="item" v-for="(content, index) in contents" :key="index">
                        <div class="head d-flex justify-content-between">
                            <h5>{{content.title}}​</h5>
                            <span class="material-symbols-outlined plus">add</span>
                            <span class="material-symbols-outlined minus">remove</span>
                        </div>
                        <div class="info">
                            <p class="mt-3">
                                {{ content.text }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-xl-4 offset-xl-2 order-1 order-md-5">
                <div class="benifit-title h-100">
                    <h2>Benifit of <span>Managed Cloud Services</span></h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const contents = [
                {
                    title: "Quick Response Time",
                    text: "Our cloud support team will respond based on your selected support plan within the SLA time. Example, if your support plan is professional, you will get the respond between 15 ~ 30 minutes. ​"
                },
                {
                    title: "Reporting & Analysis",
                    text: "The cloud team always analyzes and sends you a report daily or weekly on your cloud workload and resources. This allows you to easily gather saturation and information based on these reports.​​"
                },
                {
                    title: "Monitoring & Alert​",
                    text: "We continuously monitor your cloud workload and resources, alerting you when service or workload downtime has occur. We then take immediate action to resolve the issue.​​​"
                },
                {
                    title: "Service Maintenance​",
                    text: "Support team will work diligently to complete the maintenance as quickly and efficiently as possible to minimize any disruption & no downtime.​​​"
                },
                {
                    title: "Patch & Upgrade​",
                    text: "Patch and upgrade are necessary to apply the latest security enhancements, performance improvements, and feature updates to our cloud infrastructure. ​​​"
                },
                {
                    title: "Setup & Deployment​",
                    text: "You don’t need to worry about your workload deployment and setup. We take full responsibility for these processes to bring your cloud resources to production.​​"
                },
                {
                    title: "Backup & Replication​​",
                    text: "Back up your database to another location every hour or minute using an automated system. With enterprise support, you will also get an additional disaster recovery site to minimize service downtime and data loss.​​​"
                },
            ];

            return {contents}
        }
    }
</script>

<style scoped>
    .mcs-benifit {
        margin-top: 90px;
    }

    .mcs-benifit .item {
        border-bottom: 1px solid var(--font-mute-dark);
        cursor: pointer;
    }

    .mcs-benifit .item .head {
        padding: 10px;
        transition: .5s ease-out;
        border-radius: 7px;
    }

    .mcs-benifit .item .head h5 {
        font-size: 18px;
        font-weight: bold;
    }

    .mcs-benifit .item .info {
        height: 0;
        visibility: hidden;
        overflow: hidden;
        opacity: 0;
        transition: .5s ease-out;
    }

    .mcs-benifit .item .info p {
        text-align: justify;
        padding-left: 10px;
    }

    .mcs-benifit .item .minus {
        display: none;
    }

    .mcs-benifit .item:hover .head {
        background: rgb(236,99,22);
        background: radial-gradient(circle, rgba(236,99,22,0.700717787114846) 18%, rgba(252,70,199,0.5186449579831933) 95%);
    }
   
    .mcs-benifit .item:hover .info {
        display: block;
        height: 110px;
        visibility: visible;
        opacity: 1;
    }

    .mcs-benifit .item:hover .minus {
        display: inline-block;
    }

    .mcs-benifit .item:hover .plus {
        display: none;
    }

    .mcs-benifit .benifit-title {
        padding-right: 100px;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .mcs-benifit .benifit-title h2 {
        font-size: 35px;
        line-height: 50px;
    }

    .mcs-benifit .benifit-title h2 span {
        font-size: 35px;
        font-weight: bold;
    }

    @media (max-width: 1467px) {
        .mcs-benifit .benifit-title {
            padding-right: 50px;
        }
    }

    @media (max-width: 1199px) {
        .mcs-benifit .benifit-title {
            padding-right: 0px;
            margin-left: 30px;
        }
    }

    @media (max-width: 767px) {
        .mcs-benifit {
            margin-top: 30px;
        }

        .mcs-benifit .benifit-title {
            margin-bottom: 20px;
        }

        .mcs-benifit .item:hover .info {
            display: block;
            height: 90px;
            visibility: visible;
            opacity: 1;
        }

        .mcs-benifit .item .info p {
            font-size: 16px;
        }
    }

    @media (max-width: 510px) {
        .mcs-benifit .item:hover .info {
            display: block;
            height: 110px;
            visibility: visible;
            opacity: 1;
        }

        .mcs-benifit .benifit-title h2 {
            font-size: 30px;
            line-height: 50px;
        }
    
        .mcs-benifit .benifit-title h2 span {
            font-size: 30px;
            font-weight: bold;
        }
    }

</style>
