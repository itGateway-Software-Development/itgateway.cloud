<template>
    <div class="content-wrapper solutions">
        <h1 class="section-header">itGateway Cloud Solutions</h1>
        <div class="row mt-5 ">
            <div class="col-2 ">
                <div class="solution-wrapper">
                    <ul>
                        <li :class="{'active' : currentSolution == 'most_demand'}" @click="currentSolution = 'most_demand'">Most Demand</li>
                        <li :class="{'active' : currentSolution == 'cloud_migration'}" @click="currentSolution = 'cloud_migration'">Cloud Migration​</li>
                        <li :class="{'active' : currentSolution == 'container'}" @click="currentSolution = 'container'">Containers​</li>
                        <li :class="{'active' : currentSolution == 'elastic_computing'}" @click="currentSolution = 'elastic_computing'">Elastic Computing​</li>
                        <li :class="{'active' : currentSolution == 'elastic_networking'}" @click="currentSolution = 'elastic_networking'">Elastic Networking​</li>
                        <li :class="{'active' : currentSolution == 'elastic_storage'}" @click="currentSolution = 'elastic_storage'">Elastic Storage​</li>
                        <li :class="{'active' : currentSolution == 'web_development'}" @click="currentSolution = 'web_development'">Web Development​</li>
                        <li :class="{'active' : currentSolution == 'app_development'}" @click="currentSolution = 'app_development'">App Development​</li>
                        <li :class="{'active' : currentSolution == 'database'}" @click="currentSolution = 'database'">Databases​</li>
                        <li :class="{'active' : currentSolution == 'data_protection'}" @click="currentSolution = 'data_protection'">Data Protection​</li>
                        <li :class="{'active' : currentSolution == 'cloud_security'}" @click="currentSolution = 'cloud_security'">Cloud Security​</li>
                        <li :class="{'active' : currentSolution == 'workspace'}" @click="currentSolution = 'workspace'">Workspaces​</li>
                    </ul>
                </div>
            </div>
            <div class="col-9 offset-1">
                <MostDemand v-if="currentSolution == 'most_demand'" />
                <h3 v-else class="text-center">Comming Soon</h3>
            </div>
        </div>
    </div>
</template>

<script>
import MostDemand from './solutions/MostDemand'
import { ref } from 'vue'
    export default {
  components: { MostDemand },
        setup() {
            const currentSolution = ref('most_demand')

            return {currentSolution}
        }
    }
</script>

<style>
    .solutions {
        margin-top: 90px;
    }

    .solutions ul li {
        list-style: none;
        padding: 5px 15px;
        position: relative;
        cursor: pointer;
    }

    .solutions ul li.active {
        color: var(--sec-main-color);
    }
    .solutions ul li::before {
        content: '';
        position: absolute;
        top: 0;
        left: -30px;
        width: 3px;
        height: 35px;
        background: #e7e2e2;
    }

    .solutions ul li.active::before {
        content: '';
        position: absolute;
        top: 0;
        left: -30px;
        width: 3px;
        height: 35px;
        background: var(--sec-main-color);
    }

    
</style>
