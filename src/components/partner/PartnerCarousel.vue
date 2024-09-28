<template>
  <div class="carousel-wrapper">
    <!-- <img :src="require('@/assets/images/carousel/banner.png')" alt="" /> -->
    <div class="row carousel-bg-color align-items-center">
      <div class="col-12 col-md-8 col-xl-8 justify-content-center content-col">
        <div class="carousel-content">
          <h2 class="mb-5" data-aos="fade-down">Partner Program</h2>
          <p class="text-white">
            Our Partner Program fosters collaboration with leading software
            companies to develop and support cloud solutions from the backend,
            ensuring robust and reliable services for our clients.
          </p>
          <div class="d-flex align-items-center gap-3">
            <button
              class="btn partner-btn d-flex gap-2 align-items-center become-partner-btn"
              @click="
                changeRoute('https://console.itgatewaycloud.com/register')
              "
            >
              Become Partner
            </button>
            <button class="btn partner-btn d-flex gap-2 align-items-center">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-xl-4 justify-content-center img-col">
        <img
          :src="require('@/assets/images/partner/PartnerNetwork.png')"
          alt=""
          class="carousel-img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const currentSection = ref("product");
    const Route = useRoute();
    const changeRoute = (route) => {
      window.location.href = route;
    };

    return { currentSection, changeRoute };
  },
};
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  height: 500px;
  position: relative;
  margin-top: 85px;
}

.carousel-wrapper .carousel-bg-color {
  width: 100%;
  height: 100%;
  background: #c75b13;
  padding: 0px 100px;
}

.carousel-wrapper .carousel-content {
  width: 100%;
}

.carousel-wrapper img {
  width: 400px;
}

.carousel-content h2 {
  font-family: "Chakra Petch", sans-serif;
  font-size: 48px;
  letter-spacing: 0.007rem;
  color: #fff;
}

.carousel-content .special-text {
  color: #ec6316;
  font-weight: bold;
  font-size: 24px;
}

.carousel-content p {
  font-size: 24px;
  width: 70%;
}

.carousel-content button {
  font-weight: bold !important;
  margin-top: 40px !important;
  transition: 0.3s ease;
  background: #ffffff09 !important;
  border: 2px solid #161552d3 !important;
  color: #ededed !important;
  padding: 10px 15px;
}

.carousel-content button.become-partner-btn {
  border: 2px solid #161552d3 !important;
  background: linear-gradient(99deg, #161552d3 100%, #fff 10%) !important;
  color: #fff;
}

.carousel-link-mobile {
  display: none;
}

.carousel-link-mobile select {
  width: 75%;
}

.carousel-link-mobile button {
  height: 45px;
  margin-bottom: 10px;
}

.carousel-link {
  display: flex;
  box-shadow: 0px 0px 4px var(--footer-light-background-color) !important;
}

.carousel-link button,
.carousel-link-mobile button {
  border: 2px solid #ff9901 !important;
  background: linear-gradient(99deg, #fd9e0f 3%, #ff9901 90%) !important;
  border-radius: 0px 18px 0 18px;
}

.carousel-link a {
  padding: 10px 15px;
  position: relative;
}

.carousel-link a.active::before {
  content: "";
  position: absolute;
  width: 100%;
  bottom: -12px;
  left: 0;
  height: 3px;
  background: var(--sec-background-light-color);
}

.partner-btn {
  background: transparent;
  border: 2px solid #161552d3;
  color: var(--font-color);
  font-size: 15px;
  letter-spacing: 0.03rem;
  transition: 0.5s ease;
  font-weight: 550;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.partner-btn.fill {
  border: 2px solid #161552d3 !important;
  background: linear-gradient(99deg, #161552d3 3%, #161552d3 90%) !important;
  color: #ededed;
}

.partner-btn:hover {
  border: 2px solid #161552d3 !important;
  color: #ededed !important;
  transform: translateY(-5px);
}

.partner-btn::after {
  content: "";
  position: absolute;
  /* background: linear-gradient(to right,#161552d3, #853a0f); */
  background: linear-gradient(99deg, #161552d3 3%, #161552d3 90%);
  z-index: -1;
  padding: 0.25em 0.5em;
  display: block;
  transition: all 0.5s;
  left: -20%;
  right: -20%;
  top: 0;
  bottom: 0;
  transform: skewX(-45deg) scale(0, 1);
}

.partner-btn:hover::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.8s;
  transform: skewX(-45deg) scale(2, 1);
}

@media (max-width: 1510px) {
  .carousel-content h2 {
    font-size: 40px;
  }
  .carousel-content p {
    font-size: 20px;
  }

  .carousel-content .special-text {
    font-size: 22px;
  }
}

@media (max-width: 1200px) {
  .carousel-wrapper {
    height: 500px;
  }
  .carousel-content h2 {
    font-size: 35px;
  }
  .carousel-content p {
    font-size: 18px;
  }

  .carousel-content .special-text {
    font-size: 20px;
  }
}

@media (max-width: 1110px) {
  .carousel-wrapper img {
    width: 300px;
  }
}

@media (max-width: 925px) {
}

@media (max-width: 800px) {
  .carousel-wrapper {
    height: 450px;
  }
  .carousel-content h2 {
    font-size: 30px;
  }
  .carousel-content p {
    width: 100%;
    font-size: 16px;
  }

  .carousel-content .special-text {
    font-size: 17px;
  }

  .carousel-wrapper .content-col {
    width: 100%;
  }

  .carousel-wrapper .img-col {
    display: none;
  }
}

@media (max-width: 768px) {
  .carousel-wrapper {
    height: 400px;
    margin-top: 20px;
  }
  .carousel-content h2 {
    font-size: 25px;
  }

  .carousel-content p {
    font-size: 16px;
  }

  .carousel-link-mobile {
    padding: 0 5px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .carousel-link-mobile select {
    background-color: var(--sec-background-color);
    color: var(--font-color);
    padding: 10px 20px;
    margin-bottom: 10px;
  }

  .carousel-link {
    display: none;
  }
  .indicator .text-slide {
    font-size: 12px;
  }

  .progress-bar {
    height: 2px;
  }
}

@media (max-width: 600px) {
  .carousel-wrapper .carousel-content {
    width: 100%;
  }
  .carousel-wrapper .carousel-bg-color {
    padding: 0px 40px;
  }
  .carousel-content h2 {
    font-size: 20px;
  }
  .carousel-content p {
    font-size: 15px;
  }

  .carousel-content .special-text {
    font-size: 15px;
  }
  .carousel-content button {
    font-size: 11px !important;
    border: 1px solid #ededed !important;
  }

  .carousel-content .material-symbols-outlined {
    font-size: 14px;
  }
}

@media (max-width: 450px) {
  .carousel-wrapper .carousel-content {
    width: 100%;
  }

  .carousel-wrapper .carousel-bg-color {
    padding: 0px 40px;
  }

  .carousel-content h2 {
    font-size: 18px;
  }
  .carousel-content p {
    font-size: 13px;
  }

  .carousel-content .special-text {
    font-size: 14px;
  }
  .carousel-content button {
    margin-top: 10px !important;
  }
}
</style>
