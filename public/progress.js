/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

window.progress.addEventListener('input', function () {
  window.progressValue.innerHTML = window.progressEstimate.value + "%";
  return t.set('card','shared','progress', window.progressEstimate.value)
});

window.otherData.addEventListener('submit', function(event) {
  event.preventDefault();
  t.set('card','shared','size', window.size.value);
  return t.set('card','shared','amtYarn', window.amtYarn.value)
      .then(function(){
        t.closePopup();
      });
});

t.render(function(){
  return t.get('card', 'shared')
      .then(function(data){
        window.progressEstimate.value = data.progress;
        window.size.value = checkData(data.size);
        window.amtYarn.value = checkData(data.amtYarn);
        if(typeof data.progress !== 'undefined'){
          window.progressValue.innerHTML = data.progress + "%";
        }
      })
});
