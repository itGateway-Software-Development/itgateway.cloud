<template>
    <div class="dropdown">
        <div class="content d-flex gap-5">
            <div class="row dropdown-content-row w-100">
              <div class="col-12 mb-5">
                Explore Cost & Pricing
              </div>
              <div class="col-12 col-sm-5" style="margin-bottom: 40px;">
                <router-link to="/pricing/all-pricing" class="menu-route">
                    <h5>See All Pricing</h5>
                    <span>Compare, choose and purchase cloud solutions you need.​</span>
                </router-link>
              </div>
              <div class="col-12 col-sm-7" style="margin-bottom: 40px;">
                <h5>itGateway Cloud Free Tier​</h5>
                <router-link to="#">See our free services for monthly or yearly.​​</router-link>
              </div>
              <div class="col-12 col-sm-5" style="margin-bottom: 40px;">
                <h5>Pricing Calculator​</h5>
                <router-link to="#">Estimate your costs with our cloud pricing calculator.​​</router-link>
              </div>
              <div class="col-12 col-sm-7" style="margin-bottom: 40px;">
                <h5>Cost Optimization​</h5>
                <router-link to="#">Save and manage to optimize your cloud usage costs.​</router-link>
              </div>
              <div class="col-12 col-sm-5" style="margin-bottom: 40px;">
                <h5>Cloud Supports​</h5>
                <router-link to="#">View our Managed Cloud Services fees and plans.​</router-link>
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

  .dropdown .menu-route h5, .dropdown .menu-route span{
    transition: .3s ease;
  }

  .dropdown .menu-route:hover h5, .dropdown .menu-route:hover span{
    color: #EC6316;
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


