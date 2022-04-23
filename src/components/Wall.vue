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
            <li v-for="(item) in postsData" :key="item.id" class="card h-100 py-4 px-4 mb-3 border-2 shadow-black" >
              <div class="d-flex align-items-center mb-3">
                <img class="mr-3 rounded-circle" :src="item.userPhoto" alt="userImg" style="width: 50px; height: 50px;"/>
                <div class="d-flex flex-column mt-2">
                  <a href="#" class="mb-0 fw-bold">{{ item.userName }}</a>
                  <small class="text-muted">{{ item.datetime_pub | moment("YYYY-MM-DD h:mm a") }}</small>
                </div>
              </div>
              <p>{{ item.content }}.&lt;</p>
              <img :src="item.image" alt="photo1" class="img-fluid rounded" />
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
      postsData: []
    }
  },
  methods: {
    getdata () {
      const filter = {
        keyword: '', // 搜尋關鍵字
        sortby: 'datetime_pub', // 本次只提供最新貼文排序
        limit: '', // 每頁幾筆，本次可不提供或強制default
        page: '' // 第幾頁開始，本次可不提供或強制default 或者可改 offset Lastid 之類
      }
      // console.log(msg, filter)
      const api = 'https://safe-brushlands-13562.herokuapp.com/posts/search'
      this.$http.post(api, filter)
        .then((res) => {
          this.postsData = res.data.payload.posts
          console.log(this.postsData, typeof (this.postsData[0].datetime_pub))
        })
        .catch(e => console.log(e))
    }
  },
  created () {
    this.getdata()
  }
}
</script>
