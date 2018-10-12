<template>
  <div class="public">
    <div class="main">
      <div class="main_content">
        <div class="filter">
          <div class="isFilter" @click="handleFilter"><img :class="isFilter ? 'rotate' : ''" src="../../../static/img/provincial/select_icon.png" /><span>{{isFilter ? '收起筛选' : '展开筛选'}}</span></div>
          <el-collapse-transition>
            <div class="filterBox" v-show="isFilter" style="padding: 36px 50px 46px 50px;">
              <el-form :inline="true" :model="filter" class="demo-form-inline">
                <el-form-item label="归属州市" >
                  <el-select v-model="filter.region" placeholder="活动区域" style="width: 161px;">
                    <el-option v-for="item in options" :key="item.value"   :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="账号状态">
                  <el-select v-model="filter.region" placeholder="全部" style="width: 161px;">
                    <el-option label="正常" value="shanghai"></el-option>
                    <el-option label="冻结" value="beijing"></el-option>

                  </el-select>
                </el-form-item>
                <el-form-item label="手机号码">
                  <el-input v-model="filter.user"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                  <el-input v-model="filter.user"></el-input>
                </el-form-item>
                <el-form-item label="工作单位">
                  <el-input v-model="filter.user"></el-input>
                </el-form-item>
              </el-form>
              <div class="filter_btn">
                <div class="btn btn1">查询</div>
                <div class="btn btn2" @click="username">创建账号</div>
              </div>
            </div>
          </el-collapse-transition>
        </div>
        <div class="table">
          <el-table ref="table" :data="tableData" tooltip-effect="dark" style="width: 99%;" height="100%" header-cell-class-name="tableTou" cell-class-name="tableRow" @selection-change="handleSelectionChange">
            <el-table-column type="index" label="序号" align="center" width="100px">
            </el-table-column>
            <el-table-column label="账号" align="center" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="归属市州" align="center" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="address" align="center" label="关联人员工作单位" show-overflow-tooltip>
            </el-table-column>
            <el-table-column align="center" label="关联人员姓名" show-overflow-tooltip>
              <template slot-scope="scope">
                <div class="textState1">未审批</div>
              </template>
            </el-table-column>
            <el-table-column align="center" label="关联人员手机号码" show-overflow-tooltip>
              <template slot-scope="scope">
                <div class="textState2">通过</div>
              </template>
            </el-table-column>
            <el-table-column align="center" label="账号状态" show-overflow-tooltip>
              <template slot-scope="scope">
                <div class="btns">
                  <div class="textBtnLook" v-if="isStutas">正常</div>
                  <div class="textBtnLook" v-else>已冻结</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column align="center" label="账号操作日志" show-overflow-tooltip>
              <template slot-scope="scope">
                <div class="btns">
                  <div class="textBtnLook" @click="clickFind">点击查看</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作" show-overflow-tooltip>
              <template slot-scope="scope">
                <div class="btns">
                  <div class="textBtnLook" @click="clickUser" v-if="isStutas">冻结账号</div>
                  <div class="textBtnLook" @click="clickUser1" v-else>解冻账号</div>
                  <div class="textBtnLook m">|</div>
                  <div class="textBtnLook" @click="resetPwd">重置密码</div>
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
        isStutas: true,
        isFilter: false, // 是否展开筛选
        filter: {

        },
        value1: '',
        pageSize: 10,
        total: 21,
        currentPage: 1,

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
        multipleSelection: [],
      }
    },
    components: {
      'my-footer': footer
    },
    methods: {
      clickUser1 () {
        this.$confirm('此操作将解冻账号, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '解冻成功!'
          });
          this.isStutas = !this.isStutas
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消解冻'
          });
        });
      },
      username () {
        const {
          href
        } = this.$router.resolve({
          name: '县级创建账号',
          query: {
            a: 1,
            b: 2
          }
        })
        window.open(href, '_blank', "height=800,width=600");
      },
      clickFind () {
        const {
          href
        } = this.$router.resolve({
          name: '账号操作日志',
          query: {
            a: 1,
            b: 2
          }
        })
        window.open(href, '_blank', "height=800,width=600");
      },
      isList() {
        const {
          href
        } = this.$router.resolve({
          name: '调查问卷列表',
          query: {
            a: 1,
            b: 2
          }
        })
        window.open(href, '_blank', "height=800,width=600");
      },
      isXq() {

      },
      handleFilter() {
        this.isFilter = !this.isFilter;
      },
      toggleSelection(rows) {
        if(rows) {
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
      isFind() {

      },
      clickUser() {
        this.$confirm('此操作将冻结账号, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '冻结成功!'
          });
          this.isStutas = !this.isStutas
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消冻结'
          });
        });
      },
      resetPwd() {
        this.$confirm('此操作将重置密码, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '重置成功!'
          });
          this.isStutas = !this.isStutas
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消重置'
          });
        });
      }
    }
  }
</script>

<style scoped>
  .public {
    height: 100%;
    position: relative;
  }

  .main {
    position: absolute;
    top: 0;
    bottom: 60px;
    left: 0;
    right: 0;
    background: #eff2f7;
    padding: 20px 40px 0px 20px;
  }

  .main_content {
    height: 100%;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    box-shadow: 0px 0px 120px 0px rgba(31, 32, 41, 0.05);
    overflow: auto;
  }

  .footer {
    height: 60px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .filter {
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .isFilter {
    width: 190px;
    height: 50px;
    background: rgba(244, 244, 244, 1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    color: rgba(61, 97, 150, 1);
  }

  .rotate {
    transform: rotate(180deg);
  }

  .isFilter>img {
    margin-right: 10px;
    transition: all .3s;
  }

  .filterBox {
    position: absolute;
    border-top: 1px solid rgba(238, 238, 238, 1);
    padding: 36px 50px 46px 50px;
    height: auto;
    z-index: 999;
    background-color: #fff;
    top: 74px;
    left: 0;
    right: 0;
    opacity: 0.99;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.14);
  }

  .filter_btn {
    display: flex;
    justify-content: flex-end;
    padding-left: 52px;
    margin-top: 13px;
  }

  .filter_btn>div {
    margin-left: 30px;
  }

  .table {
    flex: 1;
  }
</style>
