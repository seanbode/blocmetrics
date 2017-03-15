(function() {
  function Metric($rootScope) {
    $rootScope.songPlays = [];

    return {
      // Function that records a metric object by pushing it to the $rootScope array
      registerSongPlay: function(songObj) {
        // Add time to event register// moment.js
        if (songObj != undefined) {
          songObj['playedAt'] = new Date()
        };
        $rootScope.songPlays.push(songObj);

      },
      listSongsPlayed: function() {
        var songs = [];
        angular.forEach($rootScope.songPlays, function(song) {
            songs.push(song.title);
        });
        return songs;
      }
    };
  }

angular
    .module('blocJams')
    .controller('MetricController', function ($scope, $rootScope, Metric) {
      $scope.metric = Metric
      $scope.buttonCallback = function() {
        alert("button clicked");
        Metrics.listSongsPlayed()
      };
    })
    .service('Metric', ['$rootScope', Metric]);
})();
