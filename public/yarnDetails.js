/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

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
    window.colour.value = data.colour;
    window.weight.value = data.weight;
    window.yarn.value = data.yarn;
  })
});
