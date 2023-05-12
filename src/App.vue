<template>
  <div id="app">
    <ele-form></ele-form>
    <myForm></myForm>
  </div>
</template>

<script>
import eleForm from "./views/eleForm.vue";
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
  display: flex;
  justify-content: center;
}
#app > div {
  flex: 1;
  margin: 0 50px;
}
</style>
