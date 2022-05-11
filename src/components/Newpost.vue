<template>
  <div>
    <div class="card mb-5 rounded-0 border border-dark position-relative">
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
        <div class="input-group mb-2">
          <label for="imgUpload" class="btn btn-dark">
            上傳圖片
            <input
              class="d-none w-100 p-2"
              id="imgUpload"
              type="file"
              name="imgUpload"
              placeholder="請輸入網址"
              @change="fileUpload($event.target.files)"
            />
          </label>
        </div>
        <img
          v-if="src"
          :src="src"
          class="w-100 img-fluid mb-2"
          style="height: 157px"
        />
        <p class="text-danger text-center mb-2 d-none">
          圖片檔案過大，僅限 1mb 以下檔案
          <br />
          圖片格式錯誤，僅限 JPG、PNG 圖片
        </p>
        <div class="d-flex justify-content-center mt-5">
          <a
            @click.prevent="sendData"
            class="w-75 btn btn-light border border-dark text-dark"
          >
            送出貼文
          </a>
        </div>
      </form>
    </div>
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
  validate: (value) => {
    return new RegExp(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
    ).test(value)
  },
  message: '請輸入正確網址'
})

export default {
  data () {
    return {
      postData: {
        conten: '',
        image:
          'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        userName: 'Rax Xu',
        userPhoto: 'https://i.pravatar.cc/50',
        loading: true
      },
      src: ''
    }
  },
  components: {
    ValidationProvider
  },
  methods: {
    sendData () {
      const addPoatApi =
        'https://safe-brushlands-13562.herokuapp.com/posts/addPost'
      const postData = this.postData
      this.$http
        .post(addPoatApi, postData)
        .then((res) => {
          this.$router.push('wall')
          // console.log(res)
        })
        .catch((e) => console.log(e))
    },
    fileUpload (filedata) {
      console.log(filedata)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap');
.border {
  border-width: 2px !important;
}
.card {
  box-shadow: 0px 3px 0px #000400;
  border: 2px solid #000400;
  border-radius: 8px;
}
.border {
  border: 2px solid #000400 !important;
}
.postBtn {
  height: 3.5rem;
  box-shadow: -2px 2px 0px #000400;
  background: #03438d 0% 0% no-repeat padding-box;
  border: 2px solid #000400;
  border-radius: 8px;
}
.fontNSTC {
  font: normal normal bold 16px/24px Noto Sans TC;
}
.loading {
  width: 1rem;
  height: 1rem;
}
</style>
