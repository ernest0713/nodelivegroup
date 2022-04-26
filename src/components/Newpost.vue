<template>
  <div>
    <section class="container mt-7 px-lg-12 mb-5">
      <div class="row">
        <div class="col-md-7">
          <div
            class="card mb-5 rounded-0 border border-dark position-relative mt-3"
          >
            <h2 class="text-center py-3 mb-0">張貼動態</h2>
            <div
              class="position-absolute border border-dark border-2 w-100 py-4"
              style="z-index: -1; top: 10px; left: -10px; height: 72px"
            ></div>
          </div>
          <div class="card border border-dark shadow-black p-5">
            <form class="needs-validation">
              <div class="form-group mb-3">
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <div class="input-group mb-2">
                    <label for="userName">
                      使用者名稱
                      <span class="text-danger">*</span>
                    </label>
                    <input v-model="postData.userName" type="text" class="w-100 p-2" name="userName" placeholder="請輸入姓名">
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <div class="input-group mb-2">
                    <label for="userPhoto">
                      使用者圖片
                      <span class="text-danger">*</span>
                    </label>
                    <input v-model="postData.userPhoto" type="text" class="w-100" name="userPhoto" placeholder="請輸入大頭照網址">
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <label for="content">
                    貼文內容
                    <span class="text-danger">*</span>
                  </label>
                  <span class="ml-3 text-danger">{{ errors[0] }}</span>
                  <textarea
                    v-model="postData.content"
                    class="form-control border border-dark"
                    id="content"
                    rows="5"
                    placeholder="輸入您的貼文內容"
                  ></textarea>
                </ValidationProvider>
              </div>
              <div class="input-group mb-2 flex-column">
                <label for="imgUpload">
                  上傳圖片
                </label>
                <ValidationProvider class="d-block" rules="required" v-slot="{ errors }">
                  <input
                    v-model.lazy="src"
                    class="d-block w-100 p-2"
                    id="upload_img"
                    type="text"
                    name="imgUpload"
                    placeholder="請輸入網址"
                  />
                  <ul class="list-unstyled">
                    <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
                  </ul>
                </ValidationProvider>
              </div>
              <img :src="src" class="w-100 img-fluid mb-2" />
              <p class="text-danger text-center mb-2 d-none">
                圖片檔案過大，僅限 1mb 以下檔案
                <br />
                圖片格式錯誤，僅限 JPG、PNG 圖片
              </p>
              <div class="d-flex justify-content-center mt-2">
                <a
                  @click.prevent="sendData"
                  class="w-75 btn btn-outline-dark border border-dark"
                >
                  送出貼文
                </a>
              </div>
            </form>
          </div>
        </div>
        <div class="d-none">
          <!-- col-md-5 d-md-block  -->
          <div class="border border-dark border-2 px-4 py-5">
            <div class="d-grid gap-2 mb-4">
              <button
                type="submit"
                class="btn btn-primary shadow-black rounded-3"
              >
                張貼動態
              </button>
            </div>
            <ul class="ps-0">
              <li class="card h-100 border-0 mb-4">
                <a href="#">
                  <div class="d-flex align-items-center">
                    <img class="mx-3 img-fluid" src="" alt="user1" />
                    <p class="mt-2 fw-bold">邊緣小杰</p>
                  </div>
                </a>
              </li>
              <li class="card h-100 border-0 mb-4">
                <a href="#">
                  <div class="media d-flex align-items-center">
                    <div
                      class="rounded-circle border border-dark p-2 mx-3 bg-light hover-primary"
                    >
                      <span class="material-icons-outlined">
                        notifications
                      </span>
                    </div>
                    <p class="mt-2 fw-bold">追蹤名單</p>
                  </div>
                </a>
              </li>
              <li class="card h-100 border-0">
                <a href="#">
                  <div class="media d-flex align-items-center">
                    <div
                      class="rounded-circle border border-dark p-2 mx-3 bg-light hover-primary"
                    >
                      <span class="material-icons material-icons-outlined">
                        thumb_up
                      </span>
                    </div>
                    <p class="mt-2 fw-bold">我按讚的文章</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '欄位需填寫'
})

extend('https', {
  validate: value => {
    return new RegExp(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/).test(value)
  },
  message: '請輸入正確網址'
})

export default {
  data () {
    return {
      postData: {
        conten: '',
        image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        userName: 'Rax Xu',
        userPhoto: 'https://i.pravatar.cc/50'
      },
      src: ''
    }
  },
  components: {
    ValidationProvider
  },
  methods: {
    sendData () {
      const addPoatApi = 'https://safe-brushlands-13562.herokuapp.com/posts/addPost'
      const postData = this.postData
      this.$http.post(addPoatApi, postData)
        .then(res => {
          this.$router.push('wall')
          // console.log(res)
        })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style>
.border {
  border-width: 2px !important;
}
</style>
