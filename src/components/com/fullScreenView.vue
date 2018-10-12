<template>
    <transition name="fade">
        <div class="media-wrapper" v-if="seeMedia">
            <div class="filesDel"><div class="btnDel" @click="close"></div></div>
            <div class="media-controller">
                	<i class="el-icon-d-arrow-left" @click.prevent="prev"></i>
                	<i class="el-icon-d-arrow-right" @click.prevent="next"></i>
            </div>
            <div class="media-content">
                <div v-for="(item,index) in data" :key="index" :class="type(index)">
                    <img :src='item' v-if="isImg(item)" @click="toggle(index)">
                    <video :src="item" v-else controls="controls" @click="toggle(index)">
                    </video>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'cjMedia',
    data: function () {
        return {
            nowIndex: 0,
            data: ['http://data.vod.itc.cn/?new=/91/42/pZqBu6MSS6qxJ83Lg979vf.mp4&vid=103937904&plat=17&mkey=wZ_vGMGnB9K6ib2_Xt2hN-b9ggY2A1Oa&ch=null&user=api&uid=1608272337357415&SOHUSVP=9mIEjvS6ufejfSofXpytH4MHKXbi9NeH1rI2yd7hmXg&pt=1&prod=56&pg=1&eye=0&cv=1.0.0&qd=68000&src=11050001&ca=4&cateCode=133&_c=1&appid=tv', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4199079176,3473926234&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2478271324,3446997268&fm=27&gp=0.jpg'
            ]
        }
    },
    props: [
    	'seeMedia'
    ],
    methods: {
        next() {
            if (this.nowIndex == this.data.length - 1) {
                this.$Message.warning('已到达最后一张');
            } else {
                this.nowIndex++;
            }
        },
        prev() {
            if (this.nowIndex == 0) {
                this.$Message.warning('已到达第一张');
            } else {
                this.nowIndex--;
            }
        },
        type(index) {
            if (index == this.nowIndex) {
                return 'media-center'
            } else if (index - this.nowIndex == 1) {
                return 'media-right'
            } else if (index - this.nowIndex == -1) {
                return 'media-left'
            } else {
                return 'media-hide'
            }
        },
        isImg(item) {
            var ext = item.substr(item.length - 3, 3);
            var flag = ext == ('jpg' || 'png' || 'gif') ? true : false;
            return flag;
        },
        toggle(index) {
            if (index - this.nowIndex == 1) {
                this.nowIndex++;
            } else if (index - this.nowIndex == -1) {
                this.nowIndex--;
            }
        },
        close() {
        	this.$emit('cust')
        }
    },
}
</script>

<style scoped>
.media-wrapper i {
    color: #fff
}
.media-controller { 
	position: absolute; 
	left: 50%; bottom: 30px; 
	transform: translateX(-50%);
}
.media-close { 
	position: absolute; 
	right: 5px; 
	top: 5px;  
}
.media-close i { 
	font-size: 30px;
}
.media-wrapper {
    position: absolute;
    width: 800px;
    height: 600px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.52);
    z-index: 1010;
}

.media-content div {
    position: absolute;
    top: 45%;
    color: #fff;
    text-align: center;
    font-size: 30px;
    transition: all .56s ease;
    
    
}
        
.media-content img {
    width: 100%;
    height: 100%;
}
.media-content video {
    width: 100%;
    height: 100%;
}

 .media-center {
 			width: 700px;
            height: 500px;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1011;
        }
.media-left,
.media-right {
    width: 25%;
    height: 35%;
    filter: grayscale(90%);
}
.media-right {
    left: 100%;
    transform: translate(-105%, -50%);
}
.media-left {
    left: 0;
    transform: translate(5%, -50%);
}
.media-hide {
    height: 0;
    width: 0;
    left: 50%;
    z-index: 1010;
    opacity: 0;
}
.filesDel{
	position: absolute;
	right: 0;
	top: 0;
	width: 43px;
	height: 43px;
}
.btnDel{
	opacity: 1;
}

</style>