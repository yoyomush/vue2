<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">

    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="vars.menuBg"
      :text-color="vars.menuText"
      :active-text-color="vars.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
    >
      <SidebarItem v-for="route in filteredRoutes" :key="route.path" :item="route" :base-path="route.path" :is-collapse="isCollapse"/>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { computed, watch } from 'vue'
import { usePermissionStore } from '@/stores/permission'
import SidebarItem from './SidebarItem.vue'

const store = usePermissionStore()

// 过滤掉 hidden 的路由
const filteredRoutes = computed(() => {
  return store.routes.filter(route => !route.meta?.hidden)
})

const sidebar = computed(() => store.sidebar)
const isCollapse = computed(() => sidebar.value ? !sidebar.value.opened : true)

const vars = {
  menuBg: getComputedStyle(document.documentElement).getPropertyValue('--menu-bg').trim(),
  menuText: getComputedStyle(document.documentElement).getPropertyValue('--menu-text').trim(),
  menuActiveText: getComputedStyle(document.documentElement).getPropertyValue('--menu-active-text').trim()
}

// 观察 sidebar 变化
watch(sidebar, (newVal, oldVal) => {
  console.log('sidebar changed:', oldVal, '->', newVal)
})
watch(isCollapse, () => {
  console.log(isCollapse.value, sidebar.value)
})

</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

</style>
