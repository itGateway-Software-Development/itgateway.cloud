<template>
  <div class="price-item">
    <div class="d-flex">
      <h4>Elastic ​</h4>
      <h4 class="fw-bold">Virtual Machine</h4>
    </div>
    <p>
      Flexible and secure cloud VM using shared resources with cost saving
      option.​
    </p>

    <div class="plan-detail shadow">
      <div class="d-flex gap-3 plan-btn p-0">
        <button
          class="btn primary-btn"
          :class="{ active: vm_plan == 'hourly' }"
          @click="vm_plan = 'hourly'"
        >
          Hourly
        </button>
        <button
          class="btn primary-btn"
          :class="{ active: vm_plan == 'monthly' }"
          @click="vm_plan = 'monthly'"
        >
          Monthly
        </button>
        <button
          class="btn primary-btn"
          :class="{ active: vm_plan == 'one_year' }"
          @click="vm_plan = 'one_year'"
        >
          1 Year
        </button>
        <button
          class="btn primary-btn"
          :class="{ active: vm_plan == 'three_year' }"
          @click="vm_plan = 'three_year'"
        >
          3 Year
        </button>
      </div>

      <div class="d-flex gap-3 os-btn">
        <button
          class="btn primary-btn"
          :class="{ active: vm_os == 'linux' }"
          @click="vm_os = 'linux'"
        >
          Linux
        </button>
        <button
          class="btn primary-btn"
          :class="{ active: vm_os == 'window' }"
          @click="vm_os = 'window'"
        >
          Window
        </button>
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
              <th>Elastic IP</th>
              <th>Cloud Backup</th>

              <th>Snapshot</th>
              <th>Price</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="vm_os == 'linux'">
              <td>evm.cl.mini​​</td>
              <td>2 vCPU​</td>
              <td>2 GB DDR4​</td>
              <td>50 GB NVMe​</td>
              <td>1 Gbps​</td>
              <td>1</td>
              <td>50 GB​</td>
              <td>1 Snapshot​</td>
              <td
                class="price-tag"
                v-if="vm_plan == 'hourly' && vm_os == 'linux'"
              >
                $0.021
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'monthly' && vm_os == 'linux'"
              >
                $15
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'one_year' && vm_os == 'linux'"
              >
                $167
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'three_year' && vm_os == 'linux'"
              >
                $501
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td v-if="vm_os == 'linux'">evm.cl.small​</td>
              <td v-else>evm.cw.small​</td>
              <td>2 vCPU​</td>
              <td>4 GB DDR4​</td>
              <td>100 GB NVMe​</td>
              <td>1 Gbps​</td>
              <td>1</td>
              <td>100 GB</td>
              <td>1 Snapshot​</td>
              <td
                class="price-tag"
                v-if="vm_plan == 'hourly' && vm_os == 'linux'"
              >
                $0.042
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'monthly' && vm_os == 'linux'"
              >
                $30
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'one_year' && vm_os == 'linux'"
              >
                $331
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'three_year' && vm_os == 'linux'"
              >
                $993
              </td>

              <td
                class="price-tag"
                v-if="vm_plan == 'hourly' && vm_os == 'window'"
              >
                $0.051
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'monthly' && vm_os == 'window'"
              >
                $35​
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'one_year' && vm_os == 'window'"
              >
                $399
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'three_year' && vm_os == 'window'"
              >
                $1,077
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td v-if="vm_os == 'linux'">evm.cl.medium</td>
              <td v-else>evm.cw.medium</td>
              <td>4 vCPU​</td>
              <td>8 GB DDR4​</td>
              <td>200 GB NVMe​</td>
              <td>1 Gbps​</td>
              <td>1</td>
              <td>200 GB</td>

              <td>1 Snapshot​</td>
              <td
                class="price-tag"
                v-if="vm_plan == 'hourly' && vm_os == 'linux'"
              >
                $0.082
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'monthly' && vm_os == 'linux'"
              >
                $58
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'one_year' && vm_os == 'linux'"
              >
                $651
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'three_year' && vm_os == 'linux'"
              >
                $1,953
              </td>

              <td
                class="price-tag"
                v-if="vm_plan == 'hourly' && vm_os == 'window'"
              >
                $0.102
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'monthly' && vm_os == 'window'"
              >
                $70​
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'one_year' && vm_os == 'window'"
              >
                $799
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'three_year' && vm_os == 'window'"
              >
                $2,157
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td v-if="vm_os == 'linux'">evm.cl.large</td>
              <td v-else>evm.cw.large</td>
              <td>4 vCPU​</td>
              <td>16 GB DDR4​</td>
              <td>200 GB NVMe​</td>
              <td v-if="vm_os == 'linux'">5 Gbps​</td>
              <td v-if="vm_os == 'window'">1 Gbps​</td>
              <td>1</td>
              <td>200 GB</td>
              <td>2 Snapshot​</td>
              <td
                class="price-tag"
                v-if="vm_plan == 'hourly' && vm_os == 'linux'"
              >
                $0.105
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'monthly' && vm_os == 'linux'"
              >
                $76
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'one_year' && vm_os == 'linux'"
              >
                $870
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'three_year' && vm_os == 'linux'"
              >
                $2,610
              </td>

              <td
                class="price-tag"
                v-if="vm_plan == 'hourly' && vm_os == 'window'"
              >
                $0.131
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'monthly' && vm_os == 'window'"
              >
                $90​
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'one_year' && vm_os == 'window'"
              >
                $999
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'three_year' && vm_os == 'window'"
              >
                $2,697
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td v-if="vm_os == 'linux'">evm.cl.xlarge</td>
              <td v-else>evm.cw.xlarge</td>
              <td>8 vCPU​</td>
              <td>32 GB DDR4​</td>
              <td>300 GB NVMe​</td>
              <td>5 Gbps​</td>
              <td>1</td>
              <td>300 GB</td>
              <td>2 Snapshot​</td>
              <td
                class="price-tag"
                v-if="vm_plan == 'hourly' && vm_os == 'linux'"
              >
                $0.209
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'monthly' && vm_os == 'linux'"
              >
                $150
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'one_year' && vm_os == 'linux'"
              >
                $1,742
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'three_year' && vm_os == 'linux'"
              >
                $5,226
              </td>

              <td
                class="price-tag"
                v-if="vm_plan == 'hourly' && vm_os == 'window'"
              >
                $0.263
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'monthly' && vm_os == 'window'"
              >
                $180​
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'one_year' && vm_os == 'window'"
              >
                $1,999
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'three_year' && vm_os == 'window'"
              >
                $5,397
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td v-if="vm_os == 'linux'">evm.cl.2xlarge</td>
              <td v-else>evm.cw.2xlarge</td>
              <td>16 vCPU​</td>
              <td>64 GB DDR4​</td>
              <td>500 GB NVMe​</td>
              <td>10 Gbps​</td>
              <td>1</td>
              <td>500 GB</td>
              <td>2 Snapshot​</td>
              <td
                class="price-tag"
                v-if="vm_plan == 'hourly' && vm_os == 'linux'"
              >
                $0.417
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'monthly' && vm_os == 'linux'"
              >
                $301
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'one_year' && vm_os == 'linux'"
              >
                $3,516
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'three_year' && vm_os == 'linux'"
              >
                $10,548
              </td>

              <td
                class="price-tag"
                v-if="vm_plan == 'hourly' && vm_os == 'window'"
              >
                $0.511
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'monthly' && vm_os == 'window'"
              >
                $350​
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'one_year' && vm_os == 'window'"
              >
                $3,999
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'three_year' && vm_os == 'window'"
              >
                $10,797
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>

            <tr v-if="vm_os == 'window'">
              <td>evm.cw.4xlarge</td>
              <td>32 vCPU​</td>
              <td>128 GB DDR4​</td>
              <td>1 TB NVMe​</td>
              <td>10 Gbps​</td>
              <td>1​</td>
              <td>1 TB</td>
              <td>2 Snapshot​</td>
              <td
                class="price-tag"
                v-if="vm_plan == 'hourly' && vm_os == 'window'"
              >
                $0.919
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'monthly' && vm_os == 'window'"
              >
                $630​
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'one_year' && vm_os == 'window'"
              >
                $7,199
              </td>
              <td
                class="price-tag"
                v-if="vm_plan == 'three_year' && vm_os == 'window'"
              >
                $19,437
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const vm_plan = ref("monthly");
    const vm_os = ref("linux");

    return { vm_plan, vm_os };
  },
};
</script>

<style>
.price-tag {
  color: #ff9901 !important;
  font-weight: bold;
  font-size: 18px;
}

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
  font-family: "Courier New", Courier, monospace;
}
.plan-btn button.active {
  background: #ec6316 !important;
  color: #fff !important;
}

.plan-detail .os-btn {
  margin: 30px 0px;
}

.plan-detail .os-btn .active {
  background: #ec6316 !important;
  color: #fff !important;
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
  border-color: #ec6316 !important;
}

.plan-detail table .deploy-btn:hover {
  transform: translate(0) !important;
}
</style>
