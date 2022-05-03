<template>
  <div>
    <section class="vh-100 d-flex justify-content-center align-items-center">
      <div
        class="card card-login px-lg-7 px-3 bg-light border-2 shadow-gray rounded-0 py-7"
        style="width: 56rem"
      >
        <div class="row px-5">
          <div class="col-md-6 mr-9 d-md-block d-none">
            <img src="../assets/banner.png" alt="signin" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <h1
              class="logo h3 mb-3 m-auto d-block text-hidden text-center"
              style="height: 5rem"
            >
              MetaWall
            </h1>
            <p class="h4 text-center mb-4">到元宇宙展開全新社交圈</p>
            <ValidationObserver v-slot="{invalid}">
            <form @submit.prevent="sendLogin">
              <ValidationProvider rules="required|email" v-slot="{ errors }">
                <div class="form-group mb-3">
                  <label class="w-100" for="userEmail">
                    <input
                      v-model="account"
                      type="text"
                      class="form-control px-2 py-4 loginInput"
                      id="userEmail"
                      aria-describedby="emailHelp"
                      name="帳號"
                      placeholder="Email"
                    />
                  </label>
                  <span class="d-block text-danger">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
              <ValidationProvider rules="required" v-slot="{ errors }">
                <div class="form-group mb-3">
                  <label class="w-100" for="userPassword">
                    <input
                      v-model="password"
                      type="password"
                      class="form-control px-2 py-4 loginInput"
                      id="userPassword"
                      placeholder="Password"
                      name="密碼"
                    />
                  </label>
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
              <p class="text-danger text-center mb-2 d-none">
                帳號或密碼錯誤，請重新輸入！
              </p>
              <div class="mb-3">
                <button
                  type="submit"
                  class="btn btn-primary w-100 loginBtn"
                  :class="{'bg-secondary':invalid}"
                  :disabled="invalid"
                >
                  登入
                </button>
              </div>
              <div class="text-center">
                <a class="text-dark" href="./register.html">註冊帳號</a>
              </div>
            </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '{_field_}未填寫'
})
extend('email', {
  ...email,
  message: '帳號為 Email 格式，請填寫正確的 Email'
})

export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  components: {
    ValidationObserver,
    ValidationProvider
  },
  methods: {
    sendLogin () {
      const api = ''
      this.$http.post(api)
    },
    showerr (errors) {
      console.log(errors)
    }
  }
}
</script>

<style lang="scss">
.card-login {
  box-shadow: -8px 8px 0px #00040029;
}
.logo {
  background: url('../assets/MetaWall.png') no-repeat center center;
}
.text-hidden {
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
}
.loginInput {
  border: 2px solid #000400;
  border-radius: 0px;
}
.loginBtn {
  height: 3rem;
  box-shadow: -2px 2px 0px #000400;
  background: #03438d 0% 0% no-repeat padding-box;
  border: 2px solid #000400;
  border-radius: 8px;
}
.py-7 {
  padding-top: 70px;
  padding-bottom: 70px;
}
</style>
