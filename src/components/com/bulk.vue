<template>
    <div class="public">
        <div class="box">
            <div class="wu_top">
                <div class="left">
                    本次导入500条数据,<p>成功480条</p>
                    <p>失败20条</p>
                </div>
                <div class="right">
                    <div class=" mi">继续上传佐证材料</div>
                    <div class=" mi wxy">下载失败文件说明</div>
                </div>
            </div>
            <div class="line" style="background: #728bb4;height: 4px;margin-top: 6px;"></div>
            <div class="table">
                <el-table ref="table" :data="tableData" tooltip-effect="dark" style="width: 100%;"  height="100%" header-cell-class-name="tableTou" cell-class-name="tableRow" @selection-change="handleSelectionChange">
                     <el-table-column prop="index" label="序号" align="center" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="villagers" label="姓名" align="center" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="city" align="center" label="身份证号码" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="county" align="center" label="联系方式" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="town" align="center" label="户籍市州" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="name" align="center" label="户籍区县" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="name" align="center" label="户籍乡镇" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column prop="name" align="center" label="户籍村" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column align="center" label="操作" show-overflow-tooltip>
                        <template slot-scope="scope">
                            <div class="btns">
                                <div class="textBtnLook">上传附件</div>
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
</template>
<script>
export default {
    data() {
        return {
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
        }
    },
    methods: {
        handleSelectionChange() {

        }
    }
}
</script>
<style>
.public {
  height: auto;
  padding: 25px;
  padding-bottom: 0px;
}
.box {
  width: 100%;
  background-color: #f0f3f8;
  box-shadow: 0px 0px 120px 0px rgba(31, 32, 41, 0.05);
  border-radius: 10px;
  padding: 30px;
  box-sizing: border-box;
}
.wu_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  width: 20%;
  display: flex;
  justify-content: space-between;
}
.right {
  width: 20%;
  display: flex;
  justify-content: space-between;
}
.mi {
  width: 140px;
  height: 44px;
  background-color: #4a87c1;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
  color: #eaefff;
  line-height: 44px;
  cursor: pointer;
}
.wxy {
  background: none;
  border: solid 1px #ff4b1b;
  color: #ff4b1b;
}
.textBtnLook {
  width: 100px;
  height: 44px;
  background-color: #45c3ad;
  border-radius: 4px;
  font-size: 16px;
  line-height: 44px;
  letter-spacing: 0px;
  color: #eaefff;
  cursor: pointer;
}
.fenye{
    background-color: #ffffff;
}
</style>

