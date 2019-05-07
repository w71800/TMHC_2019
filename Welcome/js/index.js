$(".navi_switch").click(function()
  {
    $("#navi_bar").removeClass("navi_off");
    $("#navi_bar").addClass("navi_on");
  })

$("section").click(function()
  {
    $("#navi_bar").removeClass("navi_on");
    $("#navi_bar").addClass("navi_off");
  })

// $(".list_fold").click(function()
//   {
//     $(this).removeClass("list_fold")
//     $(this).addClass("list_expand")
//   })
// $(".list_expand").click(function()
//   {
//     $(this).removeClass("list_expand")
//     $(this).addClass("list_fold")
//   })