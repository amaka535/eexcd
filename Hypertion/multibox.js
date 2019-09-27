

if(localStorage.getItem("hypertionID") == 69){ //testing multiboxing
  $("body").append(`<iframe frameBorder="0" id="multiboxtab" src="https://dev.vanis.io/" style="display:none;x-index:99999;top:0;left:0;position: absolute;width:100%;height:100%;"></iframe>`)
setTimeout(function(){
  $(document).keydown(function(objEvent) {
      if (objEvent.keyCode == 9) {  //tab pressed
          objEvent.preventDefault(); // stops its action
      }
  })
  var iframeBody=$('#multiboxtab').contents().find('body');

  $(iframeBody).on('keyup',function(e) {
    if (e.which == 9) {
      e.preventDefault();
      if($("#multiboxtab").css("display") === "none"){
        $("#multiboxtab").fadeIn(50)
        iframeBody.focus()
      } else {
        $("#multiboxtab").fadeOut(50)
        document.getElementsByTagName('body').focus()
      }
      }
    })

  document.onkeyup = function(e) {
    if (e.which == 9) {
      e.preventDefault();
      if($("#multiboxtab").css("display") === "none"){
        $("#multiboxtab").fadeIn(50)
        iframeBody.focus()
      } else {
        $("#multiboxtab").fadeOut(50)
        document.getElementsByTagName('body').focus()
      }
    }
  };
},2000)
}
