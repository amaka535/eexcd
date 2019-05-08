// ==UserScript==
// @name         Germs.io AFK system
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Go to reedem thing. Select box "AFK farming" and go somewhere and leave pc with this on. be unnamed to be anonymous
// @author       Zimek
// @match        https://germs.io/*
// @grant        none
// ==/UserScript==



//go fuck yourself stas fucking dickhead

function stasDickhead() {

function gayness() {
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32}));
}
$(`
  <label><input id="eded" type="checkbox" style="margin-top: 3px;width:20px;height:20px"> AFK farming</label><br>
  `).appendTo("#loginCustomLocked");

  var aha = $(`<button class="btn btn-primary" style="padding:20px;margin-bottom:300px;">Disable Farming</button>`)

    var eW = document.getElementById("eded")

eW.onclick = function () {

var afkSpawn = setInterval(function(){
aha.insertAfter("#tabs")
if(eW.checked){document.getElementById("play").click()}
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

setTimeout(stasDickhead, 3000)
