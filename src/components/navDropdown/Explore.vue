<template>
    <div class="dropdown">
        <div class="content d-flex gap-5">
            <div class="row dropdown-content-row w-100">
              <div class="col-12 mb-5">
                Explore itGateway
              </div>
              <div class="col-12 col-sm-5" style="margin-bottom: 40px;">
                <router-link to="#" class="menu-route">
                  <h5>Partner Network​</h5>
                  <span>Become a partner with itGateway Cloud to transform digital business​</span>
                </router-link>
              </div>
              <div class="col-12 col-sm-7" style="margin-bottom: 40px;">
                <router-link to="/explore/global-infrastructure" class="menu-route">
                  <h5>Global Infrastructure​</h5>
                  <span>View our Cloud Infrastructure and regions to build the trusted resources​</span>
                </router-link>
              </div>
              <div class="col-12 col-sm-5" style="margin-bottom: 40px;">
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
              </div>
              <div class="col-12 col-sm-7" style="margin-bottom: 40px;">
                <h5>Reports & Insights​</h5>
                <router-link to="#">Explore Business Reports and read the executive insight​</router-link>
              </div>
              <div class="col-12 col-sm-5" style="margin-bottom: 40px;">
                <h5>Customer Success Story​</h5>
                <router-link to="#">Discover the cloud solutions utilized by our customers​</router-link>
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
  .dropdown h5 {
    font-weight: bold;
    font-size: 18px;
  }

  .dropdown .dropdown-content-row a {
    color: var(--font-mute-dark) !important;
  }

  .dropdown .menu-route h5, .dropdown .menu-route span{
    transition: .3s ease;
  }

  .dropdown .menu-route:hover h5, .dropdown .menu-route:hover span{
    color: #EC6316;
  }

</style>


