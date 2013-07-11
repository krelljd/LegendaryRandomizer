app.controller('MarvelCtrl', function ($scope, Marvel, Helper) {
  // expansions
  $scope.expansions = Marvel.expansions;

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
});