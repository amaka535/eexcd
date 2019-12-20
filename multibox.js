var secondtab = false
var secondtabhidden = false

function hideTab(){
  $("#second-tab").fadeOut(100)
  secondtabhidden = true
  document.getElementById("canvas").focus()
}

if(location.search==="?tab2"){
  secondtab = true
  $("#app").append(`<span style="position:absolute;top:100;left:0;">TAB 2</iframe>`)
  $(document).keydown(function (e)
{
    var keycode1 = (e.keyCode ? e.keyCode : e.which);
    if (keycode1 == 9) {
        e.preventDefault();
        e.stopPropagation();
        parent.hideTab()
        parent.focus()
        parent.document.getElementById("canvas").focus()
    }
});
$("#starfield").hide()
} else {
  $(document).keydown(function (e)
{
    var keycode1 = (e.keyCode ? e.keyCode : e.which);
    if (keycode1 == 9) {
        e.preventDefault();
        e.stopPropagation();
        if(secondtabhidden){
          $("#second-tab").fadeIn(100)
          document.getElementById("second-tab").focus()
          document.getElementById("second-tab").contentWindow.document.getElementById("canvas").focus()
          secondtabhidden = false
        } else {
          secondtabhidden = true
          $("#second-tab").fadeOut(100)
        }
    }
});
$("#starfield").hide()
  $("body").append(`<iframe id="second-tab" src="https://vanis.io?tab2" style="width:100%;height:100%;position:absolute;top:0;left:0;" frameborder="0"></iframe>`)
  $("#app").append(`<span style="position:absolute;top:100;left:0;">TAB 1</iframe>`)
}
