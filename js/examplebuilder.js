document.getElementById("settings").addEventListener("click", function(){
  document.getElementById("form-settings-options").classList.toggle("hide");
  buildExample();
});

document.getElementById("style").addEventListener("click", function(){
  document.getElementById("form-settings-style").classList.toggle("hide");
  buildExample();
});

document.getElementById("message").addEventListener("input", function(){
  buildExample();
});

document.getElementById("type").addEventListener("input", function(){
  buildExample();
});

document.getElementById("dismiss").addEventListener("input", function(){
  buildExample();
});

document.getElementById("callback").addEventListener("input", function(){
  buildExample();
});

document.getElementById("time").addEventListener("input", function(){
  buildExample();
});

document.getElementById("animate").addEventListener("input", function(){
  buildExample();
});

document.getElementById("color").addEventListener("input", function(){
  buildExample();
});

document.getElementById("bgcolor").addEventListener("input", function(){
  buildExample();
});

document.getElementById("border").addEventListener("input", function(){
  buildExample();
});

document.getElementById("width").addEventListener("input", function(){
  buildExample();
});

document.getElementById("paddingtop").addEventListener("input", function(){
  buildExample();
});

document.getElementById("paddingleft").addEventListener("input", function(){
  buildExample();
});

document.getElementById("paddingright").addEventListener("input", function(){
  buildExample();
});

document.getElementById("paddingbottom").addEventListener("input", function(){
  buildExample();
});

document.getElementById("margintop").addEventListener("input", function(){
  buildExample();
});

document.getElementById("marginleft").addEventListener("input", function(){
  buildExample();
});

document.getElementById("marginright").addEventListener("input", function(){
  buildExample();
});

document.getElementById("marginbottom").addEventListener("input", function(){
  buildExample();
});

document.getElementById("zindex").addEventListener("input", function(){
  buildExample();
});

function buildExample() {
  var start = "jsAlert.";
  if(!document.getElementById("form-settings-options").classList.contains("hide")) {
    var type = document.getElementById("type").options[document.getElementById("type").selectedIndex].value;
    if(type == "default") {
      type = "Alert";
    }
  }
  else
  {
    var type = "Alert";
  }
  var parameterStart = "(";
  var messageParameterStart = "'";
  var message = document.getElementById("message").value;
  var messageParameterEnd = "'";

  if(document.getElementById("form-settings-options").classList.contains("hide")) {
    var parameterEnd = ");";
    result = start + type + parameterStart + messageParameterStart + message + messageParameterEnd + parameterEnd;
    showResult(result);
  }
  else
  {
    var parameterEnd = ");";
    var settingParameterStart = ", {";
    var settingParameterEnd = "}";
    result = start + type + parameterStart + messageParameterStart + message + messageParameterEnd + settingParameterStart;

    var dismiss = document.getElementById("dismiss").options[document.getElementById("dismiss").selectedIndex].value;
    if(dismiss != "default") {
      result += "dismiss: " + dismiss + ", ";
    }

    var callback = document.getElementById("callback").value;
    if(callback != "") {
      result += "callback: " + callback + ", ";
    }

    var time = document.getElementById("time").value;
    if(time != "") {
      result += "time: '" + time + "', ";
    }

    var animate = document.getElementById("animate").options[document.getElementById("animate").selectedIndex].value;
    if(animate != "default") {
      result += "animate: " + animate + ", ";
    }
    if(document.getElementById("form-settings-style").classList.contains("hide")) {
      result += settingParameterEnd + parameterEnd;
      showResult(result);
    }
    else
    {

      var styleStart = "{"
      result += "style: " + styleStart;

      var color = document.getElementById("color").value;
      if(color != "") {
        result += "color: '" + color + "', ";
      }

      var bgcolor = document.getElementById("bgcolor").value;
      if(bgcolor != "") {
        result += "bgcolor: '" + bgcolor + "', ";
      }

      var border = document.getElementById("border").value;
      if(border != "") {
        result += "border: '" + border + "', ";
      }

      var width = document.getElementById("width").value;
      if(width != "") {
        result += "width: '" + width + "', ";
      }

      var paddingtop = document.getElementById("paddingtop").value;
      if(paddingtop != "") {
        result += "paddingtop: '" + paddingtop + "', ";
      }

      var paddingleft = document.getElementById("paddingleft").value;
      if(paddingleft != "") {
        result += "paddingleft: '" + paddingleft + "', ";
      }

      var paddingright = document.getElementById("paddingright").value;
      if(paddingright != "") {
        result += "paddingright: '" + paddingright + "', ";
      }

      var paddingbottom = document.getElementById("paddingbottom").value;
      if(paddingbottom != "") {
        result += "paddingbottom: '" + paddingbottom + "', ";
      }

      var margintop = document.getElementById("margintop").value;
      if(margintop != "") {
        result += "margintop: '" + margintop + "', ";
      }

      var marginleft = document.getElementById("marginleft").value;
      if(marginleft != "") {
        result += "marginleft: '" + marginleft + "', ";
      }

      var marginright = document.getElementById("marginright").value;
      if(marginright != "") {
        result += "marginright: '" + marginright + "', ";
      }

      var marginbottom = document.getElementById("marginbottom").value;
      if(marginbottom != "") {
        result += "marginbottom: '" + marginbottom + "', ";
      }

      var zindex = document.getElementById("zindex").value;
      if(zindex != "") {
        result += "zindex: '" + zindex + "', ";
      }

      var styleEnd = "},";
      result += settingParameterEnd + styleEnd + parameterEnd;
      showResult(result);
    }
  }
}

function showResult(result) {
  document.getElementById("result").value = result;
  document.getElementById( "test" ).setAttribute( "onClick", "javascript: " + result);
}

function testAlert() {
  jsAlert.Alert("Hey");
}
