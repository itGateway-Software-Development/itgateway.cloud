<template>
    <div class="content-wrapper service row align-items-center">
        <div class="col-12 col-md-6">
            <div class="row">
                <div class="col-12 col-sm-6 mb-5 mb-sm-0" v-for="(data, i) in services" :key="i">
                    <div class="service-detail d-flex flex-column justify-content-center align-items-center">
                        <h3>{{data.no}}</h3>
                        <p>
                            {{data.info}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 service-info">
            <p class="text-justify">
                itGateway Cloud was launched in early 2022, offering <span>Managed Cloud Services</span> to numerous customers. Afterward, it was transformed into a <span>Global Cloud Service Provider</span> equipped with an automatic provisioning system, orchestration system, automatic billing and payment system. We focus on the stability and high performance of our Cloud Resources, Services, Solutions and customer supports.​
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const services = [
                {
                    no: '> 10',
                    info: "Managed Cloud Services for Bare-Metal Cloud Servers, Windows & Linux VM​"
                },
                {
                    no: '100 +​',
                    info: "Shared and Dedicated Virtual Machine, Container and Web Hosting​"
                },
                {
                    no: '200 +​',
                    info: "Managed Cloud VPN Users on Multiple Regions for Secure High Speed Connection​"
                },
                {
                    no: '20 +​',
                    info: "Enterprise Customers Running Large Cloud Resources on Multiple Regions ​"
                },
            ];

            return {services}
        }
    }
</script>

<style scoped>
    .service {
        margin-top: 100px;
    }
    .service .service-detail h3 {
        font-size: 48px;
        font-weight: bolder;
        color: #EC6316;
    }

    .service .service-detail p {
        padding: 15px 40px;
        text-align: center;
    }

    .service .service-info p {
        padding: 20px 80px;
        line-height: 30px;
        text-indent: 50px;
        font-size: 18px;
    }

    .service span {
        color: #EC6316;
        text-decoration: underline;
    }
</style>
