<template>
  <div class="global_map">
    <div class="content-wrapper">
      <h2 class="section-header text-center">Elastic Bare-Metal Server</h2>
    </div>
    <div
      class="globalinfracture_info content-wrapper d-flex justify-content-center align-items-center flex-wrap gap-3 mt-1 mt-lg-4 mb-3"
    >
      <div class="info-card shadow">
        <h4 class="fw-bold">4 Geographical Regions​</h4>
        <p>Each has at least 2 data center for high availability.​</p>
      </div>
      <div class="info-card shadow">
        <h4 class="fw-bold">6+ Data Center</h4>
        <p>Connect each other using premium list of network bandwidth.​​</p>
      </div>
      <div class="info-card shadow">
        <h4 class="fw-bold">20+ Cloud Services​​</h4>
        <p>
          Offers Compute, Storage, Network, Security, Database Services and
          more.​​
        </p>
      </div>
    </div>
    <div class="content-wrapper d-flex justify-content-center">
      <img :src="require('@/assets/images/world_map.png')" class="map" alt="" />
      <!-- <div class="pin myanmar">
        <span
          >Myanmar <br />
          Launched 2024 <br />
          1 x Availability Zones</span
        >
      </div>
      <div class="pin thailand">
        <span
          >Thailand <br />
          Launched 2024 <br />
          1 x Availability Zones</span
        >
      </div>
      <div class="pin singapore">
        <span
          >Singapore <br />Launched 2022 <br />
          2 x Availability Zones
        </span>
      </div>
      <div class="pin netherland">
        <span
          >Netherland <br />Launched 2023 <br />
          2 x Availability Zones
        </span>
      </div> -->
    </div>

    <div class="cloud-linux content-wrapper">
      <div class="heading-content">
        <h4>Single Processor Server</h4>
        <p>
          Dedicated physical server with single processor that can build your
          customized cloud infrastructure. You can deploy and manage physical
          server infrastructure within an hour.
        </p>
      </div>
      <div class="products" id="compareProduct">
        <div class="row">
          <div
            class="col-6 col-sm-6 col-md-4 col-xl-4 mb-5"
            v-for="(product, i) in linux_products"
            :key="i"
          >
            <div class="product-card shadow d-flex flex-column gap-3">
              <div class="name d-flex flex-column gap-2">
                <div class="d-flex align-items-center gap-3 type flex-column">
                  <img :src="product.img" alt="" />
                  <h4>{{ product.type }}</h4>
                </div>
              </div>
              <div class="price d-flex flex-column gap-0">
                <h5 class="">Start From</h5>
                <div class="d-flex align-items-center gap-2">
                  <h2 class="color-text">{{ product.price }}</h2>
                  <span>/Month</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <h2 class="color-text">{{ product.yearly }}</h2>
                  <span>/Year</span>
                </div>
              </div>
              <div class="info">
                <h5>{{ product.resource_name }}</h5>

                <p class="text-bold">{{ product.cpu_name }}​</p>
                <p>
                  <span>{{ product.cpu_info }}</span>
                </p>
                <div class="d-flex align-items-center gap-2">
                  <img :src="product.cpu" alt="" />
                  <p>
                    <span class="text-bold">{{ product.core_code }}</span>
                  </p>
                </div>
                <p>{{ product.memory }}</p>
                <p>{{ product.storage }}</p>
                <p>{{ product.backup }}</p>
                <p>{{ product.network }}</p>
                <p>
                  <span>{{ product.network_usable }}</span>
                </p>
              </div>
              <button class="btn primary-btn product-btn">
                {{ product.btn_text }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cloud-window content-wrapper">
      <div class="heading-content">
        <h4>Dual Processor Server</h4>
        <p>
          Dedicated physical server with dual processor that can build your
          customized cloud infrastructure. You can deploy and manage physical
          server infrastructure within an hour.
        </p>
      </div>
      <div class="products" id="compareProduct">
        <div class="row justify-content-center">
          <div
            class="col-6 col-sm-6 col-md-4 col-xl-4 mb-5"
            v-for="(product, i) in window_products"
            :key="i"
          >
            <div class="product-card shadow d-flex flex-column gap-3">
              <div class="name d-flex flex-column gap-2">
                <div class="d-flex align-items-center gap-3 flex-column">
                  <img :src="product.img" alt="" />
                  <h4>{{ product.type }}</h4>
                </div>
              </div>

              <div class="price d-flex flex-column gap-0">
                <h5 class="mb-2">Start From</h5>
                <div class="d-flex align-items-center gap-2">
                  <h2 class="color-text">{{ product.price }}</h2>
                  <span>/Month</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <h2 class="color-text">{{ product.yearly }}</h2>
                  <span>/Year</span>
                </div>
              </div>
              <div class="info">
                <h5>{{ product.resource_name }}</h5>

                <p class="mt-1 text-bold">{{ product.cpu_name }}​</p>
                <p class="d-flex align-items-center gap-3">
                  <span>{{ product.cpu_info }}</span>
                  <img :src="product.cpu" alt="" />

                  <span class="text-bold">{{ product.core_code }}</span>
                </p>

                <p>{{ product.memory }}</p>
                <p>{{ product.storage }}</p>
                <p>{{ product.backup }}</p>
                <p>{{ product.network }}</p>
                <p>
                  <span>{{ product.network_usable }}</span>
                </p>
              </div>
              <button class="btn primary-btn product-btn">
                {{ product.btn_text }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  setup() {
    let route = useRoute();
    const currentTheme = ref("light");

    const linux_products = [
      {
        img: require("@/assets/images/vm/server.png"),
        cpu: require("@/assets/images/vm/cpu/intel.png"),
        cpu_info: "6c/12T x 3.2GHz",
        cpu_name: "Intel Xeon E-2356G",
        core_code: "SGX",
        price: "$240",
        yearly: "$2,640",
        resource_name: "Resources",
        memory: "64 GB DDR4 RAM",
        storage: "1 x 1TB NVMe SSD",
        network: "2 x 10 Gbps/29 IPv4 Block",
        backup: "1TB Cloud Backup",
        network_usable: "5 Usable",
        type: "c1m1.ebms.small",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/server.png"),
        cpu: require("@/assets/images/vm/cpu/intel.png"),
        cpu_info: "8c/16T x 3.2GHz",
        cpu_name: "Intel Xeon E-2388G",
        core_code: "SGX",
        price: "$296",
        yearly: "$3,245",
        resource_name: "Resources",
        memory: "64 GB DDR4 RAM",
        storage: "1 x 1TB NVMe SSD",
        network: "2 x 10 Gbps/29 IPv4 Block",
        backup: "1 TB Cloud Backup",
        network_usable: "5 Usable",
        type: "c1m1.ebms.medium",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/server.png"),
        cpu: require("@/assets/images/vm/cpu/intel.png"),
        cpu_info: "6c/12T x 3.2GHz",
        cpu_name: "Intel Xeon E-2356G",
        core_code: "SGX",
        price: "$355",
        yearly: "$3,905",
        resource_name: "Resources",
        memory: "128 GB DDR4 RAM",
        storage: "2 x 1TB NVMe SSD",
        network: "2 x 10Gbps/28 IPv4 Block",
        backup: "1 TB Cloud Backup",
        network_usable: "13 Usable",
        type: "c1m2.ebms.small",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/server.png"),
        cpu: require("@/assets/images/vm/cpu/intel.png"),
        cpu_info: "8c/16T x 3.2GHz",
        cpu_name: "Intel Xeon E-2388G",
        core_code: "SGX",
        price: "$399",
        yearly: "$4,389",
        resource_name: "Resources",
        memory: "128 GB DDR4 RAM",
        storage: "2 x 1TB NVMe SSD",
        network: "2 x 10Gbps/28 IPv4 Block",
        backup: "1 TB Cloud Backup",
        network_usable: "13 Usable",
        type: "c1m2.ebms.medium",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/server.png"),
        cpu: require("@/assets/images/vm/cpu/intel.png"),
        cpu_info: "6c/12T x 3.2GHz",
        cpu_name: "Intel Xeon E-2288G",
        core_code: "SGX",
        price: "$417",
        yearly: "$4,587",
        resource_name: "Resources",
        memory: "128 GB DDR4 RAM",
        storage: "2 x 1TB NVMe SSD",
        network: "2 x 10Gbps/28 IPv4 Block",
        backup: "1 TB Cloud Backup",
        network_usable: "13 Usable",
        type: "c1m2.ebms.large",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/server.png"),
        cpu: require("@/assets/images/vm/cpu/ryzen.png"),
        cpu_info: "12c/24T x 3.7GHz",
        cpu_name: "AMD Ryzen 9 7900",
        core_code: "",
        price: "$629",
        yearly: "$6,290",
        resource_name: "Resources",
        memory: "128 GB DDR4 RAM",
        storage: "2 x 1TB NVMe SSD",
        network: "2 x 10Gbps/29 IPv4 Block",
        backup: "1 TB Cloud Backup",
        network_usable: "5 Usable",
        type: "ryzen.ebms.large",
        btn_text: "Deploy",
      },
    ];

    const window_products = [
      {
        img: require("@/assets/images/vm/server.png"),
        cpu: require("@/assets/images/vm/cpu/intel.png"),
        cpu_info: "20c/40T x 2.4GHz",
        cpu_name: "2 x Xeon Silver 4210R",
        core_code: "",
        price: "$549",
        yearly: "$6,039",
        resource_name: "Resources",
        memory: "128 GB DDR4 RAM",
        storage: "2 x 1TB NVMe SSD",
        network: "2 x 25Gbps/28 IPv4 Block",
        backup: "1 TB Cloud Backup",
        network_usable: "13 Usable",
        type: "c2m2.ebms.small",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/server.png"),
        cpu: require("@/assets/images/vm/cpu/intel.png"),
        cpu_info: "40c/80T x 2.1GHz",
        cpu_name: "2 x Xeon Gold 5218R",
        core_code: "",
        price: "$699",
        yearly: "$7,689",
        resource_name: "Resources",
        memory: "128 GB DDR4 RAM",
        storage: "2 x 1TB NVMe SSD",
        network: "2 x 25Gbps/28 IPv4 Block",
        backup: "1 TB Cloud Backup",
        network_usable: "13 Usable",
        type: "c2m2.ebms.medium",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/server.png"),
        cpu: require("@/assets/images/vm/cpu/intel.png"),
        cpu_info: "20c/40T x 2.4GHz",
        cpu_name: "2 x Xeon Silver 4210R",
        core_code: "",
        price: "$849",
        yearly: "$9,339",
        resource_name: "Resources",
        memory: "256 GB DDR4 RAM",
        storage: "2 x 2TB NVMe SSD",
        network: "2 x 25Gbps/28 IPv4 Block",
        backup: "1 TB Cloud Backup",
        network_usable: "13 Usable",
        type: "c2m4.ebms.small",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/server.png"),
        cpu: require("@/assets/images/vm/cpu/intel.png"),
        cpu_info: "40c/80T x 2.1GHz",
        cpu_name: "2 x Xeon Gold 5218R",
        core_code: "",
        price: "$",
        yearly: "$10,439",
        resource_name: "Resources",
        memory: "256 GB DDR4 RAM",
        storage: "2 x 2TB NVMe SSD",
        network: "2 x 25Gbps/28 IPv4 Block",
        backup: "1 TB Cloud Backup",
        network_usable: "13 Usable",
        type: "c2m4.ebms.medium",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/server.png"),
        cpu: require("@/assets/images/vm/cpu/intel.png"),
        cpu_info: "48c/96T x 2.1GHz",
        cpu_name: "2 x Xeon Gold 5418Y",
        core_code: "SGX",
        price: "$1,499",
        yearly: "$16,489",
        resource_name: "Resources",
        memory: "512 GB DDR4 RAM",
        storage: "2 x 4TB NVMe SSD",
        network: "2 x 25Gbps/27 IPv4 Block",
        backup: "2 TB Cloud Backup",
        network_usable: "29 Usable",
        type: "c2m8.ebms.medium",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/server.png"),
        cpu: require("@/assets/images/vm/cpu/intel.png"),
        cpu_info: "64c/128T x 1.9GHz",
        cpu_name: "2 x Xeon Gold 6430",
        core_code: "SGX",
        price: "$1,649",
        yearly: "$18,139",
        resource_name: "Resources",
        memory: "512 GB DDR4 RAM",
        storage: "2 x 4TB NVMe SSD",
        network: "2 x 25Gbps/27 IPv4 Block",
        backup: "2 TB Cloud Backup",
        network_usable: "29 Usable",
        type: "c2m8.ebms.large",
        btn_text: "Deploy",
      },
    ];

    onMounted(() => {
      console.log(currentTheme);
    });

    return { route, linux_products, window_products, currentTheme };
  },
};
</script>

<style scoped>
.global_map {
  width: 100%;
  margin-top: 100px;
}

.global_map .content-wrapper {
  position: relative;
}

.global_map .content-wrapper .map {
  width: 90%;
}

.global_map .pin {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: #00796b;
  box-shadow: 0 0 0 2px #8fd5d6;
  cursor: pointer;
}

.global_map .pin::before {
  content: "";
  background: #00796b;
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
  font-size: 0.9em;
  display: none;
}

.global_map .pin:hover span {
  display: inline-block;
}

.global_map .myanmar {
  top: 54%;
  left: 66%;
}

.global_map .thailand {
  top: 56%;
  left: 67.2%;
}

.global_map .myanmar span,
.global_map .singapore span,
.global_map .netherland span {
  color: #333;
}

.global_map .netherland {
  top: 37%;
  left: 49%;
}

.global_map .singapore {
  top: 62.7%;
  left: 66.7%;
}

#app
  > div
  > div
  > main
  > div
  > div
  > div.global_map
  > div.content-wrapper
  > svg
  > path.position-relative.myanmar:hover {
  fill: #ec6316;
}

#NL:hover {
  fill: #ec6316;
}

.info-card {
  border: 1px solid #ec6316;
  padding: 15px;
  border-radius: 7px;
  width: 300px;
}

.global_map .explore-more-about-infra {
  font-size: 17px;
  font-weight: bold;
  color: #ec6316 !important;
  transition: 0.5s ease;
}

.global_map .explore-more-about-infra:hover {
  transform: translateY(-10px);
}

.heading-content h4 {
  font-family: "Chakra Petch", sans-serif;
  font-size: 32px;
  color: #ec6316;
}

.heading-content p {
  font-size: 25px !important;
  opacity: 0.9;
}

.cloud-linux,
.cloud-window {
  margin-top: 90px;
}

.products {
  margin-top: 20px;
}
.product-card {
  padding: 15px 20px;
  border: 2px solid var(--main-color);
  border-radius: 10px;
  background: var(--card-background-color);
  height: 100%;
}

.product-card .info img {
  width: 40px;
}

.product-card .info span {
  color: #0070cc;
}

.product-card .info .text-bold {
  font-weight: bold;
}

.product-btn {
}

.product-card .name img {
  width: 60px;
}

.product-card .name h5 {
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}

.product-card .name h4 {
  letter-spacing: 4px;
  font-weight: bold;
  font-size: 24px;
  font-family: "Courier New", Courier, monospace;
}

.product-card .price h2 {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0px;
  font-family: "Courier New", Courier, monospace;
}

.color-text {
  color: #ec6316;
  font-weight: bold;
}

.product-card .info {
}

.product-card .info p {
  margin: 0px;
}

.product-card .info h5,
.product-card .price h5 {
  text-decoration: underline;
  text-underline-offset: 4px;
  margin-bottom: 10px;
  font-size: 18px;
}

.product-card button {
  border-color: #ec6316 !important;
}

.product-card .os-list h5 {
  text-decoration: underline;
  text-underline-offset: 4px;
  font-size: 18px;
}

@media (max-width: 1675px) {
}

@media (max-width: 1450px) {
  .product-card .name h4 {
    font-size: 25px;
  }
}

@media (max-width: 1250px) {
  .product-card .name h4 {
    font-size: 20px;
  }
}

@media (max-width: 950px) {
  .product-card .os-list img {
    width: 40px;
  }
  .product-card .name h4 {
    font-size: 16px;
  }
}

@media (max-width: 860px) {
  .product-card .name h4 {
    font-size: 16px;
  }
}

@media (max-width: 760px) {
  .product-card .name h4 {
    font-size: 18px;
  }
}

@media (max-width: 600px) {
  .product-card .price h2 {
    font-size: 30px;
  }

  .product-card .type {
    flex-direction: column;
  }

  .product-card .name h5 {
    height: 30px;
    font-size: 20px;
  }
  .product-card .name h4 {
    font-size: 20px;
    margin-top: 10px;
    word-break: break-word;
  }
  .heading-content p {
    font-size: 17px !important;
  }
}

@media (max-width: 490px) {
  .product-card .price h2 {
    font-size: 20px;
  }

  .product-card .name h4 {
    font-size: 20px;
  }

  .product-card .info {
    height: 300px;
  }
}

@media (max-width: 380px) {
  .product-card .info {
    height: 400px;
  }
}
</style>
