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
//
// .factory('keenService', function($http) {
//     var client = new Keen({"projectId": "56f9712a672e6c02bc29c4d8",
//           "writeKey": "3e19b4b9bd84d6d407e76d6b97e8a77be02253d8fdcea798a8c40899783ea3c3685e3d3804c11282e21e9f74dea5fb0a2e06bfc71123fca31064d2bdf2d1c3f559a6e621de15ad68b83eeeaacd67d753db0695ae539f8949b528f855be561198",
//           "readKey": "f1725bf21680f4658c22da1973a52a09446e4d9e5b7569d9ab9a06d5d89877698cd4d638681198148e64bdc4897a66475dd6b3273731cdfb204bbe8b6c5cb741b5c1215418c41a62256a5bef52ce1485161c04205d930527c3439e350147e9a2"})
//     return {
//       saveMetrics: function (metric) {
//         console.log('this is backend metric ', metric)
//         metric.keen = {timestamp: new Date().toISOString()}
//         client.addEvent("metric/" + metric.parent_id, metric, function(err, res) {
//           // console.log(metric, 'this is metric')
//           if (err) {
//             console.log(err, 'this is keen error')
//             return err
//           } else {
//             console.log(res, 'this is keen res')
//             return res
//           }
//         })
//       },
//       getMetrics: function (metricId) {
//         Keen.ready(function () {
//           var queueMetrics = new Keen.Query("metric/" + metricId, {
//             event_collection: "metric/" + metricId,
//             timeframe: "this_30_days",
//             group_by: "keen.timestamp"
//           })
//           client.run(queueMetrics, function(err, res){
//             if (err) {
//               console.log(err)
//               return err
//             } else {
//               console.log(res)
//               return res
//             }
//           })
//         })
//       }
//     }
//
//
//
//
// })
