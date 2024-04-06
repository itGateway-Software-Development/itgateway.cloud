<template>
    <div class="price-item dedicated_machine">
        <div class="d-flex gap-3 plan-btn">
            <button class="btn primary-btn" :class="{active: dm_plan == 'hourly'}" @click="dm_plan = 'hourly'">Hourly</button>
            <button class="btn primary-btn" :class="{active: dm_plan == 'monthly'}" @click="dm_plan = 'monthly'">Monthly</button>
            <button class="btn primary-btn" :class="{active: dm_plan == 'one_year'}" @click="dm_plan = 'one_year'">1 Year</button>
            <button class="btn primary-btn" :class="{active: dm_plan == 'three_year'}" @click="dm_plan = 'three_year'">3 Year</button>
        </div>
        <div class="plan-detail shadow">
            <div class="d-flex">
                <h4>Elastic ​</h4>
                <h4 class="fw-bold">Dedicated Machine​</h4>
            </div>
            <p>Optimize performance with dedicate resource VM in the cloud.​​</p>

            <div class="d-flex gap-3 os-btn">
                <button class="btn primary-btn" :class="{active: dm_os == 'linux'}" @click="dm_os = 'linux'">Linux</button>
                <button class="btn primary-btn" :class="{active: dm_os == 'window'}" @click="dm_os = 'window'">Window</button>
            </div>

            <div class="plan-detail-table">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Instance Type</th>
                            <th>CPU</th>
                            <th>RAM</th>
                            <th>Storage</th>
                            <th>Network</th>
                            <th>Data Transfer Out</th>
                            <th>Snapshot</th>
                            <th>Price</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="dm_os=='linux'">
                            <td>edm.cl.mini</td>
                            <td>2 vCPU​</td>
                            <td>2 GB DDR4​</td>
                            <td>50 GB NVMe​</td>
                            <td>1 Gbps​</td>
                            <td>2 TB/Month​</td>
                            <td>1 Snapshot​</td>
                            <td v-if="dm_plan=='hourly' && dm_os=='linux'">$0.0315/Hour</td>
                            <td v-if="dm_plan=='monthly' && dm_os=='linux'">$23/Month​</td>
                            <td v-if="dm_plan=='one_year' && dm_os=='linux'">$253/Year</td>
                            <td v-if="dm_plan=='three_year' && dm_os=='linux'">$759/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td v-if="dm_os == 'linux'">edm.cl.small​</td>
                            <td v-else>edm.cw.small​</td>
                            <td>2 vCPU​</td>
                            <td>4 GB DDR4​</td>
                            <td>100 GB NVMe​</td>
                            <td>1 Gbps​</td>
                            <td>2 TB/Month​</td>
                            <td>1 Snapshot​</td>
                            <td v-if="dm_plan=='hourly' && dm_os=='linux'">$0.0630/Hour</td>
                            <td v-if="dm_plan=='monthly' && dm_os=='linux'">$46/Month​</td>
                            <td v-if="dm_plan=='one_year' && dm_os=='linux'">$506/Year</td>
                            <td v-if="dm_plan=='three_year' && dm_os=='linux'">$1,518/3 Years</td>

                            <td v-if="dm_plan=='hourly' && dm_os=='window'">$0.0808/Hour</td>
                            <td v-if="dm_plan=='monthly' && dm_os=='window'">$59/Month​</td>
                            <td v-if="dm_plan=='one_year' && dm_os=='window'">$649/Year</td>
                            <td v-if="dm_plan=='three_year' && dm_os=='window'">$1,947/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td v-if="dm_os == 'linux'">edm.cl.medium​</td>
                            <td v-else>edm.cw.medium​</td>
                            <td>4 vCPU​</td>
                            <td>8 GB DDR4​</td>
                            <td>200 GB NVMe​</td>
                            <td>1 Gbps​</td>
                            <td v-if="dm_os=='linux'">3 TB/Month​</td>
                            <td v-if="dm_os=='window'">2 TB/Month​</td>
                            <td>1 Snapshot​</td>
                            <td v-if="dm_plan=='hourly' && dm_os=='linux'">$0.1260/Hour</td>
                            <td v-if="dm_plan=='monthly' && dm_os=='linux'">$92/Month​</td>
                            <td v-if="dm_plan=='one_year' && dm_os=='linux'">$1,010/Year</td>
                            <td v-if="dm_plan=='three_year' && dm_os=='linux'">$3,030/3 Years</td>

                            <td v-if="dm_plan=='hourly' && dm_os=='window'">$0.1667/Hour</td>
                            <td v-if="dm_plan=='monthly' && dm_os=='window'">$120/Month​</td>
                            <td v-if="dm_plan=='one_year' && dm_os=='window'">$1,320/Year</td>
                            <td v-if="dm_plan=='three_year' && dm_os=='window'">$3,960/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td v-if="dm_os == 'linux'">edm.cl.large​</td>
                            <td v-else>edm.cw.large​</td>
                            <td>4 vCPU​</td>
                            <td>16 GB DDR4​</td>
                            <td>200 GB NVMe​</td>
                            <td v-if="dm_os == 'linux'">5 Gbps​</td>
                            <td v-else>1 Gbps​</td>
                            <td>3 TB/Month​</td>
                            <td>2 Snapshot​</td>
                            <td v-if="dm_plan=='hourly' && dm_os=='linux'">$0.1652/Hour</td>
                            <td v-if="dm_plan=='monthly' && dm_os=='linux'">$119/Month​</td>
                            <td v-if="dm_plan=='one_year' && dm_os=='linux'">$1,310/Year</td>
                            <td v-if="dm_plan=='three_year' && dm_os=='linux'">$3,930/3 Years</td>
                            
                            <td v-if="dm_plan=='hourly' && dm_os=='window'">$0.2041/Hour</td>
                            <td v-if="dm_plan=='monthly' && dm_os=='window'">$149/Month​</td>
                            <td v-if="dm_plan=='one_year' && dm_os=='window'">$1,599/Year</td>
                            <td v-if="dm_plan=='three_year' && dm_os=='window'">$4,797/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>                        <tr>
                            <td v-if="dm_os == 'linux'">edm.cl.xlarge</td>
                            <td v-else>edm.cw.xlarge</td>
                            <td>8 vCPU​</td>
                            <td>32 GB DDR4​</td>
                            <td>300 GB NVMe​</td>
                            <td>5 Gbps​</td>
                            <td v-if="dm_os == 'linux'">4 TB/Month​</td>
                            <td v-else>3 TB/Month​</td>
                            <td>2 Snapshot​</td>
                            <td v-if="dm_plan=='hourly' && dm_os=='linux'">$0.3274/Hour</td>
                            <td v-if="dm_plan=='monthly' && dm_os=='linux'">$239/Month​</td>
                            <td v-if="dm_plan=='one_year' && dm_os=='linux'">$2,620/Year</td>
                            <td v-if="dm_plan=='three_year' && dm_os=='linux'">$7,860/3 Years</td>
                            
                            <td v-if="dm_plan=='hourly' && dm_os=='window'">$0.4096/Hour</td>
                            <td v-if="dm_plan=='monthly' && dm_os=='window'">$299/Month​</td>
                            <td v-if="dm_plan=='one_year' && dm_os=='window'">$3,280/Year</td>
                            <td v-if="dm_plan=='three_year' && dm_os=='window'">$9,840/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td v-if="dm_os == 'linux'">edm.cl.2xlarge</td>
                            <td v-else>edm.cw.2xlarge</td>
                            <td>16 vCPU​</td>
                            <td>64 GB DDR4​</td>
                            <td>500 GB NVMe​</td>
                            <td>10 Gbps​</td>
                            <td>4 TB/Month​</td>
                            <td>2 Snapshot​</td>
                            <td v-if="dm_plan=='hourly' && dm_os=='linux'">$0.6562/Hour</td>
                            <td v-if="dm_plan=='monthly' && dm_os=='linux'">$479/Month​</td>
                            <td v-if="dm_plan=='one_year' && dm_os=='linux'">$5,260/Year</td>
                            <td v-if="dm_plan=='three_year' && dm_os=='linux'">$15,780/3 Years</td>
                            
                            <td v-if="dm_plan=='hourly' && dm_os=='window'">$0.7521/Hour</td>
                            <td v-if="dm_plan=='monthly' && dm_os=='window'">$549/Month​</td>
                            <td v-if="dm_plan=='one_year' && dm_os=='window'">$5,999/Year</td>
                            <td v-if="dm_plan=='three_year' && dm_os=='window'">$17,997/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>

                        <tr v-if="dm_os == 'window'">
                            <td>edm.cw.4xlarge</td>
                            <td>32 vCPU​</td>
                            <td>128 GB DDR4​</td>
                            <td>1 TB NVMe​</td>
                            <td>10 Gbps​</td>
                            <td>4 TB/Month​</td>
                            <td>2 Snapshot​</td>
                            <td v-if="dm_plan=='hourly' && dm_os=='window'">$1,3562/Hour</td>
                            <td v-if="dm_plan=='monthly' && dm_os=='window'">$990/Month​</td>
                            <td v-if="dm_plan=='one_year' && dm_os=='window'">$9,990/Year</td>
                            <td v-if="dm_plan=='three_year' && dm_os=='window'">$29,970/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        setup() {
            const dm_plan = ref('monthly');
            const dm_os = ref('linux');


            return {dm_plan, dm_os}
        }
    }
</script>

<style scoped>
    .dedicated_machine {
        margin-top: 100px;
    }
</style>
