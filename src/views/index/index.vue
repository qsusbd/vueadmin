<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" :open-names="['1']" theme="dark" width="auto" :class="menuitemClasses">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-analytics" /> 系统配置
            </template>
            <MenuItem name="1-1">平台分类 </MenuItem>
            <MenuItem name="1-2">管理员中 心</MenuItem>
            <MenuItem name="1-3">API管理 </MenuItem>
            <MenuItem name="1-4">导航列表 </MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-filing" />用户管理
            </template>
            <MenuItem name="2-1">会员管理</MenuItem>
            <MenuItem name="2-2">会员体现</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-cog" />商城管理
            </template>
            <MenuItem name="3-1">店铺管理</MenuItem>
            <MenuItem name="3-2">Wap管理</MenuItem>
            <MenuItem name="3-3">品牌管理</MenuItem>
            <MenuItem name="3-4">商品管理</MenuItem>
            <MenuItem name="3-5">订单管理</MenuItem>
            <MenuItem name="3-6">合同管理</MenuItem>
            <MenuItem name="3-7">审核管理</MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-cog" />公司官网
            </template>
            <MenuItem name="4-1">新闻列表</MenuItem>
            <MenuItem name="4-2">官网图片</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar clearfix">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
        </Header>
        <Content :style="{margin: '20px', background: '#f5f7f9', minHeight: 'auto'}">
          <home></home>
          <economy></economy>

        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<style scoped lang="scss">
  @import "../../scss/index.scss";
</style>
<script>
import home from '../../views/home/index'
import economy from '../../views/economy/index'
export default {
  name: 'index',
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon () {
      return ['menu-icon', this.isCollapsed ? 'rotate-icon' : '']
    },
    menuitemClasses () {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    }
  },
  methods: {
    // collapsedSider () {
    //   this.$refs.side1.toggleCollapse()
    // }
  },
  components: {
    home,
    economy
  }
}

</script>
