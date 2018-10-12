<template>
    <div class="wrap">
      <div class="content">
        <div class="header">
          <div class="header_top">
            <div class="ht_left">
              账号操作日志
            </div>
            <div class="ht_right">
              <div class="block">
                <span class="demonstration">日期：</span>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
              <button class="find">查询</button>
            </div>
          </div>
        </div>
        <div class="table istable">
          <el-table ref="table" :data="tableData" tooltip-effect="dark" style="width: 99%;" height="100%" header-cell-class-name="tableTou" cell-class-name="tableRow" @selection-change="handleSelectionChange">
            <el-table-column type="index" label="序号" align="center" width="100px">
            </el-table-column>
            <el-table-column label="日期" align="center" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="时间" align="center" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="address" align="center" label="操作类容" show-overflow-tooltip>
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
        name: "userDadly",
      data () {
          return  {
            value1 : '',
            total : '30',
            pageSize : '10',
            tableData: [{
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
      }
    }
</script>

<style scoped>
  .block {
    float: left;
    position: relative;
    top: -5px;
  }

  .find {
    cursor: pointer;
    outline: none;
    border: none;
    width: 100px;
    height: 34px;
    background-color: #4a87c1;
    border-radius: 4px;
    color: #fff;
    float: left;
    margin-left: 30px;
  }

  .ht_right {
    float: right;
  }

  .ht_left {
    float: left;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    color: #0a1f33;
    padding-bottom: 15px;
  }

  .header_top {
    border-bottom: 4px solid rgb(114,139,180);
    padding-top: 40px;
    overflow: hidden;
  }

  .header {
    width: 98%;
    margin: 0 auto;
  }

  .content {
    border-radius: 5px;
    width: 96%;
    margin: 0 auto;
    height: 95%;
    position: relative;
    top: 20px;
    background-color: #fff;
  }

  .wrap {
    height: 100%;
    width: 100%;
    background-color: rgb(237,239,244);
  }
</style>
