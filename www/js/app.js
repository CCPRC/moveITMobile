// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic',  'auth0', 'angular-storage', 'angular-jwt', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'jett.ionic.filter.bar', 'ui.bootstrap.datetimepicker'])

.run(function($ionicPlatform, $rootScope, auth, store, jwtHelper, $location) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

    auth.hookEvents();
    //This event gets triggered on URL change
       var refreshingToken = null;
       $rootScope.$on('$locationChangeStart', function () {
         var token = store.get('token');
         var refreshToken = store.get('refreshToken');
         if (token) {
           if (!jwtHelper.isTokenExpired(token)) {
             if (!auth.isAuthenticated) {
               auth.authenticate(store.get('profile'), token);
             }
           } else {
             if (refreshToken) {
               if (refreshingToken === null) {
                 refreshingToken = auth.refreshIdToken(refreshToken).then(function (idToken) {
                   store.set('token', idToken);
                   auth.authenticate(store.get('profile'), idToken);
                 }).finally(function () {
                   refreshingToken = null;
                 });
               }
               return refreshingToken;
             } else {
               $location.path('/login');
             }
           }
         }
       });





})
