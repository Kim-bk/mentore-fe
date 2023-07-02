<template>
 <header class="main-header header-style-one">

<!-- Header Upper -->
<div class="header-upper" style="position:fixed; width:100%">
    
    <div class="auto-container">
        <div class="clearfix">

            <div class="pull-left logo-box">
                <div class="nav-outer clearfix">
                    <!--Mobile Navigation Toggler-->
                    <div class="mobile-nav-toggler"><span class="icon flaticon-menu"></span></div>
                    <!-- Main Menu -->
                    <nav class="main-menu show navbar-expand-md">
                        <div class="navbar-header">
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>

                        <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                
                                    
                            
                            <ul class="navigation clearfix">
                                <li>
                                    <div class="logo">
                                        <router-link to="/"><img :src="require('../assets/images/logo-official.png')"/></router-link>
                                    </div>
                                    <!-- <label style="font-weight:bold;font-size:32px; color:black; top:-10px; position:relative">
                                        Mentoré
                                    </label> -->
                                </li>
                                <li >
                                    <router-link to="/">Trang chủ</router-link>
                                    <ul>

                                    </ul>
                                </li>

                                <li><router-link to="/mentors">Tìm kiếm Mentors</router-link>
                                    <!-- <ul>
                                        <li><a href="course.html">Toán</a></li>
                                        <li><a href="course.html">Tiếng Việt</a></li>
                                        <li><a href="course.html">Ngoại ngữ</a></li>
                                        <li><a href="course.html">Âm nhạc</a></li>
                                        <li><a href="course.html">Mỹ thuật</a></li>
                                        <li><a href="course.html">Tin học</a></li>
                                    </ul> -->
                                </li>
                                <li ><router-link to="/feed">Bản tin</router-link>
                                        <!-- <ul>
                                            <li><a href="#">Đọc Sách</a></li>

                                        </ul> -->
                                </li>
                                <li class="dropdown" > 
                                    <a >Nhiều hơn</a>
                                        <ul class="dropdown-menu">
                                            <li><router-link to="/workshops">Tìm kiếm Workshop</router-link></li>
                                            <li><a href="sponsor.html">Ưu đãi từ đối tác</a></li>
                                        </ul>
                                </li>
                            </ul>
                        </div>

                    </nav>

                </div>
            </div>
            
            <div class="pull-right logo-box">
                    <!--Mobile Navigation Toggler-->

                    <!-- Main Menu -->
                    <nav class="main-menu show navbar-expand-md">
                        <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                            <ul class="navigation clearfix login-nav">
                                <li class="dropdown" v-if="imgSrc !==''"> 
                                    <a href="http://localhost:8080/profile-mentee">Trang của tôi</a>
                                    
                                </li>
                            
                                
                                <li class="dropdown" v-if="imgSrc !==''">
                                    <div class="user-profile" style="top:-10px; position:relative">
                                        <div class="user-image" style=" border-radius:10px">
                                            <img :src="`${imgSrc}`">

                                        </div>
                                    </div>
                                    <ul class="dropdown-menu">
                                        <li><router-link to="/calendar">Lịch hẹn</router-link></li>
                                        <li><router-link to="/user-post">Bài đăng của tôi</router-link></li>
                                        <li v-if="this.isMentee">
                                            <router-link to="/workshop/mentee">Workshops của tôi</router-link>
                                        </li>
                                        <li v-else>
                                            <router-link to="/workshop/mentor">Workshops của tôi</router-link>
                                        </li>
                                        <li><a v-on:click="logout">Đăng xuất</a></li>
                                    </ul>
                                   
                                </li>
                                <li v-else><router-link to="/login">Đăng nhập</router-link></li>
                                

                            </ul>
                            <!-- Login Nav -->

                        </div>
                    </nav>
            </div>
        </div>
    </div>
</div>
<!-- End Header Upper -->

<!-- Mobile Menu  -->
<div class="mobile-menu">
    <div class="menu-backdrop"></div>
    <div class="close-btn"><span class="icon flaticon-multiply"></span></div>

    <nav class="menu-box">
        <div class="nav-logo"><a href="index.html"><img :src="'@/assets/images/logo-5.png'" alt="Alternative text" title=""></a></div>
        <div class="menu-outer">
            <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
        </div>
    </nav>
</div>
<!-- End Mobile Menu -->

</header>

</template>
<script>
import {getUser, logOut} from '../services/UserService';

export default{
    data(){
		return{
            user : {
                email:'',
                name:'',
            },
            imgSrc:'',
            isMentee:true,
		}
	},
    methods: {
        async logout(){
            var vueObject = this
            vueObject.imgSrc = ''
            await logOut()
            window.location.replace("http://localhost:8080/");
        },

         getUnits: function() { 
            getUser()
            .then(res => {
                if (res.status === 200)
                {
                    var vueObject = this
                    vueObject.imgSrc = res.data.avatar;
                    vueObject.isMentee = res.data.isMentee
                }
            })
        .catch(e => {
                console.log(e)
                }
            ); }
    },
    beforeMount() {
        var vueObject = this
        if (vueObject.imgSrc === '')
            this.getUnits()
    },
}
</script>

