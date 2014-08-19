var app = angular.module('myapp',[]);
app.controller('SlideCtrl',function($scope, $sce,$http){

	 angular.element(document).ready(function () {
        impress().init();
    });

	 $scope.to_html = function(html_code,index) {
        var x;
        var ishome = false;
        if(index === 0){
          ishome = true; 
        }
        if(!ishome){
        x= '<a href="#home" class="moveright"><img src="images/home.jpg" class="smimg"></a>' + html_code;
    }else{
        x=html_code;
    }
             return $sce.trustAsHtml(x);
    };
    $scope.getDataz=function(index){
        var x = parseInt(index%6);
        return x*3000;

    };
    $scope.getRotateX=function(index){
         var x = (index%2) * 0;
         var y =""+x;
        return y;
    };

      $scope.getRotateZ=function(index){
         var x = (index%2) *index *  0;
         var y =""+x;
        return y;
    };
	$scope.getRotateY=function(index){

        /*var x = (index%2) *index *  45;
         var y =""+x;
        return y;*/

	
		if(index%2 == 0){
			return "0";
		}else{
			return "0";
		}
        /*var x =Math.random()*100;

        return ""+parseInt(x);*/
	};
	$scope.getDataX=function(index){
		var x = index%6;
		return (x*5000);
	
	};
	$scope.getDataY=function(index){
		
		var x = parseInt(index/6);
        var y=x*8000;
        if(index%2 == 0){
            return 4000 + y;
        }else{
            return y;
        }


		//return x*4000;
	};

    $scope.introductionSlides = [{
                id:'home',
                content:'<h1 class="heading2">CA2 Store</h1>'+
                '<div class="lnk"><h1> <a href="consumeStore.html" target="_blank">How to Consume Store</a></h1></div>'+
                 '<div class="lnk"><h1> <a href="publishToStore.html" target="_blank" >Publish to Store</a></h1></div>'+
                 '<div class="lnk"> <h1> <a href="ReferenceApps.html" target="_blank" >Reference Apps</a></h1></div>'+
                '<div class="footer"><hr><h1><a href="http://ca2appstore/login.html" target="_blank">http://ca2appstore/login.html</a></h1><div>',
                scale:5,
                rotatex:0,
                rotatez:0,
                datax:0,
                datay:1000,
                rotatey:0,
               
                clazz:'app1'

            },
            {
                id:'spa',
                content:'<iframe src="http://ca2appstore/login.html" height="90%" width="100%"></iframe>',
                scale:4,
                rotatex:0,
                rotatez:0,
                clazz:'app5'
            },
            {
                id:'reference',
                content:'<h1>Reference Apps</h1>'+
                        '<h1>Reference apps for common business applications</h1>'+
                        '<img src="images/refApp.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },{
                id:'ct',
                content:'<h1>Code Templates</h1>'+
                '<img src="images/codeTemplates.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'business',
                content:'<h1>Business Accelarators</h1>'+
                '</br>'+
                '</br>'+
                '</br>'+
                '<img class="img" src="images/BusinessAcc/Hi5 Studio Logo.jpg" alt="Hi5 Flyer" class="img-thumbnail">'+
                '<img class="img" src="images/BusinessAcc/Picaso_Logo.png" alt="Picaso Flyer" class="img-thumbnail">'+
                '<img class="img" src="images/BusinessAcc/Logo.png" alt="IView Flyer" class="img-thumbnail">',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            }];

    $scope.storeConsumptionSlides=[{
                id:'home',
                 content:'<h1 class="heading2">CA2 Store</h1>'+
                '<div class="lnk"><h1> <a href="index.html" target="_blank">Introduction</a></h1></div>'+
                 '<div class="lnk"><h1> <a href="publishToStore.html" target="_blank" >Publish to Store</a></h1></div>'+
                 '<div class="lnk"> <h1> <a href="ReferenceApps.html" target="_blank" >Reference Apps</a></h1></div>'+
                '<div class="footer"><hr><h1><a href="http://ca2appstore/login.html" target="_blank">http://ca2appstore/login.html</a></h1><div>',
                scale:5,
                rotatex:0,
                rotatez:0,
                datax:0,
                datay:1000,
                rotatey:0,
               
                clazz:'app1'

            },{
                id:'HowToStore',
                content:'</br></br></br></br><h1>How to Use Store?</h1>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'

            },
            {
                id:'storeLogin',
                content:'<h1>CA2 App Store Login</h1>'+
                '<img src="images/1.png" height="90%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'storeHomePage',
                content:'<h1 >Store Home Page</h1>'+
                '<img src="images/2.png" height="90%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'refApps',
                content:'<h1 >Reference Apps</h1>'+
                '<img src="images/3.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'healthCare',
                content:'<h1 >Health Care Ref App</h1>'+
                '<img src="images/3.1.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'healthCareAppDetails',
                content:'<h1 >Health Care App Details</h1>'+
                '<img src="images/5.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'installHealthCare',
                content:'<h1 >Install Health Care App</h1>'+
                '<img src="images/5.1.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'ca2Login',
                content:'<h1 >Login to CA2</h1>'+
                '<img src="images/6.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'ca2AssetLogin',
                content:'<h1 >Import Installed Asset to CA2</h1>'+
                '<img src="images/7.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'importAssetFromStore',
                content:'<h1 >Import Installed Asset to CA2</h1>'+
                '<img src="images/8.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'openAssetAsProject',
                content:'<h1 >Import Health Care Sample Asset</h1>'+
                '<img src="images/9.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
           {
                id:'openAssetAsProject1',
                content:'<h1 >Import Health Care Sample Asset</h1>'+
                '<img src="images/10.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'generateCode',
                content:'<h1  >Initate Code Generation</h1>'+
                '<img src="images/11.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'generateCode1',
                content:'<h1  >Initate Code Generation</h1>'+
                '<img src="images/12.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'healthCareGenApp',
                content:'<h1  >Generate Health Care App</h1>'+
                '<img src="images/13.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            }];

    $scope.referenceAppSlides = [{
                id:'home',
                 content:'<h1 class="heading2">CA2 Store</h1>'+
                '<div class="lnk"><h1> <a href="index.html" target="_blank">Introduction</a></h1></div>'+
                 '<div class="lnk"><h1> <a href="publishToStore.html" target="_blank" >Publish to Store</a></h1></div>'+
                 '<div class="lnk"> <h1> <a href="consumeStore.html" target="_blank" >How to Consume Store</a></h1></div>'+
                '<div class="footer"><hr><h1><a href="http://ca2appstore/login.html" target="_blank">http://ca2appstore/login.html</a></h1><div>',
                scale:5,
                rotatex:0,
                rotatez:0,
                datax:0,
                datay:1000,
                rotatey:0,
               
                clazz:'app1'

            },{
                id:'referenceApps',
                content:'<h1>Reference Apps</h1>'+
                        '<h1>Reference apps for common business applications</h1>'+
                        '<img src="images/refApp.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },{
                id:'demo',
                content:'<h1>Smart Shoppe</h1><div ><iframe  src="https://ca2apps.cognizant.com/SmartShoppe/PostWelcomeEC.do" height="90%" width="100%"></iframe></div>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'spademo',
                content:' <h1>SPA Demo</h1><iframe src="https://ca2apps.cognizant.com/SPADemo" height="90%" width="100%"></iframe>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'spaFeatures',
                content:'<h1>SPA Features</h1><iframe src="https://ca2apps.cognizant.com/spaFeatures" height="90%" width="100%"></iframe>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'healthcare',
                content:' <h1>SPA Health Care</h1><iframe src="https://ca2apps.cognizant.com/Siemens" height="90%" width="100%"></iframe>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'travelocity',
                content:' <h1>Java Travelocity</h1><iframe src="https://ca2apps.cognizant.com/travelocity" height="90%" width="100%"></iframe>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
             {
                id:'ntbank',
                content:'  <h1>Java NT Bank</h1><iframe src="https://ca2apps.cognizant.com/ntBank" height="90%" width="100%"></iframe>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            }];
    $scope.publishSlides = [{
                id:'home',
                content:'<h1 class="heading2">CA2 Store</h1>'+
                '<div class="lnk"><h1> <a href="index.html" target="_blank">Introduction</a></h1></div>'+                 
                 '<div class="lnk"> <h1> <a href="consumeStore.html" target="_blank" >How to Consume Store</a></h1></div>'+
                 '<div class="lnk"><h1> <a href="ReferenceApps.html" target="_blank" >Reference Apps</a></h1></div>'+
                '<div class="footer"><hr><h1><a href="http://ca2appstore/login.html" target="_blank">http://ca2appstore/login.html</a></h1><div>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                datax:0,
                datay:1000,
                rotatey:0,
               
                clazz:'app1'

            },{
                id:'refAppPublish',
                content:'<h1>Reference App Publish</h1>'+
                        '<img src="images/ReferenceAppPublish/1.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'storePublishScreen',
                content:'<h1>Store Publish Screen</h1>'+
                        '<img src="images/ReferenceAppPublish/2.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'storePublishTravelApp',
                content:'<h1>Publish Reference App to Store</h1>'+
                        '<img src="images/ReferenceAppPublish/3.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'publish',
                content:'<h1>Publish Reference App to Store</h1>'+
                        '<img src="images/ReferenceAppPublish/4.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'publish1',
                content:'<h1>Publish Reference App to Store</h1>'+
                        '<img src="images/ReferenceAppPublish/5.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'publishSuccess',
                content:'<h1>Asset Published to store</h1>'+
                        '<img src="images/ReferenceAppPublish/6.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'travelApp',
                content:'<h1>Travel App in store</h1>'+
                        '<img src="images/ReferenceAppPublish/7.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },{
                id:'travelApp1',
                content:'<h1>Travel App in store</h1>'+
                        '<img src="images/ReferenceAppPublish/8.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            }];


             $scope.codeTemplatePublishSlides = [{
                id:'home',
                content:'<h1 class="heading2">CA2 Store</h1> <h1><a href="http://ca2appstore/login.html" target="_blank">http://ca2appstore/login.html</a></h1>'+
                '<h1> <a href="consumeStore.html" target="_blank">How to Consume Store</a></h1> <h1> <a href="publishToStore.html" target="_blank" >Publish to Store</a></h1> <h1> <a href="ReferenceApps.html" target="_blank" >Reference Apps</a></h1>',
                scale:5,
                rotatex:0,
                rotatez:0,
                datax:0,
                datay:1000,
                rotatey:0,
               
                clazz:'app1'

            },{
                id:'codeTemplatePublish',
                content:'<h1>Code Template App Publish</h1>'+
                        '<img src="images/codeTemplate/1.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'publishScreen',
                content:'<h1>Store Publish Screen</h1>'+
                        '<img src="images/codeTemplate/2.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'storePublishCodeTemp',
                content:'<h1>Publish Reference App to Store</h1>'+
                        '<img src="images/codeTemplate/3.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'publishCT',
                content:'<h1>Publish Reference App to Store</h1>'+
                        '<img src="images/codeTemplate/4.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'publishCT1',
                content:'<h1>Publish Reference App to Store</h1>'+
                        '<img src="images/codeTemplate/5.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'publishCTSuccess',
                content:'<h1>Asset Published to store</h1>'+
                        '<img src="images/codeTemplate/6.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'travelApp',
                content:'<h1>Travel App in store</h1>'+
                        '<img src="images/codeTemplate/7.png" height="85%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            }];





	 $scope.slides = [{
                id:'introduction',
                content:'<h1>CA2 Store</h1> <h1><a href="http://ca2appstore/login.html" target="_blank">http://ca2appstore/login.html</a></h1>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'

            },
            {
                id:'spa',
                content:'<h1>What is Store?</h1><iframe src="http://ca2appstore/login.html" height="90%" width="100%"></iframe>',
                scale:4,
                rotatex:0,
                rotatez:0,
                clazz:'app5'
            },
            {
                id:'reference',
                content:'<h1>Reference Apps</h1>'+
                        '</br>'+
                        '<h1>Reference apps for common business applications</h1>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'demo',
                content:'<h1>Smart Shoppe</h1><div ><iframe  src="https://ca2apps.cognizant.com/SmartShoppe/PostWelcomeEC.do" height="90%" width="100%"></iframe></div>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'spademo',
                content:' <h1>SPA Demo</h1><iframe src="https://ca2apps.cognizant.com/SPADemo" height="90%" width="100%"></iframe>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'spaFeatures',
                content:'<h1>SPA Features</h1><iframe src="https://ca2apps.cognizant.com/spaFeatures" height="90%" width="100%"></iframe>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'healthcare',
                content:' <h1>SPA Health Care</h1><iframe src="https://ca2apps.cognizant.com/Siemens" height="90%" width="100%"></iframe>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'travelocity',
                content:' <h1>Java Travelocity</h1><iframe src="https://ca2apps.cognizant.com/travelocity" height="90%" width="100%"></iframe>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
             {
                id:'ntbank',
                content:'  <h1>Java NT Bank</h1><iframe src="https://ca2apps.cognizant.com/ntBank" height="90%" width="100%"></iframe>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'ct',
                content:'<h1>Code Templates</h1>'+
                '<img src="images/codeTemplates.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'business',
                content:'<h1>Business Accelarators</h1>'+
                '</br>'+
                '</br>'+
                '</br>'+
                '<img class="img" src="images/BusinessAcc/Hi5 Studio Logo.jpg" alt="Hi5 Flyer" class="img-thumbnail">'+
                '<img class="img" src="images/BusinessAcc/Picaso_Logo.png" alt="Picaso Flyer" class="img-thumbnail">'+
                '<img class="img" src="images/BusinessAcc/Logo.png" alt="IView Flyer" class="img-thumbnail">',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'iview',
                content:'<h1>IView</h1><img src="images/iview.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'HowToStore',
                content:'</br></br></br></br><h1>How to Use Store?</h1>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'

            },
            {
                id:'storeLogin',
                content:'<h1>CA2 App Store Login</h1>'+
                '<img src="images/1.png" height="90%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'storeHomePage',
                content:'<h1 >Store Home Page</h1>'+
                '<img src="images/2.png" height="90%" width="90%"/>',
                scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'refApps',
                content:'<h1 >Reference Apps</h1>'+
                '<img src="images/3.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'healthCare',
                content:'<h1 >Health Care Ref App</h1>'+
                '<img src="images/3.1.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'healthCareAppDetails',
                content:'<h1 >Health Care App Details</h1>'+
                '<img src="images/5.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'installHealthCare',
                content:'<h1 >Install Health Care App</h1>'+
                '<img src="images/5.1.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'ca2Login',
                content:'<h1 >Login to CA2</h1>'+
                '<img src="images/6.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'ca2AssetLogin',
                content:'<h1 >Import Installed Asset to CA2</h1>'+
                '<img src="images/7.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'importAssetFromStore',
                content:'<h1 >Import Installed Asset to CA2</h1>'+
                '<img src="images/8.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'openAssetAsProject',
                content:'<h1 >Import Health Care Sample Asset</h1>'+
                '<img src="images/9.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
           {
                id:'openAssetAsProject1',
                content:'<h1 >Import Health Care Sample Asset</h1>'+
                '<img src="images/10.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'generateCode',
                content:'<h1  >Initate Code Generation</h1>'+
                '<img src="images/11.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'generateCode1',
                content:'<h1  >Initate Code Generation</h1>'+
                '<img src="images/12.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },
            {
                id:'healthCareGenApp',
                content:'<h1  >Generate Health Care App</h1>'+
                '<img src="images/13.png" height="90%" width="90%"/>',
                 scale:5,
                rotatex:0,
                rotatez:0,
                clazz:'app1'
            },

            ];


           

});	





