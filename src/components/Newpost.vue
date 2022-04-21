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
            <form class="needs-validation" novalidate>
              <div class="form-group mb-3">
                <label for="content">貼文內容</label>
                <textarea
                  class="form-control border border-dark"
                  id="content"
                  rows="5"
                  placeholder="輸入您的貼文內容"
                ></textarea>
              </div>
              <div class="input-group mb-2">
                <label class="btn btn-dark">
                  <input
                    id="upload_img"
                    style="display: none"
                    type="file"
                    class="is-valid"
                  />
                  上傳圖片
                </label>
              </div>
              <img :src="src" class="w-100 img-fluid mb-2" />
              <p class="text-danger text-center mb-2 d-none">
                圖片檔案過大，僅限 1mb 以下檔案
                <br />
                圖片格式錯誤，僅限 JPG、PNG 圖片
              </p>
              <div class="d-flex justify-content-center mt-2">
                <a
                  @click.prevent="sendData()"
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
export default {
  data () {
    return {
      data: 'hello',
      src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  },
  methods: {
    sendata () {
      const api = 'https://localhost:27017/nodelive'
      console.log(this.data, api)
    }
  }
}
</script>

<style>
.border {
  border-width: 2px !important;
}
</style>
