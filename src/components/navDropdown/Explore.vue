<template>
  <div class="dropdown">
    <div class="content d-flex gap-5">
      <div class="row dropdown-content-row w-100">
        <div class="col-12 mb-5">Explore itGateway</div>
        <div class="col-12 col-sm-5" style="margin-bottom: 40px">
          <router-link
            to="/explore/partner-network"
            class="menu-route"
            :class="{ active: route.path == '/explore/partner-netwrok' }"
          >
            <h5>Partner Network​</h5>
            <span
              >Become a partner with itGateway Cloud to transform digital
              business​</span
            >
          </router-link>
        </div>
        <div class="col-12 col-sm-7" style="margin-bottom: 40px">
          <router-link
            to="/explore/global-infrastructure"
            class="menu-route"
            :class="{ active: route.path == '/explore/global-infrastructure' }"
          >
            <h5>Global Infrastructure​</h5>
            <span
              >View our Cloud Infrastructure and regions to build the trusted
              resources​</span
            >
          </router-link>
        </div>
        <div class="col-12 col-sm-5" style="margin-bottom: 40px">
          <router-link
            to="/explore/manage-cloud-services"
            class="menu-route"
            :class="{ active: route.path == '/explore/manage-cloud-services' }"
          >
            <h5>Managed Cloud Services​</h5>
            <div class="d-flex gap-3">
              <div class="d-flex align-items-center gap-1">
                <router-link to="#">Standard Supports</router-link>
                <span class="mdi mdi-chevron-double-right"></span>
              </div>
              <div class="d-flex align-items-center gap-1">
                <router-link to="#">Professional Supports</router-link>
                <span class="mdi mdi-chevron-double-right"></span>
              </div>
              <router-link to="#">Premium Supports</router-link>
            </div>
          </router-link>
        </div>
        <div class="col-12 col-sm-7" style="margin-bottom: 40px">
          <h5>Reports & Insights​</h5>
          <router-link to="#"
            >Explore Business Reports and read the executive
            insight​</router-link
          >
        </div>
        <div class="col-12 col-sm-5" style="margin-bottom: 40px">
          <router-link to="/explore/customer-success-story" class="menu-route">
            <h5>Customer Success Story​</h5>
            <span>Discover the cloud solutions utilized by our customers​</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    return { route };
  },
};
</script>

<style>
.dropdown h5 {
  font-weight: bold;
  font-size: 18px;
}

.menu-route.active h5,
.menu-route.active span,
.menu-route.active div a {
  color: #ec6316 !important;
}

.dropdown .dropdown-content-row a {
  color: var(--font-mute-dark) !important;
}

.dropdown .menu-route h5,
.dropdown .menu-route span {
  transition: 0.3s ease;
}

.dropdown .menu-route:hover h5,
.dropdown .menu-route:hover span {
  color: #ec6316;
}
</style>
