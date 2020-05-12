var exec = require('cordova/exec');

function plugin() {

}

plugin.prototype.get = function(filepath, success, error) {
    exec(success, error, "VideoMetadata", "get", [filepath]);
}

module.exports = new plugin();