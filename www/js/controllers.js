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

   $scope.addNewAssessment = function (memberAssessment) {

    var newAssessment = {}
    newAssessment = {
      'location': memberAssessment.locationVal,
      'class': memberAssessment.class,
      'time': memberAssessment.time,
      'trainer': memberAssessment.trainer,
      'chairTest': memberAssessment.chairTest,
      'chairTest1': memberAssessment.chairTest1,
      'chairTest2': memberAssessment.chairTest2,
      'sixMinWalk': memberAssessment.sixMinWalk,
      'eightFoot1': memberAssessment.eightFoot1,
      'eightFoot2': memberAssessment.eightFoot2,
      'turnRight': memberAssessment.turnRight,
      'turnLeft': memberAssessment.turnLeft,
      'armCurl': memberAssessment.armCurl,
      'heightFt': memberAssessment.heightFt,
      'heightIn': memberAssessment.heightIn,
      'weight': memberAssessment.weight,
      'diastolic': memberAssessment.diastolic,
      'systolic': memberAssessment.systolic,
      'waistCirc': memberAssessment.waistCirc,
      'hipCirc': memberAssessment.hipCirc,
      'date': memberAssessment.date,
      'type': 'assessment',
      'parent_id': $scope.currentMember._id
    }
}

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
