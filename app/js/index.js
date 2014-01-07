var AB = angular.module('AddressBook',[]);

AB.controller('AddressBookCtrl', function($scope){

  $scope.addresses = [
    {
      name: "John",
      surname: "Doe", 
      phoneNumber: "1234-56-78", 
      group: "admins"
    },
    {
      name: "Barak",
      surname: "Obama", 
      phoneNumber: "XXX", 
      group: "presidents"
    }
  ]

  $scope.addAddress = function(){
    $scope.addresses.push(angular.copy($scope.newAddress));
    $scope.newAddress = '';
  }

  $scope.deleteAddress = function(index){
    $scope.addresses.splice(index, 1);
  }

})