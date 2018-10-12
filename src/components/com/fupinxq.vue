<template>
    <div class="public fupinxq">
        <div class="box">
            <div class="title">{{type == '查看' ? '张三三旅游帮扶信息详情' : '发布通知公告'}}</div>
            <div class="content">
                <p class="color ft20">旅游教育培训基本信息</p>
                <div class="line" style="background: #728bb4;height: 4px;margin-top: 6px;"></div>
                <div class="item" style="margin-bottom: 34px;">
                    <div class="item_item">
                        <p class="color ft18 mar">项目名称：</p>
                        <p>
                            <el-input v-model="input10" placeholder="项目名称" clearable :disabled="Added !='添加'&& lcc!='c'">
                            </el-input>
                        </p>
                    </div>
                    <div class="item_item">
                        <p class="color ft18 mar">项目主体：</p>
                        <p>
                            <el-input v-model="input10" placeholder="项目主体" clearable :disabled="Added !='添加'&& lcc!='c'">
                            </el-input>
                        </p>
                    </div>
                    <div class="item_item">
                        <p class="color ft18 mar">项目地址：</p>
                        <p>
                            <el-cascader :options="options" style="width:100%" clearable change-on-select :disabled="Added !='添加'&& lcc!='c'"></el-cascader>
                        </p>
                    </div>
                    <div class="item_item">
                        <p class="color ft18 mar">所属九大工程：</p>
                        <p>
                            <el-select v-model="leibie" clearable style="width:100%" :disabled="Added !='添加'&& lcc!='c'">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </p>
                    </div>
                </div>
                <div class="item" style="margin-bottom: 34px;">
                    <div class="item_item">
                        <p class="color ft18 mar">带动贫困人口增收方式：</p>
                        <p>
                            <el-select v-model="leibie" clearable style="width:100%" :disabled="Added !='添加'&& lcc!='c'">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </p>
                    </div>
                    <div class="item_item">
                        <p class="color ft18 mar">开始时间：</p>
                        <p>
                            <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="width:100%" :disabled="Added !='添加'&& lcc!='c'">
                            </el-date-picker>
                        </p>
                    </div>
                    <div class="item_item">
                        <p class="color ft18 mar">结束时间：</p>
                        <p>
                            <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="width:100%" :disabled="Added !='添加'&& lcc!='c'">
                            </el-date-picker>
                        </p>
                    </div>
                    <div class="item_item">
                        <p class="color ft18 mar">备注：</p>
                        <p>
                            <el-input v-model="input10" clearable :disabled="Added !='添加'&& lcc!='c'">
                            </el-input>
                        </p>
                    </div>
                </div>
                <div class="item" style="margin-bottom: 34px;">
                    <div class="item_item">
                        <p class="color ft18 mar">收入时间：</p>
                        <p>
                            <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="width:100%" :disabled="Added !='添加'&& lcc!='c'">
                            </el-date-picker>
                        </p>
                    </div>
                    <div class="item_item">
                        <p class="color ft18 mar">收入金额：</p>
                        <p>
                            <el-input v-model="input10" style="width:100%;" clearable placeholder="收入金额" :disabled="Added !='添加'&& lcc!='c'">
                            </el-input>
                        </p>
                    </div>
                    <div class="item_item">
                        <p class="color ft18 mar">填报人员：</p>
                        <p>
                            <el-input v-model="input10" clearable placeholder="填报人员" :disabled="Added !='添加'&& lcc!='c'">
                            </el-input>
                        </p>
                    </div>
                    <div class="item_item">
                        <p class="color ft18 mar">填报时间：</p>
                        <p>
                            <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="width:100%" :disabled="Added !='添加'&& lcc!='c'">
                            </el-date-picker>
                        </p>
                    </div>
                </div>
                <div class="item1">
                    <p class="color ft18 mar">佐证材料：</p>
                    <div class="fuj">
                        <div class="img" v-if="Added != '添加'">
                            <img src="../../../static/img/provincial/bj.png" />
                            <div class="img_tilte ft12">照片描述</div>
                        </div>
                        <div class="files" v-if="Added == '添加'|| lcc=='c'">
                            <div class="upload">
                                <input type="file" name="" id="" value="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <template v-if="type=='查看'&& Added !='添加' && permission =='县' &&lcc!='c'">
                        <p class="dibu" @click="gobiaoji">标记可疑</p>
                    </template>
                    <template v-if="type=='审查' &&lcc!='c'">
                        <p class="dibu" @click="gopass">通过</p>
                        <p class="dibu" @click="goreject">驳回</p>
                    </template>
                    <template v-if="Added == '添加' || permission!='县' &&type!='审查' &&lcc!='c'">
                        <p class="dibu ycy" @click="goreject">保存</p>
                    </template>
                    <template v-if="lcc=='c'">
                        <p class="dibu ycy lcc" style="background-color: #4a87c1;">仅保存</p>
                        <p class="dibu ycy">保存并提交</p>
                    </template>

                </div>
            </div>

        </div>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <div class="item1">
                <p class="color ft18 mar">标记备注：</p>
                <el-input type="textarea" :rows="7" :autosize="{minRows:7,maxRows:7}" v-model="textarea">
                </el-input>
            </div>
            <div slot="footer" class="dialog-footer">
                <template v-if="sss">
                    <p class="dibu">标记可疑</p>
                    <p class="dibu  yey" @click="dialogFormVisible=false">取消</p>
                </template>
                <template v-if="saa">
                    <p class="dibu">通过</p>
                    <p class="dibu  yey" @click="dialogFormVisible=false">取消</p>
                </template>
                <template v-if="sac">
                    <p class="dibu">驳回</p>
                    <p class="dibu  yey" @click="dialogFormVisible=false">取消</p>
                </template>
            </div>
        </el-dialog>

    </div>
</template>

<script>
export default {
    data() {
        return {
            textarea:'',
            value1:"",
            dialogFormVisible: false,
            saa: false,
            sss: false,
            sac: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px',
            input10: '乡村旅游从业人员培训',
            type: '',  // 全部权限
            Added: '',  // 市级权限
            permission: '',// 县级权限
            lcc: '',// 县级权限
            leibie: '全部',
            lookTitle: "培训",
            options: [
                { value: '全部', label: '全部' },
                { value: '单个', label: '单个' }
            ],
            tableData: [
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
    created() {
        // 获取页面类型 发布 查看
        if (this.$route.query.type != undefined) {
            this.type = this.$route.query.type;
        } else {
            // gg
        }
        if (this.$route.query.Added != undefined) {
            this.Added = this.$route.query.Added;
        } else {
            // gg
        }
        if (this.$route.query.permission != undefined) {
            this.permission = this.$route.query.permission;
        } else {
            // gg
        }
        if (this.$route.query.lcc != undefined) {
            this.lcc = this.$route.query.lcc;
        } else {
            // gg
        }
    },
    methods: {
        //标记可疑
        gobiaoji() {
            console.log('asdf')
            this.dialogFormVisible = true;
            this.sss = true;
        },
        // 通过
        gopass() {
            this.dialogFormVisible = true;
            this.sac = false;
            this.saa = true;
        },
        //驳回
        goreject() {
            this.dialogFormVisible = true;
            this.saa = false;
            this.sac = true;
        }
    }
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

button {
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
.color {
  color: rgba(10, 31, 51, 1);
}
.ft12 {
  font-size: 12px;
}
.ft18 {
  font-size: 18px;
}
.ft20 {
  font-size: 20px;
}
.mar {
  margin-top: 13px;
  margin-bottom: 10px;
}
.item {
  display: flex;
}
.item_item {
  width: 400px;
  margin-right: 66px;
}
.item_item:last-child {
  margin-right: 0;
}
.item2 {
  display: flex;
  margin: 29px 0;
}
.item2_item1 {
  width: 112px;
  margin-right: 12px;
}
.item2_item2 {
  flex: 1;
}
.footer {
    margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
.dibu {
  width: 130px;
  height: 40px;
  background-color: #ff4b1b;
  border-radius: 4px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  color: #f8f8f8;
  cursor: pointer;
}
.ycy {
  background-color: #45c3ad;
}
.yey {
  width: 130px;
  height: 40px;
  background-color: #a4a8b3;
  border-radius: 4px;
}
</style>
