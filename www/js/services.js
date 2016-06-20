var API_URL = 'https://move-it-ccprc.herokuapp.com/api'
//var API_URL = 'http://localhost:3000/api'

var newEvent = palmettoflowEvent.newEvent


 angular.module('app.services', [])

.factory('memberService', function($http) {
  return {
    get: function(member) {
      var ne = newEvent('members', 'get', member, {})
      return $http.post(API_URL, ne).then(function (result) {
        return result.data.object
      })
    },
    list: function() {
      var ne = newEvent('members', 'list', {}, {})
      return $http.post(API_URL, ne).then(function (result) {
        return _(result.data.object.rows).pluck('doc')
      })
    },
    create: function (member) {
      var ne = newEvent('members', 'create', member, {})
      return $http.post(API_URL, ne).then(function (result) {
        return result.data.object
      })
    },
    update: function (member) {
      var ne = newEvent('members', 'update', member, {})
      return $http.post(API_URL, ne).then(function (result) {
        return result.data.object
      })
    },
    remove: function (member) {
      var ne = newEvent('members', 'remove', member, {})
      return $http.post(API_URL, ne).then(function (result) {
        return result.data.object
      })
    }

  }
})




.factory('coursesService', function($http) {

  return {
    list: function () {
      var ne = newEvent('courses', 'list', {}, {})
      return $http.post(API_URL, ne).then(function (result) {
        return _(result.data.object.rows).pluck('doc')
      })
    },
    get: function (courses) {
      var ne = newEvent('courses', 'get', course, {})
      return $http.post(API_URL, ne).then(function (result) {
        return result.data.object
      })
    },
    create: function (course) {
      var ne = newEvent('courses', 'create', course, {})
      return $http.post(API_URL, ne).then(function (result) {
        return result.data.object
      })
    },
    update: function (course) {
      var ne = newEvent('courses', 'update', course, {})
      return $http.post(API_URL, ne).then(function (result) {
        return result.data.object
      })
    },
    remove: function (course) {
      var ne = newEvent('courses', 'remove', course, {})
      return $http.post(API_URL, ne).then(function (result) {
        return result.data.object
      })
    }
  }


})

.factory('assessmentsService', function($http) {
  console.log('assessmentsService');
  return {
      list: function () {
        // console.log("assessments list");
        var ne = newEvent('assessments', 'list', {}, {})
        return $http.post(API_URL, ne).then(function (result) {
          return _(result.data.object.rows).pluck('doc')
        })
      },
      get: function (assessment) {
        var ne = newEvent('assessments', 'get', assessment, {})
        return $http.post(API_URL, ne).then(function (result) {
          return result.data.object
        })
      },
      create: function (assessment) {
        console.log(assessment);
        var ne = newEvent('assessments', 'create', assessment, {})
        return $http.post(API_URL, ne).then(function (result) {
          return result.data.object
        })
      },
      update: function (assessment) {
        console.log(assessment);
        var ne = newEvent('assessments', 'update', assessment, {})
        return $http.post(API_URL, ne).then(function (result) {
          return result.data.object
        })
      },
      remove: function (assessment) {
        console.log(assessment);
        var ne = newEvent('assessments', 'remove', assessment, {})
        return $http.post(API_URL, ne).then(function (result) {
          return result.data.object
       })
      }
    }
})

.factory('notesService', function($http) {
  console.log("notesService");
  return {
      list: function () {
        var ne = newEvent('notes', 'list', {}, {})
        return $http.post(API_URL, ne).then(function (result) {
          return _(result.data.object.rows).pluck('doc')
        })
      },
      get: function (note) {
        var ne = newEvent('notes', 'get', note, {})
        return $http.post(API_URL, ne).then(function (result) {
          return result.data.object
          console.log(result.data.object);
        })
      },
      create: function (note) {
        var ne = newEvent('notes', 'create', note, {})
        return $http.post(API_URL, ne).then(function (result) {
          return result.data.object
        })
      },
      update: function (note) {
        console.log(note);
        var ne = newEvent('notes', 'update', note, {})
        return $http.post(API_URL, ne).then(function (result) {
          return result.data.object
        })
      },
      remove: function (note) {
        var ne = newEvent('notes', 'remove', note, {})
        return $http.post(API_URL, ne).then(function (result) {
          return result.data.object
        })
      }
    }


})
