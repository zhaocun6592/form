import Vue from "vue";
import App from "./App.vue";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import customForm from "@/custom/customForm.vue";
import customFormItem from "@/custom/customFormItem.vue";
import customInput from "@/custom/customInput.vue";
Vue.component("custom-form", customForm);
Vue.component("custom-form-item", customFormItem);
Vue.component("custom-input", customInput);
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
	render: (h) => h(App),
}).$mount("#app");
