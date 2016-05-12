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

.controller('membersTabDefaultPageCtrl', function($scope, $ionicFilterBar, $ionicPlatform, $filter, $ionicPopup, assetService, $state, $ionicModal) {
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


   $scope.showEditView = function (b) {

     console.log(b);

    // $state.go('tabsController.editAssmt')
         $scope.currentAssessment = b;
      ///   $scope.action = 'Edit';
      //   $scope.isAdd = false;
         $scope.editModal.show()
       }
  // var newAssessment = {}

   $scope.memberAssessment = {
     'location': '',
     'class': '',
     'time': '',
     'trainer': '',
     'chairTest': '',
     'chairTest1': '',
     'chairTest2': '',
     'sixMinWalk': '',
     'eightFoot1': '',
     'eightFoot2': '',
     'turnRight': '',
     'turnLeft': '',
     'armCurl': '',
     'heightFt':'',
     'heightIn': '',
     'weight': '',
     'diastolic': '',
     'systolic': '',
     'waistCirc': '',
     'hipCirc': '',
     'date': new Date().toISOString(),
     'type': 'assessments',
     //'parent_id': $scope.currentMember._id
     'parent_id': "363409ecdc9e546b409605465421c7e6"
   }


   $ionicPlatform.ready(function() {
         assetService.initDB();

       // Get all asset records from the database.
        assetService.getAllAssets().then(function(assets) {
          $scope.assets = assets;
           console.log($scope.assets)
       });
   });

   $ionicModal.fromTemplateUrl('templates/editAssmt.html', {
         scope: $scope,
         animation: 'slide-in-up'
     }).then(function(modal) {
         $scope.editModal = modal;
     });

   $scope.addNewAssessment = function () {

   console.log($scope.memberAssessment);

   assetService.addAsset($scope.memberAssessment);
}


$scope.hideEditModal = function() {
    console.log("clicked");
    $scope.editModal.hide();
    }

//memberAssessment.date = new Date().toISOString();

$scope.newScan = {};

  $scope.$watch('newScan.receivedDate', function(unformattedDate){
      $scope.newScan.formattedReceivedDate = $filter('date')(unformattedDate, 'dd/MM/yyyy HH:mm');
      });


$scope.openDatePicker = function() {
$scope.tmp = {};
$scope.tmp.newDate = $scope.newAssessment.receivedDate;

var receivedDatePopup = $ionicPopup.show({
  template: '<datetimepicker ng-model="tmp.newDate"></datetimepicker>',
  title: "Received date",
  scope: $scope,
  buttons: [
    { text: 'Cancel' },
    {
   text: '<b>Save</b>',
   type: 'button-positive',
   onTap: function(e) {
     $scope.newScan.receivedDate = $scope.tmp.newDate;
     console.log($scope.tmp.newDate);
     var rDate = $scope.newScan.receivedDate;
     $scope.isoDate = rDate.toISOString();
   //  console.log($scope.isoDate);
     $scope.form.received_date = $scope.isoDate
   //  console.log($scope.form.received_date);
     // localStorage.setItem("received_date", ISO2);

   }
 }
]
});
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
