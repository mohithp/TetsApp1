
app.controller('myCtrl',function($scope){
		$scope.fname="Mohith";
		$scope.lname="Pariyaram";
		$scope.qty=2;
		$scope.rt=5;
		$scope.names=[{name:"Rahul",country:"India"},{name:"Bibin",country:"India"},{name:"Anil",country:"India"}];
		$scope.ChangeName=function(){
			$scope.fname="Udma";
		}
	});

app.directive("myDirective",function(){
		return {
        template : "Hello Angular"
    };
	});
