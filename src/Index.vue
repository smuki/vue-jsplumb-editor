<template>
  <el-container class="indexWrap">
      <FlowChart></FlowChart>
  </el-container>
</template>

<script>
import FlowChart from './FlowChart.vue';

export default {
  components: { FlowChart },

};
</script>

<style lang="scss">
.indexWrap{
  .fy_el-aside {
    background: #21232b;
    overflow-x: hidden;
    .el-menu--collapse {
      width: 48px;
      .el-menu-item {
        padding-left: 0 !important;
        padding: 0px !important;
        height: 48px;
        text-align: center;
        line-height: 48px;
        &:first-child {
          i {
            color: #fff !important;
          }
        }
        &.is-active {
          .el-tooltip {
            background: #121319;
            &::after {
              content: "";
              width: 3px;
              background: #00c1de;
              height: 48px;
              display: block;
              position: absolute;
              top: 0;
            }
          }
        }
        .el-tooltip {
          padding: 0 !important;
        }
      }
    }
  }
  .el-main{
    padding: 0;
  }
}

</style>
