<template>
    <div class="header">
        <ul>
          <li class="item" v-for="item in navList">
            <a href="">{{ item }}</a>
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
  }
</style>
