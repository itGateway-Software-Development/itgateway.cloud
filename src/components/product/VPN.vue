<template>
  <div class="global_map">
    <div class="content-wrapper">
      <h2 class="section-header text-center">Managed Cloud VPN</h2>
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
        <h4>Cloud Based VPN Services</h4>
        <p>
          Cloud based VPN services provide VPN solutions such as Secure Remote
          Access, Site-to-Site Networking, Secure Internet Access and Secure IoT
          Communication.
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
              <!-- <div class="os-list">
                <h5>Avaliable Os</h5>
                <div class="d-flex align-items-center gap-3 mt-5">
                  <img :src="require('@/assets/images/vm/os/1.png')" alt="" />
                  <img :src="require('@/assets/images/vm/os/2.png')" alt="" />
                  <img :src="require('@/assets/images/vm/os/3.png')" alt="" />
                  <img :src="require('@/assets/images/vm/os/4.png')" alt="" />
                </div>
              </div> -->
              <div class="price d-flex flex-column gap-0">
                <h5 class="mb-3">Start From</h5>
                <div class="d-flex align-items-center gap-2">
                  <h2 class="text-color">{{ product.price }}</h2>
                  <span>/Month</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <h2 class="text-color">{{ product.yearly }}</h2>
                  <span>/Year</span>
                </div>
              </div>
              <div class="info">
                <h5>{{ product.resource_name }}</h5>
                <p class="mt-4">{{ product.info }}​</p>
                <p>{{ product.info2 }}</p>
                <p>{{ product.info3 }}</p>
                <p>{{ product.info4 }}</p>
                <p>{{ product.info5 }}</p>
                <p>{{ product.info6 }}</p>
              </div>
              <button class="btn primary-btn product-btn">
                {{ product.btn_text }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="cloud-window content-wrapper">
      <div class="heading-content">
        <h4>Cloud Windows Server</h4>
        <p>
          Dedicated VM for high performance Windows OS based app and users. This
          types of VM will be optimized performance with dedicated resources in
          the cloud.
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
                <div class="d-flex align-items-center gap-3">
                  <img :src="product.img" alt="" />
                  <h4>{{ product.type }}</h4>
                </div>
              </div>
              <div class="os-list mb-3">
                <h5>Avaliable Os</h5>
                <div class="d-flex align-items-center gap-3 mt-5">
                  <img :src="require('@/assets/images/vm/os/5.png')" alt="" />
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
                <p class="mt-4">{{ product.info }}​</p>
                <p>{{ product.info2 }}</p>
                <p>{{ product.info3 }}</p>
              </div>
              <button class="btn primary-btn product-btn">
                {{ product.btn_text }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
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
        img: require("@/assets/images/vm/vpn.png"),
        name: " Managed Cloud VPN",
        price: "$29",
        yearly: "$299",
        resource_name: "Resources",
        type: "mcv.mini",
        info: "2 vCPU, 2 GB RAM,",
        info2: "30 GB NVMe SSD",
        info3: "1 Gbps Virtual Network",
        info4: "1 Elastic IP",
        info5: "Cloud Monitoring, 1TB Traffic Out/Month",
        info6: "24x7x365 Supports, Up to 20 Users",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/vpn.png"),
        name: " Managed Cloud VPN",
        price: "$59",
        yearly: "$590",
        resource_name: "Resources",
        type: "mcv.small",
        info: "2 vCPU, 4 GB RAM,",
        info2: "50 GB NVMe SSD",
        info3: "1 Gbps Virtual Network",
        info4: "1 Elastic IP",
        info5: "Cloud Monitoring, 3TB Traffic Out/Month",
        info6: "24x7x365 Supports, Up to 50 Users",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/vpn.png"),
        name: " Managed Cloud VPN",
        price: "$120",
        yearly: "$1,200",
        resource_name: "Resources",
        type: "mcv.medium",
        info: "4 vCPU, 8 GB RAM,",
        info2: "50 GB NVMe SSD",
        info3: "1 Gbps Virtual Network",
        info4: "1 Elastic IP",
        info5: "Cloud Monitoring , 5TB Traffic Out/Month",
        info6: "24x7x365 Supports, Up to 100 Users",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/vpn.png"),
        name: " Managed Cloud VPN",
        price: "$169",
        yearly: "$1,690",
        resource_name: "Resources",
        type: "mcv.large",
        info: "4 vCPU, 16 GB RAM,",
        info2: "100 GB NVMe SSD",
        info3: "5 Gbps Virtual Network",
        info4: "1 Elastic IP",
        info5: "Cloud Monitoring, 10TB Traffic Out/Month",
        info6: "24x7x365 Supports, Up to 200 Users",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/vpn.png"),
        name: " Managed Cloud VPN",
        price: "$329",
        yearly: "$3,290",
        resource_name: "Resources",
        type: "mcv.xlarge",
        info: "8 vCPU, 32 GB RAM,",
        info2: "100 GB NVMe SSD",
        info3: "5 Gbps Virtual Network",
        info4: "1 Elastic IP",
        info5: "Cloud Monitoring, 20TB Traffic Out/Month",
        info6: "24x7x365 Supports, Up to 500 Users",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/vpn.png"),
        name: " Managed Cloud VPN",
        price: "$629",
        yearly: "$6,290",
        resource_name: "Resources",
        type: "mcv.2xlarge",
        info: "16 vCPU, 64 GB RAM,",
        info2: "200 GB NVMe SSD",
        info3: "10 Gbps Virtual Network",
        info4: "1 Elastic IP",
        info5: "Cloud Monitoring, 50TB Traffic Out/Month",
        info6: "24x7x365 Supports, Up to 1000 Users",
        btn_text: "Deploy",
      },
    ];

    const window_products = [
      {
        img: require("@/assets/images/vm/evmw_black.png"),
        name: " Window Server",
        price: "$59",
        yearly: "$649",
        resource_name: "Resources",
        type: "cw.Small",
        info: "2 vCPU, 4 GB RAM ",
        info2: "100 GB NVMe SSD",
        info3: "1 Gbps Virtual Network Virtual Firewall",
        info4: " 1 Elastic IP, 1 Snapshot",
        info5: "100 GB Cloud Backup, Cloud Monitoring",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/evmw_black.png"),
        name: " Window Server",
        price: "$120",
        yearly: "$1,320",
        resource_name: "Resources",
        type: "cw.Medium",
        info: "4 vCPU, 8 GB RAM, 200 GB NVMe SSD, 1 Elastic IP,",
        info2: "1 Gbps Virtual Network Virtual Firewall, 1 Elastic IP,",
        info3: "  1 Snapshot, 200 GB Cloud Backup, Cloud Monitoring.",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/evmw_black.png"),
        name: " Window Server",
        price: "$149",
        yearly: "$1,599",
        resource_name: "Resources",
        type: "cw.Large",
        info: "4 vCPU, 16 GB RAM, 200 GB NVMe SSD, ",
        info2: "1 Gbps Virtual Network Virtual Firewall, 1 Elastic IP,",
        info3: " 2 Snapshot, 200 GB Cloud Backup, Cloud Monitoring.",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/evmw_black.png"),
        name: " Window Server",
        price: "$299",
        yearly: "$3,280",
        resource_name: "Resources",
        type: "cw.xLarge",
        info: "8 vCPU, 32 GB RAM, 300 GB NVMe SSD,",
        info2: "5 Gbps Virtual Network Virtual Firewall, 1 Elastic IP,",
        info3: " 2 Snapshot, 300 GB Cloud Backup, Cloud Monitoring",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/evmw_black.png"),
        name: " Window Server",
        price: "$549",
        yearly: "$5,999",
        resource_name: "Resources",
        type: "cw.2xLarge",
        info: "16 vCPU, 64 GB RAM, 500 GB NVMe SSD,  ",
        info2: "10 Gbps Virtual Network Virtual Firewall, 1 Elastic IP,",
        info3: " 2 Snapshot, 500 GB Cloud Backup, Cloud Monitoring.",
        btn_text: "Deploy",
      },
      {
        img: require("@/assets/images/vm/evmw_black.png"),
        name: " Window Server",
        price: "$990",
        yearly: "$9,990",
        resource_name: "Resources",
        type: "cw.4xLarge",
        info: "32 vCPU, 128 GB RAM, 1 TB NVMe SSD,  ",
        info2: "10 Gbps Virtual Network Virtual Firewall, 1 Elastic IP,",
        info3: " 2 Snapshot, 1 TB Cloud Backup, Cloud Monitoring",
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

.text-color {
  color: #ec6316 !important;
  font-weight: bold;
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

.product-card .os-list img {
  width: 40px;
}

.product-btn {
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

.product-card .name h4 {
  letter-spacing: 4px;
  font-weight: bold;
  font-size: 28px;
  font-family: "Courier New", Courier, monospace;
}

.product-card .price h2 {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0px;
  font-family: "Courier New", Courier, monospace;
}

.product-card .info {
}

.product-card .info p {
  margin: 3px 0px;
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

@media (max-width: 1375px) {
  .product-card .name h4 {
    font-size: 25px;
  }
}

@media (max-width: 1100px) {
  .product-card .os-list img {
    width: 40px;
  }
  .product-card .name h4 {
    font-size: 20px;
  }
}

@media (max-width: 860px) {
  .product-card .name h4 {
    font-size: 20px;
  }
}

@media (max-width: 760px) {
  .product-card .name h4 {
    font-size: 28px;
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
    height: 30px;
    font-size: 20px;
    margin-top: 10px;
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
    font-size: 14px;
  }

  .text-color {
    margin-bottom: 20px;
  }
}
</style>
