const fadeInElements = document.querySelectorAll('.fadein, .slidefromleft, .slidefromright, .slidefrombottom');
const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const scrollOffset = 20;
  return elementTop <= windowHeight - scrollOffset;
};
const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};
const handleScrollAnimation = () => {
  fadeInElements.forEach((el) => {
    if (elementInView(el)) {
      displayScrollElement(el);
    }
  });
};
window.addEventListener('scroll', () => {
  handleScrollAnimation();
});
