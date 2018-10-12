<template>
    <div class="public">
        <div class="box">
            <div class="title">{{type == '查看' ? '关于添加xxx村的新增' : '发布通知公告'}}</div>
            <div class="content">
                <p class="color ft20">{{type == '查看' ? '村信息新增' : '发布通知公告'}}</p>
                <div class="line" style="background: #728bb4;height: 4px;margin-top: 6px;"></div>
                <div class="item" style="margin-bottom: 34px;margin-top:34px">
                    <div class="wu_left">
                        归属乡镇
                    </div>
                    <div class="wu_right">
                        <el-select v-model="leibie" clearable style="width: 100%;" disabled="type=='查看'">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="item" style="margin-bottom: 34px;margin-top:34px">
                    <div class="wu_left">
                        村名
                    </div>
                    <div class="wu_right">
                        <el-input v-model="input10" clearable disabled="type == '查看'"></el-input>
                    </div>
                </div>
                <div class="item" style="margin-bottom: 34px;margin-top:34px">
                    <div class="wu_left">
                        村长姓名
                    </div>
                    <div class="wu_right">
                        <el-select v-model="leibie" clearable style="width: 100%;" disabled="type=='查看'">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>

                    </div>
                </div>
                <div class="item" style="margin-bottom: 34px;margin-top:34px">
                    <div class="wu_left">
                        村长 / 负责人联系电话
                    </div>
                    <div class="wu_right">
                        <el-input v-model="input10" clearable disabled="type == '查看'"></el-input>
                    </div>
                </div>
                <div class="item" style="margin-bottom: 34px;margin-top:34px">
                    <div class="wu_left">
                        村支书姓名
                    </div>
                    <div class="wu_right">
                        <el-input v-model="input10" clearable disabled="type == '查看'"></el-input>
                    </div>
                </div>
                <div class="item" style="margin-bottom: 34px;margin-top:34px">
                    <div class="wu_left">
                        村支书练联系电话
                    </div>
                    <div class="wu_right">
                         <el-input v-model="input10" clearable disabled="type == '查看'"></el-input>
                    </div>
                </div>
                <div class="item" style="margin-bottom: 34px;margin-top:34px">
                    <div class="wu_left">
                        驻村第一书记姓名
                    </div>
                    <div class="wu_right">
                         <el-input v-model="input10" clearable disabled="type == '查看'"></el-input>
                    </div>
                </div>
                <div class="item" style="margin-bottom: 34px;margin-top:34px">
                    <div class="wu_left">
                        驻村第一书记联系电话
                    </div>
                    <div class="wu_right">
                         <el-input v-model="input10" clearable disabled="type == '查看'"></el-input>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input10: '',
            type: '查看',
            lookTitle: "XX村",
            leibie: '全部',
            textarea: '',
            duixiang: '',
            zubie: '',
            options: [
                { value: '全部', label: '全部' },
                { value: '单个', label: '单个' }
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
    },
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
.box {
  height: 100%;
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
  position: absolute;
  top: 65px;
  bottom: 0;
  width: 100%;
  padding: 21px;
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
  width: 100%;
  margin-right: 66px;
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
.wu_left {
  width: 13%;
  min-width: 75px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  letter-spacing: 0px;
  margin-right: 20px;
  color: #0a1f33;
}
.wu_right {
  width: 87%;
}
</style>