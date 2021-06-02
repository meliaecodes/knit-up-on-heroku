/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

window.progress.addEventListener('input', function () {
  return t.set('card','shared','progress', window.progressEstimate.value)
});

t.render(function(){
  return t.get('card', 'shared', 'progress')
  .then(function(progress){
    window.progressEstimate.value = progress;
  })
});
