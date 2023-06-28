const api = 'https://covid19.mathdro.id/api';

let app = angular.module("MyApp",[]);
app.controller("MyCtrl",($scope,$http)=>{
    $scope.title = "Stay home stay safe";
    $scope.changeValue = ()=>{
        $scope.title = "This is home time";
    }

    $http.get(api).then((response)=>{
        console.log(response.data);
        $scope.all_data = response.data;
    },
    (error)=>{
        console.log(error);
    })
});