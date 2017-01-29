var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(['$routeProvider','$locationProvider',
 function($routeProvider, $locationProvider){

   $routeProvider
   .when('/home', {
     templateUrl: 'content/home.html',
     controller: 'appController'
   })
   .when('/contact', {
     templateUrl: 'content/contact.html',
     controller: 'contactController'

   })
   .when('/contact-success', {
     templateUrl: 'content/contact-success.html',
     controller: 'contactController'

   })
   .when('/directory', {
     templateUrl: 'content/directory.html',
     controller: 'appController'
   }).otherwise({
     redirectTo: '/home'
   });
   $locationProvider.html5Mode(true);
}]);

myApp.directive('randomNinja', [function(){
  return {
    restrict:'E',
    scope: {
      ninjas: '=',
      title: '='
  },
  templateUrl: 'content/random.html',
  controller: function($scope){
    $scope.random = Math.floor(Math.random()*5);
  },
};

}]);

myApp.run(function(){

});

myApp.controller('appController', ['$scope', '$http', function($scope, $http){

$scope.ninjas = [];
$http.get('content/data/ninja.json').then(function(response){
    $scope.ninjas = response.data.records;
  });


    $scope.removeNinja = function(ninja){
     var removedNinjas = $scope.ninjas.indexOf(ninja);
     $scope.ninjas.splice(removedNinjas, 1);
   };

   $scope.addNinja = function(){
     $scope.ninjas.push({
       name: $scope.newNinja.name,
       belt: $scope.newNinja.belt,
       rate: parseInt($scope.newNinja.rate),
       avialable: true
     });

     $scope.newNinja.name ='';
     $scope.newNinja.belt ='';
     $scope.newNinja.rate ='';
   };



 }]);

myApp.controller('contactController', ['$scope', '$location', function($scope, $location){
$scope.sendMessage=function(){
  $location.path('/contact-success');
}

}]);
