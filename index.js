function scuberGreetingForFeet(dist){
  // Write your code here!
  if (dist <= 400) {
    return 'This one is on me!';
  } else if (dist <= 2000) {
    return 'That will be twenty bucks.';
  } else if (dist <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!
  let isNYC;
  cityName == 'NYC'?(isNYC = true):(isNYC = false);
  if (isNYC){
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch(tip){
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default:
      message = 'Bye.';
      break;
  }
  return message;
}