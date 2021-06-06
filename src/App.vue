<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
#app {
  @include flexcol(center);
  align-items: center;
  width: 99vw;
  margin-top: 20vh;
}
</style>
