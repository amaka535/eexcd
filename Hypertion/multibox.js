if(localStorage.getItem("hypertionID") == 69){ //testing multiboxing
  $("body").append(`<iframe frameBorder="0" id="multiboxtab" src="https://dev.vanis.io/" style="display:none;x-index:99999;top:0;left:0;position: absolute;width:100%;height:100%;"></iframe>`)
setTimeout(function(){
  var iframeBody=$('#multiboxtab').contents().find('body');
  var iframe = $("#multiboxtab")[0]
  $(document).keydown(function(objEvent) {
      if (objEvent.keyCode == 9) {  //tab pressed
          objEvent.preventDefault(); // stops its action
      }
  })
  $('#multiboxtab').on('keyup',function(e) {
    if (e.which == 9) {
      e.preventDefault();
      if($("#multiboxtab").css("display") === "none"){
        $("#multiboxtab").show()
      } else {
        $("#multiboxtab").hide()
      }
      }
    })

  document.onkeyup = function(e) {
    if (e.which == 9) {
      e.preventDefault();
      if($("#multiboxtab").css("display") === "none"){
        $("#multiboxtab").show()
      } else {
        $("#multiboxtab").hide()
      }
    }
  };
},2000)
}
