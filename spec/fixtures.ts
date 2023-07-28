const groupedCSSSingleClass = `invalid:x-[bg-blue-500,outline,shadow-md,shadow-red-500]`;
const groupedCssSingleClassOutput = String.raw`.invalid\:x-\[bg-blue-500\2c outline\2c shadow-md\2c shadow-red-500\]:invalid {
    --tw-bg-opacity: 1;
    background-color: rgb(59 130 246 / var(--tw-bg-opacity));
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-shadow-color: #ef4444;
    --tw-shadow: var(--tw-shadow-colored);
    outline-style: solid
}`;

const groupedCSSMultipleClasses = `mx-10 flex invalid:x-[bg-blue-500,outline,shadow-md,shadow-red-500] justify-center`;

const groupedCSSMultipleClassesOutput = String.raw`.mx-10 {
    margin-left: 2.5rem;
    margin-right: 2.5rem
}
.flex {
    display: flex
}
.justify-center {
    justify-content: center
}
.invalid\:x-\[bg-blue-500\2c outline\2c shadow-md\2c shadow-red-500\]:invalid {
    --tw-bg-opacity: 1;
    background-color: rgb(59 130 246 / var(--tw-bg-opacity));
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-shadow-color: #ef4444;
    --tw-shadow: var(--tw-shadow-colored);
    outline-style: solid
}`;

const multipleGroupClasses = `mx-10 flex invalid:x-[bg-pink-500,outline,shadow-md,shadow-green-500] justify-center focus:x-[shadow-sm,text-blue-300]`;
const multipleGroupClassesOutput = String.raw`.mx-10 {
    margin-left: 2.5rem;
    margin-right: 2.5rem
}
.flex {
    display: flex
}
.justify-center {
    justify-content: center
}
.invalid\:x-\[bg-pink-500\2c outline\2c shadow-md\2c shadow-green-500\]:invalid {
    --tw-bg-opacity: 1;
    background-color: rgb(236 72 153 / var(--tw-bg-opacity));
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-shadow-color: #22c55e;
    --tw-shadow: var(--tw-shadow-colored);
    outline-style: solid
}
.focus\:x-\[shadow-sm\2c text-blue-300\]:focus {
    --tw-text-opacity: 1;
    color: rgb(147 197 253 / var(--tw-text-opacity));
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`;

const customPrefixCSS = `invalid:customPrefix-[bg-blue-500,outline,shadow-md,shadow-red-500]`;
const customPrefixCSSOutput = String.raw`.invalid\:customPrefix-\[bg-blue-500\2c outline\2c shadow-md\2c shadow-red-500\]:invalid {
    --tw-bg-opacity: 1;
    background-color: rgb(59 130 246 / var(--tw-bg-opacity));
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-shadow-color: #ef4444;
    --tw-shadow: var(--tw-shadow-colored);
    outline-style: solid
}`;

export {
  groupedCSSSingleClass,
  groupedCssSingleClassOutput,
  groupedCSSMultipleClasses,
  groupedCSSMultipleClassesOutput,
  multipleGroupClasses,
  multipleGroupClassesOutput,
  customPrefixCSS,
  customPrefixCSSOutput,
};
