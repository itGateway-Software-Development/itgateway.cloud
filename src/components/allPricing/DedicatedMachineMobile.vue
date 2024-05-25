<template>
    <div class="price-item" style="margin-top: 60px;">
        <div class="d-flex" style="padding-left: 30px;">
            <h4>Elastic ​</h4>
            <h4 class="fw-bold">Dedicated Machine​</h4>
        </div>
        <p style="padding-left: 30px;">Optimize performance with dedicate resource VM in the cloud.​​</p>
        <div class="plan-detail-mobile shadow">
            <div class="d-flex gap-3 plan-btn ">
                <button class="btn primary-btn" :class="{active: dm_plan == 'hourly'}" @click="dm_plan = 'hourly'">Hourly</button>
                <button class="btn primary-btn" :class="{active: dm_plan == 'monthly'}" @click="dm_plan = 'monthly'">Monthly</button>
                <button class="btn primary-btn" :class="{active: dm_plan == 'one_year'}" @click="dm_plan = 'one_year'">1 Year</button>
                <button class="btn primary-btn" :class="{active: dm_plan == 'three_year'}" @click="dm_plan = 'three_year'">3 Year</button>
            </div>
            <div class="d-flex gap-3 os-btn">
                <button class="btn primary-btn" :class="{active: dm_os == 'linux'}" @click="dm_os = 'linux'">Linux</button>
                <button class="btn primary-btn" :class="{active: dm_os == 'window'}" @click="dm_os = 'window'">Window</button>
            </div>
        
            <div class="plan-mobile-detail">
                <div class="plan-detail-card" :class="{active: active_card == 'card7'}" v-if="dm_os=='linux'">
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card7')" data-bs-target="#collapseExample6">
                        <div class="col-6">edm.cl.mini</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="dm_plan=='hourly' && dm_os=='linux'">$0.034</span>
                                <span class="price-tag" v-if="dm_plan=='monthly' && dm_os=='linux'">$23​</span>
                                <span class="price-tag" v-if="dm_plan=='one_year' && dm_os=='linux'">$253</span>
                                <span class="price-tag" v-if="dm_plan=='three_year' && dm_os=='linux'">$683</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample6">
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

                <div class="plan-detail-card" :class="{active: active_card == 'card8'}">
                    <div class="row" @click="toggleActiveCard('card8')" data-bs-toggle="collapse" data-bs-target="#collapseExample7">
                        <div v-if="dm_os == 'linux'" class="col-6">edm.cl.small​</div>
                        <div v-else class="col-6">edm.cw.small​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="dm_plan=='hourly' && dm_os=='linux'">$0.067</span>
                                <span class="price-tag" v-if="dm_plan=='monthly' && dm_os=='linux'">$46​</span>
                                <span class="price-tag" v-if="dm_plan=='one_year' && dm_os=='linux'">$506</span>
                                <span class="price-tag" v-if="dm_plan=='three_year' && dm_os=='linux'">$1,366</span>

                                <span class="price-tag" v-if="dm_plan=='hourly' && dm_os=='window'">$0.086</span>
                                <span class="price-tag" v-if="dm_plan=='monthly' && dm_os=='window'">$59​</span>
                                <span class="price-tag" v-if="dm_plan=='one_year' && dm_os=='window'">$649</span>
                                <span class="price-tag" v-if="dm_plan=='three_year' && dm_os=='window'">$1,752</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>    
                    </div>
                    <div class="collapse" id="collapseExample7">
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

                <div class="plan-detail-card" :class="{active: active_card == 'card9'}">
                    <div class="row" @click="toggleActiveCard('card9')" data-bs-toggle="collapse" data-bs-target="#collapseExample8">
                        <div v-if="dm_os == 'linux'" class="col-6">edm.cl.medium​</div>
                        <div v-else class="col-6">edm.cw.medium​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="dm_plan=='hourly' && dm_os=='linux'">$0.134</span>
                                <span class="price-tag" v-if="dm_plan=='monthly' && dm_os=='linux'">$92​</span>
                                <span class="price-tag" v-if="dm_plan=='one_year' && dm_os=='linux'">$1,010</span>
                                <span class="price-tag" v-if="dm_plan=='three_year' && dm_os=='linux'">$2,727</span>

                                <span class="price-tag" v-if="dm_plan=='hourly' && dm_os=='window'">$0.175</span>
                                <span class="price-tag" v-if="dm_plan=='monthly' && dm_os=='window'">$120​</span>
                                <span class="price-tag" v-if="dm_plan=='one_year' && dm_os=='window'">$1,320</span>
                                <span class="price-tag" v-if="dm_plan=='three_year' && dm_os=='window'">$3,564</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>    
                    </div>
                    <div class="collapse" id="collapseExample8">
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
                            <div v-if="dm_os=='linux'" class="col-6 text-end">3 TB</div>
                            <div v-if="dm_os=='window'" class="col-6 text-end">2 TB</div>
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

                <div class="plan-detail-card" :class="{active: active_card == 'card10'}">
                    <div class="row" @click="toggleActiveCard('card10')" data-bs-toggle="collapse" data-bs-target="#collapseExample9">
                        <div v-if="dm_os == 'linux'" class="col-6">edm.cl.large​</div>
                        <div v-else class="col-6">edm.cw.large​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="dm_plan=='hourly' && dm_os=='linux'">$0.174</span>
                                <span class="price-tag" v-if="dm_plan=='monthly' && dm_os=='linux'">$119​</span>
                                <span class="price-tag" v-if="dm_plan=='one_year' && dm_os=='linux'">$1,310</span>
                                <span class="price-tag" v-if="dm_plan=='three_year' && dm_os=='linux'">$3,537</span>
                                
                                <span class="price-tag" v-if="dm_plan=='hourly' && dm_os=='window'">$0.217</span>
                                <span class="price-tag" v-if="dm_plan=='monthly' && dm_os=='window'">$149​</span>
                                <span class="price-tag" v-if="dm_plan=='one_year' && dm_os=='window'">$1,599</span>
                                <span class="price-tag" v-if="dm_plan=='three_year' && dm_os=='window'">$4,317</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>    
                    </div>
                    <div class="collapse" id="collapseExample9">
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
                            <div v-if="dm_os == 'linux'" class="col-6 text-end">5 Gbps</div>
                            <div v-else class="col-6 text-end">1 Gbps</div>
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

                <div class="plan-detail-card" :class="{active: active_card == 'card11'}">
                    <div class="row" @click="toggleActiveCard('card11')" data-bs-toggle="collapse" data-bs-target="#collapseExample10">
                        <div v-if="dm_os == 'linux'" class="col-6">edm.cl.xlarge</div>
                        <div v-else class="col-6">edm.cw.xlarge</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="dm_plan=='hourly' && dm_os=='linux'">$0.348</span>
                                <span class="price-tag" v-if="dm_plan=='monthly' && dm_os=='linux'">$239​</span>
                                <span class="price-tag" v-if="dm_plan=='one_year' && dm_os=='linux'">$2,620</span>
                                <span class="price-tag" v-if="dm_plan=='three_year' && dm_os=='linux'">$7,074</span>
                                
                                <span class="price-tag" v-if="dm_plan=='hourly' && dm_os=='window'">$0.436</span>
                                <span class="price-tag" v-if="dm_plan=='monthly' && dm_os=='window'">$299​</span>
                                <span class="price-tag" v-if="dm_plan=='one_year' && dm_os=='window'">$3,280</span>
                                <span class="price-tag" v-if="dm_plan=='three_year' && dm_os=='window'">$8,856</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>    
                    </div>
                    <div class="collapse" id="collapseExample10">
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
                            <div v-if="dm_os == 'linux'" class="col-6 text-end">4 TB</div>
                            <div v-else class="col-6 text-end">3 TB</div>
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

                <div class="plan-detail-card" :class="{active: active_card == 'card12'}">
                    <div class="row" @click="toggleActiveCard('card12')" data-bs-toggle="collapse" data-bs-target="#collapseExample11">
                        <div v-if="dm_os == 'linux'" class="col-6">edm.cl.2xlarge</div>
                        <div v-else class="col-6">edm.cw.2xlarge</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="dm_plan=='hourly' && dm_os=='linux'">$0.699</span>
                                <span class="price-tag" v-if="dm_plan=='monthly' && dm_os=='linux'">$479​</span>
                                <span class="price-tag" v-if="dm_plan=='one_year' && dm_os=='linux'">$5,260</span>
                                <span class="price-tag" v-if="dm_plan=='three_year' && dm_os=='linux'">$14,202</span>
                                
                                <span class="price-tag" v-if="dm_plan=='hourly' && dm_os=='window'">$0.801</span>
                                <span class="price-tag" v-if="dm_plan=='monthly' && dm_os=='window'">$549​</span>
                                <span class="price-tag" v-if="dm_plan=='one_year' && dm_os=='window'">$5,999</span>
                                <span class="price-tag" v-if="dm_plan=='three_year' && dm_os=='window'">$16,197</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>    
                    </div>
                    <div class="collapse" id="collapseExample11">
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
                            <div class="col-6 text-end">4 TB</div>
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

                <div v-if="dm_os == 'window'" class="plan-detail-card" :class="{active: active_card == 'card13'}">
                    <div class="row" @click="toggleActiveCard('card13')" data-bs-toggle="collapse" data-bs-target="#collapseExample12">
                        <div class="col-6">evm.cw.4xlarge</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="dm_plan=='hourly' && dm_os=='window'">$1,444</span>
                                <span class="price-tag" v-if="dm_plan=='monthly' && dm_os=='window'">$990​</span>
                                <span class="price-tag" v-if="dm_plan=='one_year' && dm_os=='window'">$9,990</span>
                                <span class="price-tag" v-if="dm_plan=='three_year' && dm_os=='window'">$26,973</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>    
                    </div>
                    <div class="collapse" id="collapseExample12">
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
                            <div class="col-6 text-end">4 TB</div>
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
            const dm_plan = ref('monthly');
            const dm_os = ref('linux');
            const active_card = ref(false);

            const toggleActiveCard = (card) => {
                if(active_card.value === card) {
                    active_card.value = null;
                } else {
                    active_card.value = card;
                }
            }

            return {dm_plan, dm_os, active_card, toggleActiveCard}
        }
    }
</script>

<style>
.price-tag {
    color: #ff9901;
    font-weight: bold;
    font-size: 18px;
}
</style>

