(function () {
    var a = document.getElementById("num1");
    var b = document.getElementById("num2");
    document.getElementById("add").addEventListener("click", adding);

    function adding() {
        var c = parseInt(a.value) + parseInt(b.value);
        document.getElementById("result").value=c;
    }
    document.getElementById("subtract").addEventListener("click", subtraction);
    function subtraction() {
        var d = parseInt(a.value) - parseInt(b.value);
        document.getElementById("result").value=d;
    }
    document.getElementById("multiply").addEventListener("click", multiplication);
    function multiplication() {
        var e = parseInt(a.value) * parseInt(b.value);
        document.getElementById("result").value=e;
    }
    document.getElementById("divison").addEventListener("click", division);
    function division() {
        var f = parseInt(a.value) / parseInt(b.value);
        document.getElementById("result").value=f;
    }
    document.getElementById("modulus").addEventListener("click", modulus);
    function modulus() {
        var g = parseInt(a.value) % parseInt(b.value);
        document.getElementById("result").value=g;
    }
    document.getElementById("exponential").addEventListener("click", exponential);
    function exponential() {
        var h = parseInt(a.value) ** parseInt(b.value);
        document.getElementById("result").value=h;
    }
})();