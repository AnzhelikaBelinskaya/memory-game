<template>
  <div class="result__container">
    <div class="result__header">{{ result }}</div>
    <div class="button__wrapper">
      <CustomButton name="Next" @click="$emit('next')" class="next-button" />
      <CustomButton name="Stop" @click="$emit('stop')" class="stop-button" />
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
  props: ["result"],
};
</script>

<style scoped lang="scss">
.result__container {
  @include flexcol(center);
  align-items: center;
}
.button__wrapper {
  @include flexrow(space-between);
  width: 100%;
}
.result__header {
  color: $text-color;
  font-size: 2rem;
  text-align: center;
}
.stop-button {
  background-color: $button-active;
  margin-left: 1rem;
  &:active {
    background-color: $button-active;
    color: $button;
  }
}
.next-button {
  margin-right: 1rem;
  &:active {
    color: $text-color;
  }
}
</style>