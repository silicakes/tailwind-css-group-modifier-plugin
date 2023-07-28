import plugin from "tailwindcss/plugin";

export interface PluginOptions {
  prefix?: string;
}

const defaultOptions: PluginOptions = {
  prefix: "x",
};
const groupModifiers = plugin.withOptions<PluginOptions | void>((options = {}) => {
  const mergedOptions = { ...defaultOptions, ...options };
  return ({ matchUtilities }) => {
    matchUtilities({
      [mergedOptions.prefix]: (value) => ({
        [`@apply ${value.replaceAll(",", " ")}`]: {},
      }),
    });
  };
});

export default groupModifiers;
