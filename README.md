# tailwindcss-plugin-width-height

Square `.wh-*` size utility classes for Tailwind css. For when you want a DRY way to describe a square-sized element (profile image, close button, div container, etc.).

For Tailwind v1.0:
```bash
npm install --save-dev @ky-is/tailwindcss-plugin-width-height@next
```

For Tailwind v0.x:
```bash
npm install --save-dev @ky-is/tailwindcss-plugin-width-height@0.1.1
```

## Example

A circular avatar:
```html
<img class="wh-16 rounded-full" />
```
Is equivalent to:
```html
<img class="w-16 h-16 rounded-full" />
```

## Config

In your tailwind js configuration file:
```js
  plugins: [
    require('@ky-is/tailwindcss-plugin-width-height')({ variants: ['responsive'] }),
  ],
```

## Options

- `variants` (string[], optional): `responsive`, `hover`, `focus`, `active`, `group-hover`
- `sizes` (object, optional): Custom sizes to generate (in the same format as `width` and `height` from your config file). If you don't provide this value, it defaults to the intersection of the `width` and `height` values from your config.
