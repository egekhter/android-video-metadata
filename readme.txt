Package:
cordova-plugin-video-metadata

Install:
save plugin to [app directory]/res/VideoMetadata
open cmd.exe
cd to app directory
cordova plugin add %CD%/res/VideoMetadata

Remove:
cordova plugin remove cordova-plugin-video-metadata

Use:
inside app.js:
    var filepath = "storage/emulated/0/video.mp4";
    VideoMetadata.get(filepath, function(success){
        //returns success as a json object with the following keys:
        //  display_name //display name
        //  mime_type //extension 
        //  size //file size in bytes
        //  duration //duration in ms
        //  resolution //resolution in XxY
        //  date_taken //date video was taken in ms from Jan 1, 1970
        //  data //path to file
    }, function(error){
        //code to execute if error occurs
    });