angular.module('legendary').directive('cardSelector', function () {
  'use strict';

  return {
    restrict: 'EA',
    replace: true,
    scope: {
      title: '@',
      list: '=',
      filter: '='
    },
    link: function(scope) {
      scope.onSelect = function (item) {
        scope.$parent.selectItem(item, scope.list);
      };

      scope.onRemove = function (item) {
        scope.$parent.removeItem(item, scope.list);
      };

      scope.onSelectRandom = function () {
        scope.$parent.selectRandomItems(scope.list);
      };
    },
    templateUrl: '/cardSelector.html'
  };
});