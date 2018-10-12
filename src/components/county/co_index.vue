<template>
	<div class="public">
		<div class="main">
			<div class="left">
				<div class="top">
					<div class="data_item">
						<p class="data_p">2017-2019年3年计划数： <span class="data">1000000人</span></p>
						<div class="line" style="height: 1px;background:rgba(238,238,238,1);"></div>
						<p class="data_p">2017年计划数： <span class="data">1000000人</span></p>
						<div class="line" style="height: 1px;background:rgba(238,238,238,1);"></div>
						<p class="data_p">2017年计划数： <span class="data">1000000人</span></p>
						<div class="line" style="height: 1px;background:rgba(238,238,238,1);"></div>
						<p class="data_p">2017年计划数： <span class="data">1000000人</span></p>
					</div>
				</div>
				<div class="line" style="height: 1px;background:rgba(238,238,238,1);"></div>
				<div class="bottom">
					<div class="data_item">
						<div style="display: flex;align-items: center;height: 120px;">
								<div class="right_p pie1">本年度完成数</div>
								<div class="right_p pie2">本年度完成率</div>
						</div>
						<div class="pie">
							
							<div id="pieBox1"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="filter">
					<el-date-picker v-model="filter.startTime" type="date" placeholder="起始日期" style="width: 180px;margin: 8px;">
					</el-date-picker>
					<el-date-picker v-model="filter.endTime" type="date" placeholder="结束日期" style="width: 180px;margin: 8px;">
					</el-date-picker>
					<div class="btn btn1" style="margin: 8px;">查询</div>
					<div class="btn btn2" style="margin: 8px;">导出培训进度表</div>
					<div class="btn btn3" style="margin: 8px;">导出扶贫进度表</div>
				</div>
				<div class="right_content">
					<div class="right_content_item" v-for="(item, i) in rightArr" :key="i">
						<div class="item_left">{{item.left}}</div>
						<div class="item_center">
							<el-progress :percentage="item.value" color="#306CA4" :show-text="false"></el-progress>
						</div>
						<div class="item_right">{{item.right}}</div>
						
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
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/grid');
require("echarts/lib/component/legendScroll");
	
import footer from '@/components/com/footer'
export default{
	data(){
		return{
			filter: {
				startTime: '',
				endTime: '',
			},
			rightArr: [
				{value: 80, left: '全省旅游扶贫人数', right: '12000'},
				{value: 80, left: '贵阳市', right: '12000'},
				{value: 80, left: '黔东南州', right: '12000'},
				{value: 80, left: '凯里市', right: '12000'},
				{value: 80, left: '六盘水', right: '12000'},
				{value: 80, left: '凯里市', right: '12000'},
				{value: 80, left: '全省旅游扶贫人数', right: '12000'},
				{value: 80, left: '贵阳市', right: '12000'},
				{value: 80, left: '黔东南州', right: '12000'},
				{value: 80, left: '贵阳市', right: '12000'},
				{value: 80, left: '黔东南州', right: '12000'},
			]
		}
	},
	components: {'my-footer': footer},
	mounted(){
		this.initEcharts();
	},
	methods: {
		
		initEcharts(){
			var myChart = echarts.init(document.getElementById('pieBox1'));
			myChart.setOption({
				tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    calculable : true,
			    labelLine: { show: false, },
			    series: [
			        {
			            name:'旅游扶贫计划数',
			            type:'pie',
			            radius: ['73%', '100%'],
			            startAngle: 260, // 圆形旋转角度
			            avoidLabelOverlap: false,
			            hoverAnimation: false,
			            data:[
			                {
			                	value:75, name:'本年度完成数',
				                label: { 
				                	show: true, position: 'center', formatter: "{d}%", color: "#3a4c70", fontSize: 34
				                },
				                itemStyle: {
				                	color: "#2c7ecc"
				                },
				                labelLine: { show: false, },
			                },
			                {value:25, name:'本年度完成率',
			                	itemStyle: {
				                	color: "#3bbba2",
				                },
				                label: { 
				                	show: false, position: 'center', formatter: "{d}%", color: "#3a4c70", fontSize: 34
				                },
			                },
			            ]
			        }
			    ]
			});
			
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
		padding: 20px 40px 0px 20px;
		overflow: auto;
		min-width: 1599px;
	}
	.left{
		display: inline-block;
		width: 702px;
		height: 100%;
		float: left;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		overflow: auto;
	}
	.top, .bottom{
		flex: 1;
	}
	.right{
		display: inline-block;
		width: 877px;
		height: 100%;
		padding: 0 20px;
		float: right;
		background: #FFFFFF;
		position: relative;
		overflow: auto;
	}
	.filter{
		height: 104px;
		display: flex;
		align-items: center;
	}
	.right_content_item{
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.item_left, .item_right{
		width: 180px;
		
	}
	.right_content{
		position: absolute;
		top: 104px;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: auto;
	}
	.item_left{
		text-align: right;
		padding-right: 10px;
		font-size:18px;
		color:rgba(111,121,146,1);
	}
	.item_right{
		font-size:20px;
		color:rgba(111,121,146,1);
		padding-left: 10px;
	}
	.item_center{
		flex: 1;
		padding: 0 10px;
	}
	.data_item{
		position: relative;
		
	}
	.data_title{
		height: 80px;
		font-size:23px;
		color:rgba(48,54,56,1);
		display: flex;
		align-items: center;
	}
	.data_title:before{
		content: url(../../../static/img/provincial/qsly.png);
		width: 40px;
		height: 40px;
		margin-right: 7px;
	}
	.data_p{
		font-size:16px;
		color:rgba(111,121,146,1);
	}
	.data_p:nth-child(1){
		margin-top: 60px;
		margin-bottom: 28px;
		padding-left: 20px;
	}
	.data_p:nth-child(3){
		margin-top: 28px;
		margin-bottom: 28px;
		padding-left: 90px;
	}
	.data_p:nth-child(5){
		margin-top: 28px;
		margin-bottom: 28px;
		padding-left: 90px;
	}
	.data_p:nth-child(7){
		margin-top: 28px;
		margin-bottom: 28px;
		padding-left: 90px;
	}
	.pie{
		position: absolute;
		top: 100px;
		left: 200px;
	}
	.right_p{
		font-size:17px;
		color:rgba(111,121,146,1);
		display: flex;
		align-items: center;
		margin-bottom: 30px;
		padding-left: 12px;
		margin-left: 20px;
		margin-right: 40px;
	}
	.pie1:before{
		content: url(../../../static/img/provincial/wanchengshu.png);
		width: 18px;
		height: 18px;
		margin-right: 9px;
	}
	.pie2:before{
		content: url(../../../static/img/provincial/wanchenglv.png);
		width: 18px;
		height: 18px;
		margin-right: 9px;
	}
	.data_p:last-child{
		margin-bottom: 0;
		
	}
	.data{
		font-size:22px;
		text-decoration: underline;
	}
	#pieBox1, #pieBox2{
		width: 166px;
		height: 166px;
	}
	.peix{
		
	}
	.peix:before{
		content: url(../../../static/img/provincial/peix.png);
		width: 40px;
		height: 40px;
		margin-right: 7px;
	}
	@media only screen and (max-width: 1919px) {
		.main{
			padding-right: 0;
		}
	}
</style>