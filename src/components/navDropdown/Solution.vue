<template>
<div class="dropdown">
        <div class="content d-flex gap-5 px-5 ">
            <ul class="pt-5 pe-5 multi">
              <li @mouseover="dropdownContent = 'use_cases'" :class="{ active: dropdownContent == 'use_cases'}">
                Use Cases
              </li>
              <li @mouseover="dropdownContent = 'industry'" :class="{ active: dropdownContent == 'industry'}">
                Industry​
              </li>
              <li @mouseover="dropdownContent = 'organization'" :class="{ active: dropdownContent == 'organization'}">
                Organization​
              </li>
            </ul>
            <div class="compute pt-5 content-multi">
              <div class="" style="height: 50px;">
                &nbsp;
              </div>
              <div v-if="dropdownContent == 'use_cases'">
                  <div class="row">
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Backup & Restore​​</h5>
                      <router-link to="#">Virtual Desktop as a Services for Windows & Linux Desktop users​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Cloud Migration​​</h5>
                      <router-link to="#">Cloud based NAS storage to share and manage file access​​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Containers​​</h5>
                      <router-link to="#">Digital workspace platform like Microsoft 365​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Content Delivery​​</h5>
                      <router-link to="#">Virtual Desktop as a Services for Windows & Linux Desktop users​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Database Migration​​</h5>
                      <router-link to="#">Virtual Desktop as a Services for Windows & Linux Desktop users​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>E-Commerce​</h5>
                      <router-link to="#">Virtual Desktop as a Services for Windows & Linux Desktop users​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Edge Computing​​</h5>
                      <router-link to="#">Virtual Desktop as a Services for Windows & Linux Desktop users​​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Hybrid Cloud​​</h5>
                      <router-link to="#">Virtual Desktop as a Services for Windows & Linux Desktop users​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Multi Cloud​​​</h5>
                      <router-link to="#">Virtual Desktop as a Services for Windows & Linux Desktop users​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Serverless Computing​​</h5>
                      <router-link to="#">Virtual Desktop as a Services for Windows & Linux Desktop users​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Website​​​</h5>
                      <router-link to="#">Virtual Desktop as a Services for Windows & Linux Desktop users​</router-link>
                    </div>
                  </div>
              </div>
              <div v-else>
                <h2 class="text-center fw-bold">Comming Soon</h2>
              </div>
            </div>
        </div>
      </div>
</template>

<script>
export default {
  props: ['dropdownContent'],

  }
</script>

<style scoped>
  .content .line {
    width: 70%;
    height: 3px;
    background: #A22E76;
    margin-top: -5px;
  }
</style>