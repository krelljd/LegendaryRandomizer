angular.module('legendary').service('Marvel', function () {
  'use strict';
  var Marvel = {};

  /* TODO: change when not running in development
   $http.get('data/legendary-heroes.json')
   .then(function(res){
   $scope.heroes = res.data;
   });*/

  Marvel.playerCount = {};
  Marvel.playerCount.options = [1,2,3,4,5];
  Marvel.playerCount.selected = 4;

  Marvel.expansions = {};
  Marvel.expansions.darkcity = {
    "name": "Dark City",
    "available": false
  };
  Marvel.expansions.fantasticfour = {
    "name" : "Fantastic Four",
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
      },
      {
        "name": "Human Torch",
        "expansion": "Fantastic Four"
      },
      {
        "name": "Invisible Woman",
        "expansion": "Fantastic Four"
      },
      {
        "name": "Mr. Fantastic",
        "expansion": "Fantastic Four"
      },
      {
        "name": "Thing",
        "expansion": "Fantastic Four"
      },
      {
        "name": "Silver Surfer",
        "expansion": "Fantastic Four"
      }
    ];
  Marvel.heroes.selected = [];
  Marvel.heroes.maxAllowed = 5;

  Marvel.masterminds = {};
  Marvel.masterminds.available =
    [
      {
        "name": "Dr. Doom",
        "expansion": "",
        "leads": "Doombot Legion",
        "masterStrike": "Each player with exactly 6 cards in hand reveals a TECH Hero or puts 2 cards from their hand on top of their deck.",
        "info": ""
      },
      {
        "name": "Loki",
        "expansion": "",
        "leads": "Enemies of Asgard",
        "masterStrike": "Each player reveals a STRENGTH Hero or gains a Wound.",
        "info": ""
      },
      {
        "name": "Magneto",
        "expansion": "",
        "leads": "Brotherhood",
        "masterStrike": "Each player reveals an X-MEN Hero or discards down to four cards.",
        "info": ""
      },
      {
        "name": "Red Skull",
        "expansion": "",
        "leads": "Hydra",
        "masterStrike": "Each player KOs a Hero from their hand.",
        "info": ""
      },
      {
        "name": "Apocalypse",
        "expansion": "Dark City",
        "leads": "Four Horsemen. Four Horsemen Villains get +2 DMG.",
        "masterStrike": "Each player reveals their hand and puts all their Heroes that cost 1 COST or more on top of their deck.",
        "info": "Apocalypse wins when Famine, Pestilence, War, and Death have escaped."
      },
      {
        "name": "Kingpin",
        "expansion": "Dark City",
        "leads": "Streets of New York",
        "masterStrike": "Each player reveals a MK Hero or discards their hand and draws 5 cards.",
        "info": "Bribe"
      },
      {
        "name": "Mephisto",
        "expansion": "Dark City",
        "leads": "Underworld",
        "masterStrike": "Each player reveals a MK Hero or gains a Wound.",
        "info": "Whenever a player gains a Wound, put it on top of that player's deck."
      },
      {
        "name": "Mr. Sinister",
        "expansion": "Dark City",
        "leads": "Marauders",
        "masterStrike": "Mr. Sinister captures a Bystander. Then each player with exactly 6 cards reveals a STEALTH Hero or discards cards equal to the number of Bystanders Mr. Sinister has.",
        "info": "Mr. Sinister gets +1 DMG for each Bystander he has."
      },
      {
        "name": "Stryfe",
        "expansion": "Dark City",
        "leads": "MLF",
        "masterStrike": "Stack the Master Strike next to Stryfe. Stryfe gets +1 DMG for each Master Strike stacked next to him. Each player reveals an X-FORCE Hero or discards a card at random.",
        "info": ""
      },
      {
        "name": "Galactus",
        "expansion": "Fantastic Four",
        "leads": "Heralds of Galactus",
        "masterStrike": "Destroy the city space closest to Galactus. Any Villain there escapes. Put this Master Strike there.",
        "info": "Cosmic Threat: STRENGTH, INSTINCT, STEALTH, TECH, RANGED. Galactus Wins: When the city is destroyed."
      },
      {
        "name": "Mole Man",
        "expansion": "Fantastic Four",
        "leads": "Subterrantea",
        "masterStrike": "All Subterranea Villains in the city escape. If any Villains escaped this way, each player gains a Wound.",
        "info": "Mole Man gets +1 DMG for each Subterranea Villain that has escaped."
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
        "setup": "8 Twists. Put a token on this scheme to represent the baby Hope Summers.",
        "specialRules": "The Villain with the baby gets +4 DMG. If you defeat the Villain, rescue the baby to your Victory Pile, until the next Twist. The baby is worth 6 VP at the end of the game. If a Villain escapes with the baby, stack a Twist next to the Mastermind and return the baby to the Scheme card.",
        "twist": "If a Villain has the baby, that Villain escapes. Otherwise, the baby is captured by the closest Villain to the Villain Deck. (If there are no Villains, do nothing.)",
        "evilWins": "When there are 3 Twists stacked next to the Mastermind."
      },
      {
        "name": "Detonate the Helicarrier",
        "expansion": "Dark City",
        "setup": "8 Twists. 6 Heroes in the Hero Deck.",
        "specialRules": "Whenever a Hero is KO'd from the HQ, turn that Hero face down on that HQ space, representing an explosion on the Helicarrier. When an HQ space has 6 explosions, that space is destroyed and cannot hold Heroes anymore.",
        "twist": "Stack this Twist next to the Scheme. Then for each Twist in that stack, KO the leftmost Hero in the HQ and immediately refill that space.",
        "evilWins": "When all HQ spaces are destroyed or the Hero Deck runs out."
      },
      {
        "name": "Massive Earthquake Generator",
        "expansion": "Dark City",
        "setup": "8 Twists",
        "specialRules": "None",
        "twist": "Each player reveals a strength Hero or KOs the top card of their deck.",
        "evilWins": "When the number of non grey Heroes in the KO pile is 3 times the number of players."
      },
      {
        "name": "Organized Crime Wave",
        "expansion": "Dark City",
        "setup": "8 Twists. Include 10 Maggia Goons as one of the Henchman Groups",
        "specialRules": "Goons also have the ability 'Ambush: Play another card in the Villain Deck.'",
        "twist": "Each Goon in the city escapes.  Shuffle all the Goons from the players' Victory Piles into the Villain Deck.",
        "evilWins": "When 5 Goons escape."
      },
      {
        "name": "Save Humanity",
        "expansion": "Dark City",
        "setup": "8 Twists. 24 Bystanders in the Hero Deck. (1 Player: 12 Bystanders in the Hero Deck)",
        "specialRules": "You may spend 2 STAR to rescue a Bystander from the HQ.",
        "twist": "KO all Bystanders in the HQ. Then each player reveals an INSTINCT Hero or KOs a Bystander from their Victory Pile.",
        "evilWins": "When the number of Bystanders KO'd and/or carried off is 4 times the number of players."
      },
      {
        "name": "Steal the Weaponized Plutonium",
        "expansion": "Dark City",
        "setup": "8 Twists representing Plutonium. Add an extra Villain Group.",
        "specialRules": "This Plutonium is captured by the closest Villain to the Villain Deck. If there are no Villains in the city, KO this Plutonium. Either way, play another card from the Villain Deck.",
        "twist": "Each Villain gets +1 DMG for each Plutonium it has. When a Villain with any Plutonium is defeated, shuffle that Plutonium back into the Villain Deck.",
        "evilWins": "When 4 Plutonium have been carried off by Villains."
      },
      {
        "name": "Transform Citizens into Demons",
        "expansion": "Dark City",
        "setup": "8 Twists. Villain Deck includes 14 extra Jean Grey cards and no Bystanders.",
        "specialRules": "Stack 5 Bystanders face down next to the Scheme. Bystanders stacked here are 'Demon Goblin' Villains. They have 2 DMG. Players can fight these Demon Goblins to rescue them as Bystanders.",
        "twist": "Each Jean Grey card counts as a 'Goblin Queen' Villain. It is worth 4 VP. It has DMG equal to its COST plus the number of Demon Goblins stacked next to the Scheme.",
        "evilWins": "When 4 Goblin Queen cards escape."
      },
      {
        "name": "X-Cutioner's Song",
        "expansion": "Dark City",
        "setup": "8 Twists. Villain Deck includes 14 cards for an extra Hero and no Bystanders.",
        "specialRules": "Whenever you play a Hero from the Villain Deck, that Hero is captured by the closest enemy to the Villain Deck. Each Villain gets +2 DMG for each Hero it has. When you fight an enemy, gain all the Heroes captured from the Villain Deck.",
        "twist": "KO all Heroes captured by enemies. Then play another card from the Villain Deck.",
        "evilWins": "9 non-grey Heroes are KO'd or carried off."
      },
      {
        "name": "Invincible Force Field",
        "expansion": "Fantastic Four",
        "setup": "7 Twists",
        "specialRules": "To fight the Mastermind, you must also spend 1 STAR or 1 DMG for each Force Field next to them.",
        "twist": "Stack this Twist next to the Mastermind as a 'Force Field.'",
        "evilWins": "Twist 7."
      },
      {
        "name": "Pull Reality Into The Negative Zone",
        "expansion": "Fantastic Four",
        "setup": "8 Twists",
        "specialRules": "",
        "twist": "2, 4, and 6: Until the next Twist, Enemies cost STAR to fight and Heroes cost DMG to recruit.",
        "evilWins": "Twist 7."
      },
      {
        "name": "Bathe Earth In Cosmic Rays",
        "expansion": "Fantastic Four",
        "setup": "6 Twists",
        "specialRules": "",
        "twist": "Each player in turn does the following: Reveal your hand. KO one of your non-grey heroes. Choose a Hero from the HQ with the same or lower cost and put it into your hand.",
        "evilWins": "When the number of non-grey Heroes in the KO pile is six times the number of players."
      },
      {
        "name": "Flood The Planet With Melted Glaciers",
        "expansion": "Fantastic Four",
        "setup": "8 Twists",
        "specialRules": "Whenever you play a Hero from the Villain Deck, that Hero is captured by the closest enemy to the Villain Deck. Each Villain gets +2 DMG for each Hero it has. When you fight an enemy, gain all the Heroes captured from the Villain Deck.",
        "twist": "Stack this Twist next to the Scheme as 'Rising Waters.' Then KO each Hero from the HQ whose cost is less than or equal to the number of Rising Waters in that stack.",
        "evilWins": "When 20 non-grey Heroes are KO'd."
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
      },
      {
        "name": "Heralds of Galactus",
        "expansion": "Fantastic Four"
      },
      {
        "name": "Subterranea",
        "expansion": "Fantastic Four"
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

angular.module('legendary').factory('Helper', function () {
  'use strict';

  return {
    addSelected: function (item, list) {
      // cannot select more than n selectedItems
      if (list.selected.length >= list.maxAllowed) {
        return false;
      }
      var index = list.available.indexOf(item);
      if (index > -1) {
        list.available.splice(index, 1);
        list.selected.push(item);
        return true;
      }
      return false;
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