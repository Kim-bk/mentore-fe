<template>
    <header-bar style="position: fixed; width: 100%;top:0px"></header-bar>

<div class="container-xl px-4 mt-4" 
    style="top:120px; left:0%; position: relative;font-family: 'Quicksand', sans-serif;">
    <!-- Account page navigation-->
    <!-- <nav class="nav nav-borders">
        <a class="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Profile</a>
        <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page" target="__blank">Billing</a>
        <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-security-page" target="__blank">Security</a>
        <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-edit-notifications-page"  target="__blank">Notifications</a>
    </nav> -->
    <hr class="mt-0 mb-4">
    <div class="row">
        <div class="col-xl-4">
            <!-- Profile picture card-->
            <div class="card mb-4 mb-xl-0">
                <div class="card-body text-center">
                    <!-- Profile picture image-->
                    <img class="img-account-profile rounded-circle mb-2" :src="mentor.avatar" alt="">
                    <h4>{{mentor.name}}</h4>
                </div>
                <div style="padding-left:20px;">
                    <div class="mb-3">
                        <label class="small mb-1" for="inputEmailAddress">Email:</label>
                        <p>{{mentor.email}}</p>
                    </div>
                    <!-- Form Row-->
                    <div class="mb-3">
                        <label class="small mb-1" for="inputBirthday">Số điện thoại:</label>
                        <p>{{mentor.phoneNumber}}</p>
                    </div>
                    <!-- Form Row-->
                    <div class="mb-3">
                        <label class="small mb-1" for="inputBirthday">Ngày sinh:</label>
                        <p>{{mentor.birthDate}}</p>
                    </div>
                    <button style="   
                    position: relative;
                    display: inline-block;
                    font-size: 16px;
                    /* line-height: 30px; */
                    color: #ffffff;
                    padding: 12px 44px 12px;
                    font-weight: 400;
                    background: none;
                    background-color: #b25cd9;
                    margin-bottom:10px;" @click="bookAppointment()"
                    v-if="this.userGroup === 'MENTEE'">
                    Đặt lịch hẹn</button>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <!-- Account details card-->
            <div class="card mb-4">
                <div class="card-header" style="color:rgb(232, 103, 236); font-size:23px; font-weight:bold;">Thông tin cá nhân</div>
                <div class="card-body">
                        <!-- Form Row        -->
                        <div class="row gx-3 mb-3">
                            <!-- Form Group (organization name)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">Công việc hiện tại:</label>
                                <p>{{mentor.currentJob}}</p>
                            </div>
                            <!-- Form Group (location)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">Nơi ở:</label>
                                <p>{{mentor.locationName}}</p>
                            </div>
                        </div>
                        <div class="row gx-3 mb-3">
                            <!-- Form Group (organization name)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">Lĩnh vực quan tâm:</label>
                                <p>{{mentor.fields}}</p>
                            </div>
                     
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Giới thiệu bản thân:</label>
                            <p>{{mentor.description}}</p>
                        </div>
                       
                </div>
            </div>
            <div class="card mb-4" v-if="this.experiences.length === 0">
                <div class="card-header" style="color:rgb(232, 103, 236); font-size:23px; font-weight:bold;" >Kinh nghiệm làm việc</div>
                <div class="card-body" >
                        <!-- Form Row        -->
                        <div class="row">
                            <div class="col" style="width: 70px">
                                <img :src="require('../assets/images/logo-official.png')" style="width:40px; margin-bottom:10px"/>
                            </div>
                            <div class="col-6" style="padding-top:15px">
                            HR Manager tại FPT Software
                            </div>
                            <div class="col" style="padding-top:15px">
                             2019
                            </div>
                            <br/>
                        </div>

                        <div class="row">
                            <div class="col" style="width: 70px">
                                <img :src="require('../assets/images/logo-official.png')" style="width:40px;"/>
                            </div>
                            <div class="col-6" style="padding-top:15px">
                            Project Manager tại VNPT Software
                            </div>
                            <div class="col" style="padding-top:15px">
                             2022
                            </div>
                            <br/>
                        </div>
                </div>
            </div>
            <div class="card mb-4" v-else>
                <div class="card-header" style="color:rgb(232, 103, 236); font-size:23px; font-weight:bold;" >Kinh nghiệm làm việc</div>
                <div class="card-body" >
                        <!-- Form Row        -->
                        <div class="row" v-for="exp in mentor.experiences" :key="exp.id" style="margin-bottom:10px">
                            <div class="col" style="width: 70px">
                                <img :src="require('../assets/images/logo-official.png')" style="width:40px;"/>
                            </div>
                            <div class="col-6" style="padding-top:15px">
                            {{ exp.job }} tại {{ exp.company }}
                            </div>
                            <div class="col" style="padding-top:15px">
                             {{ exp.year }}
                            </div>
                            <br/>
                        </div>
                </div>
            </div>
           
        </div>
   
    </div>
</div>
</template>
<script>
import HeaderBar from '@/components/HeaderBar.vue';
import {getMentorById} from '@/services/MentorService.js'

export default({
	components :{
		HeaderBar: HeaderBar
	},
    data(){
           return {
              id: this.$route.params.id, //this is the id from the browser
              mentor: {},
              userGroup:'',
              experiences:[]
           }
       },

    mounted() {
    this.userGroup = localStorage.getItem('userGroup');

     getMentorById(this.id)
      .then(res => {
        if (res.status === 200)
        {
          this.mentor = res.data
          this.experiences = res.data.experiences
          console.log(this.experiences.length)
          console.log(this.mentor)
        }
      })
    .catch(e => {
        console.log(e)
        }
    ); },

    methods:{
        bookAppointment(){
            window.location.href = 'https://kim-bk.github.io/calendar/mentor/'+this.id
        }
    }
})
</script>

<style scoped>
body{margin-top:20px;
background-color:#f2f6fc;
color:#69707a;
}
.img-account-profile {
    height: 10rem;
}
.rounded-circle {
    border-radius: 50% !important;
}
.card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}
.card .card-header {
    font-weight: 500;
}
.card-header:first-child {
    border-radius: 0.35rem 0.35rem 0 0;
}
.card-header {
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    background-color: rgba(33, 40, 50, 0.03);
    border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}
.form-control, .dataTable-input {
    display: block;
    width: 100%;
    padding: 0.875rem 1.125rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1;
    color: #69707a;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #c5ccd6;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.35rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.nav-borders .nav-link.active {
    color: #0061f2;
    border-bottom-color: #0061f2;
}
.nav-borders .nav-link {
    color: #69707a;
    border-bottom-width: 0.125rem;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0;
    padding-right: 0;
    margin-left: 1rem;
    margin-right: 1rem;
}
label{
    font-weight:bold;
    font-size: 18px;
    font-style:italic;
}
</style>

