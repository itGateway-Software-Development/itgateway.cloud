<template>
    <div class="price-item" style="margin-top: 60px;">
        <div class="d-flex" style="padding-left: 30px;">
            <h4>Elastic ​</h4>
            <h4 class="fw-bold">Bare-Metal Server​</h4>
        </div>
        <p style="padding-left: 30px;">Dedicated physical server with single or dual processor that can build your customized cloud infrastructure. You can deploy and manage physical server infrastructure within an hour.​​</p>
        <div class="plan-detail-mobile shadow">
            <div class="d-flex gap-3 plan-btn">
                <button class="btn primary-btn" :class="{active: bm_plan == 'hourly'}" @click="bm_plan = 'hourly'">Hourly</button>
                <button class="btn primary-btn" :class="{active: bm_plan == 'monthly'}" @click="bm_plan = 'monthly'">Monthly</button>
                <button class="btn primary-btn" :class="{active: bm_plan == 'one_year'}" @click="bm_plan = 'one_year'">1 Year</button>
                <button class="btn primary-btn" :class="{active: bm_plan == 'three_year'}" @click="bm_plan = 'three_year'">3 Year</button>
            </div>
            <div class="d-flex gap-3 os-btn">
                <button class="btn primary-btn bm_btn" :class="{active: bm_processor == 'single'}" @click="bm_processor = 'single'">Single Processor</button>
                <button class="btn primary-btn bm_btn" :class="{active: bm_processor == 'dual'}" @click="bm_processor = 'dual'">Dual Processor</button>
            </div>
        
            <div class="plan-mobile-detail">
                <div class="plan-detail-card" :class="{active: active_card == 'card20'}">
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card20')" data-bs-target="#collapseExample19">
                        <div class="col-6" v-if="bm_processor == 'single'">c1m1.ebms.small​</div>
                        <div class="col-6" v-else>c2m2.ebms.small​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span v-if="bm_plan=='hourly' && bm_processor=='single'">$0.350/Hour</span>
                                <span v-if="bm_plan=='monthly' && bm_processor=='single'">$240/Month​</span>
                                <span v-if="bm_plan=='one_year' && bm_processor=='single'">$2,640</span>
                                <span v-if="bm_plan=='three_year' && bm_processor=='single'">$7,120</span>

                                <span v-if="bm_plan=='hourly' && bm_processor=='dual'">$0.801/Hour</span>
                                <span v-if="bm_plan=='monthly' && bm_processor=='dual'">$549/Month​</span>
                                <span v-if="bm_plan=='one_year' && bm_processor=='dual'">$6,039</span>
                                <span v-if="bm_plan=='three_year' && bm_processor=='dual'">$16,305</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample19">
                        <div class="row">
                            <div class="col-6">CPU</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">Intel Xeon E2356-G​​ </p>
                                    <small style="color: #EC6316;">6 Core/12 Threat 3.2GHz​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x Xeon Silver 4210R​</p>
                                    <small style="color: #EC6316;">20 Core/40 Threat 2.4GHz​​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">RAM</div>
                            <div class="col-6 text-end" v-if="bm_processor == 'single'">64 GB DDR4​</div>
                            <div class="col-6 text-end" v-else>64 GB DDR4​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Storage</div>
                            <div class="col-6 text-end" v-if="bm_processor == 'single'">1 TB NVMe</div>
                            <div class="col-6 text-end" v-else>2 x 1 TB NVMe</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x 10 Gbps</p>
                                    <small style="color: #EC6316;">3 TB Data Transfer Out​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x 25 Gbps​</p>
                                    <small style="color: #EC6316;">4 TB Data Transfer Out​​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">IPv4 Address​</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">/29 Subnet​</p>
                                    <small style="color: #EC6316;">5 Usable​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card21'}">
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card21')" data-bs-target="#collapseExample20">
                        <div class="col-6" v-if="bm_processor == 'single'">c1m1.ebms.medium​</div>
                        <div class="col-6" v-else>c2m2.ebms.medium​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span v-if="bm_plan=='hourly' && bm_processor=='single'">$0.430/Hour</span>
                                <span v-if="bm_plan=='monthly' && bm_processor=='single'">$295/Month​</span>
                                <span v-if="bm_plan=='one_year' && bm_processor=='single'">$3,245</span>
                                <span v-if="bm_plan=='three_year' && bm_processor=='single'">$8,760</span>

                                <span v-if="bm_plan=='hourly' && bm_processor=='dual'">$1.019/Hour</span>
                                <span v-if="bm_plan=='monthly' && bm_processor=='dual'">$699/Month​</span>
                                <span v-if="bm_plan=='one_year' && bm_processor=='dual'">$7,689</span>
                                <span v-if="bm_plan=='three_year' && bm_processor=='dual'">$20,760</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample20">
                        <div class="row">
                            <div class="col-6">CPU</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">Intel Xeon E2388-G​</p>
                                    <small style="color: #EC6316;">6 Core/12 Threat 3.2GHz​​​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x Xeon Gold 5218R​​</p>
                                    <small style="color: #EC6316;">40 Core/80 Threat 2.1GHz​​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">RAM</div>
                            <div class="col-6 text-end" v-if="bm_processor == 'single'">64 GB DDR4​</div>
                            <div class="col-6 text-end" v-else>128 GB DDR4​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Storage</div>
                            <div class="col-6 text-end" v-if="bm_processor == 'single'">1 TB NVMe</div>
                            <div class="col-6 text-end" v-else>2 x 1 TB NVMe</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x 10 Gbps</p>
                                    <small style="color: #EC6316;">3 TB Data Transfer Out​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x 25 Gbps​</p>
                                    <small style="color: #EC6316;">4 TB Data Transfer Out​​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">IPv4 Address​</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">/29 Subnet​</p>
                                    <small style="color: #EC6316;">5 Usable​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card22'}">
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card22')" data-bs-target="#collapseExample21">
                        <div class="col-6" v-if="bm_processor == 'single'">c1m2.ebms.small​</div>
                        <div class="col-6" v-else>c2m4.ebms.small​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span v-if="bm_plan=='hourly' && bm_processor=='single'">$0.518/Hour</span>
                                <span v-if="bm_plan=='monthly' && bm_processor=='single'">$355/Month​</span>
                                <span v-if="bm_plan=='one_year' && bm_processor=='single'">$3,905</span>
                                <span v-if="bm_plan=='three_year' && bm_processor=='single'">$11,715</span>

                                <span v-if="bm_plan=='hourly' && bm_processor=='dual'">$1.238/Hour</span>
                                <span v-if="bm_plan=='monthly' && bm_processor=='dual'">$849/Month​</span>
                                <span v-if="bm_plan=='one_year' && bm_processor=='dual'">$9,339</span>
                                <span v-if="bm_plan=='three_year' && bm_processor=='dual'">$25,215</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample21">
                        <div class="row">
                            <div class="col-6">CPU</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">Intel Xeon E2356-G​</p>
                                    <small style="color: #EC6316;">8 Core/16 Threat 3.2GHz​​​​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x Xeon Silver 5218R​​</p>
                                    <small style="color: #EC6316;">20 Core/40 Threat 2.4GHz​​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">RAM</div>
                            <div class="col-6 text-end" v-if="bm_processor == 'single'">128 GB DDR4​</div>
                            <div class="col-6 text-end" v-else>256 GB DDR4​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Storage</div>
                            <div class="col-6 text-end" v-if="bm_processor == 'single'">2 x 1 TB NVMe</div>
                            <div class="col-6 text-end" v-else>2 x 2 TB NVMe</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x 10 Gbps</p>
                                    <small style="color: #EC6316;">3 TB Data Transfer Out​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x 25 Gbps​</p>
                                    <small style="color: #EC6316;">4 TB Data Transfer Out​​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">IPv4 Address​</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card23'}">
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card23')" data-bs-target="#collapseExample22">
                        <div class="col-6" v-if="bm_processor == 'single'">c1m2.ebms.medium​</div>
                        <div class="col-6" v-else>c2m4.ebms.medium​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span v-if="bm_plan=='hourly' && bm_processor=='single'">$0.582/Hour</span>
                                <span v-if="bm_plan=='monthly' && bm_processor=='single'">$399/Month​</span>
                                <span v-if="bm_plan=='one_year' && bm_processor=='single'">$4,389</span>
                                <span v-if="bm_plan=='three_year' && bm_processor=='single'">$10,540</span>

                                <span v-if="bm_plan=='hourly' && bm_processor=='dual'">$1.384/Hour</span>
                                <span v-if="bm_plan=='monthly' && bm_processor=='dual'">$949/Month​</span>
                                <span v-if="bm_plan=='one_year' && bm_processor=='dual'">$10,439</span>
                                <span v-if="bm_plan=='three_year' && bm_processor=='dual'">$28,180</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample22">
                        <div class="row">
                            <div class="col-6">CPU</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">Intel Xeon E2388-G​</p>
                                    <small style="color: #EC6316;">8 Core/16 Threat 3.2GHz​​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x Xeon Gold 5218R​​</p>
                                    <small style="color: #EC6316;">40 Core/80 Threat 2.1GHz​​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">RAM</div>
                            <div class="col-6 text-end" v-if="bm_processor == 'single'">128 GB DDR4​</div>
                            <div class="col-6 text-end" v-else>256 GB DDR4​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Storage</div>
                            <div class="col-6 text-end" v-if="bm_processor == 'single'">2 x 1 TB NVMe</div>
                            <div class="col-6 text-end" v-else>2 x 2 TB NVMe</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x 10 Gbps</p>
                                    <small style="color: #EC6316;">3 TB Data Transfer Out​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x 25 Gbps​</p>
                                    <small style="color: #EC6316;">4 TB Data Transfer Out​​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">IPv4 Address​</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card24'}">
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card24')" data-bs-target="#collapseExample23">
                        <div class="col-6" v-if="bm_processor == 'single'">c1m2.ebms.large​</div>
                        <div class="col-6" v-else>c2m8.ebms.medium​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span v-if="bm_plan=='hourly' && bm_processor=='single'">$0.608/Hour</span>
                                <span v-if="bm_plan=='monthly' && bm_processor=='single'">$417/Month​</span>
                                <span v-if="bm_plan=='one_year' && bm_processor=='single'">$4,587</span>
                                <span v-if="bm_plan=='three_year' && bm_processor=='single'">$12,380</span>

                                <span v-if="bm_plan=='hourly' && bm_processor=='dual'">$2.186/Hour</span>
                                <span v-if="bm_plan=='monthly' && bm_processor=='dual'">$1,499/Month​</span>
                                <span v-if="bm_plan=='one_year' && bm_processor=='dual'">$16,489</span>
                                <span v-if="bm_plan=='three_year' && bm_processor=='dual'">$44,520</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample23">
                        <div class="row">
                            <div class="col-6">CPU</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">Intel Xeon E2288-G​</p>
                                    <small style="color: #EC6316;">8 Core/16 Threat 3.7GHz​​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x Xeon Gold 5418Y​​​</p>
                                    <small style="color: #EC6316;">48 Core/96 Threat 2.1GHz​​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">RAM</div>
                            <div class="col-6 text-end" v-if="bm_processor == 'single'">128 GB DDR4​</div>
                            <div class="col-6 text-end" v-else>256 GB DDR4​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Storage</div>
                            <div class="col-6 text-end" v-if="bm_processor == 'single'">2 x 1 TB NVMe</div>
                            <div class="col-6 text-end" v-else>2 x 4 TB NVMe</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x 10 Gbps</p>
                                    <small style="color: #EC6316;">3 TB Data Transfer Out​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x 25 Gbps​</p>
                                    <small style="color: #EC6316;">5 TB Data Transfer Out​​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">IPv4 Address​</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">/28 Subnet​</p>
                                    <small style="color: #EC6316;">13 Usable​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">/27 Subnet​</p>
                                    <small style="color: #EC6316;">29 Usable​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6"><button class="btn primary-btn deploy-btn">Deploy</button></div>
                            <hr>
                        </div>

                    </div>
                </div>

                <div class="plan-detail-card" :class="{active: active_card == 'card25'}">
                    <div class="row" data-bs-toggle="collapse"  @click="toggleActiveCard('card25')" data-bs-target="#collapseExample24">
                        <div class="col-6" v-if="bm_processor == 'single'">ryzen.ebms.large​</div>
                        <div class="col-6" v-else>c2m8.ebms.large​</div>
                        <div class="col-6">
                            <div class="d-flex justify-content-end gap-3">
                                <span v-if="bm_plan=='hourly' && bm_processor=='single'">$0.436/Hour</span>
                                <span v-if="bm_plan=='monthly' && bm_processor=='single'">$299/Month​</span>
                                <span v-if="bm_plan=='one_year' && bm_processor=='single'">$3,949</span>
                                <span v-if="bm_plan=='three_year' && bm_processor=='single'">$10,660</span>

                                <span v-if="bm_plan=='hourly' && bm_processor=='dual'">$2.405/Hour</span>
                                <span v-if="bm_plan=='monthly' && bm_processor=='dual'">$1,649/Month​</span>
                                <span v-if="bm_plan=='one_year' && bm_processor=='dual'">$18,139</span>
                                <span v-if="bm_plan=='three_year' && bm_processor=='dual'">$48,970</span>
                                <span class="material-symbols-outlined"> expand_more</span>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="collapse" id="collapseExample24">
                        <div class="row">
                            <div class="col-6">CPU</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">AMD Ryzen 9 7900​</p>
                                    <small style="color: #EC6316;">12 Core/24 Threat 3.7GHz​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x Xeon Gold 6430​​​​</p>
                                    <small style="color: #EC6316;">64 Core/128 Threat 1.9GHz​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">RAM</div>
                            <div class="col-6 text-end" v-if="bm_processor == 'single'">128 GB DDR4​</div>
                            <div class="col-6 text-end" v-else>512 GB DDR4​</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Storage</div>
                            <div class="col-6 text-end" v-if="bm_processor == 'single'">2 x 1 TB NVMe</div>
                            <div class="col-6 text-end" v-else>2 x 4 TB NVMe</div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">Network</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x 10 Gbps</p>
                                    <small style="color: #EC6316;">3 TB Data Transfer Out​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">2 x 25 Gbps​</p>
                                    <small style="color: #EC6316;">5 TB Data Transfer Out​​</small>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="row">
                            <div class="col-6">IPv4 Address​</div>
                            <div class="col-6 text-end">
                                <div v-if="bm_processor == 'single'"  class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">/29 Subnet​</p>
                                    <small style="color: #EC6316;">5 Usable​</small>
                                </div>
                                <div v-else class="d-flex flex-column justify-content-end align-items-end gap-0">
                                    <p class="p-0 m-0">/27 Subnet​</p>
                                    <small style="color: #EC6316;">29 Usable​</small>
                                </div>
                            </div>
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
            const bm_plan = ref('monthly');
            const bm_processor = ref('single');
            const active_card = ref(false);

            const toggleActiveCard = (card) => {
                if(active_card.value === card) {
                    active_card.value = null;
                } else {
                    active_card.value = card;
                }
            }

            return {bm_plan, active_card,bm_processor, toggleActiveCard}
        }
    }
</script>

<style scoped>
.bare_metal {
    margin-top: 100px;
}

.price-item .bm_btn {
    width: 150px;
}
</style>
