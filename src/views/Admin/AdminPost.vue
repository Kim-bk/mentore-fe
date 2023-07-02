<template>
  <div class="container-scroller">
    <!-- partial:partials/_navbar.html -->
    <!-- partial -->
    <header-bar></header-bar>
    <div class="container-fluid page-body-wrapper">
      <!-- partial:partials/_sidebar.html -->
      <side-bar></side-bar>
      <!-- partial -->
      <div class="main-panel" style="padding-left: 250px; width:100%">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-sm-12 mb-4 mb-xl-0">
              <div id="posts" class="section posts">
                <div class="section-header">
                  <h1 class="section-title font-weight-bold text-dark">
                    Các bài đăng
                  </h1>
                </div>
                <div class="section-content">
                  <table>
                    <thead>
                      <tr style="text-align:center">
                        <th>ID</th>
                        <th>Tiêu đề</th>
                        <th>Ngày tạo</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody v-for="post in posts" :key="post.id">
                      <tr>
                        <td>{{ post.id }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.createdAt }}</td>
                    
                        <td v-if="post.isAccepted" style="color: green">
                          Đã phê duyệt
                        </td>
                        <td v-else style="color: red">Chưa phê duyệt</td>
                        <td>
                            <router-link :to="{ name: 'admin-detail-post', params: { id: post.id } }">Xem chi tiết</router-link>
                            <a @click="acceptPost(post.id)" v-if="post.isAccepted==false" style="color:green"> / Duyệt</a>
                        </td>
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

        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
import SideBar from "@/views/Admin/components/SideBar.vue";
import HeaderBar from "@/views/Admin/components/HeaderBar.vue";
import { getPosts, acceptPost } from "@/services/AdminService.js";

export default {
  components: {
    SideBar: SideBar,
    HeaderBar: HeaderBar,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods:{
    acceptPost(id)
    {
      const payload = {
				id : id,
				};
      acceptPost(payload)
      .then((res) => {
        if (res.status === 200) {
          this.posts = res.data;
          console.log(this.posts);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    }
  },
  mounted() {
    getPosts()
      .then((res) => {
        if (res.status === 200) {
          this.posts = res.data;
          console.log(this.mentors);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style scoped>
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
