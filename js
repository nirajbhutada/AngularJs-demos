var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
		$scope.count = 0;
		$scope.myVar = false;
		$scope.toggle = function() {
		        $scope.myVar = !$scope.myVar;
		    }
	    $scope.firstName = "Niraj";
	    $scope.lastName = "Bhutada";
	    $scope.value = "1";
	     return $scope.firstName + " " + $scope.lastName;
	});
$(document).on("click","#hide-btn, #show-btn", function(e){
			$(this).parent().find("button.hide").removeClass("hide");
			$(this).addClass("hide");
		});

