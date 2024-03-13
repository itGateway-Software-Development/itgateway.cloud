<template>
    <div class="dropdown">
        <div class="content d-flex gap-5">
            <div class="row dropdown-content-row w-100">
              <div class="col-12 mb-5">
                Explore itGateway
              </div>
              <div class="col-12 col-sm-5" style="margin-bottom: 40px;">
                <h5>Partner Network​</h5>
                <router-link to="#">Become a partner with itGateway Cloud to transform digital business​</router-link>
              </div>
              <div class="col-12 col-sm-7" style="margin-bottom: 40px;">
                <h5>Global Infrastructure​</h5>
                <router-link to="#">View our Cloud Infrastructure and regions to build the trusted resources​</router-link>
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

<style scoped>
 
  .dropdown-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px 10px;
    border-radius: 10px;
    transition: .3s ease;
  }

  .dropdown-content:hover {
    transform: translateY(-5px);
  }

  .dropdown-content:hover h5 {
    color: var(--main-color);
  }

  .dropdown-content img {
    width: 100px;
  }

  @media (max-width: 1200px) {
    .dropdown-content{
      padding: 0px 10px 20px;
    }
    .dropdown-content h5 {
      font-size: 16px;
    }
  }
</style>


