<template>
  <div class="container-scroller">
    <!-- partial:partials/_navbar.html -->
    <!-- partial -->
    <header-bar></header-bar>
    <div class="container-fluid page-body-wrapper">
      <!-- partial:partials/_sidebar.html -->
      <side-bar></side-bar>
      <!-- partial -->
      <div class="main-panel" style="padding-left: 250px; width: 100%">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-sm-12 mb-4 mb-xl-0">
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
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Số vé</th>
                        <th>Địa điểm</th>
                        <th>Ngày</th>
                        <th>Giờ</th>
                        <th>Lĩnh vực</th>
                        <th>Các mentor</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody v-for="workshop in workshops" :key="workshop.id">
                      <tr>
                        <td>{{ workshop.id }}</td>
                        <td>{{ workshop.title }}</td>
                        <td>{{ workshop.price }} đ</td>
                        <td>{{ workshop.attendees }}</td>
                        <td>{{ workshop.location }}</td>
                        <td>{{ workshop.startDate }}</td>
                        <td>{{ workshop.time }}</td>
                        <td>{{ workshop.fields }}</td>
                        <td>
                          <p
                            v-for="mentor in workshop.mentors"
                            :key="mentor.id"
                          >
                            {{ mentor.name }}
                          </p>
                        </td>
                        <td>
                          <a
                            @click="updateWorkshop(workshop.id)"
                            style="color: blue"
                            >Cập nhật</a
                          >
                          /
                          <a @click="deleteWorkshop(workshop.id)" style="color: red">Xóa</a>
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
import { deleteWorkshop } from "@/services/WorkshopService.js";
import {getWorkshops} from "@/services/AdminService.js"

export default {
  components: {
    SideBar: SideBar,
    HeaderBar: HeaderBar,
  },
  data() {
    return {
      workshops: [],
    };
  },
  methods: {
    updateWorkshop(id) {
      window.location.href = 'https://kim-bk.github.io/mentore-fe/workshop/update/'+id
    },
    deleteWorkshop(id) {
      deleteWorkshop(id)
      .then((res) => {
        if (res.status === 200) {
          this.workshops = res.data;
          console.log(this.workshops);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    },
  },
  mounted() {
    getWorkshops()
      .then((res) => {
        if (res.status === 200) {
          this.workshops = res.data;
          console.log(this.workshops);
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
