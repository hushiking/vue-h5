<template>
    <div class="establish">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <div @click="toRedduceCompany(item.nameid)" class="establish_apply">进入
                    <br/>办理</div>
                <div class="establish_item">
                    <div class="establish_item-title">{{item.entName}}</div>
                    <div class="establish_item-info">{{item.notNo}}</div>
                </div>
            </li>
        </ul>
        <div class="establish_fix">
            <div>如果非本账号申请的名称需要通过系统校验后可继续办理业务</div>
            <router-link :to="{ name: 'proposed_notself' }">非本账号申请</router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                items: [
                    //   {
                    //     title: '北京顾信丰科贸易有限公司',
                    //     info: '(京丰）名称预查（内）字[2018] 第0422335号'
                    //   },
                    //   {
                    //     title: '北京顾信丰科贸易有限公司',
                    //     info: '(京丰）名称预查（内）字[2018] 第0422335号'
                    //   },
                    //   {
                    //     title: '北京顾信丰科贸易有限公司',
                    //     info: '(京丰）名称预查（内）字[2018] 第0422335号'
                    //   }
                ]
            }
        },
        methods: {
            toRedduceCompany(companyId) {
                axios({
                    method: 'post',
                    url: `/apis/apply/cp/setup/startBusiness.do?apprno=${companyId}`,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then((response) => {
                    if (response.status === 1) {
                        // 存储用户 gid pripid
                        this.$router.push({
                            name: 'my_business'
                        })
                    } else {
                        alert('已经存在')
                    }
                    console.log(response.data.data)
                    this.items = response.data.data
                }).catch(function(error) {
                    console.log(error)
                })
            }
        },
        mounted() {
            axios({
                method: 'post',
                url: `/apis/apply/cp/setup/queryNameList.do`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
                // data: `session=${JSON.stringify({username: '雷佳毅', cerno: '36012419951013XXX'})}`
            }).then((response) => {
                console.log(response.data.data)
                this.items = response.data.data
            }).catch(function(error) {
                console.log(error)
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .establish {
        height: 100%;
        background: #f3f3f3;
        li {
            margin-bottom: 0.54rem;
            background: #fff;
            padding: 0.54rem;
            overflow: hidden;
        }
        &_apply {
            float: right;
            margin-left: 0.54rem;
            padding: 0.22rem 0.43rem;
            cursor: pointer;
            color: #fff;
            border: 1px solid #00b3ff;
            border-radius: 3px;
            background: #00b3ff;
        }
        &_item {
            &-title {
                color: #00b3ff;
                overflow: hidden;
                white-space: nowrap;
                border-bottom: 1px solid #eaeaea;
                padding-bottom: 0.22rem;
                margin-bottom: 0.14rem;
            }
            &-info {
                font-size: 0.43rem;
                color: #7d7d7d;
                overflow: hidden;
                white-space: nowrap;
            }
        }
        &_fix {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            padding: 0.54rem;
            display: flex;
            align-items: center;
            background: #fff;
            font-size: 0.5rem;
            overflow: hidden;
            a {
                margin-left: 0.36rem;
                word-break: keep-all;
                padding: 0 0.5rem;
                height: 1.5rem;
                line-height: 1.5rem;
                font-size: 0.5rem;
                border-radius: 3px;
                background: #fc7742;
                color: #fff;
            }
        }
    }
</style>
