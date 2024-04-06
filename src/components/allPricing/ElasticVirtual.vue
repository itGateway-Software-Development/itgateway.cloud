<template>
    <div class="price-item">
        <div class="d-flex gap-3 plan-btn">
            <button class="btn primary-btn" :class="{active: vm_plan == 'hourly'}" @click="vm_plan = 'hourly'">Hourly</button>
            <button class="btn primary-btn" :class="{active: vm_plan == 'monthly'}" @click="vm_plan = 'monthly'">Monthly</button>
            <button class="btn primary-btn" :class="{active: vm_plan == 'one_year'}" @click="vm_plan = 'one_year'">1 Year</button>
            <button class="btn primary-btn" :class="{active: vm_plan == 'three_year'}" @click="vm_plan = 'three_year'">3 Year</button>
        </div>
        <div class="plan-detail shadow">
            <div class="d-flex">
                <h4>Elastic ​</h4>
                <h4 class="fw-bold">Virtual Machine</h4>
            </div>
            <p>Flexible and secure cloud VM using shared resources with cost saving option.​</p>

            <div class="d-flex gap-3 os-btn">
                <button class="btn primary-btn" :class="{active: vm_os == 'linux'}" @click="vm_os = 'linux'">Linux</button>
                <button class="btn primary-btn" :class="{active: vm_os == 'window'}" @click="vm_os = 'window'">Window</button>
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
                        <tr v-if="vm_os=='linux'">
                            <td>evm.cl.mini​​</td>
                            <td>2 vCPU​</td>
                            <td>2 GB DDR4​</td>
                            <td>50 GB NVMe​</td>
                            <td>1 Gbps​</td>
                            <td>1 TB/Month​</td>
                            <td>1 Snapshot​</td>
                            <td v-if="vm_plan=='hourly' && vm_os=='linux'">$0.0194/Hour</td>
                            <td v-if="vm_plan=='monthly' && vm_os=='linux'">$14/Month​</td>
                            <td v-if="vm_plan=='one_year' && vm_os=='linux'">$159/Year</td>
                            <td v-if="vm_plan=='three_year' && vm_os=='linux'">$504/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td v-if="vm_os == 'linux'">evm.cl.small​</td>
                            <td v-else>evm.cw.small​</td>
                            <td>2 vCPU​</td>
                            <td>4 GB DDR4​</td>
                            <td>100 GB NVMe​</td>
                            <td>1 Gbps​</td>
                            <td>1 TB/Month​</td>
                            <td>1 Snapshot​</td>
                            <td v-if="vm_plan=='hourly' && vm_os=='linux'">$0.0389/Hour</td>
                            <td v-if="vm_plan=='monthly' && vm_os=='linux'">$28/Month​</td>
                            <td v-if="vm_plan=='one_year' && vm_os=='linux'">$315/Year</td>
                            <td v-if="vm_plan=='three_year' && vm_os=='linux'">$945/3 Years</td>

                            <td v-if="vm_plan=='hourly' && vm_os=='window'">$0.0486/Hour</td>
                            <td v-if="vm_plan=='monthly' && vm_os=='window'">$35/Month​</td>
                            <td v-if="vm_plan=='one_year' && vm_os=='window'">$399/Year</td>
                            <td v-if="vm_plan=='three_year' && vm_os=='window'">$1,197/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td v-if="vm_os == 'linux'">evm.cl.medium</td>
                            <td v-else>evm.cw.medium</td>
                            <td>4 vCPU​</td>
                            <td>8 GB DDR4​</td>
                            <td>200 GB NVMe​</td>
                            <td>1 Gbps​</td>
                            <td>2 TB/Month​</td>
                            <td>1 Snapshot​</td>
                            <td v-if="vm_plan=='hourly' && vm_os=='linux'">$0.0764/Hour</td>
                            <td v-if="vm_plan=='monthly' && vm_os=='linux'">$55/Month​</td>
                            <td v-if="vm_plan=='one_year' && vm_os=='linux'">$620/Year</td>
                            <td v-if="vm_plan=='three_year' && vm_os=='linux'">$1,860/3 Years</td>

                            <td v-if="vm_plan=='hourly' && vm_os=='window'">$0.0972/Hour</td>
                            <td v-if="vm_plan=='monthly' && vm_os=='window'">$70/Month​</td>
                            <td v-if="vm_plan=='one_year' && vm_os=='window'">$799/Year</td>
                            <td v-if="vm_plan=='three_year' && vm_os=='window'">$2,397/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td v-if="vm_os == 'linux'">evm.cl.large</td>
                            <td v-else>evm.cw.large</td>
                            <td>4 vCPU​</td>
                            <td>16 GB DDR4​</td>
                            <td>200 GB NVMe​</td>
                            <td>5 Gbps​</td>
                            <td>2 TB/Month​</td>
                            <td>2 Snapshot​</td>
                            <td v-if="vm_plan=='hourly' && vm_os=='linux'">$0.1000/Hour</td>
                            <td v-if="vm_plan=='monthly' && vm_os=='linux'">$72/Month​</td>
                            <td v-if="vm_plan=='one_year' && vm_os=='linux'">$829/Year</td>
                            <td v-if="vm_plan=='three_year' && vm_os=='linux'">$2,487/3 Years</td>
                            
                            <td v-if="vm_plan=='hourly' && vm_os=='window'">$0.1250/Hour</td>
                            <td v-if="vm_plan=='monthly' && vm_os=='window'">$90/Month​</td>
                            <td v-if="vm_plan=='one_year' && vm_os=='window'">$999/Year</td>
                            <td v-if="vm_plan=='three_year' && vm_os=='window'">$2,997/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>                        <tr>
                            <td v-if="vm_os == 'linux'">evm.cl.xlarge</td>
                            <td v-else>evm.cw.xlarge</td>
                            <td>8 vCPU​</td>
                            <td>32 GB DDR4​</td>
                            <td>300 GB NVMe​</td>
                            <td>5 Gbps​</td>
                            <td>3 TB/Month​</td>
                            <td>2 Snapshot​</td>
                            <td v-if="vm_plan=='hourly' && vm_os=='linux'">$0.1986/Hour</td>
                            <td v-if="vm_plan=='monthly' && vm_os=='linux'">$143/Month​</td>
                            <td v-if="vm_plan=='one_year' && vm_os=='linux'">$1,659/Year</td>
                            <td v-if="vm_plan=='three_year' && vm_os=='linux'">$4,977/3 Years</td>
                            
                            <td v-if="vm_plan=='hourly' && vm_os=='window'">$0.2500/Hour</td>
                            <td v-if="vm_plan=='monthly' && vm_os=='window'">$180/Month​</td>
                            <td v-if="vm_plan=='one_year' && vm_os=='window'">$1,999/Year</td>
                            <td v-if="vm_plan=='three_year' && vm_os=='window'">$5,997/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td v-if="vm_os == 'linux'">evm.cl.2xlarge</td>
                            <td v-else>evm.cw.2xlarge</td>
                            <td>16 vCPU​</td>
                            <td>64 GB DDR4​</td>
                            <td>500 GB NVMe​</td>
                            <td>10 Gbps​</td>
                            <td>3 TB/Month​</td>
                            <td>2 Snapshot​</td>
                            <td v-if="vm_plan=='hourly' && vm_os=='linux'">$0.3986/Hour</td>
                            <td v-if="vm_plan=='monthly' && vm_os=='linux'">$287/Month​</td>
                            <td v-if="vm_plan=='one_year' && vm_os=='linux'">$3,349/Year</td>
                            <td v-if="vm_plan=='three_year' && vm_os=='linux'">$10,047/3 Years</td>
                            
                            <td v-if="vm_plan=='hourly' && vm_os=='window'">$0.4861/Hour</td>
                            <td v-if="vm_plan=='monthly' && vm_os=='window'">$350/Month​</td>
                            <td v-if="vm_plan=='one_year' && vm_os=='window'">$3,999/Year</td>
                            <td v-if="vm_plan=='three_year' && vm_os=='window'">$11,997/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>

                        <tr v-if="vm_os == 'window'">
                            <td>evm.cw.4xlarge</td>
                            <td>32 vCPU​</td>
                            <td>128 GB DDR4​</td>
                            <td>1 TB NVMe​</td>
                            <td>10 Gbps​</td>
                            <td>3 TB/Month​</td>
                            <td>2 Snapshot​</td>
                            <td v-if="vm_plan=='hourly' && vm_os=='window'">$0.875/Hour</td>
                            <td v-if="vm_plan=='monthly' && vm_os=='window'">$630/Month​</td>
                            <td v-if="vm_plan=='one_year' && vm_os=='window'">$7,199/Year</td>
                            <td v-if="vm_plan=='three_year' && vm_os=='window'">$21,597/3 Years</td>
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
            const vm_plan = ref('monthly');
            const vm_os = ref('linux');


            return {vm_plan, vm_os}
        }
    }
</script>

<style >
    .price-item button {
        width: 100px;
    }

    .plan-detail {
        margin-top: 20px;
        background: var(--card-background-color);
        padding: 30px;
        border-radius: 10px;
    }

    .plan-detail h4 {
        font-family: 'Courier New', Courier, monospace;
    }
    .plan-btn button.active {
        background: #EC6316 !important;
    }

    .plan-detail .os-btn {
        margin:30px 0px;
    }

    .plan-detail .os-btn .active{
        background: #EC6316 !important;
    }

    .plan-detail table th {
        background: transparent !important;
        color: var(--font-color);
        font-weight: bold;
    }

    .plan-detail table td {
        background: transparent !important;
        color: var(--font-color);
        vertical-align: middle;
    }

    .plan-detail table .deploy-btn {
        border-color: #EC6316 !important;
    }

    .plan-detail table .deploy-btn:hover {
        transform: translate(0) !important;
    }
</style>
