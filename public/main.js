'use strict';

var app = angular.module('main', ['ui.router']);

app.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});

app.controller('DashboardCtrl', function ($scope) {
  //code
  console.log('inside DashboardCtrl');
});

app.config(function ($stateProvider) {
  $stateProvider.state('dashboardState', {
    url: '/test',
    templateUrl: './app/dashboard/dashboard.html'
  });
});

app.controller('Explorer', function ($scope) {
  // Code to make the 'file holder div' take in
  // file path names
  var homedir = process.platform === 'win32' ? process.env.HOMEPATH : process.env.HOME;
  var shell = require('electron').shell;
  // var finder = require('./server/algorithms/search.js')
  var fs = require('fs');
  var path = require('path');
  var find = require('findit');
  var parseVideo = require('video-name-parser');

  //Button called "browse", opens homedirectory of user
  $scope.openHome = function () {
    return shell.showItemInFolder(homedir);
  };

  var holder = document.getElementById('fileholder');
  holder.ondragover = function () {
    this.className = 'hover';return false;
  };
  holder.ondragleave = function () {
    this.className = '';return false;
  };
  holder.ondrop = function (e) {
    e.preventDefault();
    for (var i = 0; i < e.dataTransfer.files.length; ++i) {
      console.log(e.dataTransfer.files[i].path);
    }
    var dataPath = e.dataTransfer.files[0].path;
    var finder = find(dataPath);

    finder.on('file', function (file, stat) {
      var showString = file.split('/');
      var temp = showString[showString.length - 1].split(".");
      if (vidExtensions.indexOf(temp[temp.length - 1]) !== -1) {
        soln.push(parseVideo(file));
      }
      console.log("Thank you for your patience!");
    });
    finder.on('end', function (file, stat) {
      console.log('soln', soln);
    });
    return false;
  };

  var vidExtensions = ['mkv', 'avi', 'mov', 'gifv', 'flv'];
  var soln = [];

  //  finder.setFinder(e.dataTransfer.files[i].path);
});

app.config(function ($stateProvider) {
  $stateProvider.state('explorerState', {
    url: '/',
    templateUrl: './app/explorer/explorer.html',
    controller: 'Explorer'
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImRhc2hib2FyZC9kYXNoYm9hcmQuY29udHJvbGxlci5qcyIsImRhc2hib2FyZC9kYXNoYm9hcmQuc3RhdGUuanMiLCJleHBsb3Jlci9leHBsb3Jlci5qcyIsImV4cGxvcmVyL2V4cGxvcmVyLnN0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBQSxHQUFBLEdBQUEsT0FBQSxDQUFBLE1BQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxDQUFBOztBQUVBLEdBQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxrQkFBQSxFQUFBO0FBQ0Esb0JBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7Q0FDQSxDQUFBLENBQUE7O0FDSkEsR0FBQSxDQUFBLFVBQUEsQ0FBQSxlQUFBLEVBQUEsVUFBQSxNQUFBLEVBQUE7O0FBRUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxzQkFBQSxDQUFBLENBQUE7Q0FDQSxDQUFBLENBQUE7O0FDSEEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxVQUFBLGNBQUEsRUFBQTtBQUNBLGdCQUFBLENBQUEsS0FBQSxDQUFBLGdCQUFBLEVBQUE7QUFDQSxPQUFBLEVBQUEsT0FBQTtBQUNBLGVBQUEsRUFBQSxnQ0FBQTtHQUNBLENBQUEsQ0FBQTtDQUNBLENBQUEsQ0FBQTs7QUNIQSxHQUFBLENBQUEsVUFBQSxDQUFBLFVBQUEsRUFBQSxVQUFBLE1BQUEsRUFBQTs7O0FBR0EsTUFBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLFFBQUEsS0FBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxRQUFBLEdBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUE7QUFDQSxNQUFBLEtBQUEsR0FBQSxPQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsS0FBQSxDQUFBOztBQUVBLE1BQUEsRUFBQSxHQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNBLE1BQUEsSUFBQSxHQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQTtBQUNBLE1BQUEsSUFBQSxHQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBLE1BQUEsVUFBQSxHQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUE7OztBQUlBLFFBQUEsQ0FBQSxRQUFBLEdBQUEsWUFBQTtBQUNBLFdBQUEsS0FBQSxDQUFBLGdCQUFBLENBQUEsT0FBQSxDQUFBLENBQUE7R0FDQSxDQUFBOztBQUVBLE1BQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxjQUFBLENBQUEsWUFBQSxDQUFBLENBQUE7QUFDQSxRQUFBLENBQUEsVUFBQSxHQUFBLFlBQUE7QUFBQSxRQUFBLENBQUEsU0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLEtBQUEsQ0FBQTtHQUFBLENBQUE7QUFDQSxRQUFBLENBQUEsV0FBQSxHQUFBLFlBQUE7QUFBQSxRQUFBLENBQUEsU0FBQSxHQUFBLEVBQUEsQ0FBQSxPQUFBLEtBQUEsQ0FBQTtHQUFBLENBQUE7QUFDQSxRQUFBLENBQUEsTUFBQSxHQUFBLFVBQUEsQ0FBQSxFQUFBO0FBQ0EsS0FBQSxDQUFBLGNBQUEsRUFBQSxDQUFBO0FBQ0EsU0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxZQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxFQUFBLENBQUEsRUFBQTtBQUNBLGFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7S0FDQTtBQUNBLFFBQUEsUUFBQSxHQUFBLENBQUEsQ0FBQSxZQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQTtBQUNBLFFBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTs7QUFFQSxVQUFBLENBQUEsRUFBQSxDQUFBLE1BQUEsRUFBQSxVQUFBLElBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQSxVQUFBLFVBQUEsR0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBO0FBQ0EsVUFBQSxJQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBO0FBQ0EsVUFBQSxhQUFBLENBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQSxZQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBO09BQ0E7QUFDQSxhQUFBLENBQUEsR0FBQSxDQUFBLDhCQUFBLENBQUEsQ0FBQTtLQUNBLENBQUEsQ0FBQTtBQUNBLFVBQUEsQ0FBQSxFQUFBLENBQUEsS0FBQSxFQUFBLFVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQTtBQUNBLGFBQUEsQ0FBQSxHQUFBLENBQUEsTUFBQSxFQUFBLElBQUEsQ0FBQSxDQUFBO0tBQ0EsQ0FBQSxDQUFBO0FBQ0EsV0FBQSxLQUFBLENBQUE7R0FDQSxDQUFBOztBQUlBLE1BQUEsYUFBQSxHQUFBLENBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBO0FBQ0EsTUFBQSxJQUFBLEdBQUEsRUFBQSxDQUFBOzs7Q0FLQSxDQUFBLENBQUE7O0FDcERBLEdBQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxjQUFBLEVBQUE7QUFDQSxnQkFBQSxDQUFBLEtBQUEsQ0FBQSxlQUFBLEVBQUE7QUFDQSxPQUFBLEVBQUEsR0FBQTtBQUNBLGVBQUEsRUFBQSw4QkFBQTtBQUNBLGNBQUEsRUFBQSxVQUFBO0dBQ0EsQ0FBQSxDQUFBO0NBQ0EsQ0FBQSxDQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ21haW4nLCBbJ3VpLnJvdXRlciddKTtcblxuYXBwLmNvbmZpZyhmdW5jdGlvbigkdXJsUm91dGVyUHJvdmlkZXIpe1xuXHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59KVxuIiwiYXBwLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZEN0cmwnLCBmdW5jdGlvbigkc2NvcGUpe1xuICAvL2NvZGVcbiAgY29uc29sZS5sb2coJ2luc2lkZSBEYXNoYm9hcmRDdHJsJylcbn0pXG4iLCJhcHAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKXtcbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2Rhc2hib2FyZFN0YXRlJywge1xuICAgIHVybDogJy90ZXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCdcbiAgfSlcbn0pXG4iLCJcblxuYXBwLmNvbnRyb2xsZXIoJ0V4cGxvcmVyJywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICAgLy8gQ29kZSB0byBtYWtlIHRoZSAnZmlsZSBob2xkZXIgZGl2JyB0YWtlIGluXG4gICAgICAvLyBmaWxlIHBhdGggbmFtZXNcbiAgICAgIHZhciBob21lZGlyID0gKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpID8gcHJvY2Vzcy5lbnYuSE9NRVBBVEggOiBwcm9jZXNzLmVudi5IT01FO1xuICAgICAgY29uc3Qgc2hlbGwgPSByZXF1aXJlKCdlbGVjdHJvbicpLnNoZWxsO1xuICAgICAgLy8gdmFyIGZpbmRlciA9IHJlcXVpcmUoJy4vc2VydmVyL2FsZ29yaXRobXMvc2VhcmNoLmpzJylcbiAgICAgIHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgICB2YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbiAgICAgIHZhciBmaW5kID0gcmVxdWlyZSgnZmluZGl0Jyk7XG4gICAgICB2YXIgcGFyc2VWaWRlbyA9IHJlcXVpcmUoJ3ZpZGVvLW5hbWUtcGFyc2VyJyk7XG5cblxuICAgICAgLy9CdXR0b24gY2FsbGVkIFwiYnJvd3NlXCIsIG9wZW5zIGhvbWVkaXJlY3Rvcnkgb2YgdXNlclxuICAgICAgJHNjb3BlLm9wZW5Ib21lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2hlbGwuc2hvd0l0ZW1JbkZvbGRlcihob21lZGlyKTtcbiAgICAgIH1cblxuICAgICAgIHZhciBob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZWhvbGRlcicpO1xuICAgICAgIGhvbGRlci5vbmRyYWdvdmVyID0gZnVuY3Rpb24gKCkgeyB0aGlzLmNsYXNzTmFtZSA9ICdob3Zlcic7IHJldHVybiBmYWxzZTsgfTtcbiAgICAgICBob2xkZXIub25kcmFnbGVhdmUgPSBmdW5jdGlvbiAoKSB7IHRoaXMuY2xhc3NOYW1lID0gJyc7IHJldHVybiBmYWxzZTsgfTtcbiAgICAgICBob2xkZXIub25kcm9wID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgY29uc29sZS5sb2coZS5kYXRhVHJhbnNmZXIuZmlsZXNbaV0ucGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRhdGFQYXRoID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF0ucGF0aDtcbiAgICAgICAgdmFyIGZpbmRlciA9IGZpbmQoZGF0YVBhdGgpO1xuXG4gICAgICBmaW5kZXIub24oJ2ZpbGUnLCBmdW5jdGlvbiAoZmlsZSwgc3RhdCkge1xuICAgICAgICAgICB2YXIgc2hvd1N0cmluZyA9IGZpbGUuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgdmFyIHRlbXAgPSBzaG93U3RyaW5nW3Nob3dTdHJpbmcubGVuZ3RoIC0gMV0uc3BsaXQoXCIuXCIpO1xuICAgICAgICAgICAgaWYgKHZpZEV4dGVuc2lvbnMuaW5kZXhPZih0ZW1wW3RlbXAubGVuZ3RoIC0gMV0pICE9PSAtMSkge1xuICAgICAgICAgICAgICBzb2xuLnB1c2gocGFyc2VWaWRlbyhmaWxlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoYW5rIHlvdSBmb3IgeW91ciBwYXRpZW5jZSFcIik7XG4gICAgICAgICB9KVxuICAgICAgZmluZGVyLm9uKCdlbmQnLCBmdW5jdGlvbiAoZmlsZSwgc3RhdCkge1xuICAgICAgICAgICBjb25zb2xlLmxvZygnc29sbicsIHNvbG4pXG4gICAgICAgICB9KVxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgIH07XG5cblxuXG4gICAgICAgdmFyIHZpZEV4dGVuc2lvbnMgPSBbJ21rdicsICdhdmknLCAnbW92JywgJ2dpZnYnLCAnZmx2J107XG4gICAgICAgdmFyIHNvbG4gPSBbXTtcblxuICAgICAgLy8gIGZpbmRlci5zZXRGaW5kZXIoZS5kYXRhVHJhbnNmZXIuZmlsZXNbaV0ucGF0aCk7XG5cblxufSk7XG4iLCJhcHAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyKXtcbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2V4cGxvcmVyU3RhdGUnLCB7XG4gICAgdXJsOiAnLycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9leHBsb3Jlci9leHBsb3Jlci5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnRXhwbG9yZXInXG4gIH0pXG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
