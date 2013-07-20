app.controller('MarvelCtrl', function ($scope, Marvel, Helper) {
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
    for (var expansion in expansions) {
      if (expansions.hasOwnProperty(expansion)) {
        if (expansions[expansion].available == true) {
          return (item.expansion === expansions[expansion].name);
        }
      }
    }
    return false;
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
    //applyMastermindLogic();
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
        case "Negative Zone Prison Break":
          $scope.henchmen.maxAllowed = $scope.henchmen.maxAllowed + 1;
          break;
        case "Replace Earth's Leaders with Killbots":
          $scope.bystanders.maxAllowed = 18;
          break;
        case "Secret Invasion of the Skrull Shapeshifters":
          // Skrull Villain Group required
          var skrulls = $scope.villains.available.filter(function (val) {
            return (val.name === "Skrulls") ? val : null;
          });
          if (skrulls != null && skrulls.length > 0) {
            $scope.villains.selected.pop();
            $scope.selectItem(skrulls[0], $scope.villains);
          }
          break;
        case "Super Hero Civil War":
          // Only 4 Heroes if there are 2 players playing.
          if ($scope.playerCount.selected === 2) {
            $scope.heroes.maxAllowed = 4;
          }
          break;
        case "Detonate the Helicarrier":
          // 6 Heroes
          $scope.heroes.maxAllowed = 6;
          break;
        case "Organized Crime Wave":
          // Maggia Goons Villain Group required
          var goons = $scope.villains.available.filter(function (val) {
            return (val.name === "Maggia Goons") ? val : null;
          });
          if (goons != null && goons.length > 0) {
            $scope.villains.selected.pop();
            $scope.selectItem(goons[0], $scope.villains);
          }
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

  function reduceDecks() {
    for (var deck in Marvel) {
      if (Marvel.hasOwnProperty(deck)) {
        if ($scope[deck].hasOwnProperty('selected') && $scope[deck].hasOwnProperty('available')) {
          if ($scope[deck].selected.length > $scope[deck].maxAllowed) {
            do {
              $scope[deck].selected.pop();
            } while ($scope[deck].selected.length > $scope[deck].maxAllowed)
          }
        }
      }
    }
  }
});