<template>
	<div class="deal" ref="deal">
		<div class="deal_top">
			<router-link to="/first">
				<a><</a>
			</router-link>
			<span>我的代办</span>
		</div>
		<ul class="deal_list">
			<li class="list">
				<div>
					<span class="name">谭显光</span>
					<span class="detail">放款申请流程</span>
					<span class="time">2019-01-07</span>
				</div>
				<span class="address">粤垦贷第20190627号</span>
			</li>
			<li class="list">
				<div>
					<span class="name">禹建政</span>
					<span class="detail" style="color: #f29a5b; border: 1px solid #f29a5b;">非授信申请流程</span>
					<span class="time">2019-01-07</span>
				</div>
				<span class="address">粤垦贷第20190627号</span>
			</li>
			<li class="list">
				<div>
					<span class="name">李国章</span>
					<span class="detail">放款申请流程</span>
					<span class="time">2019-01-07</span>
				</div>
				<span class="address">粤垦贷第20190627号</span>
			</li>
			<li class="list">
				<div>
					<span class="name">张梦琪</span>
					<span class="detail">放款申请流程</span>
					<span class="time">2019-01-07</span>
				</div>
				<span class="address">粤垦贷第20190627号</span>
			</li>
			<li class="list">
				<div>
					<span class="name">李丽</span>
					<span class="detail">放款申请流程</span>
					<span class="time">2019-01-07</span>
				</div>
				<span class="address">粤垦贷第20190627号</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			height: 0
		}
	},
	mounted () {
	  var h = document.documentElement.clientHeight || document.body.clientHeight
		this.height = h - 49
		console.log(h)
		this.$refs.deal.style.height = this.height + 'px'
	}
}
</script>

<style scoped="scoped">
	.deal {
		background-color: #F5F5F5;
	}
	.deal_top {
		height: 53px;
		text-align: center;
		background-color: #fff;
		line-height: 53px;
	}
	.deal_top a {
		position: absolute;
		left: 5px;
	}
	.deal_top span {
		line-height: 30px;
	}
	.list {
		height: 60px;
		background-color: #FFFFFF;
		border: 1px solid #F5F5F5;
		padding-top: 12px;
		padding-left: 10px;
	}
	.detail {
		border: 1px solid #97b3ec;
		font-size: 12px;
		color: #97B3EC;
		border-radius: 10px;
		padding: 0 12px 0 10px;
	}
	.time {
		position: absolute;
		right: 5px;
		color: #dadada;
		font-size: 10px;
	}
	.address {
		font-size: 12px;
		color: #a9a9a9;
	}
</style>
