<template>
  <div class="global_map">
    <div class="content-wrapper">
      <h2 class="section-header text-center">Elastic Virtual Machine</h2>
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
        <h4>Cloud Linux Server</h4>
        <p>
          Flexible and secure cloud virtual machine for Linux OS based app and
          users. This types of VM will be shared resources for cost saving and
          performance optimization.
        </p>
      </div>
      <div class="products" id="compareProduct">
        <div class="row">
          <div
            class="col-6 col-sm-6 col-md-4 col-xl-4 mb-3"
            v-for="(product, i) in products"
            :key="i"
          >
            <div class="product-card shadow d-flex flex-column gap-3">
              <div class="name d-flex flex-column gap-2">
                <div class="d-flex align-items-center gap-3">
                  <img :src="product.img" alt="" />
                  <h6>{{ product.type }}</h6>
                </div>
                <h5>{{ product.name }}</h5>
              </div>
              <div class="os-list mb-3">
                <h5>Avaliable Os</h5>
                <div class="d-flex align-items-center gap-3 mt-5">
                  <img :src="require('@/assets/images/vm/os/1.png')" alt="" />
                  <img :src="require('@/assets/images/vm/os/2.png')" alt="" />
                  <img :src="require('@/assets/images/vm/os/3.png')" alt="" />
                  <img :src="require('@/assets/images/vm/os/4.png')" alt="" />
                </div>
              </div>
              <div class="price d-flex flex-column gap-0">
                <h5 class="mb-5">Start From</h5>
                <div class="d-flex align-items-center gap-2">
                  <h2>{{ product.price }}</h2>
                  <span>/Month</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <h2>{{ product.yearly }}</h2>
                  <span>/Year</span>
                </div>
              </div>
              <div class="info">
                <h5>{{ product.resource_name }}</h5>
                <p>{{ product.info }}​</p>
              </div>
              <button class="btn primary-btn">{{ product.btn_text }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    let route = useRoute();

    const products = [
      {
        img: require("@/assets/images/vm/evm_black.png"),
        name: " Linux Server",
        price: "$15",
        yearly: "$167",
        resource_name: "Resources",
        type: "Mini",
        info: "2 vCPU, 2 GB RAM, 50 GB NVMe SSD, 1 Gbps Virtual Network Virtual Firewall, 1 Elastic IP, 1 Snapshot, 50 GB Cloud Backup, Cloud Monitoring",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/evm_black.png"),
        name: " Linux Server",
        price: "$15",
        yearly: "$167",
        resource_name: "Resources",
        type: "Small",
        info: "2 vCPU, 2 GB RAM, 50 GB NVMe SSD, 1 Gbps Virtual Network Virtual Firewall, 1 Elastic IP, 1 Snapshot, 50 GB Cloud Backup, Cloud Monitoring",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/evm_black.png"),
        name: " Linux Server",
        price: "$15",
        yearly: "$167",
        resource_name: "Resources",
        type: "Medium",
        info: "2 vCPU, 2 GB RAM, 50 GB NVMe SSD, 1 Gbps Virtual Network Virtual Firewall, 1 Elastic IP, 1 Snapshot, 50 GB Cloud Backup, Cloud Monitoring",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/evm_black.png"),
        name: " Linux Server",
        price: "$15",
        yearly: "$167",
        resource_name: "Resources",
        type: "Large",
        info: "2 vCPU, 2 GB RAM, 50 GB NVMe SSD, 1 Gbps Virtual Network Virtual Firewall, 1 Elastic IP, 1 Snapshot, 50 GB Cloud Backup, Cloud Monitoring",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/evm_black.png"),
        name: " Linux Server",
        price: "$15",
        yearly: "$167",
        resource_name: "Resources",
        type: "xLarge",
        info: "2 vCPU, 2 GB RAM, 50 GB NVMe SSD, 1 Gbps Virtual Network Virtual Firewall, 1 Elastic IP, 1 Snapshot, 50 GB Cloud Backup, Cloud Monitoring",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/evm_black.png"),
        name: " Linux Server",
        price: "$15",
        yearly: "$167",
        resource_name: "Resources",
        type: "2xLarge",
        info: "2 vCPU, 2 GB RAM, 50 GB NVMe SSD, 1 Gbps Virtual Network Virtual Firewall, 1 Elastic IP, 1 Snapshot, 50 GB Cloud Backup, Cloud Monitoring",
        btn_text: "Deploy",
      },
    ];

    return { route, products };
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

.cloud-linux {
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
}

.product-card .name img {
  width: 35px;
}

.product-card .name h5 {
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}

.product-card .name h6 {
  letter-spacing: 4px;
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
}

.product-card .price h2 {
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: "Courier New", Courier, monospace;
}

.product-card .info {
  height: 130px;
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
  .product-card .name h5 {
    height: 65px;
  }
}

@media (max-width: 1375px) {
  .product-card .info {
    height: 145px;
  }
}

@media (max-width: 1100px) {
  .product-card .os-list img {
    width: 40px;
  }
}
@media (max-width: 600px) {
  .product-card .info {
    height: max-content;
  }
}
</style>
