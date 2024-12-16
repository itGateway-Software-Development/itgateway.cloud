<template>
  <div class="flex-software content-wrapper">
    <div class="d-flex gap-3 align-items-center">
      <div class="col-12 col-md-6 col-xl-6">
        <div class="flex-img">
          <img
            :src="require('@/assets/images/workspace/flexconnect/1.png')"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-6">
        <div class="header-section">
          <h2 class="section-header">FlexConnect</h2>
          <h3 class="sub-section-header">Remote Desktop Software</h3>
          <p>
            Cloud-based remote desktop management software enable
            secure,seamless acccess to contorl od remote desktops form anywhere.
          </p>
        </div>
      </div>
    </div>
    <div class="feature-card-group">
      <div class="d-flex justify-content-center gap-5 flex-wrap">
        <div class="feature-card">
          <div class="card-header">
            <h4>Manageability Features</h4>
          </div>
          <div class="card-body">
            <div
              v-for="(item, index) in manageFeature"
              :key="index"
              class="flex-item"
            >
              <div class="d-flex align-items-center gap-2">
                <img
                  :src="require('@/assets/images/partner/done.png')"
                  alt=""
                />
                <div>
                  <p>{{ item.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <div class="card-header">
            <h4>Security Features</h4>
          </div>
          <div class="card-body">
            <div
              v-for="(item, index) in securityFeature"
              :key="index"
              class="flex-item"
            >
              <div class="d-flex align-items-center gap-2">
                <img
                  :src="require('@/assets/images/partner/done.png')"
                  alt=""
                />
                <div>
                  <p>{{ item.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pricing-group">
      <div
        class="d-flex align-item-center gap-3 justify-content-center button-group"
      >
        <div class="contorl">
          <button
            class="btn price-button"
            :class="{ active: priceList == 'standard' }"
            @click="changePriceList('standard')"
          >
            Standard
          </button>
        </div>
        <div class="contorl">
          <button
            class="btn price-button"
            :class="{ active: priceList == 'professional' }"
            @click="changePriceList('professional')"
          >
            Professional
          </button>
        </div>
        <div class="contorl">
          <button
            class="btn price-button"
            :class="{ active: priceList == 'enterprise' }"
            @click="changePriceList('enterprise')"
          >
            Enterprise
          </button>
        </div>
      </div>
      <div class="price-detail">
        <div v-if="priceList == 'standard'">
          <Flexprice :data="standard"></Flexprice>
        </div>
        <div v-if="priceList == 'professional'">
          <Flexprice :data="professional"></Flexprice>
        </div>
        <div v-if="priceList == 'enterprise'">
          <Flexprice :data="enterprise"></Flexprice>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flexprice from "./flexpricing/Flexprice";
import { ref } from "vue";
export default {
  components: { Flexprice },
  setup() {
    const manageFeature = ref([
      {
        name: "Remote Desktop & Terminal",
      },
      {
        name: "Real Time Inter-Connection",
      },
      {
        name: "Remote File Access",
      },
      {
        name: "Power State Monitor & Control",
      },
      {
        name: "Port Forwarding",
      },
      {
        name: "Multi-User Access",
      },
      {
        name: "Activity Logs",
      },
      {
        name: "Session Recording",
      },
      {
        name: "Muiti-OS Supports",
      },
      {
        name: "(Windows/Linux/Mac OS)",
      },
    ]);

    const securityFeature = ref([
      {
        name: "Two Factor Authentication",
      },
      {
        name: "Let's Encrypt SSL Certificate",
      },
      {
        name: "Use of TLS 1.3",
      },
      {
        name: "IP Address Token Binding",
      },
      {
        name: "Support Reverse Proxy",
      },
      {
        name: "HashiCorp Vault Support",
      },
      {
        name: "Strong Password Encryption",
      },
      {
        name: "Database Record Encryption",
      },
      {
        name: "FIDO2 Supports",
      },
      {
        name: "(Bluetooth, USB and NFC Devices)",
      },
    ]);

    const priceList = ref("standard");

    const changePriceList = (value) => {
      priceList.value = value;
    };

    const standard = ref({
      name: "standard",
      item1: "5 Concurrent Connections",
      item2: "3 Admin Users",
      item3: "10GB Storage",
      item4: "Up to 100 managed devices",
      item5: "8x5x365 technical supports",
      item6: "20~40 minutes response time",
      monthly: "29",
      yearly: "290",
    });
    const professional = ref({
      name: "Professional",
      item1: "10 Concurrent Connections",
      item2: "5 Admin Users",
      item3: "30GB Storage",
      item4: "Up to 500 managed devices",
      item5: "8x5x365 technical supports",
      item6: "15~30 minutes response time",
      monthly: "55",
      yearly: "550",
    });

    const enterprise = ref({
      name: "Enterprise",
      item1: "20 Concurrent Connections",
      item2: "10 Admin Users",
      item3: "100GB Storage",
      item4: "Up to 1000 managed devices",
      item5: "24x7x365 technical supports",
      item6: "5~15 minutes response time",
      monthly: "99",
      yearly: "990",
    });

    return {
      manageFeature,
      securityFeature,
      priceList,
      changePriceList,
      standard,
      professional,
      enterprise,
    };
  },
};
</script>

<style scoped>
.flex-software {
  margin-top: 120px;
}

.sub-section-header {
  font-weight: bold;
  color: rgb(236, 209, 51);
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.05);
}

.header-section p {
  font-size: 20px !important;
}

.feature-card-group {
  margin: 50px auto;
}

.feature-card {
  border: 1px solid #ec6316;
  padding: 20px;
  height: 100%;
  border-radius: 10px;
  width: 350px;
}

.card-header h4 {
  font-weight: bold;
  color: #43a047;
}

.feature-card p {
  margin-bottom: 2px !important;
  font-size: 20px !important;
}

.feature-card img {
  width: 20px;
}

.flex-item:last-child img {
  opacity: 0;
}

.price-button {
  width: 200px;
  font-size: 24px;
  border: 1px solid #ec6316;
  font-weight: bold;
  background: #ffffff;
}

.button-group {
  z-index: 10;
}

.control {
  width: 100%;
}

.price-button.active {
  background: #ec6316;
  color: #ffffff;
}

.price-detail {
  width: 800px;
  height: 100%;
  border: 1px solid #ec6316;
  margin: 0px auto;
  margin-top: -10px;
  z-index: 0;
  border-radius: 10px;
  padding: 20px;
}
</style>
