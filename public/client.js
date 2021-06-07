/* global TrelloPowerUp */

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
      text: 'Pattern Details',
      callback: function(t) {
        return t.popup({
          title: "Pattern Details",
          url: './patternDetails.html',
        });
      }
    }, {
      icon: 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
      text: 'Yarn Details',
      callback: function(t) {
        return t.popup({
          title: "Yarn Details",
          url: './yarnDetails.html',
        });
      }
    }, {
      icon: 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
      text: 'Progress',
      callback: function(t) {
        return t.popup({
          title: "Progress",
          url: './progress.html',
        });
      }
    }];
  },
  'card-badges': function(t, options) {
    return t.list('name')
        .then(function(list){
          return t.get('card','shared')
              .then(function(data) {
                if(typeof data.progress === 'undefined'){
                  switch(list.name) {
                    case "Complete":
                      t.set('card','shared','progress', 100);
                      break
                    case "Finished":
                      t.set('card','shared','progress', 100);
                      break
                    case "Done":
                      t.set('card','shared','progress', 100);
                      break
                    default:
                      t.set('card','shared','progress', 0);
                  }
                }
                if(typeof data.size === 'undefined'){
                  t.set('card','shared','size', "NA")
                }
                return [{
                  icon: 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
                  text: data.progress + '%'
                },{
                  icon: 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
                  text: data.size
                }];
              });
        });
  },
  'card-detail-badges': function (t, opts) {
    return t.get('card','shared')
        .then(function (cardData) {
          var cardBadge = [{
            title: "Size",
            text: cardData.size,
            color: null,}];
          var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
          if(regexp.test(cardData.patternLink)){
            if(cardData.isRavLink){
                cardBadge.push({
                    title: "Pattern",
                    text: cardData.patternName + " [Ravelry]",
                    url: cardData.patternLink,
                    target: "Link to Pattern", // optional target for above url
                })
            } else {
                cardBadge.push({
                    title: "Pattern",
                    text: cardData.patternName,
                    url: cardData.patternLink,
                    target: "Link to Pattern", // optional target for above url
                })
            }
          } else {
            cardBadge.push({
                title: "Pattern",
                text: cardData.patternName,
            })
          };

          if (typeof cardData.yarn !== 'undefined'){
            cardBadge.push({title: "Yarn", text: cardData.yarn,})
          }

          if(typeof cardData.colour !== 'undefined') {
            cardBadge.push({title: "Colour", text: cardData.colour,})
          }

          if(typeof cardData.weight !== 'undefined') {
            cardBadge.push({title: "Weight", text: cardData.weight,})
          }
          return cardBadge;
        });
  },
});
