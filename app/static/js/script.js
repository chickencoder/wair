var files = ["brussels",
             "london2",
             "london",
             "madrid"];

var rfile = files[Math.floor(Math.random() * files.length)];
$("#background").attr("style", "background: url(assets/" + rfile + ".jpg);");
