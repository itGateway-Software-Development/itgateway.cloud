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
    <div class="col-6 col-xl-4 mb-5" v-for="(item, i) in items" :key="i">
      <div class="solution-card shadow">
        <router-link :to="item.link" class="menu-route">
          <h6>
            {{ item.prefix }} <b>{{ item.name }}</b>
          </h6>
          <p class="mt-3">
            {{ item.description }}
          </p></router-link
        >
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
        name: "Virtual Machine​",
        description: "Flexible and secure cloud VM using shared resources.​",
        link: "/products/compute/evm",
      },
      {
        prefix: "Elastic",
        name: "Dedicate Machine​",
        description:
          "FlexOptimize performance with dedicate resource VM in the cloud.​​",
        link: "/products/compute/edm",
      },
      {
        prefix: "Elastic",
        name: "Bare-Metal Server​",
        description:
          "Deploy and manage physical server infrastructure within an hour.​​",
        link: "/products/compute/baremetal",
      },
      {
        prefix: "Elastic",
        name: "Database Instance​",
        description:
          "Fully managed and enterprise grade Relational Database Services​",
        link: "/",
      },
      {
        prefix: "Elastic",
        name: "Container Instance​",
        description:
          "Deploy a reliable and scalable container instance rapidly.​​",
        link: "/",
      },
      {
        prefix: "Elastic",
        name: "Object Storage​",
        description:
          "Secure, durable and scalable object storage with cost saving.​​",
        link: "products/storage/eos",
      },
      {
        prefix: "Elastic",
        name: "File Storage​",
        description: "Fully managed and high performance file level storage.​​",
        link: "/products/storage/efs",
      },
      {
        prefix: "Elastic",
        name: "Web Instance​",
        description: "Build and create website & web app with low-cost.​",
        link: "/products/web/webhosting",
      },
      {
        prefix: "Elastic",
        name: "Virtual Network​",
        description:
          "Create isolated virtual networks in the cloud for your resources.​​",
        link: "/products/web/webhosting",
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

.solution-card:hover .menu-route h6 {
  color: #ec6316;
}

.solution-card:hover .menu-route p {
  color: #ec6316;
}

.menu-route h6,
.menu-route p {
  transition: 0.3s ease;
}

.menu-route:hover h6,
.menu-route:hover p {
  color: #ec6316;
}
</style>
