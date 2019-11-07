<template>
  <div>
    <h1>{{message}}</h1>
    <el-button @click="openPopup1">弹窗一</el-button>
    <el-button @click="openPopup2">弹窗二</el-button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      message: '弹窗测试'
    }
  },
  methods: {
    openPopup1 () {
      let popupInstance = this.$createPopup1({
        props: {
          message: '父级给一号弹窗的消息'
        },
        on: {
          notice: (message) => {
            this.message = message
          }
        }
      })
      popupInstance.show() // 打开弹窗
    },
    openPopup2 () {
      let popupInstance = this.$createPopup2({
        props: {
          message: '父级给二号弹窗的消息'
        },
        on: {
          notice: (message) => {
            this.message = message
          }
        }
      })
      popupInstance.show() // 打开弹窗
    }
  }
}
</script>

<style>

</style>
