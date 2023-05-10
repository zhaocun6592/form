<!--  自定义表单项-->
<template>
	<div class="form">
		<label>{{ label }}</label>
		<slot></slot>
		<div class="error" v-if="errorMsg">{{ errorMsg }}</div>
	</div>
</template>

<script>
//执行校验，显示错误信息
import Schema from "async-validator";
import emitter from "@/mixins/emitter";
export default {
	name: "customFormItem",
	mixins: [emitter],
	props: {
		prop: {
			type: String,
			default: "",
		},
		label: {
			type: String,
			default: "",
		},
	},
	inject: ["form"],
	data() {
		return {
			errorMsg: "",
		};
	},
	mounted() {
		this.$on("validate", () => {
			this.validate();
		});
		this.dispatchEvent("customForm", "formValidates", this);
	},
	computed: {},
	watch: {},
	methods: {
		validate() {
			//获取校验规则
			const rules = this.form.rules[this.prop];
			//获取当前项的值
			const currentVal = this.form.model[this.prop];
			//创建检验器
			const schema = new Schema({
				[this.prop]: rules,
			});
			//开始校验
			return schema.validate(
				{
					[this.prop]: currentVal,
				},
				(error) => {
					this.errorMsg = error ? error[0].message : "";
				}
			);
		},
	},
};
</script>
<style scoped>
.error {
	color: red;
}
</style>
