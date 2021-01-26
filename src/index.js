// https://stackoverflow.com/a/1038781
function getPageWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

export function init() {
  const divOuter = document.createElement('div');
  divOuter.classList.add('large-tooltip-outer');
  const divInner = document.createElement('div');
  divInner.classList.add('large-tooltip-inner');
  divOuter.appendChild(divInner);
  divInner.style.visibility = 'hidden';
  document.body.appendChild(divOuter);

  document.addEventListener('click', () => {
    divInner.style.visibility = 'hidden';
  }, false);

  // do not hide `divInner` if clicked on `divInner`
  divInner.addEventListener('click', (event) => {
    event.stopPropagation();
  }, false);

  return {
    addTooltip: (contentNode, relativeToNode) => {
      relativeToNode.addEventListener('mouseover', () => {
        const relativeToNodeBox = relativeToNode.getBoundingClientRect();
        const relativeToNodeTop = relativeToNodeBox.top + window.pageYOffset;
        const relativeToNodeLeft = relativeToNodeBox.left + window.pageXOffset;

        // do not hide `divInner` if clicked on `relativeToNode`
        relativeToNode.addEventListener('click', (event) => {
          event.stopPropagation();
        }, false);

        divInner.innerHTML = ''; // clear original contents
        divInner.appendChild(contentNode);

        const divInnerBox = divInner.getBoundingClientRect();
        const divInnerHeight = divInnerBox.height;
        const divInnerWidth = divInnerBox.width;

        const targetTop = relativeToNodeTop - divInnerHeight - 4; // elevate 4px

        let targetLeft = relativeToNodeLeft - (divInnerWidth / 2); // align center by default
        const oneEmSize = parseFloat(getComputedStyle(document.body).fontSize);
        // the distance to left margin of the page should be 1em or greater
        const miniumLeft = oneEmSize;
        // if left overflow, align left
        targetLeft = targetLeft < miniumLeft ? miniumLeft : targetLeft;
        // the distance to right margin of the page should be 1em or greater
        const maximumRight = getPageWidth() - oneEmSize - divInnerWidth;
        // if right overflow, align right
        targetLeft = targetLeft > maximumRight ? maximumRight : targetLeft;

        divInner.style.top = targetTop + 'px';
        divInner.style.left = targetLeft + 'px';

        divInner.style.visibility = 'visible';
      }, false);
    },
  };
}
