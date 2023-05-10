<template>
	<div id="app">
		<ele-form></ele-form>
		<el-card>
			<myForm></myForm>
		</el-card>
	</div>
</template>

<script>
import eleForm from "./components/eleForm.vue";
import myForm from "./views/myForm";
export default {
	name: "App",
	components: {
		eleForm,
		myForm,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
