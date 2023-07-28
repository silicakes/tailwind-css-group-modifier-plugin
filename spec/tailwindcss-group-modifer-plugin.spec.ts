import { expect, test } from "vitest";
import groupPlugin, { PluginOptions } from "../src/";
import tailwindcss from "tailwindcss";
import postcss from "postcss";
import {
  groupedCSSMultipleClasses,
  groupedCSSSingleClass,
  groupedCssSingleClassOutput,
  groupedCSSMultipleClassesOutput,
  multipleGroupClasses,
  multipleGroupClassesOutput,
  customPrefixCSS,
  customPrefixCSSOutput,
} from "./fixtures";

const generateCSS = (rawCSS: string, options?: PluginOptions) =>
  postcss([
    tailwindcss({
      content: [{ raw: rawCSS }],
      plugins: [groupPlugin(options)],
      corePlugins: { preflight: false },
    }),
  ])
    .process(["@tailwind components;", "@tailwind utilities"].join("\n"), {
      from: void 0,
    })
    .then(({ css }) => css);

test("Should generate a unique class for the style", () => {
  generateCSS(groupedCSSSingleClass).then((css) =>
    expect(css).toEqual(groupedCssSingleClassOutput)
  );
});

test("Should include additional utility classes if present", () => {
  generateCSS(groupedCSSMultipleClasses).then((css) =>
    expect(css).toEqual(groupedCSSMultipleClassesOutput)
  );
});

test("Should support multiple grouped classes", () => {
  generateCSS(multipleGroupClasses).then((css) => expect(css).toEqual(multipleGroupClassesOutput));
});

test("Should support custom Prefix", () => {
  generateCSS(customPrefixCSS, { prefix: "customPrefix" }).then((css) =>
    expect(css).toEqual(customPrefixCSSOutput)
  );
});
