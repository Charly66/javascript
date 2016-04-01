/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module("monModule", []);

app.controller("monControleur", ["$scope", function ($scope) {
        $scope.titre = "Coucou";
        $scope.contenu = "Trololololo";
        $scope.pied = "Au revoir";
        $scope.click = function (param){
          $scope.contenu="Contenu "+ param;  
        };
        
        $scope.date = new Date();
       $scope.films = [{titre:"KFP3", synopsis:"bla3"}, {titre:"KFP2", synopsis:"bla2"}, {titre:"KFP1", synopsis:"bla1"}];
        $scope.begin = 0;
        $scope.limit;
        
        $scope.gens = [
            
            {nom:'john', prenom:'john'},
            {nom:'john', prenom:'david'},
            {nom:'trublion', prenom:'john'},
            {nom:'ana', prenom:'nas'},
            {nom:'poulpe', prenom:'martin'},
            {nom:'fiotte', prenom:'puante'}
        ];
        
        $scope.precedent = function (){
            if($scope.begin===0){
                $scope.begin = 0;
            }else{
                $scope.begin = $scope.begin - $scope.limit;
            }
            
        };
        $scope.suivant = function (){
            if($scope.begin<$scope.films.length-$scope.limit){
            $scope.begin = $scope.begin + $scope.limit;
        }
        };
        
        $scope.pied= function (id){
            
            $scope.routepied = "pied"+id+".html";
        }
    
        
    }]);


