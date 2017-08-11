<template>
    <div class="header">
        <ul>
          <li class="item"
              v-for="(item, index) in navList"
              v-bind:item=index
              v-on:click="itemEvent(index, $event)"
          >
            <a href="javascript:;" class="item-a">{{ item }}</a>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      username: '张三',
      navList: ['首页', '新闻', '最热', '我的']
    }
  },
  methods: {
    itemEvent (item, event) {
      console.log(event)
      console.log(item)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/less/common";
  .header {
    height: 100px;
    line-height: 100px;
    .clearfix();
    .item {
      .fn-left();
      .size(25%, 100%);
      text-align: center;
      &:hover,
      .active {
        color: #f00;
      }
    }
    .item-a {
      display: block;
      .size(100%, 100%);
      font-size: 32px; /* no */
    }
  }
</style>
