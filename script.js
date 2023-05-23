document.getElementById("btn").onclick = function(){
      c = document.getElementById("cel").value;
      c = Number(c)

      f = (9*c + 160)/5;
      document.getElementById("fer").innerHTML = `${c}°C = ${f}°F`
}

document.getElementById("btn1").onclick = function(){
      f = document.getElementById("celc").value;
      f = Number(f)

      c = (5*f - 160)/9;
      document.getElementById("ferh").innerHTML = `${f}°F = ${c}°C`
}
