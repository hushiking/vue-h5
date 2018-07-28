<template>
  <RadioGroup v-model="gender" class="radio">
    <Radio label="male">Male</Radio>
    <Radio label="female">Female</Radio>
  </RadioGroup>
</template>

<script>
  export default {
    data() {
      return {
        gender: 'female'
      }
    }
  }

</script>

<style lang="scss">
  .radio {
    height: 1.75rem;
    line-height: 1.75rem;
    .ivu-radio {
      margin-right: 1.2rem;
      .ivu-radio-inner {
        display: none;
      }
      .ivu-radio-input {
        top: -0.54rem;
        border: none;
        outline: none;
        opacity: 1;
        -webkit-appearance: none;
      }

      .ivu-radio-input:before {
        color: #aaa;
        content: "\F401";
        font-family: Ionicons;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
      }

      .ivu-radio-input:checked:before {
        color: #00b3ff;
        content: "\F3FF";
      }
    }
  }

</style>
