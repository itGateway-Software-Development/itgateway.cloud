<template>
<div class="dropdown">
        <div class="content d-flex gap-5 px-5 ">
            <ul class="pt-5 pe-5 multi">
              <div class="d-flex flex-column align-items-center justify-content-start" style="height: 50px;">
                <h5 class="">Most Demand</h5>
                <div class="line"></div>
              </div>
              <li @mouseover="dropdownContent = 'compute'" :class="{ active: dropdownContent == 'compute'}">
                Compute
              </li>
              <li @mouseover="dropdownContent = 'container'" :class="{ active: dropdownContent == 'container'}">
                Container
              </li>
              <li @mouseover="dropdownContent = 'database'" :class="{ active: dropdownContent == 'database'}">
                Database
              </li>
              <li @mouseover="dropdownContent = 'migration'" :class="{ active: dropdownContent == 'migration'}">
                Migration
              </li>
              <li @mouseover="dropdownContent = 'networking'" :class="{ active: dropdownContent == 'networking'}">
                Networking
              </li>
              <li @mouseover="dropdownContent = 'storage'" :class="{ active: dropdownContent == 'storage'}">
                Storage
              </li>
              <li @mouseover="dropdownContent = 'security'" :class="{ active: dropdownContent == 'security'}">
                Security
              </li>
              <li @mouseover="dropdownContent = 'web'" :class="{ active: dropdownContent == 'web'}">
                Web
              </li>
              <li>
                <router-link to="#"><u>View All Products</u></router-link>
              </li>
            </ul>
            <div class="compute pt-5 content-multi">
              <div class="" style="height: 50px;">
                &nbsp;
              </div>
              <div v-if="dropdownContent == 'compute'">
                  <div class="row">
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Virtual Machine​</h5>
                      <router-link to="#">Deploy Windows and Linux VM in minute​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Container Instance​</h5>
                      <router-link to="#">Deploy Windows and Linux VM in minute​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Dedicated Instance​</h5>
                      <router-link to="#">Deploy VM instance for Performance Optimization​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Relational Database Services​</h5>
                      <router-link to="#">Managed RDS deployment for MySQL, MS SQL & PostgreSQL​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>NoSQL Database​</h5>
                      <router-link to="#">Managed NoSQL Database like MongoDB & Redis​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Serverless​</h5>
                      <router-link to="#">Run application without managing the server​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Object Storage​</h5>
                      <router-link to="#">Scalable & secure object storage in the Cloud​</router-link>
                    </div>
                  </div>
              </div>

              <div v-else>
                <h5 class="text-center">Comming Soon</h5>
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