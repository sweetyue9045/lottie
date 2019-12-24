$(document).ready(function () {
    let openingAnimWindow = document.querySelector('#lottie');
  let openingAnimData = {
    container: openingAnimWindow,
    animType: 'svg',
    loop: '0',
    prerender: true,
    autoplay: false,
    path: './lottie.json'
  };
  // set bodymovin
  let openingAnim = bodymovin.loadAnimation(openingAnimData);
  $('#submit').click(function () {
    openingAnim.goToAndPlay(0);
    openingAnim.play();
  });
})