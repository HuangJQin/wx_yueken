<template>
	<footer class="footer">
		<tabbar class="nav">
			<tabbar-item class="nav-item" link="/first" @on-item-click="tab_click(0)">
				<i slot="icon" class="menu_box" :class="[icon_tab==0 ? 'index_1':'index_2']"></i>
				<span slot="label">首页</span>
			</tabbar-item>
			<tabbar-item class="nav-item" link="/deal" @on-item-click="tab_click(1)">
				<i slot="icon" class="menu_box" :class="[icon_tab==1 ? 'deal_1':'deal_2']"></i>
				<span slot="label">我的代办</span>
			</tabbar-item>
			<tabbar-item class="nav-item" link="/mine" @on-item-click="tab_click(2)">
				<i slot="icon" class="menu_box" :class="[icon_tab==2 ? 'mine_1':'mine_2']"></i>
				<span slot="label">我的账号</span>
			</tabbar-item>
		</tabbar>
	</footer>
</template>

<script>
import {Tabbar, TabbarItem} from 'vux'
export default {
	components: {
		Tabbar,
		TabbarItem
	},
	data () {
		return {
			icon_tab: 0
		}
	},
	methods: {
		tab_click (num) {
			this.icon_tab = num
		}
	}
}
</script>

<style scoped="scoped">
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		height: 55px;
	}
	.menu_box {
		height: 100%;
		width: 100%;
		display: block;
	}
.index_1 {
	background: url('../../static/img/sy_xz@2x.png') no-repeat;
	background-size: 100% 100%;
}
.index_2 {
	background: url('../../static/img/sy_mr@2x.png') no-repeat;
	background-size: 100% 100%;
}
.deal_1 {
	background: url('../../static/img/db_xz@2x.png') no-repeat;
	background-size: 100% 100%;
}
.deal_2 {
	background: url('../../static/img/db_mr@2x.png') no-repeat;
	background-size: 100% 100%;
}
.mine_1 {
	background: url('../../static/img/zh_xz@2x.png') no-repeat;
	background-size: 100% 100%;
}
.mine_2 {
	background: url('../../static/img/zh_mr@2x.png') no-repeat;
	background-size: 100% 100%;
}
</style>
