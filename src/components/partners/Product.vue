<template>
    <div class="product-partner">
        <div class="row px-2 px-lg-0">
            <div class="col-12 col-lg-4 convergent">
                <div class="d-flex justify-content-center mb-5">
                    <img :src="require('@/assets/images/partners/convergent.png')" alt="">
                </div>
                <p class="text-justify">
                    Convergent Myanmar is a leading IT distributor for NAS and Online UPS such as Synology NAS, APC Online UPS and other accessories. We are collaborating for the storage and power backup solutions to provide the IT services & solutions from home user to Datacenter.
                </p>
                <a href="" class="d-inline-flex align-items-center gap-2 text-white">View Website <span class="material-symbols-outlined mt-2">arrow_right_alt</span></a>
            </div>
            <div class="col-12 col-lg-8 group py-3">
                <div class="row">
                    <div class="col-12 col-md-6 mb-3 mb-lg-0">
                        <div class="group-item">
                            <div class="d-flex justify-content-center w-100 mb-5">
                                <img :src="require('@/assets/images/partners/pacific.png')" alt="">
                            </div>
                            <p class="text-justify">
                                Pacific Tech is providing Network and Security Solutions with Fortinet, Kemp and other products. We are building together to become the most secure IT infrastructure for the customers.​
                            </p>
                            <a href="" class="d-inline-flex align-items-center gap-2">View Website 
                                <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-3 mb-lg-0">
                        <div class="group-item">
                            <div class="d-flex justify-content-center w-100 gd mb-5 ">
                                <img :src="require('@/assets/images/partners/gd.png')" alt="">
                            </div>
                            <p class="text-justify">
                                GD Guardian is a leading distributor for Security devices and networking such as HIK VISION and Ruijie products. They are always takecare of the customer requirements and response quickly. ​
                            </p>
                            <a href="" class="d-inline-flex align-items-center gap-2">View Website 
                                <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row sec-row">
                    <div class="col-12 col-md-6 mb-3 mb-lg-0">
                        <div class="group-item">
                            <div class="d-flex justify-content-center w-100 vst mb-5">
                                <img :src="require('@/assets/images/partners/vst.png')" alt="">
                            </div>
                            <p class="text-justify">
                                The largest vendor in Myanmar providing many IT products and license including Cisco, DellEMC, Microsoft, Fortinet, HPE, Veritas, F5 and other. ​
                            </p>
                            <a href="" class="d-inline-flex align-items-center gap-2">View Website 
                                <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-3 mb-lg-0">
                        <div class="group-item">
                            <div class="d-flex justify-content-center sln w-100 mb-5">
                                <img :src="require('@/assets/images/partners/sln.png')" alt="">
                            </div>
                            <p class="text-justify">
                                Shwe Lamin Ngar is also a largest distributor for many IT products and license for Desktop/Laptop, Network Devices, Wireless Devices and other accessories.​
                            </p>
                            <a href="" class="d-inline-flex align-items-center gap-2">View Website 
                                <span class="material-symbols-outlined mt-1">arrow_right_alt</span>
                            </a>
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

<style>
    .product-partner .convergent {
        padding: 30px;
        background: linear-gradient(to bottom, #EC6316, #A22E76);
        color: #ededed;
    }

    .convergent p {
        margin-top: 30px;
    }

    .product-partner .row a {
        position: relative;
        color: #ededed;
    }

    .product-partner .row a::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #ededed;
        transition: .3s ease;
    }

    .product-partner .row a:hover::before {
        background: #EC6316;
        height: 3px;
    }

    .product-partner .group {
        background: var(--sec-background-color);
    }
    

    .product-partner .group .group-item {
        padding-bottom: 20px;
        background: var(--background-color);
        padding: 10px;
        height: 100%;
    }

    .product-partner .group-item p, .group-item a{
        color: var(--font-color) !important;
    }

    .product-partner .group .group-item img {
        width: 50%;
        margin-top: 20px;
    }

    .product-partner .group .group-item .gd img {
        width: 20%;
    }

    .product-partner .group .group-item .sln img {
        width: 18%;
    }

    .product-partner .group .group-item .vst img {
        width: 20%;
    }

    .product-partner .group .sec-row {
        margin-top: 20px;
    }
</style>
