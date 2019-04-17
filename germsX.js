
var v = "0.2"


var res = "https://zimek.tk/BetterAlis/res"


$(`<style>
.btgSettingsText{fotn-size:25px;}
</style>
<link href="https://fonts.googleapis.com/css?family=Pattaya|Quicksand|Margarine" rel="stylesheet">
`).appendTo('head');

$("div.card.nodrag > div.row > div.col > div#ad-square").remove()
$("div.card.nodrag > div.row > div.col > h6").remove()

$("#menuCenter > div.card.nodrag > div.row > div.col").append(`<div id="btgMain">
<h5>Better Germs.io v${v} by Zimek</h5><br>
<div id="btgSettings">

</div>
</div>
`)



var emojis = {
  0.01:{"type":"default", "unicode":"😃", "name":"smile", "id":1},
  0.02:{"type":"default", "unicode":"🙂", "name":"smiling", "id":2},
  0.03:{"type":"default", "unicode":"😄", "name":"happy", "id":3},
  0.04:{"type":"default", "unicode":"🙁", "name":"sadface", "id":4},
  0.05:{"type":"default", "unicode":"😟", "name":"worried", "id":5},
  0.06:{"type":"default", "unicode":"😦", "name":"sad", "id":6},
  0.07:{"type":"default", "unicode":"😠", "name":"angry", "id":7},
  0.08:{"type":"default", "unicode":"😡", "name":"mad", "id":8},
  0.09:{"type":"default", "unicode":"😤", "name":"triumph", "id":9},
  0.10:{"type":"default", "unicode":"😑", "name":"expressionless", "id":10},
  0.11:{"type":"default", "unicode":"😐", "name":"neutral", "id":11},
  0.12:{"type":"default", "unicode":"😮", "name":"wow", "id":12},
  0.13:{"type":"default", "unicode":"😕", "name":"confused", "id":13},
  0.14:{"type":"default", "unicode":"😢", "name":"cry", "id":14},
  0.15:{"type":"default", "unicode":"😭", "name":"sob", "id":15},
  0.16:{"type":"default", "unicode":"😆", "name":"XD", "id":16},
  0.17:{"type":"default", "unicode":"😂", "name":"joy", "id":17},
  0.18:{"type":"default", "unicode":"😋", "name":"stuckout", "id":18},
  0.19:{"type":"default", "unicode":"🤔", "name":"thinking", "id":19},
  0.20:{"type":"default", "unicode":"😉", "name":"wink", "id":20},
  0.21:{"type":"default", "unicode":"😏", "name":"smirk", "id":21},
  0.22:{"type":"default", "unicode":"👌", "name":"ok", "id":22},
  0.23:{"type":"default", "unicode":"👍", "name":"up", "id":23},
  0.24:{"type":"default", "unicode":"👎", "name":"down", "id":24},
  0.25:{"type":"default", "unicode":"😑", "name":"expressionless", "id":25},
  0.26:{"type":"default", "unicode":"😒", "name":"unamused", "id":26},
  0.27:{"type":"default", "unicode":"🖕", "name":"mid", "id":27},
  0.28:{"type":"default", "unicode":"😔", "name":"pensive", "id":28},
  0.29:{"type":"default", "unicode":"😓", "name":"worriedsweat", "id":29},
  0.30:{"type":"default", "unicode":"😅", "name":"smilesweat", "id":30},
  0.31:{"type":"default", "unicode":"😶", "name":"nomouth", "id":31},
  0.32:{"type":"default", "unicode":"😱", "name":"omg", "id":32},
  0.33:{"type":"default", "unicode":"😎", "name":"cool", "id":33},
  0.34:{"type":"default", "unicode":"🤢", "name":"feelnotgood", "id":34},
  0.35:{"type":"default", "unicode":"😣", "name":"persever", "id":35},
  0.36:{"type":"default", "unicode":"😈", "name":"demon", "id":36},
  0.37:{"type":"default", "unicode":"🙄", "name":"rollingeyes", "id":37},
  0.38:{"type":"default", "unicode":"😩", "name":"weary", "id":38},
  0.39:{"type":"default", "unicode":"😍", "name":"loving", "id":39},
  0.40:{"type":"default", "unicode":"😘", "name":"kiss", "id":40},
  0.41:{"type":"default", "unicode":"👏", "name":"clap", "id":41},
  0.42:{"type":"default", "unicode":"👋", "name":"wave", "id":42},
  0.43:{"type":"default", "unicode":"❤️", "name":"heart", "id":43},
  0.44:{"type":"default", "unicode":"💔", "name":"broken", "id":44},
  0.45:{"type":"default", "unicode":"🙃", "name":"upside", "id":45},
  0.46:{"type":"default", "unicode":"😳", "name":"flushed", "id":46},
  0.47:{"type":"default", "unicode":"🤣", "name":"rofl", "id":47},
  0.48:{"type":"default", "unicode":"🤦", "name":"facepalm", "id":48},
  0.49:{"type":"default", "unicode":"🌹", "name":"rose", "id":49},
}


Object.values(emojis).forEach(emoji=>{
if(emoji.type === "default"){
var file = ".svg"
if(emoji.id == 47)file=".png";
  $("#emotesList").append(`
    <li class="emotesEmote" onclick="addEmote('${emoji.unicode}')"><img src="${res}/emojis/default/${emoji.id}${file}"></li>
    `)
}

});

$("#emotes").css({"width":"250px", "height":"280px"})





$("#chat_input").on("keyup", function() {
  var detected = $("#chat_input").val();
  for(var found in replacement){
    if(replacement.hasOwnProperty(found)){
      detected = detected.replace(found,replacement[found]);
    }
  }
  $(this).val(detected);
});

var replacement = {
    'a': 'а',
    'A': 'А',
    'o': 'о',
    'O': 'О',
    'e': 'е',
    'E': 'Е',
    's': 'ѕ',
    'S': 'Ѕ',
    'p': 'р',
    'P': 'Р',
    'c': 'с',
    'C': 'С',
};
