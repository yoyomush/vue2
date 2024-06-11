<template>
  <div>
    <div v-loading="isLoading" class="comp-tree">
      <el-button
        class="comp-tr-top"
        type="primary"
        size="small"
        @click="handleAddTop">添加顶级节点</el-button>
      <!-- tree -->
      <el-tree
        ref="SlotTree"
        :data="setTree"
        :props="defaultProps"
        :expand-on-click-node="false"
        :node-key="NODE_KEY"
        highlight-current>
        <div slot-scope="{ node, data }" class="comp-tr-node">
          <template v-if="node.isEdit">
            <el-input :ref="'slotTreeInput' + data[NODE_KEY]" v-model="data.label" autofocus size="mini" @blur.stop="handleInput(node, data)" @keyup.enter.native="handleInput(node, data)" />
          </template>
          <template v-else>
            <span :class="[data[NODE_KEY] < NODE_ID_START ? 'is-new' : '', 'comp-tr-node--name']">
              {{ node.label }}
            </span>
            <span class="comp-tr-node--btns">
              <el-button icon="el-icon-plus" size="mini" circle type="primary" @click="handleAdd(node, data)" />
              <el-button icon="el-icon-edit" size="mini" circle type="info" @click="handleEdit(node, data)" />
              <el-button icon="el-icon-delete" size="mini" circle type="danger" @click="handleDelete(node, data)" />
            </span>
          </template>
        </div>
      </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      isLoading: false, // 是否加载
      NODE_KEY: 'id', // id对应字段
      MAX_LEVEL: 3, // 设定最大层级
      NODE_ID_START: 0, // 新增节点id，逐次递减
      startId: null,
      defaultProps: { // 默认设置
        children: 'children',
        label: 'label'
      },
      initParam: { // 新增参数
        label: '新增节点',
        pid: 0,
        children: []
      },
      setTree: [
        {
          id: 1,
          value: 'CSG',
          label: 'CSG',
          children: [
            {
              id: 2,
              value: 'Desktop',
              label: 'Desktop',
              children: [
                {
                  id: 3,
                  value: 'Alienware Desktops',
                  label: 'Alienware Desktops'
                },
                {
                  id: 4,
                  value: 'Inspiron Desktops',
                  label: 'Inspiron Desktops'
                },
                {
                  id: 5,
                  value: 'OptiPlex Desktops',
                  label: 'OptiPlex Desktops'
                },
                {
                  id: 6,
                  value: 'Precision Desktops',
                  label: 'Precision Desktops'
                },
                {
                  id: 7,
                  value: 'XPS Desktops',
                  label: 'XPS Desktops'
                }
              ]
            },
            {
              id: 8,
              value: 'IoT',
              label: 'IoT',
              children: [
                {
                  id: 9,
                  value: 'Cloud Products',
                  label: 'Cloud Products'
                }
              ]
            },
            {
              id: 10,
              value: 'Notebook',
              label: 'Notebook',
              children: [
                {
                  id: 11,
                  value: 'Alienware Notebooks',
                  label: 'Alienware Notebooks'
                },
                {
                  id: 12,
                  value: 'Commercial Chrome',
                  label: 'Commercial Chrome'
                },
                {
                  id: 13,
                  value: 'Inspiron Notebooks',
                  label: 'Inspiron Notebooks'
                },
                {
                  id: 14,
                  value: 'Latitude',
                  label: 'Latitude'
                },
                {
                  id: 15,
                  value: 'Precision Notebooks',
                  label: 'Precision Notebooks'
                },
                {
                  id: 16,
                  value: 'Vostro Notebooks',
                  label: 'Vostro Notebooks'
                },
                {
                  id: 17,
                  value: 'XPS Notebooks',
                  label: 'XPS Notebooks'
                }
              ]
            },
            {
              id: 18,
              value: 'Rugged',
              label: 'Rugged',
              children: [
                {
                  id: 19,
                  value: 'Latitude',
                  label: 'Latitude'
                },
                {
                  id: 20,
                  value: 'Tablets',
                  label: 'Tablets'
                }
              ]
            },
            {
              id: 21,
              value: 'Wyse',
              label: 'Wyse',
              children: [
                {
                  id: 22,
                  value: 'WYSE',
                  label: 'WYSE'
                }
              ]
            }
          ]
        },
        {
          id: 23,
          value: 'ISG',
          label: 'ISG',
          children: [
            {
              id: 24,
              value: 'ESI',
              label: 'ESI'
            },
            {
              id: 25,
              value: 'Server',
              label: 'Server',
              children: [
                {
                  id: 26,
                  value: 'Cloud Products',
                  label: 'Cloud Products'
                },
                {
                  id: 27,
                  value: 'PowerEdge',
                  label: 'PowerEdge'
                },
                {
                  id: 28,
                  value: 'PowerEdge OEM',
                  label: 'PowerEdge OEM'
                },
                {
                  id: 29,
                  value: 'Software',
                  label: 'Software',
                  children: [
                    {
                      id: 30,
                      value: 'Server and Other',
                      label: 'Server and Other'
                    },
                    {
                      id: 31,
                      value: 'Storage',
                      label: 'Storage'
                    }
                  ]
                }
              ]
            },
            {
              id: 32,
              value: 'Storage',
              label: 'Storage',
              children: [
                {
                  id: 33,
                  value: 'Dell Networking',
                  label: 'Dell Networking'
                },
                {
                  id: 34,
                  value: 'Dell Storage OEM',
                  label: 'Dell Storage OEM'
                },
                {
                  id: 35,
                  value: 'Dell Storage PS',
                  label: 'Dell Storage PS'
                },
                {
                  id: 36,
                  value: 'Dell Storage SC',
                  label: 'Dell Storage SC'
                }
              ]
            }
          ]
        },
        {
          id: 37,
          value: 'S&P, Monitor',
          label: 'S&P, Monitor',
          children: [
            {
              id: 38,
              value: 'Monitor',
              label: 'Monitor'
            },
            {
              id: 39,
              value: 'Projector',
              label: 'Projector'
            }
          ]
        }
      ]
    }
  },
  created() {
    // 初始值
    this.startId = this.NODE_ID_START
  },
  methods: {
    handleDelete(_node, _data) { // 删除节点
      console.log(_node, _data)
      // 判断是否存在子节点
      if (_data.children && _data.children.length !== 0) {
        this.$message.error('此节点有子级，不可删除！')
        return false
      } else {
        // 删除操作
        const DeletOprate = () => {
          this.$nextTick(() => {
            if (this.$refs.SlotTree) {
              this.$refs.SlotTree.remove(_data)
              this.$message.success('删除成功！')
            }
          })
        }

        // 二次确认
        const ConfirmFun = () => {
          this.$confirm('是否删除此节点？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            DeletOprate()
          }).catch(() => {})
        }

        // 判断是否新增： 新增节点直接删除，已存在的节点要二次确认
        _data[this.NODE_KEY] < this.NODE_ID_START ? DeletOprate() : ConfirmFun()
      }
    },
    handleInput(_node, _data) { // 修改节点
      console.log(_node, _data)
      // 退出编辑状态
      if (_node.isEdit) {
        this.$set(_node, 'isEdit', false)
      }
    },
    handleEdit(_node, _data) { // 编辑节点
      console.log(_node, _data)
      // 设置编辑状态
      if (!_node.isEdit) {
        this.$set(_node, 'isEdit', true)
      }

      // 输入框聚焦
      this.$nextTick(() => {
        if (this.$refs['slotTreeInput' + _data[this.NODE_KEY]]) {
          this.$refs['slotTreeInput' + _data[this.NODE_KEY]].$refs.input.focus()
        }
      })
    },
    handleAdd(_node, _data) { // 新增节点
      console.log(_node, _data)
      // 判断层级
      if (_node.level >= this.MAX_LEVEL) {
        this.$message.warning('当前已达到' + this.MAX_LEVEL + '级，无法新增！')
        return false
      }

      // 参数修改
      const obj = JSON.parse(JSON.stringify(this.initParam)) // copy参数
      obj.pid = _data[this.NODE_KEY] // 父id
      obj[this.NODE_KEY] = --this.startId // 节点id：逐次递减id
      // 判断字段是否存在
      if (!_data.children) {
        this.$set(_data, 'children', [])
      }
      // 新增数据
      _data.children.push(obj)

      // 展开节点
      if (!_node.expanded) {
        _node.expanded = true
      }
    },
    handleAddTop() { // 添加顶部节点
      const obj = JSON.parse(JSON.stringify(this.initParam)) // copy参数
      obj[this.NODE_KEY] = --this.startId // 节点id：逐次递减id
      this.setTree.push(obj)
    }
  }
}
</script>

<style scoped lang="scss">
/*common  */
// 显示按钮
.show-btns{
  opacity: 1;
}
/* common end */
.comp-tree{
  width: 100%;
  max-height: 80vh;
  overflow: hidden;
  // 顶部按钮
  .comp-tr-top{
    width: 100px;
    margin-bottom: 2em;
  }
  // 自定义节点
  .comp-tr-node{
    // label
    .comp-tr-node--name{
      display: inline-block;
      line-height: 40px;
      min-height: 40px;
      // 新增
      &.is-new{
        font-weight: bold;
      }
    }
    // button
    .comp-tr-node--btns{
      margin-left: 10px;
      opacity: 0;
      transition: opacity .1s;
      .el-button{
        transform: scale(0.8);// 缩小按钮
        & + .el-button{
          margin-left: -1px;
        }
      }
    }
  }
  // 高亮显示按钮
  .is-current{
    &>.el-tree-node__content{
      .comp-tr-node--btns{
        @extend .show-btns;
      }
    }
  }
  // 悬浮显示按钮
  .el-tree-node__content{
    &:hover{
      .comp-tr-node--btns{
        @extend .show-btns;
      }
    }
  }
}
</style>
