<!--  自定义输入框-->
<template>
	<div class="form">
		<input :value="formValue" @input="change" @blur="change" />
	</div>
</template>

<script>
//收集维护数据

import emitter from "@/mixins/emitter";
export default {
	name: "customInput",
	mixins: [emitter],
	props: {
		value: {
			type: String || Number,
			default: "",
		},
	},
	components: {},
	data() {
		return {
			formValue: this.value,
		};
	},
	methods: {
		change(e) {
			this.$emit("input", e.target.value);
			this.dispatchEvent("customFormItem", "validate");
		},
	},
};
</script>
<style scoped>
.error {
	color: red;
}
</style>
