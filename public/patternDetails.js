/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

function checkData(details){
  if(typeof details === 'undefined')
    return "";
  else return details;
}

window.pattern.addEventListener('submit', function(event){
  event.preventDefault();
  t.set('card', 'shared', 'patternLink', window.patternLink.value);
  t.set('card', 'shared', 'isRavLink', window.isRavLink.checked);
  return t.set('card', 'shared', 'patternName', window.patternName.value)
      .then(function(){
        t.closePopup();
      });
});

t.render(function(){
  return t.get('card', 'shared')
      .then(function(data){
        window.patternName.value = checkData(data.patternName);
        window.patternLink.value = checkData(data.patternLink);
        window.isRavLink.checked = data.isRavLink;
      })
});
