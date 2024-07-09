<template>
    <div class="achievement content-wrapper">
        <!-- <img :src="require('@/assets/images/company/about_company/server.jpeg')" alt="" class="bg-img"> -->
        <div class="stories">
            <div class="bg-color"></div>
            <div class="row">
                <div class="col mx-auto">
                    <div class="grid-wrapper">
                        <div class="grid-item" v-for="(story, index) in stories" :key="index" data-aos="flip-left">
                            <div class="d-flex flex-column justify-content-center align-items-center align-items-md-start">
                                <span class="ms-5 mt-3" :style="{color: story.color}">{{story.data}}</span>
                                <p class="text-white ms-5 mt-3">{{story.title}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    setup() {
            const stories = [
                {
                    data: '3+',
                    title: 'Cloud Regions',
                    color: '#00b050',
                },
                {
                    data: '6+',
                    title: 'Availability Zones​',
                    color: '#00b0f0',
                },
                {
                    data: '80%',
                    title: 'Bulding with Young Talent',
                    color: '#ff7000',
                },
                {
                    data: '1+',
                    title: 'R&D Center​',
                    color: '#f00',
                },
                {
                    data: '>100',
                    title: 'Active Customers​',
                    color: '#00b050',
                },
                {
                    data: '20+',
                    title: 'Managed Cloud Services​',
                    color: '#00b0f0',
                },
                {
                    data: '50+',
                    title: 'Active Physical Servers​',
                    color: '#ff7000',
                },
                {
                    data: '10+',
                    title: 'Non-Profit Projects​',
                    color: '#f00',
                },
            ];

            return {stories}
        }
    }
</script>

<style scoped>
    .achievement {
        margin-top: 90px;
        position: relative;
    }
 
    .achievement .stories {
       background-image: url('@/assets/images/company/about_company/server.jpeg');
       background-size: cover;
       position: relative;
    }

    .achievement .stories .bg-color {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(56, 60, 102, 0.76)    }

    .grid-wrapper {
        display: grid;
        column-gap: 5rem;
        row-gap: 5rem;
        overflow: hidden;
        grid-template-columns: repeat(auto-fill, minmax(250px , 1fr));
    }

    .grid-wrapper .grid-item {
        position: relative;
    }

    .grid-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% + 5rem / 2);
        height: calc(100% + 5rem / 2);
        background-image: linear-gradient(to right,#cccccb 0%, #cccccb calc(100% - 5rem / 2)), linear-gradient(to bottom, #cccccb 0%, #cccccb calc(100% - 5rem / 2));
        background-position: bottom left, top right;
        background-repeat: no-repeat, no-repeat, no-repeat;
        background-size: calc(100% - 5rem / 2) 1px, 1px calc(100% - 5rem / 2);
        z-index: 0;
    }

    .grid-item::after {
        content: '';
        position: absolute;
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        background: #cccccb;
        top: calc(100% - .5rem / 2 + 5rem / 2);
        left: calc(100% - .5rem / 2 + 5rem / 2);
    }

    .grid-item span {
        font-size: 4rem;
        font-weight: 800;
    }
 
    .grid-item p {
        font-size: 22px;
    }
</style>
