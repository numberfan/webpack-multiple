<!--调用指南：
<tab v-bind:tabNames="tabName">
  <listTest slot="tab-con01" v-bind:dataArr="tabArr01"></listTest>
  <listTest slot="tab-con02" v-bind:dataArr="tabArr02"></listTest>
</tab>

tabNames：tab-name具体值 为数组
listTest：为tab-con值
slot[name=tab-con01] 为第一个tab-con
slot[name=tab-con02] 为第二个tab-con-->

<template>
  <div class="tab-box">
    <div class="tab-tit">
      <div class="item"
           v-for="(item, index) in tabNames"
           v-bind:class="{'active': index === selected}"
           v-on:click="tabSwipe(index)"
      >{{ item }}</div>
    </div>
    <div class="tab-con">
      <div class="item" v-bind:class="{'active': 0 === selected}">
        <slot name="tab-con01">11111</slot>
      </div>
      <div class="item" v-bind:class="{'active': 1 === selected}">
        <slot name="tab-con02">2222</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 0 // 当前选中的tab index
    }
  },
  props: {
    tabNames: {
      required: true
    }
  },
  methods: {
    tabSwipe (index) {
      this.selected = index
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/_mixins';
  .tab-box {
    width: 100%;
    overflow-x: hidden;
  }
  .tab-tit {
    .size(100%, 80px);
    line-height: 80px;
    .item {
      border-bottom: 4px solid transparent;
      .size(50%, 100%);
      float: left;
      text-align: center;
      font-size: 32px; /*px*/
      .transition(border 0.2s ease-in-out);
      &.active {
        border-bottom-color: #333;
      }
    }
  }
  .tab-con {
    .size(100%, auto);
    .clearfix();
    white-space: nowrap;
    .item {
      float: left;
      width: 100%;
      display: none;
      &.active {
        display: block;
      }
    }
  }

</style>
