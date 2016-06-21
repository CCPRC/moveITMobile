angular.module('app.controllers', [])

.controller('classesTabDefaultPageCtrl', function($scope, $state, $ionicFilterBar, $ionicPlatform, $filter, $ionicPopup, memberService, coursesService, $ionicModal, store, attendanceService) {

  $scope.date = new Date();


  $scope.showFilterBar = function () {
    console.log("filter");
     filterBarInstance = $ionicFilterBar.show({
       items: $scope.courses,
       update: function (filteredItems) {
         $scope.courses = filteredItems;
       },
       filterProperties: 'courseName'
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



   attendanceService.list().then(function (attendance) {
     $scope.lists = [];
     $scope.attendance = attendance
$scope.currentCourse = store.get('currentCourse')
//  console.log($scope.attendance);
    //  console.log(attendance);

     var attendanceLength = ($scope.attendance).length;
           for (var i = 0; i < attendanceLength; i++) {
             console.log(attendance[i]);

   if(attendance[i].parent_id === $scope.currentCourse._id) {
     $scope.lists.push(attendance[i]);
console.log($scope.lists);
   }
    }
})
    $scope.deleteAttendance = function (item) {
      console.log("deleting");
      console.log(item._id);
      attendanceService.remove(item._id)
    //  $state.go('tabsController.classAssessments');
    }
  //  if($scope.currentCourse) {
  //  attendanceService.get($scope.currentCourse._id).then(function (attendances) {
  //       $scope.attendances = attendances
  //       console.log("attendances", attendances)
  //     })
  //  }else {
  //    console.log("no member");
  //  }






})




.controller('membersTabDefaultPageCtrl', function($scope, $state, $ionicFilterBar, $ionicPlatform, $filter, $ionicPopup, memberService, $ionicModal, store, assessmentsService, notesService) {

  $scope.date = new Date();


  memberService.list().then(function (members) {
    console.log(members);
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
  //  $scope.getAssessments();
    $state.go('tabsController.memberDetail');

}
if($scope.currentMember) {
assessmentsService.get($scope.currentMember._id).then(function (memberAssessments) {
     $scope.memberAssessments = memberAssessments
     console.log(memberAssessments)
   })
}else {
  console.log("no member");
}

if($scope.currentMember) {
notesService.get($scope.currentMember._id).then(function (memberNotes) {
     $scope.memberNotes = memberNotes
     console.log("notes", memberNotes)
   })
}else {
  console.log("no member");
}

  if(store.get('currentAssessment')) {
    var myAssessment = store.get('currentAssessment')
    $scope.currentAssessment = myAssessment.doc
    console.log('this is current', $scope.currentAssessment)
  } else { console.log('no assessment')}

  $scope.selectMemberAssessment = function (memberAssessment) {

  if($scope.currentAssessment) {
    $scope.currentAssessment = ''
  }
    store.set('currentAssessment', memberAssessment);
      console.log('this is selectedAssessment', memberAssessment)
    //  console.log(memberAssessment.doc.armCurl);
      $state.go('tabsController.assessmentDetail');
}

////// create new assessment////

$scope.addNewAssessment = function (memberAssessment) {
console.log(memberAssessment);
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
      'date': new Date().toISOString(),
      'type': 'assessment',
      'parent_id': $scope.currentMember._id
    }
    assessmentsService.create(newAssessment)
    $state.go('tabsController.classAssessments');


    ///.then(function (res) {
    //   var metric = newAssessment
    //   keen.saveMetrics(metric)
    //   $state.transitionTo($state.current, $stateParams, {
    //     reload: true,
    //     inherit: false,
    //     notify: true
    //   })
    // })
  }

  $scope.deleteAssessment = function (currentAssessment) {
    console.log(currentAssessment);
    console.log(currentAssessment._id);
    assessmentsService.remove(currentAssessment._id)
    $state.go('tabsController.classAssessments');
  }
  //
  $scope.updateAssessment = function (currentAssessment) {
    console.log(currentAssessment);
    assessmentsService.update(currentAssessment)
    $state.go('tabsController.classAssessments');
  }

  $scope.updateNote = function (currentNote) {
    console.log(currentNote);
    notesService.update(currentNote)
    $state.go('tabsController.notes');
  }

  $scope.deleteNote = function (currentNote) {
    notesService.remove(currentNote._id)
    $state.go('tabsController.notes');
  }

  $scope.addNewNote = function (memberNote) {
    console.log(memberNote);
    var newNote = {}
    newNote = {
      'date': $scope.date,
      'message': memberNote.message,
      'type': 'note',
      'parent_id': $scope.currentMember._id
    }
    console.log(newNote);
    notesService.create(newNote).then(function (res) {
      $state.go('tabsController.notes')
    })
  }

  if(store.get('currentNote')) {
     var myAssessment = store.get('currentNote')
     $scope.currentNote = myAssessment.doc
     console.log('this is current', $scope.currentNote)
   } else { console.log('no bite')}


  $scope.selectNote = function (memberNote) {

  if($scope.currentNote) {
    $scope.currentNote = ''
  }
    store.set('currentNote', memberNote);
      console.log('this is selectedNote', memberNote)
    //  console.log(memberAssessment.doc.armCurl);
      $state.go('tabsController.noteDetail');
  }



  $scope.showFilterBar = function () {
    console.log("filter");
     filterBarInstance = $ionicFilterBar.show({
       items: $scope.members,
       update: function (filteredItems) {
         $scope.members = filteredItems;
       },
       filterProperties: 'lastName'
     });
   };

})

.controller('assessmentsTabDefaultPageCtrl', function($scope) {

})

.controller('measurementsTabDefaultPageCtrl', function($scope) {

})


.controller('loginCtrl', function($scope) {

})
