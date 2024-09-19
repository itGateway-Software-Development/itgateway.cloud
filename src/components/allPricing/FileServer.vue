<template>
  <div class="price-item dedicated_machine">
    <div class="d-flex">
      <h4>Elastic ​</h4>
      <h4 class="fw-bold">File Servers</h4>
    </div>
    <p>
      Cloud based NAS server provides distributed file services such as file
      sharing, permission, encryption, sync and data migration. Access your data
      rapidly from anywhere and at anytime.​​​
    </p>
    <div class="plan-detail shadow">
      <div class="d-flex gap-3 plan-btn">
        <button
          class="btn primary-btn"
          :class="{ active: fs_plan == 'hourly' }"
          @click="fs_plan = 'hourly'"
        >
          Hourly
        </button>
        <button
          class="btn primary-btn"
          :class="{ active: fs_plan == 'monthly' }"
          @click="fs_plan = 'monthly'"
        >
          Monthly
        </button>
        <button
          class="btn primary-btn"
          :class="{ active: fs_plan == 'one_year' }"
          @click="fs_plan = 'one_year'"
        >
          1 Year
        </button>
        <button
          class="btn primary-btn"
          :class="{ active: fs_plan == 'three_year' }"
          @click="fs_plan = 'three_year'"
        >
          3 Year
        </button>
      </div>
      <div class="plan-detail-table">
        <table class="table">
          <thead>
            <tr>
              <th>Instance Type</th>
              <th>Max User</th>
              <th>CPU</th>
              <th>RAM</th>
              <th>Storage</th>
              <th>Network</th>
              <th>Elastic IP</th>
              <th>Cloud Backup</th>
              <th>Price</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>efs.mini​</td>
              <td>20 Users​</td>
              <td>2 vCPU​</td>
              <td>2 GB DDR4​</td>
              <td>300 GB SSD​</td>
              <td>1 Gbps​</td>
              <td>1​</td>
              <td>300 GB​</td>
              <td class="price-tag" v-if="fs_plan == 'hourly'">$0.042</td>
              <td class="price-tag" v-if="fs_plan == 'monthly'">$29​</td>
              <td class="price-tag" v-if="fs_plan == 'one_year'">$299</td>
              <td class="price-tag" v-if="fs_plan == 'three_year'">$897</td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td>efs.small​</td>
              <td>50 Users​</td>
              <td>2 vCPU​</td>
              <td>4 GB DDR4​</td>
              <td>500 GB SSD​</td>
              <td>1 Gbps​</td>
              <td>1​</td>
              <td>500 GB​​</td>
              <td class="price-tag" v-if="fs_plan == 'hourly'">$0.086</td>
              <td class="price-tag" v-if="fs_plan == 'monthly'">$59​</td>
              <td class="price-tag" v-if="fs_plan == 'one_year'">$590</td>
              <td class="price-tag" v-if="fs_plan == 'three_year'">$1,770</td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td>efs.medium​</td>
              <td>100 Users​</td>
              <td>4 vCPU​</td>
              <td>8 GB DDR4​</td>
              <td>1 TB SSD​</td>
              <td>1 Gbps​</td>
              <td>1​</td>
              <td>1 TB​​</td>
              <td
                class="price-tag"
                v-if="fs_plan == 'hourly' && dm_os == 'linux'"
              >
                $0.175
              </td>
              <td
                class="price-tag"
                v-if="fs_plan == 'monthly' && dm_os == 'linux'"
              >
                $120​
              </td>
              <td
                class="price-tag"
                v-if="fs_plan == 'one_year' && dm_os == 'linux'"
              >
                $1,200
              </td>
              <td
                class="price-tag"
                v-if="fs_plan == 'three_year' && dm_os == 'linux'"
              >
                $3,600
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td>efs.large​</td>
              <td>200 Users​</td>
              <td>4 vCPU​</td>
              <td>16 GB DDR4​</td>
              <td>2 TB SSD​</td>
              <td>5 Gbps​</td>
              <td>1​</td>
              <td>2 TB​</td>
              <td
                class="price-tag"
                v-if="fs_plan == 'hourly' && dm_os == 'linux'"
              >
                $0.247
              </td>
              <td
                class="price-tag"
                v-if="fs_plan == 'monthly' && dm_os == 'linux'"
              >
                $169​
              </td>
              <td
                class="price-tag"
                v-if="fs_plan == 'one_year' && dm_os == 'linux'"
              >
                $1,690
              </td>
              <td
                class="price-tag"
                v-if="fs_plan == 'three_year' && dm_os == 'linux'"
              >
                $5,070
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td>efs.xlarge​</td>
              <td>500 Users​</td>
              <td>8 vCPU​</td>
              <td>32 GB DDR4​</td>
              <td>4 TB SSD​</td>
              <td>5 Gbps​</td>
              <td>1</td>
              <td>4 TB​</td>
              <td
                class="price-tag"
                v-if="fs_plan == 'hourly' && dm_os == 'linux'"
              >
                $0.481
              </td>
              <td
                class="price-tag"
                v-if="fs_plan == 'monthly' && dm_os == 'linux'"
              >
                $329​
              </td>
              <td
                class="price-tag"
                v-if="fs_plan == 'one_year' && dm_os == 'linux'"
              >
                $3,290
              </td>
              <td
                class="price-tag"
                v-if="fs_plan == 'three_year' && dm_os == 'linux'"
              >
                $9,870
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td>efs.2xlarge​</td>
              <td>1,000 Users​</td>
              <td>16 vCPU​</td>
              <td>64 GB DDR4​</td>
              <td>8 TB SSD​</td>
              <td>10 Gbps​</td>
              <td>1​</td>
              <td>8 TB​​</td>
              <td
                class="price-tag"
                v-if="fs_plan == 'hourly' && dm_os == 'linux'"
              >
                $0.917
              </td>
              <td
                class="price-tag"
                v-if="fs_plan == 'monthly' && dm_os == 'linux'"
              >
                $629​
              </td>
              <td
                class="price-tag"
                v-if="fs_plan == 'one_year' && dm_os == 'linux'"
              >
                $6,290
              </td>
              <td
                class="price-tag"
                v-if="fs_plan == 'three_year' && dm_os == 'linux'"
              >
                $18,870
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
    const fs_plan = ref("monthly");
    const dm_os = ref("linux");

    return { fs_plan, dm_os };
  },
};
</script>

<style scoped>
.dedicated_machine {
  margin-top: 100px;
}

.plan-detail-table {
  margin-top: 50px;
}
</style>
