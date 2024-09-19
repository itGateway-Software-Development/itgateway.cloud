<template>
  <div class="price-item dedicated_machine">
    <div class="d-flex">
      <h4>Manage ​</h4>
      <h4 class="fw-bold">Cloud VPN</h4>
    </div>
    <p>
      Cloud based VPN services provide VPN solutions such as Secure Remote
      Access, Site-to-Site Networking, Secure Internet Access and Secure IoT
      Communication.​​​​
    </p>
    <div class="plan-detail shadow">
      <div class="d-flex gap-3 plan-btn">
        <button
          class="btn primary-btn"
          :class="{ active: c_vpn_plan == 'hourly' }"
          @click="c_vpn_plan = 'hourly'"
        >
          Hourly
        </button>
        <button
          class="btn primary-btn"
          :class="{ active: c_vpn_plan == 'monthly' }"
          @click="c_vpn_plan = 'monthly'"
        >
          Monthly
        </button>
        <button
          class="btn primary-btn"
          :class="{ active: c_vpn_plan == 'one_year' }"
          @click="c_vpn_plan = 'one_year'"
        >
          1 Year
        </button>
        <button
          class="btn primary-btn"
          :class="{ active: c_vpn_plan == 'three_year' }"
          @click="c_vpn_plan = 'three_year'"
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
              <th>Elastic Ip</th>
              <th>Data Transfer Out</th>
              <th>Price</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mcv.mini​</td>
              <td>20 Users​</td>
              <td>2 vCPU​</td>
              <td>2 GB DDR4​</td>
              <td>30 GB NVMe</td>
              <td>1 Gbps​</td>
              <td>1</td>
              <td>1 TB​</td>
              <td class="price-tag" v-if="c_vpn_plan == 'hourly'">$0.042​</td>
              <td class="price-tag" v-if="c_vpn_plan == 'monthly'">$29​</td>
              <td class="price-tag" v-if="c_vpn_plan == 'one_year'">$299</td>
              <td class="price-tag" v-if="c_vpn_plan == 'three_year'">$810</td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td>mcv.small​</td>
              <td>50 Users​</td>
              <td>2 vCPU​</td>
              <td>4 GB DDR4​</td>
              <td>50 GB NVMe</td>
              <td>1 Gbps​</td>
              <td>1</td>
              <td>3 TB​</td>
              <td class="price-tag" v-if="c_vpn_plan == 'hourly'">$0.086</td>
              <td class="price-tag" v-if="c_vpn_plan == 'monthly'">$59​</td>
              <td class="price-tag" v-if="c_vpn_plan == 'one_year'">$590</td>
              <td class="price-tag" v-if="c_vpn_plan == 'three_year'">
                $1,590
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td>mcv.medium​</td>
              <td>100 Users​</td>
              <td>4 vCPU​</td>
              <td>8 GB DDR4​</td>
              <td>50 GB NVMe</td>
              <td>1 Gbps​</td>
              <td>1</td>
              <td>5 TB​</td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'hourly' && dm_os == 'linux'"
              >
                $0.175
              </td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'monthly' && dm_os == 'linux'"
              >
                $120​
              </td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'one_year' && dm_os == 'linux'"
              >
                $1,200
              </td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'three_year' && dm_os == 'linux'"
              >
                $3,240
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td>mcv.large​</td>
              <td>200 Users​</td>
              <td>4 vCPU​</td>
              <td>16 GB DDR4​</td>
              <td>100 GB NVMe</td>
              <td>5 Gbps​</td>
              <td>1</td>
              <td>10 TB​</td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'hourly' && dm_os == 'linux'"
              >
                $0.247
              </td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'monthly' && dm_os == 'linux'"
              >
                $169​
              </td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'one_year' && dm_os == 'linux'"
              >
                $1,690
              </td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'three_year' && dm_os == 'linux'"
              >
                $4,560
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td>mcv.xlarge​</td>
              <td>500 Users​</td>
              <td>8 vCPU​</td>
              <td>32 GB DDR4​</td>
              <td>100 GB NVMe​​</td>
              <td>5 Gbps​</td>
              <td>1</td>
              <td>20 TB​</td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'hourly' && dm_os == 'linux'"
              >
                $0.481
              </td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'monthly' && dm_os == 'linux'"
              >
                $329​
              </td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'one_year' && dm_os == 'linux'"
              >
                $3,290
              </td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'three_year' && dm_os == 'linux'"
              >
                $8,880
              </td>
              <td>
                <button class="btn primary-btn deploy-btn">Deploy</button>
              </td>
            </tr>
            <tr>
              <td>mcv.2xlarge​</td>
              <td>1,000 Users​</td>
              <td>16 vCPU​</td>
              <td>64 GB DDR4​</td>
              <td>200 GB NVMe​​</td>
              <td>10 Gbps​</td>
              <td>1</td>
              <td>50 TB​</td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'hourly' && dm_os == 'linux'"
              >
                $0.917
              </td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'monthly' && dm_os == 'linux'"
              >
                $629​
              </td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'one_year' && dm_os == 'linux'"
              >
                $6,290
              </td>
              <td
                class="price-tag"
                v-if="c_vpn_plan == 'three_year' && dm_os == 'linux'"
              >
                $16,980
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
    const c_vpn_plan = ref("monthly");
    const dm_os = ref("linux");

    return { c_vpn_plan, dm_os };
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
