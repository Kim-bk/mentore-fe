<template>
  <div class="container-scroller">
    <!-- partial:partials/_navbar.html -->
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div
        class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"
      >
        <h3 style="color: white">Mentoré</h3>
      </div>
      <div
        class="navbar-menu-wrapper d-flex align-items-center justify-content-end"
      >
        <button
          class="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span class="icon-menu"></span>
        </button>
        <ul class="navbar-nav mr-lg-2">
          <li class="nav-item nav-search d-none d-lg-block">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="search">
                  <i class="icon-search"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Tìm kiếm..."
                aria-label="search"
                aria-describedby="search"
              />
            </div>
          </li>
        </ul>
        <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item dropdown d-lg-flex d-none">
            <button type="button" class="btn btn-info font-weight-bold">
              + Create New
            </button>
          </li>
          <li class="nav-item dropdown d-flex">
            <a
              class="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
              id="messageDropdown"
              href="#"
              data-toggle="dropdown"
            >
              <i class="icon-air-play mx-0"></i>
            </a>
          </li>
          <li class="nav-item dropdown d-flex mr-4">
            <a
              class="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"
              id="notificationDropdown"
              href="#"
              data-toggle="dropdown"
            >
              <i class="icon-cog"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="notificationDropdown"
            >
              <p class="mb-0 font-weight-normal float-left dropdown-header">
                Settings
              </p>
              <a class="dropdown-item preview-item">
                <i class="icon-head"></i> Profile
              </a>
              <a class="dropdown-item preview-item">
                <i class="icon-inbox"></i> Logout
              </a>
            </div>
          </li>
          <li class="nav-item dropdown mr-4 d-lg-flex d-none">
            <a
              class="nav-link count-indicatord-flex align-item s-center justify-content-center"
              href="#"
            >
              <i class="icon-grid"></i>
            </a>
          </li>
        </ul>
        <button
          class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span class="icon-menu"></span>
        </button>
      </div>
    </nav>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial:partials/_sidebar.html -->
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <div class="user-profile">
          <div class="user-image">
            <img src="https://ui-avatars.com/api/?name=admin" />
          </div>
          <div class="user-name">Admin</div>
        </div>
        <ul class="nav" style="overflow: visible; ">
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#auth"
              aria-expanded="false"
              aria-controls="auth"
              onclick="showSection('users')"
            >
              <i class="icon-head menu-icon"></i>
              <span class="menu-title">Users</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="auth">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <a class="nav-link" href="#"> Mentor </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> Mentee </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              onclick="showSection('workshops')"
            >
              <i class="icon-box menu-icon"></i>
              <span class="menu-title">Workshops</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:void(0)"
              onclick="showSection('posts')"
            >
              <i class="icon-file menu-icon"></i>
              <span class="menu-title">Posts</span>
            </a>
          </li>
        </ul>
      </nav>
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-sm-12 mb-4 mb-xl-0">
              <div id="users" class="section users">
                <div class="section-header">
                  <h1 class="section-title font-weight-bold text-dark">
                    Users
                  </h1>
                </div>
                <div class="section-content">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Birthday</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>1990-05-15</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>1985-12-03</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="workshops" class="section workshops">
                <div class="section-header">
                  <h1 class="section-title font-weight-bold text-dark">
                    Workshops
                  </h1>
                </div>
                <div class="section-content">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>150.000 đ</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>250.000 đ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="posts" class="section posts">
                <div class="section-header">
                  <h1 class="section-title font-weight-bold text-dark">
                    Posts
                  </h1>
                </div>
                <div class="section-content">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Content</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>1990-05-15</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>1985-12-03</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer"></footer>

        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
// import "@/assets/js/off-canvas.js";
// import "@/assets/js/hoverable-collapse.js";
// import "@/assets/js/template.js";
// import "@/assets/js/dashboard.js";

export default {
  mounted() {
    // Show the User Management section on page load
    window.onload = function() {
      showSection('users');
    };

    function showSection(sectionId) {
      // Hide all sections
      var sections = document.getElementsByClassName('section');
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
      }

      // Show the selected section
      var section = document.getElementById(sectionId);
      console.log(section);
      if (section) {
        section.style.display = 'block';
      }
    }
  }
};
</script>
  

<style scoped>
.sidebar {
    overflow: none; 
}

@import url("@/assets/vendors/mdi/css/materialdesignicons.min.css");
@import url("@/assets/vendors/feather/feather.css");
@import url("@/assets/vendors/base/vendor.bundle.base.css");
@import url("@/assets/vendors/flag-icon-css/css/flag-icon.min.css");
@import url("@/assets/vendors/font-awesome/css/font-awesome.min.css");
@import url("@/assets/vendors/jquery-bar-rating/fontawesome-stars-o.css");
@import url("@/assets/vendors/jquery-bar-rating/fontawesome-stars.css");
@import url("@/assets/css/style.css");

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}

.container-fluid {
    padding-left: 0px; 
}
</style>
