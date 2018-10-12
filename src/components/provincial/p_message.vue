<template>
	<div class="public">
		<div class="main">
			<div class="left">
				<div class="news">
					<div class="new_title"><i class="i1"></i><span>系统通知</span></div>
					<div class="new_content">
						<div class="new_content_item" v-for="(item, i) in new1Arr" :key="i" @click="look(item)">
							<span class="ellipsis">{{item.content}}</span>
							<span style="width: 200px;min-width: 200px;">{{item.time}}</span>
						</div>
					</div>
					<div class="fenye">
						<div class="fenye_title ellipsis">共 {{total1}} 条数据 每页 {{pageSize1}} 条数据  共 {{Math.floor(total1/pageSize1) + (total1%pageSize1 != 0 ? 1 : 0)}} 页</div>
						<el-pagination :current-page.sync="currentPage1" :pager-count="5" small  :page-size="pageSize1" layout="prev, pager, next, jumper" :total="total1">
						</el-pagination>
					</div>  
				</div>
			</div>
			<div class="kong" style="width: 29px;height: 100%;"></div>
			<div class="right">
				<div class="top">
					<div class="news">
						<div class="new_title"><i class="i2"></i><span>我发布的</span><div class="btn btn2" @click="go">发布通知</div></div>
						<div class="new_content">
							<div class="new_content_item" v-for="(item, i) in new2Arr" :key="i" @click="look(item)">
								<span class="ellipsis">{{item.content}}</span>
								<span style="width: 200px;min-width: 200px;">{{item.time}}</span>
							</div>
						</div>
						<div class="fenye">
							<div class="fenye_title ellipsis">共 {{total2}} 条数据 每页 {{pageSize2}} 条数据 共 {{Math.floor(total2/pageSize2) + (total2%pageSize2 != 0 ? 1 : 0)}} 页</div>
							<el-pagination :current-page.sync="currentPage2" :pager-count="5" small :page-size="pageSize2" layout="prev, pager, next, jumper" :total="total2">
							</el-pagination>
						</div>
					</div>
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
export default{
	data(){
		return{
			isFilter: false, // 是否展开筛选
			filter: {
				
			},
			pageSize1: 10,
			total1: 21,
			currentPage1: 1,
			pageSize2: 4,
			total2: 51,
			currentPage2: 1,
			pageSize3: 4,
			total3: 221,
			currentPage3: 1,
			new1Arr: [
				{content: 'XX市XX区审核通过 1Asd啊实打实大师大师大富商大贾35 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 1Asd啊实打实大师大师大富商大贾35 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
			],
			new2Arr: [
				{content: 'XX市XX区审核通过 1Asd啊实打实大师大师大富商大贾35 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
			],
			new3Arr: [
				{content: 'XX市XX区审核通过 1Asd啊实打实大师大师大富商大贾35 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
				{content: 'XX市XX区审核通过 135 条扶贫信息。', time: '2018-09-12   17:04'},
				
			]
			
		}
	},
	components: {'my-footer': footer},
	methods: {
		go(){
			const {href} = this.$router.resolve({
				name: '通知公告查看',
				query: {
					type: '发布',
					b: 2
				}
			})
			window.open(href, '_blank', "height=1080,width=1920");
		},
		look(item){
			const {href} = this.$router.resolve({
				name: '通知公告查看',
				query: {
					type: '查看',
					b: 2
				}
			})
			window.open(href, '_blank', "height=1080,width=1920");
		},
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
		padding: 00px 40px 0px 20px;
		display: flex;
	}
	.left{
		flex: 1;
	}
	.right{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.top{
		flex: 1;
	}
	.bottom{
		flex: 1;
	}
	.news{
		height: 100%;
		position: relative;
	}
	.new_title{
		height: 84px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: relative;
	}
	.new_title>i{
		width: 54px;
		height: 54px;
		margin-right: 11px;
	}
	.i1{
		background: url(../../../static/img/provincial/xttz.png) no-repeat center center;
		background-size: cover;
	}
	.i2{
		background: url(../../../static/img/provincial/wfbd.png) no-repeat center center;
		background-size: cover;
	}
	.i3{
		background: url(../../../static/img/provincial/tzgg.png) no-repeat center center;
		background-size: cover;
	}
	.new_title>span{
		font-size:24px;
		color:rgba(48,54,56,1);
	}
	.new_content{
		position: absolute;
		left: 0;
		right: 0;
		top: 84px;
		bottom: 60px;
		background: #FFFFFF;
		border-radius: 3px 3px 1px 1px;
		overflow: auto;
	}
	.new_content_item{
		height: 62px;
		font-size:18px;
		color:rgba(111,121,146,1);
		border-bottom: 1px solid #EEEEEE;
		padding: 0 40px;
		padding-right: 0;
		line-height: 62px;
		display: flex;
		justify-content: space-between;
		cursor: pointer;
	}
	.fenye{
		height: 60px;
		background: #FFFFFF;
		position: absolute;
		bottom: 0;
		width: 100%;
		border-radius: 1px 1px 3px 3px;
	}
	.btn{
		position: absolute;
		right: 0;
	}
</style>