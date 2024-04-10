<template>
    <div class="content-wrapper products">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-xl-3 mb-3" v-for="(product, i) in products" :key="i">
                <div class="product-card shadow d-flex flex-column gap-3" >
                    <div class="name d-flex flex-column gap-2">
                        <div class="d-flex align-items-center gap-3">
                            <img :src="product.img" alt="">
                            <h6>Elastic</h6>
                        </div>
                        <h5>{{product.name}}</h5>
                    </div>
                    <div class="price d-flex flex-column gap-0">
                        <p class="mb-1">Start From</p>
                        <div class="d-flex align-items-center gap-2">
                            <h2>{{product.price}}</h2> 
                            <span>/Month</span>
                        </div>
                    </div>
                    <div class="info">
                        <h5>{{product.resource_name}}</h5>
                        <p>{{product.info}}​</p>
                    </div>
                    <button class="btn primary-btn">{{product.btn_text}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const products = [
                {
                    img: require('@/assets/images/products/vm.png'),
                    name: "Virtual Machine",
                    price: "$20",
                    resource_name: "Shared Resources",
                    info : "2 x Intel vCPU, 4GB RAM,  100GB NVMe,  1Gbps Network Bandwidth, 1 x Public IPv4 Address",
                    btn_text: "View All Cloud EVM"
                },
                {
                    img: require('@/assets/images/products/dm.png'),
                    name: "Dedicate Machine​",
                    price: "$46",
                    resource_name: "Allocated Resources​",
                    info : "2 x Intel vCPU, 4GB RAM,  100GB NVMe,  1Gbps Network Bandwidth, 1 x Public IPv4 Address​",
                    btn_text: "View All Cloud EDM​"
                },
                {
                    img: require('@/assets/images/products/bm.png'),
                    name: "Bare-Metal Server​",
                    price: "$135",
                    resource_name: "Physical Machines​",
                    info : "Configure and customize a bare-metal cloud server to meet your business requirements with full control & management.​",
                    btn_text: "View All Bare-Metal​"
                },
                {
                    img: require('@/assets/images/products/db.png'),
                    name: "Database Instance​",
                    price: "$46",
                    resource_name: "Allocated Instances​",
                    info : "2 x Intel vCPU, 4GB RAM,  100GB NVMe,  1Gbps Network Bandwidth, 1 x Public IPv4 Address​",
                    btn_text: "View All Cloud EDI​"
                },
            ];


            return {products}
        }
    }
</script>

<style scoped>
    .products {
        margin-top: 90px;
    }
    .product-card {
        padding: 15px 20px;
        border: 2px solid var(--main-color);
        border-radius: 10px;
        background: var(--card-background-color);
    }

    .product-card .name img {
        width: 35px;
    }

    .product-card .name h5 {
        font-family: 'Courier New', Courier, monospace;
        font-size: 24px;
        font-weight: bold;
        margin-top: 10px;
    }

    .product-card .name h6 {
        letter-spacing: 4px;
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
    }

    .product-card .price h2 {
        font-size: 40px;
        font-weight: bold;
        letter-spacing: 2px;
        font-family: 'Courier New', Courier, monospace;
    }

    .product-card .info {
        height: 130px;
    }

    .product-card .info h5 {
        text-decoration: underline;
        text-underline-offset: 4px;
        margin-bottom: 10px;
        font-size: 18px;
    }

    .product-card button {
        border-color: #EC6316 !important;
    }

    @media (max-width: 1675px) {
        .product-card .name h5 {
            height: 65px;
        }
    }

    @media (max-width: 1375px) {
        .product-card .info {
            height: 145px;
        }
    }
</style>
