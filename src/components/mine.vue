<template>
	<div class="mine" ref = "mine">
		<div class="mine_top">
			<router-link to='/first'>
				<a><</a>
			</router-link>
			<span >用户资料</span>
		</div>
		<swiper loop auto :list="imgList" :aspect-ratio="300/749" dots-position="center"></swiper>
		<div class="mine_bottom">
			<router-link to="/updatePwd">
				<div class="update">
					<img src="../../static/img/mima@2x.png" width="18px"/>
					<span>修改密码</span>
					<a>></a>
				</div>
			</router-link>
			<x-button type="primary" @click.native="out_login">退出登录</x-button>
		</div>
		<div class="blank" ref="blank"></div>
	</div>
</template>

<script>
import {Swiper, XButton} from 'vux'
export default {
	components: {
		Swiper,
		XButton
	},
	data () {
		return {
			height: 0,
			imgList: [{
				url: 'javascript:',
				img: '../static/img/banner1@2x.png'
			},
			{
				url: 'javascript:',
				img: '../static/img/banner2@2x.png'
			}]
		}
	},
	methods: {
		out_login () {
			this.$router.push('/login')
		}
	},
	mounted () {
    var h = document.documentElement.clientHeight || document.body.clientHeight
		this.height = h - 49
		console.log(h)
		this.$refs.mine.style.height = this.height + 'px'
	}
}
</script>

<style scoped="scoped">
	.mine {
		background-color: #f5f5f5;
	}
	a {
		text-decoration: none;
		color: black;
	}
	.mine_top {
		text-align: center;
		height: 53px;
		background-color: #fff;
		line-height: 53px;
	}
	.mine_top a {
		position: absolute;
		left: 5px;
	}
	.mine_top span {
		height: 30px;
		display: inline-block;
		line-height: 30px;
	}
	.update {
		height: 40px;
		margin: 10px 0 20px 0;
		display: flex;
		align-items: center;
		background-color: #fff;
	}
	.update img {
		margin: 0 8px 0 10px;
	}
	.update span {
		display: inline-block;
		line-height: 30px;
		height: 30px;
		color: black;
		font-size: 14px;
	}
	.update a {
		position: absolute;
		right: 10px;
	}
</style>
