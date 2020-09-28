const showtoggle = (idname) =>{
  if ($("#" + idname).css("display") !== "none"){
    $("#" + idname).hide();
  }else{
    $("#" + idname).show();
  }
}


// reloj

setInterval(() => {
  let tiempo = new Date()
  $("#reloj").empty()
  let label = $("<label id = 'r'> </label>");
  label.append(
    tiempo.getHours() < 10 ? "0" + tiempo.getHours() : tiempo.getHours(),"::",
    tiempo.getMinutes() < 10 ? "0" + tiempo.getMinutes() : tiempo.getMinutes(),"::",
    tiempo.getSeconds() < 10 ? "0" + tiempo.getSeconds() : tiempo.getSeconds()
  );
  $("#reloj").append(label);
}, 1000);



