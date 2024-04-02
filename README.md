<p align="center">
<a href="https://digitalservice.jabarprov.go.id/">
  <img src="https://raw.githubusercontent.com/jabardigitalservice/jds-color-system/main/logo.png" alt="Jabar Digital Service" width="200">
</a>
<br>
<br>
Jabar Digital Service Color System
<br>
<br>
</p>

## ✨ Introduction

Add Jabar Design System's Color Tokens to your Tailwind CSS config file. You can choose to extend, or override Tailwind CSS default colors. No more manually _✨copy and paste✨_ color from Figma to your code.

## 🦄 Available Colors

| Color     | from Shade | to Shade |
| --------- | ---------- | -------- |
| yellow    | 50         | 900      |
| green     | 50         | 900      |
| blue      | 50         | 900      |
| pink      | 50         | 900      |
| red       | 50         | 900      |
| purple    | 50         | 900      |
| gray      | 50         | 900      |
| blue-gray | 50         | 900      |

**[Figma - JDS Color System](<https://www.figma.com/file/ekzixBpEUM1sVc0Pq2Pcp2/JDS---Color-System-(Community)-(Community)?type=design&node-id=1%3A2&mode=design&t=IuxJe77hKMrNczdx-1>)**

## 🚀 How to Use

### Installation

```bash
npm install jds-color-system
```

### Extends Tailwind CSS Color

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */

import JDSColorSystem from 'jds-color-system'

export default {
  // ...your default config options
  theme: {
    extend: {
      colors: {
        ...JDSColorSystem()
      }
    }
  }
}
```

JDS Color System will be available from shade 50 to shade 900. You can use them like this `jds-{color}-{shade}`

```html
<p class="text-jds-green-50">JDS Color System</p>
<!-- ... -->
<p class="text-jds-green-900">JDS Color System</p>

<div class="bg-jds-blue-50" />
<!-- ... -->
<div class="bg-jds-blue-900" />

<div class="border border-jds-red-50" />
<!-- ... -->
<div class="border border-jds-red-900" />
```

### Override Tailwind CSS Color

If you want to override Tailwind CSS colors instead of extending them, you can pass `override` option to the `JDSColorSystem` function.

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */

import JDSColorSystem from 'jds-color-system'

export default {
  // ...your default config options
  theme: {
    extend: {
      colors: {
        ...JDSColorSystem({ override: true })
      }
    }
  }
}
```

Now the default Tailwind CSS colors should be override by JDS Color system

```html
<p class="text-green-50">JDS Color System</p>
<!-- ... -->
<p class="text-green-900">JDS Color System</p>

<div class="bg-blue-50" />
<!-- ... -->
<div class="bg-blue-900" />

<div class="border border-red-50" />
<!-- ... -->
<div class="border border-red-900" />
```

## 📄 License

[MIT License](https://github.com/jabardigitalservice/jds-color-system/blob/main/LICENSE) © 2024-PRESENT [Jabar Digital Service](https://github.com/jabardigitalservice)
