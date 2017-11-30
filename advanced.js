var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function ($scope) {
   $scope.addMe = {};
   $scope.boutiques = [];
   $scope.siteBoutiques = [{
      "img": "1.jpg"
      , "brnad": "Puma"
      , "id": "1"
      , "title": "بوتیک مردانه"
 }, {
      "img": "2.jpg"
      , "brnad": "Adidas"
      , "id": "2"
      , "title": "بوتیک آدیداس"
 }, {
      "img": "3.jpg"
      , "brnad": "Bambi"
      , "id": "3"
      , "title": "بوتیک کفش"
 }, {
      "img": "4.jpg"
      , "brnad": "Bambi"
      , "id": "4"
      , "title": "بوتیک کفش"
 }, {
      "img": "5.jpg"
      , "brnad": "Bambi"
      , "id": "5"
      , "title": "بوتیک کفش"
 }, {
      "img": "6.jpg"
      , "brnad": "Bambi"
      , "id": "6"
      , "title": "بوتیک کفش"
 }];
   $scope.addItem = function (index) { 
       $scope.errortext = "";       
        if ($scope.boutiques.indexOf($scope.siteBoutiques[index]) == -1) {
            $scope.boutiques.push($scope.siteBoutiques[index]);
        } else {
            $scope.errortext = "The item is already in your list.";
        } 
   }
   
    $scope.addSelectedItem = function () {   
      $scope.boutiques.push(angular.copy($scope.addMe )); 
   }
      
   $scope.removeItem = function (x) {
      $scope.errortext = "";
      $scope.boutiques.splice(x, 1);
   }
});