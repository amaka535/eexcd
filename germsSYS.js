// ==UserScript==
// @name         Germs.io AFK system
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  farm your xp
// @author       Zimek
// @match        https://germs.io/*
// @grant        none
// ==/UserScript==

//go fuck yourself stas fuckign dickhead
//your own fault you banned us bitch if not this we wouldnt make it

function main() {

function Split() {
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32}));
}
$(`
  <label><input id="eded" type="checkbox" style="margin-top: 3px;width:20px;height:20px"> Farm XP</label><br>
  `).insertAfter("#loginCustomLocked");

  var aha = $(`<button class="btn btn-primary" style="padding:20px;margin-bottom:300px;">Disable Farming</button>`)

    var eW = document.getElementById("eded")

eW.onclick = function () {

var afkSpawn = setInterval(function(){
aha.insertAfter("#tabs")
if(eW.checked){$("#play").click()}
}, 5000)

var afkMove = setInterval(function(){
  if(eW.checked){
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
    aha.click(function(){
        eW.checked = false
        clearInterval(afkSpawn)
        clearInterval(afkMove)
      //  clearInterval(afkSplit)

    });});





}

setTimeout(main, 3000)
