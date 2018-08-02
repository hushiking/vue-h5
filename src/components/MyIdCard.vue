<template>
  <div class="myid">
    <span class="myid_name">
      <strong>{{name}}</strong>
      <em>（中华人民共和国居民身份证）</em>
    </span>
    <span class="myid_text" v-if="passed">
      <Icon type="android-checkmark-circle"></Icon>此人已通过身份认证上传材料，无需上传
    </span>
    <span class="myid_card clearfix" v-else>
      <div class="myid_card-done" v-for="(item, index) in uploadList" :key="index">
        <img :src="item.url" alt="">
        <i v-show="index === 1">已通过</i>
        <img src="../assets/img/ico-red-close.png" alt="" @click="handleRemove(item)">
      </div>
      <Upload v-show="showFront" action="//jsonplaceholder.typicode.com/posts/" :format="['jpg','jpeg','png']" :show-upload-list="false"
        :before-upload="handleFront" :on-error="handleError">
        <Button type="ghost" icon="image">上传正面</Button>
      </Upload>
      <Upload v-show="showRear" action="//jsonplaceholder.typicode.com/posts/" :format="['jpg','jpeg','png']" :show-upload-list="false"
        :before-upload="handleRear" :on-error="handleError">
        <Button type="ghost" icon="image">上传反面</Button>
      </Upload>
    </span>
  </div>
</template>

<script>
  export default {
    props: ['name', 'passed'],
    data() {
      return {
        uploadList: [],
        showFront: true,
        showRear: true,
        front: true
      }
    },
    methods: {
      handleFront(file) {
        // 创建一个 FileReader 对象
        let reader = new FileReader()
        // readAsDataURL 方法用于读取指定 Blob 或 File 的内容
        // 当读操作完成，readyState 变为 DONE，loadend 被触发，此时 result 属性包含数据：URL（以 base64 编码的字符串表示文件的数据）
        // 读取文件作为 URL 可访问地址
        reader.readAsDataURL(file)

        reader.onloadend = e => {
          file.url = reader.result
          file.side = 'front'
          this.uploadList.push(file)
          this.showFront = false
        }
      },
      handleRear(file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onloadend = e => {
          file.url = reader.result
          file.side = 'rear'
          this.uploadList.push(file)
          this.showRear = false
        }
      },
      handleRemove(file, e) {
        this.uploadList.splice(this.uploadList.indexOf(file), 1)
        if (file.side === 'front') {
          this.showFront = true
        } else {
          this.showRear = true
        }
      },
      handleError(err) {
        console.log(err)
      }
    }
  }

</script>

<style lang="scss">
  .myid {
    line-height: 2;
    padding: 0.25rem 0.5rem;
    border: 1px solid #dddee1;
    margin-bottom: 0.54rem;
    &_name {
      display: block;
      em {
        color: #aaa;
        font-size: 0.5rem;
      }
    }
    &_text {
      color: #6ece1a;
      font-size: 0.5rem;
      i {
        font-size: 0.72rem;
        margin-right: 0.18rem;
        vertical-align: middle;
      }
    }
    &_card {
      >div {
        float: left;
        margin: 0.25rem 0.54rem 0.25rem 0;
        button {
          position: relative;
          height: 2.5rem;
          width: 4rem;
          padding: 0;
          text-align: center;
          color: #aaa;
          &:hover {
            color: #aaa;
            border-color: #dddee1;
          }
          i {
            position: absolute;
            top: 15%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 1rem;
            color: #aaa;
          }
          span {
            display: inline-block;
            margin-top: 30%;
            margin-left: 0 !important;
          }
        }
        ul {
          margin-top: 0;
        }
      }
      &-done {
        height: 2.5rem;
        width: 4rem;
        position: relative;
        img {
          &:first-child {
            height: 2.5rem;
            width: 4rem;
          }
          &:last-child {
            position: absolute;
            top: 0;
            right: 0;
            transform: translate3d(40%, -40%, 0);
            width: 1rem;
          }
        }
        i {
          position: absolute;
          bottom: 0;
          right: 0;
          color: #fff;
          background: #6ece1a;
          font-size: 0.43rem;
          line-height: 1.5;
        }
      }
    }
  }

</style>
