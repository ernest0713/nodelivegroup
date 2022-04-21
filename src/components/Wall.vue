<template>
    <div>
        <section class="container mt-7 px-lg-12">
      <div class="row">
        <div class="col-md-7">
          <div class="row mt-3">
            <div class="col-md-4 pe-1 mb-md-2 mb-3">
              <select  class="form-select p-2 w-100">
                <option selected>最新貼文</option>
              </select>
            </div>
            <div class="col-md-8">
              <div class="input-group mb-3">
                <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="搜尋貼文" aria-label="Recipient's username" aria-describedby="button-addon2">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary py-0" type="button" id="button-addon2">
                        <span class="material-icons">
                            search
                        </span>
                    </button>
                </div>
                </div>
              </div>
            </div>
          </div>
          <ul class="p-0">
            <li class="card h-100 py-4 px-4 mb-3 border-2 shadow-black">
              <div class="d-flex align-items-center mb-3">
                <img class="mr-3 img-fluid rounded-circle" src="https://i.pravatar.cc/50" alt="user1" />
                <div class="d-flex flex-column mt-2">
                  <a href="#" class="mb-0 fw-bold">邊緣小杰</a>
                  <small class="text-muted">2022/1/10 12:00</small>
                </div>
              </div>
              <p>外面看起來就超冷.... 我決定回被窩繼續睡....>.&lt;</p>
              <img src="https://images.unsplash.com/photo-1635489880449-9ae67b418a6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="photo1" class="img-fluid rounded" />
            </li>
            <li class="card h-100 py-4 px-4 mb-3 border-2 shadow-black">
              <div class="d-flex align-items-center mb-3">
                <img class="mr-3 img-fluid rounded-circle" src="https://i.pravatar.cc/50" alt="user2" />
                <div class="d-flex flex-column mt-2">
                  <a href="#" class="mb-0 fw-bold">波吉</a>
                  <small class="text-muted">2022/1/10 12:00</small>
                </div>
              </div>
              <p>我一定要成為很棒棒的國王！</p>
            </li>
            <li class="card h-100 py-4 px-4 border-2 shadow-black">
              <div class="d-flex align-items-center mb-3">
                <img class="mr-3 img-fluid rounded-circle" src="https://i.pravatar.cc/50" alt="user6" />
                <div class="d-flex flex-column mt-2">
                  <a href="#" class="mb-0 fw-bold">阿爾敏</a>
                  <small class="text-muted">2022/1/10 12:00</small>
                </div>
              </div>
              <p>各位我有一個作戰計畫</p>
            </li>
          </ul>
        </div>
        <div class="d-none mt-3">
          <!-- col-md-5 d-md-block  -->
          <div class="border border-dark border-2 px-4 py-4">
            <div class="d-grid gap-2 mb-4">
              <button
                type="submit"
                class="btn btn-primary shadow-black rounded-3 w-100"
              >
                張貼動態
              </button>
            </div>
            <ul class="p-0">
              <li class="card h-100 border-0 mb-4">
                <a href="#">
                  <div class="d-flex align-items-center">
                    <img
                      class="mx-3 img-fluid rounded-circle"
                      src="https://i.pravatar.cc/50"
                      alt="user1"
                    />
                    <p class="mt-2 fw-bold">邊緣小杰</p>
                  </div>
                </a>
              </li>
              <li class="card h-100 border-0 mb-4">
                <a href="#">
                  <div class="d-flex align-items-center">
                    <div
                      class="rounded-circle border border-dark p-2 mx-3 bg-light"
                    >
                      <span class="material-icons">
                        notifications_none
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
                      <span class="material-icons">
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
      <div
        class="list-group border border-dark rounded-pill fixed-bottom bg-secondary d-md-none mx-1"
      >
        <ul class="d-flex justify-content-around mb-0 ps-0">
          <li class="list-group-item border-0 bg-secondary">
            <a href="#">
              <div class="rounded-circle border border-dark p-2 bg-white">
                <span class="material-icons material-icons-outlined">
                  home
                </span>
              </div>
            </a>
          </li>
          <li class="list-group-item border-0 bg-secondary">
            <a href="#">
              <div class="rounded-circle border border-dark p-2 bg-white">
                <span class="material-icons">
                    sms_failed
                </span>
              </div>
            </a>
          </li>
          <li class="list-group-item border-0 bg-secondary">
            <a href="#">
              <div class="rounded-circle border border-dark p-2 bg-white">
                <span class="material-icons material-icons-outlined">
                  thumb_up
                </span>
              </div>
            </a>
          </li>
          <li class="list-group-item border-0 bg-secondary">
            <a href="#">
              <div class="rounded-circle border border-dark p-2 bg-primary">
                <span class="material-icons material-icons-outlined text-white">
                  add
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello'
    }
  },
  methods: {
    getdata () {
      const data = {
        keyword: '', // 搜尋關鍵字
        sortby: 'datetime_pub', // 本次只提供最新貼文排序
        limit: '', // 每頁幾筆，本次可不提供或強制default
        page: '' // 第幾頁開始，本次可不提供或強制default 或者可改 offset Lastid 之類
      }
      const msg = this.msg
      console.log(msg, data)
    }
  }
}
</script>
