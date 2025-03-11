<template>
  <div>
    <div class="login_container">
      <el-row>
        <el-col :span="12" :xs="0"></el-col>
        <el-col :span="12" :xs="24">
          <el-form class="login_form">
            <h1>Hello</h1>
            <h2>欢迎来到科软甄选</h2>
            <el-form-item>
              <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                type="password"
                :prefix-icon="Lock"
                v-model="loginForm.password"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="login_btn" @click="login" :loading="loading">
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'LoginView',
})
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const loginForm = reactive({
  username: 'admin',
  password: '111111',
})

const loading = ref(false)

const userStore = useUserStore()
const router = useRouter()

const login = async () => {
  loading.value = true
  try {
    await userStore.userLogin(loginForm)
    router.push('/')
    ElNotification({
      title: '登录成功',
      message: '欢迎回来',
      type: 'success',
    })
    loading.value = false
  } catch (err) {
    loading.value = false
    ElNotification({
      title: '登录失败',
      message: (err as Error).message,
      type: 'error',
    })
  }
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    width: 60%;
    top: 30vh;
    position: relative;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
