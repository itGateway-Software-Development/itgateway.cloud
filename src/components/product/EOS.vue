<template>
  <div class="global_map">
    <div class="content-wrapper">
      <h2 class="section-header text-center">Elastic Object Storage</h2>
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
        <h4>S3 Compatible Object Store</h4>
        <p>
          Store and manage your data securely with our scalable,
          high-performance, and cost-effective cloud object storage solutions,
          compatible with the S3 API.
        </p>
      </div>
      <div class="products" id="compareProduct">
        <div class="d-flex flex-wrap gap-2 justify-content-center">
          <div
            class="card-group mb-5"
            v-for="(product, i) in eos_products"
            :key="i"
          >
            <div class="product-card shadow d-flex flex-column gap-3">
              <div class="name d-flex flex-column gap-2">
                <div
                  class="d-flex align-items-center gap-3 justify-content-center flex-column"
                >
                  <img
                    :src="require('@/assets/images/vm/eos_black.png')"
                    class="img-fluid"
                    alt=""
                    v-if="currentTheme == 'light'"
                  />
                  <img
                    :src="require('@/assets/images/vm/eos.png')"
                    class="img-fluid"
                    alt=""
                    v-if="currentTheme == 'dark'"
                  />
                  <h4></h4>
                </div>
              </div>
              <div class="price d-flex flex-column gap-0">
                <h5 class="mb-3">Start From</h5>
                <div class="d-flex align-items-center gap-2">
                  <h2 class="text-color">{{ product.price }}</h2>
                  <span>/Month</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <h2 class="text-color">{{ product.GB }}</h2>
                  <span>/ {{ product.type }}</span>
                </div>
              </div>

              <button class="btn primary-btn product-btn">
                {{ product.btn_text }}
              </button>
            </div>
          </div>
        </div>
        <div class="list-case">
          <div class="row">
            <div class="col-6 col-md-6 col-xl-4 mb-5">
              <div class="group-list">
                <h4 class="text-color">Core Features</h4>
                <div class="content-group">
                  <p>Hiht Performance</p>
                  <p>Super Fast IO</p>
                  <p>For Large Scale Workloads</p>
                  <p>Site Replication</p>
                  <p>Versioning</p>
                  <p>Identity & Access Management</p>
                  <p>Policy Based Access Control</p>
                  <p>Built-in Monitoring</p>
                  <p>Strong Encryption</p>
                  <p>Lifecycle Data Management</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-6 col-xl-4 mb-5">
              <div class="group-list left-text">
                <h4 class="text-color">Use Case</h4>
                <div class="content-group">
                  <p>Large Scale AI/ML</p>
                  <p>Data Archiving</p>
                  <p>Backup & Recovery</p>
                  <p>Big Data Analytics</p>
                  <p>Application Data</p>
                  <p>Software Development</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-xl-4 mb-5">
              <div class="integration">
                <h4 class="text-color text-center">Integrations with</h4>
                <div
                  class="img-group d-flex align-items-center justify-content-center gap-5 flex-wrap"
                >
                  <img
                    :src="require('@/assets/images/vm/vendor/1.png')"
                    alt=""
                  />
                  <img
                    :src="require('@/assets/images/vm/vendor/2.png')"
                    alt=""
                  />
                  <img
                    :src="require('@/assets/images/vm/vendor/3.png')"
                    alt=""
                  />
                  <img
                    :src="require('@/assets/images/vm/vendor/4.png')"
                    alt=""
                  />
                  <img
                    :src="require('@/assets/images/vm/vendor/5.png')"
                    alt=""
                  />
                  <img
                    :src="require('@/assets/images/vm/vendor/6.png')"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted, watch, computed } from "vue";
import store from "../../store";
export default {
  setup() {
    let route = useRoute();
    const currentTheme = computed(() => store.getters.theme);

    const eos_products = [
      {
        price: "$1.2",
        GB: "100",
        type: "GB",
        btn_text: "Deploy",
      },
      {
        price: "$3.5",
        GB: "300",
        type: "GB",
        btn_text: "Deploy",
      },
      {
        price: "$5.8",
        GB: "500",
        type: "GB",
        btn_text: "Deploy",
      },
      {
        price: "$11.4",
        GB: "1 ",
        type: "TB",

        btn_text: "Deploy",
      },
      {
        price: "$22.6",
        GB: "1",
        type: "TB",
        btn_text: "Deploy",
      },
      {
        price: "$56.2",
        GB: "5",
        type: "TB",
        btn_text: "Deploy",
      },
      {
        price: "$110",
        GB: "10",
        type: "TB",
        btn_text: "Deploy",
      },
    ];

    return { route, eos_products, currentTheme };
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

.list-case {
  margin: 50px auto;
}

.list-case .group-list {
  height: 100%;

  justify-content: center;
}

.group-list .content-group {
  margin: 0px auto;
}

.list-case .group-list ul {
  padding: 0px;
  align-items: center;
}

.list-case p {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px;
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
  width: 80px;
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

  .left-text {
    text-align: right;
  }
}
</style>
