<template>
  <div class="flex-price">
    <div class="d-flex align-items-center gap-5">
      <div class="plan-group">
        <div class="plan-header">
          <h2 class="section-header">{{ plan.name }}</h2>
        </div>
        <div class="plan-content">
          <ul>
            <li>{{ plan.item1 }}</li>
            <li>{{ plan.item2 }}</li>
            <li>{{ plan.item3 }}</li>
            <li>{{ plan.item4 }}</li>
            <li>{{ plan.item5 }}</li>
            <li>{{ plan.item6 }}</li>
          </ul>
        </div>
      </div>
      <div class="price-group">
        <h2 class="section-header price">${{ plan.monthly }} /Month</h2>
        <h2 class="section-header price">${{ plan.yearly }} /Year</h2>
        <div class="button">
          <button class="primary-btn contact-btn">Contact us</button>
        </div>
      </div>
    </div>
    <div class="custom text-center">
      <h5>More Customization</h5>
      <p class="color-text">
        Please Contact our solutions team to discuss for your business
        requirements!
      </p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: ["data"],
  setup(props) {
    const plan = ref(props.data);

    return {
      plan,
    };
  },
};
</script>

<style scoped>
.flex-price {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
}

.plan-content ul {
  padding: 0px 15px;
}

.plan-content ul li {
  font-size: 18px;
}

.plan-content ul li::marker {
  color: #ec6316;
}

.color-text {
  color: #ec6316;
}

.button {
  margin-top: 20px;
}

.contact-btn {
  width: 220px;
  padding: 5px 10px;
  font-weight: bold !important;
  font-size: 20px !important;
}

.custom {
  margin-top: 30px;
}

.custom h5 {
  font-weight: bold;
}
</style>
