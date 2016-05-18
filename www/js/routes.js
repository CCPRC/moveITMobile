angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  ///////////////// Lightning Tab/////////////////////

      .state('tabsController.classesTabDefaultPage', {
    url: '/classes',
    cache: false,
    views: {
      'tab1': {
        templateUrl: 'templates/classesTabDefaultPage.html',
        controller: 'classesTabDefaultPageCtrl'
      }
    }
  })
  .state('tabsController.classInfo' , {
    url: '/classInfo',
    cache: false,
    views: {
      'tab1' : {
        templateUrl: 'templates/classInfo.html',
        controller: 'classesTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.classAttendance' , {
    url: '/classAttendance',
    cache: false,
    views: {
      'tab1' : {
        templateUrl: 'templates/classAttendance.html',
        controller: 'classesTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.classAssess' , {
    url: '/classAssess',
    cache: false,
    views: {
      'tab1' : {
        templateUrl: 'templates/classAssess.html',
        controller: 'classesTabDefaultPageCtrl'
      }
    }
  })
///// /////////// Lightning Tab/////////////////////


  // .state('classAssess', {
  //     url: '/classAssess',
  //     templateUrl: 'templates/classAssess.html',
  //     controller: 'yogaClassCtrl'
  // })

  // .state('classAttendance', {
  //     url: '/classAttendance',
  //     templateUrl: 'templates/classAttendance.html',
  //     controller: 'yogaClassCtrl'
  //   })
  // .state('classInfo', {
  //     url: '/classInfo',
  //     templateUrl: 'templates/classInfo.html',
  //     controller: 'yogaClassCtrl'
  //
  //   })


  // .state('tabsController.assessmentsTabDefaultPage', {
  //   url: '/assessments',
  //   views: {
  //     'tab2': {
  //       templateUrl: 'templates/assessmentsTabDefaultPage.html',
  //       controller: 'assessmentsTabDefaultPageCtrl'
  //     }
  //   }
  // })

  // .state('tabsController.measurementsTabDefaultPage', {
  //   url: '/measurements',
  //   views: {
  //     'tab3': {
  //       templateUrl: 'templates/measurementsTabDefaultPage.html',
  //       controller: 'measurementsTabDefaultPageCtrl'
  //     }
  //   }
  // })

///////// HEAD TAB//////////////////////////////////
  .state('tabsController.membersTabDefaultPage', {
    url: '/members',
    views: {
      'tab4': {
        templateUrl: 'templates/membersTabDefaultPage.html',
        controller: 'membersTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.memberDetail', {
    url: '/memberDetail',
    cache: false,
    views: {
      'tab4': {
        templateUrl: 'templates/memberDetail.html',
        controller: 'membersTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.classAssessments', {
    url: '/classAssessments',
    cache: false,
    views: {
      'tab4': {
        templateUrl: 'templates/classAssessments.html',
        controller: 'membersTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.memberAssmt', {
    url: '/memberAssmt',
    views: {
      'tab4': {
        templateUrl: 'templates/memberAssmt.html',
        controller: 'membersTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.editAssmt', {
    url: '/editAssmt',
    views: {
      'tab4': {
        templateUrl: 'templates/editAssmt.html',
        controller: 'membersTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.notes', {
    url: '/notes',
    views: {
      'tab4': {
        templateUrl: 'templates/notes.html',
        controller: 'yogaClassCtrl'
      }
    }
  })


  // .state('classAssessments', {
  //     url: '/classAssessments',
  //     templateUrl: 'templates/classAssessments.html',
  //     controller: 'yogaClassCtrl'
  // })

///////// HEAD TAB//////////////////////////////////

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

/////////////////Notifications TAB/////////////////
  .state('tabsController.notiTabDefaultPage', {
    url: '/notifications',
    views: {
      'tab2': {
        templateUrl: 'templates/notiTabDefaultPage.html',
        controller: 'membersTabDefaultPageCtrl'
      }
    }
  })


  /////////////////Notifications TAB/////////////////


///////////////// MESSAGES TAB/////////////////////////

  .state('tabsController.messageTabDefaultPage', {
    url: '/messages',
    views: {
      'tab3': {
        templateUrl: 'templates/messageTabDefaultPage.html',
        controller: 'membersTabDefaultPageCtrl'
      }
    }
  })
/////////////////  MESSAGES TAB//////////////////




    .state('memberListAssess', {
        url: '/memberListAssess',
        templateUrl: 'templates/memberListAssess.html',
        controller: 'yogaClassCtrl'
    })

    .state('assessMembers', {
        url: '/assessMembers',
        templateUrl: 'templates/assessMembers.html',
        controller: 'yogaClassCtrl'
    })

    .state('assessDrpopdown', {
        url: '/assessDropdown',
        templateUrl: 'templates/assessDropdown.html',
        controller: 'yogaClassCtrl'
    })



      .state('assessmentDetail', {
          url: '/assessmentDetail',
          templateUrl: 'templates/assessmentDetail.html',
          controller: 'yogaClassCtrl'
        })


  .state('tabsClassController', {
    url: '/tabsClass',
    templateUrl: 'templates/classTabsController.html',
    abstract: true
  })

  .state('tabsClassController.classInfo', {
    url: '/classInfo',
    views: {
      'tab1': {
        templateUrl: 'templates/classInfo.html',
        controller: 'yogaClassCtrl'
      }
    }
  })



  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

// $urlRouterProvider.otherwise('/page1/classes')
$urlRouterProvider.otherwise('/login')




});
