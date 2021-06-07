/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

function checkData(details){
  if(typeof details === 'undefined')
    return "";
  else return details;
}

window.pattern.addEventListener('submit', function(event){
  event.preventDefault();
  t.set('card', 'shared', 'patternName', window.patternName.value);
  t.set('card', 'shared', 'patternLink', window.patternLink.value);
  t.set('card', 'shared', 'isRavLink', window.isRavLink.checked);
  return t.set('card', 'shared', 'size', window.setSize.value)
  .then(function(){
    t.closePopup();
  });
});

t.render(function(){
  return t.get('card', 'shared')
  .then(function(data){
    window.setSize.value = data.size;
    window.patternName.value = checkData(data.patternName);
    window.patternLink.value = checkData(data.patternLink);
    window.isRavLink.checked = data.isRavLink;
  })
  .then(function(){
    t.sizeTo('#size').done();
  });
});
