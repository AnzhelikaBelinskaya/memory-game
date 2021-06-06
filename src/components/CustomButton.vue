<template>
  <div class="custom-button" @click="$emit('click')">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style scoped lang="scss">
.custom-button {
  box-sizing: border-box;
  display: block;
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 0.8rem;
  background-color: $button;
  color: white;
  border-radius: 10px;
  box-shadow: 0px 5px 10px -4px $shadow;
  text-align: center;
  line-height: 1.875rem;
  height: 3rem;
  font-size: 1.2rem;
  font-weight: 800;
  margin-top: 2rem;
  &:hover {
      background-color: $button-hover;
  }
  &:active {
    color: $button-active;
  }
}
</style>
