<template>
	<div class="public">
		<div class="main">
			<div class="main_content">
				<div class="filter">
					<div class="isFilter" @click="handleFilter"><img :class="isFilter ? 'rotate' : ''" src="../../../static/img/provincial/select_icon.png" /><span>{{isFilter ? '收起筛选' : '展开筛选'}}</span></div>
					<el-collapse-transition>
						<div class="filterBox" v-show="isFilter" style="padding: 36px 50px 46px 50px;">
							<el-form :inline="true" :model="filter" class="demo-form-inline">
								<el-form-item label="身份证号"  >
									<el-input class="mar" style="width: 517px;" v-model="filter.user" width="80px" placeholder="身份证号" ></el-input>
								</el-form-item>
								<el-form-item label="户籍乡镇">
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 161px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="户籍村" label-width="86px">
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 161px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="是否需要培训">
									<el-select v-model="valueopt" placeholder="请选择" clearable style="width:480px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="脱贫状态">
									<el-select v-model="valueget" placeholder="脱贫状态" clearable style="width:161px;">
										<el-option v-for="item in Category" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="九大工程">
									<el-select v-model="valueopt" placeholder="活动区域" style="width: 161px;">
										<el-option v-for="item in hunan" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="带动类型">
									<el-select v-model="valuedrive" placeholder="脱贫状态" clearable style="width:161px;">
										<el-option v-for="item in drive" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="带动贫困人口增收方式">
									<el-select v-model="filter.region" placeholder="活动区域" style="width: 410px;">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="信息状态">
									<el-select v-model="valuetio" placeholder="脱贫状态" clearable style="width:161px;">
										<el-option v-for="item in information" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>

								<el-form-item label="人员状态">
									<el-select v-model="valueper" placeholder="脱贫状态" clearable style="width:161px;">
										<el-option v-for="item in personnel" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="填报员" label-width="82px">
									<el-select v-model="filter.region" placeholder="活动区域">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
							</el-form>
							<div class="filter_btn">
								<div class="btn btn1">查询</div>
								<div class="btn btn2">批量导出</div>
								<div class="btn btn3" @click="goLead">批量导入贫困人口培训信息</div>
							</div>
						</div>
					</el-collapse-transition>
				</div>
				<div class="table">
					<el-table ref="table" :data="tableData" tooltip-effect="dark" style="width: 99%;" width="140px" height="100%" header-cell-class-name="tableTou" cell-class-name="tableRow" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="80px" align="center" show-overflow-tooltip>
						</el-table-column>
						<el-table-column type="index" label="序号" align="center" width="80px">
						</el-table-column>
						<el-table-column prop="villagers" label="贫困人口姓名" width="150px" align="center" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="city" align="center" label="身份证号码" width="140px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="county" align="center" label="联系方式" width="140px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="town" align="center" label="户籍市州" width="140px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="name" align="center" label="户籍区县" width="140px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="name" align="center" label="户籍乡镇" width="140px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="name" align="center" label="户籍村" width="140px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="name" align="center" label="帮扶状态" width="140px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column prop="name" align="center" label="当年收入" width="140px" show-overflow-tooltip>
						</el-table-column>
						<el-table-column align="center" label="操作" show-overflow-tooltip>
							<template slot-scope="scope">
								<div class="btns">
									<div class="textBtnLook" @click="goFupin">查看详情</div>
								</div>
							</template>
						</el-table-column>
					</el-table>

				</div>
				<div class="fenye">
					<div class="fenye_title">共 {{total}} 条数据 每页 {{pageSize}} 条数据 共 {{Math.floor(total/pageSize) + (total%pageSize != 0 ? 1 : 0)}} 页</div>
					<el-pagination :current-page.sync="currentPage" :page-size="pageSize" layout="prev, pager, next, jumper" :total="total">
					</el-pagination>
				</div>
			</div>
		</div>
		<div class="footer">
			<my-footer></my-footer>
		</div>
	</div>
</template>

<script>
import footer from '@/components/com/footer'
export default {
	data() {
		return {
			value:'',
			//信息状态
			valuetio:'',
			information:[{
				value:'0',
				label:'全部'
			},{
				value:'1',
				label:'已保存'
			},{
				value:'2',
				label:'为审核'
			},{
				value:'3',
				label:'已通过'
			},{
				value:'4',
				label:'已驳回'
			},{
				value:'5',
				label:'省级标记'
			},{
				value:'6',
				label:'市级标记'
			}],
			//人员状态
			valueper:'',
			personnel:[{
				value:'0',
				label:'全部'
			},{
				value:'1',
				label:'已帮扶'
			},{
				value:'2',
				label:'未帮扶'
			}],
			//带动类型
			valuedrive:'',
			 drive:[{
				 value:'0',
				 label:'全部'
			 },{
				 value:'1',
				 label:'直接带动'
			 },{
				 value:'2',
				 label:'间接带动'
			 }],
			valueopt:'', //九大工程
			hunan:[{
				value: '0',
				label: 'l'
			}, {
				value: '1',
				label: '已脱贫享受政策'
			}, {
				value: '2',
				label: '已脱贫不享受政策'
			}, {
				value: '3',
				label: '返贫'
			},{
				value: '4',
				label: '未脱贫'
			}, {
				value: '5',
				label: '已脱贫享受政策'
			}, {
				value: '6',
				label: '已脱贫不享受政策'
			}, {
				value: '7',
				label: '返贫'
			},
			{
				value: '8',
				label: '未脱贫'
			}, {
				value: '9',
				label: '已脱贫享受政策'
			},],
			valueget: '', //脱贫状态
			//贫困类别
			Category: [{
				value: '0',
				label: '未脱贫'
			}, {
				value: '1',
				label: '已脱贫享受政策'
			}, {
				value: '2',
				label: '已脱贫不享受政策'
			}, {
				value: '3',
				label: '返贫'
			}],
			valueopt: '', //培训
			options: [{
				value: '1',
				label: '是'
			}, {
				value: '2',
				label: '否'
			},],
			isFilter: false, // 是否展开筛选
			filter: {

			},
			pageSize: 10,
			total: 21,
			currentPage: 1,

			tableData: [
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄按时打算大叔大叔大叔大叔大叔大叔大叔打时代发生的发生地方时代发生的发生的发的'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
			],
			multipleSelection: [],
		}
	},
	components: { 'my-footer': footer },
	methods: {
		handleFilter() {
			this.isFilter = !this.isFilter;
		},
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		goFupin(){
			const { href } = this.$router.resolve({
				name: '扶贫人口',
				query: {
					type: '查看',
					city:'1'
				}
			})
			window.open(href, '_blank', "height=800,width=600");
		},
		goLead(){
			const { href } = this.$router.resolve({
				name: '培训信息',
				query: {
					type: '省级查看',
				}
			})
			window.open(href, '_blank', "height=800,width=600");
		}

	}
}

</script>

<style scoped>
	.public{
		height: 100%;
		position: relative;
	}
	.footer{
		height: 60px;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.main{
		position: absolute;
		top: 0;
		bottom: 60px;
		left: 0;
		right: 0;
		background: #eff2f7;
		padding: 20px 40px 0px 20px;
	}
	.main_content{
		height: 100%;
		background:rgba(255,255,255,1);
		display: flex;
		flex-direction: column;
		border-radius:3px;
		box-shadow:0px 0px 120px 0px rgba(31,32,41,0.05);
		overflow: auto;

	}
	.filter{
		height: 74px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.isFilter{
		width:190px;
		height:50px;
		background:rgba(244,244,244,1);
		border-radius:10px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		font-size:18px;
		font-weight:400;
		color:rgba(61,97,150,1);
	}
	.rotate{
		transform: rotate(180deg);
	}
	.isFilter>img{
		margin-right: 10px;
		transition: all .3s;
	}
	.filterBox{
		position: absolute;
		border-top: 1px solid rgba(238,238,238,1);
		padding: 36px 50px 46px 50px;
		height: auto;
		z-index: 999;
		background-color: #fff;
		top: 74px;
		left: 0;
		right: 0;
		opacity:0.99;
		box-shadow:0px 10px 40px rgba(0,0,0,0.14);

	}
	.filter_btn{
		display: flex;
		justify-content: flex-end;
		padding-left: 52px;
		margin-top: 13px;
	}
	.filter_btn>div{
		margin-left: 30px;
	}
	.table{
		flex: 1;
	}
</style>
