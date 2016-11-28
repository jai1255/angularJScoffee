var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope){

            $scope.ict=null;
            $scope.hct=null;
            $scope.love=null;
            $scope.kiss=null;
            $scope.chris=null;
            $scope.hima=null;
            $scope.finalprice=function(){
          	$scope.result=$scope.ict*3.19 +$scope.hct*2.89+$scope.love*3.89+$scope.kiss*4.19+$scope.chris*3.99+$scope.hima*2.69;

         }



});