// Config

$("#users").remove()
var getUsers = $.get(`https://zimek.tk/BetterAlis/BetterAlis.users.json?nocache=${Math.random()}`);
var users
setTimeout(function(){users = getUsers.responseJSON}, 3000)


// Hats
var sickCrown = [{"x":"-2","y":"-2","url": "https://i.imgur.com/5jYUav5.png" },{"x":"0","y":"-2","url": "https://i.imgur.com/b6uYi62.png" }];
var crown = "http://alis.io/assets/img/crownhat.png";
var dildo = "https://nosx.cf/dildo.png";
var tRex = "https://cdn.discordapp.com/attachments/283249356415696896/464991723345674260/nrz_hat.png";
var imNoob = "https://i.imgur.com/KnJUiXJ.png";
var noob = "http://gaver.io/hats/noob.png";
var cat = "http://gaver.io/hats/cat.png";
var suckcat = "http://alis.io/assets/img/cathat.png";
var santa = "http://gaver.io/hats/santa.png";
var fancy = "http://gaver.io/hats/fancy.png";
var trolCrown = "http://gaver.io/hats/troll.png";
var xaz = "http://gaver.io/hats/xaz.png";
var nonName = ""

// Run
function upgradeBta() {
  sendChat("/getmyid")
  Object.values(users).forEach(user=>{
    Object.values(playerDetails).forEach(player=>{
var isSkinForced = false
if(user.showSkinForEveryone){
  if(player.uid == user.uid)player.isAdmin=true;
}
if(player.pid==window.playerid)player.isAdmin=true;
if(user.customImages){
  if(player.uid == user.uid)player.customImages=user.customImages;
}

if(btaEnemyNames.checked){
  if(player.teamHash !== playerDetails[playerid].teamHash)player.name=nonName
}

if(user.customImg){
  if(player.uid == user.uid)player.customImages=[{"x":-2,"y":-2,"url":user.customImg[0]},{"x":0,"y":-2,"url":user.customImg[1]},{"x":-2,"y":0,"url":user.customImg[2]},{"x":0,"y":0,"url":user.customImg[3]}];
}

if(user.skin){
  if(player.uid == user.uid)player.skinUrl=user.skin;
  if(userid==user.uid){isSkinForced = true;
$("#skinurl").val(user.skin)
  }
}

if(user.hat){
  if(player.pid == window.playerid){
    if(btaHat.checked){
player.hat = btaHatVal.value
    } else {
      if(player.uid == user.uid)player.hat=user.hat;
    }
  } else {
  if(player.uid == user.uid)player.hat=user.hat;
}
}

if(user.numSides){
if(player.uid == user.uid)player.numSides=user.numSides
}

if(btaCellWalls.checked){
if(btaWalls.value == 1){if(player.pid==window.playerid)player.numSides=0}else{
if(player.pid==window.playerid)player.numSides=btaWalls.value}}

if(player.pid == window.playerid && btaHideOwnSkin.checked)player.skinUrl=""

if(user.ejectMass){

if(user.ejectMass.color){
  if(player.uid == user.uid){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].color={"r":user.ejectMass.color[0], "g":user.ejectMass.color[1], "b":user.ejectMass.color[2]}}
}

if(user.ejectMass.numSides){
  if(player.uid == user.uid){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].numSides=user.ejectMass.numSides}
}

if(user.ejectMass.skin){
  if(player.uid == user.uid){var ejectPid=player.pid-player.pid-player.pid; window.playerDetails[ejectPid].skinUrl=user.ejectMass.skin}
}
}

if(btaPskin.checked && btaHideOwnSkin.checked == false && isSkinForced == false){
  if(player.pid == window.playerid)player.skinUrl=btaPrivSkin.value;
}

if(user.cellColor){
  if(player.pid == window.playerid){
    if(btaCCcell.checked){
if(btacc==="nan")ccRGB(btaCellColor.value);
      player.color=btacc;
    } else {
      if(player.uid == user.uid)player.color={"r":user.cellColor[0], "g":user.cellColor[1], "b":user.cellColor[2]};
    }
  } else {
  if(player.uid == user.uid)player.color={"r":user.cellColor[0], "g":user.cellColor[1], "b":user.cellColor[2]};
}
}


  });
  });
}

//Running
setInterval(function() {
$(document).ready(function(){
if(isJoinedGame || spectateMode){upgradeBta()}
})
}, 5000);


//Animated skin by Zimek
/*
var userUID = 124276
var speed = 100
var frames = 23
var url1 = "https://zimek.tk/askin3/"
var url2 = ".gif"
var count = 1


//run
setInterval(function(){
    if(count > frames){count=1}
    var url = `${url1}${count}${url2}`
Object.values(playerDetails).forEach(player=>{
if(player.uid==userUID)player.skinUrl=url
});
count = count + 1;
}, speed)
*/
