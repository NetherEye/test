<template>
    <div class="public">
        <div class="box">
            <div class="top">
                <p class="wu_top">下载模板：</p>
                <div class="wu_bottom">
                    <div class="dianji">
                        <!-- <img src="../../../static/img/provincial/moban.png" alt=""> -->
                    </div>
                </div>
            </div>
            <div class="bottom">
                <p>
                    选择文件：
                </p>
                <div class="footer">
                    <div class="zly">
                        <input class="file" type="file" name="" id="" value="" />
                    </div>
                    <div class="btn"> 浏览</div>
                </div>
            </div>
            <div class="wu_footer">
                <div class="sc" @click="uploading">
                    上传
                </div>
                <div class="qx">
                    取消
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        uploading() {
            const { href } = this.$router.resolve({
                name: '上传培训名单',
                query: {
                    type: '查看',
                }
            })
            window.open(href, '_blank', "height=800,width=600");
        }
    }
}
</script>

<style>
.public {
  height: auto;
  padding: 40px;
}
.box {
  width: 520px;
  height: 431px;
  background-color: #f0f3f8;
  box-shadow: 0px 0px 120px 0px rgba(31, 32, 41, 0.05);
  border-radius: 10px;
  padding: 30px;
  box-sizing: border-box;
}
.top {
  width: 330px;
  height: 168px;
  box-sizing: border-box;
}
.wu_top {
  font-size: 18px;
  color: #0a1f33;
}
.wu_bottom {
  width: 330px;
  height: 140px;
  background-color: #ffffff;
  border-radius: 4px;
  border: solid 1px #eeeeee;
  margin-top: 4px;
}
.bottom {
  margin-top: 30px;
}
.footer {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.zly {
  width: 330px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 4px;
  border: solid 1px #eeeeee;
}
.file {
  width: 100%;
  height: 100%;
  border: none;
  /* outline: none; */
  opacity: 0;
  cursor: pointer;
}
.btn {
  width: 100px;
  height: 44px;
  background-color: #4a87c1;
  border-radius: 4px;
  font-size: 18px;
  color: #f8f8f8;
  text-align: center;
  cursor: pointer;
}
.wu_footer {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.sc {
  width: 130px;
  height: 44px;
  background-color: #45c3ad;
  border-radius: 4px;
  font-size: 18px;
  color: #f8f8f8;
  text-align: center;
  line-height: 44px;
  cursor: pointer;
}
.qx {
  width: 130px;
  height: 44px;
  background-color: #a4a8b3;
  border-radius: 4px;
  color: #f8f8f8;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  line-height: 44px;
}
.dianji {
  margin-top: 30px;
  margin-left: 20px;
  width: 75px;
  height: 80px;
  background-image: url(../../../static/img/provincial/moban.png);
  cursor: pointer;
}
</style>

