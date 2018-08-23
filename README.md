# tailwindcss-plugin-width-height

Square `.wh-*` size utility classes for Tailwind css.

```bash
npm install --save-dev @ky-is/tailwindcss-plugin-width-height
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
