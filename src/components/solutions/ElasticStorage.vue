<template>
    <p>Discover the right solution for your needs and achieve digital transformation in your business.​</p>
    <div class="d-flex align-items-center gap-3 mb-5">
        <button class="btn primary-btn d-flex gap-2 align-items-center fill">Contact Sales</button>
        <button class="btn primary-btn d-flex gap-2 align-items-center">Get Started</button>
    </div>
    <div class="row solution-card-row">
        <div class="col-6 col-xl-4 mb-3" v-for="(item,i) in items" :key="i">
            <div class="solution-card shadow">
                <h6>{{item.prefix}} <b>{{item.name}}</b></h6>
                <p class="text-justify mt-3">
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        setup() {
            const items =[
                {
                    prefix: "Elastic​",
                    name: "Object Storage (EOS)​​",
                    description : "Flexible and secure cloud VM using shared resources.​​"
                },
                {
                    prefix: "Elastic",
                    name: "File Storage (EFS)​​​",
                    description : "Optimize performance with dedicate resource VM in the cloud​.​​"
                },
                {
                    prefix: "Elastic",
                    name: "Block Storage (EBS)​​​",
                    description : "Deploy and manage physical server infrastructure within an hour.​​​​"
                },
                {
                    prefix: "Cloud",
                    name: "Backup​​",
                    description : "Fully managed and enterprise grade Relational Database Services​."
                },
                {
                    prefix: "Data​",
                    name: "Sync",
                    description : "Deploy a reliable and scalable container instance rapidly.​"
                },
                {
                    prefix: "Hybrid",
                    name: "Storage​​​",
                    description : "Secure, durable and scalable object storage with cost saving.​"
                },
            ];

            return {items}
        }
    }
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

@media (max-width: 1500px) {
    .solutions .solution-card {
        height: 150px;
    }
}

@media (max-width: 450px) {
    .solutions .solution-card {
        height: 180px;
    }
}
</style>
