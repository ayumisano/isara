const question_ttl = document.querySelectorAll('.question_ttl');
for (var i = 0; i < question_ttl.length; i++) {
  question_ttl[i].addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  });
}
scrollTop('js-button', 500);

function scrollTop(elem, duration) {
  let target = document.getElementById(elem);
  target.addEventListener('click', function () {
    let currentY = window.pageYOffset;
    let step = duration / currentY > 1 ? 10 : 100;
    let timeStep = (duration / currentY) * step;
    let intervalID = setInterval(scrollUp, timeStep);

    function scrollUp() {
      currentY = window.pageYOffset;
      if (currentY === 0) {
        clearInterval(intervalID);
      } else {
        scrollBy(0, -step);
      }
    }
  });
}

const flowParentLink = document.querySelectorAll('.lessonFlow_link');

for (var i = 0; i < flowParentLink.length; i++) {
  flowParentLink[i].addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  });
}
