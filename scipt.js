 let result = document.getElementById("GFG");

    function changeColor(color) {
      document.body.style.background = color;
    }

    function myFunc() {
      changeColor('yellow');
      result.innerHTML = "Background Color changed";
    }  