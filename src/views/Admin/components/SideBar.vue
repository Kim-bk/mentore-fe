<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar" style="position: fixed">
    <div class="user-profile">
      <div class="user-image">
        <img src="https://ui-avatars.com/api/?name=admin" />
      </div>
      <div class="user-name">Admin</div>
    </div>
    <li>
      <ul style="padding-left: 30px">
        <li class="nav-item" style="text-align: left;">
          <router-link to="/admin/workshops">
            <i class="icon-box menu-icon"></i>
            <span class="menu-title" style="padding-left: 5px; font-size: 23px;  color: #000000b3"
              >Workshops</span
            >
          </router-link>
        </li>
        <li class="nav-item" style="text-align: left">
          <router-link to="/admin/posts">
            <i class="icon-file menu-icon"></i>
            <span class="menu-title" style="padding-left: 5px; font-size: 23px; color: #000000b3"
              >Bài đăng</span
            >
          </router-link>
        </li>
      </ul>
    </li>
  </nav>
</template>
