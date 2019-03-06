<template>
	<div class="customer" ref="customer">
		<div class="customer_top">
			<router-link to='/first'>
				<a><</a>
			</router-link>
			<span>部门客户列表</span>
		</div>
		<div class="list">
			<p class="name">肖明洲<span class="name_item">客户类型：个人</span></p>
			<p class="other">客户编码：2018060501993</p>
			<p class="other">所属区域：湛江市</p>
			<p><span>农</span><span>林</span><span>牧</span><span>渔</span></p>
		</div>
		<div class="list">
			<p class="name">李建国<span class="name_item">客户类型：个人</span></p>
			<p class="other">客户编码：2018060501993</p>
			<p class="other">所属区域：汕尾市</p>
			<p><span>农</span><span>林</span><span>其他</span></p>
		</div>
		<div class="list">
			<p class="name">李密<span class="name_item">客户类型：个人</span></p>
			<p class="other">客户编码：2018060501993</p>
			<p class="other">所属区域：湛江市</p>
			<p><span>农</span><span>林</span><span>牧</span><span>渔</span></p>
		</div>
		<div class="list">
			<p class="name">张泉<span class="name_item">客户类型：个人</span></p>
			<p class="other">客户编码：2018060501993</p>
			<p class="other">所属区域：湛江市</p>
			<p><span>农</span><span>林</span><span>牧</span><span>渔</span></p>
		</div>
		<div class="list" style="margin-top: 10px;">
			<p class="name">肖明洲<span class="name_item">客户类型：个人</span></p>
			<p class="other">客户编码：2018060501993</p>
			<p class="other">所属区域：湛江市</p>
			<p><span>农</span><span>林</span><span>牧</span><span>渔</span></p>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped="scoped">
	.customer {
		background-color: #F5F5F5;
	}
	.customer_top {
		text-align: center;
		height: 53px;
		background-color: #fff;
		line-height: 53px;
	}
	.customer_top a {
		text-decoration: none;
		position: absolute;
		left: 5px;
	}
	.list {
		margin-top: 10px;
		background-color: #FFFFFF;
	}
	.name {
		height: 50px;
		line-height: 50px;
		border-bottom: 1px dashed #f0f0f0;
		padding-left: 20px;
		font-size: 20px;
	}
	.name_item {
		margin-left: 10px;
		padding: 0 5px;
		border-radius: 10px;
		border: 1px solid #769be6;
		background-color: #769BE6;
		font-size: 14px;
		color: #FFFFFF;
	}
	.other {
		padding-left: 20px;
		height: 24px;
		line-height: 24px;
		font-size: 12px;
		color: #999999;
	}
	.list p:last-child {
		padding-left: 20px;
		height: 40px;
		line-height: 40px;
	}
	.list p:last-child span {
		border: 1px solid #ececec;
		border-radius: 5px;
		color: #666666;
		font-size: 10px;
		margin-right: 10px;
		padding: 1px 5px;
	}
</style>
