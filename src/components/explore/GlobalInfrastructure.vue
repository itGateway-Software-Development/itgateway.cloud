<template>
    <div class="content-wrapper global-infra">
        <h2 class="section-header">Global Cloud Infrastructure</h2>
        <p>
            The itGateway Cloud Infrastructure is a reliable, secure, and flexible
            cloud platform, offering around 30+ solutions & services from data
            centers globally.
        </p>
    </div>
    <GlobalInfracture></GlobalInfracture>
</template>

<script>
    import GlobalInfracture from '../GlobalInfracture'
export default {
  components: { GlobalInfracture },
        
    }
</script>

<style scoped>
    .global-infra h2{
        font-family: 'Chakra Petch', sans-serif;
    }

    .global-infra p {
        padding-right: 800px;
        line-height: 1.5;
        font-size: 18px;
    }
</style>
