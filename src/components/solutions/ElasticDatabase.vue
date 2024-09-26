<template>
  <p>
    Discover the right solution for your needs and achieve digital
    transformation in your business.​
  </p>
  <div class="d-flex align-items-center gap-3 mb-5">
    <button class="btn primary-btn d-flex gap-2 align-items-center fill">
      Contact Sales
    </button>
    <button class="btn primary-btn d-flex gap-2 align-items-center">
      Get Started
    </button>
  </div>
  <div class="row solution-card-row">
    <div class="col-6 col-xl-4 mb-3" v-for="(item, i) in items" :key="i">
      <div class="solution-card shadow">
        <h6>
          {{ item.prefix }} <b>{{ item.name }}</b>
        </h6>
        <p class="mt-3">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        prefix: "Elastic",
        name: "RDS",
        description: "Managed relational database services​.​",
      },
      {
        prefix: "Elastic",
        name: "Caching Services​",
        description: "In-Memory caching services​​.​​",
      },
      {
        prefix: "One​",
        name: "DB Migrate",
        description: "Migrate your databases in real-time",
      },
      {
        prefix: "Light​",
        name: "SpeedDB",
        description: "Managed NoSQL databases like MongoDB.",
      },
    ];

    return { items };
  },
};
</script>

<style scoped>
.solutions .solution-card-row {
  margin-top: 40px;
}

.solutions .solution-card {
  padding: 15px 20px;
  border-radius: 10px;
  background: var(--card-background-color);
}

.solutions .solution-card p {
  color: var(--font-mute-dark);
}

.solution-card {
  transition: 0.5s ease-in-out;
}

.solution-card:hover {
  box-shadow: 20px 30px #111111;
  transform: translateY(-10px);
}

.solution-card:hover h6 {
  color: #ec6316;
}

.solution-card:hover p {
  color: #ec6316;
}
</style>
