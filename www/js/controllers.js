angular.module('app.controllers', [])

.controller('classesTabDefaultPageCtrl', function($scope, $state, $ionicFilterBar, $ionicPlatform, $filter, $ionicPopup, memberService, coursesService, $ionicModal, store) {

  $scope.date = new Date();

  $scope.showFilterBar = function () {
    console.log("filter");
     filterBarInstance = $ionicFilterBar.show({
     });
   };

   memberService.list().then(function (members) {

     $scope.members = members
   })

   coursesService.list().then(function (courses) {

     $scope.courses = courses
     console.log(courses);
   })
   if (store.get('currentCourse')) {
     $scope.currentCourse = store.get('currentCourse')
   }
   $scope.selectCurrentCourse = function (course) {
   //  $scope.currentMember.firstName = currentMember.firstName;
   //StorageService.add(currentMember);
   if($scope.currentCourse) {
     $scope.currentCourse = ''
   }
     store.set('currentCourse', course);
       console.log(course)
     $state.go('tabsController.classInfo');
   }




})




.controller('membersTabDefaultPageCtrl', function($scope, $state, $ionicFilterBar, $ionicPlatform, $filter, $ionicPopup, memberService, assessmentsService, $ionicModal, store) {


  memberService.list().then(function (members) {
    //console.log(_(members).first())
    // function addBirthMonth (member) {
    //   member.birthMonth = moment(member.dob).month()
    //   return member
    // }
    //
    // members = members.map(addBirthMonth)

    $scope.members = members
  })

  // assessmentsService.list().then(function (assessments) {
  //   $scope.assessments = assessments
  //   console.log(assessments);
  // })



  if (store.get('currentMember')) {
    $scope.currentMember = store.get('currentMember')
  }
  $scope.selectCurrentMember = function (member) {
  //  $scope.currentMember.firstName = currentMember.firstName;
  //StorageService.add(currentMember);
  if($scope.currentMember) {
    $scope.currentMember = ''
  }
    store.set('currentMember', member);
      console.log(member)
    $state.go('tabsController.memberDetail');

    // console.log(localStorage.getItem('currentMember'))
    //console.log(currentMember);
  //$scope.member = currentMember
  // localStorage.getItem('currentMember');
//  $scope.wtf();
  //console.log(currentMember.firstName);
}

assessmentsService.get($scope.currentMember._id).then(function (memberAssessments) {
    $scope.memberAssessments = memberAssessments
    console.log(memberAssessments)
  })

  if(store.get('currentAssessment')) {
    var myAssessment = store.get('currentAssessment')
    $scope.currentAssessment = myAssessment.doc
    console.log('this is current', $scope.currentAssessment)
  } else { console.log('no assessment')}
  $scope.selectMemberAssessment = function (memberAssessment) {
  //  $scope.currentMember.firstName = currentMember.firstName;
  //StorageService.add(currentMember);
  if($scope.currentAssessment) {
    $scope.currentAssessment = ''
  }
    store.set('currentAssessment', memberAssessment);
      console.log('this is selectedAssessment', memberAssessment)
      console.log(memberAssessment.doc.armCurl);
      $state.go('tabsController.assessmentDetail');
}

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

  //  $scope.memberAssessment = {
  //    'location': '',
  //    'class': '',
  //    'time': '',
  //    'trainer': '',
  //    'chairTest': '',
  //    'chairTest1': '',
  //    'chairTest2': '',
  //    'sixMinWalk': '',
  //    'eightFoot1': '',
  //    'eightFoot2': '',
  //    'turnRight': '',
  //    'turnLeft': '',
  //    'armCurl': '',
  //    'heightFt':'',
  //    'heightIn': '',
  //    'weight': '',
  //    'diastolic': '',
  //    'systolic': '',
  //    'waistCirc': '',
  //    'hipCirc': '',
  //    'date': new Date().toISOString(),
  //    'type': 'assessments',
  //    //'parent_id': $scope.currentMember._id
  //    'parent_id': "363409ecdc9e546b409605465421c7e6"
  //  }


  //  $ionicPlatform.ready(function() {
  //        assessmentsService.initDB();
   //
  //      // Get all asset records from the database.
  //       assessmentsService.getAllAssets().then(function(assets) {
  //         $scope.assets = assets;
  //          console.log($scope.assets)
  //      });
  //  });




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
