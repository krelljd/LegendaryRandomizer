angular.module('legendary').controller('MarvelCtrl', function ($scope, Marvel, Helper) {
  'use strict';

  // expansions
  $scope.playerCount = Marvel.playerCount;
  $scope.expansions = Marvel.expansions;
  $scope.isSummaryDisplayed = false;
  $scope.bystanders = Marvel.bystanders;

  $scope.schemes = Marvel.schemes;
  $scope.masterminds = Marvel.masterminds;
  $scope.heroes = Marvel.heroes;
  $scope.villains = Marvel.villains;
  $scope.henchmen = Marvel.henchmen;

  $scope.selectItem = function (item, list) {
    if (Helper.addSelected(item, list)){
      $scope.updateDecks();
    }
  };

  $scope.removeItem = function (item, list) {
    Helper.removeSelected(item, list);
    $scope.updateDecks();
  };

  $scope.selectRandomItems = function (list) {
    do {
      var random = Helper.getRandomInt(0, list.available.length - 1);
      var item = list.available[random];
      if ($scope.filterExpansions(item)) {
        $scope.selectItem(item, list);
      }
    }
    while (list.selected.length < list.maxAllowed);
  };

  $scope.randomizeAll = function () {
    // call all selectRandomXxx methods
    this.selectRandomItems($scope.schemes);
    this.selectRandomItems($scope.masterminds);
    this.selectRandomItems($scope.heroes);
    this.selectRandomItems($scope.villains);
    this.selectRandomItems($scope.henchmen);
  };

  $scope.removeAll = function () {
    Helper.removeAll(Marvel);
  };

  $scope.filterExpansions = function (item) {
    if (item.expansion === ""){
      return true;
    }

    var expansions = $scope.expansions;
    var showItem = false;
    for (var expansion in expansions) {
        if (expansions.hasOwnProperty(expansion)) {
            if (expansions[expansion].available === true) {
                showItem = (item.expansion === expansions[expansion].name);
                if (showItem) { return true; }
            }
        }
    }
    return showItem;
  };

  $scope.toggleExpansion = function (item) {
    item.available = !item.available;
    $scope.removeAll();
  };

  $scope.togglePlayerCount = function (item) {
    $scope.playerCount.selected = item;
    $scope.removeAll();
    $scope.updateDecks();
  };

  $scope.updateDecks = function () {
    applyPlayerCountLogic();
    applySchemeLogic();
    applyMastermindLogic();
    reduceDecks();
  };

  function applyPlayerCountLogic() {
    var playerCount = $scope.playerCount.selected;
    switch (playerCount) {
      case 1:
        $scope.heroes.maxAllowed = 5;
        $scope.villains.maxAllowed = 2;
        $scope.henchmen.maxAllowed = 1;
        $scope.bystanders.maxAllowed = 2;
        break;
      case 2:
        $scope.heroes.maxAllowed = 5;
        $scope.villains.maxAllowed = 2;
        $scope.henchmen.maxAllowed = 1;
        $scope.bystanders.maxAllowed = 2;
        break;
      case 3:
        $scope.heroes.maxAllowed = 5;
        $scope.villains.maxAllowed = 3;
        $scope.henchmen.maxAllowed = 1;
        $scope.bystanders.maxAllowed = 8;
        break;
      case 4:
        $scope.heroes.maxAllowed = 5;
        $scope.villains.maxAllowed = 3;
        $scope.henchmen.maxAllowed = 2;
        $scope.bystanders.maxAllowed = 8;
        break;
      case 5:
        $scope.heroes.maxAllowed = 6;
        $scope.villains.maxAllowed = 4;
        $scope.henchmen.maxAllowed = 2;
        $scope.bystanders.maxAllowed = 12;
        break;
    }
  }

  function applySchemeLogic() {
    if ($scope.schemes.selected.length > 0) {
      var scheme = $scope.schemes.selected[0];
      switch (scheme.name) {
        case "Midtown Bank Robbery":
          $scope.bystanders.maxAllowed = 12;
          break;
        case "Negative Zone Prison Breakout":
          $scope.henchmen.maxAllowed = $scope.henchmen.maxAllowed + 1;
          break;
        case "Replace Earth's Leaders with Killbots":
          $scope.bystanders.maxAllowed = 18;
          break;
        case "Secret Invasion of the Skrull Shapeshifters":
          // Skrull Villain Group required
          handleRequiredGroup("Skrulls", $scope.villains);
          $scope.heroes.maxAllowed = 6;
          break;
        case "Super Hero Civil War":
          // Only 4 Heroes if there are <= 2 players playing.
          if ($scope.playerCount.selected <= 2) {
            $scope.heroes.maxAllowed = 4;
          }
          break;
        case "Detonate the Helicarrier":
          // 6 Heroes
          $scope.heroes.maxAllowed = 6;
          break;
        case "Organized Crime Wave":
          // Maggia Goons Henchmen Group required
          handleRequiredGroup("Maggia Goons", $scope.henchmen);
          break;
        case "Save Humanity":
          // 12 Bystanders in Hero Deck for 1 player
          if ($scope.playerCount.selected === 1) {
            $scope.bystanders.maxAllowed = 12;
          }
          // 24 Bystanders in Hero Deck for 2+ players
          else  {
            $scope.bystanders.maxAllowed = 24;
          }
          break;
        case "Steal the Weaponized Plutonium":
          $scope.villains.maxAllowed = $scope.villains.maxAllowed + 1;
          break;
        case "Transform Citizens into Demons":
          $scope.bystanders.maxAllowed = 0;
          break;
        case "X-Cutioner's Song":
          $scope.bystanders.maxAllowed = 0;
          break;
      }
    }
  }

  function applyMastermindLogic() {
    if ($scope.masterminds.selected.length > 0) {
      var mastermind = $scope.masterminds.selected[0];
      switch (mastermind.name) {
        case "Apocalypse":
          // Four Horsemen Villain Group required
          handleRequiredGroup("Four Horsemen", $scope.villains);
          break;
        case "Dr. Doom":
          // Doombot Legion Henchmen Group required
          handleRequiredGroup("Doombot Legion", $scope.henchmen);
          break;
        case "Kingpin":
          // Streets of New York Villain Group required
          handleRequiredGroup("Streets of New York", $scope.villains);
          break;
        case "Loki":
          // Enemies of Asgard Villain Group required
          handleRequiredGroup("Enemies of Asgard", $scope.villains);
          break;
        case "Magneto":
          // Brotherhood Villain Group required
          handleRequiredGroup("Brotherhood", $scope.villains);
          break;
        case "Mephisto":
          // Underworld Villain Group required
          handleRequiredGroup("Underworld", $scope.villains);
          break;
        case "Mr. Sinister":
          // Marauders Villain Group required
          handleRequiredGroup("Marauders", $scope.villains);
          break;
        case "Red Skull":
          // Hydra Villain Group required
          handleRequiredGroup("Hydra", $scope.villains);
          break;
        case "Stryfe":
          // MLF Villain Group required
          handleRequiredGroup("MLF", $scope.villains);
          break;
        case "Galactus":
          //Heralds of Galactus Villain Group required
          handleRequiredGroup("Heralds of Galactus", $scope.villains);
          break;
        case "Mole Man":
          //Subterranea Villain Group required
          handleRequiredGroup("Subterranea", $scope.villains);
          break;
      }
    }
  }

  function reduceDecks() {
    for (var deck in Marvel) {
      if (Marvel.hasOwnProperty(deck)) {
        if ($scope[deck].hasOwnProperty('selected') && $scope[deck].hasOwnProperty('available')) {
          if ($scope[deck].selected.length > $scope[deck].maxAllowed) {
            do {
              var random = Helper.getRandomInt(0, $scope[deck].selected.length - 1);
              var removed = $scope[deck].selected[random];
              $scope.removeItem(removed, $scope[deck]);
            } while ($scope[deck].selected.length > $scope[deck].maxAllowed);
          }
        }
      }
    }
  }

  function handleRequiredGroup(villainName, list) {
    var villain = list.available.filter(function (val) {
      return (val.name === villainName) ? val : null;
    });
    if (villain !== null && villain.length > 0) {
      if (list.selected.length === list.maxAllowed) {
        list.selected.pop();
      }
      $scope.selectItem(villain[0], list);
    }
  }
});