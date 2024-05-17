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
                    prefix: "Workspace",
                    name: "Migration​",
                    description : "Migrate your digital workspace easily and securely​.​"
                },
                {
                    prefix: "Server",
                    name: "Migration​​",
                    description : "Migrate your server in real-time to the Cloud​.​​"
                },
                {
                    prefix: "Platform",
                    name: "Migration​​",
                    description : "Migrate your application to the cloud​.​​"
                },
                {
                    prefix: "Data",
                    name: "Migration​​",
                    description : "Migrate your data to the cloud faster and secure​."
                },
                {
                    prefix: "Bare-Metal",
                    name: "Migration​​",
                    description : "Migrate to build your server infrastructure​.​​"
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
