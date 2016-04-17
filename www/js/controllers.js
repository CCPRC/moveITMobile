angular.module('app.controllers', [])

.controller('classesTabDefaultPageCtrl', function($scope, $ionicFilterBar) {

  $scope.date = new Date();

  $scope.showFilterBar = function () {
    console.log("filter");
     filterBarInstance = $ionicFilterBar.show({
       //console.log("filter");
       //items: vm.items,
       //update: function (filteredItems) {
         //vm.items = filteredItems; -->
       //},
       //filterProperties: 'description'
     });
   };

})

.controller('membersTabDefaultPageCtrl', function($scope, $ionicFilterBar) {
  $scope.showFilterBar = function () {
    console.log("filter");
     filterBarInstance = $ionicFilterBar.show({
       //console.log("filter");
       //items: vm.items,
       //update: function (filteredItems) {
         //vm.items = filteredItems; -->
       //},
       //filterProperties: 'description'
     });
   };


})

.controller('assessmentsTabDefaultPageCtrl', function($scope) {

})

.controller('measurementsTabDefaultPageCtrl', function($scope) {

})

.controller('classCtrl', function($scope, $ionicFilterBar){
  $scope.date = new Date();



})

.controller('yogaClassCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
