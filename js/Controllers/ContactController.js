// creating Angular Module
  var websiteApp = angular.module('Jirholm');

// app.controller('ContactController', function ($scope, $http) {
//     $scope.result = 'hidden'
//     $scope.resultMessage;
//     $scope.formData; //formData is an object holding the name, email, subject, and message
//     $scope.submitButtonDisabled = false;
//     $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
//     $scope.submit = function(submitForm) {
//         $scope.submitted = true;
//         $scope.submitButtonDisabled = true;
//         if (contactform.$valid) {
//             $http({
//                 method  : 'POST',
//                 url     : 'process.php',
//                 data    : $.param($scope.formData),  //param method from jQuery
//                 headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
//             }).success(function(data){
//                 console.log(data);
//                 if (data.success) { //success comes from the return json object
//                     $scope.submitButtonDisabled = true;
//                     $scope.resultMessage = data.message;
//                     $scope.result='bg-success';
//                 } else {
//                     $scope.submitButtonDisabled = false;
//                     $scope.resultMessage = data.message;
//                     $scope.result='bg-danger';
//                 }
//             });
//         } else {
//             $scope.submitButtonDisabled = false;
//             $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
//             $scope.result='bg-danger';
//         }
//     }
// });


  // create angular controller and pass in $scope and $http
  websiteApp.controller('ContactController',function($scope, $http) {
  // creating a blank object to hold our form information.
  //$scope will allow this to pass between controller and view
  $scope.formData = {};
  // submission message doesn't show when page loads
  $scope.submission = false;
  // Updated code thanks to Yotam
  var param = function(data) {
        var returnString = '';
        for (d in data){
            if (data.hasOwnProperty(d))
               returnString += d + '=' + data[d] + '&';
        }
        // Remove last ampersand and return
        return returnString.slice( 0, returnString.length - 1 );
  };
  $scope.submitForm = function() {
    $http({
    method : 'POST',
    url : 'process.php',
    data : param($scope.formData), // pass in data as strings
    headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
  })
    .success(function(data) {
      if (!data.success) {
       // if not successful, bind errors to error variables
       $scope.errorName = data.errors.name;
       $scope.errorEmail = data.errors.email;
       $scope.errorTextarea = data.errors.message;
       $scope.submissionMessage = data.messageError;
       $scope.submission = true; //shows the error message
      } else {
      // if successful, bind success message to message
       $scope.submissionMessage = data.messageSuccess;
       $scope.formData = {}; // form fields are emptied with this line
       $scope.submission = true; //shows the success message
      }
     });
   };
});