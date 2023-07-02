<template>
	<router-view></router-view>
|</template>

<script>
import Login from '@/views/Login.vue';
import Home from '@/views/HomeView.vue';
import Register from '@/views/Register.vue';
import Feed from '@/views/FeedView.vue';
import AccountType from '@/views/AccountType.vue';
import ListMentor from '@/views/ListMentorView.vue';
import ListWorkShop from '@/views/ListWorkShopView.vue';

export default({
	components :{
		LoginView: Login,
		HomeView: Home,
		RegisterView: Register,
		FeedView: Feed,
		AccountTypeView: AccountType,
		ListMentorView: ListMentor,
		ListWorkShopView: ListWorkShop,
	}
})
</script>