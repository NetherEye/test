<template>
	<div class="public">
		<div class="main">
			<div class="jingqu_title">XX景区旅游扶贫进度</div>
			<div class="jingqu_box">
				<div class="jingqu_box_top">
					<div class="data_item">
						<div class="data_p">2017-2019年3年计划数： <span class="data">1000000人</span><div class="btn btn3">导出详情</div></div>
					</div>
				</div>
				<div class="jingqu_box_bottom">
					<div class="pie">
						<div class="right_p pie1">本年度完成数</div>
						<div class="right_p pie2">本年度完成率</div>
						<div id="pieBox1"></div>
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
			            name:'培训计划数',
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
			
			var myChart = echarts.init(document.getElementById('pieBox2'));
			myChart.setOption({
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    calculable : true,
			    series: [
			        {
			            name:'培训计划数',
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
		padding: 0px 40px 0px 20px;
		overflow: auto;
		display: flex;
		flex-direction: column;
	}
	.data_item{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
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
		padding-left: 10px;
		margin-bottom: 40px;
	}
	.pie{
		width: 200px;
		height: 300px;
		margin: 100px auto;
	}
	.right_p{
		font-size:17px;
		color:rgba(111,121,146,1);
		display: flex;
		align-items: center;
		margin-bottom: 30px;
		padding-left: 12px;
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
		margin-right: 40px;
	}
	#pieBox1, #pieBox2{
		width: 166px;
		height: 166px;
	}
	.jingqu_title{
		font-size:24px;
		color:rgba(48,54,56,1);
		margin: 30px 0;
		
	}
	.jingqu_box{
		flex: 1;
		background:rgba(255,255,255,1);
		border-radius:3px;
		box-shadow:0px 0px 120px 0px rgba(31,32,41,0.05);
	}
	.jingqu_box_top{
		height:120px;
		background:rgba(244,245,250,1);
		border-radius:3px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
</style>