app.directive('cardSelector', function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      title: '@',
      list: '=',
      filter: '='
    },
    link: function(scope, elm, attrs) {
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
  }
});