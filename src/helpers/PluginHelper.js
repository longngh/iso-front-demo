export default {
  create(plugins) {
    return {
      install(Vue) {
        Object.entries(plugins).forEach(([pluginName, plugin]) => {
          Vue.prototype[pluginName] = plugin;
        });
      },
    };
  },
};
