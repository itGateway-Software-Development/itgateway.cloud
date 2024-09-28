<template>
  <div class="regulation-wrapper content-wrapper">
    <div class="row collaboration align-items-center">
      <div class="col-12 col-sm-6 col-md-6 col-xl-6 desktop-img">
        <img
          :src="require('@/assets/images/partner/Collaboration.png')"
          class="img-fluid"
          alt=""
        />
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-xl-6 content-col">
        <div class="content-regulation">
          <h2>Collaboration</h2>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>Partner with Us</p>
          </div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>Solution Through Us</p>
          </div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>No Worries About Cloud</p>
          </div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>Always-Ready Team</p>
          </div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>Training and Consultation</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row development align-items-center">
      <div class="col-12 col-sm-6 col-md-6 col-xl-6 content-col">
        <div class="content-regulation">
          <h2>Development</h2>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>Research and Analysis</p>
          </div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>Cloud Infrastructure</p>
          </div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>Software Deployment</p>
          </div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>Cloud and Data Security</p>
          </div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>Technological Update</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-xl-6 desktop-img">
        <img
          :src="require('@/assets/images/partner/Developing.png')"
          class="img-fluid"
          alt=""
        />
      </div>
    </div>
    <div class="row return align-items-center">
      <div class="col-12 col-sm-6 col-md-6 col-xl-6 desktop-img">
        <img
          :src="require('@/assets/images/partner/ProfitReturn.png')"
          class="img-fluid"
          alt=""
        />
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-xl-6 content-col">
        <div class="content-regulation">
          <h2>Profit Return</h2>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>10~20% Profit for You</p>
          </div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>Every Contract Period</p>
          </div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>10% Profit for < <span class="color-text">$10,000</span></p>
          </div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>15% Profit for > <span class="color-text">$10,000</span></p>
          </div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <img :src="require('@/assets/images/partner/done.png')" alt="" />
            <p>20% Profit for > <span class="color-text">$20,000</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.regulation-wrapper {
  margin-top: 50px;
}

.content-regulation img {
  width: 20px;
}

.content-regulation {
  margin-left: 120px;
}

.development,
.return {
  margin-top: 50px;
}

.development .content-regulation {
  margin-left: 50px;
}

.development .desktop-img img {
  margin-left: 100px;
}

.content-regulation h2 {
  font-family: "Chakra Petch", sans-serif;
  font-size: 38px;
  letter-spacing: 0.007rem;
  text-decoration: underline;
}

.content-regulation p,
span {
  margin: 0px;
  font-size: 28px !important;
  font-weight: bold;
  letter-spacing: 0.007rem;
}

.color-text {
  color: #2cee36;
}

.desktop-img img {
  width: 400px;
  margin-left: 0px;
}

@media (max-width: 1200px) {
  .content-regulation {
    margin-left: 100px;
  }

  .content-regulation p {
    font-size: 24px !important;
  }
  .development .desktop-img img {
    margin-left: 20px;
  }
}

@media (max-width: 1035px) {
  .development .desktop-img img {
    margin-left: 0px;
  }
}

@media (max-width: 900px) {
  .content-regulation {
    margin-left: 50px;
  }
}

@media (max-width: 760px) {
  .desktop-img {
    width: 300px;
  }
  .content-regulation {
    margin-left: 50px;
  }

  .regulation-wrapper {
    margin-top: 90px;
  }

  .content-regulation p {
    font-size: 20px !important;
  }
}

@media (max-width: 650px) {
  .desktop-img {
    display: none;
  }

  .content-col {
    width: 100%;
  }

  .regulation-wrapper {
    margin-top: 50px;
  }

  .content-regulation {
    margin-left: 0px;
  }

  .development .content-regulation {
    margin-left: 0px;
  }

  .content-regulation p {
    font-size: 24px !important;
  }
}
</style>
