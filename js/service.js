app.service('Marvel', function () {
  var Marvel = {};

  /* TODO: change when not running in development
   $http.get('data/legendary-heroes.json')
   .then(function(res){
   $scope.heroes = res.data;
   });*/

  Marvel.heroes = {};
  Marvel.heroes.available =
    [
      {
        "name": "Black Widow",
        "expansion": ""
      },
      {         
        "name": "Captain America",
        "expansion": ""
      },
      {
        "name": "Cyclops",
        "expansion": ""
      },
      {
        "name": "Deadpool",
        "expansion": ""
      },
      {
        "name": "Emma Frost",
        "expansion": ""
      },
      {
        "name": "Gambit",
        "expansion": ""
      },
      {
        "name": "Hawkeye",
        "expansion": ""
      },
      {
        "name": "Hulk",
        "expansion": ""
      },
      {
        "name": "Iron Man",
        "expansion": ""
      },
      {
        "name": "Nick Fury",
        "expansion": ""
      },
      {
        "name": "Rogue",
        "expansion": ""
      },
      {
        "name": "Spiderman",
        "expansion": ""
      },
      {
        "name": "Storm",
        "expansion": ""
      },
      {
        "name": "Thor",
        "expansion": ""
      },
      {
        "name": "Wolverine",
        "expansion": ""
      }
    ];
  Marvel.heroes.selected = [];
  Marvel.heroes.maxAllowed = 6;

  Marvel.masterminds = {};
  Marvel.masterminds.available =
    [
      {
        "name": "Dr. Doom",
        "expansion": ""
      },
      {
        "name": "Loki",
        "expansion": ""
      },
      {
        "name": "Magneto",
        "expansion": ""
      },
      {
        "name": "Red Skull",
        "expansion": ""
      }
    ];
  Marvel.masterminds.selected = [];
  Marvel.masterminds.maxAllowed = 1;

  Marvel.schemes = {};
  Marvel.schemes.available =
    [
      {
        "name": "The Legacy Virus",
        "expansion": ""
      },
      {
        "name": "Midtown Bank Robbery",
        "expansion": ""
      },
      {
        "name": "Negative Zone Prison Breakout",
        "expansion": ""
      },
      {
        "name": "Portals to the Dark Dimension",
        "expansion": ""
      },
      {
        "name": "Replace Earth's Leaders with Killbots",
        "expansion": ""
      },
      {
        "name": "Secret Invasion of the Skrull Shapeshifters",
        "expansion": ""
      },
      {
        "name": "Super Hero Civil War",
        "expansion": ""
      },
      {
        "name": "Unleash the Power of the Cosmic Cube",
        "expansion": ""
      }
    ];
  Marvel.schemes.selected = [];
  Marvel.schemes.maxAllowed = 1;

  Marvel.villains = {};
  Marvel.villains.available =
    [
      {
        "name": "Brotherhood",
        "expansion": ""
      },
      {
        "name": "Enemies of Asgard",
        "expansion": ""
      },
      {
        "name": "Hydra",
        "expansion": ""
      },
      {
        "name": "Masters of Evil",
        "expansion": ""
      },
      {
        "name": "Radiation",
        "expansion": ""
      },
      {
        "name": "Skrulls",
        "expansion": ""
      },
      {
        "name": "Spider Foes",
        "expansion": ""
      }
    ];
  Marvel.villains.selected = [];
  Marvel.villains.maxAllowed = 4;

  Marvel.henchmen = {};
  Marvel.henchmen.available =
    [
      {
        "name": "Doombot Legion",
        "expansion": ""
      },
      {
        "name": "Hand Ninjas",
        "expansion": ""
      },
      {
        "name": "Sentinels",
        "expansion": ""
      },
      {
        "name": "Savage Land Mutates",
        "expansion": ""
      }
    ];
  Marvel.henchmen.selected = [];
  Marvel.henchmen.maxAllowed = 2;

  return Marvel;
})

app.factory('Helper', function () {

  return {
    addSelected: function (item, available, selected, maxAllowed) {
      // cannot select more than n selectedItems
      if (selected.length >= maxAllowed) {
        return;
      }
      var index = available.indexOf(item);
      if (index > -1) {
        available.splice(index, 1);
        selected.push(item);
      }
    },

    removeSelected: function (item, available, selected) {
      var index = selected.indexOf(item);
      if (index > -1) {
        selected.splice(index, 1);
        available.push(item);
      }
    },

    addSelectedByIndex: function (index, available, selected, maxAllowed) {
      // cannot select more than n selectedItems
      if (selected.length >= maxAllowed) {
        return;
      }
      if (index > -1) {
        var item = available[index];
        selected.push(item);
        available.splice(index, 1);
      }
    },

    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    removeAll: function (Marvel) {
      this.removeAllSelected(Marvel.heroes);
      this.removeAllSelected(Marvel.masterminds);
      this.removeAllSelected(Marvel.schemes);
      this.removeAllSelected(Marvel.villains);
      this.removeAllSelected(Marvel.henchmen);
    },

    removeAllSelected: function (list) {
      for (var i = list.selected.length; i--; i > 0) {
        var item = list.selected[i];
        list.available.push(item);
        list.selected.splice(i, 1);
      }
    }
  }
})