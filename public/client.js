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

                        var cardBadge = []

                        if(typeof data.progress !== 'undefined'){
                            cardBadge.push({
                                icon: 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
                                text: data.progress + '%'
                            })
                        }
                        if(typeof data.size !== 'undefined'){
                            cardBadge.push({
                                icon: 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
                                text: data.size
                            })
                        }
                        return cardBadge;
                    });
            });
    },
  'card-detail-badges': function (t, opts) {
    return t.get('card','shared')
        .then(function (cardData) {
          var cardDetailBadge = [{
            title: "Size",
            text: cardData.size,
            color: null,}];
          var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
          if(regexp.test(cardData.patternLink)){
            if(cardData.isRavLink){
                cardDetailBadge.push({
                    title: "Pattern",
                    text: cardData.patternName + " [Ravelry]",
                    url: cardData.patternLink,
                    target: "Link to Pattern", // optional target for above url
                })
            } else {
                cardDetailBadge.push({
                    title: "Pattern",
                    text: cardData.patternName,
                    url: cardData.patternLink,
                    target: "Link to Pattern", // optional target for above url
                })
            }
          } else {
              cardDetailBadge.push({
                title: "Pattern",
                text: cardData.patternName,
            })
          }

          if (typeof cardData.yarn !== 'undefined'){
              cardDetailBadge.push({title: "Yarn", text: cardData.yarn,})
          }

          if(typeof cardData.colour !== 'undefined') {
              cardDetailBadge.push({title: "Colour", text: cardData.colour,})
          }

          if(typeof cardData.weight !== 'undefined') {
              cardDetailBadge.push({title: "Weight", text: cardData.weight,})
          }
          return cardDetailBadge;
        });
  },
});
