<template>
    <div class="price-item" style="margin-top: 60px;">
        <div class="d-flex gap-3 plan-btn">
            <button class="btn primary-btn" :class="{active: fs_plan == 'hourly'}" @click="fs_plan = 'hourly'">Hourly</button>
            <button class="btn primary-btn" :class="{active: fs_plan == 'monthly'}" @click="fs_plan = 'monthly'">Monthly</button>
            <button class="btn primary-btn" :class="{active: fs_plan == 'one_year'}" @click="fs_plan = 'one_year'">1 Year</button>
            <button class="btn primary-btn" :class="{active: fs_plan == 'three_year'}" @click="fs_plan = 'three_year'">3 Year</button>
        </div>
        <div class="plan-detail-mobile shadow">
            <div class="d-flex">
                <h4>Elastic ​</h4>
                <h4 class="fw-bold">File Servers </h4>
            </div>
            <p>Cloud based NAS server provides distributed file services such as file sharing, permission, encryption, sync and data migration. Access your data rapidly from anywhere and at anytime.​​​</p>
        
            <div class="plan-mobile-detail">
                <div class="plan-detail-card" :class="{active: active_card == 'card14'}" >
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card14')" data-bs-target="#collapseExample13">
                        <div class="col-6">efs.mini​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span v-if="fs_plan=='hourly'">$0.042/Hour</span>
                                <span v-if="fs_plan=='monthly'">$29/Month​</span>
                                <span v-if="fs_plan=='one_year'">$299</span>
                                <span v-if="fs_plan=='three_year'">$897</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample13">
                        <div class="row">
                            <div class="col-6">Max User</div>
                            <div class="col-6 text-end">20 Users​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">CPU</div>
                            <div class="col-6 text-end">2 vCPU</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">RAM</div>
                            <div class="col-6 text-end">2 GB DDR4</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Storage</div>
                            <div class="col-6 text-end">300 GB SSD​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">1 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">2 TB/Month</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6">Cloud Backup</div>
                            <div class="col-6 text-end">300 GB​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card15'}" >
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card15')" data-bs-target="#collapseExample12">
                        <div class="col-6">efs.small​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span v-if="fs_plan=='hourly'">$0.086/Hour</span>
                                <span v-if="fs_plan=='monthly'">$59/Month​</span>
                                <span v-if="fs_plan=='one_year'">$590</span>
                                <span v-if="fs_plan=='three_year'">$1,770</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample12">
                        <div class="row">
                            <div class="col-6">Max User</div>
                            <div class="col-6 text-end">50 Users​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">CPU</div>
                            <div class="col-6 text-end">2 vCPU</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">RAM</div>
                            <div class="col-6 text-end">4 GB DDR4</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Storage</div>
                            <div class="col-6 text-end">500 GB SSD​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">1 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">2 TB/Month</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6">Cloud Backup</div>
                            <div class="col-6 text-end">500 GB​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card16'}" >
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card16')" data-bs-target="#collapseExample15">
                        <div class="col-6">efs.medium​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span v-if="fs_plan=='hourly' && fs_os=='linux'">$0.175/Hour</span>
                                <span v-if="fs_plan=='monthly' && fs_os=='linux'">$120/Month​</span>
                                <span v-if="fs_plan=='one_year' && fs_os=='linux'">$1,200</span>
                                <span v-if="fs_plan=='three_year' && fs_os=='linux'">$3,600</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample15">
                        <div class="row">
                            <div class="col-6">Max User</div>
                            <div class="col-6 text-end">100 Users​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">CPU</div>
                            <div class="col-6 text-end">4 vCPU</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">RAM</div>
                            <div class="col-6 text-end">8 GB DDR4</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Storage</div>
                            <div class="col-6 text-end">1 TB SSD​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">1 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">2 TB/Month</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6">Cloud Backup</div>
                            <div class="col-6 text-end">1 TB</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card17'}" >
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card17')" data-bs-target="#collapseExample16">
                        <div class="col-6">efs.large​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span v-if="fs_plan=='hourly' && fs_os=='linux'">$0.247/Hour</span>
                                <span v-if="fs_plan=='monthly' && fs_os=='linux'">$169/Month​</span>
                                <span v-if="fs_plan=='one_year' && fs_os=='linux'">$1,690</span>
                                <span v-if="fs_plan=='three_year' && fs_os=='linux'">$5,070</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample16">
                        <div class="row">
                            <div class="col-6">Max User</div>
                            <div class="col-6 text-end">200 Users​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">CPU</div>
                            <div class="col-6 text-end">4 vCPU</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">RAM</div>
                            <div class="col-6 text-end">16 GB DDR4</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Storage</div>
                            <div class="col-6 text-end">2 TB SSD​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">5 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">3 TB/Month</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6">Cloud Backup</div>
                            <div class="col-6 text-end">2 TB</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card18'}" >
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card18')" data-bs-target="#collapseExample17">
                        <div class="col-6">efs.xlarge​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span v-if="fs_plan=='hourly' && fs_os=='linux'">$0.481/Hour</span>
                                <span v-if="fs_plan=='monthly' && fs_os=='linux'">$329/Month​</span>
                                <span v-if="fs_plan=='one_year' && fs_os=='linux'">$3,290</span>
                                <span v-if="fs_plan=='three_year' && fs_os=='linux'">$9,870</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample17">
                        <div class="row">
                            <div class="col-6">Max User</div>
                            <div class="col-6 text-end">500 Users​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">CPU</div>
                            <div class="col-6 text-end">8 vCPU</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">RAM</div>
                            <div class="col-6 text-end">32 GB DDR4</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Storage</div>
                            <div class="col-6 text-end">4 TB SSD​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">5 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">6 TB/Month</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6">Cloud Backup</div>
                            <div class="col-6 text-end">4 TB</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card19'}" >
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card19')" data-bs-target="#collapseExample18">
                        <div class="col-6">efs.2xlarge​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span v-if="fs_plan=='hourly' && fs_os=='linux'">$0.917/Hour</span>
                                <span v-if="fs_plan=='monthly' && fs_os=='linux'">$629/Month​</span>
                                <span v-if="fs_plan=='one_year' && fs_os=='linux'">$6,290</span>
                                <span v-if="fs_plan=='three_year' && fs_os=='linux'">$18,870</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample18">
                        <div class="row">
                            <div class="col-6">Max User</div>
                            <div class="col-6 text-end">1,000 Users​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">CPU</div>
                            <div class="col-6 text-end">16 vCPU</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">RAM</div>
                            <div class="col-6 text-end">64 GB DDR4</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Storage</div>
                            <div class="col-6 text-end">8 TB SSD​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">10 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">10 TB/Month</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6">Cloud Backup</div>
                            <div class="col-6 text-end">8 TB</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        setup() {
            const fs_plan = ref('monthly');
            const fs_os = ref('linux');
            const active_card = ref(false);

            const toggleActiveCard = (card) => {
                if(active_card.value === card) {
                    active_card.value = null;
                } else {
                    active_card.value = card;
                }
            }

            return {fs_plan, fs_os, active_card, toggleActiveCard}
        }
    }
</script>

