!function(e){var t=e.module("moviecat_moviecatlist",["ngRoute","heima"]);t.config(["$routeProvider",function(e){e.when("/:moviecatType/:page?",{templateUrl:"./moviecatlist/moviecatlist.html",controller:"moviecatlistCtrl"})}]),t.controller("moviecatlistCtrl",["$scope","$routeParams","$route","$window","jsonp",function(e,t,a,o,i){e.pageIndex=+(t.page||"1"),e.pageSize=10,i({url:"http://api.douban.com/v2/movie/"+t.moviecatType,params:{count:e.pageSize,start:(e.pageIndex-1)*e.pageSize,q:t.q},callback:function(t){console.log(t),e.movies=t,e.pageCount=o.Math.ceil(t.total/e.pageSize),e.isshow=!1,e.$apply()}}),e.getPage=function(t){t<1||t>e.pageCount||a.updateParams({page:t})}}])}(angular);