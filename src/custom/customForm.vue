<!-- 自定义表单 -->
<template>
  <div class="form">
    <slot></slot>
  </div>
</template>

<script>
//指定数据接收model 和规则rules
export default {
  name: "customForm",
  props: {
    model: {
      type: Object,
      default: () => {},
    },
    rules: {
      type: Object,
      default: () => {},
    },
  },
  provide() {
    return {
      form: this,
    };
  },
  data() {
    return {
      files: [],
    };
  },
  created() {
    this.$on("formValidates", (params) => {
      if (params) this.files.push(params);
    });
  },
  methods: {
    validate(callback) {
      if (this.files.length === 0) {
        callback(true);
        return;
      }
      let promises = [];
      this.files.forEach((item) => {
        promises.push(item.validate());
      });
      Promise.all(promises)
        .then(() => {
          console.log("校验成功");
          callback(true);
        })
        .catch(() => {
          console.log("校验失败");
          callback(false);
        });
    },
  },
};
</script>
