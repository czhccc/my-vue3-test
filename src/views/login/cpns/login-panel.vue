<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><calendar /></el-icon>Route
          </span>
        </template>
        Route
      </el-tab-pane>
      <el-tab-pane label="Config">Config</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { Calendar } from '@element-plus/icons-vue'
</script>

<style scoped lang="less">
.login-panel {
  .title {
    text-align: center;
  }
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    background-color: #f4f5f7;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
}
</style>
