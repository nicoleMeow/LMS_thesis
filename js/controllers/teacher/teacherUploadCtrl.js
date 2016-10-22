angular.module('lmsApp')
  .controller('teacherUploadsCtrl', ['$scope', '$location', 'File', '$firebaseArray', '$routeParams',function($scope, $location, File, $firebaseArray, $routeParams){

    $scope.classID = $routeParams.id;

    $scope.uploads = getResources();
    function getResources(){
      var currentTeacher = firebase.auth().currentUser.uid;
      var ref = firebase.database().ref('users/' + currentTeacher + "/classFiles");


      return $firebaseArray(ref);
    }


}])
