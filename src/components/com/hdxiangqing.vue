<template>
  <div class="public">
    <div class="box">
      <div class="title">培训活动详情</div>
      <div class="content">
        <p class="color ft20">旅游教育培训基本信息</p>
        <div class="line" style="background: #728bb4;height: 4px;margin-top: 6px;"></div>
        <div class="item" style="margin-bottom: 34px;">
          <div class="item_item">
            <p class="color ft18 mar">培训名称:</p>
            <p>
              <el-input v-model="input10" clearable disabled >
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">培训类型:</p>
            <p>
              <el-input v-model="input10" clearable disabled>
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">承办单位:</p>
            <p>
              <el-input v-model="input10" clearable disabled>
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">培训地点:</p>
            <p>
              <el-input v-model="input10" disabled>
              </el-input>
            </p>
          </div>
        </div>
        <div class="item" style="margin-bottom: 34px;">
          <div class="item_item">
            <p class="color ft18 mar">培训开始时间：</p>
            <p>
              <el-input v-model="input10" disabled>
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">培训结束时间：</p>
            <p>
              <el-input v-model="input10" disabled>
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">旅游教育培训负责人：</p>
            <p>
              <el-input v-model="input10" disabled>
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">旅游教育培训负责人电话：</p>
            <p>
              <el-input v-model="input10" disabled>
              </el-input>
            </p>
          </div>
        </div>
        <div class="item" style="margin-bottom: 34px;">
          <div class="item_item">
            <p class="color ft18 mar">咨询电话（座机）:</p>
            <p>
              <el-input v-model="input10" disabled>
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">培训讲师：</p>
            <p>
              <el-input v-model="input10" disabled>
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">参与人数:</p>
            <p>
              <el-input v-model="input10" disabled>
              </el-input>
            </p>
          </div>
          <div class="item_item">
            <p class="color ft18 mar">完成情况:</p>
            <p>
              <el-select v-model="leibie" clearable style="width: 400px;" disabled="type == '查看'">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </p>
          </div>
        </div>
        <div class="item" style="margin-bottom: 34px;">
          <div class="item_item1">
            <p class="color ft18 mar">旅游教育培训描述:</p>
            <p>
              <el-input
                width="80%"
                type="textarea"
                :rows="4"
                disabled
                placeholder="请输入内容"
                v-model="textarea">
              </el-input>
            </p>
          </div>
        </div>
        <div class="item">
          <div class="fuj">
            <div class="img">
              <img src="../../../static/img/provincial/bj.png" />
              <div class="img_tilte ft12">照片描述</div>
            </div>
            <div class="img filesDel">
              <img src="../../../static/img/provincial/wenjianmiaoshu.png" />
              <div class="img_tilte ft12">当前文件名称（变量）</div>
              <i class="btnDel"></i>
            </div>
            
            <div class="img filesLook">
              <img src="../../../static/img/provincial/wenjianmiaoshu.png" />
              <div class="img_tilte ft12">当前文件名称（变量）</div>
              <div class="file_look pic"></div>
            </div>
            <div class="img filesLook">
              <img src="../../../static/img/provincial/wenjianmiaoshu.png" />
              <div class="img_tilte ft12">当前文件名称（变量）</div>
              <div class="file_look mov"></div>
            </div>
            <div class="img filesLook" @click="seeMedia = true">
              <img src="../../../static/img/provincial/wenjianmiaoshu.png" />
              <div class="img_tilte ft12">当前文件名称（变量）</div>
              <div class="file_look file"></div>
            </div>
            
            <div class="files">
              <div class="upload">
                <input type="file" name="" id="" value="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <my-view :seeMedia="seeMedia" @cust="closeView"></my-view>
    
  </div>
</template>

<script>
	import fullScreenView from '@/components/com/fullScreenView'
  export default{
    data(){
      return{
        input10 : '乡村旅游从业人员培训',
        type: '查看',
        seeMedia: false,
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
    components: {'my-view': fullScreenView},
    created(){
      // 获取页面类型 发布 查看
      if(this.$route.query.type != undefined){
        this.type = this.$route.query.type;
      }else{
        // gg
      }
    },
    methods: {
    	// 关闭查看器
    	closeView(){
    		this.seeMedia = false;
    	},
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
  .fuj {
    display: flex;
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
