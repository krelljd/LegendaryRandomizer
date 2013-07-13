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

  $scope.selectItem = function (item, section) {
    var list = $scope[section];
    Helper.addSelected(item, list);
  };

  $scope.removeItem = function (item, section) {
    var list = $scope[section];
    Helper.removeSelected(item, list);
  };

  $scope.selectRandomItems = function (section) {
    do {
      var random = Helper.getRandomInt(0, $scope[section].available.length - 1);
      var item = $scope[section].available[random];
      if ($scope.filterExpansions(item)) {
        $scope.selectItem(item, section);
      }
    }
    while ($scope[section].selected.length < $scope[section].maxAllowed);
  };

  $scope.randomizeAll = function () {
    // call all selectRandomXxx methods
    this.selectRandomItems("schemes");
    this.selectRandomItems("masterminds");
    this.selectRandomItems("heroes");
    this.selectRandomItems("villains");
    this.selectRandomItems("henchmen");
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
    var playerCount = $scope.playerCount.selected;
    switch (playerCount) {
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
});