<template>
  <el-dialog
    :visible.sync="customShow"
    width="560px"
  >
    <header slot="title">一号弹窗标题</header>
    <section class="content">{{message}}</section>
    <footer slot="footer">
      <el-button @click="customShow = false">取消</el-button>
      <el-button type="primary" @click="noticeFn">确定</el-button>
    </footer>
  </el-dialog>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {
      customShow: false
    }
  },
  methods: {
    show () {
      this.customShow = true
    },
    hide () {
      this.customShow = false
    },
    noticeFn () {
      this.$emit('notice', '1弹窗的回应')
    }
  }
}
</script>

<style scoped>
.content {
  height: 300px;
}
</style>