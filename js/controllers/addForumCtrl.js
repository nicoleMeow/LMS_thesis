angular.module('lmsApp')
.controller( 'addForumCtrl', ['$scope', 'Forum', 'Announcement', function($scope, Forum, Announcement) {

  $scope.theForum = Forum.getForum();
  $scope.theAnnounce = Announcement.getAncmnt();

  $scope.addForum = function(forum){
    console.log(forum);

    forum.timePosted = Math.floor(Date.now() / 1000);
    Forum.addForum(forum);


    $scope.forum = {titles:'', contents:''};

    // $scope.form_group.$setPristine;

    console.log("added");
  }

  $scope.theAnnounce = Announcement.getAncmnt();





}])
