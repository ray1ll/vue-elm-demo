<template>
    <div class="profile_page">
        <head-top go-back='true' :head-title="profiletitle"></head-top>
        <section>
            <section class="profile-number">
                <router-link :to="userInfo&&userInfo.user_id? '/profile/info' : '/login'" class="profile-link">
                    <img :src="imgBaseUrl + userInfo.avatar" class="privateImage" v-if="userInfo&&userInfo.user_id">
                    <span class="privateImage" v-else>
                        <svg class="privateImage-svg">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
                        </svg>
                    </span>
                    <div class="user-info">
                        <p>{{username}}</p>
                        <p>
                            <span class="user-icon">
                                <svg class="icon-mobile" fill="#fff">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use>
                                </svg>
                            </span>
                            <span class="icon-mobile-number">{{mobile}}</span>
                        </p>
                    </div>
                    <span class="arrow">
                        <svg class="arrow-svg" fill="#fff">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </span>
                </router-link>
            </section>
            <section class="info-data">
                <!-- <ul class="clear">
                    <router-link to="/balance" tag="li" class="info-data-link">
                        <span class="info-data-top"><b>{{parseInt(balance).toFixed(2)}}</b>元</span>
                        <span class="info-data-bottom">我的余额</span>
                    </router-link>
                    <router-link to="/benefit" tag="li" class="info-data-link">
                        <span class="info-data-top"><b>{{count}}</b>个</span>
                        <span class="info-data-bottom">我的优惠</span>
                    </router-link>
                    <router-link to="/points" tag="li" class="info-data-link">
                        <span class="info-data-top"><b>{{pointNumber}}</b>分</span>
                        <span class="info-data-bottom">我的积分</span>
                    </router-link>
                </ul> -->
                <router-link to='/order' class="myorder">
                    <aside>
                        <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order"></use>
                        </svg>
                    </aside>
                    <div class="myorder-div">
                        <span>我的订单</span>
                        
                    </div>
                </router-link>
                <ul class="clear">
                    <router-link to="/balance" tag="li" class="info-data-link">
                        
                        <span class="info-data-bottom">全部订单</span>
                    </router-link>
                    <router-link to="/benefit" tag="li" class="info-data-link">
                        
                        <span class="info-data-bottom">进行中</span>
                    </router-link>
                    <router-link to="/points" tag="li" class="info-data-link">
                        
                        <span class="info-data-bottom">待评价</span>
                    </router-link>
                    <router-link to="/points" tag="li" class="info-data-link">
                        
                        <span class="info-data-bottom">退款</span>
                    </router-link>
                </ul>
            </section>
            <!-- <section class="profile-1reTe">
            </section> -->
            <section class="info-data2">
            <div class="scrollable-container">
                <div class="scrollable-content">
                    <div class="row">
                    <a href="https://home.m.duiba.com.cn/#/chome/index"  class="column">
                    
                        <span class="info-data-top">
                            <aside>
                            <svg fill="#fc7b53">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#point"></use>
                         </svg>
                         </aside>
                        </span>
                        <span class="info-data-bottom">积分商城</span>                  
                    </a>
                    <router-link to="/service"  class="column">
                    
                    <span class="info-data-top">
                        <aside>
                            <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#service"></use>
                        </svg>
                     
                     </aside>
                    </span>
                    <span class="info-data-bottom">服务中心</span>                  
                </router-link>
                <router-link to='/vipcard'  class="column">
                    
                    <span class="info-data-top">
                        <aside>
                        <svg fill="#ffc636">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                     </svg>
                     </aside>
                    </span>
                    <span class="info-data-bottom">饿了么会员</span>                  
                </router-link>
                <router-link to="/download" tag="li" class="column">
                    
                    <span class="info-data-top">
                        <aside>
                            <svg fill="#3cabff">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download"></use>
                        </svg>
                     </aside>
                    </span>
                    <span class="info-data-bottom">下载elm</span>                  
                </router-link>
                    </div>    
                <div class="row">
                    <router-link to="/points" tag="li" class="column">
                    
                        <span class="info-data-top">
                            <aside>
                            <svg fill="#fc7b53">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#points"></use>
                         </svg>
                         </aside>
                        </span>
                        <span class="info-data-bottom">我的积分</span>                  
                    </router-link>
                    <router-link to="/benefit" tag="li" class="column">
                    
                    <span class="info-data-top">
                        <aside>
                            <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discount"></use>
                        </svg>
                     
                     </aside>
                    </span>
                    <span class="info-data-bottom">优惠券</span>                  
                </router-link>
                <router-link to='/balance'  class="column">
                    
                    <span class="info-data-top">
                        <aside>
                        <svg fill="#ffc636">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#money"></use>
                     </svg>
                     </aside>
                    </span>
                    <span class="info-data-bottom">钱包余额</span>                  
                </router-link>
               
                    </div>
                </div>
                </div>
            
                </section>



        </section>
        <foot-guide></foot-guide>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
// import alertTip from '../../components/common/alertTip'
import headTop from '/src/components/header/head'
import footGuide from '/src/components/footer/footGuide'
import {mapState, mapMutations} from 'vuex'
import {imgBaseUrl} from '/src/config/env'
import {getImgPath} from '/src/components/common/mixin'

export default {
    data(){
        return{
            profiletitle: '我的',
            username: '登录/注册',           //用户名
            resetname: '',
            mobile: '暂无绑定手机号',             //电话号码
            balance: 0,            //我的余额
            count : 0,             //优惠券个数
            pointNumber : 0,       //积分数
            avatar: '',             //头像地址
            imgBaseUrl,
        }
    },
    mounted(){
        this.initData();
    },
    mixins: [getImgPath],
    components:{
        headTop,
        footGuide,
        // alertTip
    },

    computed:{
        ...mapState([
            'userInfo',
        ]),
        //后台会返回两种头像地址格式，分别处理
        imgpath:function () {
            let path;
            if(this.avatar.indexOf('/') !==-1){
                path = imgBaseUrl + this.avatar;
            }else{
                path = this.getImgPath(this.avatar)
            }
            this.SAVE_AVANDER(path);
            return path;
        }
    },

    methods:{
        ...mapMutations([
            'SAVE_AVANDER'
        ]),
        initData(){
            if (this.userInfo && this.userInfo.user_id) {
                this.avatar = this.userInfo.avatar;
                this.username = this.userInfo.username;
                this.mobile = this.userInfo.mobile || '暂无绑定手机号';
                this.balance = this.userInfo.balance;
                this.count = this.userInfo.gift_amount;
                this.pointNumber = this.userInfo.point;
            }else{
                this.username = '登录/注册';
                this.mobile = '暂无绑定手机号';
            }
        },
    },
    watch: {
        userInfo: function (){//value
            this.initData()
        }
    }
}

</script>

<style lang="scss" scoped>
   @import '/src/style/mixin';


   .scrollable-container {
  width: 100%;
  
  overflow-x: auto;
  scrollbar-width:thin; /* 设置滚动条的宽度 */
  scrollbar-color: #888 #f1f1f1; 
}

.scrollable-content {
  display: inline-block;
}

.row {
  display: flex;
}

// .column {
//   display: grid;
//   place-items: center; /* 居中内容 */
//   flex: 0 0 33.3%;
//   padding: 20px;
//   box-sizing: border-box;
//   .info-data-top {
    
//   @include sc(.55rem,#333);
// //   padding: .853333rem 0 0 0;
// }

// .info-data-bottom {
//   @include sc(.57333rem,#666);
//   font-weight: 200;
// //   font-size: medium;
// }
// }


.column {
  display: flex; /* 使用弹性布局 */
  flex-direction: column; /* 设置垂直布局 */
  justify-content: center; /* 主轴上居中对齐 */
  align-items: center; /* 交叉轴上居中对齐 */
  flex: 0 0 50%;
//   padding: 20px;
  box-sizing: border-box;
}

.info-data-top {
//   @include sc(.55rem,#333);
    padding: .853333rem 0 0 0;
}

.info-data-bottom {
    @include sc(.55rem,#333);
  font-weight: 200;
  padding: 0 0 .33333rem 0;
}

/* 可选样式：添加间距 */
.row + .row {
  margin-top: 10px;
}

.info-data2{

    width: 93%;
    background:$fc;
    box-sizing: border-box;
    margin-left: auto;
  margin-right: auto;
  margin-top: 6%;
}

aside{
                @include wh(.8rem,.8rem);
                margin-left:.866667rem;
                margin-right:.266667rem;
                display:flex;
                align-items: center;
                svg{
                    @include wh(100%,100%);
                }
            }



    .profile_page{
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
   .profile-number{
        padding-top:1.95rem;
        .profile-link{
            display:block;
            display:flex;
            box-align: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background:$blue;
            padding: .666667rem .6rem;
            .privateImage{
                display:inline-block;
                @include wh(2.5rem,2.5rem);
                border-radius:50%;
                vertical-align:middle;
                .privateImage-svg{
                    background:$fc;
                    border-radius:50%;
                    @include wh(2.5rem,2.5rem);
                }
            }
            .user-info{
                margin-left:.48rem;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                p{
                    font-weight:700;
                    @include sc(.8rem,$fc);
                    .user-icon{
                        @include wh(0.5rem,0.75rem);
                        display:inline-block;
                        vertical-align:middle;
                        line-height:0.75rem;
                        .icon-mobile{
                            @include wh(100%,100%);
                        }
                    }
                    .icon-mobile-number{
                        display:inline-block;
                        @include sc(.57333rem,$fc);

                    }
                }

            }
            .arrow{
                @include wh(.46667rem,.98rem);
                display:inline-block;
                svg{
                   @include wh(100%,100%);
                }
            }
        }
   }

.info-data{
    width: 94%;
    background:$fc;
    box-sizing: border-box;
    margin-left: auto;
  margin-right: auto;
  margin-top: 6%;
    .myorder{
            padding-left:1.6rem;
            display:flex;
            align-items: center;
            aside{
                @include wh(.7rem,.7rem);
                margin-left:-.866667rem;
                margin-right:.266667rem;
                display:flex;
                align-items: center;
                svg{
                    @include wh(100%,100%);
                }
            }
            .myorder-div{
                width:100%;
                border-bottom:1px solid #f1f1f1;
                padding:.433333rem .266667rem .433333rem 0;
                @include sc(.7rem,#333);
                display:flex;
                justify-content:space-between;
                span{
                    display:block;
                }
                .myorder-divsvg{
                    @include wh(.46667rem,.466667rem);
                    svg{
                        @include wh(100%,100%);
                    }
                }
            }
        }
        ul{
            .info-data-link{
                float:left;
                width:25%;
                display:inline-block;
                border-right:1px solid #f1f1f1;
                span{
                    display:block;
                    width:100%;
                    text-align:center;
                }
                .info-data-top{
                    @include sc(.55rem,#333);
                    padding: .853333rem 0 .453333rem;
                    b{
                        display:inline-block;
                        @include sc(1.2rem,#f90);
                        font-weight:700;
                        line-height:1rem;
                        font-family: Helvetica Neue,Tahoma;
                    }
                }
                .info-data-bottom{
                    @include sc(.57333rem,#666);
                    font-weight:400;
                    padding-bottom:.453333rem;
                    
                }
            }
            .info-data-link:nth-of-type(2){
                .info-data-top{
                    b{
                        color:#ff5f3e;
                    }
                }

            }
            .info-data-link:nth-of-type(3){
                border:0;
                .info-data-top{
                    b{
                        color:#6ac20b;
                    }
                }
            }
        }
}

//    .info-data{
//         width:100%;
//         background:$fc;
//         box-sizing: border-box;
//         ul{
//             .info-data-link{
//                 float:left;
//                 width:33.33%;
//                 display:inline-block;
//                 border-right:1px solid #f1f1f1;
//                 span{
//                     display:block;
//                     width:100%;
//                     text-align:center;
//                 }
//                 .info-data-top{
//                     @include sc(.55rem,#333);
//                     padding: .853333rem 0 .453333rem;
//                     b{
//                         display:inline-block;
//                         @include sc(1.2rem,#f90);
//                         font-weight:700;
//                         line-height:1rem;
//                         font-family: Helvetica Neue,Tahoma;
//                     }
//                 }
//                 .info-data-bottom{
//                     @include sc(.57333rem,#666);
//                     font-weight:400;
//                     padding-bottom:.453333rem;

//                 }
//             }
//             .info-data-link:nth-of-type(2){
//                 .info-data-top{
//                     b{
//                         color:#ff5f3e;
//                     }
//                 }

//             }
//             .info-data-link:nth-of-type(3){
//                 border:0;
//                 .info-data-top{
//                     b{
//                         color:#6ac20b;
//                     }
//                 }
//             }
//         }
//    }
   .profile-1reTe{
        width: 94%;
        margin-left: auto;
        margin-right: auto;
        margin-top:.4rem;
        background:$fc;
        .myorder{
            padding-left:1.6rem;
            display:flex;
            align-items: center;
            aside{
                @include wh(.7rem,.7rem);
                margin-left:-.866667rem;
                margin-right:.266667rem;
                display:flex;
                align-items: center;
                svg{
                    @include wh(100%,100%);
                }
            }
            .myorder-div{
                width:100%;
                border-bottom:1px solid #f1f1f1;
                padding:.433333rem .266667rem .433333rem 0;
                @include sc(.7rem,#333);
                display:flex;
                justify-content:space-between;
                span{
                    display:block;
                }
                .myorder-divsvg{
                    @include wh(.46667rem,.466667rem);
                    svg{
                        @include wh(100%,100%);
                    }
                }
            }
        }
        .myorder:nth-of-type(3) .myorder-div{
            border:0;
        }
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>
