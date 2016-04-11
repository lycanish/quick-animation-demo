// make sure shits loaded.
if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}


function init() {

  // build out all the junk n stuff
  const mainJs = document.querySelector('.js');
  const mainCss = document.querySelector('.css');
  const amount = 100;
  for (var i = 0; i < amount; i++) {
    mainJs.appendChild(mainJs.querySelector('figure').cloneNode(true));
  }
  for (var i = 0; i < amount; i++) {
    mainCss.appendChild(mainCss.querySelector('figure').cloneNode(true));
  }

  // animations

  const durationIn = 0.2;
  const durationOut = 0.2;
  const jsEls = mainJs.querySelectorAll('figure');

  var rollIn = function(e) {
    TweenMax.to(e.target, .2, {
      "alpha": .5,
    })
  }
  var rollOut = function(e) {
    TweenMax.to(e.target, 2, {
      "alpha": 1,
    });
  }

  mainJs.addEventListener('mouseover', rollIn);
  mainJs.addEventListener('mouseout', rollOut);
}
