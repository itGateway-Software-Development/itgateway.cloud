<template>
    <div class="content-wrapper success-story-wrapper">
        <div class="stories">
            <div class="row">
                <div class="col mx-auto">
                    <div class="grid-wrapper">
                        <div class="grid-item" v-for="(story, index) in stories" :key="index" data-aos="flip-left">
                            <div class="d-flex flex-column justify-content-center align-items-center align-items-md-start">
                                <span :style="{color: story.color}">{{story.data}}</span>
                                <p>{{story.title}}</p>
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
                    data: '50+',
                    title: 'Active Customers',
                    color: '#00b050',
                },
                {
                    data: '100+',
                    title: 'Active Projects',
                    color: '#00b0f0',
                },
                {
                    data: '80%',
                    title: 'Bulding with Young Talent',
                    color: '#ff7000',
                },
                {
                    data: '3+',
                    title: 'Regions for itGateway Cloud',
                    color: '#f00',
                },
                {
                    data: '>10',
                    title: 'Managed Cloud Services',
                    color: '#00b050',
                },
                {
                    data: '>5',
                    title: 'Managed IT Services',
                    color: '#00b0f0',
                },
                {
                    data: '10+',
                    title: 'Web Development Projects',
                    color: '#ff7000',
                },
                {
                    data: '>1',
                    title: 'Research & Development Center',
                    color: '#f00',
                },
            ];

            return {stories}
        }
    }
</script>

<style scoped>
    .success-story-wrapper {
        margin-top: 60px;
    }

    .stories {
        margin-top: 60px;
    }

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
        font-size: 20px;
    }
</style>
