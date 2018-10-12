<template>
  <div class="public">
    <div class="main">
      <div class="main_content">
        <div class="filter">
          <div class="isFilter" @click="handleFilter"><img :class="isFilter ? 'rotate' : ''" src="../../../static/img/provincial/select_icon.png"/><span>{{isFilter ? '收起筛选' : '展开筛选'}}</span></div>
          <el-collapse-transition>
            <div class="filterBox" v-show="isFilter" style="padding: 36px 50px 46px 50px;">
              <el-form :inline="true" :model="filter" class="demo-form-inline">
                <el-form-item label="培训名称">
                  <el-input v-model="filter.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="培训类别">
                  <el-select v-model="filter.region" placeholder="全部">
                    <el-option label="培训旅游扶贫重点村干部" value="shanghai"></el-option>
                    <el-option label="培训乡村旅游致富带头人" value="beijing"></el-option>
                    <el-option label="旅游扶贫重点村旅游从业人员培训" value="beijing"></el-option>
                    <el-option label="培训贫困人口为乡村旅游骨干" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="时间">
                  <div class="block">
                    <el-date-picker
                      v-model="value1"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </div>
                </el-form-item>

              </el-form>
              <div class="filter_btn">
                <div class="btn btn1">查询</div>
                <div class="btn btn2" @click="addPx">新增</div>
              </div>
            </div>
          </el-collapse-transition>
        </div>
        <div class="table">
          <el-table
            ref="table"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 99%;"
            height="100%"
            header-cell-class-name="tableTou"
            cell-class-name="tableRow"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="index"
              label="序号"
              align="center"
              width="100px"
              >
            </el-table-column>
            <el-table-column
              label="培训名称"
              align="center"
              show-overflow-tooltip
            >
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>

            <el-table-column
              align="center"
              label="培训类别"
              show-overflow-tooltip>
              <template slot-scope="scope">
                <div class="textState1">未审批</div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="培训负责人"
              show-overflow-tooltip>
              <template slot-scope="scope">
                <div class="textState2">通过</div>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="培训负责人电话"
              show-overflow-tooltip>

            </el-table-column>
            <el-table-column
              align="center"
              label="参与人数"
              show-overflow-tooltip>

            </el-table-column>
            <el-table-column
              align="center"
              label="操作"
              show-overflow-tooltip>
              <template slot-scope="scope">
                <div class="btns">
                  <div class="textBtnLook" @click="cfind">查看</div>
                  <div class="textBtnLook m">/</div>
                  <div class="textBtnLook" @click="clist">名单</div>
                  <div class="textBtnLook m">/</div>
                  <div class="textBtnLook" style="color:red;">删除</div>
                </div>
              </template>
            </el-table-column>
          </el-table>

        </div>
        <div class="fenye">
          <div class="fenye_title">共 {{total}} 条数据 每页 {{pageSize}} 条数据  共 {{Math.floor(total/pageSize) + (total%pageSize != 0 ? 1 : 0)}} 页</div>
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
  export default{
    data(){
      return{
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
    components: {'my-footer': footer},
    methods: {
      clist () {
        const {
          href
        } = this.$router.resolve({
          name: '扶贫信息查看',
          query: {
            a: 1,
            b: 2
          }
        })
        window.open(href, '_blank', "height=800,width=1600");
      },
      cfind () {
        const {
          href
        } = this.$router.resolve({
          name: '培训活动详情',
          query: {
            a: 1,
            b: 2
          }
        })
        window.open(href, '_blank', "height=800,width=1600");
      },
      addPx () {
        const {
          href
        } = this.$router.resolve({
          name: '新增培训',
          query: {
            a: 1,
            b: 2
          }
        })
        window.open(href, '_blank', "height=800,width=1600");
      },
      handleFilter(){
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
