<template>
<div class="dropdown">
        <div class="content dropdown-content-row d-flex gap-5 px-5 ">
            <ul class="pe-5 multi">
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
            <div class="compute content-multi">
              <div v-if="dropdownContent == 'use_cases'">
                  <div class="row">
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Backup & Restore​​</h5>
                      <router-link to="#">Easy and cost effective to backup and restore your cloud resources quickly.​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Cloud Migration​​</h5>
                      <router-link to="#">Migrate your apps, servers, workspace and data ​to itGateway Cloud securely.​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Containers​​</h5>
                      <router-link to="#">Managed container services for your workload​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Content Delivery​​</h5>
                      <router-link to="#">Optimized the performance of your cloud workload.​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Database Migration​​</h5>
                      <router-link to="#">Fully managed database to migrate your services for saving time and cost.​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>E-Commerce​</h5>
                      <router-link to="#">Build your online sales and retail system on itGateway Cloud rapidly.​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>End User Computing​</h5>
                      <router-link to="#">Accelerate your workspace to improve the end user experience.​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Hybrid Cloud​​</h5>
                      <router-link to="#">Extend your cloud infrastructure between your on-premises and itGateway Cloud​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Multi Cloud​​​</h5>
                      <router-link to="#">Modernized your cloud infrastructure as Multi Cloud environment.​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Serverless Computing​​</h5>
                      <router-link to="#">Build and run your apps or workload without thinking about the server.​</router-link>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                      <h5>Website​​​</h5>
                      <router-link to="#">Hosting your website or web apps with low cost, scalable and reliable. ​</router-link>
                    </div>
                  </div>
              </div>
              <div v-if="dropdownContent == 'industry'">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Advertising & Marketing​</h5>
                    <router-link to="#">Create your high value marketing operations ​& processes with our cloud solutions.​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Digital Transformation​</h5>
                    <router-link to="#">Accelerate your business with digital transformation to build the better future.​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Education​</h5>
                    <router-link to="#">Provide teaching, learning and better learning experience for the student .​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Financial Services​</h5>
                    <router-link to="#">Data analytics and business insight for ​banking, capital markets and online payment.​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Healthcare​</h5>
                    <router-link to="#">Deliver your care solutions with data driven healthcare system.​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Manufacturing​​</h5>
                    <router-link to="#">Increase your productivity with building the high speed manufacturing system.​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Media & Entertainment​</h5>
                    <router-link to="#">The cloud solutions to build the media & entertainment platforms.​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Retail</h5>
                    <router-link to="#">Build your retail chain with the real-time high transactions and performance. ​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Telecommunication​</h5>
                    <router-link to="#">Modernize your 4G and 5G infrastructure with cloud-based telecom solutions.​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Travelling​</h5>
                    <router-link to="#">Build your business for the best customer experience and automate the processes.​</router-link>
                  </div>
                </div>
              </div>
              <div v-if="dropdownContent == 'organization'">
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Startup</h5>
                    <router-link to="#">We are ready to accelerate your startup business from the beginning to grow rapidly.​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Small & Medium Business​</h5>
                    <router-link to="#">Create your SMB on the cloud with many advantages such as security, data-driven, speed time to market and low cost.​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Enterprise​</h5>
                    <router-link to="#">We offer a special services for every business and organization to provide the efficient cloud solutions.​​</router-link>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 40px;">
                    <h5>Non Profit​</h5>
                    <router-link to="#">To increase innovation, acceleration and optimize your organization growth.​​</router-link>
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