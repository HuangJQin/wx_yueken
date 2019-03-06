<template>
	<div class="first" ref="first">
		<div class="first_top">
			<img src="../../static/img/logo@2x.png" width="120px"/>
		</div>
		<swiper loop auto :list="imgList" dots-position="center" :aspect-ratio="300/749"></swiper>
		<flexbox gutter="0" class="flex_box">
			<flexbox-item >
				<router-link to='/balance'>
					<div class="flex_item">
						<span slot="label">今日余额<span style="color: #cbcbcb;font-size: 12px;">(元)</span></span>
						<span slot="label"  class="label_item">84.0000</span>
						<img src="../../static/img/jrye@2x.png"/>
					</div>
				</router-link>
			</flexbox-item>
			<flexbox-item>
				<div class="flex_item">
					<span slot="label">今日公司余额<span style="color: #cbcbcb;font-size: 12px;">(元)</span></span>
					<span slot="label" class="label_item">84.0000</span>
					<img src="../../static/img/gsye@2x.png" />
				</div>
			</flexbox-item>
		</flexbox >
		<flexbox gutter="0" class="flex_box">
			<flexbox-item>
				<router-link to='/customer'>
					<div class="flex_item">
						<span slot="label">部门客户数<span style="color: #cbcbcb;font-size: 12px;">(人)</span></span>
						<span slot="label" class="label_item">4832</span>
						<img src="../../static/img/bmkhs@2x.png"/>
					</div>
				</router-link>
			</flexbox-item>
			<flexbox-item>
				<div class="flex_item">
					<span slot="label">总客户数<span style="color: #cbcbcb;font-size: 12px;">(人)</span></span>
					<span slot="label" class="label_item">4836</span>
					<img src="../../static/img/zkhs@2x.png" />
				</div>
			</flexbox-item>
		</flexbox>
		<flexbox gutter="0" class="flex_box">
			<flexbox-item>
				<div class="flex_item">
					<span slot="label" style="height: 40px;line-height: 40px;">已办结项目列表</span>
					<img src="../../static/img/ybj@2x.png" />
				</div>
			</flexbox-item>
			<flexbox-item>
				<div class="flex_item" style="background-color: #F5F5F5;"></div>
			</flexbox-item>
		</flexbox>
	</div>
</template>

<script>
import {Swiper, Flexbox, FlexboxItem} from 'vux'
export default {
	components: {
		Swiper,
		Flexbox,
		FlexboxItem
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
	mounted () {
	  var h = document.documentElement.clientHeight || document.body.clientHeight
		this.height = h - 49
		console.log(h)
		this.$refs.first.style.height = this.height + 'px'
	}
}
</script>

<style scoped="scoped">
	.first {
		background-color: #F5F5F5;
	}
	a {
		text-decoration: none;
		color: #000000;
	}
	.first_top {
		text-align: center;
		background-color: #FFFFFF;
	}
	.first img {
		margin-top: 10px;
	}
	.flex_item {
		margin: 10px 10px 0 10px;
		padding: 15px 0 0 10px;
		height: 60px;
		position: relative;
		background-color: #FFFFFF;
	}
	.flex_item img {
		width: 30px;
		position: absolute;
		top: 10px;
		right: 5px;
	}
	.flex_item span {
		font-size: 12px;
	}
	.flex_item .label_item {
		display: block;
		font-size: 20px;
		color: #e64f57;
	}
</style>
