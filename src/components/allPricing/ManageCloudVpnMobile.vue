<template>
    <div class="price-item" style="margin-top: 60px;">
        <div class="d-flex" style="padding-left: 30px;">
            <h4>Manage ​</h4>
            <h4 class="fw-bold">Cloud VPN </h4>
        </div>
        <p style="padding-left: 30px;">Cloud based VPN services provide VPN solutions such as Secure Remote Access, Site-to-Site Networking, Secure Internet Access and Secure IoT Communication.</p>
        <div class="plan-detail-mobile shadow">
            <div class="d-flex gap-3 plan-btn mb-5">
                <button class="btn primary-btn" :class="{active: c_vpn_plan == 'hourly'}" @click="c_vpn_plan = 'hourly'">Hourly</button>
                <button class="btn primary-btn" :class="{active: c_vpn_plan == 'monthly'}" @click="c_vpn_plan = 'monthly'">Monthly</button>
                <button class="btn primary-btn" :class="{active: c_vpn_plan == 'one_year'}" @click="c_vpn_plan = 'one_year'">1 Year</button>
                <button class="btn primary-btn" :class="{active: c_vpn_plan == 'three_year'}" @click="c_vpn_plan = 'three_year'">3 Year</button>
            </div>
            <div class="plan-mobile-detail">
                <div class="plan-detail-card" :class="{active: active_card == 'card26'}" >
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card26')" data-bs-target="#collapseExample25">
                        <div class="col-6">mcv.mini​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="c_vpn_plan=='hourly'">$0.042​</span>
                                <span class="price-tag" v-if="c_vpn_plan=='monthly'">$29​</span>
                                <span class="price-tag" v-if="c_vpn_plan=='one_year'">$299</span>
                                <span class="price-tag" v-if="c_vpn_plan=='three_year'">$810</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample25">
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
                            <div class="col-6 text-end">30 GB NVMe</div>
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
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card27'}" >
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card27')" data-bs-target="#collapseExample26">
                        <div class="col-6">mcv.small​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="c_vpn_plan=='hourly'">$0.086</span>
                                <span class="price-tag" v-if="c_vpn_plan=='monthly'">$59​</span>
                                <span class="price-tag" v-if="c_vpn_plan=='one_year'">$590</span>
                                <span class="price-tag" v-if="c_vpn_plan=='three_year'">$1,590</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample26">
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
                            <div class="col-6 text-end">3 TB</div>
                            <hr>
                        </div>

                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card28'}" >
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card28')" data-bs-target="#collapseExample27">
                        <div class="col-6">mcv.medium​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="c_vpn_plan=='hourly'">$0.175</span>
                                <span class="price-tag" v-if="c_vpn_plan=='monthly'">$120​</span>
                                <span class="price-tag" v-if="c_vpn_plan=='one_year'">$1,200</span>
                                <span class="price-tag" v-if="c_vpn_plan=='three_year'">$3,240</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample27">
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
                            <div class="col-6 text-end">50 GB NVMe​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">1 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">5 TB</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card29'}" >
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card29')" data-bs-target="#collapseExample28">
                        <div class="col-6">mcv.large​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="c_vpn_plan=='hourly'">$0.247</span>
                                <span class="price-tag" v-if="c_vpn_plan=='monthly'">$169​</span>
                                <span class="price-tag" v-if="c_vpn_plan=='one_year'">$1,690</span>
                                <span class="price-tag" v-if="c_vpn_plan=='three_year'">$4,560</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample28">
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
                            <div class="col-6 text-end">100 GB NVMe​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">5 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">10 TB</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card30'}" >
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card30')" data-bs-target="#collapseExample29">
                        <div class="col-6">mcv.xlarge​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="c_vpn_plan=='hourly'">$0.481</span>
                                <span class="price-tag" v-if="c_vpn_plan=='monthly'">$329​</span>
                                <span class="price-tag" v-if="c_vpn_plan=='one_year'">$3,290</span>
                                <span class="price-tag" v-if="c_vpn_plan=='three_year'">$8,880</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample29">
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
                            <div class="col-6 text-end">100 GB NVMe​​​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">5 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">20 TB</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card31'}" >
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card31')" data-bs-target="#collapseExample30">
                        <div class="col-6">mcv.2xlarge​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span class="price-tag" v-if="c_vpn_plan=='hourly'">$0.917</span>
                                <span class="price-tag" v-if="c_vpn_plan=='monthly'">$629​</span>
                                <span class="price-tag" v-if="c_vpn_plan=='one_year'">$6,290</span>
                                <span class="price-tag" v-if="c_vpn_plan=='three_year'">$16,980</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample30">
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
                            <div class="col-6 text-end">200 GB NVMe​​​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">10 Gbps</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Data Transfer Out</div>
                            <div class="col-6 text-end">50 TB</div>
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
            const c_vpn_plan = ref('monthly');
            const fs_os = ref('linux');
            const active_card = ref(false);

            const toggleActiveCard = (card) => {
                if(active_card.value === card) {
                    active_card.value = null;
                } else {
                    active_card.value = card;
                }
            }

            return {c_vpn_plan, fs_os, active_card, toggleActiveCard}
        }
    }
</script>

