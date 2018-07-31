<template>
  <div class="select">
    <Icon type="ios-search-strong"></Icon>
    <Select v-model="model13" :placeholder="placeholder" filterable remote :remote-method="remoteMethod1" :loading="loading1">
      <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
    </Select>
  </div>
</template>

<script>
  export default {
    props: ['placeholder', 'searchValue'],
    data() {
      return {
        model13: this.searchValue || '',
        loading1: false,
        options1: [],
        list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
          'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
          'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
          'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina',
          'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina',
          'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia',
          'Wisconsin', 'Wyoming'
        ]
      }
    },
    methods: {
      remoteMethod1(query) {
        if (query !== '') {
          this.loading1 = true
          setTimeout(() => {
            this.loading1 = false
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              }
            })
            this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1)
          }, 200)
        } else {
          this.options1 = []
        }
      }
    }
  }

</script>

<style lang="scss">
  .select {
    position: relative;
    i {
      position: absolute;
      top: 0.25rem;
      left: 0.43rem;
      font-size: 0.72rem;
      color: #aaa;
      z-index: 10;
    }
    .ivu-select {
      .ivu-select-selection {
        border-radius: 1.22rem;
        height: 1.22rem;
        line-height: 1.22rem;
        background: #f3f3f3;
        border: none;
        input {
          padding-left: 1.25rem;
          height: 1.22rem;
          line-height: 1.22rem;
          font-size: 0.5rem;
          color: #aaa;
          &::-webkit-input-placeholder {
            color: #aaa;
            font-size: 0.5rem;
          }
          &::-moz-placeholder {
            color: #aaa;
            font-size: 0.5rem;
          }
          &:-ms-input-placeholder {
            color: #aaa;
            font-size: 0.5rem;
          }
        }
      }
    }
  }

</style>
