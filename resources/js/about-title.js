const text = document.getElementsByClassName('about__title');
const range = 16;

document.body.addEventListener('mousemove', updateShadow);

function updateShadow(event) {
  const x = Math.round(event.pageX * range / window.innerWidth) - range / 2;
  const y = Math.round(event.pageY * range / window.innerHeight) - range;
  gsap.to(text, {
    '--x': x,
    '--y': y,
  });
}