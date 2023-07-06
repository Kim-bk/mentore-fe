<template>
	<div class="page-wrapper">

		<div class="preloader"></div>
		<!-- Login Section -->
		<section class="login-section">
			<div class="auto-container">
				<div class="login-box">

					<!-- Title Box -->
					<div class="title-box">
						<h2>Đăng nhập Quản trị viên</h2>
						<!-- <div class="text"><span class="theme_color">Đăng nhập</span> để vào học
						</div> -->
					</div>

					<!-- Login Form -->
					<p style="font-weight:bold; color:red; font-size:18px;"> {{errorM}} </p>
					<div class="styled-form">
						<form @submit.prevent="login">
							<div class="form-group">
								
								<label>Email</label>
								<input id="email" type="text" name="email" placeholder="Email" v-model="email">
							</div>
							<div class="form-group">
								
								<label>Mật khẩu</label>
								<span class="eye-icon flaticon-eye"></span>
								<input id="password" type="password" name="password" placeholder="Mật khẩu" v-model="password">
							</div>
							<div class="form-group">
								<div class="clearfix">
									<div class="pull-left">
										<div class="check-box">
											<input type="checkbox" name="remember-password" id="type-1">
											<label for="type-1">Nhớ mật khẩu</label>
										</div>
									</div>
									<!-- <div class="pull-right">
										<a href="#" class="forgot">Forget Password?</a>
									</div> -->
								</div>
							</div>
							
							<div class="form-group text-center">
									<button class="theme-btn btn-style-three"><span class="txt">Đăng nhập <i
											class="fa fa-angle-right"></i></span>
									</button>
							</div>
						</form>
					</div>

				</div>
			</div>
		</section>
	</div>
</template>

<script>
import {login} from '@/services/AdminService';

export default{
	data(){
		return{
			email:'',
			password:'',
			errorM:'',
		}
	},

	methods:{
		async login(){
			const payload = {
				email : this.email,
		 		password : this.password
				};
			await login(payload)
				.then(res => {
					console.log(this.email);
					if (res.status === 200)
					{
						this.$router.push('/admin/posts');
					}
				})
			.catch(e => {
                    console.log(e)
                    console.log(e.response.status)
					var vueObject = this
					vueObject.errorM = e.response.data
                    }
                );
		}
	},
}
</script>
 