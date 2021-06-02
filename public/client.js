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
    return t.get('card','shared')
    .then(function(data) {
      console.log(data);
      return [{
        icon: 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
        text: data.progress + '%'
      },{
        icon: 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
        text: data.size
      }];  
    });
  },
  'card-detail-badges': function (t, opts) {
    return t.get('card','shared')
      .then(function (cardData) {

        return [
          {
            // its best to use static badges unless you need your badges
            // to refresh you can mix and match between static and dynamic
            title: "Size",
            text: cardData.size,
            color: null,
          },
          {
            // or for simpler use cases you can also provide a url
            // when the user clicks on the card detail badge they will
            // go to a new tab at that url
            title: "Pattern",
            text: cardData.patternName,
            url: cardData.patternLink,
            target: "Link to Pattern", // optional target for above url
          }, {
            // its best to use static badges unless you need your badges
            // to refresh you can mix and match between static and dynamic
            title: "Yarn Details",
            text: cardData.yarn + " " + cardData.weight + " in " + cardData.colour,
            color: null,
          },
        ];
      });
  },
});
