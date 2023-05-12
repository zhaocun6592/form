<!--  -->
<template>
  <div class="myform">
    <el-card class="box-card">
      <h3>自定义表单</h3>
      <custom-form :model="formModel" :rules="rules" ref="ruleForm">
        <custom-form-item label="用户名" prop="name">
          <custom-input v-model="formModel.name" />
        </custom-form-item>

        <custom-form-item label="密码" prop="password">
          <custom-input v-model="formModel.password" />
        </custom-form-item>
        <custom-form-item label="昵称">
          <custom-input v-model="formModel.nickname" />
        </custom-form-item>
      </custom-form>
      <button @click="submit">提交</button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formModel: {
        name: "",
        password: "",
        nickname: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }],
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log("可以提交");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  created() {},
  mounted() {},
  updated() {},
  destroyed() {},
};
</script>
