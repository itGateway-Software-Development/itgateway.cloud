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
                            <th>Network Data</th>
                            <th>Transfer</th>
                            <th>Out Snapshot</th>
                            <th>Price</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>evm.cl.small​</td>
                            <td>2 vCPU​</td>
                            <td>4 GB DDR4​</td>
                            <td>100 GB NVMe​</td>
                            <td>1 Gbps​</td>
                            <td>1 TB/Month​</td>
                            <td>1 Snapshot​</td>
                            <td>$28/Month​</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td>evm.cl.medium</td>
                            <td>4 vCPU​</td>
                            <td>8 GB DDR4​</td>
                            <td>200 GB NVMe​</td>
                            <td>1 Gbps​</td>
                            <td>2 TB/Month​</td>
                            <td>1 Snapshot​</td>
                            <td>$55/Month​</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td>evm.cl.large</td>
                            <td>4 vCPU​</td>
                            <td>16 GB DDR4​</td>
                            <td>200 GB NVMe​</td>
                            <td>5 Gbps​</td>
                            <td>2 TB/Month​</td>
                            <td>2 Snapshot​</td>
                            <td>$72/Month​</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>                        <tr>
                            <td>evm.cl.xlarge</td>
                            <td>8 vCPU​</td>
                            <td>32 GB DDR4​</td>
                            <td>300 GB NVMe​</td>
                            <td>5 Gbps​</td>
                            <td>3 TB/Month​</td>
                            <td>2 Snapshot​</td>
                            <td>$143/Month​</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td>evm.cl.2xlarge</td>
                            <td>16 vCPU​</td>
                            <td>64 GB DDR4​</td>
                            <td>500 GB NVMe​</td>
                            <td>10 Gbps​</td>
                            <td>3 TB/Month​</td>
                            <td>2 Snapshot​</td>
                            <td>$286/Month​</td>
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

<style scoped>
    .price-item button {
        width: 100px;
    }

    .plan-detail {
        margin-top: 50px;
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
