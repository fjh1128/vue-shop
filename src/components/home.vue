<template>
	<el-container class="home-container">
	    <el-header>
	    	<div>
	    		<img src="../assets/heima.png">
	    		<span>后台管理系统</span>
	    	</div>
	    	<el-button type="info" @click="logout">退出</el-button>
	    </el-header>
	    <el-container>
	    	<el-aside :width="isCollapse ? '64px' : '200px'">
	    		<div class="toggle-button" @click="toggleCollapse">|||</div>
	    		<el-menu background-color="#333744" text-color="#fff" active-text-color="#409eff" unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath">
			      	<!-- 一级菜单 -->
			      	<el-submenu index="/user">
			        	<!-- 模板区 -->
			        	<template slot="title">
			          		<i class="el-icon-user-solid"></i>
			          		<span>用户管理</span>
			        	</template>
				        <!-- 二级菜单 -->
				        <el-menu-item index="/users" @click="saveNavState('/users')">
					        <template slot="title">
			          			<i class="el-icon-menu"></i>
			          			<span>用户列表</span>
			        		</template>
					    </el-menu-item>
			      	</el-submenu>
			      	<el-submenu index="/right">
			        	<!-- 模板区 -->
			        	<template slot="title">
			          		<i class="el-icon-view"></i>
			          		<span>权限管理</span>
			        	</template>
				        <!-- 二级菜单 -->
				        <el-menu-item index="/roles" @click="saveNavState('/roles')">
					        <template slot="title">
			          			<i class="el-icon-menu"></i>
			          			<span>角色列表</span>
			        		</template>
					    </el-menu-item>
					    <el-menu-item index="/rights">
					        <template slot="title">
			          			<i class="el-icon-menu"></i>
			          			<span>权限列表</span>
			        		</template>
					    </el-menu-item>
			      	</el-submenu>
			      	<el-submenu index="/good">
			        	<!-- 模板区 -->
			        	<template slot="title">
			          		<i class="el-icon-shopping-bag-2"></i>
			          		<span>商品管理</span>
			        	</template>
				        <!-- 二级菜单 -->
				        <el-menu-item index="/goods" @click="saveNavState('/goods')">
					        <template slot="title">
			          			<i class="el-icon-menu"></i>
			          			<span>商品列表</span>
			        		</template>
					    </el-menu-item>
					    <el-menu-item index="/fl">
					        <template slot="title">
			          			<i class="el-icon-menu"></i>
			          			<span>分类参数</span>
			        		</template>
					    </el-menu-item>
					    <el-menu-item index="/goodsfl">
					        <template slot="title">
			          			<i class="el-icon-menu"></i>
			          			<span>商品分类</span>
			        		</template>
					    </el-menu-item>
			      	</el-submenu>
			      	<el-submenu index="/order">
			        	<!-- 模板区 -->
			        	<template slot="title">
			          		<i class="el-icon-mobile"></i>
			          		<span>订单管理</span>
			        	</template>
				        <!-- 二级菜单 -->
				        <el-menu-item index="/orders" @click="saveNavState('/orders')">
					        <template slot="title">
			          			<i class="el-icon-menu"></i>
			          			<span>订单列表</span>
			        		</template>
					    </el-menu-item>
			      	</el-submenu>
			      	<el-submenu index="/data">
			        	<!-- 模板区 -->
			        	<template slot="title">
			          		<i class="el-icon-s-data"></i>
			          		<span>数据管理</span>
			        	</template>
				        <!-- 二级菜单 -->
				        <el-menu-item index="/datas" @click="saveNavState('/datas')">
					        <template slot="title">
			          			<i class="el-icon-menu"></i>
			          			<span>数据列表</span>
			        		</template>
					    </el-menu-item>
			      	</el-submenu>
			    </el-menu>
	    	</el-aside>
	    	<el-main>
					<router-view></router-view>
	    	</el-main>
	    </el-container>
	</el-container>
</template>

<script>
	export default {
		data () {
			return {
				isCollapse: false,
				activePath: ''
			}
		},
		created () {
			this.activePath = window.sessionStorage.getItem('activePath')
		},
		methods: {
			logout () {
				this.$router.push('/login')
			},
			toggleCollapse () {
				this.isCollapse = !this.isCollapse
			},
			saveNavState (activePath) {
				window.sessionStorage.setItem('activePath', activePath)
				this.activePath = activePath
			}
		}
	}
</script>

<style scoped>
	.home-container {
		height: 100%;
	}
	.el-header {
		background-color: #373d41;
		display: flex;
		justify-content: space-between;
		padding-left: 0;
		align-items: center;
		color: #fff;
		font-size: 20px;
	}
	.el-header div {
		display: flex;
		align-items: center;
	}
	.el-header span {
		margin-left: 15px;
	}
	.el-aside {
		background-color: #333744;
	}
	.el-main {
		background-color: #eaedf1;
	}
	.el-container span {
		margin-left: 10px;
	}
	.el-menu {
		border-right: none;
	}
	.toggle-button {
		background-color: #4a5064;
		font-size: 10px;
		line-height: 24px;
		color: #fff;
		text-align: center;
		letter-spacing: 0.2em;
		cursor: pointer;
	}
</style>
