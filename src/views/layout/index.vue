<template>
  <div class="login">
     <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="triangle" :particleSize="4"
      linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3"
      :hoverEffect="true" hoverMode="repulse" :clickEffect="true" clickMode="push" class="lizi"></vue-particles>
    <div class="login_admin">
      <div class="login-logo">
        <span>Vue Admin</span>
      </div>
      <form class="login-from">
        <div class="login-item">
          <Input prefix="ios-person-outline" placeholder="管理员输入admin,游客输入guest" />
        </div>
        <div class="login-item">
          <Input prefix="ios-lock-outline" placeholder="管理员输入admin,游客输入guest" type="password"/>
        </div>
        <div class="login-item">
          <div class="pwd">
            <Row>
              <Col span="12">
              <CheckboxGroup v-model="social">
                <Checkbox label="pwd">
                  <span>记住我</span>
                </Checkbox>
              </CheckboxGroup>
              </Col>
              <Col span="12" class="forget-pwd">
              <label>忘记密码</label>
              </Col>
            </Row>
          </div>
          <div class="login-btn">
            <Button type="success" @click="login" long >登录</Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      social: []
    }
  },
  methods: {
    login () {
      this.$router.push('/index')
    }
  }
}

</script>
<style lang="scss" scoped>
  @import "../../scss/login.scss";
</style>
