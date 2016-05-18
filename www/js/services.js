var API_URL = 'https://move-it-ccprc.herokuapp.com/api'
//var API_URL = 'http://localhost:3000/api'

var newEvent = palmettoflowEvent.newEvent

 angular.module('app.services', [])


 // .factory ('StorageService', function ($localStorage) {
 // var _getAll = function () {
 //   return $localStorage.things;
 // };
 // var _add = function (thing) {
 //   $localStorage.things.push(thing);
 //   console.log(thing);
 //   console.log(thing._id);
 // }
 // var _remove = function (thing) {
 //   $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
 // }
 // return {
 //     getAll: _getAll,
 //     add: _add,
 //     remove: _remove
 //   };
 // })


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

.factory('classesService', function($http) {
return {
    list: function () {
      var ne = newEvent('classes', 'list', {}, {})
      return $http.post(API_URL, ne).then(function (result) {
        return _(result.data.object.rows).pluck('doc')
      })
    },
    get: function (xclass) {
      var ne = newEvent('classes', 'get', xclass, {})
      return $http.post(API_URL, ne).then(function (result) {
        return result.data.object
      })
    },
    create: function (xclass) {
      var ne = newEvent('classes', 'create', xclass, {})
      return $http.post(API_URL, ne).then(function (result) {
        return result.data.object
      })
    },
    update: function (xclass) {
      var ne = newEvent('classes', 'update', xclass, {})
      return $http.post(API_URL, ne).then(function (result) {
        return result.data.object
      })
    },
    remove: function (xclass) {
      var ne = newEvent('classes', 'remove', xclass, {})
      return $http.post(API_URL, ne).then(function (result) {
        return result.data.object
      })
    }
  }

})
.factory('assessmentsService', function($http) {
  return {
    get: function(id) {
      return $http.get(API_URL+'assessments/get'+id);
    },
    post: function(data) {
    //  console.log(data);
      return $http.post(API_URL+'assessments/create', data);
    }
  }
})


// var url = 'https://rhinogram:lincs2015@couchdb.lincs.io/move_it/assessments/create';
// //var token = null
// var token = "yFAtKXbVXNIkZlAMLwYTlzfgZuKKzD3G";
// var profile = null;
//
// var _options = {
//   headers: {
//     'Content-Type' : 'application/json',
//     'Authorization' : token
//   }
// };
//
// var _setDefaults = function (doc) {
//   // doc.user_id = 1;
//   // doc.location_id = 1;
//   // doc.division_id = "South";
//   // doc.condition = "GD";
//   // doc.category_id = parseInt(doc.category_id);
//   // doc.person_responsible_id = parseInt(doc.person_responsible_id);
//   // doc.received_date =  !doc.received_date ? (new Date()).toISOString() : doc.received_date;
//   return doc;
// };
//
//
// angular.module('app.services', [])
//
// .factory('assetService', function($q, $http, $state, $stateParams) {
//
//         var _db;
//         var _assets;
//
// //https://move-it-ccprc.herokuapp.com/api
//         var _scansUrl = 'https://move-it-ccprc.herokuapp.com/api/assessments/create';
//
//         return {
//             initDB: initDB,
//
//             getAllAssets: getAllAssets,
//             addAsset: addAsset,
//             updateAsset: updateAsset,
//             deleteAsset: deleteAsset,
//           //  postLeftAssets: postLeftAssets,
//             sendUpdate: sendUpdate
//
//         };
//
//         function initDB() {
//             // Creates the database or opens if it already exists
//             _db = new PouchDB({name: 'assets', location: 'Library'}, {adapter: 'websql', auto_compaction: true});
//             if (typeof window != "undefined") {window.PouchDB = PouchDB}
//         }
//
//         function addAsset(asset) {
//           return $q
//             .when(
//               _db.post(asset))
//
//             .then(function (res) {
//               console.log(res);
//             //  resetState();
//               //console.log(asset._id);
//               // state should not be in a service, it should be in the controller
//             //  $state.go($state.current, $stateParams, {reload: true, inherit: false});
//             });
//
//         }
// //////// THIS IS FOR AUDITING ASSETS //// TODO//////////////////////////
//         function sendUpdate(scan) {
//           console.log(scan);
//           return $q
//             .when(
//               _db.post(scan))
//               .then(function (res) {
//                 console.log(res);
//               });
//
//         }
// //////// THIS IS FOR AUDITING ASSETS //// TODO//////////////////////////
//
//         function updateAsset(asset) {
//           console.log("updating");
//             return $q.when(_db.put(asset));
//         }
//
//         function deleteAsset(asset) {
//           console.log("delete");
//             return $q.when(_db.remove(asset));
//            // $state.go($state.current, $stateParams, {reload: true, inherit: false});
//           //  $window.location.reload(true);
//             //$scope.apply();
//         }
//
//         function getAllAssets() {
//
//             if (!_assets) {
//                 return $q.when(_db.allDocs({ include_docs: true}))
//                           .then(function(docs) {
//                             console.log(docs);
//
//                             // Each row has a .doc object and we just want to send an
//                             // array of asset objects back to the calling controller,
//                             // so let's map the array to contain just the .doc objects.
//                             _assets = docs.rows.map(function(row) {
//                                 // Dates are not automatically converted from a string.
//                               //  row.doc.Date = new Date(row.doc.Date);
//                                 return row.doc;
//                             });
//
//                             // Listen for changes on the database.
//                             _db.changes({ live: true, since: 'now', include_docs: true})
//                                .on('change', onDatabaseChange);
//                            return _assets;
//                          });
//             } else {
//                 // Return cached data as a promise
//                 return $q.when(_assets);
//             }
//         }
//
//
//         function onDatabaseChange(change) {
//           console.log("db change", change.doc);
//            var index = findIndex(_assets, change.id);
//             var asset = _assets[index];
//           console.log(change);
//           if(change.deleted !== true) {
//             var _doc = _setDefaults(change.doc);
//             return $http.post(_scansUrl, { data: [_doc] }, _options)
//               // .then(function (res) {
//               //   // TODO: Lets make sure, the transaction was successful
//               //   // if not, i don't want to delete the document.
//               //   // remove document if posted
//               //   console.log('remove doc');
//               //   return _db.get(_doc._id).then(doc => _db.remove(doc));
//               // })
//               //  .then(function (doc) {
//               //    console.log("remove doc");
//               //    return _db.remove(doc)})
//
//               .then(function (res) {
//                 // update assets array with latest doc
//                 // again don't know if this is needed
//                 _assets = _assets.map(function (asset) {
//                   return asset._id = _doc._id ? _doc : asset;
//                 });
//               })
//               .catch(function (err) {
//                 console.log(err);
//                 return err;
//               });
//           }
//
//
//           if (change.deleted) {
//                if (asset) {
//                    _assets.splice(index, 1); // delete
//                }
//            } else {
//                if (asset && asset._id === change.id) {
//                    _assets[index] = change.doc; // update
//                } else {
//                    _assets.splice(index, 0, change.doc) // insert
//                }
//           }
//     }
//
//     function findIndex(array, id) {
//           var low = 0, high = array.length, mid;
//         //  console.log(id);
//           while (low < high) {
//             mid = (low + high) >>> 1;
//             array[mid]._id < id ? low = mid + 1 : high = mid
//           }
//           return low;
//         }
//
//     function exclude (doc) {
//       return function (asset) {
//         return asset._id !== doc._id;
//       };
//     }
//
//     // not sure what this is --tnw
//     // function postLeftAssets(assets) {
//     //  _db.allDocs({ include_docs: true})
//     //    .then(function (res) {
//     //      var docs = res.rows.map(function (row) { return _setDefaults(row.doc) });
//     //      console.log(docs)
//     //      $http.post(_scansUrl, { data: docs }, _options)
//     //        .then(function (resp) {
//     //          // if success delete all document
//     //          docs = docs.map(function (doc) {
//     //            doc._deleted = true;
//     //            return doc;
//     //          });
//     //          return _db.bulkDocs(docs)
//     //            .catch(function (err) {
//     //              // unable to remove documents from local db
//     //              console.log(err);
//     //            });
//     //        })
//     //        .then(function (res) {
//     //          if (res.ok) {
//     //            // notify the user of success
//     //          }
//     //        })
//     //        .catch(function (err) {
//     //          // server not found...
//     //          console.log(err);
//     //        });
//
//
//
//
//   //      });
//    //
//   //  }
//
//
//
//
//
//  });
