angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.classesTabDefaultPage', {
    url: '/classes',
    views: {
      'tab1': {
        templateUrl: 'templates/classesTabDefaultPage.html',
        controller: 'classesTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.assessmentsTabDefaultPage', {
    url: '/assessments',
    views: {
      'tab2': {
        templateUrl: 'templates/assessmentsTabDefaultPage.html',
        controller: 'assessmentsTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.measurementsTabDefaultPage', {
    url: '/measurements',
    views: {
      'tab3': {
        templateUrl: 'templates/measurementsTabDefaultPage.html',
        controller: 'measurementsTabDefaultPageCtrl'
      }
    }
  })

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
    views: {
      'tab4': {
        templateUrl: 'templates/memberDetail.html',
        controller: 'yogaClassCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('classInfo', {
      url: '/classInfo',
      templateUrl: 'templates/classInfo.html',
      controller: 'yogaClassCtrl'

    })

    .state('classAssessments', {
        url: '/classAssessments',
        templateUrl: 'templates/classAssessments.html',
        controller: 'yogaClassCtrl'
    })

    .state('classAssess', {
        url: '/classAssess',
        templateUrl: 'templates/classAssess.html',
        controller: 'yogaClassCtrl'
    })

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

    .state('classAttendance', {
        url: '/classAttendance',
        templateUrl: 'templates/classAttendance.html',
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
