app.service('Marvel', function () {
  var Marvel = {};

  /* TODO: change when not running in development
   $http.get('data/legendary-heroes.json')
   .then(function(res){
   $scope.heroes = res.data;
   });*/

  Marvel.playerCount = {};
  Marvel.playerCount.options = [2,3,4,5];
  Marvel.playerCount.selected = 4;

  Marvel.expansions = {};
  Marvel.expansions.darkcity = {
    "name": "Dark City",
    "available": false
  };

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
      },
      {
        "name": "Angel",
        "expansion": "Dark City"
      },
      {
        "name": "Bishop",
        "expansion": "Dark City"
      },
      {
        "name": "Blade",
        "expansion": "Dark City"
      },
      {
        "name": "Cable",
        "expansion": "Dark City"
      },
      {
        "name": "Colossus",
        "expansion": "Dark City"
      },
      {
        "name": "Daredevil",
        "expansion": "Dark City"
      },
      {
        "name": "Domino",
        "expansion": "Dark City"
      },
      {
        "name": "Elektra",
        "expansion": "Dark City"
      },
      {
        "name": "Forge",
        "expansion": "Dark City"
      },
      {
        "name": "Ghost Rider",
        "expansion": "Dark City"
      },
      {
        "name": "Iceman",
        "expansion": "Dark City"
      },
      {
        "name": "Iron Fist",
        "expansion": "Dark City"
      },
      {
        "name": "Jean Grey",
        "expansion": "Dark City"
      },
      {
        "name": "Nightcrawler",
        "expansion": "Dark City"
      },
      {
        "name": "Professor X",
        "expansion": "Dark City"
      },
      {
        "name": "The Punisher",
        "expansion": "Dark City"
      },
      {
        "name": "Wolverine",
        "expansion": "Dark City"
      }
    ];
  Marvel.heroes.selected = [];
  Marvel.heroes.maxAllowed = 5;

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
      },
      {
        "name": "Apocalypse",
        "expansion": "Dark City"
      },
      {
        "name": "Kingpin",
        "expansion": "Dark City"
      },
      {
        "name": "Mephisto",
        "expansion": "Dark City"
      },
      {
        "name": "Mr. Sinister",
        "expansion": "Dark City"
      },
      {
        "name": "Stryfe",
        "expansion": "Dark City"
      }
    ];
  Marvel.masterminds.selected = [];
  Marvel.masterminds.maxAllowed = 1;

  Marvel.schemes = {};
  Marvel.schemes.available =
    [
      {
        "name": "The Legacy Virus",
        "expansion": "",
        "setup": "8 Twists. Wound stack holds 6 Wounds per player.",
        "specialRules": "",
        "twist": "Each player reveals a TECH Hero or gains a Wound.",
        "evilWins": "If the Wound stack runs out."
      },
      {
        "name": "Midtown Bank Robbery",
        "expansion": "",
        "setup": "8 Twists. 12 total Bystanders in the Villain Deck.",
        "specialRules": "Each Villain gets +1 DMG for each Bystander it has.",
        "twist": "Any Villain in the Bank captures 2 Bystanders. Then play the top card of the Villain Deck.",
        "evilWins": "When 8 Bystanders are carried away by escaping Villains."
      },
      {
        "name": "Negative Zone Prison Breakout",
        "expansion": "",
        "setup": "8 Twists. Add an extra henchman group to the Villain Deck.",
        "specialRules": "",
        "twist": "Play the top 2 cards of the Villain Deck.",
        "evilWins": "If 12 Villains escape."
      },
      {
        "name": "Portals to the Dark Dimension",
        "expansion": "",
        "setup": "7 Twists. Each Twist is a Dark Portal.",
        "specialRules": "",
        "twist": "Twist 1: Put the Dark Portal above the Mastermind. The Mastermind gets +1 DMG. Twists 2-6: Put the Dark Portal in the leftmost city space that doesn't yet have a Dark Portal. Villains in that city space get +1 DMG.",
        "evilWins": "Twist 7 is played."
      },
      {
        "name": "Replace Earth's Leaders with Killbots",
        "expansion": "",
        "setup": "5 Twists. 3 additional Twists next to this Scheme. 18 total Bystanders in the Villain Deck.",
        "specialRules": "Bystanders in the Villain Deck count as Killbot Villains with DMG equal to the number of Twists next to this Scheme.",
        "twist": "Put the Twist next to this Scheme.",
        "evilWins": "If 5 'Killbots' escape."
      },
      {
        "name": "Secret Invasion of the Skrull Shapeshifters",
        "expansion": "",
        "setup": "8 Twists. 6 Heroes. Skrull Villain Group required. Shuffle 12 random Heroes from the Hero Deck into the Villain Deck.",
        "specialRules": "Heroes in the Villain Deck count as Skrull Villains with DMG equal to the Hero's COST+2. If you defeat that Hero, you gain it.",
        "twist": "The highest cost Hero from the HQ moves into the Sewers as a Skrull Villain, as above.",
        "evilWins": "If 6 Heroes get into the Escaped Villains pile."
      },
      {
        "name": "Super Hero Civil War",
        "expansion": "",
        "setup": "For 2-3 players, use 8 Twists. For 4-5 players, use 5 Twists. If only 2 players, use only 4 Heroes in the Hero Deck.",
        "specialRules": "",
        "twist": "KO all the Heroes in the HQ.",
        "evilWins": "If the Hero Deck runs out."
      },
      {
        "name": "Unleash the Power of the Cosmic Cube",
        "expansion": "",
        "setup": "8 Twists.",
        "specialRules": "",
        "twist": "Put the Twist next to this Scheme. Twists 5-6: Each player gains a Wound. Twist 7: Each player gains 3 Wounds.",
        "evilWins": "Twist 8 is played."
      },
      {
        "name": "Capture Baby Hope",
        "expansion": "Dark City",
        "setup": "",
        "specialRules": "",
        "twist": "",
        "evilWins": ""
      },
      {
        "name": "Detonate the Helicarrier",
        "expansion": "Dark City",
        "setup": "",
        "specialRules": "",
        "twist": "",
        "evilWins": ""
      },
      {
        "name": "Massive Earthquake Generator",
        "expansion": "Dark City",
        "setup": "",
        "specialRules": "",
        "twist": "",
        "evilWins": ""
      },
      {
        "name": "Organized Crimewave",
        "expansion": "Dark City",
        "setup": "",
        "specialRules": "",
        "twist": "",
        "evilWins": ""
      },
      {
        "name": "Save Humanity",
        "expansion": "Dark City",
        "setup": "",
        "specialRules": "",
        "twist": "",
        "evilWins": ""
      },
      {
        "name": "Steal the Weaponized Plutonium",
        "expansion": "Dark City",
        "setup": "",
        "specialRules": "",
        "twist": "",
        "evilWins": ""
      },
      {
        "name": "Transform Citizens into Demons",
        "expansion": "Dark City",
        "setup": "",
        "specialRules": "",
        "twist": "",
        "evilWins": ""
      },
      {
        "name": "X-Cutioner's Song",
        "expansion": "Dark City",
        "setup": "",
        "specialRules": "",
        "twist": "",
        "evilWins": ""
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
      },
      {
        "name": "Emissaries of Evil",
        "expansion": "Dark City"
      },
      {
        "name": "Four Horsemen",
        "expansion": "Dark City"
      },
      {
        "name": "Marauders",
        "expansion": "Dark City"
      },
      {
        "name": "MLF",
        "expansion": "Dark City"
      },
      {
        "name": "Streets of New York",
        "expansion": "Dark City"
      },
      {
        "name": "Underworld",
        "expansion": "Dark City"
      }
    ];
  Marvel.villains.selected = [];
  Marvel.villains.maxAllowed = 3;

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
      },
      {
        "name": "Maggia Goons",
        "expansion": "Dark City"
      },
      {
        "name": "Phalanx",
        "expansion": "Dark City"
      }
    ];
  Marvel.henchmen.selected = [];
  Marvel.henchmen.maxAllowed = 2;

  Marvel.bystanders = {};
  Marvel.bystanders.maxAllowed = 8;

  return Marvel;
});

app.factory('Helper', function () {

  return {
    addSelected: function (item, list) {
      // cannot select more than n selectedItems
      if (list.selected.length >= list.maxAllowed) {
        return;
      }
      var index = list.available.indexOf(item);
      if (index > -1) {
        list.available.splice(index, 1);
        list.selected.push(item);
      }
    },

    removeSelected: function (item, list) {
      var index = list.selected.indexOf(item);
      if (index > -1) {
        list.selected.splice(index, 1);
        list.available.push(item);
      }
    },

    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    removeAll: function (Marvel) {
      for (var list in Marvel) {
        if (Marvel.hasOwnProperty(list)) {
          removeAllSelected(Marvel[list]);
        }
      }
    }
  };

  function removeAllSelected(list) {
    if (list.hasOwnProperty('selected') && list.hasOwnProperty('available')) {
      for (var i = list.selected.length; i--; i > 0) {
        var item = list.selected[i];
        list.available.push(item);
        list.selected.splice(i, 1);
      }
    }
  }
});