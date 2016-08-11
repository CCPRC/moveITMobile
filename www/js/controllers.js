angular.module('app.controllers', [])

.controller('classesTabDefaultPageCtrl', function($scope, $state, $ionicFilterBar, $ionicPlatform, $filter, $ionicPopup, $ionicPopover, memberService, coursesService, $ionicModal, store, auth, attendanceService) {

    // var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';
    //
    // $scope.popover = $ionicPopover.fromTemplate(template, {
    //  scope: $scope
    // });

    // .fromTemplateUrl() method
    $ionicPopover.fromTemplateUrl('templates/my-popover.html', {
     scope: $scope
    }).then(function(popover) {
     $scope.popover = popover;
    });


    $scope.openPopover = function($event) {
     $scope.popover.show($event);
    };
    $scope.closePopover = function() {
     $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
     $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
     // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
     // Execute action
    });

    $scope.logout = function(){
      console.log("logout");
      auth.signout();

     store.remove('profile');
     store.remove('token');
     store.remove('accessToken');
     store.remove('refreshToken');
      $state.go('login');
    }

  $scope.date = new Date();

  $scope.pupils = [];
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

   if(store.get('currentList')) {
     console.log('current', store.get('currentList'))
     $scope.currentList = store.get('currentList')
     for (var i = 0; i < $scope.currentList.attendees.length; i++) {
       $scope.pupils.push($scope.currentList.attendees[i])
       console.log('hello atten', $scope.pupils)
     }
   }
   $scope.updateAttendance = function () {
     $scope.currentList.attendees = $scope.pupils
     console.log($scope.currentList)
     attendanceService.update($scope.currentList)
   }
   $scope.saveAndJump = function (list) {
     $scope.currentList = list
     store.set('currentList', list)
     $state.go('tabsController.pupils')
   }
   attendanceService.getAttendanceByClass($scope.currentCourse._id).then(function (attendance) {
     $scope.lists = attendance
    //  if($scope.lists) {
    //    for (var i = 0; i < $scope.lists.attendees; i++) {
    //      $scope.pupils.push($scope.lists.attendees[i])
    //      console.log('pupils', $scope.pupils)
    //    }
    //  }
     $scope.students = [];
     $scope.student = [];
     $scope.attendance = attendance
//  console.log($scope.attendance);
    //  console.log(attendance);

//      var attendanceLength = ($scope.attendance).length;
//            for (var i = 0; i < attendanceLength; i++) {
//              console.log(attendance[i]);
//
//    if(attendance[i].parent_id === $scope.currentCourse._id)  {
//      if ($scope.lists.indexOf(attendance[i]) == -1) {
//
//      $scope.lists.push(attendance[i]);
//      console.log($scope.lists);
//
//      $scope.students.push(attendance[i].attendees);
//      console.log($scope.students);
//
//
// ///// this separates out students///// but i a getting dupes
    //  var studentsLength = ($scope.students).length;
    //        for (var i = 0; i < studentsLength; i++) {
    //          console.log($scope.students[i]);
    //          $scope.pupils = $scope.students[i]
//
// }
//
// }
//    }
//     }
  })

  $scope.addNewWalkIn = function (walkIn) {
    console.log('current', store.get('currentList'))
    $scope.currentList = store.get('currentList')
    console.log($scope.currentList);
    console.log(walkIn);
    $scope.walkIn = walkIn;
    $scope.walkIn.present = true;
    console.log($scope.walkIn);
    $scope.currentList.attendees.push($scope.walkIn)
    console.log($scope.currentList.attendees);
    attendanceService.update($scope.currentList)

  }


    $scope.deleteAttendance = function (item) {
      console.log("deleting");
      console.log(item._id);
      attendanceService.remove(item._id)
    //  $state.go('tabsController.classAssessments');
    }

    $scope.showPupils = function() {
      $state.go('tabsController.pupils')
    }





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


.controller('loginCtrl', function($scope, $state, auth, store) {

  var vm = this;

    function doLogin() {
      auth.signin({
        container: 'lock-container',
        authParams: {
          scope: 'openid offline_access',
          device: 'Mobile device'
        }
      }, function (profile, token, accessToken, state, refreshToken) {
        // Success callback
        store.set('profile', profile);
        store.set('token', token);
        store.set('accessToken', accessToken);
        store.set('refreshToken', refreshToken);

         $state.go("tabsController.classesTabDefaultPage");
      }, function () {
        // Error callback
      });
    }

    doLogin();
  })

//})
