<template>
    <div class="content-wrapper solutions">
        <h1 class="section-header">itGateway Cloud Solutions</h1>
        <div class="solution-section gap-5 mt-5 ">
            <div class="solution-menu">
                <div class="solution-wrapper">
                    <ul>
                        <li :class="{'active' : currentSolution == 'most_demand'}" @click="currentSolution = 'most_demand'">Most Demand</li>
                        <li :class="{'active' : currentSolution == 'cloud_migration'}" @click="currentSolution = 'cloud_migration'">Cloud Migration​</li>
                        <li :class="{'active' : currentSolution == 'container'}" @click="currentSolution = 'container'">Elastic Containers​</li>
                        <li :class="{'active' : currentSolution == 'elastic_computing'}" @click="currentSolution = 'elastic_computing'">Elastic Computing​</li>
                        <li :class="{'active' : currentSolution == 'elastic_networking'}" @click="currentSolution = 'elastic_networking'">Elastic Networking​</li>
                        <li :class="{'active' : currentSolution == 'elastic_storage'}" @click="currentSolution = 'elastic_storage'">Elastic Storage​</li>
                        <li :class="{'active' : currentSolution == 'web_development'}" @click="currentSolution = 'web_development'">Web Development​</li>
                        <li :class="{'active' : currentSolution == 'database'}" @click="currentSolution = 'database'">Elastic Databases​</li>
                        <li :class="{'active' : currentSolution == 'data_protection'}" @click="currentSolution = 'data_protection'">Data Protection​</li>
                        <li :class="{'active' : currentSolution == 'cloud_security'}" @click="currentSolution = 'cloud_security'">Cloud Security</li>
                        <li :class="{'active' : currentSolution == 'workspace'}" @click="currentSolution = 'workspace'">Workspaces​</li>
                    </ul>
                </div>
            </div>
            <!-- menu for mobile size  -->
            <div class="solution-menu-mobile">
                <select name="" id="" class="form-select" v-model="currentSolution">
                    <option value="most_demand">Most Demand</option>
                    <option value="cloud_migration">Cloud Migration​</option>
                    <option value="container">Containers​</option>
                    <option value="elastic_computing">Elastic Computing​</option>
                    <option value="elastic_networking">Elastic Networking​</option>
                    <option value="elastic_storage">Elastic Storage​</option>
                    <option value="web_development">Web Development​</option>
                    <option value="app_development">App Development​</option>
                    <option value="database">Databases​</option>
                    <option value="data_protection">Data Protection​</option>
                    <option value="cloud_security">Cloud Security</option>
                    <option value="workspace">Workspaces​</option>
                </select>
            </div>
            <div class="solution-content">
                <MostDemand v-if="currentSolution == 'most_demand'" />
                <CloudMigration v-if="currentSolution == 'cloud_migration'" />
                <ElasticContainer v-if="currentSolution == 'container'" />
                <ElasticComputing v-if="currentSolution == 'elastic_computing'" />
                <ElasticNetworking v-if="currentSolution == 'elastic_networking'" />
                <ElasticStorage v-if="currentSolution == 'elastic_storage'" />
                <WebDevelopment v-if="currentSolution == 'web_development'" />
                <ElasticDatabase v-if="currentSolution == 'database'" />
                <DataProtection v-if="currentSolution == 'data_protection'" />
                <CloudSecurity v-if="currentSolution == 'cloud_security'" />
                <WorkSpace v-if="currentSolution == 'workspace'" />
            </div>
        </div>
    </div>
</template>

<script>
import WorkSpace from './solutions/WorkSpace'
import CloudSecurity from './solutions/CloudSecurity'
import DataProtection from './solutions/DataProtection'
import ElasticDatabase from './solutions/ElasticDatabase'
import WebDevelopment from './solutions/WebDevelopment'
import ElasticStorage from './solutions/ElasticStorage'
import ElasticNetworking from './solutions/ElasticNetworking'
import ElasticComputing from './solutions/ElasticComputing'
import ElasticContainer from './solutions/ElasticContainer'
import CloudMigration from './solutions/CloudMigration'
import MostDemand from './solutions/MostDemand'
import { ref } from 'vue'
    export default {
  components: {
    WorkSpace,
    CloudSecurity,
    DataProtection,
    ElasticDatabase,
    WebDevelopment,
    ElasticStorage,
    ElasticNetworking,
    ElasticComputing,
    ElasticContainer,
    CloudMigration, MostDemand },
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

    .solutions .solution-section {
        display: flex;
        gap: 48px;
    }

    .solutions .solution-menu {
        width: 20%;
    }

    .solutions .solution-menu-mobile {
        display: none;
    }

    .solutions .solution-content {
        width: 80%;
    }

    .solutions ul li {
        list-style: none;
        padding: 5px 15px;
        position: relative;
        cursor: pointer;
        height:40px;
        color: var(--font-mute-dark);
    }

    .solutions ul li.active {
        color: #ff9901;
        font-weight: bold;
    }
    .solutions ul li::before {
        content: '';
        position: absolute;
        top: 0;
        left: -30px;
        width: 3px;
        height:40px;
        background: #e7e2e2;
    }

    .solutions ul li.active::before {
        content: '';
        position: absolute;
        top: 0;
        left: -30px;
        width: 3px;
        height:40px;
        background: #ff9901;
    }

    .solution-card {
        height: 127px;
    }

    .solution-card h6 {
        font-size: 19px;
    }

    .solution-card h6 b {
        font-size: 19px;
    }

    @media (max-width: 1500px) {
        .solution-card {
            height: 150px;
        }
    }

    @media (max-width: 1200px) {
        .solution-card {
            height: 130px;
        }
    }

    @media (max-width: 1235px) {
        .solutions .solution-menu {
            width: 25%;
        }
    
        .solutions .solution-content {
            width: 75%;
        }
    }

    @media (max-width: 800px) {
        .solutions .solution-menu {
            width: 28%;
        }
    
        .solutions .solution-content {
            width: 72%;
        }
    }

    @media (max-width: 768px) {

        .solutions .solution-section {
            flex-direction: column;
            gap: 10px !important;
        }

        .solutions .solution-menu {
            display: none;
        }

        .solutions .solution-menu-mobile {
            display: block;
            width: 100%;
            margin-bottom: 30px;
        }

        .solutions .solution-menu-mobile select {
            background-color: var(--sec-background-color);
            color: var(--font-color);
            padding: 10px 20px;
        }
    
        .solutions .solution-content {
            width: 100%;
        }
    }

    @media (max-width: 450px) {
        .solutions .solution-card {
            height: 180px;
        }
    }
    
</style>
