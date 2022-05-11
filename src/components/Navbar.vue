<template>
  <div>
    <section>
      <nav
        class="navbar navbar-expand-lg navbar-light border-bottom border-3 border-dark"
      >
        <div class="container">
          <h1 class="fontPaytone mb-0">
            <router-link to="/" class="navbar-brand"
              >MetaWall
            </router-link>
            <!-- <a class="navbar-brand fs-1" href="#">MetaWall</a> -->
          </h1>
          <div class="d-flex align-items-center">
            <img
              src="https://i.pravatar.cc/50"
              alt="user1"
              class="me-2 img-fluid rounded-circle"
            />
            <div class="dropdown bg-white mx-2">
              <button
                class="btn btn-white member"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Member
              </button>
              <ul
                class="dropdown-menu py-0"
                aria-labelledby="dropdownMenuButton1"
              >
                <li class="border border-dark">
                  <a class="dropdown-item" href="#">我的貼文牆</a>
                </li>
                <li class="border border-dark">
                  <a class="dropdown-item" href="#">修改個人資料</a>
                </li>
                <li class="border border-dark">
                  <a class="dropdown-item" href="#">登出</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Paytone+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@700&family=Paytone+One&display=swap');
.navbar-brand{
  font: normal normal normal 26px/36px Paytone One !important;
}
.member{
  font: normal normal bold 16px/19px Azeret Mono;
}
.member{
  border-radius: 0px;
  border-bottom: 2px solid #000400;
}
</style>
