// ==UserScript==
// @name         Germs.io AFK system
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  farm your xp
// @author       Zimek
// @match        https://germs.io/*
// @grant        none
// ==/UserScript==

function main() {

function Split() {
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32}));
}

$(`
  <label><input id="afking" type="checkbox" style="margin-top: 3px;width:20px;height:20px"> AFK Respawn</label><br>
  `).appendTo("#shopTabVeteran > ul");

  var gay = $(`<button id="stopAFK" class="btn btn-primary" style="padding:20px;margin-bottom:300px;">Disable AFK</button>`)

    var afk = document.getElementById("afking")

afk.onclick = function () {

var afkSpawn = setInterval(function(){
gay.insertAfter("#tabs")
if(afk.checked){$("#play").click()}
}, 5000)

var afkMove = setInterval(function(){
  if(afk.checked){
  var x = Math.floor(Math.random() * (+3000 - -3000) + -3000)
  var y = Math.floor(Math.random() * (+3000 - -3000) + -3000)
  $("canvas").trigger($.Event("mousemove", {clientX: x, clientY: y}));

}
}, 16000)

/*
var afkSplit = setInterval(function(){
  if(afk.checked){
  Split()
}
}, 50000)
*/
}

$(document).ready(function(){
    gay.click(function(){
        afk.checked = false
        clearInterval(afkSpawn)
        clearInterval(afkMove)
      //  clearInterval(afkSplit)

    });});





}

setTimeout(main, 3000)
