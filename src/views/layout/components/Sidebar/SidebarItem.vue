<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <template v-if="isSingleChildVisible">
      <app-link :to="resolvedPath(onlyOneChild.path)">
        <el-tooltip
          :content="onlyOneChild.meta.title"
          :disabled="!isCollapse"
          placement="right"
          effect="dark"
        >
          <el-menu-item :index="resolvedPath(onlyOneChild.path)" :class="{'submenu-title-noDropdown': !isNest}" popper-append-to-body >
            <Item :meta="mergedMeta" />
          </el-menu-item>
        </el-tooltip>
      </app-link>
    </template>

    <el-sub-menu v-else ref="subMenu" :index="resolvedPath(item.path)" popper-append-to-body>
      <template #title>
        <Item :meta="item.meta" />
      </template>
      <SidebarItem
        v-for="child in item.children"
        :is-nest="true"
        :item="child"
        :key="child.path"
        :base-path="resolvedPath(child.path)"
        class="nest-menu" />
    </el-sub-menu>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { isExternal } from '@/utils/validate'
import Item from './Item.vue'
import AppLink from './Link.vue'
import { ElSubMenu, ElMenuItem } from 'element-plus'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isNest: {
    type: Boolean,
    default: false
  },
  basePath: {
    type: String,
    default: ''
  },
  isCollapse: {
    type: Boolean,
    required: true
  }
})

const subMenu = ref(null)
const onlyOneChild = ref({})

// 计算是否只有一个可显示的子路由
const isSingleChildVisible = computed(() => hasOneShowingChild(props.item.children, props.item))

// 判断是否只有一个可显示的子路由
const hasOneShowingChild = (children = [], parent) => {
  const showingChildren = children.filter(item => !item.hidden)
  if (showingChildren.length === 1) {
    onlyOneChild.value = showingChildren[0]
    return true
  }

  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }
  return false
}

const resolvedPath = (routePath) => {
  if (isExternal(routePath)) {
    return routePath
  }
  const path = props.basePath + (props.basePath.endsWith('/') ? '' : '/') + routePath
  return path
}

// 计算合并的 meta
const mergedMeta = computed(() => {
  if (onlyOneChild.value && onlyOneChild.value.meta) {
    return {
      ...props.item.meta,
      ...onlyOneChild.value.meta,
      icon: onlyOneChild.value.meta?.icon || props.item.meta?.icon // 确保 icon 存在
    }
  } else if (props.item.children && props.item.children[0] && props.item.children[0].meta) {
    return {
      ...props.item.meta,
      ...props.item.children[0].meta,
      icon: props.item.children[0].meta?.icon || props.item.meta?.icon // 确保 icon 存在
    }
  } else {
    return props.item.meta
  }
})


</script>
