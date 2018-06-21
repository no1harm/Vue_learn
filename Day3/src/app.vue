<template>
    <div>
        <!-- header -->
        <mt-header  title="header"></mt-header>
        <router-view></router-view>
        <!-- footer -->
        <mt-tabbar :selected.sync="selected">
        <mt-tab-item id="">
            <img slot="icon" src="./static/img/主页.png">
            主页
        </mt-tab-item>
        <mt-tab-item id="">
            <img slot="icon" src="./static/img/用户.png">
            会员
        </mt-tab-item>
        <mt-tab-item id="">
            <img slot="icon" src="./static/img/记事本.png">
            订单
        </mt-tab-item>
        <mt-tab-item id="">
            <img slot="icon" src="./static/img/搜索.png">
            查找
        </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
