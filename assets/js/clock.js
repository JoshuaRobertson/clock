const secHand  = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date();
  const startPos = 90;

  const sec = now.getSeconds();
  const secDegrees = ((sec / 60) * 360) + startPos;
  secHand.style.transform = `rotate(${secDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((sec / 60) * 6) + startPos;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + startPos;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if(secDegrees === startPos) {
    allHands.forEach(hand => hand.style.transition = 'none')
  } else {
    allHands.forEach(hand => hand.style.transition = '')
  }
}

setInterval(setDate, 1000);

setDate();
