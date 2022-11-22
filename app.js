'use strict';

const btns = document.querySelectorAll('.btn');
let descriptions = document.querySelectorAll('.description');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const desc = e.currentTarget.parentElement.parentElement.children[1];

    descriptions.forEach(function (description) {
      if (description !== desc) {
        description.classList.remove('visible');
      }
    });

    desc.classList.toggle('visible'); // console.log(e.currentTarget.parentElement.parentElement.children[1]);
  });
});
