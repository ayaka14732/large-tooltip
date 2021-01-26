# large-tooltip

Create a selectable large tooltip on the web page

## Installation

In HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/large-tooltip@0.0.1/index.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/large-tooltip@0.0.1/index.min.css"/>
```

Or if you are using Node.js:

```sh
npm install --save large-tooltip
```

```javascript
import LargeTooltip from 'large-tooltip';
```

## Usage

```html
<p id="hoverMe">Hover me!</p>
```

```javascript
const largeTooltip = LargeTooltip.init();
const hoverMe = document.getElementById('hoverMe');
const p = document.createElement('p');
p.innerText = 'This is the text in the tooltip!';
largeTooltip.addTooltip(p, hoverMe); // add `p` as a tooltip of `hoverMe`
```
