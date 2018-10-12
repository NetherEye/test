<template>
  <div class="public">
    <div class="box">
      <div class="title">旅游教育扶贫教育工程</div>
      <div class="content">
        <div class="content_header">
          <p class="color ft20">已添加的人员</p>
          <div class="line" style="background: #728bb4;height: 4px;margin-top: 6px;"></div>
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
                prop="name"
                label="参与培训人姓名"
                align="center"
                show-overflow-tooltip
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="开展培训类别"
                align="center"
                show-overflow-tooltip
              >
              </el-table-column>
              <el-table-column
                prop="address"
                align="center"
                label="培训内容"
                show-overflow-tooltip>
              </el-table-column>

              <el-table-column
                align="center"
                label="操作"
                show-overflow-tooltip>
                <template slot-scope="scope">
                  <div class="btns">
                    <button class="bj">编辑</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="sc">删除</button>
                  </div>
                </template>
              </el-table-column>
            </el-table>

          </div>
        </div>
        <p class="color ft20">添加参与培训人员</p>
        <div class="line" style="background: #728bb4;height: 4px;margin-top: 6px;"></div>
        <div class="item" style="margin-bottom: 34px;">
          <div class="item_item">
            <p class="color ft18 mar">姓名:</p>
            <p>
              <el-input v-model="input10" >
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">性别:</p>
            <p>
              <el-input v-model="input10">
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">从事行业:</p>
            <p>
              <el-input v-model="input10" >
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">身份证号码:</p>
            <p>
              <el-input v-model="input10">
              </el-input>
            </p>
          </div>
        </div>
        <div class="item" style="margin-bottom: 34px;">
          <div class="item_item">
            <p class="color ft18 mar">文化程度：</p>
            <p>
              <el-input v-model="input10" >
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">联系电话：</p>
            <p>
              <el-input v-model="input10" >
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">家庭地址：</p>
            <p>
              <el-input v-model="input10" >
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">培训内容：</p>
            <p>
              <el-input v-model="input10" >
              </el-input>
            </p>
          </div>
        </div>
        <div class="item" style="margin-bottom: 34px;">
          <div class="item_item">
            <p class="color ft18 mar">培训天数:</p>
            <p>
              <el-input v-model="input10" >
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">培训方式：</p>
            <p>
              <el-input v-model="input10" >
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">培训专业/工种:</p>
            <p>
              <el-input v-model="input10">
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">培训课时:</p>
            <p>
              <el-input v-model="input10" >
              </el-input>
            </p>
          </div>
        </div>
        <div class="addBtn"><button>添&nbsp;&nbsp;加</button></div>

      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        type: '查看',
        lookTitle: "培训",
        options: [
          {value: '全部', label: '全部'},
          {value: '单个', label: '单个'}
        ],
        tableData :[
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
          }
        ],
      }
    },
    created(){
      // 获取页面类型 发布 查看
      if(this.$route.query.type != undefined){
        this.type = this.$route.query.type;
      }else{
        // gg
      }
    },
  }
</script>

<style scoped>
  .addBtn {
    margin-top: 80px;
    text-align: center;
  }
  .addBtn button {
    width: 130px;
    height: 44px;
    background-color: #45c3ad;
    border-radius: 4px;
  }
  button{
    font-size: 16px;
    outline: none;
    list-style: none;
    border: none;
    color: #eaefff;
  }
  .bj {
    width: 80px;
    height: 34px;
    background-color: #4a87c1;
    border-radius: 4px;
  }
  .sc {
    width: 80px;
    height: 34px;
    background-color: #ff4b1b;
    border-radius: 4px;
  }
  .public {
    height: auto;
    padding: 40px;
  }
  .box {
    height: auto;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    box-shadow: 0px 0px 120px 0px rgba(31, 32, 41, 0.05);
    position: relative;
  }
  .title {
    height: 65px;
    text-align: center;
    line-height: 65px;
    font-size: 22px;
    color: rgba(255, 255, 255, 1);
    background: rgba(70, 103, 157, 1);
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0px 0px 100px 0px rgba(11, 30, 51, 0.05);
  }
  .content {
    height: auto;
    padding: 21px;
    padding-bottom: 40px;
  }
  .color{
    color:rgba(10,31,51,1);
  }
  .ft12{
    font-size: 12px;
  }
  .ft18{
    font-size: 18px;
  }
  .ft20{
    font-size: 20px;
  }
  .mar{
    margin-top: 13px;
    margin-bottom: 10px;
  }
  .item{
    display: flex;
  }
  .item_item{
    width: 400px;
    margin-right: 66px;
  }
  .item_item:last-child{
    margin-right: 0;
  }
  .item2{
    display: flex;
    margin: 29px 0;

  }
  .item2_item1{
    width: 112px;
    margin-right: 12px;
  }
  .item2_item2{
    flex: 1;
  }

</style>
