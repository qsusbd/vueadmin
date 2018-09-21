<template>
  <div class="home">
    <div class="home-top">
      <Row>
        <Col span="8">
        <div class="user-info">
          <div class="user-info-top">
            <div class="user-info-img">
              <img src="../../assets/index/user-img.jpg">
            </div>
            <div class="flex_1">
              <div class="user-name">音乐人阿庄</div>
              <div class="user-identity">超级管理员</div>
            </div>
          </div>
          <div class="user-info-bootom">
            <ul>
              <li>上次登录时间:<span>2018-01-01</span></li>
              <li>上次登录地点:<span>东莞</span></li>
            </ul>
          </div>
        </div>
        <div class="dispose">
           <div class="table-title">
            <div class="table-title-name">事项进程</div>
          </div>
          <Progress :percent="45" status="active" :stroke-width="10" ><span>成功</span></progress>
          <Progress :percent="95" status="wrong" :stroke-width="10" ><span>成功</span></progress>
          <Progress :percent="65" status="wrong" :stroke-width="10" ><span>成功</span></progress>
          <Progress :percent="75" status="active" :stroke-width="10"><span>成功</span></progress>
        </div>
        </Col>
        <Col span="16">
        <div class="riht-top">
          <Row>
            <Col span="8">
            <div class="info-box ">
              <div class="info-icon info-box-bk-red">
                <Icon type="md-contacts" />
              </div>
              <div class="info-text flex_1">
                <div class="info-text-name">访问量</div>
                <div class="info-text-number">1215</div>
              </div>
            </div>
            </Col>
            <Col span="8">
            <div class="info-box">
              <div class="info-icon info-box-bk-cyan">
                <Icon type="md-battery-charging" />
              </div>
              <div class="info-text flex_1">
                <div class="info-text-name">数量</div>
                <div class="info-text-number">1251545</div>
              </div>
            </div>
            </Col>
            <Col span="8">
            <div class="info-box">
              <div class="info-icon info-box-bk-green">
                <Icon type="ios-chatbubbles-outline" />
              </div>
              <div class="info-text flex_1">
                <div class="info-text-name">消息</div>
                <div class="info-text-number">125</div>
              </div>
            </div>
            </Col>
          </Row>
        </div>
        <div class="right-bottom">
          <div class="table-title">
            <div class="table-title-name">待办事项</div>
            <div class="table-title-add">添加</div>
          </div>
          <Table size="small" :data="data1" :columns="columns1" :show-header="true" :highlight-row="false" style="bo"
            :border="false"> </Table>
        </div>
        </Col>
      </Row>
    </div>
    <div class="home-cainter">
      <Row>
        <Col span="24">
        <div>

        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../scss/home.scss";

  .ivu-table-wrapper {
    background-color: red !important;
  }

</style>
<script>
export default {
  name: 'home',
  data () {
    return {
      columns1: [{
        type: 'selection',
        width: 60,
        align: 'center'
      }, {
        title: 'Name',
        key: 'name'
      },
      {
        title: 'Address',
        key: 'address'
      }
      ],
      data1: [{
        name: '今天要修复100个bug',
        address: '今天要修复100个bug'
      },
      {
        name: '今天要修复100个bug',
        address: '今天要修复100个bug'
      },
      {
        name: '今天要修复100个bug',
        address: '今天要修复100个bug'
      },
      {
        name: '今天要修复100个bug',
        address: '今天要修复100个bug'
      },
      {
        name: '今天要修复100个bug',
        address: '今天要修复100个bug'
      },
      {
        name: '今天要修复100个bug',
        address: '今天要修复100个bug'
      }

      ]
    }
  },
  mounted () {

  }

}

</script>
