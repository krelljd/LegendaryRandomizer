app.directive("btnCheckbox", function(){
  return {
    require:"ngModel",
    link: function(scope, element, attr, ngModel){
      scope.$watch(function(){
        return ngModel.$modelValue;
      }, function(modelValue){
        console.log(modelValue);
        if (modelValue) {
          element.addClass("active btn-inverse");
        }else{
          element.removeClass("active btn-inverse");
        };
      });
      element.bind("click", function(){
        scope.$apply(function(){
          ngModel.$setViewValue(element.hasClass("active btn-inverse") ? false : true);
        });
      })
    }
  }
});