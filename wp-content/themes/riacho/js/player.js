/* TODO
- embed de outros players?
- integrar events (play, pause)...
- botar progressbar redonda
- botão de volume
- qualidade default do som?
- deve passar automaticamente
*/


// MixCloud API from view-source:https://widget.mixcloud.com/media/js/widgetApi.js
// TODO remove from here and start to load from Mixcloud servers (functions.php)
!function(){var e=window.Mixcloud,n={noConflict:function(){return window.Mixcloud=e,n}};window.Mixcloud=n}(),window.Mixcloud.Callbacks=function(){var e=[];return{apply:function(n,t){for(var o=0;o<e.length;o++)e[o].apply(n,t)},external:{on:function(n){e.push(n)},off:function(n){for(var t=0;t<e.length;t++)if(e[t]===n){e.splice(t,1);break}}}}},function(){function e(e,n){return(typeof e)[0]===n}var n=1,t=2;window.Mixcloud.Deferred=function(){function o(e){i(n,e)}function r(e){i(t,e)}function i(t,i){if(!l){if(s.resolve=s.reject=function(){},t===n){if(i===s.promise)return void r(new TypeError);if(i instanceof u)return void i.then(o,r);if(e(i,"f")||e(i,"o")){var a;try{a=i.then}catch(d){return void r(d)}if(e(a,"f")){try{a.call(i,o,r)}catch(d){l||r(d)}return}}}f=i,l=t,c()}}function c(){setTimeout(function(){for(var e=0;e<d.length;e++)d[e][l-1].call(void 0,f);d=[]},0)}function a(n,t){function o(e){return function(n){try{r.resolve(e.call(this,n))}catch(t){r.reject(t)}}}var r=window.Mixcloud.Deferred();return d.push([e(n,"f")?o(n):function(e){r.resolve(e)},e(t,"f")?o(t):function(e){r.reject(e)}]),l&&c(),r.promise}function u(){this.then=a}var f,d=[],l=0,s={resolve:o,reject:r,promise:new u};return s}}(),function(e){function n(n){if(n.origin===o||n.origin===e.location.origin){var t;try{t=JSON.parse(n.data)}catch(r){return}if("playerWidget"===t.mixcloud)for(var c=0;c<i.length;c++)i[c].window===n.source&&i[c].callback(t.type,t.data)}}function t(e,n){e.postMessage(JSON.stringify(n),o)}var o="https://www.mixcloud.com",r=0,i=[];e.Mixcloud.PlayerWidget=function(n){function o(e,n){"ready"===e?t(u,{type:"getApi"}):"api"===e?c(n):"event"===e?d[n.eventName].apply(s,n.args):"methodResponse"===e&&l[n.methodId]&&(l[n.methodId].resolve(n.value),delete l[n.methodId])}function c(n){var t;for(t=0;t<n.methods.length;t++)s[n.methods[t]]=a(n.methods[t]);for(t=0;t<n.events.length;t++)d[n.events[t]]=e.Mixcloud.Callbacks(),s.events[n.events[t]]=d[n.events[t]].external;f.resolve(s)}function a(n){return function(){return r++,l[r]=e.Mixcloud.Deferred(),t(u,{type:"method",data:{methodId:r,methodName:n,args:Array.prototype.slice.call(arguments)}}),l[r].promise}}var u=n.contentWindow,f=e.Mixcloud.Deferred(),d={},l={},s={ready:f.promise,events:{}};return i.push({window:u,callback:o}),t(u,{type:"getApi"}),s},e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n)}(window);

jQuery(document).ready(function($) {


var ytplayer,
    time_update_interval = 0;

var player = {
    playlist: [],
    playlist_index: 0,
    volume: 100,
    isPlaying: true,
    addToPlaylist: function(audio){
      this.playlist.push(audio);
    },
    nextVideo: function(){
      this.playlist_index = (this.playlist_index + 1) % this.playlist.length;
      this.play();
    },
    previousVideo: function(){
      this.playlist_index = (this.playlist_index - 1) % this.playlist.length;
      this.play();
    },
    play: function(){
      player.isPlaying = true;
      switch(this.playlist[this.playlist_index].service){ // current player. = soundcloud, mixcloud, youtube
        case 'youtube':
          ytplayer.loadVideoById(this.playlist[this.playlist_index].url);
          break;
        case 'soundcloud':
          break;
        case 'mixcloud':
          var widget = Mixcloud.PlayerWidget(document.getElementById('mixcloud-placeholder'));
          widget.ready.then(function() {
            widget.load('zir/gaveteiro-1-andancas');
            widget.play();
          });

          break;
      }
    },
    pause: function(){
      player.isPlaying = false;
      switch(this.playlist[this.playlist_index].service){ // current player. = soundcloud, mixcloud, youtube
        case 'youtube':
          ytplayer.pauseVideo();
          break;
        case 'soundcloud':
          break;
        case 'mixcloud':
          var widget = Mixcloud.PlayerWidget(document.getElementById('mixcloud-placeholder'));
          widget.ready.then(function() {
            widget.pause();
          });
          break;
      }
    },
    stop: function(){
      player.isPlaying = false;
          var widget = Mixcloud.PlayerWidget(document.getElementById('mixcloud-placeholder'));
          widget.ready.then(function() {
            widget.stop();
          });
    }
};


function onYouTubeIframeAPIReady() {
    ytplayer = new YT.Player('video-placeholder', {
        width: 600,
        height: 400,
        videoId: 'Xa0Q0J5tOP0',
        ytplayerVars: {
            color: 'white'
        },
        events: {
            onReady: initialize
        }
    });
}

function initialize(){

    // Update the controls on load
    updateTimerDisplay();
    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000);


    $('#volume-input').val(Math.round(ytplayer.getVolume()));
}


// This function is called by initialize()
function updateTimerDisplay(){
    // Update current time text display.
    $('#current-time').text(formatTime( ytplayer.getCurrentTime() ));
    $('#duration').text(formatTime( ytplayer.getDuration() ));
}


// This function is called by initialize()
function updateProgressBar(){
    // Update the value of our progress bar accordingly.
    $('#progress-bar').val((ytplayer.getCurrentTime() / ytplayer.getDuration()) * 100);
}


// Progress bar

$('#progress-bar').on('mouseup touchend', function (e) {

    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    var newTime = ytplayer.getDuration() * (e.target.value / 100);

    // Skip video to new time.
    ytplayer.seekTo(newTime);

});


// Playback

$('#play-toggle').on('click', function () {
    var play_toggle = $(this);

    if(player.isPlaying){
        player.pause();
        play_toggle.text('play_arrow');
    } else {
        player.play();
        play_toggle.text('pause');
    }

});


// Sound volume


$('#mute-toggle').on('click', function() {
    var mute_toggle = $(this);

    if(ytplayer.isMuted()){
        ytplayer.unMute();
        mute_toggle.text('volume_up');
    }
    else{
        ytplayer.mute();
        mute_toggle.text('volume_off');
    }
});

$('#volume-input').on('change', function () {
    ytplayer.setVolume($(this).val());
});

// Playlist

$('#next').on('click', function () {
    player.nextVideo()
});

$('#prev').on('click', function () {
    player.previousVideo()
});


// Add to Playlist
$('.add-to-playlist').on('click', function () {
    $('#play-toggle').show();
    var url = $(this).attr('data-video-url');
    var service = $(this).attr('data-video-service');
    player.stop();
    player.playlist = []; // temporary
    player.playlist_index = 0;
    player.addToPlaylist({url, service});
    $('#play-toggle').trigger("click");
});


// Helper Functions

function formatTime(time){
    time = Math.round(time);

    var minutes = Math.floor(time / 60),
        seconds = time - minutes * 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ":" + seconds;
}

});
