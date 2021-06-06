<template>
  <div class="input__container">
    <div class="input__label">{{label}}</div>
    <input class="input" :type="type" @change="$emit('input', $event.target.value.trim())" @focus="$emit('focus')" />
  </div>
</template>

<script>
export default {
  props: ['label', 'type']
};
</script>

<style scoped lang='scss'>
.input {
  background-color: $bg;
  border: 1px solid $text-color;
  border-radius: 16px;
  width: 100%;
  padding: 0.875rem;
  font-size: 1.3rem;
  box-sizing: border-box;
  color: $text-color;
  &:focus {
    outline: none;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
</style>