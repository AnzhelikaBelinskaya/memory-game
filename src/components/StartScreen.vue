<template>
  <div class="start-screen__container">
    <CustomSelect @change="selectLength($event)" :select="select1" />
    <CustomSelect @change="selectTimeout($event)" :select="select2" />
    <CustomButton name="START" @click="start()" />
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import CustomSelect from "./CustomSelect.vue";
export default {
  components: {
    CustomButton,
    CustomSelect,
  },
  data() {
    return {
      select1: {
        label: "Choose number of digits",
        options: [1, 2, 3, 4],
      },
      select2: {
        label: "Choose time of display (in seconds)",
        options: [0.2, 0.5, 1, 1.5, 1.8, 2],
      },
      config: {
        length: undefined,
        timeout: undefined,
        field: null,
      },
    };
  },
  methods: {
    start() {
      this.$store.dispatch("start", this.config);
    },
    selectLength(length) {
      this.config.length = length;
    },
    selectTimeout(timeout) {
      this.config.timeout = timeout;
    },
  },
};
</script>

<style scoped lang="scss">
.start-screen__container {
  @include flexcol(center);
  align-items: center;
  width: 30%;
  @include mobile {
    width: 60%;
  }
}
</style>