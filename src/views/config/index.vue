<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="Product Group" name="first">
        <product />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import product from './components/product'

export default {
  name: 'Index',
  components: {
    product
  },
  data() {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped>

</style>
