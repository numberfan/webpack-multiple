<template>
  <div class="list">
    <ul>
      <li v-for="item in dataArr" class="item">
        <span class="name">用户姓名：{{ item.name }}</span>
        <span class="age">用户年龄：{{ item.age }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dataArr: {
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/_mixins';
  .item {
    width: 100%;
    .display-flex();
    justify-content: space-between;
    padding: 0 20px;
    height: 70px;
    line-height: 70px;
    .box-sizing(border-box);
  }
  .list {
    .size(100%, auto);
  }
</style>
