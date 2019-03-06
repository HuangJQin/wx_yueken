<template>
	<div class="balance" ref="balance">
		<div class="balance_top">
			<router-link to='/first'>
				<a><</a>
			</router-link>
			<span>今日余额</span>
		</div>
		<div class="list">
			<div class="list_top">
				<div class="list_top_left">
					<p>主客户：</p>
					<p>副客户：</p>
					<p>放款总金额：</p>
					<p>还款方式：</p>
				</div>
				<div class="list_top_right">
					<p>肖明洲</p>
					<p></p>
					<p>10.00</p>
					<p>自由还款</p>
				</div>
			</div>
			<div class="list_bottom">
				<div class="bottom_left">
					<img src="../../static/img/ks@2x.png" width="12px"/>
					<span>贷款开始日期:2018-04-26</span>
				</div>
				<div class="bottom_right">
					<img src="../../static/img/js@2x.png" width="12px"/>
					<span>贷款结束日期:2020-04-26</span>
				</div>
			</div>
		</div>
		<div class="list">
			<div class="list_top">
				<div class="list_top_left">
					<p>主客户：</p>
					<p>副客户：</p>
					<p>放款总金额：</p>
					<p>还款方式：</p>
				</div>
				<div class="list_top_right">
					<p>黄春国</p>
					<p>黄海妹</p>
					<p>16.00</p>
					<p>按月等额本息</p>
				</div>
			</div>
			<div class="list_bottom">
				<div class="bottom_left">
					<img src="../../static/img/ks@2x.png" width="12px"/>
					<span>贷款开始日期:2018-04-26</span>
				</div>
				<div class="bottom_right">
					<img src="../../static/img/js@2x.png" width="12px"/>
					<span>贷款结束日期:2020-04-26</span>
				</div>
			</div>
		</div>
		<div class="list">
			<div class="list_top">
				<div class="list_top_left">
					<p>主客户：</p>
					<p>副客户：</p>
					<p>放款总金额：</p>
					<p>还款方式：</p>
				</div>
				<div class="list_top_right">
					<p>余庆国</p>
					<p>余建国</p>
					<p>8.00</p>
					<p>按月等额本息</p>
				</div>
			</div>
			<div class="list_bottom">
				<div class="bottom_left">
					<img src="../../static/img/ks@2x.png" width="12px"/>
					<span>贷款开始日期:2018-04-26</span>
				</div>
				<div class="bottom_right">
					<img src="../../static/img/js@2x.png" width="12px"/>
					<span>贷款结束日期:2020-04-26</span>
				</div>
			</div>
		</div>
		<div class="list">
			<div class="list_top">
				<div class="list_top_left">
					<p>主客户：</p>
					<p>副客户：</p>
					<p>放款总金额：</p>
					<p>还款方式：</p>
				</div>
				<div class="list_top_right">
					<p>李红</p>
					<p></p>
					<p>18.00</p>
					<p>按月等额本息</p>
				</div>
			</div>
			<div class="list_bottom">
				<div class="bottom_left">
					<img src="../../static/img/ks@2x.png" width="12px"/>
					<span>贷款开始日期:2018-04-26</span>
				</div>
				<div class="bottom_right">
					<img src="../../static/img/js@2x.png" width="12px"/>
					<span>贷款结束日期:2020-04-26</span>
				</div>
			</div>
		</div>
		<div class="list">
			<div class="list_top">
				<div class="list_top_left">
					<p>主客户：</p>
					<p>副客户：</p>
					<p>放款总金额：</p>
					<p>还款方式：</p>
				</div>
				<div class="list_top_right">
					<p>肖明洲</p>
					<p></p>
					<p>10.00</p>
					<p>自由还款</p>
				</div>
			</div>
			<div class="list_bottom">
				<div class="bottom_left">
					<img src="../../static/img/ks@2x.png" width="12px"/>
					<span>贷款开始日期:2018-04-26</span>
				</div>
				<div class="bottom_right">
					<img src="../../static/img/js@2x.png" width="12px"/>
					<span>贷款结束日期:2020-04-26</span>
				</div>
			</div>
		</div>
		<div class="list">
			<div class="list_top">
				<div class="list_top_left">
					<p>主客户：</p>
					<p>副客户：</p>
					<p>放款总金额：</p>
					<p>还款方式：</p>
				</div>
				<div class="list_top_right">
					<p>肖明洲</p>
					<p></p>
					<p>10.00</p>
					<p>自由还款</p>
				</div>
			</div>
			<div class="list_bottom">
				<div class="bottom_left">
					<img src="../../static/img/ks@2x.png" width="12px"/>
					<span>贷款开始日期:2018-04-26</span>
				</div>
				<div class="bottom_right">
					<img src="../../static/img/js@2x.png" width="12px"/>
					<span>贷款结束日期:2020-04-26</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped="scoped">
	.balance {
		background-color: #F5F5F5;
	}
	.balance_top {
		text-align: center;
		height: 53px;
		background-color: #fff;
		line-height: 53px;
	}
	.balance_top a {
		position: absolute;
		left: 5px;
	}
	.list {
		background-color: #FFFFFF;
		margin-top: 10px;
	}
	.list_top {
		border-bottom: 1px solid #e7e7e7;
		padding: 10px 0 10px 10px;
		display: flex;
	}
	.list_top p{
		font-size: 12px;
		height: 20px;
		line-height: 20px;
	}
	.list_top_left {
		flex: 2;
	}
	.list_top_right {
		flex: 3;
	}
	.list_top_left p {
		color: #999999;
	}
	.list_bottom {
		background-color: #fafafa;
		display: flex;
		font-size: 10px;
		color: #999999;
		height: 40px;
		line-height: 40px;
	}
	.list_bottom img {
		vertical-align: middle;
		margin-left: 10px;
	}
	.bottom_left {
		flex: 1;
	}
	.bottom_right {
		flex: 1;
	}
</style>
