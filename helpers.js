// ==UserScript==
// @name        Alis Hacks UID/PID
// @version     1.0
// @description Get players UID and PID on click
// @author      Zimek
// @match       http://alis.io/*
// @run-at      document-end
// @grant       none
// @namespace   Alis
// ==/UserScript==

// define levels of hackery
var playerSettings = {};


/* List of server-wide changes:
Coming soon...
*/
// Counter to roll through levels of hackery (index = nextHack modulous hackCount)
var nextHack = 1;

// Mass toggle values
var massToggle = [2000,18000];
var nextMass = 1;

// Add the dom elements we want to display information in
$(function() {
    // Fix the max length for the skin url box
    $("#skinurl").attr('maxlength','600');
    // Add the hack div to the overlay2 div
    $('#overlays2').append('<div id="hackdiv" style="position: absolute; top: 100px; left: 19px; color: #fff;"></div>');
    // add player id, target id, status, and hotkeys to the hack div
    $('#hackdiv').append('Your PID: <span style="font-weight: bold;" id="yourplayerid"></span><br>');
    $('#hackdiv').append('Target Name: <span style="font-weight: bold;" id="targetname"></span><br>');
    $('#hackdiv').append('Target PID: <span style="font-weight: bold;" id="targetplayerid"></span><br>');
    $('#hackdiv').append('Target UID: <span style="font-weight: bold;" id="targetuid"></span><br>');

// make greeb sad
    $("iframe").remove();
    $("video").remove();
    $("#ad_main").remove();
});

// Wrapper to send commands
function sendHack(command) {
    //console.log('SENDING: ' + command);
    window.sendChat(command);
}

// Wrapper to send commands targeting to player(s)
function sendTargetHack(command, targets, params) {
    // If params is an array, join it with spaces
    if (Array.isArray(params)) {
        params = params.join(' ');
    }
    // if the targets are an array, send it to multiple targets
    if (Array.isArray(targets)) {
        for(var target in targets) {
            sendHack('/' + command + ' ' + targets[target] + ' ' + params);
        }
    } else {
        sendHack('/' + command + ' ' + targets + ' ' + params);
    }
}
window.sendHack = function (command, params) { sendTargetHack(command, JSON.parse($('#targetplayerid').html()), params); };

// helper for console fuckery
window.setAll = function(key, value) {
    // Get the json targets on our target player id list
    var targets = JSON.parse($('#targetplayerid').html());
    sendTargetHack('set', targets, [ key, value ]);
};

// Update our player ID every few seconds
var updateMyID = setInterval(function(){
    sendHack('/getmyid');
}, 10 * 1000);

// Keypress handler
function keydown(event) {
    //console.log(event); // for debugging
    // Do not process keypress events NOT on the body element itself
    if(event.target.nodeName != "BODY") {
       return;
    }
    var command = '';

    // if we dont know our player id, request it
    if (!$('#yourplayerid').html()) {
        sendHack('/getmyid');
    }
}

// Get target cell ID
function getClosestCellID(X, Y) {
    $('#hackstatus').html('searching for cell id near mouse ' + X + ',' + Y);
    var cells = window.allCells;

    // Loop through all the cells and extract JUST the players
    var playerCells = [];
    for (var i in cells) {
        var playerCell = cells[i];
        // Ignore food pellets & tiny cells
        if (playerCell.isFood || playerCell.size < 35) {
            continue;
        }
        // F is old agarplus obfuscated isVirus flag
        if (playerCell.f || playerCell.isVirus) {
            continue;
        }
        // Calculate the x and y distances
        var distx = playerCell.x - X;
        var disty = playerCell.y - Y;
        // calculates distance between two X,Y points
        var distance = Math.sqrt( Math.pow(distx, 2) + Math.pow(disty, 2) );
        // save our player cell info
        var razorCell = {};
        razorCell.id = i;
        razorCell.name = playerCell.name;
        razorCell.distance = distance;
        razorCell.size = playerCell.size;
        razorCell.x = playerCell.x;
        razorCell.y = playerCell.y;
        playerCells.push(razorCell);
    }
    // Sort the cells by distance ascending
    playerCells.sort(function (a, b) { return a.distance - b.distance; });
    //console.log('closest player identified: ');
    //console.table(playerCells.slice(0, 1));
    if (playerCells.length) {
        return playerCells[0].id;
    } else {
        return 0;
    }
}

// left Mouse click handler
function leftMouseClick()
{
    var cellid = getClosestCellID(mouseX, mouseY);
    if (cellid) {
        $('#hackstatus').html('requested player id of cell ' + cellid);
        var cell = window.allCells[cellid];
        if(cell.pid < 100)return;
        if(cell.extra && cell.extra.pid) {
            $('#targetplayerid').html(JSON.stringify(cell.extra.pid));
            $('#hackstatus').html('target player switched to ' + $('#targetplayerid').html());

setTimeout(function(){
            let hackName = window.playerDetails[$("#targetplayerid").html()].name;
            let hackUID = window.playerDetails[$("#targetplayerid").html()].uid;


if(!hackName){hackName = "Unnamed"};
if(!hackUID){hackUID = "No account"};

        document.getElementById('targetname').innerHTML = hackName;
        document.getElementById('targetuid').innerHTML = hackUID;
}, 500)
        } else {
            $('#hackstatus').html('unable to get player id of cell ' + cellid);
        }
    }else{
        $('#hackstatus').html('could not get closest cell id');
    }
}
// middle Mouse click handler
function middleMouseClick()
{
    $('#hackstatus').html('setting target to all CELL IDs');
    // make sure to update the player list when doing this
    playerlist = [];
    command = "/playerlist";
    sendHack(command);
    setTimeout(function() {
        var playerIDs = [];
        for (var key in playerlist) {
            // Skip adding OURSELVES to the middle mouse click list
            if(playerlist[key].id == $('#yourplayerid').html()) {
                continue;
            }
            playerIDs.push(playerlist[key].id);
        }
        if (playerIDs.length) {
            $('#targetplayerid').html(JSON.stringify(playerIDs));
        } else {
            $('#hackstatus').html('Error updating player IDs');
        }
    }, 600);
}

// Add the event listener for key press events
$("body").keydown(keydown);
//window.addEventListener('keyup', keyup);
$("#overlays2").on('mousedown', function(event) {
    //console.log("mouse click event on overlays2 " + event.which);
    //console.log(event);
    if( event.which == 1 ) {
        //event.preventDefault();
        leftMouseClick();
    }
    if( event.which == 2 ) {
        event.preventDefault();
        //middleMouseClick();
    }
});

// global vars to keep stuff in for reference
playerlist = [];
commandlist = [];
playerdetails = [];

// handle server responses to our queries
onMultiChat = function(user, message) {
    if(user == 'SERVER' && message[0] == '/') {
        // remove the leading / and split command at the ": " response
        var split = message.slice(1, message.length).split(': ');
        var command = split[0];
        // remove the command we saved and recombine the array for parsing
        split.splice(0,1);
        var response = split.join().trim();
        // we got an OK response from a command
        if(command == 'ok') { return; }
        // We got our ID back from the server
        if(command == 'playerid') {
            $('#yourplayerid').html(response);
            return;
        }
        // List of supported commands
        if(command == 'commands') {
            commandlist = JSON.parse(response);
            console.log(commandlist);
            return;
        }
        // We got a list of all players from the server
        if(command == 'playerlist') {
            playerlist = JSON.parse(response);
            console.table(playerlist);
            return;
        }
        // We got the servers current configuration
        if(command == 'config') {
            config = JSON.parse(response);
            console.log(config);
            return;
        }
        // We got playerDetails for a client
        if(command == 'playerdetails') {
            playerdetails = JSON.parse(response);
            console.log(playerdetails);
            return;
        }
    }
};
