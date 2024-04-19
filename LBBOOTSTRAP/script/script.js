function smoothScroll(target) {
    var targetElement = document.getElementById(target);
    targetElement.scrollIntoView({ behavior: 'smooth' });
}