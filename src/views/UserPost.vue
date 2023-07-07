<template>
  <div class="page-wrapper">
    <!-- Preloader -->
    <div class="preloader"></div>
    <header-bar></header-bar>
    <!-- End Main Header -->
    <!-- Slider Section Two -->
    <section class="slider-section-two">
     
      <div class="container">
        <div class="row justify-content-md-center" id="content">
          <div class="p-2" >
              <button style="width:130px;position:fixed; z-index:10; bottom:0; left: 0" @click="() => reloadData()">
                        Reload
            </button>
          </div>
          <div class="col-md-8 feeds">
            <!-- User Create Post -->
            <div class="feed d-flex flex-column">
            
              <div class="p-2">
            
                <button @click="() => togglePopup('buttonTrigger')">
                  <img
                    :src="require('../assets/images/add.jpg')"
                    style="width: 2%"
                  />
                  Tạo bài đăng của bạn
                </button>
                <PopupCreatePost
                  v-if="popupTriggers.buttonTrigger"
                  :togglePopup="() => togglePopup('buttonTrigger')"
                ></PopupCreatePost>
              </div>
            </div>

            <div v-for="post in userPosts" :key="post.id">
              <div class="feed d-flex flex-column" id="{{ post.id }}">
                <div class="p-2">
                  <h5 v-if="post.isAccepted" style="color:green; font-size:bold; font-style:italic; text-align:center" >Đã phê duyệt</h5>
                  <h5 v-else style="color:red; font-size:bold; font-style:italic;text-align:center">Chưa phê duyệt</h5>
                  <div style="position: relative; height: 100px">
                    <img
                      :src=post.avatar
                      alt="Avatar"
                      class="avatar"
                      style="cursor: pointer;"
                      
                    />
                    <p
                      class="name-user"
                      style="
                        right: -95px;
                        bottom: 75px;
                        font-weight: bold;
                        font-size: 16px;
                      "
                    >
                      {{ post.userFullName }}
                    </p>
                    <p
                      class="name-user"
                      style="
                        right: -95px;
                        bottom: 85px;
                        font-weight: bold;
                        font-size: 13px;
                      "
                    >
                      {{ post.time }}
                    </p>
                  </div>
             
                  <!-- Main Menu -->
                  <nav class="main-menu show navbar-expand-md">
                    <div
                      class="navbar-collapse collapse clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul
                        class="navigation clearfix login-nav"
                        style="
                          right: -855px;
                          top: -105px;
                          width: 45px;
                          position: relative;
                        "
                      >
                        <li class="dropdown">
                          <div class="user-profile">
                            <div class="user-image" style="border-radius: 10px">
                              <img
                                :src="
                                  require('../assets/images/three-dots.png')
                                "
                              />
                            </div>
                          </div>
                          <ul
                            :id="post.id"
                            class="dropdown-menu"
                            style="width: 30px"
                          >
                            <li>
                                  <button
                                    @click="
                                      () => updatePost(post.id)
                                    "
                                  >
                                    Cập nhật
                                  </button>

                              
                            </li>
                            <li>
                              <button @click="() => deletePost(post.id)">
                                Xóa
                              </button>
                            </li>
                        
                          </ul>

                        </li>
                      </ul>
                      <!-- Login Nav -->
                    </div>
                  </nav>

                  <div class="p-2">
                    <div class="text-feed">
                      <p style="font-weight: bold; color: black; bottom: 15px; font-size:21px">
                        {{ post.title }}
                      </p>

                      <p style="font-size:17px">
                        {{ post.content }}
                        <br />
                      </p>
                    </div>

                    <iframe
                      height="415"
                      style="width: 100%; cursor: pointer"
                      controls
                      :src="post.videoUrl"
                      v-if="post.isContainVideo"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                    <img :src="post.fileUrl" style="cursor: pointer" v-else />
                  </div>
                  <div class="p-2 row" style="height: 30px">
                    <div class="col" style="bottom: 5px">
                      <img
                        class="icon-react"
                        :src="require('../assets/images/love.svg')"
                      />
                      <img
                        class="icon-react"
                        :src="require('../assets/images/like.svg')"
                      />
                      <img
                        class="icon-react"
                        :src="require('../assets/images/suprise.svg')"
                      />
                      <p style="font-size: 16px; right: -90px; bottom: 25px">
                        0
                      </p>
                    </div>
                    <div class="col" style="text-align: right; font-size: 16px">
                      <a href="#">0 Comments</a> <a href="#">0 Shares</a>
                    </div>
                  </div>
                  <hr />
                  <div class="p-2" style="bottom: 20px; position: relative">
                    <div
                      class="row"
                      style="text-align: center; font-size: 16px"
                    >
                      <div class="col-sm" style="display: flex">
                        <button id="feed1" @click="funcLike('feed1')">
                          <div id="like_feed1">
                            <img
                              class="user-action"
                              :src="require('@/assets/images/user-like.png')"
                            />
                            Like
                          </div>
                          <div
                            style="color: #347ec1; display: none"
                            id="blue_feed1"
                          >
                            <img
                              class="user-action"
                              :src="require('@/assets/images/like-blue.png')"
                            />
                            Like
                          </div>
                        </button>
                      </div>
                      <div class="col-sm" style="display: flex">
                        <button>
                          <img
                            class="user-action"
                            :src="require('@/assets/images/user-comment.jpg')"
                            style="width: 20px; height: 20px"
                          />
                          Comment
                        </button>
                      </div>
                      <div class="col-sm" style="display: flex">
                        <button>
                          <img
                            class="user-action"
                            :src="require('@/assets/images/user-share.png')"
                            style="width: 25px; height: 25px"
                          />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- feed6 - audio -->
          </div>

          <div class="col-md-4 sponsor" id="sidebar">
            <p>Sponsored by</p>
            <div class="img-sponsor">
              <img :src="require('../assets/images/sponsor/sponsor1.png')" />
            </div>
            <div class="img-sponsor">
              <img :src="require('../assets/images/sponsor/sponsor2.jpg')" />
            </div>
            <div class="img-sponsor">
              <img :src="require('../assets/images/sponsor/sponsor3.png')" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.feed1 {
  height: 440px;
}
.feed2 {
  height: 420px;
}
.feed3 {
  height: 825px;
}
.feed4 {
  height: 630px;
}
.feed5 {
  height: 917px;
}

.feed6 {
  height: 773px;
}
.p-2 .text-feed {
  font-family: "Alfa Slab One", cursive;
  font-family: "Quicksand", sans-serif;
}
.content-column .inner-column h1 {
  color: rgb(113, 63, 193);
  color: linear-gradient(
    0deg,
    rgba(113, 63, 193, 1) 0%,
    rgba(112, 67, 207, 1) 3%,
    rgba(103, 71, 198, 1) 15%,
    rgba(131, 71, 203, 1) 27%,
    rgba(166, 88, 212, 1) 44%,
    rgba(188, 96, 221, 1) 58%,
    rgba(217, 110, 212, 1) 80%,
    rgba(228, 120, 203, 1) 94%
  );
}
.slider-section-two {
  background-image: url("@/assets/images/bg-img2.png");
  /* Full height */
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.slider-section-two .content-column .text {
  color: #ffffff;
}

.content-column .inner-column .text {
  color: rgb(113, 63, 193);
}
.container {
  width: 100%;
}
.feed {
  /* position: relative;
          top:30px; */
  bottom: 59px;
  width: 934px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgb(74, 71, 71);
  margin-bottom: 40px;
}

.sponsor {
  /* position: fixed; */
  bottom: 6px;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  font-weight: bold;
  text-align: left;
  font-size: 20px;
  height: 550px;
  right: -207px;
  /* border-radius:10px; */
  /* border: 1px solid rgb(74, 71, 71); */
}

.avatar {
  vertical-align: middle;
  width: 85px;
  height: 85px;
  border-radius: 50%;
}
.text-feed {
  padding: 0px 30px 0px 30px;
  color: #131212;
  font-size: 16px;
  text-align: justify;
}
.slider-section-two a:hover {
  text-decoration: underline;
}
.icon-react {
  vertical-align: middle;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.p-2 button {
  color: #5b5959;
  font-weight: bold;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  font-family: "Quicksand", sans-serif;
  display: block;
  width: 100%;
  height: 50px;
  bottom: 45px;
  border-radius: 10px;
}

.p-2 button:hover {
  background-color: rgb(216, 210, 210);
  border-radius: 10px;
}
* {
  box-sizing: border-box;
}

.user-action {
  width: 30px;
  height: 30px;
}
.img-sponsor {
  cursor: pointer;
  padding-bottom: 10px;
  width: 100%;
}

#sidebar {
  position: fixed;
  padding-top: 100px;
  right: 0;
  width: 23%;
  height: 100%;
  background: rgba(238, 238, 238, 0);
  overflow: auto;
}
#content {
  width: 80%;
  padding-right: 40%;
}

.feeds {
  right: 45px;
}

@media screen and (min-width: 768px) and (max-width: 1400px) {
  .feed {
    width: 718px;
    padding-left: 0;
  }

  .screen {
    width: 718px;
    left: 373px;
  }

  .footer {
    left: 202px;
  }

  .info h4 {
    left: -232px;
    width: 388px;
  }

  .player {
    left: 49%;
  }

  .feeds {
    right: 80px;
  }

  #sidebar {
    width: 27%;
  }

  .feed1 {
    height: 490px;
  }

  .feed2 {
    height: 462px;
  }

  .feed3 {
    height: 846px;
  }

  .feed4 {
    height: 508px;
  }
  .feed5 {
    height: 815px;
  }
  .feed6 {
    height: 766px;
  }
}
</style>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import PopupCreatePost from "@/components/PopupCreatePost.vue";
import PopupUpdatePost from "@/components/PopupUpdatePost.vue";
import { ref } from "vue";
import {
  createPost,
  getUserPosts,
  deletePost,
  updatePost,
} from "@/services/PostService.js";
import useEvents from "@/composables/useEvent.js";

export default {
  components: {
    HeaderBar: HeaderBar,
    PopupCreatePost: PopupCreatePost,
    PopupUpdatePost: PopupUpdatePost,
  },

  data() {
    return {
      userPosts: [],
    };
  },
  mounted() {
    getUserPosts()
      .then((res) => {
        if (res.status === 200) {
          this.userPosts = res.data;
          console.log(this.userPosts);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },

  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });

    const popupTriggersUpdate = ref({
      buttonTriggerUpdate: true,
    });

    const togglePopupUpdate = (trigger) => {
      popupTriggersUpdate.value[trigger] = !popupTriggersUpdate.value[trigger];
    };

    const togglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      popupTriggers,
      togglePopup,
      popupTriggersUpdate,
      togglePopupUpdate,
    };
  },

  methods: {
    reloadData(){
      getUserPosts()
      .then((res) => {
        if (res.status === 200) {
          this.userPosts = res.data;
          console.log(this.userPosts);
          window.scrollTo(0,0);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    },
    
    funcLike(btn) {
      var id_button = btn;
      //console.log("button" + btn);
      var tmp1 = "like" + "_" + id_button;
      var tmp2 = "blue" + "_" + id_button;
      var x = document.getElementById(tmp1);
      var y = document.getElementById(tmp2);
      if (x.style.display === "none" && y.style.display === "block") {
        x.style.display = "block";
        y.style.display = "none";
      } else {
        x.style.display = "none";
        y.style.display = "block";
      }
    },

    togglePlayPause() {
      var audio = document.getElementById("audio");
      var playpause = document.getElementById("play");
      if (audio.paused || audio.ended) {
        playpause.title = "Pause";
        audio.play();
      } else {
        playpause.title = "Play";
        audio.pause();
      }
    },

    updatePost(id){
      window.location.href = 'https://kim-bk.github.io/mentore-fe/post/update/'+id
    },

    async deletePost(id) {
      await deletePost(id)
        .then((res) => {
          console.log(this.email);
          if (res.status === 200) {
            getUserPosts()
              .then((res) => {
                if (res.status === 200) {
                  this.userPosts = res.data;
                  console.log(this.userPosts);
                }
              })
              .catch((e) => {
                console.log(e);
              });
          }
        })
        .catch((e) => {
          console.log(e);
          console.log(e.response.status);
        });
    },

    // $(function () {
    //   var stickyHeaderTop = $("#stickytypeheader").offset().top;

    //   $(window).scroll(function () {
    //     if ($(window).scrollTop() > stickyHeaderTop) {
    //       $("#stickytypeheader").css({ position: "fixed", top: "0px" });
    //       $("#sticky").css("display", "block");
    //     } else {
    //       $("#stickytypeheader").css({ position: "static", top: "0px" });
    //       $("#sticky").css("display", "none");
    //     }
    //   });
    // }),
  },
};
</script>
