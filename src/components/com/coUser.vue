<template>
  <div class="public">
    <div class="box">
      <div class="title">创建账号</div>
      <div class="content">
        <p class="color ft20">账号管理-创建账号</p>
        <div class="line" style="background: #728bb4;height: 4px;margin-top: 6px;"></div>
        <div class="item" style="margin-bottom: 34px;">
          <div class="item_item1">
            <p class="color ft18 mar">账号类型:</p>
            <p>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </p>
          </div>
          <div class="item_item1">
            <p class="color ft18 mar">管辖乡镇:</p>
            <div>
              <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
              <div style="margin: 15px 0;"></div>
              <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <div class="item_item1">
            <p class="color ft18 mar">归属人员工作单位:</p>
            <p>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </p>
          </div>
          <div class="item_item1">
            <p class="color ft18 mar">关联人员姓名:</p>
            <p>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </p>
          </div>
          <div class="item_item1">
            <p class="color ft18 mar">关联人员电话号码:</p>
            <p>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </p>
          </div>
          <div class="setUpBtn">
            <button>
              创建
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default{
    data(){
      return{
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        input10 : '乡村旅游从业人员培训',
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
    methods :{
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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
  .setUpBtn{
    text-align: center;
    margin-top: 40px;
  }

  .setUpBtn button{
    cursor: pointer;
    width: 130px;
    height: 44px;
    background-color: #45c3ad;
    border-radius: 4px;
  }
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
  .upload {
    display: inline-block;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    box-shadow: 0px 0px 8px 0px rgba(31, 32, 41, 0.18);
    margin-right: 50px;
    background: url(../../../static/img/provincial/zz.png) no-repeat center center;
    cursor: pointer;
  }
  .upload > input {
    display: inline-block;
    border: none;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }
  .files {
    display: flex;
    display: inline-block;
    position: relative;
  }
  .files:after {
    content: "可添加图片/视频/文档";
    position: absolute;
    bottom: -22px;
    left: 6px;
    right: 0;
    font-size: 14px;
    color: rgba(164, 168, 179, 1);
  }
  .img {
    display: inline-block;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    box-shadow: 0px 0px 8px 0px rgba(31, 32, 41, 0.18);
    margin-right: 50px;
  }
  .img .img_tilte {
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: rgba(70, 103, 157, 1);
  }
  .img > img {
    display: block;
    height: 120px;
    width: 100%;
    border-radius: 4px;
  }

  .item_item1 {
    width: 100%;
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
