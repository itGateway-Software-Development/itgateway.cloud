<template>
  <div class="customer-success-resource content-wrapper">
    <div class="row mt-5">
      <div class="col-12 col-sm-6 col-md-4">
        <div class="customer-success-resource-card shadow">
          <h3>Learn About Managed Cloud Services and Supports​</h3>
          <div class="readmore">
            <router-link
              to="/explore/manage-cloud-services"
              class="d-flex align-items-center gap-2"
            >
              <span>Read About MCS</span>
              <span class="material-symbols-outlined mt-1 ms-1"
                >arrow_right_alt</span
              >
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <div class="customer-success-resource-card shadow">
          <h3>View itGateway Cloud Pricing and Calculation ​</h3>
          <div class="readmore pricing">
            <router-link
              to="/pricing/all-pricing"
              class="d-flex align-items-center gap-2"
            >
              <span>View Cloud Pricing</span>
              <span class="material-symbols-outlined mt-1 ms-1"
                >arrow_right_alt</span
              >
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <div class="customer-success-resource-card shadow">
          <h3>Find The Right Cloud Services and Solutions</h3>
          <div class="readmore cloud-solution">
            <router-link to="#" class="d-flex align-items-center gap-2">
              <span>View Cloud Solutions</span>
              <span class="material-symbols-outlined mt-1 ms-1"
                >arrow_right_alt</span
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.customer-success-resource {
  margin-top: 90px;
}

.customer-success-resource .customer-success-resource-card {
  margin-bottom: 10px;
  height: 120px;
  padding: 15px 20px;
  position: relative;
  transition: 0.5s ease;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #ec6316;
}

.customer-success-resource .customer-success-resource-card:hover {
  background: var(--card-background-color);
  transform: translateY(-10px);
}

.customer-success-resource .customer-success-resource-card h3 {
  font-weight: bold;
  font-size: 20px;
}

.customer-success-resource .readmore {
  position: absolute;
  bottom: 15px;
  overflow: hidden;
}

.customer-success-resource a {
  transform: translateX(-120px);
  transition: 0.5s ease;
}

.customer-success-resource .pricing a {
  transform: translateX(-125px);
  transition: 0.5s ease;
}

.customer-success-resource .cloud-solution a {
  transform: translateX(-140px);
  transition: 0.5s ease;
}

.customer-success-resource .customer-success-resource-card:hover a {
  transform: translateX(0);
  color: #ec6316 !important;
}

@media (max-width: 1078px) {
  .customer-success-resource .customer-success-resource-card {
    height: 110px;
  }

  .customer-success-resource .customer-success-resource-card h3 {
    font-weight: bold;
    font-size: 17px;
  }
}
</style>
