<template>
  <div class="select__container" select="select">
    <div class="select__label">{{ select.label }}</div>
    <div
      class="select__field"
      :class="{ 'select__field-expanded': showOptions }"
      select.options="options"
      @click="openSelect"
      v-click-outside="closeSelect"
    >
      {{ placeholder }}

      <div
        class="select__option"
        :class="{ 'select__option-display': showOptions }"
        v-for="option in select.options"
        :key="option"
        @click.stop="click(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  props: ["select"],
  data() {
    return {
      showOptions: false,
      placeholder: "",
    };
  },
  mounted() {
    this.popupItem = this.$el;
  },
  methods: {
    openSelect() {
      this.showOptions = true;
      this.placeholder = "";
    },
    closeSelect() {
      this.showOptions = false;
    },
    click(option) {
      this.closeSelect();
      this.$emit("change", option);
      this.placeholder = option;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style scoped lang="scss">
.select__container {
  width: 100%;
  position: relative;
  height: 6rem;
}
.select__field {
  position: absolute;
  z-index: 10;
  top: 2rem;
  padding: 1rem;
  width: 100%;
  border: 1px solid $border-color;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: white;
  line-height: 1.5rem;
  height: 3rem;
  color: $text-color;
}
.select__field-expanded {
  height: 10rem;
  z-index: 11;
  overflow-y: scroll;
}
.select__option {
  height: 1.5rem;
  line-height: 1.9rem;
  padding: 0.2rem 1rem;
  background-color: white;
  display: none;
  color: $text-color;
}
.select__option-display {
  display: block;
  &:hover {
    background-color: $select-hover;
  }
}
.select__label {
  color: $text-color;
}
</style>