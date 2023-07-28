# tailwindcss-group-modifier-plugin

A plugin for Tailwind CSS v3.0+ that allows the grouping of various modifiers:

*From this:*
```css
<input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
```

*To this:*
```css
<input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
rounded-md text-sm shadow-sm placeholder-slate-400
      focus:x-[outline-none border-sky-500 ring-1 ring-sky-500]
      disabled:x-[bg-slate-50 text-slate-500 border-slate-200 shadow-none]
      invalid:x-[border-pink-500 text-pink-600]
      focus:invalid:-x[border-pink-500 ring-pink-500]
    "/>
```

## Installation

<details>
  <summary>NPM</summary>
    `$ npm i tailwind-css-group-modifier-plugin`
</details>

<details>
  <summary>Yarn</summary>
    $ `yarn add tailwind-css-group-modifier-plugin`
</details>

<details>
  <summary>PNPM</summary>
    `$ pnpm i tailwind-css-group-modifier-plugin`
</details>

## Usage
```ts
// tailwind.config.ts/js
import groupModifierPlugin from "tailwindcss-group-modifier-plugin";
export default {
 // ...
  plugins: [groupModifierPlugin()],
};
```

## Options
### prefix 
type: string default: x
Allows changing the prefix from `x` to anything else.

default syntax:

```html
<input type="text" required class="invalid:x-[bg-blue-500,outline,shadow-md,shadow-red-500] focus:x-[text-blue-500]" />

```

with a different prefix:

```ts
export default {
 // ...
  plugins: [groupModifierPlugin({prefix: "myPrefix"})],
};
```

```html
<input type="text" required class="invalid:myPrefix-[bg-blue-500,outline,shadow-md,shadow-red-500] focus:myPrefix-[text-blue-500]" />

```

## How does it work?
The plugin converts the grouped syntax into a single class containing the grouped classes styles within it:

*This:*
```html
<input type="text" required class="invalid:x-[bg-blue-500,outline,shadow-md,shadow-red-500] focus:x-[text-blue-500]" />
```

*Generates this:*
```css

.invalid\:x-\[bg-blue-500\2c outline\2c shadow-md\2c shadow-red-500\]:invalid{
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  --tw-shadow-color: #ef4444;
  --tw-shadow: var(--tw-shadow-colored);
  outline-style: solid
}

.focus\:x-\[text-blue-500\]:focus{
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity))
}
```

## Constraints
* Please avoid using whitespaces between the grouped commas as spaces are token separators in css so `x-[a, b]` will be considered two different classes, i.e `x-[a,` and `b]`
* Avoid using `-` in your custom prefix name as `-` is used as a separator between a value and its data
* Using this plugin will add additional classes to your file.

## Credits

A big thanks goes to [@wongjn](https://github.com/wongjn) for suggesting a solution for this problem here: https://github.com/tailwindlabs/tailwindcss/discussions/11701#discussioncomment-6569866

*Prior art can be found here*

[My original issue for this thing](https://github.com/tailwindlabs/tailwindcss/discussions/11701#discussioncomment-6569866)

[A Twitter thread the creator of Tailwind, Adam Wathan](https://twitter.com/adamwathan/status/1461519820411789314)

[A discussion around natively supporting it](https://github.com/tailwindlabs/tailwindcss/discussions/8337#discussioncomment-4032611)
