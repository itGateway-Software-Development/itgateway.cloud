<template>
    <div class="global_map">
        <div class="content-wrapper d-flex justify-content-center">
            <img :src="require('@/assets/images/map.png')" alt="">
            <div class="pin myanmar"><span>Myanmar <br> Launched 2024 </span></div>
            <div class="pin singapore"><span>Singapore <br>Launched 2022 </span></div>
            <div class="pin netherland"><span>Netherland <br>Launched 2023 </span></div>
        </div>
        <div class="globalinfracture_info content-wrapper d-flex justify-content-center align-items-center flex-wrap gap-3 mt-1 mt-lg-4">
            <div class="info-card">
                <h4 class="fw-bold">3 Geographical Regions​</h4>
                <p>Each has at least 2 data center for high availability.​</p>
            </div>
            <div class="info-card">
                <h4 class="fw-bold">6+ Data Center</h4>
                <p>Connect each other using premium list of network bandwidth.​​</p>
            </div>
            <div class="info-card">
                <h4 class="fw-bold">20+ Cloud Services​​</h4>
                <p>Offers Compute, Storage, Network, Security, Database Services and more.​​</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
        }
    }
</script>

<style scoped>
    .global_map {
        width: 100%;
        margin-top: 100px;
    }

    .global_map .content-wrapper {
        position: relative;
    }

    .global_map .content-wrapper img {
        width: 90%;
    }

    .global_map .pin {
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background: #00796B;
        box-shadow: 0 0 0 2px #8fd5d6; 
        cursor: pointer;
    }

    .global_map .pin::before {
        content: '';
        background: #00796B;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border-radius: 100%;
        animation: pulse 1.3s ease-in-out infinite;
    }

    .global_map .pin span {
        white-space: nowrap;
        position: absolute;
        left: 15px;
        top: 90%;
        transform: translateY(-50%);
        background: #d3d1d1;
        border-radius: 10px;
        padding: 5px 10px;
        font-size: .9em;
        display: none
    }

    .global_map .pin:hover span {
        display: inline-block;
    }

    .global_map .myanmar {
        top: 54%;
        left: 66%;
    }

    .global_map .netherland {
        top: 37%;
        left: 49%;
    }

    .global_map .singapore {
        top: 62.7%;
        left: 66.7%;
    }

    #app > div > div > main > div > div > div.global_map > div.content-wrapper > svg > path.position-relative.myanmar:hover {
        fill: #EC6316;
    }

    #NL:hover {
        fill: #EC6316;
    }

    .info-card {
        border: 1px solid #EC6316;
        padding: 15px;
        border-radius: 7px;
        width: 300px;
    }

    @media (max-width: 1825px) {
        .global_map .myanmar {
            left: 66.5%;
        }

        .global_map .singapore {
            left: 67.7%;
        }
    }

    @media (max-width: 1650px) {
        .global_map .netherland {
            left: 48.7%;
        }

        .global_map .myanmar {
            left: 67.5%;
        }

        .global_map .singapore {
            left: 68.7%;
        }
    }

    @media (max-width: 1200px) {
        .global_map .netherland {
            left: 48.2%;
        }

        .global_map .myanmar {
            left: 68.5%;
        }

        .global_map .singapore {
            left: 69.7%;
        }
    }

    @media (max-width: 900px) {
        .global_map .netherland {
            left: 48.2%;
        }

        .global_map .myanmar {
            left: 71%;
        }

        .global_map .singapore {
            left: 72.7%;
        }
    }

    @media (max-width: 720px) {
        .global_map .pin {
            width: 7px;
            height: 7px;
            border: 1px solid #fff;
        }

        .global_map .netherland {
            left: 48.2%;
        }

        .global_map .myanmar {
            top: 53%;
            left: 72%;
        }

        .global_map .singapore {
            left: 73.7%;
        }
    }

    @media (max-width:720px) {
        .global_map .content-wrapper {
            padding: 0px !important;
        }

        #app > div > div > main > div > div > div.global_map > div:nth-child(1) > svg {
            height: 400px !important;
        }
    }

</style>
