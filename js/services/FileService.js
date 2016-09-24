
angular.module('lmsApp')

.factory('File', [function () {

  var file,
      storageRef,
      task,
      dl_URL;

  function getFile(aFile) {
    file = aFile;
    console.log(file);
  }

  function setStorage(path, filename) {
    storageRef = firebase.storage().ref(path + filename);
    console.log(path);
  }


  function upload() {
    task = storageRef.put(file);
    return task;
  }

  function progress(snapshot) {
    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    return percentage;
  }

  function getURL() {
    return storageRef.getDownloadURL();
  }

  return{
    getFile: getFile,
    setStorage: setStorage,
    upload: upload,
    progress: progress,
    getURL:getURL
  }




//   var uploadTask = storageRef.child('images/rivers.jpg').put(file);
//
// // Register three observers:
// // 1. 'state_changed' observer, called any time the state changes
// // 2. Error observer, called on failure
// // 3. Completion observer, called on successful completion
// uploadTask.on('state_changed', function(snapshot){
//   // Observe state change events such as progress, pause, and resume
//   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//   console.log('Upload is ' + progress + '% done');
//   switch (snapshot.state) {
//     case firebase.storage.TaskState.PAUSED: // or 'paused'
//       console.log('Upload is paused');
//       break;
//     case firebase.storage.TaskState.RUNNING: // or 'running'
//       console.log('Upload is running');
//       break;
//   }
// }, function(error) {
//   // Handle unsuccessful uploads
// }, function() {
//   // Handle successful uploads on complete
//   // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//   var downloadURL = uploadTask.snapshot.downloadURL;
// });


}]);
