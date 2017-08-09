<template>
	<div class="index-wrap">
    <tab v-bind:tabNames="tabName" style="display: none">
      <listTest slot="tab-con01" v-bind:dataArr="tabArr01"></listTest>
      <listTest slot="tab-con02" v-bind:dataArr="tabArr02"></listTest>
    </tab>
    <messageBox
                :type="alertType"
                :title="alertTit"
                :content="alertCon"
    ></messageBox>
	</div>
</template>

<script>
  import tab from './../common/Tab'
  import listTest from './../common/ListTest'

  import messageBox from './../common/MessageBox'

  export default {
    data () {
      return {
        tabName: ['进行中', '已结束'],
        alertType: 'prompt',
        alertTit: '我是标题',
        alertCon: '我是内容',
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
      }
    },
    mounted: function () {
    },
    methods: {
    },
    ready () {
    },
    components: {
      tab,
      listTest,
      messageBox
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
