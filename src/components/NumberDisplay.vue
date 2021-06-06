<template>
<div class="number-display">
  {{number}}
</div>
</template>

<script>
export default {
  props: ['number']

}
</script>

<style scoped lang="scss">
.number-display {
  font-size: 8rem;
  color: $text-color;
}

</style>