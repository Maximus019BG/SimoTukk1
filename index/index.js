function changeColor() {
  var x = document.getElementById("gfg");
  var y = document.getElementById("gfg1");
  var z = document.getElementById("gfg2");
  var u = document.getElementById("gfg3");
  var i = document.getElementById("gfg4");
  var o = document.getElementById("gfg5");

  x.style.color = "black";
  y.style.color = "black";
  z.style.color = "black";
  u.style.color = "black";
  i.style.color = "black";
  o.style.color = "black";

}





window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
  
  changeColor();


};



////////////////////////

const AnimateOnScroll = function ({ offset } = { offset: 10 }) {

  const windowTop = (offset * window.innerHeight) / 100;
  const windowBottom = window.innerHeight - windowTop;
  const windowLeft = 0;
  const windowRight = window.innerWidth;

  this.start = (element) => {
    window.requestAnimationFrame(() => {
     
      element.style.animationDelay = element.dataset.animationDelay;
      element.style.animationDuration = element.dataset.animationDuration;

     
      element.classList.add(element.dataset.animation);

     
      element.dataset.animated = "true";
    });
  };

  this.inViewport = (element) => {
 
    const elementRect = element.getBoundingClientRect();
    const elementTop =
      elementRect.top + parseInt(element.dataset.animationOffset) ||
      elementRect.top;
    const elementBottom =
      elementRect.bottom - parseInt(element.dataset.animationOffset) ||
      elementRect.bottom;
    const elementLeft = elementRect.left;
    const elementRight = elementRect.right;


    return (
      elementTop <= windowBottom &&
      elementBottom >= windowTop &&
      elementLeft <= windowRight &&
      elementRight >= windowLeft
    );
  };


  this.verifyElementsInViewport = (els = elements) => {
    for (let i = 0, len = els.length; i < len; i++) {
     
      if (els[i].dataset.animated) continue;

      this.inViewport(els[i]) && this.start(els[i]);
    }
  };

  
  this.getElements = () =>
    document.querySelectorAll("[data-animation]:not([data-animated])");

 
  this.update = () => {
    elements = this.getElements();
    elements && this.verifyElementsInViewport(elements);
  };

 
  window.addEventListener("load", this.update, false);
  window.addEventListener(
    "scroll",
    () => this.verifyElementsInViewport(elements),
    { passive: true }
  );
  window.addEventListener(
    "resize",
    () => this.verifyElementsInViewport(elements),
    { passive: true }
  );
};


const options = {
  offset: 15 
};

const animation = new AnimateOnScroll(options);
/////////////


