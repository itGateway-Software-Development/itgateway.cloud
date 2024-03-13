<template>
    <v-list>
        <v-list-item @click="changeRoute('/')">
        <div class="d-flex justify-content-between align-items-center">
            <div class="logo">
                <img :src="require('@/assets/images/logo.png')" alt="">
                <h5 class="mt-2">itGateway <br> Technology Group</h5>
              </div>
            <span class="material-symbols-outlined fs-1 text-white">
            close
            </span>
        </div>
        </v-list-item>
        <div style="width: 100%; height: 2px; background: #EC6316;"></div>
        <v-list-group value="Service Groups">
        <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" >{{$t("service-group")}}</v-list-item>
        </template>
        <v-list-item @click="changeRoute('#')">
            <v-list-item-title>Cloud Service</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Software Development</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Premium IT Solutions</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Engineering Solutions</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Manage Service</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>IT Trainings</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Cyber Security</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Application Services</v-list-item-title>
        </v-list-item>
        </v-list-group>

        <hr class="p-0 m-0" >

        <v-list-group value="Solutions">
        <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" >{{$t("solutions")}}</v-list-item>
        </template>
        <v-list-group value="Cloud">
            <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Cloud"></v-list-item>
            </template>

            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>itGateway Cloud</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Multi Cloud</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Manage Cloud Service</v-list-item-title>
            </v-list-item>
            <hr class="p-0 m-0" >
        </v-list-group>
        <v-list-group value="Software">
            <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Software"></v-list-item>
            </template>

            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Web Development</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Application Development</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Learning Management System</v-list-item-title>
            </v-list-item>
            <hr class="p-0 m-0" >
        </v-list-group>
        <v-list-group value="DataCenter">
            <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="DataCenter"></v-list-item>
            </template>

            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Virtualization</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>SD-WAN​</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>DC/DR Solutions​</v-list-item-title>
            </v-list-item>
            <hr class="p-0 m-0" >
        </v-list-group>
        <v-list-group value="Security">
            <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Security"></v-list-item>
            </template>

            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Cyber Security​</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Network Security​</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Endpoint Security​</v-list-item-title>
            </v-list-item>
            <hr class="p-0 m-0" >
        </v-list-group>
        <v-list-group value="Engineering">
            <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Engineering"></v-list-item>
            </template>

            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>IoT & Automation​</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Video Surveillance System​</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Access Control System​</v-list-item-title>
            </v-list-item>
            <hr class="p-0 m-0" >
        </v-list-group>
        <v-list-group value="Education">
            <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Education"></v-list-item>
            </template>

            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Cooperate Training​</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Online Training​</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>On-Class Training​</v-list-item-title>
            </v-list-item>
            <hr class="p-0 m-0" >
        </v-list-group>
        <v-list-group value="Outsourcing">
            <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Outsourcing"></v-list-item>
            </template>

            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Managed Services​</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>IT Outsource Services​</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Maintenance Services​</v-list-item-title>
            </v-list-item>
            <hr class="p-0 m-0" >
        </v-list-group>
        <v-list-group value="Licensing">
            <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Licensing"></v-list-item>
            </template>

            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Digital Platform License​</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Operating System License​</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Hardware Supports​</v-list-item-title>
            </v-list-item>
            <hr class="p-0 m-0" >
        </v-list-group>
        </v-list-group>

        <hr class="py-0 my-0" >

        <v-list-group value="Products">
        <template v-slot:activator="{ props }">
            <v-list-item v-bind="props">{{$t("products")}}</v-list-item>
        </template>

        <v-list-item @click="changeRoute('#')">
            <v-list-item-title>itGateway Cloud​</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>itGateway ERP​</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>itGateway POS​</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>itGateway LMS​</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Software Integration​</v-list-item-title>
        </v-list-item>
        </v-list-group>

        <hr class="py-0 my-0" >

        <v-list-group value="Blogs">
        <template v-slot:activator="{ props }">
            <v-list-item v-bind="props">{{$t("blogs")}}</v-list-item>
        </template>
        
        <v-list-item @click="changeRoute('#')">
            <v-list-item-title>DevOps​</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Cloud​</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Web Development​</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Project Management​</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Cyber Security​</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Networking​</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>System Administrator​</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Software Engineering​</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>IoT & Automation​</v-list-item-title>
        </v-list-item>
        <v-list-item @click="changeRoute('/#')">
            <v-list-item-title>Security & Access Control​</v-list-item-title>
        </v-list-item>
        </v-list-group>

        <hr class="py-0 my-0" >

        <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>{{ $t("partners") }}</v-list-item-title>
        </v-list-item>

        <hr class="py-0 my-0" >

        <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>{{ $t("event") }}</v-list-item-title>
        </v-list-item>
        
        <hr class="py-0 my-0" >

        <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>{{ $t("careers") }}</v-list-item-title>
        </v-list-item>
        
        <hr class="py-0 my-0" >

        <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>{{ $t("contact") }}</v-list-item-title>
        </v-list-item>
        
        <hr class="py-0 my-0" >

        <v-list-item @click="changeRoute('/#')">
        <v-list-item-title>{{ $t("about") }}</v-list-item-title>
        </v-list-item>
        
        <hr class="py-0 my-0" >

        <v-list-item @click="changeRoute('/#')">
        <v-list-item-title style="color: #EC6316;">Cutomer Portal</v-list-item-title>
        </v-list-item>
        
        <hr class="py-0 my-0" >

        <v-list-group value="Languages">
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" >{{ $t("language") }}</v-list-item>
            </template>

            <v-list-item class="active-lang" @click="changeLanguage('EN')">
                <div class="d-flex justify-content-between">
                <v-list-item-title>English</v-list-item-title>
                <span v-if="language == 'EN'" class="material-symbols-outlined" style="color: #EC6316;">
                    check_circle
                    </span>
                </div>
            </v-list-item>
            <v-list-item  @click="changeLanguage('MM')">
                <div class="d-flex justify-content-between">
                <v-list-item-title>Myanmar</v-list-item-title>
                <span v-if="language == 'MM'" class="material-symbols-outlined" style="color: #EC6316;">
                    check_circle
                    </span>
                </div>
            </v-list-item>
        </v-list-group>

        <hr class="py-0 my-0" >

    </v-list>
</template>

<script>
    export default {
        props: ['language'],
        setup(props, {emit}) {
            const changeRoute = (route) => emit('changeRoute', route);
            const changeLanguage = (lang) => emit('switchLanguage', lang);
            return {changeRoute, changeLanguage};
        }
    }
</script>

