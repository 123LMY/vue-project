import Vue from 'vue';

/*
 **混合 （请认真查看使用方法 https://vuefe.cn/v2/guide/mixins.html）
 **注意同名钩子函数将混合为一个数组，因此都将被调用。且先调用混合对象的钩子
 **
 */
Vue.mixin({
  /* 全局方法 */
  methods: {
    /* 跳转 */
    toUrl(url, val) {
      tools.router.push({ path: url, query: val });
    },

    toReplace(url, val) {
      tools.router.replace({ path: url, query: val });
    },

    /**
     * 跳转去后端页面
     * 需要loading所以抽出来封装成一个全局method
     */
    toBackendPage(url) {
      tools.alert.loading();
      // window.location.href = url;
      window.location.replace(url);
    }
  },

  /* 全局过滤 */
  filters: {
    /* 时间转换 */
    timeTran: function(value) {
      return parseInt(value) === 0 ? '-' : tools.date('Y-m-d H:i:s', value);
    },

    /* 自定时间格式转换 */
    setTimeTran: function(value, type) {
      return parseInt(value) === 0 ? '-' : tools.date(type, value);
    },

    /* 价格转换--保留两位小数 */
    toFixedPrice: function(value) {
      return value ? (parseInt(value) / 100).toFixed(2) : '0';
    },

    // 价格转换--保留两位小数
    priceToFixed(value) {
      return value ? parseFloat(value).toFixed(2) : '0.00';
    },

    /* 时间转换 */
    dayTimeTran: function(value) {
      let dayTime = new Date().getTime();
      let t = parseInt((dayTime - value) / 1000);

      if (t > 3600) {
        return parseInt(value) === 0 ? '-' : tools.date('Y-m-d H:i:s', value);
      } else if (t < 60) {
        return '刚刚';
      } else {
        return parseInt(t / 60) + '分钟前';
      }
    }
  }
});
