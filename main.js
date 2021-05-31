const fs = require("fs");
var defaultConf = "interface=wlan0\ndriver=nl80211\nchannel=6\nhw_mode=g\nmacaddr_acl=0\nauth_algs=1\nwpa=2\nwpa_passphrase=\"thisisntevenrealwifidude\"\nwpa_key_mgmt=WPA-PSK\nwpa_pairwise=TKIP\nrsn_pairwise=CCMP";

function getRandomName(filename, callback) {
    fs.readFile(filename, "utf-8", (err, data) => {
        if(err) {
            callback("FunFi - Error");
            throw err;
        }

        var lines = data.split("\n");

        var line = lines[Math.floor(Math.random()*lines.length)];

        callback(line);
    });
}

getRandomName("names.list", (name) => {
    console.log(name);
    defaultConf += "\nssid=" + name;
    fs.writeFileSync("funfi.conf", defaultConf);
});
