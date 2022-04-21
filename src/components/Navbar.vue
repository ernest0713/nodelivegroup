<template>
    <div>
        <section>
      <nav
        class="navbar navbar-expand-lg navbar-light border-bottom border-3 border-dark"
      >
        <div class="container px-lg-12">
          <h1 class="font-paytone">
            <router-link to="/" class="navbar-brand fs-1">MetaWall </router-link>
            <!-- <a class="navbar-brand fs-1" href="#">MetaWall</a> -->
          </h1>
          <div class="d-flex align-items-center">
            <img src="https://i.pravatar.cc/50" alt="user1" class="me-2 img-fluid rounded-circle" />
            <div class="dropdown bg-white me-2">
              <button
                class="btn btn-white border-0 text-decoration-underline fw-bolder font-azeret"
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
