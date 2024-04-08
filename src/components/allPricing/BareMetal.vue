<template>
    <div class="price-item bare_metal">
        <div class="d-flex gap-3 plan-btn">
            <button class="btn primary-btn" :class="{active: bm_blan == 'hourly'}" @click="bm_blan = 'hourly'">Hourly</button>
            <button class="btn primary-btn" :class="{active: bm_blan == 'monthly'}" @click="bm_blan = 'monthly'">Monthly</button>
            <button class="btn primary-btn" :class="{active: bm_blan == 'one_year'}" @click="bm_blan = 'one_year'">1 Year</button>
            <button class="btn primary-btn" :class="{active: bm_blan == 'three_year'}" @click="bm_blan = 'three_year'">3 Year</button>
        </div>
        <div class="plan-detail shadow">
            <div class="d-flex">
                <h4>Elastic ​</h4>
                <h4 class="fw-bold">Bare-Metal Server​</h4>
            </div>
            <p>Dedicated physical server with single or dual processor that can build your customized cloud infrastructure. You can deploy and manage physical server infrastructure within an hour.​​</p>

            <div class="d-flex gap-3 os-btn">
                <button class="btn primary-btn bm_btn" :class="{active: bm_processor == 'single'}" @click="bm_processor = 'single'">Single Processor</button>
                <button class="btn primary-btn bm_btn" :class="{active: bm_processor == 'dual'}" @click="bm_processor = 'dual'">Dual Processor</button>
            </div>

            <div class="plan-detail-table">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Instance Type</th>
                            <th class="text-center">CPU</th>
                            <th>RAM</th>
                            <th>Storage</th>
                            <th class="text-center">Network</th>
                            <th class="text-center">IPv4 Address​</th>
                            <th>Price</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td v-if="bm_processor == 'single'">c1m1.ebms.small​</td>
                            <td v-else>c2m2.ebms.small​</td>
                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">Intel Xeon E2356-G​​ </p>
                                    <small style="color: #EC6316;">6 Core/12 Threat 3.2GHz​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x Xeon Silver 4210R​</p>
                                    <small style="color: #EC6316;">20 Core/40 Threat 2.4GHz​​</small>
                                </div>
                            </td>

                            <td v-if="bm_processor == 'single'">64 GB DDR4​​</td>
                            <td v-else>128 GB DDR4​</td>

                            <td v-if="bm_processor == 'single'">1 TB NVMe​</td>
                            <td v-else>2 x 1 TB NVMe​</td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x 10 Gbps</p>
                                    <small style="color: #EC6316;">3 TB Data Transfer Out​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x 25 Gbps​</p>
                                    <small style="color: #EC6316;">4 TB Data Transfer Out​​</small>
                                </div>
                            </td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">/29 Subnet​</p>
                                    <small style="color: #EC6316;">5 Usable​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​</small>
                                </div>
                            </td>

                            <td v-if="bm_blan=='hourly' && bm_processor=='single'">$0.3288/Hour</td>
                            <td v-if="bm_blan=='monthly' && bm_processor=='single'">$240/Month​</td>
                            <td v-if="bm_blan=='one_year' && bm_processor=='single'">$2,640/Year</td>
                            <td v-if="bm_blan=='three_year' && bm_processor=='single'">$7,920/3 Years</td>

                            <td v-if="bm_blan=='hourly' && bm_processor=='dual'">$0.7520/Hour</td>
                            <td v-if="bm_blan=='monthly' && bm_processor=='dual'">$549/Month​</td>
                            <td v-if="bm_blan=='one_year' && bm_processor=='dual'">$2,640/Year</td>
                            <td v-if="bm_blan=='three_year' && bm_processor=='dual'">$7,920/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td v-if="bm_processor == 'single'">c1m1.ebms.medium​</td>
                            <td v-else>c2m2.ebms.medium​</td>
                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">Intel Xeon E2388-G​</p>
                                    <small style="color: #EC6316;">6 Core/12 Threat 3.2GHz​​​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x Xeon Gold 5218R​​</p>
                                    <small style="color: #EC6316;">40 Core/80 Threat 2.1GHz​​</small>
                                </div>
                            </td>

                            <td v-if="bm_processor == 'single'">64 GB DDR4​​</td>
                            <td v-else>128 GB DDR4​</td>

                            <td v-if="bm_processor == 'single'">1 TB NVMe​</td>
                            <td v-else>2 x 1 TB NVMe​</td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x 10 Gbps</p>
                                    <small style="color: #EC6316;">3 TB Data Transfer Out​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x 25 Gbps​</p>
                                    <small style="color: #EC6316;">4 TB Data Transfer Out​​</small>
                                </div>
                            </td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">/29 Subnet​</p>
                                    <small style="color: #EC6316;">5 Usable​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​</small>
                                </div>
                            </td>

                            <td v-if="bm_blan=='hourly' && bm_processor=='single'">$0.4041/Hour</td>
                            <td v-if="bm_blan=='monthly' && bm_processor=='single'">$295/Month​</td>
                            <td v-if="bm_blan=='one_year' && bm_processor=='single'">$3,245/Year</td>
                            <td v-if="bm_blan=='three_year' && bm_processor=='single'">$9,735/3 Years</td>

                            <td v-if="bm_blan=='hourly' && bm_processor=='dual'">$0.9575/Hour</td>
                            <td v-if="bm_blan=='monthly' && bm_processor=='dual'">$699/Month​</td>
                            <td v-if="bm_blan=='one_year' && bm_processor=='dual'">$2,640/Year</td>
                            <td v-if="bm_blan=='three_year' && bm_processor=='dual'">$7,920/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td v-if="bm_processor == 'single'">c1m2.ebms.small​</td>
                            <td v-else>c2m4.ebms.small​</td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">Intel Xeon E2356-G​</p>
                                    <small style="color: #EC6316;">8 Core/16 Threat 3.2GHz​​​​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x Xeon Silver 5218R​​</p>
                                    <small style="color: #EC6316;">20 Core/40 Threat 2.4GHz​​</small>
                                </div>
                            </td>

                            <td v-if="bm_processor == 'single'">128 GB DDR4​</td>
                            <td v-else>256 GB DDR4​</td>

                            <td v-if="bm_processor == 'single'">2 x 1 TB NVMe​​</td>
                            <td v-else>2 x 2 TB NVMe​​</td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x 10 Gbps</p>
                                    <small style="color: #EC6316;">3 TB Data Transfer Out​​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x 25 Gbps​</p>
                                    <small style="color: #EC6316;">4 TB Data Transfer Out​​</small>
                                </div>
                            </td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​ </small>
                                </div>
                            </td>

                            <td v-if="bm_blan=='hourly' && bm_processor=='single'">$0.4863/Hour</td>
                            <td v-if="bm_blan=='monthly' && bm_processor=='single'">$355/Month​</td>
                            <td v-if="bm_blan=='one_year' && bm_processor=='single'">$3,905/Year</td>
                            <td v-if="bm_blan=='three_year' && bm_processor=='single'">$11,715/3 Years</td>

                            <td v-if="bm_blan=='hourly' && bm_processor=='dual'">$1.1630/Hour</td>
                            <td v-if="bm_blan=='monthly' && bm_processor=='dual'">$849/Month​</td>
                            <td v-if="bm_blan=='one_year' && bm_processor=='dual'">$9,339/Year</td>
                            <td v-if="bm_blan=='three_year' && bm_processor=='dual'">$28,017/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td v-if="bm_processor == 'single'">c1m2.ebms.medium​</td>
                            <td v-else>c2m4.ebms.medium​</td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">Intel Xeon E2388-G​</p>
                                    <small style="color: #EC6316;">8 Core/16 Threat 3.2GHz​​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x Xeon Gold 5218R​​</p>
                                    <small style="color: #EC6316;">40 Core/80 Threat 2.1GHz​​</small>
                                </div>
                            </td>

                            <td v-if="bm_processor == 'single'">128 GB DDR4​</td>
                            <td v-else>256 GB DDR4​</td>

                            <td v-if="bm_processor == 'single'">2 x 1 TB NVMe​​</td>
                            <td v-else>2 x 2 TB NVMe​​</td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x 10 Gbps​</p>
                                    <small style="color: #EC6316;">3 TB Data Transfer Out​​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x 25 Gbps​​</p>
                                    <small style="color: #EC6316;">4 TB Data Transfer Out​​</small>
                                </div>
                            </td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​ </small>
                                </div>
                            </td>

                            <td v-if="bm_blan=='hourly' && bm_processor=='single'">$0.5467/Hour</td>
                            <td v-if="bm_blan=='monthly' && bm_processor=='single'">$399/Month​</td>
                            <td v-if="bm_blan=='one_year' && bm_processor=='single'">$4,389/Year</td>
                            <td v-if="bm_blan=='three_year' && bm_processor=='single'">$13,167/3 Years</td>

                            <td v-if="bm_blan=='hourly' && bm_processor=='dual'">$1.3000/Hour</td>
                            <td v-if="bm_blan=='monthly' && bm_processor=='dual'">$949/Month​</td>
                            <td v-if="bm_blan=='one_year' && bm_processor=='dual'">$10,439/Year</td>
                            <td v-if="bm_blan=='three_year' && bm_processor=='dual'">$31,317/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td v-if="bm_processor == 'single'">c1m2.ebms.large​</td>
                            <td v-else>c2m8.ebms.medium​</td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">Intel Xeon E2288-G​</p>
                                    <small style="color: #EC6316;">8 Core/16 Threat 3.7GHz​​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x Xeon Gold 5418Y​​​</p>
                                    <small style="color: #EC6316;">48 Core/96 Threat 2.1GHz​​</small>
                                </div>
                            </td>

                            <td v-if="bm_processor == 'single'">128 GB DDR4​</td>
                            <td v-else>512 GB DDR4​</td>

                            <td v-if="bm_processor == 'single'">2 x 1 TB NVMe​​</td>
                            <td v-else>2 x 4 TB NVMe​​</td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x 10 Gbps​</p>
                                    <small style="color: #EC6316;">3 TB Data Transfer Out​​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x 25 Gbps​​</p>
                                    <small style="color: #EC6316;">5 TB Data Transfer Out​​</small>
                                </div>
                            </td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">/27 Subnet​</p>
                                    <small style="color: #EC6316;">29 Usable​ </small>
                                </div>
                            </td>

                            <td v-if="bm_blan=='hourly' && bm_processor=='single'">$0.5712/Hour</td>
                            <td v-if="bm_blan=='monthly' && bm_processor=='single'">$417/Month​</td>
                            <td v-if="bm_blan=='one_year' && bm_processor=='single'">$4,587/Year</td>
                            <td v-if="bm_blan=='three_year' && bm_processor=='single'">$13,761/3 Years</td>

                            <td v-if="bm_blan=='hourly' && bm_processor=='dual'">$2.0534/Hour</td>
                            <td v-if="bm_blan=='monthly' && bm_processor=='dual'">$1,499/Month​</td>
                            <td v-if="bm_blan=='one_year' && bm_processor=='dual'">$16,489/Year</td>
                            <td v-if="bm_blan=='three_year' && bm_processor=='dual'">$49,467/3 Years</td>
                            <td><button class="btn primary-btn deploy-btn">Deploy</button></td>
                        </tr>
                        <tr>
                            <td v-if="bm_processor == 'single'">ryzen.ebms.large​</td>
                            <td v-else>c2m8.ebms.large​</td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">AMD Ryzen 9 7900​</p>
                                    <small style="color: #EC6316;">12 Core/24 Threat 3.7GHz​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x Xeon Gold 6430​​​​</p>
                                    <small style="color: #EC6316;">64 Core/128 Threat 1.9GHz​</small>
                                </div>
                            </td>

                            <td v-if="bm_processor == 'single'">128 GB DDR4​</td>
                            <td v-else>512 GB DDR4​</td>

                            <td v-if="bm_processor == 'single'">2 x 1 TB NVMe​​​</td>
                            <td v-else>2 x 4 TB NVMe​​</td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x 16 Gbps​</p>
                                    <small style="color: #EC6316;">3 TB Data Transfer Out​​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">2 x 25 Gbps​​</p>
                                    <small style="color: #EC6316;">5 TB Data Transfer Out​​</small>
                                </div>
                            </td>

                            <td v-if="bm_processor == 'single'">
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">/29 Subnet​</p>
                                    <small style="color: #EC6316;">5 Usable​</small>
                                </div>
                            </td>
                            <td v-else>
                                <div class="d-flex flex-column align-items-center gap-0">
                                    <p class="p-0 m-0">/27 Subnet​</p>
                                    <small style="color: #EC6316;">29 Usable​ </small>
                                </div>
                            </td>

                            <td v-if="bm_blan=='hourly' && bm_processor=='single'">$0.4096/Hour</td>
                            <td v-if="bm_blan=='monthly' && bm_processor=='single'">$299/Month​</td>
                            <td v-if="bm_blan=='one_year' && bm_processor=='single'">$3,949/Year</td>
                            <td v-if="bm_blan=='three_year' && bm_processor=='single'">$11,847/3 Years</td>

                            <td v-if="bm_blan=='hourly' && bm_processor=='dual'">$2.2589/Hour</td>
                            <td v-if="bm_blan=='monthly' && bm_processor=='dual'">$1,649/Month​</td>
                            <td v-if="bm_blan=='one_year' && bm_processor=='dual'">$18,139/Year</td>
                            <td v-if="bm_blan=='three_year' && bm_processor=='dual'">$54,147/3 Years</td>
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
            const bm_blan = ref('monthly');
            const bm_processor = ref('single');


            return {bm_blan, bm_processor}
        }
    }
</script>

<style scoped>
    .bare_metal {
        margin-top: 100px;
    }

    .price-item .bm_btn {
        width: 150px;
    }
</style>
