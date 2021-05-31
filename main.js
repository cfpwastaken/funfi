const fs = require("fs");
require("dotenv").config();
var defaultConf = "interface=wlan0\ndriver=nl80211\nchannel=6\nhw_mode=g\nmacaddr_acl=0\nauth_algs=1\nwpa=2\nwpa_passphrase=\"thisisntevenrealwifidude\"\nwpa_key_mgmt=WPA-PSK\nwpa_pairwise=TKIP\nrsn_pairwise=CCMP";

var lists = process.env.LISTS;
lists = lists.split(" ");
console.log("Chosen lists: " + lists);

var bigList = [];

if(lists.length == 0) {
    bigList.push("FunFi - No Lists");
}

function addRandomNames(filename) {
    try {
        var names = fs.readFileSync(filename, "utf-8");
        names = names.split("\n");
        names = names.filter((item) => {
            return item.indexOf("#") !== 0;       // Remove Comments that start with a #
        });

        for (let i in names) { bigList.push(names[i]); }
    } catch(e) {
        bigList.push("FunFi - Error");
        throw e;
    }
}

console.log("Reading lists...");

for(let i in lists) {
    addRandomNames("lists/" + lists[i] + ".list");
}

console.log("Done!");
console.log("Writing to new config and passing over to hostapd...");
var name = bigList[Math.floor(Math.random()*bigList.length)];
console.log("Random name: " + name);
defaultConf += "\nssid=" + name;
fs.writeFileSync("funfi.conf", defaultConf);