<template>
    <div class="public">
        <div class="box">
            <div class="title">{{type == '查看' ? '贫困人口信息' : '发布通知公告'}}</div>
            <div class="content">
                <p class="color ft20">{{type == '查看' ? '基本信息' : '发布通知公告'}}</p>
                <div class="line" style="background: #728bb4;height: 4px;margin-top: 6px;"></div>
                <div class="item" style="margin: 34px">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <div class="itemccc">
                            <el-form-item label="姓名">
                                <el-input v-model="formInline.user" placeholder="姓名" style="width:303px;" :disabled="type=='查看'"></el-input>
                            </el-form-item>
                            <el-form-item label="身份证号">
                                <el-input v-model="formInline.user" placeholder="身份证号" style="width:275px;" :disabled="type=='查看'"></el-input>
                            </el-form-item>
                            <el-form-item label="性别">
                                <el-select v-model="valuesex" placeholder="性别" style="width:303px;" :disabled="type=='查看'">
                                    <el-option v-for="item in opsex" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="联系电话">
                                <el-input v-model="formInline.user" placeholder="联系电话" style="width:275px;" :disabled="type=='查看'"></el-input>
                            </el-form-item>
                        </div>
                        <div class="itemccc">
                            <el-form-item label="户籍地址">
                                <el-cascader :options="options" style="width:275px;" change-on-select :disabled="type=='查看'"></el-cascader>
                            </el-form-item>

                            <el-form-item label="受教育程度">
                                <el-select v-model="valueeadt" placeholder="受教育程度" style="width:260px;" :disabled="type=='查看'">
                                    <el-option v-for="item in education" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="脱贫状态">
                                <el-select v-model="valueget" placeholder="脱贫状态" style="width:275px;" :disabled="type=='查看'">
                                    <el-option v-for="item in Category" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="itemccc">
                            <el-form-item label="是否需要培训">
                                <el-select v-model="valueopt" placeholder="请选择" style="width:245px;" :disabled="type=='查看'">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="现在是否参与旅游" label-width="125px">
                                <el-select v-model="valuetrave" placeholder="请选择" style="width:217px;" :disabled="type=='查看'">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="近三年是否能参与旅游" label-width="160px">
                                <el-select v-model="valuesone" placeholder="请选择" style="width:185px;" :disabled="type=='查看'">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="参与方式">
                                <el-select v-model="valueManner" placeholder="请选择" style="width:275px;" :disabled="type=='查看'">
                                    <el-option v-for="item in Manner" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-form>
                </div>
                <div class="yami">
                    <p class="color ft20">{{type != '查看' ? '基本信息' : '旅游帮扶信息'}}</p>
                    <!-- <template v-if="b == 1">
                        <div class="btn btn1" @click="goAdded">新增</div>
                    </template> -->
                </div>
                <template v-if="ycy!='c'&&city!='1'">
                    <div class="line" style="background: #728bb4;height: 4px;margin-top: 6px;"></div>
                </template>
                <template v-if="ycy=='c'&&city!='1'">
                    <div class="lcc">
                        <div class="line  fj" style="background: #728bb4;height: 4px;margin-top: 6px;"></div>
                        <div class="bf">
                            <button class="addBigBtn">
                                <span>
                                    添加</span>
                            </button>
                        </div>
                    </div>
                </template>
                <template v-if="city=='1'">
                    <div class="lcc">
                        <div class="line  fj" style="background: #728bb4;height: 4px;margin-top: 6px;"></div>
                        <div class="bf">
                            <button class="addBigBtn">
                                <span @click="goAdded">
                                   新增 </span>
                            </button>
                        </div>
                    </div>
                </template>

                <div class="table">
                    <el-table ref="table" :data="tableData" tooltip-effect="dark" style="width: 100%;" width="140px" height="100%" header-cell-class-name="tableTou" cell-class-name="tableRow" @selection-change="handleSelectionChange">
                        <el-table-column type="index" label="序号" align="center" width="80px">
                        </el-table-column>
                        <el-table-column prop="villagers" label="项目名称" align="center" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="city" align="center" label="所属九大工程" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="county" align="center" label="带动类型" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="town" align="center" label="带动贫困人口增收方式" width="200px" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="name" align="center" label="收入时间" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="name" align="center" label="收入金额" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="name" align="center" label="填报时间" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="name" align="center" label="填报员" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column prop="name" align="center" label="信息状态" show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column align="center" label="操作" show-overflow-tooltip>
                            <template slot-scope="scope">
                                <div class="btns">
                                    <template v-if="type == '查看'">
                                        <div class="textBtnLook" @click="gofupinyang">查看</div>
                                    </template>
                                    <template v-if="type == '查看'">
                                        <div class="textBtnLook" @click="gochakna">审查</div>
                                    </template>
                                    <template v-if="type == '查看'">
                                        <div class="textBtnLook" @click="goModify">修改</div>
                                    </template>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '', //户籍
            valuesex: '', //性别
            valueget: '', //脱贫状态
            valueopt: '', //培训
            valuetrave: '', //旅游
            valuesone: '', //近三年是否能参与旅游
            valueManner: '',//参与方式
            valueeadt: '',//受教育程度

            leixing: '',
            pageSize: 7,
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
            type: '',//唯一标识
            city:'',
            provincial:'',
            lookTitle: "培训",
            leibie: '全部',
            textarea: '',
            duixiang: '',
            zubie: '',

            formInline: {
                user: '',
                region: ''
            },
            //受教育程度
            education: [{
                value: '0',
                label: '本科'
            }, {
                value: '1',
                label: '大专'
            }, {
                value: '2',
                label: '中专'
            }, {
                value: '3',
                label: '高中'
            }, {
                value: '4',
                label: '初中'
            }, {
                value: '5',
                label: '小学'
            }, {
                value: '6',
                label: '未受过教育'
            }

            ],
            //就业方式
            Manner: [{
                value: '0',
                label: '直接就业'
            }, {
                value: '1',
                label: '间接就业'
            }, {
                value: '2',
                label: '自主创业'
            }, {
                value: '3',
                label: '其他方式'
            }
            ],
            //性别
            opsex: [{
                value: '0',
                label: '男'
            }, {
                value: '1',
                label: '女'
            }],
            //贫困类别
            Category: [{
                value: '0',
                label: '未脱贫'
            }, {
                value: '1',
                label: '已脱贫享受政策'
            }, {
                value: '2',
                label: '已脱贫不享受政策'
            }, {
                value: '3',
                label: '返贫'
            }],
            options: [{
                value: '1',
                label: '是'
            }, {
                value: '2',
                label: '否'
            },],
        }
    },
    created() {
        // 获取页面类型 发布 查看
        if (this.$route.query.type != undefined) {
            this.type = this.$route.query.type;
        } else {
            // gg
        }
        if (this.$route.query.city != undefined) {
            this.city = this.$route.query.city;
        } else {
            // gg
        }
    },
    methods: {
        handleSelectionChange() {

        },
        gofupinyang() {
            const { href } = this.$router.resolve({
                name: '省级扶贫详情',
                query: {
                    type: '查看',
                    permission: "县",

                }
            })
            window.open(href, '_blank', "height=800,width=600");
        },
        gochakna() {
            const { href } = this.$router.resolve({
                name: '省级扶贫详情',
                query: {
                    type: '审查',
                }
            })
            window.open(href, '_blank', "height=800,width=600");
        },
        goAdded() {
            const { href } = this.$router.resolve({
                name: '省级扶贫详情',
                query: {
                    type: '查看',
                    Added: '添加',
                }
            })
            window.open(href, '_blank', "height=800,width=600");
        },
        goModify(){
             const { href } = this.$router.resolve({
                name: '省级扶贫详情',
                query: {
                    type: '查看',
                    lcc:'c'
                }
            })
            window.open(href, '_blank', "height=800,width=600");

        }
    }
}
</script>

<style scoped>
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
.yami {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.addBigBtn {
  display: block;
  width: 126px;
  height: 40px;
  background-color: #4a87c1;
  border-radius: 4px;
  margin-left: 40px;
  cursor: pointer;
}
.addBigBtn span:before {
  content: url(../../../static/img/provincial/++.png);
  margin-right: 5px;
  margin-top: 4px;
}
.lcc {
    margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fj {
  width: 90%;
}
.bf {
}
.addBigBtn span {
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>