# large-tooltip [![](https://badge.fury.io/js/large-tooltip.svg)](https://www.npmjs.com/package/large-tooltip) [![](https://data.jsdelivr.com/v1/package/npm/large-tooltip/badge)](https://www.jsdelivr.com/package/npm/large-tooltip) [![](https://github.com/ayaka14732/large-tooltip/workflows/Package/badge.svg)](https://github.com/ayaka14732/large-tooltip/actions?query=workflow%3APackage)

Create a selectable large tooltip on the web page

## Installation

In HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/large-tooltip@0.0.3/index.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/large-tooltip@0.0.3/index.min.css" />
```

Or if you are using Node.js:

```sh
npm install --save large-tooltip
```

```javascript
import LargeTooltip from "large-tooltip";
```

## Usage

```html
<p id="hoverMe">Hover me!</p>
```

```javascript
const largeTooltip = LargeTooltip.init();
const hoverMe = document.getElementById("hoverMe");
const p = document.createElement("p");
p.innerText = "This is the text in the tooltip!";
largeTooltip.addTooltip(p, hoverMe); // add `p` as a tooltip of `hoverMe`
```
