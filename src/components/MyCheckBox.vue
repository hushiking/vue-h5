<template>
  <!-- 设置子组件checked属性，并向父组件发射事件 -->
  <input name="checkbox" :checked="value" type="checkbox" @change="$emit('input', $event.target.checked)">
</template>

<script>
  export default {
    // 父组件传过来的值
    props: ['value'],
    data() {
      return {
        checked: this.isChecked
      }
    },
    methods: {
      // 向Login父组件发射事件
      // change(event) {
      //   console.log(event.target.checked)
      //   this.$emit('input', event.target.checked)
      // }
    }
  }

</script>

<style lang="scss" scoped>
  input {
    border: none;
    outline: none;
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
  }

  input:before {
    color: #aaa;
    content: "\F401";
    font-family: Ionicons;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  input:checked:before {
    color: #00b3ff;
    content: "\F3FF";
  }

</style>
