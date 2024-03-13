<template>
    <div class="loading-container">
        <div class="loader"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.loading-container {
    background: #242142;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}
.loader {
    width: 40px;
    height: 40px;
    --c:no-repeat linear-gradient(#EC6316 0 0);
    background: var(--c),var(--c),var(--c),var(--c);
    background-size: 21px 21px;
    animation: l5 1.5s infinite cubic-bezier(0.3,1,0,1);
}
@keyframes l5 {
   0%   {background-position: 0    0,100% 0   ,100% 100%,0 100%}
   33%  {background-position: 0    0,100% 0   ,100% 100%,0 100%;width:60px;height: 60px}
   66%  {background-position: 100% 0,100% 100%,0    100%,0 0   ;width:60px;height: 60px}
   100% {background-position: 100% 0,100% 100%,0    100%,0 0   }
}
</style>
