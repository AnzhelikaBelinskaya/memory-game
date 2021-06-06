<template>
  <div class="play-screen__container">
    <div class="hint__container">
      <div class="play-screen__hint" v-show="showNotice">Get ready...</div>
      <div class="play-screen__hint" v-show="showError">Enter some number</div>
    </div>
    <NumbersDisplay v-if="showNumber" :number="number" />
    <div class="input__container" v-if="showInput">
      <CustomInput
        type="number"
        v-model="userNumber"
        @focus="hideError"
        class="play-screen__imput"
      />
      <CustomButton name="Check" @click="check" />
    </div>
    <Result v-if="showResult" :result="result" @stop="stop" @next="next" />
  </div>
</template>

<script>
import NumbersDisplay from "./NumberDisplay.vue";
import CustomInput from "./CustomInput.vue";
import CustomButton from "./CustomButton.vue";
import Result from "./Result.vue";
export default {
  components: {
    NumbersDisplay,
    CustomInput,
    CustomButton,
    Result,
  },
  data() {
    return {
      showNotice: true,
      showNumber: false,
      showResult: false,
      showInput: false,
      userNumber: null,
      showError: false,
    };
  },
  computed: {
    timeout() {
      return this.$store.state.config.timeout;
    },
    number() {
      return this.$store.state.number;
    },
    result() {
      if (this.$store.state.result) {
        return "Correct!";
      } else {
        return `Wrong! The number is ${this.$store.state.number}`;
      }
    },
  },
  created() {
    if (!this.number) {
      this.$router.push("/");
    }
  },
  mounted() {
    this.show();
  },
  methods: {
    hide() {
      setTimeout(() => {
        this.showNumber = false;
        this.showInput = true;
      }, this.timeout);
    },
    show() {
      setTimeout(() => {
        this.showNumber = true;
        this.showNotice = false;
        this.hide();
      }, 1000);
    },
    showUserResult() {
      this.showResult = true;
      this.showInput = false;
    },
    check() {
      if (this.userNumber) {
        this.$store.dispatch("check", this.userNumber);
        this.showUserResult();
      } else {
        this.notice = "Enter some number";
        this.showError = true;
      }
    },
    next() {
      this.$store.dispatch("startRound");
      this.showResult = false;
      this.showNotice = true;
      this.show();
    },
    stop() {
      this.$store.dispatch("stop");
    },
    hideError() {
      this.showError = false;
    },
  },
};
</script>

<style scoped lang="scss">
.play-screen__container {
  @include flexcol(flex-start);
  align-items: center;
  width: 100%;
}
.hint__container {
  position: relative;
  height: 6rem;
  width: 100%;
  text-align: center;
}
.play-screen__hint {
  font-size: 3rem;
  color: $button-active;
}
.result__container {
  width: 50%;
}
</style>