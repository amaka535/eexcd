/*
Alis.io Mobile (Chatting and more)
By Zimek

Usage:
1.Go to alis.io on mobile
2.put in URL link:
javascript:$("head").append(`<script src="https://zimek.tk/alismobile.js?nocache=${Date.now()}"></script>`);
3.Hold input to write
enjoy*/

$("div#ad_main").remove(); //Adblock
setInterval(function() {
$(document).ready(function(){
$('#chatboxArea2').css({ "display": 'flex', "flex-direction": 'column'});});
}, 2000);
$("h3.uk-card-title").css("filter", "blur(8px)");
$(`<style>
#chatroom{height: 860px;margin-bottom: 70px;width: 620px;}
.msg{font-size: 27px;}
.sender{font-size: 27px;}
#input_box2{height: 55px;width: 500px;font-size: 27px;display: block;}
#mobilepanel{right:0;bottom: 0;position:absolute;padding: 10px;}
.big{height: 200px;width:200px;}
.medium{height: 150px;width:150px;}
.small{height: 100px;width:100px;}
.mediumtext{font-size: 30px;}
.bigtext{font-size: 40px;}
button{outline: none;}
#chatboxArea2{margin-right:200px;}
</style>`).appendTo("head")
$(`<div id="mobilepanel"><div>
<div style="float: left;margin-right: 5px;margin-bottom: 5px;"><button class="medium mediumtext" id="toggleGame">Toggle game</button></div>
<div style="float: right;margin-right: 5px;margin-bottom: 5px;"><button class="medium mediumtext" id="clearServer">Clear "SERVER"</button></div></div><br>
<div style="float: left;margin-right: 5px;margin-bottom:50px;"><button class="medium mediumtext" id="chatToggle"><img id="emojipanel" style="margin-top: 0px;cursor: pointer;" src="https://zimek-lmao.github.io/better-alis/resources/chat.png" width="100px"></button></div>
<div style="float: left;margin-right: 5px;margin-bottom:50px;"><button class="medium mediumtext" id="backToMenu">Back to menu</button></div></div>`).insertAfter("#div_lb")
//<button id="chatToggle" style="margin-left: 440px;position:absolute;background-color: transparent;border: 0px solid transparent;"><img id="emojipanel" style="margin-top: 0px;cursor: pointer;" src="https://zimek-lmao.github.io/better-alis/resources/chat.png" width="50px" height="50px"></button>
var feed = document.getElementById('feed');
var split = document.getElementById('split');


$(document).ready(function(){
    $("#backToMenu").click(function(){
        $("#overlays").show();
    });
    $("#clearServer").click(function(){
  $("div.coloredname:contains(SERVER)").remove();
    });
    $("#chatToggle").click(function(){
        $("#chatroom").toggle();
    });
    $("#toggleGame").click(function(){
        $("canvas").toggle();
    });
    });
