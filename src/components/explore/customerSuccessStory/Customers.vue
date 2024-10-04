<template>
  <div class="customer-success content-wrapper">
    <div class="d-flex justify-content-between">
      <h2 class="fw-bold">Featured Stories​</h2>
      <div class="search d-flex align-items-center">
        <input type="text" placeholder="Search our customers" />
        <span
          class="material-symbols-outlined cursor-pointer search-icon prevent-select"
        >
          search
        </span>
      </div>
    </div>

    <div class="customer-success-wrapper">
      <div
        class="customer-success-card p-5 shadow"
        v-for="(customer, i) in customers"
        :key="i"
      >
        <router-link :to="customer.link">
          <img :src="customer.img" alt="" />
          <h2>{{ customer.title }}</h2>
          <h3>{{ customer.type }}</h3>
          <p>
            {{ customer.desc }}
          </p>
          <div class="readmore">
            <router-link to="#" class="d-flex align-items-center gap-2">
              <span>View Customer</span>
              <span class="material-symbols-outlined mt-1 ms-1"
                >arrow_right_alt</span
              >
            </router-link>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const customers = [
      {
        img: require("@/assets/images/customers/22.jpg"),
        title: "Living 9",
        type: "Retailers",
        desc: "Running ERP and POS software on Cloud to provide their retail shop .​",
        link: "#",
      },
      {
        img: require("@/assets/images/customers/25.jpg"),
        title: "Snoopy Mobile​",
        type: "Distribution​",
        desc: "Running ERP and POS software on Cloud to provide their smartphone showroom. ​​",
        link: "#",
      },
      {
        img: require("@/assets/images/customers/3.jpg"),
        title: "Amigos International​​",
        type: "Engineering",
        desc: "Building ERP System and Digital Workspaces on Cloud to manage business process.​​​",
        link: "https://www.amigosmyanmar.com/index.php/en/",
      },
      {
        img: require("@/assets/images/customers/3.png"),
        title: "Hitachi Soe​​​",
        type: "Manufacturing",
        desc: "Using Private Cloud and DC/DR deployment for the Backup, Replication and Disaster Recovery.​​​​",
        link: "https://www.hitachi-soeelectric.com/",
      },
      {
        img: require("@/assets/images/customers/16.jpg"),
        title: "AKT Holdings​​",
        type: "Distribution",
        desc: "Running ERP and POS software on the Cloud to distribute their car engine oil products.​​​​​",
        link: "https://www.aktdistribution.com/",
      },
      {
        img: require("@/assets/images/customers/13.jpg"),
        title: "KIA Union Group​​",
        type: "Automobile",
        desc: "Running ERP and POS software on the Cloud to provide sale system for Automobile Showroom.​​",
        link: "#",
      },
      {
        img: require("@/assets/images/customers/24.jpg"),
        title: "K Mart​​​",
        type: "Retailers",
        desc: "Running ERP and POS software on the Cloud to provide their retail shop .​​",
        link: "#",
      },
      {
        img: require("@/assets/images/customers/19.jpg"),
        title: "Unity Source​​​​",
        type: "Software Development​",
        desc: "Hosting HR application on the Cloud to provide the HR Management and Solutions.​​​",
        link: "#",
      },
      {
        img: require("@/assets/images/customers/26.jpg"),
        title: "Annam Group​​",
        type: "Distribution​",
        desc: "Running ERP and POS software on the Cloud to distribute their food & beverage products.​​​​",
        link: "https://annam-group.com/",
      },
      {
        img: require("@/assets/images/customers/18.jpg"),
        title: "Sun Mobile​​​",
        type: "Distribution",
        desc: "Running ERP and POS software on Cloud to provide their retail shop .​​​​​",
        link: "#",
      },
      {
        img: require("@/assets/images/customers/gandamar.png"),
        title: "Gandamar Shwe Pyi​​​​",
        type: "Logistics",
        desc: "Manage their logistic system by hosting the ERP system on the Cloud to transform quickly.​​​​​​",
        link: "https://www.gandamarsp.com/",
      },
      {
        img: require("@/assets/images/customers/28.jpg"),
        title: "Lin Min Thu​​​​​",
        type: "Healthcare",
        desc: "Running ERP and POS software on the Cloud to provide their distributing channels.​​",
        link: "#",
      },
      {
        img: require("@/assets/images/customers/12.png"),
        title: "Baymakha Chain​​",
        type: "Retailers",
        desc: "Running ERP and POS software on Cloud to provide their retail shop .​​​",
        link: "#",
      },
      {
        img: require("@/assets/images/customers/29.png"),
        title: "Radiance Software​​​",
        type: "Software Development​",
        desc: "Hosting their software on the Cloud to test, develop and provide for the end users.​​",
        link: "#",
      },
      {
        img: require("@/assets/images/customers/23.jpg"),
        title: "Makro Myanmar​​",
        type: "Retailers​",
        desc: "Using Cloud Backup system to protect many failure for their data and user information.​​​",
        link: "https://www.makromyanmar.com/",
      },
      {
        img: require("@/assets/images/customers/13.png"),
        title: "Kinetic Myanmar​​​",
        type: "Telecommunication​",
        desc: "Migrating the Server and VM from On-Premises to the Cloud for upgrading their Datacenter.​​",
        link: "https://www.worldwidemyanmar.com/wwm-portfolio/kinetic-myanmar/",
      },
      {
        img: require("@/assets/images/customers/31.jpg"),
        title: "ICICLE​​​",
        type: "Food Industrial​",
        desc: "Running ERP and POS software on the Cloud to distribute their food & beverage products.​​",
        link: "https://www.iciclegroupofcompanies.com/",
      },
      {
        img: require("@/assets/images/customers/32.jpg"),
        title: "Myanmar May Kaung​​​",
        type: "Manufacturing​",
        desc: "Running ERP and POS software on the Cloud to distribute their furniture products.​​",
        link: "https://www.iciclegroupofcompanies.com/",
      },
    ];

    return { customers };
  },
};
</script>

<style scoped>
.customer-success {
  margin-top: 60px;
}

.customer-success .search input {
  border: 1px solid gray;
  border-right: transparent;
  padding: 7px 20px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  color: var(--font-mute-dark);
  width: 300px;
}

.customer-success .search input:focus {
  outline: none;
}

.customer-success .search .search-icon {
  border: 1px solid gray;
  border-left: transparent;
  padding: 7px 20px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}

.customer-success .customer-success-wrapper {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  margin-top: 40px;
}

.customer-success .customer-success-card {
  background: var(--card-background-color);
  position: relative;
  transition: 0.2s ease;
}

.customer-success .customer-success-card h2 {
  font-weight: bold;
  margin: 20px 0px;
  font-size: 22px;
}

.customer-success .customer-success-card h3 {
  font-size: 17px;
  color: #ec6316;
  font-weight: bold;
}

.customer-success .customer-success-card img {
  width: 80px;
  background: #fff;
}

.customer-success .customer-success-card p {
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.customer-success .customer-success-card .readmore {
  position: absolute;
  bottom: 15px;
  overflow: hidden;
}

.customer-success .customer-success-card a {
  transform: translateX(-110px);
  transition: 0.5s ease;
}

.customer-success .customer-success-card:hover {
  transform: translateY(-6px);
}

.customer-success .customer-success-card:hover .readmore a {
  transform: translateX(0);
  color: #ec6316 !important;
}
</style>
