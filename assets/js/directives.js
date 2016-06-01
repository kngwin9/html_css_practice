app.directive("instructions", function(){
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            type: '=',
            lfzTitle: '=',
            description: '=',
            projects: '=',
            branch: '=',
            repoName: '=',
            repoNameString: '@',
            links: '=',
            demo: '=',
            view: '='
        },
        templateUrl: function(elem, attrs){
            switch(attrs.type){
                case 'a':
                case 'A':
                    return "assets/templates/instructionTemplateA.html";
                    break;
                case 'b':
                case 'B':
                    return "assets/templates/instructionTemplateB.html";
                    break;
                case 'c':
                case 'C':
                    return "assets/templates/instructionTemplateC.html";
                    break;
                case 'r':
                case 'R':
                    return "assets/templates/instructionTemplateR.html";
                    break;
                case 'r2':
                case 'R2':
                    return "assets/templates/instructionTemplateR2.html";
                    break;
                case 'pr':
                case 'PR':
                    return "assets/templates/instructionTemplateProjectR.html";
                    break;
                case 'pr2':
                case 'PR2':
                    console.log("PR2 Loaded!");
                    return "assets/templates/instructionTemplateProjectR2.html";
                    break;
                default:
                    return "assets/templates/instructionTemplateB.html";
            }

        },
        link: function(scope, element){

            if(typeof scope.repoName == 'undefined' && typeof scope.repoNameString != 'undefined'){
                scope.repoName = scope.repoNameString;
                console.log("Repo name reset to:", scope.repoName);
            }

            scope.map = {17: false, 18: false, 90: false};

            $('body').on("keydown", function(e){
                if(e.which in scope.map){
                    scope.map[e.which] = true;
                    if(scope.map[17] && scope.map[18] && scope.map[90]){
                        scope.$apply(function(){
                            scope.view = !scope.view;
                        });
                    }
                }
            }).on("keyup", function(e){
                if(e.which in scope.map){
                    scope.map[e.which] = false;
                }
            });
        }
    }
});