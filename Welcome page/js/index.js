$("#navi_switch").click(function()
  {
    $("#navi_bar").removeClass("navi_off");
    $("#navi_bar").addClass("navi_on");
  })

$("section").click(function()
  {
    $("#navi_bar").removeClass("navi_on");
    $("#navi_bar").addClass("navi_off");
  })