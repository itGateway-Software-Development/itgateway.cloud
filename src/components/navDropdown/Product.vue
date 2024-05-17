<template>
<div class="dropdown">
        <div class="content d-flex gap-5 px-5 ">
            <ul class="pt-5 pe-5 multi">
              <div class="d-flex flex-column align-items-center justify-content-start" style="height: 50px;">
                <h5 class="" @mouseover="dropdownContent = 'most_demand'">Most Demand</h5>
                <div class="line" v-if="dropdownContent == 'most_demand'"></div>
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
              <li @mouseover="dropdownContent = 'workspace'" :class="{ active: dropdownContent == 'workspace'}">
                Workspace
              </li>
              <li>
                <router-link to="#"><u>View All Products</u></router-link>
              </li>
            </ul>
            <div class="compute pt-5 content-multi">
              <div class="" style="height: 50px;">
                &nbsp;
              </div>
              <div v-if="dropdownContent == 'most_demand'">
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
              <div v-if="dropdownContent == 'compute'">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic Virtual Machine​​</h5>
                    <router-link to="#">Shared Virtual Machine in the Cloud​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Dedicated Virtual Machine​​</h5>
                    <router-link to="#">Virtual Machine with Dedicated Resources​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic Running Machine​​</h5>
                    <router-link to="#">Managed Virtual Private Server​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic App Machine​​</h5>
                    <router-link to="#">Build and Run Your Apps with Serverless​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Code Runner​​</h5>
                    <router-link to="#">Run Your Code Without Managing Server​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic Bare-Metal Server​</h5>
                    <router-link to="#">Build your physical server infrastructure ​in the Cloud​​</router-link>
                  </div>
                </div>
              </div>
              <div v-if="dropdownContent == 'container'">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic Container Instance​​​</h5>
                    <router-link to="#">Run the container on the cloud​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic Container Hub​</h5>
                    <router-link to="#">Store and manage container images​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic Kubernetes Cluster​​</h5>
                    <router-link to="#">Managed Kubernetes Cluster & Services​​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>FastShift​​​</h5>
                    <router-link to="#">Run the container based apps in a minute​​​</router-link>
                  </div>
                </div>
              </div>
              <div v-if="dropdownContent == 'database'">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic RDS​​​​</h5>
                    <router-link to="#">Managed relational database services for​ MySQL, MS SQL, PostgreSQL & MariaDB​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic Caching Services​​</h5>
                    <router-link to="#">In-Memory Caching Services ​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>One DB Migrate​​​</h5>
                    <router-link to="#">Migrate your databases in real-time ​​​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>LightSpeedDB​​​​</h5>
                    <router-link to="#">Managed NoSQL databases like MongoDB​​​​</router-link>
                  </div>
                </div>
              </div>
              <div v-if="dropdownContent == 'migration'">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Workspace Migration Services​​​​​</h5>
                    <router-link to="#">Easily migrate your digital workspace​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Server Migration Services​​​</h5>
                    <router-link to="#">Migrate your server in real-time to the cloud​​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Platform Migration Services​​​​</h5>
                    <router-link to="#">Migrate your applications to the cloud​​​​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Data Migration Services​</h5>
                    <router-link to="#">Migrate your data to the cloud faster​ And securely​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Bare-Metal Migration Services​​</h5>
                    <router-link to="#">Migrate and build your Datacenter or Server Infrastructure as Bare-Metal Cloud​</router-link>
                  </div>
                </div>
              </div>
              <div v-if="dropdownContent == 'networking'">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Virtual Private Cloud​​</h5>
                    <router-link to="#">VPC for virtual network, security and ​connectivity​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic VPN​​​​</h5>
                    <router-link to="#">Secure your connection, resources and apps​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic CDN​​​​​</h5>
                    <router-link to="#">Content Delivery Networking for Global Access​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Host 53​​</h5>
                    <router-link to="#">Register and manage your domain​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>TrafficManager​​</h5>
                    <router-link to="#">Load balancing your apps or resources ​ the cloud​</router-link>
                  </div>
                </div>
              </div>
              <div v-if="dropdownContent == 'storage'">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic Object Storage (EOS)​​​</h5>
                    <router-link to="#">Flexible, scalable and secure object storage ​in the Cloud​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic File Storage (EFS)​​​​​</h5>
                    <router-link to="#">Managed and centralized storage for compute resources​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic Block Storage (EBS)​​</h5>
                    <router-link to="#">Block storage volume for compute resources​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Cloud Backup​​​</h5>
                    <router-link to="#">Backup your cloud resources across multiple and AZs​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>DataSync​</h5>
                    <router-link to="#">Disaster Recovery as a Services for your ​workload</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Hybrid Storage​</h5>
                    <router-link to="#">Storage integration between your on-premises and itGateway Cloud</router-link>
                  </div>
                </div>
              </div>
              <div v-if="dropdownContent == 'security'">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Firewall Manager​​​​</h5>
                    <router-link to="#">Manage and apply rules for cloud security​​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Web Application Firewall​​​​​​</h5>
                    <router-link to="#">Secure your web traffic with cloud WAF ​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Identity & Access Management​​</h5>
                    <router-link to="#">Manage and access cloud resources securely ​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Certificate Manager​​​​</h5>
                    <router-link to="#">Generate and attach SSL/TLS certificates​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Key Management Services​</h5>
                    <router-link to="#">Create and manage encryption keys for secure connections​</router-link>
                  </div>
                </div>
              </div>
              <div v-if="dropdownContent == 'web'">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic Web Instance​​</h5>
                    <router-link to="#">Build and run your website or web apps​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>API Gateway​​​​​​​</h5>
                    <router-link to="#">Publich API gateway securely and scalability​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Web Test​​​</h5>
                    <router-link to="#">Testing and optimizing your apps with high-scale​ ​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Certificate Manager​​​​​</h5>
                    <router-link to="#">Generate and attach SSL/TLS certificates​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Key Management Services​​</h5>
                    <router-link to="#">Create and manage encryption keys for secure connections​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Web Application Firewall​​</h5>
                    <router-link to="#">Secure your web traffic with cloud WAF ​​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Host 53​​​</h5>
                    <router-link to="#">Register and manage your domain​​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic CDN​​​</h5>
                    <router-link to="#">Content Delivery Networking for Global Access​</router-link>
                  </div>
                </div>
              </div>
              <div v-if="dropdownContent == 'workspace'">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic Workspace​​​</h5>
                    <router-link to="#">Virtual Desktop as a Services for Windows & Linux Desktop users​​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic NAS Server​​​​​​​​</h5>
                    <router-link to="#">Cloud based NAS storage to share and manage file access​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Elastic Virtual Office​​</h5>
                    <router-link to="#">Digital workspace platform like Microsoft 365​​</router-link>
                  </div>
                </div>
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