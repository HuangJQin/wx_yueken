<template>
	<div class="login">
		<img class="logo" src="../../static/img/logo@2x.png" />
		<p class="msg">{{msg}}</p>
		<group class="group">
			<x-input placeholder="账号" v-model="username" type="text"></x-input>
			<x-input placeholder="密码" v-model="password" type="password"></x-input>
		</group>
		<!-- <input class="username" placeholder="账号"/>
		<input class="password" placeholder="密码" /> -->
		<x-button class='loginBtn' type="primary" @click.native="login">登录</x-button>
	</div>
</template>

<script>
import {Group, XInput, XButton} from 'vux'
export default {
	name: 'App',
	data () {
		return {
			msg: '后台管理登录',
			username: '',
			password: ''
		}
	},
	components: {
		Group,
		XInput,
		XButton
	},
	methods: {
		clearName () {
			this.username.reset()
		},
		clearPwd () {
			this.password = ''
		},
		login () {
			if (this.username !== '' && this.password !== '') {
				this.$router.push('/first')
			}
		}
	}
}
</script>

<style scoped="scoped">
	.login {
			text-align: center;
		}
		.logo {
			display: inline-block;
			margin: 100px 0 30px 0;
		}
		.msg {
			font-size: 30px;
		}
		.group {
			margin-bottom: 20px;
		}
</style>
