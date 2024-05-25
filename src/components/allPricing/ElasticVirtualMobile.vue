<template>
    <div class="price-item">
        <div class="d-flex" style="padding-left: 30px;">
            <h4>Elastic ​</h4>
            <h4 class="fw-bold">Virtual Machine</h4>
        </div>
        <p style="padding-left: 30px;">Flexible and secure cloud VM using shared resources with cost saving option.​</p>

        <div class="plan-detail-mobile shadow">
            <div class="d-flex gap-3 plan-btn">
                <button class="btn primary-btn" :class="{active: vm_plan == 'hourly'}" @click="vm_plan = 'hourly'">Hourly</button>
                <button class="btn primary-btn" :class="{active: vm_plan == 'monthly'}" @click="vm_plan = 'monthly'">Monthly</button>
                <button class="btn primary-btn" :class="{active: vm_plan == 'one_year'}" @click="vm_plan = 'one_year'">1 Year</button>
                <button class="btn primary-btn" :class="{active: vm_plan == 'three_year'}" @click="vm_plan = 'three_year'">3 Year</button>
            </div>
            <div class="d-flex gap-3 os-btn">
                <button class="btn primary-btn" :class="{active: vm_os == 'linux'}" @click="vm_os = 'linux'">Linux</button>
                <button class="btn primary-btn" :class="{active: vm_os == 'window'}" @click="vm_os = 'window'">Window</button>
            </div>
        
            <div class="plan-mobile-detail">
                <div class="plan-detail-card" :class="{active: active_card == 'card1'}" v-if="vm_os=='linux'">
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card1')" data-bs-target="#collapseExample">
                        <div class="col-6">evm.cl.mini</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="vm_plan=='hourly' && vm_os=='linux'">$0.021</span>
                                <span class="price-tag" v-if="vm_plan=='monthly' && vm_os=='linux'">$14​</span>
                                <span class="price-tag" v-if="vm_plan=='one_year' && vm_os=='linux'">$159</span>
                                <span class="price-tag" v-if="vm_plan=='three_year' && vm_os=='linux'">$429</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample">
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
                            <div class="col-6 text-end">50 GB NVMe</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">1 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">1 TB</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6">Snapshot</div>
                            <div class="col-6 text-end">1 Snapshot</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card2'}">
                    <div class="row" @click="toggleActiveCard('card2')" data-bs-toggle="collapse" data-bs-target="#collapseExample1">
                        <div v-if="vm_os == 'linux'" class="col-6">evm.cl.small</div>
                        <div v-else class="col-6">evm.cw.small</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="vm_plan=='hourly' && vm_os=='linux'">$0.042</span>
                                <span class="price-tag" v-if="vm_plan=='monthly' && vm_os=='linux'">$28​</span>
                                <span class="price-tag" v-if="vm_plan=='one_year' && vm_os=='linux'">$315</span>
                                <span class="price-tag" v-if="vm_plan=='three_year' && vm_os=='linux'">$850</span>

                                <span class="price-tag" v-if="vm_plan=='hourly' && vm_os=='window'">$0.051</span>
                                <span class="price-tag" v-if="vm_plan=='monthly' && vm_os=='window'">$35​</span>
                                <span class="price-tag" v-if="vm_plan=='one_year' && vm_os=='window'">$399</span>
                                <span class="price-tag" v-if="vm_plan=='three_year' && vm_os=='window'">$1,077</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>    
                    </div>
                    <div class="collapse" id="collapseExample1">
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
                            <div class="col-6 text-end">100 GB NVMe</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">1 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">1 TB</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6">Snapshot</div>
                            <div class="col-6 text-end">1 Snapshot</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <button class="btn primary-btn deploy-btn">Deploy</button>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card3'}">
                    <div class="row" @click="toggleActiveCard('card3')" data-bs-toggle="collapse" data-bs-target="#collapseExample2">
                        <div v-if="vm_os == 'linux'" class="col-6">evm.cl.medium</div>
                        <div v-else class="col-6">evm.cw.medium</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="vm_plan=='hourly' && vm_os=='linux'">$0.082</span>
                                <span class="price-tag" v-if="vm_plan=='monthly' && vm_os=='linux'">$55​</span>
                                <span class="price-tag" v-if="vm_plan=='one_year' && vm_os=='linux'">$620</span>
                                <span class="price-tag" v-if="vm_plan=='three_year' && vm_os=='linux'">$1,674</span>

                                <span class="price-tag" v-if="vm_plan=='hourly' && vm_os=='window'">$0.102</span>
                                <span class="price-tag" v-if="vm_plan=='monthly' && vm_os=='window'">$70​</span>
                                <span class="price-tag" v-if="vm_plan=='one_year' && vm_os=='window'">$799</span>
                                <span class="price-tag" v-if="vm_plan=='three_year' && vm_os=='window'">$2,157</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>    
                    </div>
                    <div class="collapse" id="collapseExample2">
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
                            <div class="col-6 text-end">200 GB NVMe</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">1 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">2 TB</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6">Snapshot</div>
                            <div class="col-6 text-end">1 Snapshot</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <button class="btn primary-btn deploy-btn">Deploy</button>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card4'}">
                    <div class="row" @click="toggleActiveCard('card4')" data-bs-toggle="collapse" data-bs-target="#collapseExample3">
                        <div v-if="vm_os == 'linux'" class="col-6">evm.cl.large</div>
                        <div v-else class="col-6">evm.cw.large</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="vm_plan=='hourly' && vm_os=='linux'">$0.105</span>
                                <span class="price-tag" v-if="vm_plan=='monthly' && vm_os=='linux'">$72​</span>
                                <span class="price-tag" v-if="vm_plan=='one_year' && vm_os=='linux'">$829</span>
                                <span class="price-tag" v-if="vm_plan=='three_year' && vm_os=='linux'">$2,238</span>

                                <span class="price-tag" v-if="vm_plan=='hourly' && vm_os=='window'">$0.131</span>
                                <span class="price-tag" v-if="vm_plan=='monthly' && vm_os=='window'">$90​</span>
                                <span class="price-tag" v-if="vm_plan=='one_year' && vm_os=='window'">$999</span>
                                <span class="price-tag" v-if="vm_plan=='three_year' && vm_os=='window'">$2,697</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>    
                    </div>
                    <div class="collapse" id="collapseExample3">
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
                            <div class="col-6 text-end">200 GB NVMe</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">5 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">2 TB</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6">Snapshot</div>
                            <div class="col-6 text-end">2 Snapshot</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <button class="btn primary-btn deploy-btn">Deploy</button>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card5'}">
                    <div class="row" @click="toggleActiveCard('card5')" data-bs-toggle="collapse" data-bs-target="#collapseExample4">
                        <div v-if="vm_os == 'linux'" class="col-6">evm.cl.xlarge</div>
                        <div v-else class="col-6">evm.cw.xlarge</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="vm_plan=='hourly' && vm_os=='linux'">$0.105</span>
                                <span class="price-tag" v-if="vm_plan=='monthly' && vm_os=='linux'">$72​</span>
                                <span class="price-tag" v-if="vm_plan=='one_year' && vm_os=='linux'">$829</span>
                                <span class="price-tag" v-if="vm_plan=='three_year' && vm_os=='linux'">$2,238</span>

                                <span class="price-tag" v-if="vm_plan=='hourly' && vm_os=='window'">$0.131</span>
                                <span class="price-tag" v-if="vm_plan=='monthly' && vm_os=='window'">$90​</span>
                                <span class="price-tag" v-if="vm_plan=='one_year' && vm_os=='window'">$999</span>
                                <span class="price-tag" v-if="vm_plan=='three_year' && vm_os=='window'">$2,697</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>    
                    </div>
                    <div class="collapse" id="collapseExample4">
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
                            <div class="col-6 text-end">300 GB NVMe</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">5 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">3 TB</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6">Snapshot</div>
                            <div class="col-6 text-end">2 Snapshot</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <button class="btn primary-btn deploy-btn">Deploy</button>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card6'}">
                    <div class="row" @click="toggleActiveCard('card6')" data-bs-toggle="collapse" data-bs-target="#collapseExample5">
                        <div v-if="vm_os == 'linux'" class="col-6">evm.cl.2xlarge</div>
                        <div v-else class="col-6">evm.cw.2xlarge</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="vm_plan=='hourly' && vm_os=='linux'">$0.417</span>
                                <span class="price-tag" v-if="vm_plan=='monthly' && vm_os=='linux'">$286​</span>
                                <span class="price-tag" v-if="vm_plan=='one_year' && vm_os=='linux'">$3,349</span>
                                <span class="price-tag" v-if="vm_plan=='three_year' && vm_os=='linux'">$9,042</span>

                                <span class="price-tag" v-if="vm_plan=='hourly' && vm_os=='window'">$0.511</span>
                                <span class="price-tag" v-if="vm_plan=='monthly' && vm_os=='window'">$350​</span>
                                <span class="price-tag" v-if="vm_plan=='one_year' && vm_os=='window'">$3,999</span>
                                <span class="price-tag" v-if="vm_plan=='three_year' && vm_os=='window'">$10,797</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>    
                    </div>
                    <div class="collapse" id="collapseExample5">
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
                            <div class="col-6 text-end">500 GB NVMe</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">10 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">3 TB</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6">Snapshot</div>
                            <div class="col-6 text-end">2 Snapshot</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <button class="btn primary-btn deploy-btn">Deploy</button>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>

                <div v-if="vm_os == 'window'" class="plan-detail-card" :class="{active: active_card == 'card6'}">
                    <div class="row" @click="toggleActiveCard('card6')" data-bs-toggle="collapse" data-bs-target="#collapseExample5">
                        <div class="col-6">evm.cw.4xlarge</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="vm_plan=='hourly' && vm_os=='window'">$0.919</span>
                                <span class="price-tag" v-if="vm_plan=='monthly' && vm_os=='window'">$630​</span>
                                <span class="price-tag" v-if="vm_plan=='one_year' && vm_os=='window'">$7,199</span>
                                <span class="price-tag" v-if="vm_plan=='three_year' && vm_os=='window'">$19,437</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>    
                    </div>
                    <div class="collapse" id="collapseExample5">
                        <div class="row">
                            <div class="col-6">CPU</div>
                            <div class="col-6 text-end">32 vCPU</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">RAM</div>
                            <div class="col-6 text-end">128 GB DDR4</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Storage</div>
                            <div class="col-6 text-end">1 TB NVMe</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">10 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">3 TB</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6">Snapshot</div>
                            <div class="col-6 text-end">2 Snapshot</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <button class="btn primary-btn deploy-btn">Deploy</button>
                            </div>
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
            const vm_plan = ref('monthly');
            const vm_os = ref('linux');
            const active_card = ref(false);

            const toggleActiveCard = (card) => {
                if(active_card.value === card) {
                    active_card.value = null;
                } else {
                    active_card.value = card;
                }
            }

            return {vm_plan, vm_os, active_card, toggleActiveCard}
        }
    }
</script>

<style >
    .price-item .price-btn-mobile {
        padding: 10px 30px !important;
    }
    .price-item button {
        width: 100px;
    }

    .plan-detail-mobile {
        margin-top: 20px;
        background: var(--card-background-color);
        padding: 30px;
        border-radius: 10px;
    }

    .plan-detail-card {
        padding: 15px;
    }

    .plan-detail-card.active {
        border: 2px solid #EC6316;
        border-radius: 7px;
        padding: 15px;
    }

    .plan-detail-mobile h4 {
        font-family: 'Courier New', Courier, monospace;
    }
    .plan-btn button.active {
        background: #EC6316 !important;
    }

    .plan-detail-mobile .os-btn {
        margin:30px 0px;
    }

    .plan-detail-mobile .os-btn .active{
        background: #EC6316 !important;
    }

    .plan-detail-mobile table th {
        background: transparent !important;
        color: var(--font-color);
        font-weight: bold;
    }

    .plan-detail-mobile table td {
        background: transparent !important;
        color: var(--font-color);
        vertical-align: middle;
    }

    .plan-detail-mobile .deploy-btn {
        border-color: #EC6316 !important;
        background-color: #EC6316 !important;
    }

    .plan-detail-mobile table .deploy-btn:hover {
        transform: translate(0) !important;
    }

    @media (max-width: 990px) {
        .content-wrapper.pricing {
            padding: 0px !important;
        }
    }
</style>
