<template>
	<div>
		<el-breadcrumb separator="/">
		  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item>用户管理</el-breadcrumb-item>
		  <el-breadcrumb-item>用户列表</el-breadcrumb-item>
		</el-breadcrumb>
		<el-card>
			<el-row :gutter="20">
				<el-col :span="8">
					<el-input placeholder="请输入内容" clearable>
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</el-col>
				<el-col :span="4">
					<el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
				</el-col>
			</el-row>
			<el-table :data="userlist" border stripe>
				<el-table-column type="index"></el-table-column>
				<el-table-column label="姓名" prop="username"></el-table-column>
				<el-table-column label="邮箱" prop="email"></el-table-column>
				<el-table-column label="电话" prop="mobile"></el-table-column>
				<el-table-column label="角色" prop="role"></el-table-column>
				<el-table-column label="状态">
					<template slot-scope="scope">
						<el-switch
						  v-model="scope.row.state" @change="userStateChange(scope.row)">
						</el-switch>
					</template>
				</el-table-column>
				<el-table-column label="操作" width="180px">
					<template>
						<el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
						<el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
						<el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
					      <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
					    </el-tooltip>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
		      :page-sizes="[100, 200, 300, 400]"
		      :page-size="100"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="400">
		    </el-pagination>
		</el-card>
		<el-dialog
		  title="添加用户"
		  :visible.sync="addDialogVisible"
		  width="50%">
		  <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
			  <el-form-item label="用户名" prop="username">
			    <el-input></el-input>
			  </el-form-item>
			</el-form>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="addDialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				addDialogVisible: false,
				addForm: {},
				addFormRules: {
					username: [
						{ require: true, message: '请输入用户名', trigger: 'blur' },
						{ min: 3, max: 10, message: '用户名的长度在3-10个字符之间', trigger: 'blur' }
					]
				},
				userlist: [
					{ username: 'admin', email: 'adsfad@qq.com', mobile: '12345678', role: '超级管理员', state: true },
					{ username: 'linken', email: 'asdf@qq.com', mobile: '1213218', role: '测试角色', state: false }
				]
			}
		},
		methods: {
			userStateChange (userinfo) {

			}
		}
	}
</script>

<style scoped>
	
</style>
