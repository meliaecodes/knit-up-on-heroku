/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

window.pattern.addEventListener('submit', function(event){
  event.preventDefault();
  t.set('card', 'shared', 'patternName', window.patternName.value);
  t.set('card', 'shared', 'patternLink', window.patternLink.value);
  return t.set('card', 'shared', 'size', window.setSize.value)
  .then(function(){
    t.closePopup();
  });
});

t.render(function(){
  return t.get('card', 'shared')
  .then(function(data){
    window.setSize.value = data.size;
    window.patternName.value = data.patternName;
    window.patternLink.value = data.patternLink;
  })
  .then(function(){
    t.sizeTo('#size').done();
  });
});
