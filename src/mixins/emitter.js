export default {
	methods: {
		/**
		 * 找到目标元素 触发事件
		 * @param {componentName} 组件名
		 * @param {eventName} 触发事件名
		 * @param {params} 传递的参数
		 */
		dispatchEvent(componentName, eventName, params) {
			let parent = this.$parent || this.$root;
			let name = parent.$options.name;
			while (parent && name != componentName) {
				parent = parent.$parent;
				if (parent) name = parent.$options.name;
			}
			parent.$emit(eventName, params);
		},
	},
};
