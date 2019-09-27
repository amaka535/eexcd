

if(localStorage.getItem("hypertionID") == 69){ //testing multiboxing
  $("body").append(`<iframe frameBorder="0" id="multiboxtab" src="https://dev.vanis.io/" style="display:none;x-index:99999;top:0;left:0;position: absolute;width:100%;height:100%;"></iframe>`)
setTimeout(function(){
  $(document).keydown(function(objEvent) {
      if (objEvent.keyCode == 9) {  //tab pressed
          objEvent.preventDefault(); // stops its action
      }
  })
  var iframeBody=$('#multiboxtab').contents().find('body');
iframeBody.attr('contenteditable', true);

  $(iframeBody).on('keyup',function(e) {
    if (e.which == 9) {
      e.preventDefault();
      if($("#multiboxtab").css("display") === "none"){
        $("#multiboxtab").fadeIn(140)
        $("#multiboxtab").trigger("focus")
      } else {
        $("body").trigger("focus")
        $("#multiboxtab").fadeOut(140)
      }
      }
    })

  document.onkeyup = function(e) {
    if (e.which == 9) {
      e.preventDefault();
      if($("#multiboxtab").css("display") === "none"){
        $("#multiboxtab").fadeIn(140)
        $("#multiboxtab").trigger("focus")
      } else {
        $("body").trigger("focus")
        $("#multiboxtab").fadeOut(140)
      }
    }
  };
},2000)
}
