app.controller('MarvelCtrl', function ($scope, Marvel, Helper) {
  // Heroes
  $scope.heroes = Marvel.heroes;

  $scope.selectHero = function (hero) {
    Helper.addSelected(hero, $scope.heroes.available, $scope.heroes.selected, $scope.heroes.maxAllowed);
  };

  $scope.removeHero = function (hero) {
    Helper.removeSelected(hero, $scope.heroes.available, $scope.heroes.selected)
  };

  $scope.selectRandomHeroes = function () {
    do {
      var random = Helper.getRandomInt(0, $scope.heroes.available.length - 1);
      Helper.addSelectedByIndex(random, $scope.heroes.available, $scope.heroes.selected, $scope.heroes.maxAllowed);
    }
    while ($scope.heroes.selected.length < $scope.heroes.maxAllowed);
  };

  // Masterminds
  $scope.masterminds = Marvel.masterminds;

  $scope.selectMastermind = function (mastermind) {
    Helper.addSelected(mastermind, $scope.masterminds.available, $scope.masterminds.selected, $scope.masterminds.maxAllowed);
  };

  $scope.removeMastermind = function (mastermind) {
    Helper.removeSelected(mastermind, $scope.masterminds.available, $scope.masterminds.selected)
  };

  $scope.selectRandomMastermind = function () {
    var random = Helper.getRandomInt(0, $scope.masterminds.available.length - 1);
    Helper.addSelectedByIndex(random, $scope.masterminds.available, $scope.masterminds.selected, $scope.masterminds.maxAllowed);
  };

  // Schemes
  $scope.schemes = Marvel.schemes;

  $scope.selectScheme = function (scheme) {
    Helper.addSelected(scheme, $scope.schemes.available, $scope.schemes.selected, $scope.schemes.maxAllowed);
  };

  $scope.removeScheme = function (scheme) {
    Helper.removeSelected(scheme, $scope.schemes.available, $scope.schemes.selected)
  };

  $scope.selectRandomScheme = function () {
    var random = Helper.getRandomInt(0, $scope.schemes.available.length - 1);
    Helper.addSelectedByIndex(random, $scope.schemes.available, $scope.schemes.selected, $scope.schemes.maxAllowed);
  };

  // Villain Groups
  $scope.villains = Marvel.villains;

  $scope.selectVillain = function (villain) {
    Helper.addSelected(villain, $scope.villains.available, $scope.villains.selected, $scope.villains.maxAllowed);
  };

  $scope.removeVillain = function (villain) {
    Helper.removeSelected(villain, $scope.villains.available, $scope.villains.selected)
  };

  $scope.selectRandomVillains = function () {
    do {
      var random = Helper.getRandomInt(0, $scope.villains.available.length - 1);
      Helper.addSelectedByIndex(random, $scope.villains.available, $scope.villains.selected, $scope.villains.maxAllowed);
    }
    while ($scope.villains.selected.length < $scope.villains.maxAllowed);
  };

  // Henchmen Groups
  $scope.henchmen = Marvel.henchmen;

  $scope.selectHenchmen = function (scheme) {
    Helper.addSelected(scheme, $scope.henchmen.available, $scope.henchmen.selected, $scope.henchmen.maxAllowed);
  };

  $scope.removeHenchmen = function (scheme) {
    Helper.removeSelected(scheme, $scope.henchmen.available, $scope.henchmen.selected)
  };

  $scope.selectRandomHenchmen = function () {
    do {
      var random = Helper.getRandomInt (0, $scope.henchmen.available.length - 1);
      Helper.addSelectedByIndex(random, $scope.henchmen.available, $scope.henchmen.selected, $scope.henchmen.maxAllowed);
    }
    while ($scope.henchmen.selected.length < $scope.henchmen.maxAllowed);
  };

  $scope.randomizeAll = function () {
    // call all selectRandomXxx methods
    this.selectRandomScheme();
    this.selectRandomMastermind();
    this.selectRandomHeroes();
    this.selectRandomVillains();
    this.selectRandomHenchmen();
  };

  $scope.removeAll = function () {
    //TODO: fix this
    Helper.removeAll(Marvel);
  };
});