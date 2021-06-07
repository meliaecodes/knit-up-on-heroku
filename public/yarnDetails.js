/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

function checkData(details){
  if(typeof details === 'undefined')
    return "";
  else return details;
}

window.yarnDetails.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(window.yarn.value);
  t.set('card','shared','colour', window.colour.value);
  t.set('card','shared','weight', window.weight.value);
  return t.set('card','shared','yarn', window.yarn.value)
  .then(function(){
    t.closePopup();
  });
});

t.render(function(){
  return t.get('card', 'shared')
  .then(function(data){
    window.colour.value = checkData(data.colour);
    window.weight.value = checkData(data.weight);
    window.yarn.value = checkData(data.yarn);
  })
});
