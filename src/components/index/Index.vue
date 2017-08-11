<template>
	<div class="index-wrap">
    <tab v-bind:tabNames="tab.tabName">
      <listTest slot="tab-con01" v-bind:dataArr="tab.tabArr01"></listTest>
      <listTest slot="tab-con02" v-bind:dataArr="tab.tabArr02"></listTest>
    </tab>
    <message :dialog-config="dialogConfig1" @left-btn="cancel1" @right-btn="sure1" @close-dia="closeDia"></message>
	</div>
</template>

<script>
  import tab from './../common/Tab'
  import listTest from './../common/ListTest'
  import message from '../common/Dialog'

  export default {
    data () {
      return {
        tab: {
          tabName: ['进行中', '已结束'],
          /* tab测试数据 */
          tabArr01: [
            {name: '张三', age: 1000},
            {name: '张三', age: 1000},
            {name: '张三', age: 1000},
            {name: '张三', age: 1000},
            {name: '张三', age: 1000},
            {name: '张三', age: 1000},
            {name: '张三', age: 1000},
            {name: '张三', age: 1000},
            {name: '张三', age: 1000},
            {name: '张三', age: 1000},
            {name: '张三', age: 1000},
            {name: '张三', age: 1000},
            {name: '张三', age: 1000},
            {name: '张三', age: 1000}
          ],
          tabArr02: [
            {name: '李四', age: 10},
            {name: '李四', age: 10},
            {name: '李四', age: 10},
            {name: '李四', age: 10},
            {name: '李四', age: 10},
            {name: '李四', age: 10},
            {name: '李四', age: 10},
            {name: '李四', age: 10},
            {name: '李四', age: 10},
            {name: '李四', age: 10},
            {name: '李四', age: 10},
            {name: '李四', age: 10},
            {name: '李四', age: 10},
            {name: '李四', age: 10}
          ]
        },
        dialogConfig1: {
          hasClose: true,
          title: '提示',
          content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          button: ['取消', '确定'],
          isDiaShow: false
        }
      }
    },
    mounted: function () {
      console.log(233)
    },
    methods: {
      openDia1 () {
        this.dialogConfig1.isDiaShow = true
      },
      cancel1 () {
        this.dialogConfig1.isDiaShow = false
      },
      sure1 () {
        console.log('确定1')
        this.dialogConfig1.isDiaShow = false
      },
      closeDia () {
        this.dialogConfig1.isDiaShow = false
      }
    },
    ready () {
    },
    components: {
      tab,
      listTest,
      message
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/less/_mixins';
  .index-wrap {
    background: #f9f9f9;
  }
  .scroll-top {
    margin-top: 80px;
  }
</style>
