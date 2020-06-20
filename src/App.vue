<template>
  <el-container class="wrap">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </el-container>
</template>

<script>
export default {};
</script>
<style lang="scss">
html {
  height: 100%;
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
  .wrap {
    height: 100%;
  }
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.06);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.12);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
